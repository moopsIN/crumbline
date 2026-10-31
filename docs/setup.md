# Setting up Crumbline

This guide takes you from a fresh install to a cake shop that takes orders. Everything here works on Shopify's **Basic** plan with no paid apps. Allow about an hour; you can stop after any step and come back.

## 1. Install the theme

1. Download `crumbline.zip` from the [Releases](https://github.com/moopsIN/crumbline/releases) page.
2. In Shopify admin, go to **Online Store → Themes → Add theme → Upload zip file** and choose the file.
3. Click **Customize** on Crumbline to open the theme editor. You can set everything up before you publish the theme.

## 2. Tour of the theme settings

In the theme editor, click the **gear icon** (Theme settings). The groups, top to bottom:

| Group | What it does |
|---|---|
| **Branding** | Your favicon (the little icon in browser tabs). |
| **Colours** | Two colour schemes: a light one for most sections and a dark one for bands such as the footer. Each section picks a scheme. The *Accent text* colour is only used for large headings, so keep it dark enough to read. |
| **Typography** | Fonts for headings, body text and small labels, plus the overall text size. |
| **Layout** | Page width, space between sections, the phone navigation (a bar at the bottom or a side menu), product card image shape, and the quick add button on cards. |
| **Buttons** | Pill or rounded buttons, with or without the offset shadow. |
| **Cake options** | WhatsApp, notice and closed days, pickup address, delivery note and allergens. See sections 4 to 6 below. |
| **Decorations** | Speech bubbles and stickers. Off by default for a clean look. |
| **Social media** | Links to your Instagram, Facebook, TikTok, Pinterest and YouTube, used in the footer and the photo wall. |
| **Cart** | Whether adding to the basket opens a side drawer or shows a small message, and the notice reminder in the basket. |
| **Search** | Suggestions as customers type in the search box. |

Your logo, menu and announcement bar live in the **Header** section; your address, phone and newsletter sign-up live in the **Footer** section.

## 3. Products

Crumbline reads your products the usual Shopify way. A few habits make cakes look and work their best:

- **Options:** use options for things that change the price, such as **Size** and **Flavour**. They show as large tap-friendly buttons.
- **Photos:** portrait photos work best. Tall, tiered cakes keep their top tier when you set the image focus (below).
- **Details:** set up the free product metafields for *Serves*, *Notice needed*, *Allergens*, *Ingredients*, *Image focus* and *Occasions*. The [metafield guide](./metafields.md) walks through it, and also explains the tag shortcuts (`allergen:nuts`, `occasion:birthday`) if you'd rather not use metafields.
- **Badges:** add a tag such as `badge:bestseller` or `badge:made-to-order` to show a small label on the product card.

## 4. Notice, cut-off and closed days

Customers pick a pickup or delivery date on each cake. Under **Theme settings → Cake options → Ordering**:

- **Notice needed:** how many days ahead a cake must be ordered. A product's own *Notice needed* metafield overrides this.
- **Daily cut-off (hour, 24h):** orders after this hour count from the next day. It uses your store's time zone (**Settings → General**).
- **Closed days:** tick the days you don't hand over cakes. They can't be chosen as a date.
- **Pickup address** and **Delivery note:** shown when the customer chooses pickup or delivery.

The chosen date, pickup or delivery, and the message on the cake appear on the order in your Shopify admin, under the line item.

On each product page, the **Pickup or delivery date** block has two switches: **Date is required** and **Offer delivery**.

## 5. WhatsApp

Many customers would rather message you. Under **Cake options → WhatsApp**:

1. Enter your **WhatsApp number** with the country code, for example `+91 98765 43210`.
2. Optionally turn on the **floating WhatsApp button** shown on every page.

The number is also used by the "Send on WhatsApp" button on the custom cake form and the WhatsApp link in the footer.

## 6. Allergens

Under **Cake options → Allergens**:

- **Allergens you track:** the list the theme shows, separated by commas (for example `Gluten, Egg, Dairy, Nuts, Soy`). Only these appear on products, which keeps spelling consistent.
- **Highlight these allergens:** shown in a warning colour, for example `Nuts`.
- **Allergen disclaimer:** the note shown on product pages, such as "Made in a kitchen that handles nuts."

## 7. Pages to create

Go to **Online Store → Pages → Add page** for each, and choose the template shown on the right of the editor:

| Page | Template | What it is |
|---|---|---|
| Build a cake | `page.build` | The four-step cake builder. Setup is in the [cake builder guide](./cake-builder.md). |
| Custom cakes | `page.commission` | A three-step enquiry form for custom and wedding cakes (see below). |
| Contact | `page.contact` | A simple contact form. |
| About, FAQ, delivery info | default | Ordinary text pages. |

### The custom cake form

The custom cake form asks for the occasion, guests and flavours, the date and contact details, and sends everything to your **store contact email** (**Settings → Store details**). Shopify's built-in spam protection is on automatically, so no app is needed.

In the theme editor, open the Custom cakes page and select the form to set **Flavours to offer** (separated by commas). If you've entered a WhatsApp number, customers also get a **Send on WhatsApp** button that opens a ready-written message to you.

## 8. Menus and phone navigation

- **Online Store → Navigation:** edit **Main menu** (up to five links show on desktop) and **Footer menu**.
- On phones, the **bottom navigation bar** has five slots: four links and a raised basket button. Edit it in the theme editor under **Header → Bottom navigation**. Keep labels to one short word; five of them share a phone-width bar.
- Prefer a side menu? Choose **Theme settings → Layout → Mobile navigation → Menu drawer**.

## 9. The homepage

The homepage is built from sections you can add, remove and reorder in the theme editor: hero, scrolling text, occasions, featured collection, where to find us, your story, reviews, photo wall and newsletter, plus rich text, image with text, FAQ and call-to-action sections.

- **Hero:** use a tall photo of your best cake. Set *Fit* to *Whole image* for a cut-out PNG. You can also choose the focal point and frame shape, put the image on the left or right, show it first on phones, change the stamp's text and icon, pick a product for the "Today's bake" ticket (with or without its price) and edit the speech bubbles. The heading, text, buttons and the small pills under them are blocks inside the hero: click one to edit it, drag to reorder, or add and remove them.
- **Occasions:** each chip needs an occasion key that matches your products' *Occasions* metafield or `occasion:` tags, for example `birthday`. Put a **Featured collection** section straight underneath and the chips filter it in place.
- **Photo wall:** add up to six photos with short captions. It's a set of your own images, not a live Instagram feed.

## 10. Languages

Crumbline includes English and Spanish for both the shop and the theme editor. Add Spanish under **Settings → Languages** and publish it. To translate your own text (headings, product names, menu items), use Shopify's free **Translate & Adapt** app.

## 11. Before you go live

- Place a test order: pick a size, a date and a message, and check they appear on the order in admin.
- Send a test custom cake enquiry and check it arrives in your inbox.
- Check the shop on your phone, including the bottom navigation.
- Then **Online Store → Themes → Publish**.

## Known limitations

- **Delivery pricing:** the theme records whether the customer wants pickup or delivery, but delivery charges come from your Shopify shipping and delivery settings, not the theme.
- **Dates at checkout:** the date is checked on the product page and the cake builder. Express checkout buttons (Shop Pay, Apple Pay) skip straight to checkout without that check, so they're off by default in the **Buy buttons** block. Turn them on only if your cakes don't need a date.
- **Photo wall:** the photos are ones you upload; there's no live Instagram feed.
- **Customer accounts:** Shopify's newer customer accounts use Shopify's own sign-in pages. Crumbline also styles the classic account pages if your store uses those.

Stuck? Open an issue on [GitHub](https://github.com/moopsIN/crumbline/issues) or email info@moops.in.
