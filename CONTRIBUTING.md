# Contributing to Crumbline

Thanks for helping make Crumbline better for cake shops and home bakers. Bug reports, fixes, translations and documentation improvements are all welcome.

## Before you start

- **Open an issue first** for anything bigger than a small fix, so we can check it fits the roadmap in the [README](./README.md#roadmap). Crumbline is built in phases, and features from a later phase may be held back on purpose.
- Crumbline must work on the Shopify **Basic** plan with **no paid apps**. Contributions that need Shopify Plus, a paid app or a third-party script can't be merged.
- Follow the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Setting up

You need Node.js, the [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) and a Shopify development store.

```bash
git clone https://github.com/moopsIN/crumbline.git
cd crumbline
shopify theme dev --store your-store
```

## Standards

- **Theme architecture:** follow Shopify's theme conventions. Put a `{% doc %}` header on every snippet and statically rendered block. Keep CSS and JS inside each component's `{% stylesheet %}` and `{% javascript %}` tags; `assets/` holds only `critical.css` and shared files.
- **No hard-coded text:** every storefront string goes in `locales/en.default.json` and every setting label in `locales/en.default.schema.json`. Use sentence case.
- **Design tokens only:** components use the CSS custom properties from `snippets/css-variables.liquid` and `assets/critical.css`, never raw colours, fonts or shadows.
- **Progressive enhancement:** every form must work with JavaScript turned off. Use vanilla JavaScript custom elements, with no frameworks and no build step.
- **Accessibility:** WCAG 2.2 AA. Make it keyboard operable with a visible focus ring, and respect `prefers-reduced-motion`.

## Before you open a pull request

1. `shopify theme check` reports no errors.
2. The pages you touched render in `shopify theme dev` with no Liquid or console errors.
3. Any new section or block appears in the theme editor and its settings work.
4. Commits are small, one logical change each, with an area prefix and an imperative subject, for example `product: add cake-facts block`.
5. The pull request says what changed and how you tested it.

## Releasing (maintainers)

Releases are built by GitHub Actions ([`.github/workflows/release.yml`](./.github/workflows/release.yml)) when a version tag is pushed.

1. Set `theme_version` in `config/settings_schema.json` to the new version, for example `1.1.0`.
2. In `CHANGELOG.md`, rename `## [Unreleased]` to `## [1.1.0] — YYYY-MM-DD` and add a fresh empty `## [Unreleased]` above it.
3. Commit, merge to `main`, then tag and push:

   ```bash
   git tag -a v1.1.0 -m "Crumbline 1.1.0"
   git push origin v1.1.0
   ```

The workflow checks that the tag matches `theme_version`, runs `shopify theme check`, packages the theme, makes sure the zip holds only theme folders, and publishes a release with the changelog section as its notes. Attached files: `crumbline-1.1.0.zip`, `crumbline.zip` (the same file, so the link `https://github.com/moopsIN/crumbline/releases/latest/download/crumbline.zip` always gets the newest version), `LICENSE` and `LICENSE.md`.

For a test build, push a pre-release tag such as `v1.1.0-rc.1`. It's marked as a pre-release, never becomes "latest", and uses the `[Unreleased]` notes if the version has no changelog section yet. If a run fails, fix the cause, delete the tag (`git push --delete origin v1.1.0` and `git tag -d v1.1.0`) and push it again.

## Licence

By contributing, you agree that your contributions are released under the MIT licence in [`LICENSE`](./LICENSE). Code derived from Shopify's Skeleton theme remains under [`LICENSE.md`](./LICENSE.md).
