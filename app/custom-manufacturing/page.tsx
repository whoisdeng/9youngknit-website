import type { Metadata } from "next";
import {
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileImage,
  Layers,
  Package,
  PackageCheck,
  PenTool,
  Scissors,
  Shirt,
  Sparkles,
  Truck,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Custom Manufacturing | OEM ODM Garment Factory",
  description:
    "OEM ODM garment factory support for custom apparel manufacturing, sample development, fabric sourcing, private label packaging, and bulk garment production.",
  alternates: {
    canonical: "/custom-manufacturing",
  },
  openGraph: {
    title: "Custom Manufacturing | OEM ODM Garment Factory",
    description:
      "Develop custom garments from design file to sample and bulk production with a B2B OEM ODM garment factory for global fashion buyers.",
    url: "/custom-manufacturing",
    type: "website",
  },
};

const services = [
  {
    title: "Custom Clothing Development",
    description:
      "Develop custom garments from tech packs, sketches, reference images, or early product ideas. We help turn your design direction into a sample-ready plan.",
    icon: Shirt,
  },
  {
    title: "Logo & Graphic Customization",
    description:
      "Support logo placement, artwork sizing, print method selection, embroidery direction, woven labels, and other brand details.",
    icon: PenTool,
  },
  {
    title: "Fabric Sourcing",
    description:
      "Suggest suitable fabric options based on target style, handfeel, season, weight, color plan, and buyer budget.",
    icon: Layers,
  },
  {
    title: "Sample Development",
    description:
      "Create samples for fit, fabric, construction, logo effect, trim details, and buyer review before bulk production.",
    icon: Sparkles,
  },
  {
    title: "Bulk Production",
    description:
      "After sample approval, we organize material preparation, cutting, sewing, decoration, finishing, and packing.",
    icon: Factory,
  },
  {
    title: "Private Label & Packaging",
    description:
      "Support neck labels, wash labels, hang tags, barcode stickers, polybags, carton marks, and size-ratio packing.",
    icon: Package,
  },
  {
    title: "Quality Control",
    description:
      "Check workmanship, measurements, decoration placement, labels, packing details, and overall order consistency.",
    icon: ClipboardCheck,
  },
  {
    title: "Shipping Support",
    description:
      "Prepare packed goods for export shipment and support carton information needed by overseas buyers or freight partners.",
    icon: Truck,
  },
];

const workflow = [
  { title: "Design / Reference Image", icon: FileImage },
  { title: "Fabric Suggestion", icon: Layers },
  { title: "Mockup Preview", icon: PenTool },
  { title: "Sample Development", icon: Scissors },
  { title: "Sample Approval", icon: BadgeCheck },
  { title: "Bulk Production", icon: Factory },
  { title: "QC", icon: ClipboardCheck },
  { title: "Packing & Shipping", icon: PackageCheck },
];

const ctas = [
  {
    label: "Send Your Design on WhatsApp",
    message:
      "Hello 9Young Knit, I would like to send my design for OEM/ODM garment production. Please review and advise the next step.",
  },
  {
    label: "Get a Custom Quote",
    message:
      "Hello 9Young Knit, I would like to get a custom quote for garment production. I can share style details, quantity, and fabric requirements.",
  },
  {
    label: "Start Sample Development",
    message:
      "Hello 9Young Knit, I would like to start sample development for a custom garment project. Please tell me what details you need.",
  },
];

export default function CustomManufacturingPage() {
  return (
    <>
      <section className="bg-oat px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionTitle
            eyebrow="Custom manufacturing"
            title="OEM/ODM garment production for overseas fashion brands"
            description="Work with us from design file, reference image, or tech pack to sample development and bulk production. We keep the process clear for international B2B buyers."
          />
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            {ctas.map((cta, index) => (
              <WhatsAppButton
                className={index === 0 ? "" : "border border-ink/15 bg-white text-ink hover:border-ocean hover:bg-white hover:text-ocean"}
                key={cta.label}
                label={cta.label}
                message={cta.message}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Service scope"
            title="Custom manufacturing services"
            description="Each service is built around practical production needs: clear files, suitable fabric, approved samples, controlled bulk production, and buyer-ready packing."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article className="rounded-lg border border-ink/10 bg-white p-6" key={service.title}>
                <service.icon aria-hidden="true" className="h-8 w-8 text-ocean" />
                <h2 className="mt-5 text-xl font-semibold text-ink">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink/70">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Workflow"
            title="From design file to bulk production"
            description="This is the typical working path for OEM/ODM garment orders. Some steps can be adjusted depending on style complexity, fabric availability, and buyer requirements."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, index) => (
              <article className="rounded-lg border border-ink/10 bg-oat p-5" key={step.title}>
                <div className="flex items-center justify-between gap-4">
                  <step.icon aria-hidden="true" className="h-7 w-7 text-ocean" />
                  <span className="text-sm font-semibold text-ink/40">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink">{step.title}</h3>
                {index < workflow.length - 1 ? <p className="mt-2 text-sm text-ink/50">Next step prepared after confirmation.</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle
            eyebrow="Before we start"
            title="Details that help us respond faster"
            description="You do not need every file ready before contacting us. Send what you have, and we will explain what is needed for sampling and quotation."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Design file, tech pack, sketch, or reference image",
              "Target product category and order quantity",
              "Fabric handfeel, weight, or composition idea",
              "Size range and fit direction",
              "Logo, print, embroidery, or label requirements",
              "Packaging and shipping market information",
            ].map((item) => (
              <div className="flex items-center gap-3 rounded-md bg-white p-4 text-sm font-medium text-ink/75 ring-1 ring-ink/10" key={item}>
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-ocean" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ocean px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Start your project</p>
            <h2 className="text-balance text-3xl font-semibold tracking-normal sm:text-4xl">
              Send your design and start the OEM/ODM process
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Share your design file, reference image, quantity target, and fabric idea. We will review the project and
              guide you toward quotation and sample development.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {ctas.map((cta, index) => (
              <WhatsAppButton
                className={index === 0 ? "bg-white text-ink hover:bg-stonewash" : "border border-white/25 bg-transparent text-white hover:bg-white hover:text-ink"}
                key={cta.label}
                label={cta.label}
                message={cta.message}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
