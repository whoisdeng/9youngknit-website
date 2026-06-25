import Link from "next/link";
import { FileText, Shirt } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

type InquiryCTAProps = {
  title?: string;
  description?: string;
};

export default function InquiryCTA({
  title = "Ready to discuss your next custom garment order?",
  description = "Send your tech pack, reference photos, target quantity, fabric ideas, and delivery market. We will review the practical production path and quote direction.",
}: InquiryCTAProps) {
  return (
    <section className="bg-ocean px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">B2B inquiry</p>
          <h2 className="text-balance text-3xl font-semibold tracking-normal sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <WhatsAppButton className="bg-white text-ink hover:bg-stonewash" label="Get Custom Quote" />
          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
            href="/custom-manufacturing"
          >
            Start Sample Order
            <Shirt aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white transition hover:text-flax"
            href="/contact"
          >
            View Inquiry Checklist
            <FileText aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
