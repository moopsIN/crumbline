# Product metafields

Crumbline works without any setup. Adding a few **product metafields** lets it show how many people a cake serves, how much notice it needs, its allergens and ingredients, and where to crop tall cake photos. Metafields are free on every Shopify plan, including Basic.

Every field is optional. When one is missing, the theme falls back gracefully: it uses a tag instead, uses a store-wide setting, or leaves that detail out.

## 1. Create the definitions

In Shopify admin, go to **Settings → Custom data → Products → Add definition** and create each field below. Use the namespace and key exactly as written, in the form `crumbline.<key>`.

| Name (your choice) | Namespace and key | Type | Validation |
|---|---|---|---|
| Serves | `crumbline.serves` | Single line text | none |
| Notice needed (days) | `crumbline.lead_time_days` | Integer | Minimum 0, maximum 60 |
| Allergens | `crumbline.allergens` | Single line text, **list of values** | none |
| Ingredients | `crumbline.ingredients` | Multi-line text | none |
| Image focus | `crumbline.image_focus` | Single line text | Preset choices: `center top`, `center 20%`, `center`, `center bottom` |
| Occasions | `crumbline.occasion` | Single line text, **list of values** | none |
| Use in cake builder | `crumbline.builder_eligible` | True or false | none |

Tick **Pin to product page** (or "Show in product page") so the fields appear on each product's admin page.

## 2. Fill them in

Open a product in admin, scroll to **Metafields**, and fill in what applies:

- **Serves:** a short range such as `12–16` or `8`. Shown as "Serves 12–16".
- **Notice needed (days):** how many days ahead the cake must be ordered. Leave blank to use the store-wide lead time from **Theme settings → Cake options**.
- **Allergens:** one entry per allergen, in lower case: `gluten`, `egg`, `dairy`, `nuts`, `soy`. Only allergens that are also in the theme's allergen list (Theme settings → Cake options) are shown, which keeps spelling consistent across the store.
- **Ingredients:** the full list, as you'd print it on a label.
- **Image focus:** pick `center 20%` for tall, tiered cakes so the top tier isn't cut off when photos are cropped to a portrait card. `center` suits flat bakes such as brownies.
- **Occasions:** for example `birthday`, `wedding`, `anniversary`. Used by the occasion filter chips.
- **Use in cake builder:** turn on for the product the cake builder should sell (see the builder setup guide, coming in a later release).

## 3. No metafields? Use tags

If you'd rather not set up metafields, two details also read from product tags:

| Tag | Same as |
|---|---|
| `occasion:birthday` | Occasions → `birthday` |
| `allergen:nuts` | Allergens → `nuts` |

When a product has both, the metafield wins.

## Where each field appears

| Field | Where it shows | If it's missing |
|---|---|---|
| `serves` | Product cards; the cake-facts block on the product page; the builder summary | Cards show a one-line description instead; the cake-facts block skips the cell |
| `lead_time_days` | The "Notice" cell of cake facts; the earliest date in the pickup/delivery picker; the cart reminder | The store-wide lead time is used |
| `allergens` | Allergen chips on cards and product pages, read out to screen readers as "Contains: …" | `allergen:*` tags are used; with neither, no allergen chips are shown |
| `ingredients` | A collapsible "Ingredients" panel on the product page | The panel is hidden |
| `image_focus` | Cropping of product images on cards and the product page | `center 20%` is used |
| `occasion` | Occasion filter chips | `occasion:*` tags are used |
| `builder_eligible` | Lets the product be picked as the cake builder's base product | The product isn't offered to the builder |

Crumbline is in active development: cards, the product page and the cake builder arrive in v0.3, v0.4 and v0.7. This guide describes how each field is used once those parts ship.
