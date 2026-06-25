import type { Metadata } from "next";
import {
  BadgeCheck,
  ClipboardCheck,
  Factory,
  FileText,
  Handshake,
  Layers,
  Package,
  PackageCheck,
  Ruler,
  Shirt,
  Sparkles,
} from "lucide-react";
import CategoryGrid from "@/components/CategoryGrid";
import Hero from "@/components/Hero";
import InquiryCTA from "@/components/InquiryCTA";
import ProcessSteps from "@/components/ProcessSteps";
import SectionTitle from "@/components/SectionTitle";
import TechniqueGrid from "@/components/TechniqueGrid";

export const metadata: Metadata = {
  title: "Custom Knitwear & Streetwear Manufacturer",
  description:
    "9Young Knit is a custom knitwear manufacturer and custom streetwear manufacturer supporting private label clothing, OEM ODM garment production, and custom apparel manufacturing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Custom Knitwear & Streetwear Manufacturer | 9Young Knit",
    description:
      "Work with a B2B custom clothing supplier in China for knitwear, hoodies, tracksuits, streetwear, samples, and bulk garment production.",
    url: "/",
    type: "website",
  },
};

const strengths = [
  {
    title: "B2B communication",
    description: "Clear discussion around design files, target quantity, fabric direction, sample needs, and delivery timing.",
    icon: Handshake,
  },
  {
    title: "Category flexibility",
    description: "Support for knitwear, fleece, jersey, nylon sportswear, loungewear, sets, and streetwear capsules.",
    icon: Layers,
  },
  {
    title: "Private label details",
    description: "Labels, tags, trims, packaging, and size ratio planning can be prepared around buyer requirements.",
    icon: BadgeCheck,
  },
  {
    title: "Production follow-through",
    description: "A practical process from sample confirmation to bulk production, inspection, packing, and shipment support.",
    icon: ClipboardCheck,
  },
];

const services = [
  {
    title: "Tech pack development",
    description: "Review measurements, construction notes, artwork placement, trims, labels, and packaging requirements.",
    icon: FileText,
  },
  {
    title: "Sample making",
    description: "Create development samples for fit, fabric handfeel, decoration effect, workmanship, and buyer approval.",
    icon: Sparkles,
  },
  {
    title: "Bulk production",
    description: "Coordinate material preparation, cutting, sewing, decoration, finishing, inspection, and packing.",
    icon: Factory,
  },
  {
    title: "Private label packing",
    description: "Support neck labels, wash labels, hang tags, barcode stickers, polybags, carton marks, and size sets.",
    icon: PackageCheck,
  },
];

const factorySupport = [
  {
    title: "Pattern and fit coordination",
    description: "Adjust fit direction, measurements, grading needs, and sample comments before bulk confirmation.",
    icon: Ruler,
  },
  {
    title: "Material and trim sourcing",
    description: "Help align fabric, rib, drawcord, zipper, label, and packaging choices with the target product.",
    icon: Shirt,
  },
  {
    title: "Quality and packing checks",
    description: "Review workmanship, decoration placement, labeling, folding, polybagging, and carton preparation.",
    icon: Package,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Product categories"
            title="Core categories for custom garment programs"
            description="Start with a product category, then adjust fabric, fit, color, decoration, trims, labels, and packaging around your buyer requirements."
          />
          <div className="mt-10">
            <CategoryGrid limit={6} />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Why work with us"
            title="A practical factory partner for custom apparel buyers"
            description="We focus on clear requirements, sample development, private label details, and production preparation for overseas B2B orders."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item) => (
              <article className="rounded-lg border border-ink/10 bg-oat p-6" key={item.title}>
                <item.icon aria-hidden="true" className="h-8 w-8 text-ocean" />
                <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Custom manufacturing services"
            title="Support from first file review to production-ready details"
            description="Share your tech pack, sketch, reference photos, fabric idea, and target quantity. We help organize the details needed for sampling and bulk planning."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article className="rounded-lg border border-ink/10 bg-white p-6" key={service.title}>
                <service.icon aria-hidden="true" className="h-8 w-8 text-ocean" />
                <h3 className="mt-5 text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionTitle
            eyebrow="Production workflow"
            title="From design file to bulk production"
            description="A clear workflow helps overseas buyers move from initial files to sample approval, production planning, and packed goods."
          />
          <ProcessSteps />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Fabrics & techniques"
            title="Material and finishing options for custom garments"
            description="Fabric and technique selection depends on target style, handfeel, artwork, season, and budget. Sampling confirms the final direction."
          />
          <div className="mt-10">
            <TechniqueGrid />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Factory support"
            title="Practical support for buyer-ready production"
            description="Beyond sewing garments, we help organize the details that matter for overseas private label and wholesale programs."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {factorySupport.map((item) => (
              <article className="rounded-lg border border-ink/10 bg-white p-6" key={item.title}>
                <item.icon aria-hidden="true" className="h-8 w-8 text-ocean" />
                <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InquiryCTA
        title="Send your design file for a custom quote"
        description="Share your product category, reference images, tech pack, target quantity, fabric direction, and packaging needs. We will review the details and respond with the next steps for sampling."
      />
    </>
  );
}
