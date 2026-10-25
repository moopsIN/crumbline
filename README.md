<p align="center">
  <img src=".github/moops.png" alt="Moops, the Moops Design mascot: a round green character with a leaf sprout on top" width="180">
</p>

<h1 align="center">Crumbline</h1>

<p align="center">
  A free Shopify theme for cake shops and home bakers.<br>
  Cute by design, serious underneath. Made by <a href="https://moops.in">Moops Design</a>.
</p>

<p align="center">
  <a href="./LICENSE"><img src="https://img.shields.io/badge/licence-MIT%20%2B%20Shopify%20Skeleton-green.svg" alt="Licence: MIT, with Shopify Skeleton portions"></a>
  <img src="https://img.shields.io/badge/status-pre--release-orange.svg" alt="Status: pre-release">
  <img src="https://img.shields.io/badge/Shopify-Basic%20plan%20ready-95BF47.svg" alt="Works on the Shopify Basic plan">
</p>

<p align="center">
  <img src=".github/screenshot-desktop.jpg" alt="Crumbline demo homepage on desktop: a big serif headline, a tiered cake in a striped-awning frame and a rotating stamp badge" width="100%">
</p>

<p align="center">
  <img src=".github/screenshot-home-mobile.jpg" alt="Crumbline homepage on a phone, with the floating bottom navigation" width="30%">
  <img src=".github/screenshot-product-mobile.jpg" alt="Product page on a phone: size and flavour pills, pickup or delivery, and date pills" width="30%">
  <img src=".github/screenshot-builder-mobile.jpg" alt="Cake builder on a phone: running total and a live summary card" width="30%">
</p>

<p align="center">
  <strong>See it live:</strong> <a href="https://crumbline-6gtfwmtt.myshopify.com/?preview_theme_id=198963069094">Crumbline Bakery demo store</a>. The store is password-protected; email <a href="mailto:info@moops.in">info@moops.in</a> for the password.<br>
  <sub>Crumbline Bakery is a fictional shop. Demo photos are from <a href="https://www.pexels.com">Pexels</a>.</sub>
</p>

---

## Why Crumbline

Most "bakery" themes are general shop themes with a croissant on the demo. Cake businesses need different things. A customer has to pick a size and a flavour, choose a pickup or delivery day the baker can actually manage, check allergens, and maybe ask for something custom. Today a lot of home bakers do all of that by hand over WhatsApp and Instagram DMs.

Crumbline puts those steps into the storefront. It runs on Shopify's **Basic plan** and needs **no paid apps**. Everything is built with standard Shopify features: variants, line item properties, metafields and metaobjects.

## Features

> Everything below is built and included in the current pre-release. v1.0.0 follows a final round of manual testing.

**Ordering cakes**
- Option pills for size, tiers and flavour, with "Serves N" shown next to each size
- Pickup or delivery, plus a date picker that respects your lead time, daily cut-off hour and closed days
- "Message on cake" field with a character counter
- A four-step cake builder: Size → Flavour → Message → Collect
- A multi-step custom order (commission) form that emails you, with an optional WhatsApp hand-off

**Trust and clarity**
- Allergen chips on every product card and product page, readable by screen readers
- A cake-facts block on product pages: Serves, Notice needed, Allergens, Size
- Ingredients and a kitchen allergen disclaimer

**Built for phones**
- Sticky bottom navigation on mobile (Home, Shop, Basket, Build, Find us)
- Sticky "Add to basket" bar on product pages
- Cart drawer and "Added to basket" toast
- Portrait-first product images, with a per-product focus point so the top tier of a tall cake doesn't get cropped

**The look**
- A warm cream, dotted-paper look with serif headings, mono micro-labels, pill buttons and hard offset shadows
- A striped-awning photo frame, a rotating stamp badge, and optional speech bubbles and stickers (off by default)
- Fonts and colour schemes you can change in the theme editor

**Under the hood**
- Built on Shopify's [Skeleton theme](https://github.com/Shopify/skeleton-theme): theme blocks, `{% stylesheet %}` and `{% javascript %}` per component, LiquidDoc on every snippet
- Vanilla JavaScript custom elements, no framework and no build step
- Progressive enhancement: every form works without JavaScript
- Accessibility and speed: built to WCAG 2.2 AA; Lighthouse mobile performance 93–99 on the main pages; about 55 KB of JavaScript and 5 font files per page
- Fully translatable: ships in English and Spanish, storefront and theme editor

## Getting started

### For merchants

Crumbline v1.0.0 isn't out yet. Once it is:

1. Download `crumbline.zip` from the [Releases](https://github.com/moopsIN/crumbline/releases) page.
2. In Shopify admin, go to **Online Store → Themes → Add theme → Upload zip file**.
3. Open **Customize** to set your colours, fonts, lead time, closed days and WhatsApp number.
4. Optional: add the product metafields below to show servings, allergens and image focus.

The [setup guide](./docs/setup.md) walks through every step, from settings to your first test order.

### For developers

You need [Node.js](https://nodejs.org/) (LTS or newer), the [Shopify CLI](https://shopify.dev/docs/api/shopify-cli), and a Shopify development store. The [Shopify Liquid VS Code extension](https://shopify.dev/docs/storefronts/themes/tools/shopify-liquid-vscode) is recommended.

```bash
git clone https://github.com/moopsIN/crumbline.git
cd crumbline

# Preview against your dev store with hot reload
shopify theme dev --store your-store

# Lint before every commit
shopify theme check
```

If your store has a storefront password, the CLI will ask for it. Never commit it.

## Product data

Crumbline works without any setup and gets better with a few product metafields. Create them in **Settings → Custom data → Products**, using the namespace `crumbline`:

| Key | Type | Example | Used for |
|---|---|---|---|
| `serves` | Single line text | `12–16` | "Serves" on cards and product pages |
| `lead_time_days` | Integer | `3` | Overrides the store-wide notice period |
| `allergens` | List of single line text | `gluten`, `egg`, `dairy` | Allergen chips |
| `ingredients` | Multi-line text | | Ingredients panel |
| `image_focus` | Single line text | `center 20%` | Where tall cake photos are cropped |
| `occasion` | List of single line text | `birthday`, `wedding` | Occasion filters |
| `builder_eligible` | True or false | `true` | Lets the product appear in the cake builder |

No metafields? You can use tags instead, for example `occasion:birthday` or `allergen:nuts`. Step-by-step guides: [setup](./docs/setup.md), [metafields](./docs/metafields.md) and [cake builder](./docs/cake-builder.md). Changes are listed in the [changelog](./CHANGELOG.md).

## Languages

Crumbline ships with English and Spanish for both the storefront and the theme editor. To offer Spanish, add it in **Settings → Languages** and publish it.

Theme strings such as buttons, labels and messages are translated by the theme. Content you type yourself, such as headings, menu names, bottom navigation labels, product titles and descriptions, is translated with Shopify's free [Translate & Adapt](https://apps.shopify.com/translate-and-adapt) app. It's made by Shopify, so it doesn't break the no-paid-apps promise.

Keep bottom navigation labels short (one word, about 10 letters), because five of them share a phone-width bar.

Order notes such as the pickup date and the cake message use the shopper's language for their labels, so a Spanish order shows *Fecha* where an English one shows *Date*.

## Project structure

```
.
├── assets      # critical.css and the icon sprite only
├── blocks      # Theme blocks merchants can add, remove and reorder
├── config      # Global theme settings
├── docs        # Merchant and developer guides (not part of the theme)
├── layout      # theme.liquid and password.liquid
├── locales     # Storefront and theme editor translations
├── sections    # Page sections, each with its own CSS and JS
├── snippets    # Reusable pieces: buttons, chips, product card, icons
└── templates   # JSON templates
```

## Roadmap

Crumbline is built in phases, and each one ends with a tagged pre-release (`v0.N.0`):

- [x] Phase 0: repository setup and housekeeping
- [x] Phase 1: design tokens and foundation
- [x] Phase 2: header, footer and mobile bottom navigation
- [x] Phase 3: product card and collection pages
- [x] Phase 4: product page with cake facts, option pills and pickup/delivery date
- [x] Phase 5: cart page and cart drawer
- [x] Phase 6: homepage sections
- [x] Phase 7: cake builder
- [x] Phase 8: custom order form and WhatsApp hand-off
- [x] Phase 9: search, blog, pages, customer accounts, 404, password and gift card
- [x] Phase 10: localisation (Spanish)
- [x] Phase 11: performance and accessibility hardening
- [ ] Phase 12: demo store content and documentation
- [ ] Phase 13: v1.0.0 release
- [ ] Phase 14 (stretch): Shopify Theme Store readiness

## Contributing

Issues and pull requests are welcome. Please open an issue before starting anything large, so we can check it fits the roadmap. Before you open a pull request, run `shopify theme check` and make sure it reports no errors.

## Licence

Crumbline's own code is © 2026 Moops Design and released under the **MIT licence**. See [`LICENSE`](./LICENSE).

Crumbline is built on Shopify's Skeleton theme. The parts that come from Skeleton are © 2018-present Shopify Inc. and are covered by Shopify's licence in [`LICENSE.md`](./LICENSE.md). That licence allows them to be used only for themes that work with Shopify, which is how Crumbline uses them.

## About Moops Design

[Moops Design](https://moops.in) is a small app and software studio in Indore, India. We build apps, websites, ops tools and online stores for small and mid-sized businesses. We like boring, reliable technology, delightful UI, fixed scope and shipping on time.

If you'd like a custom Shopify store, or help setting up Crumbline for your bakery, [say hello](https://moops.in).
