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
  <img src="https://img.shields.io/badge/status-in%20development-orange.svg" alt="Status: in development">
  <img src="https://img.shields.io/badge/Shopify-Basic%20plan%20ready-95BF47.svg" alt="Works on the Shopify Basic plan">
</p>

---

## Why Crumbline

Most "bakery" themes are general shop themes with a croissant on the demo. Cake businesses need different things. A customer has to pick a size and a flavour, choose a pickup or delivery day the baker can actually manage, check allergens, and maybe ask for something custom. Today a lot of home bakers do all of that by hand over WhatsApp and Instagram DMs.

Crumbline puts those steps into the storefront. It runs on Shopify's **Basic plan** and needs **no paid apps**. Everything is built with standard Shopify features: variants, line item properties, metafields and metaobjects.

## Features

> Crumbline is in active development. The features below are the v1 scope. See [Roadmap](#roadmap) for what is built so far.

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
- Targets: WCAG 2.2 AA, Lighthouse mobile performance 90 or higher, under 60 KB of JavaScript per page
- Fully translatable: English, with Spanish on the way

## Getting started

### For merchants

Crumbline hasn't been released yet. Once v1.0.0 is out:

1. Download `crumbline.zip` from the [Releases](https://github.com/moopsIN/crumbline/releases) page.
2. In Shopify admin, go to **Online Store → Themes → Add theme → Upload zip file**.
3. Open **Customize** to set your colours, fonts, lead time, closed days and WhatsApp number.
4. Optional: add the product metafields below to show servings, allergens and image focus.

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

No metafields? You can use tags instead, for example `occasion:birthday` or `allergen:nuts`. A full setup guide will ship with v1.0.0.

## Project structure

```
.
├── assets      # critical.css and the icon sprite only
├── blocks      # Theme blocks merchants can add, remove and reorder
├── config      # Global theme settings
├── layout      # theme.liquid and password.liquid
├── locales     # Storefront and theme editor translations
├── sections    # Page sections, each with its own CSS and JS
├── snippets    # Reusable pieces: buttons, chips, product card, icons
└── templates   # JSON templates
```

## Roadmap

Crumbline is built in phases, and each one ends with a tagged pre-release (`v0.N.0`):

- [ ] Phase 0: repository setup and housekeeping *(in progress)*
- [ ] Phase 1: design tokens and foundation
- [ ] Phase 2: header, footer and mobile bottom navigation
- [ ] Phase 3: product card and collection pages
- [ ] Phase 4: product page with cake facts, option pills and pickup/delivery date
- [ ] Phase 5: cart page and cart drawer
- [ ] Phase 6: homepage sections
- [ ] Phase 7: cake builder
- [ ] Phase 8: custom order form and WhatsApp hand-off
- [ ] Phase 9: search, blog, pages, customer accounts, 404, password and gift card
- [ ] Phase 10: localisation (Spanish)
- [ ] Phase 11: performance and accessibility hardening
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
