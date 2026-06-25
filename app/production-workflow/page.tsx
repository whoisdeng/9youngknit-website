import type { Metadata } from "next";
import {
  BadgeCheck,
  ClipboardCheck,
  Factory,
  FileSearch,
  Layers,
  PackageCheck,
  PenTool,
  Scissors,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Production Workflow | Custom Apparel Manufacturing",
  description:
    "See the custom apparel manufacturing workflow from design file review and sample development to bulk production, quality control, packing, and shipping support.",
  alternates: {
    canonical: "/production-workflow",
  },
  openGraph: {
    title: "Production Workflow | Custom Apparel Manufacturing",
    description:
      "A clear B2B garment production workflow for overseas buyers working with an OEM ODM garment factory and custom clothing supplier in China.",
    url: "/production-workflow",
    type: "website",
  },
};

const steps = [
  {
    title: "Design File Review",
    explanation: "We review your garment idea, tech pack, sketch, reference image, or sample details before quoting.",
    buyerProvides: "Design file, reference photos, size idea, target quantity, and product category.",
    support: "We check feasibility, missing details, and the best next step for sampling.",
    icon: FileSearch,
  },
  {
    title: "Fabric & Technique Suggestion",
    explanation: "We suggest suitable fabric, decoration, trims, and finishing methods based on your target product.",
    buyerProvides: "Fabric handfeel, weight, season, color direction, artwork, and budget target if available.",
    support: "We recommend practical fabric and technique options for sample development.",
    icon: Layers,
  },
  {
    title: "Mockup Preview",
    explanation: "Before sampling, key design details can be organized into a simple preview for confirmation.",
    buyerProvides: "Logo files, placement request, color references, label details, and style comments.",
    support: "We help confirm placement, proportion, labels, trims, and visible design details.",
    icon: PenTool,
  },
  {
    title: "Sample Development",
    explanation: "A sample is made to test fit, fabric, workmanship, logo effect, and construction details.",
    buyerProvides: "Confirmed sample requirements, size choice, artwork files, and delivery information.",
    support: "We coordinate material preparation, cutting, sewing, decoration, and sample finishing.",
    icon: Scissors,
  },
  {
    title: "Sample Confirmation",
    explanation: "The sample is reviewed before bulk production starts, and revisions are discussed if needed.",
    buyerProvides: "Fit comments, measurement feedback, artwork approval, and any final changes.",
    support: "We record approved details and prepare the production reference for bulk order planning.",
    icon: BadgeCheck,
  },
  {
    title: "Bulk Production",
    explanation: "After sample approval, the order moves into material purchasing, cutting, sewing, and finishing.",
    buyerProvides: "Final quantity, size ratio, color plan, label files, packaging needs, and shipment schedule.",
    support: "We manage production steps and keep the approved sample as the reference standard.",
    icon: Factory,
  },
  {
    title: "Quality Control",
    explanation: "Goods are checked for workmanship, measurements, decoration, labels, packing, and order consistency.",
    buyerProvides: "Any special inspection requirements, tolerance notes, or packing standards.",
    support: "We support in-line review, final checking, and issue communication before shipment.",
    icon: ClipboardCheck,
  },
  {
    title: "Packing & Shipping Support",
    explanation: "Finished garments are packed and prepared for export shipment or buyer freight pickup.",
    buyerProvides: "Shipping marks, carton requirements, forwarder details, and destination information.",
    support: "We support folding, polybagging, carton packing, carton marks, and shipment coordination details.",
    icon: PackageCheck,
  },
];

export default function ProductionWorkflowPage() {
  return (
    <>
      <section className="bg-oat px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Production workflow"
            title="A clear step-by-step process for custom garment orders"
            description="This workflow helps overseas buyers understand what to prepare, what we review, and how a custom garment project moves from design file to packed goods."
          />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-2">
            {steps.map((step, index) => (
              <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft" key={step.title}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-oat text-ocean">
                    <step.icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-ink/40">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="mt-5 text-xl font-semibold text-ink">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink/70">{step.explanation}</p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-md bg-oat p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay">Buyer provides</p>
                    <p className="mt-2 text-sm leading-6 text-ink/75">{step.buyerProvides}</p>
                  </div>
                  <div className="rounded-md bg-oat p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ocean">We support</p>
                    <p className="mt-2 text-sm leading-6 text-ink/75">{step.support}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ocean px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Start production planning</p>
            <h2 className="text-balance text-3xl font-semibold tracking-normal sm:text-4xl">
              Ready to start your custom garment project?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              Send your design file, reference image, target quantity, and fabric idea. We will review your project and
              explain the next step.
            </p>
          </div>
          <WhatsAppButton
            className="bg-white text-ink hover:bg-stonewash"
            label="Chat on WhatsApp"
            message="Hello 9Young Knit, I am ready to start a custom garment project. Please review my design details and advise the next step."
          />
        </div>
      </section>
    </>
  );
}
