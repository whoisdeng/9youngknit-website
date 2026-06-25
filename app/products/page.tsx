import type { Metadata } from "next";
import CategoryGrid from "@/components/CategoryGrid";
import InquiryCTA from "@/components/InquiryCTA";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Products | Custom Apparel Manufacturing Categories",
  description:
    "Explore custom apparel manufacturing categories from a custom clothing supplier in China, including knitwear, hoodies, tracksuits, sportswear, loungewear, and streetwear.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products | Custom Apparel Manufacturing Categories",
    description:
      "Browse B2B garment categories for private label clothing, custom knitwear, hoodies, tracksuits, nylon sportswear, and streetwear collections.",
    url: "/products",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-oat px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionTitle
            eyebrow="Products"
            title="Custom garment categories for overseas B2B buyers"
            description="Choose a category to review factory capabilities, customization options, suitable buyers, fabrics, and logo or graphic techniques. Quotes are handled by inquiry based on style details and customization."
          />
          <WhatsAppButton />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CategoryGrid />
        </div>
      </section>

      <InquiryCTA
        title="Have a product that does not fit one category?"
        description="Send photos, sketches, or a short description. We can confirm whether the style is suitable for sampling and what details are needed for quotation."
      />
    </>
  );
}
