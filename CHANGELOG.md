# Changelog

All notable changes to Crumbline are recorded here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/). Each build phase ends with a `0.N.0` pre-release; the first public release will be `1.0.0`.

## [Unreleased]

## [0.3.0] — 2026-10-25

Phase 3: product card and collection pages.

### Added
- Product card: portrait image cropped from each cake's image focus, sold-out / sale / custom badges, "Serves N", allergen chips with a screen-reader sentence, "From" pricing and quick add for single-option products.
- Collection page: banner with optional related-collection pills and image, storefront filters and sort that update without reloading (and work without JavaScript), active-filter chips, pagination and friendly empty states.
- Collection list page with collection cards.
- Theme settings: product card image shape, quick add on cards, allergens you track and allergens to highlight.

### Removed
- Skeleton's collection and collection-list sections.

## [0.2.0] — 2026-10-25

Phase 2: header, bottom navigation and footer.

### Added
- Announcement bar: one-line message with optional link; visitors can dismiss it for the session.
- Header with logo or styled store name, desktop menu, search, account and a basket pill with item count; sticky options (always, when scrolling up, never).
- Mobile navigation: a floating bottom bar (Home, Shop, Basket, Search, Find us by default) or a slide-in menu drawer, chosen in Theme settings → Layout.
- Footer with the store name in large type, order and WhatsApp buttons, and cards for contact details, menus, social links, a newsletter sign-up and free text; country and language selectors; payment icons.
- WhatsApp: store number setting, prefilled messages (naming the product on product pages) and an optional floating button.
- Social media settings, and a shared toast for short confirmations.

## [0.1.0] — 2026-10-25

Phase 1: design tokens and foundation.

### Added
- Theme settings: Branding (favicon), Colours (two colour schemes: cream and ink band), Typography (Fraunces, DM Sans, IBM Plex Mono and Caveat by default, plus text size), Layout, Buttons and Decorations (off by default).
- Design tokens from the Cute direction: fluid type and spacing scales, radii, hard offset shadows, spring easings, a paper-grain page texture and an accessible focus ring.
- Snippets: inline SVG icon set (23 icons), button, chip, plain and awning media frame, rotating stamp badge, speech bubble, and shared section attributes (colour scheme and spacing).
- Theme blocks: text, heading, button, image, chip row, spacer and group.
- Skip link and `main` landmark; the display font is preloaded.
- Product metafield guide in `docs/metafields.md`.

### Changed
- `critical.css` rewritten with layered CSS (`reset, tokens, base, components, utilities`).
- The custom section gains colour scheme and spacing settings and accepts app blocks.

### Removed
- Skeleton's account and cart SVG assets (replaced by the icon snippet) and unused Skeleton locale strings.

## [0.0.1] — 2026-10-25

Phase 0: repository setup and housekeeping.

### Added
- `CHANGELOG.md` and Crumbline's own contributing guide.
- Public `docs/` folder for merchant and developer guides.

### Changed
- README rewritten for Crumbline, with the Moops mascot.
- `LICENSE` now states plainly that Skeleton-derived code is covered by Shopify's licence in `LICENSE.md`.

### Removed
- Skeleton's `hello-world` demo section and its `shoppy-x-ray.svg` asset; the home page renders `custom-section` instead.
- Duplicate `moops.png` at the repo root (the README uses `.github/moops.png`).

## [0.0.0] — 2026-10-25

### Added
- Initial theme scaffolded from Shopify's [Skeleton theme](https://github.com/Shopify/skeleton-theme) with `shopify theme init`.
