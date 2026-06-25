import type { Metadata } from "next";
import Image from "next/image";
import {
  ClipboardCheck,
  Factory,
  Globe2,
  Scissors,
  Shirt,
  Sparkles,
  Users,
} from "lucide-react";
import InquiryCTA from "@/components/InquiryCTA";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "About Us / Factory | Private Label Clothing Manufacturer",
  description:
    "Learn about 9Young Knit, a B2B private label clothing manufacturer and custom clothing supplier in China focused on knitwear, streetwear, and casualwear development.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About 9Young Knit | Private Label Clothing Manufacturer",
    description:
      "B2B custom garment manufacturing support for global buyers developing knitwear, streetwear, casualwear, samples, private label packaging, and bulk production.",
    url: "/about",
    type: "website",
  },
};

const sections = [
  {
    title: "Who We Are",
    description:
      "9youngknit.com is a B2B custom garment manufacturing website focused on knitwear, streetwear, casualwear, and private label garment development for global fashion buyers.",
    points: ["OEM and ODM garment development", "Inquiry-based B2B cooperation", "Support from design review to bulk production"],
    icon: Factory,
  },
  {
    title: "What We Make",
    description:
      "We focus on custom apparel categories that suit fashion startups, streetwear labels, boutiques, wholesalers, and private label buyers.",
    points: ["Custom knitwear and sweaters", "Hoodies, sweatshirts, tracksuits, and sets", "T-shirts, loungewear, nylon sportswear, and streetwear capsules"],
    icon: Shirt,
  },
  {
    title: "Who We Serve",
    description:
      "Our content and workflow are built for overseas buyers who need clear communication, product development support, and practical production planning.",
    points: ["Fashion startups and DTC labels", "Streetwear and casualwear brands", "Boutiques, wholesalers, and private label teams"],
    icon: Users,
  },
  {
    title: "Factory Capability",
    description:
      "We support practical garment production steps, including material planning, cutting, sewing, decoration, finishing, packing, and shipment preparation.",
    points: ["Fabric and trim coordination", "Logo, graphic, label, and packaging support", "Bulk production planning after sample approval"],
    icon: Scissors,
  },
  {
    title: "Sample Development Support",
    description:
      "Sampling helps confirm fit, fabric, workmanship, color direction, logo effect, and private label details before bulk production.",
    points: ["Review tech packs, sketches, or reference images", "Prepare sample details for buyer review", "Support revisions before production confirmation"],
    icon: Sparkles,
  },
  {
    title: "Quality Control",
    description:
      "Quality control focuses on practical checks that help reduce avoidable issues before packing and shipment.",
    points: ["Workmanship and measurement review", "Decoration, label, and trim checking", "Packing and carton detail review"],
    icon: ClipboardCheck,
  },
  {
    title: "Export & Communication Support",
    description:
      "We support international buyers with clear project communication and export-oriented packing information.",
    points: ["WhatsApp and email communication", "Packing list and carton mark coordination", "Support for freight partner pickup or shipment preparation"],
    icon: Globe2,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-oat px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="About the factory"
              title="B2B custom garment development for global fashion buyers"
              description="9youngknit.com is focused on knitwear, streetwear, casualwear, and private label garment development for overseas fashion brands, boutiques, wholesalers, and startup labels."
            />
            <div className="mt-8">
              <WhatsAppButton label="Contact Factory on WhatsApp" />
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stonewash shadow-soft">
            <Image
              alt="Factory capability placeholder"
              className="h-full w-full object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              src="/images/factory-about.svg"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Company positioning"
            title="Professional manufacturing support without exaggerated claims"
            description="We explain what we make, who we serve, and how we support custom garment projects in a clear and practical way."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {sections.map((section) => (
              <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft" key={section.title}>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-oat text-ocean">
                    <section.icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-ink/70">{section.description}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {section.points.map((point) => (
                    <div className="rounded-md bg-oat p-3 text-sm leading-6 text-ink/75" key={point}>
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-ocean">Factory communication</p>
            <h2 className="text-balance text-3xl font-semibold tracking-normal text-ink sm:text-4xl">
              Discuss your garment project with a B2B manufacturing focus
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-ink/70">
              Send your product category, reference images, design file, target quantity, fabric idea, and packaging
              needs. We will review the project and explain the next practical step.
            </p>
          </div>
          <WhatsAppButton
            label="Send Project Details"
            message="Hello 9Young Knit, I would like to discuss a custom garment manufacturing project. Please review my product details and advise the next step."
          />
        </div>
      </section>

      <InquiryCTA
        title="Looking for custom garment manufacturing support?"
        description="Share your design direction, target product category, quantity, fabric requirements, and private label needs. We will respond with a practical development path."
      />
    </>
  );
}
