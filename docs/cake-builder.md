# Setting up the cake builder

The cake builder lets customers put together a cake in four steps: **Size → Flavour → Message → Collect**. It sells one product of yours, the *builder product*, whose variants combine size and flavour. The message and the collection date are saved on the order, just like on a normal product page.

## 1. Create the builder product

In Shopify admin, go to **Products → Add product**, for example "Build your own cake".

1. Add an option named **Size** with your sizes, e.g. `6"`, `8"`, `10"`.
2. Add an option named **Flavour** with your flavours, e.g. `Vanilla`, `Lemon`, `Chocolate`.
3. Set the price of each variant. A chocolate 10" can cost more than a vanilla 6".
4. Optional: set the product's **Notice needed (days)** metafield (see [product metafields](./metafields.md)) if builder cakes need more notice than your store default, and turn on **Use in cake builder**.
5. Optional: add a photo to each variant. The builder shows the summary card either way.

Option names can be different, e.g. "Tier" instead of "Size". Just type the same names into the section settings in step 2.

## 2. Add the builder to your store

**On a page of its own (recommended):**

1. **Online Store → Pages → Add page**, title it "Build a cake", and choose the **page.build** template.
2. **Online Store → Themes → Customize**, open the "Build a cake" page, select **Cake builder** and pick your builder product.
3. To show it in the phone navigation, open **Header → Bottom navigation** and point a link at the page (the cake icon suits it).

**Or on the homepage:** in the theme editor choose **Add section → Cake builder** and pick the product.

## 3. Servings

Under the Cake builder section, add a **Servings for a size** block for each size: type the size exactly as it's written on the product (e.g. `8"`) and how many it serves (e.g. `12–16`). Servings show on the size options and on the summary card.

## What customers see

- Steps they can move back to; each step checks they've chosen something before going on.
- A summary card with size, flavour, their message, the date and the price.
- The same pickup or delivery choice and date pills as on product pages: your notice period, daily cut-off and closed days all apply.
- The cake added to the basket with **Message on cake**, **Fulfilment** and **Date** saved on the order.

Without JavaScript the builder shows a short note and a link to the builder product's page, where the same options are available.
