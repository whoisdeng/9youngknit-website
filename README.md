# 9Young Knit Factory Showcase

Clean, modern, responsive B2B garment factory website for `9youngknit.com`.

The site is built for OEM/ODM inquiry conversion, product display, buyer trust, and WhatsApp contact. It is not a retail storefront and does not include payment, customer login, order tracking, or a paid database.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static content first
- Local reusable product data
- SEO metadata, sitemap, robots, and manifest routes
- WhatsApp inquiry CTA as the primary conversion path

## Main Pages

- `/` - Home
- `/products` - Product category index
- `/products/custom-knitwear`
- `/products/hoodies-sweatshirts`
- `/products/tracksuits-sweat-sets`
- `/products/t-shirts-shorts-sets`
- `/products/nylon-sportswear`
- `/products/womens-loungewear`
- `/products/streetwear-collections`
- `/custom-manufacturing`
- `/fabrics-techniques`
- `/production-workflow`
- `/about`
- `/contact`

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Deployment

This project is ready for Vercel or any standard Next.js hosting platform.

For Vercel:

1. Push the project to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. Set the production domain to `9youngknit.com`.
4. Build command: `npm run build`
5. Output is handled automatically by Next.js.

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  products/page.tsx
  products/[slug]/page.tsx
  custom-manufacturing/page.tsx
  fabrics-techniques/page.tsx
  production-workflow/page.tsx
  about/page.tsx
  contact/page.tsx

components/
  Header.tsx
  Footer.tsx
  Hero.tsx
  SectionTitle.tsx
  ProductCard.tsx
  CategoryGrid.tsx
  WhatsAppButton.tsx
  InquiryCTA.tsx
  ProcessSteps.tsx
  TechniqueGrid.tsx

data/
  site.ts
  products.ts
  categories.ts
  techniques.ts
  workflow.ts
```

## Update Business Details

Edit:

- `data/site.ts`

Replace:

- `whatsappNumber`
- `whatsappDisplay`
- `email`
- `location`
- `socialLinks`
- `defaultWhatsAppMessage`

The WhatsApp links use `https://wa.me/` and prefilled inquiry messages.

## Update Products

Edit:

- `data/categories.ts`
- `data/products.ts`

Product category pages are generated from this data. Add, remove, or update categories there and the Products page plus dynamic category pages will update automatically.

## Update Images

Placeholder visuals are stored in:

- `public/images`

Replace the SVG placeholders with real factory and product images when available. Keep descriptive alt text in the page and component files.

## SEO Notes

The site includes:

- Page-level metadata
- Dynamic metadata for product category pages
- `sitemap.xml`
- `robots.txt`
- Open Graph defaults
- Clean URL structure

Before launch, update real contact details and replace placeholder images with factory-approved assets.
