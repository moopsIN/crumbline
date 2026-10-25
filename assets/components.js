/**
 * Crumbline shared client code, loaded with `defer` on every page.
 *
 * Only what several components need lives here: the Section Rendering API
 * helper, the namespaced event names and the <crumbline-toast> element.
 * Component-specific code stays in each component's {% javascript %} tag.
 *
 * Public API: window.Crumbline.{ EVENTS, fetchSections, toast }
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

  window.Crumbline = Object.freeze({ EVENTS, fetchSections, toast });
})();
