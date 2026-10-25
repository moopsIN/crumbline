/**
 * Crumbline shared client code, loaded with `defer` on every page.
 *
 * Only what several components need lives here: the Section Rendering API
 * helper, the namespaced event names, the <crumbline-toast> element and the
 * cart (add/change plus the product-form submit handler).
 * Component-specific code stays in each component's {% javascript %} tag.
 *
 * Public API: window.Crumbline.{ EVENTS, fetchSections, toast, cart }
 */
(() => {
  const EVENTS = Object.freeze({
    cartUpdated: 'crumbline:cart:updated',
    variantChanged: 'crumbline:variant:changed',
    toast: 'crumbline:toast',
  });

  /**
   * Renders sections server-side for a URL and returns their HTML keyed by id.
   * @param {string[]} ids - Section ids, e.g. ['cart-drawer', 'header']
   * @param {string} [url] - Page to render them for; defaults to the current page
   * @returns {Promise<Record<string, string>>}
   */
  async function fetchSections(ids, url = window.location.pathname) {
    const target = new URL(url, window.location.origin);
    target.searchParams.set('sections', ids.join(','));
    const response = await fetch(target, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`Section rendering failed (${response.status})`);
    return response.json();
  }

  /**
   * Shows a toast message.
   * @param {string} message
   * @param {{ label: string, url: string }} [action] - Optional link shown after the message
   */
  function toast(message, action) {
    document.dispatchEvent(new CustomEvent(EVENTS.toast, { detail: { message, action } }));
  }

  /**
   * A polite live region that shows one message at a time for 4 seconds,
   * pausing while hovered or focused. Stays in the DOM (never `hidden`) so
   * screen readers already know the live region when a message arrives.
   */
  class CrumblineToast extends HTMLElement {
    #timer = 0;
    #remaining = 0;
    #startedAt = 0;

    connectedCallback() {
      this.setAttribute('role', 'status');
      document.addEventListener(EVENTS.toast, this.#onToast);
      this.addEventListener('pointerenter', this.#pause);
      this.addEventListener('focusin', this.#pause);
      this.addEventListener('pointerleave', this.#resume);
      this.addEventListener('focusout', this.#resume);
    }

    disconnectedCallback() {
      document.removeEventListener(EVENTS.toast, this.#onToast);
      clearTimeout(this.#timer);
    }

    #onToast = (event) => {
      const { message, action } = event.detail;
      const text = document.createElement('p');
      text.className = 'toast__message';
      text.textContent = message;
      const parts = [text];
      if (action?.url) {
        const link = document.createElement('a');
        link.className = 'toast__action';
        link.href = action.url;
        link.textContent = action.label;
        parts.push(link);
      }
      this.replaceChildren(...parts);
      this.dataset.open = '';
      this.#start(4000);
    };

    #start(duration) {
      clearTimeout(this.#timer);
      this.#remaining = duration;
      this.#startedAt = Date.now();
      this.#timer = setTimeout(() => this.#close(), duration);
    }

    #pause = () => {
      clearTimeout(this.#timer);
      this.#remaining -= Date.now() - this.#startedAt;
    };

    #resume = () => {
      if (!('open' in this.dataset) || this.contains(document.activeElement)) return;
      this.#start(Math.max(this.#remaining, 1500));
    };

    #close() {
      delete this.dataset.open;
      this.replaceChildren();
    }
  }

  if (!customElements.get('crumbline-toast')) customElements.define('crumbline-toast', CrumblineToast);

  /** POSTs to the Cart API and throws the API's own message on failure. */
  async function request(url, body, json) {
    const response = await fetch(url, {
      method: 'POST',
      headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest', ...(json ? { 'Content-Type': 'application/json' } : {}) },
      body: json ? JSON.stringify(body) : body,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.status) throw new Error(data.description || data.message || response.statusText);
    return data;
  }

  /**
   * Cart: add and change through the AJAX Cart API, asking Shopify to render
   * every section that shows cart state in the same request (bundled section
   * rendering), then swapping their [data-cart-region] parts in place.
   */
  const cart = {
    /** Ids of sections on this page that show cart state (max 5 per request). */
    sectionIds() {
      const ids = new Set();
      document.querySelectorAll('[data-cart-region]').forEach((region) => {
        const section = region.closest('.shopify-section');
        if (section) ids.add(section.id.replace('shopify-section-', ''));
      });
      return [...ids].slice(0, 5);
    },

    render(sections) {
      if (!sections) return;
      Object.entries(sections).forEach(([id, html]) => {
        const section = document.getElementById(`shopify-section-${id}`);
        if (!section || !html) return;
        const fresh = new DOMParser().parseFromString(html, 'text/html');
        section.querySelectorAll('[data-cart-region]').forEach((region) => {
          const match = fresh.querySelector(`[data-cart-region="${region.dataset.cartRegion}"]`);
          if (match) region.replaceWith(match);
        });
      });
    },

    async add(formData) {
      formData.append('sections', this.sectionIds().join(','));
      formData.append('sections_url', window.location.pathname);
      const data = await request(`${window.Shopify?.routes?.root ?? '/'}cart/add.js`, formData, false);
      this.render(data.sections);
      document.dispatchEvent(new CustomEvent(EVENTS.cartUpdated, { detail: { source: 'add', item: data } }));
      return data;
    },

    async change(line, quantity) {
      const data = await request(
        `${window.Shopify?.routes?.root ?? '/'}cart/change.js`,
        { line, quantity, sections: this.sectionIds(), sections_url: window.location.pathname },
        true
      );
      this.render(data.sections);
      document.dispatchEvent(new CustomEvent(EVENTS.cartUpdated, { detail: { source: 'change', cart: data } }));
      return data;
    },
  };

  /* Product and quick-add forms add to the basket without leaving the page. */
  document.addEventListener('submit', async (event) => {
    const form = event.target;
    if (!form.matches('[data-product-form], [data-quick-add]')) return;
    if (event.submitter?.name === 'checkout') return;
    event.preventDefault();
    const buttons = [...document.querySelectorAll(`button[type="submit"][form="${form.id}"]`), ...form.querySelectorAll('button[type="submit"]')];
    buttons.forEach((button) => button.setAttribute('aria-busy', 'true'));
    const messages = document.querySelector('crumbline-toast')?.dataset ?? {};
    try {
      const item = await cart.add(new FormData(form));
      if (!document.querySelector('cart-drawer')) {
        toast(messages.added?.replace('__TITLE__', item.product_title) ?? item.product_title, { label: messages.view ?? '', url: window.Shopify?.routes?.root ? `${window.Shopify.routes.root}cart` : '/cart' });
      }
    } catch (error) {
      toast(`${messages.error ?? ''} ${error.message}`.trim());
    } finally {
      buttons.forEach((button) => button.removeAttribute('aria-busy'));
    }
  });

  /* Dates written by Liquid use English names; show them in the page language. */
  function localizeDates(root = document) {
    const format = new Intl.DateTimeFormat(document.documentElement.lang || undefined, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
    root.querySelectorAll('time[data-localize-date]').forEach((time) => {
      const date = new Date(`${time.getAttribute('datetime')}T00:00:00Z`);
      if (!Number.isNaN(date.getTime())) time.textContent = format.format(date);
    });
    root.querySelectorAll('.date-pill').forEach((pill) => {
      const date = new Date(`${pill.querySelector('[data-date]')?.dataset.date}T00:00:00Z`);
      if (Number.isNaN(date.getTime())) return;
      for (const part of ['weekday', 'day', 'month']) {
        const el = pill.querySelector(`[data-part="${part}"]`);
        if (el) el.textContent = date.toLocaleDateString(document.documentElement.lang || undefined, { [part]: part === 'day' ? 'numeric' : 'short', timeZone: 'UTC' }).replace('.', '');
      }
    });
  }
  document.addEventListener(EVENTS.cartUpdated, () => localizeDates());
  document.addEventListener(EVENTS.variantChanged, () => localizeDates());

  /* Entrance reveal: [data-reveal] fades and rises once, when motion is welcome. */
  function setUpReveal(root = document) {
    if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    root.querySelectorAll('[data-reveal]:not(.is-revealed)').forEach((element) => {
      element.classList.add('reveal-pending');
      observer.observe(element);
    });
  }
  const onReady = () => {
    setUpReveal();
    localizeDates();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onReady);
  else onReady();
  document.addEventListener('shopify:section:load', (event) => setUpReveal(event.target));

  window.Crumbline = Object.freeze({ EVENTS, fetchSections, toast, cart });
})();
