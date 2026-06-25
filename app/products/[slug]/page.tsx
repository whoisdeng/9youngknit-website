import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, PackageCheck, Ruler, Shirt, Sparkles, Timer } from "lucide-react";
import InquiryCTA from "@/components/InquiryCTA";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppButton from "@/components/WhatsAppButton";
import { categories, getCategory } from "@/data/categories";
import { products } from "@/data/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

const categorySeo: Record<string, { title: string; description: string }> = {
  "custom-knitwear": {
    title: "Custom Knitwear Manufacturer",
    description:
      "Custom knitwear manufacturer for sweaters, cardigans, vests, jacquard knitwear, and private label clothing development for global fashion buyers.",
  },
  "hoodies-sweatshirts": {
    title: "Custom Hoodie Manufacturer",
    description:
      "Custom hoodie manufacturer for fleece hoodies, sweatshirts, streetwear blanks, private label trims, logo customization, and OEM ODM garment production.",
  },
  "tracksuits-sweat-sets": {
    title: "Custom Tracksuit Manufacturer",
    description:
      "Custom tracksuit manufacturer for sweat sets, joggers, hoodies, track jackets, and coordinated private label casualwear programs.",
  },
  "t-shirts-shorts-sets": {
    title: "Custom T-Shirts & Shorts Sets Manufacturer",
    description:
      "Custom apparel manufacturing for T-shirts, shorts sets, jersey basics, graphic programs, and private label summer collections.",
  },
  "nylon-sportswear": {
    title: "Custom Nylon Sportswear Manufacturer",
    description:
      "OEM ODM garment factory support for nylon jackets, track pants, cargo shorts, woven sportswear, and private label active casual collections.",
  },
  "womens-loungewear": {
    title: "Women's Loungewear Manufacturer",
    description:
      "Private label clothing manufacturer for women's loungewear, ribbed sets, soft knit tops, lounge pants, and boutique apparel programs.",
  },
  "streetwear-collections": {
    title: "Custom Streetwear Manufacturer",
    description:
      "Custom streetwear manufacturer for capsule collections, fleece, jersey, knitwear, nylon pieces, logo techniques, and low MOQ garment manufacturer inquiries.",
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {};
  }

  const seo = categorySeo[category.slug] ?? {
    title: `${category.title} Manufacturer`,
    description: category.description,
  };

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/products/${category.slug}`,
    },
    openGraph: {
      title: `${seo.title} | 9Young Knit`,
      description: seo.description,
      url: `/products/${category.slug}`,
      type: "website",
      images: [category.image],
    },
  };
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((product) => product.categorySlug === category.slug);
  const related = categories.filter((item) => item.slug !== category.slug).slice(0, 3);
  const inquiryMessage = `Hello 9Young Knit, I would like to discuss ${category.title} customization. Please share sample development and quote details.`;

  return (
    <>
      <section className="bg-oat px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ocean">{category.eyebrow}</p>
            <h1 className="text-balance text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
              {category.title} manufacturing
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink/70">{category.description}</p>
            <div className="mt-8">
              <WhatsAppButton
                label="Get Custom Quote"
                message={inquiryMessage}
              />
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stonewash shadow-soft">
            <Image
              alt={`${category.title} manufacturing`}
              className="h-full w-full object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              src={category.image}
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <article className="rounded-lg border border-ink/10 bg-white p-6">
            <Ruler aria-hidden="true" className="h-7 w-7 text-ocean" />
            <h2 className="mt-4 text-lg font-semibold text-ink">MOQ note</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Flexible MOQ support based on style and customization. Final MOQ depends on fabric sourcing, color count,
              decoration method, and order plan.
            </p>
          </article>
          <article className="rounded-lg border border-ink/10 bg-white p-6">
            <Timer aria-hidden="true" className="h-7 w-7 text-ocean" />
            <h2 className="mt-4 text-lg font-semibold text-ink">Sample development note</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Samples are developed after design files, reference images, fabric direction, sizing, and customization
              details are confirmed. Typical direction: {category.sampleLeadTime}.
            </p>
          </article>
          <article className="rounded-lg border border-ink/10 bg-white p-6">
            <PackageCheck aria-hidden="true" className="h-7 w-7 text-ocean" />
            <h2 className="mt-4 text-lg font-semibold text-ink">Bulk production</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">{category.bulkLeadTime}</p>
          </article>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Capability overview"
            title={`Product capability for ${category.title.toLowerCase()}`}
            description="This category can be developed for custom B2B programs using buyer-provided files, reference samples, artwork, size specs, label details, and packaging requirements."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {categoryProducts.map((product) => (
              <article className="rounded-lg border border-ink/10 bg-oat p-5" key={product.name}>
                <div className="flex items-center gap-3 text-sm font-semibold text-ink">
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-ocean" />
                  {product.name}
                </div>
                <p className="mt-2 text-sm leading-6 text-ink/70">{product.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Customization options" title="Style details buyers can customize" />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Fit and measurements",
                "Fabric weight and handfeel",
                "Color and size range",
                "Labels, tags, and packaging",
                "Trim and pocket details",
                "Artwork placement",
              ].map((item) => (
                <div className="flex items-center gap-3 rounded-md bg-white p-4 text-sm font-medium text-ink/75 ring-1 ring-ink/10" key={item}>
                  <Sparkles aria-hidden="true" className="h-4 w-4 text-ocean" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Suitable buyers" title="Who this category is built for" />
            <div className="mt-6 grid gap-3">
              {category.buyerFit.map((buyer) => (
                <div className="flex items-center gap-3 rounded-md bg-white p-4 text-sm font-medium text-ink/75 ring-1 ring-ink/10" key={buyer}>
                  <Shirt aria-hidden="true" className="h-4 w-4 text-ocean" />
                  {buyer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Fabric options" title="Common material directions" />
            <div className="mt-6 flex flex-wrap gap-2">
              {category.materials.map((material) => (
                <span className="rounded-md bg-oat px-3 py-2 text-sm font-medium text-ink/75 ring-1 ring-ink/10" key={material}>
                  {material}
                </span>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Logo & graphic techniques" title="Decoration methods for private label programs" />
            <div className="mt-6 flex flex-wrap gap-2">
              {category.techniques.map((technique) => (
                <span className="rounded-md bg-oat px-3 py-2 text-sm font-medium text-ink/75 ring-1 ring-ink/10" key={technique}>
                  {technique}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Related categories" title="Explore more factory capabilities" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard category={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>

      <InquiryCTA
        title={`Send your ${category.title.toLowerCase()} design for review`}
        description="Share your target fabric, quantity, size range, logo or graphic technique, and reference images. We will respond with the practical next step for sampling and quotation."
      />
    </>
  );
}
