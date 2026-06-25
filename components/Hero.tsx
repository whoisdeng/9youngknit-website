import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const buyerGroups = [
  "Overseas fashion brands",
  "Streetwear labels",
  "Boutiques and wholesalers",
  "Private label buyers",
  "TikTok Shop and DTC startups",
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-oat text-ink">
      <Image
        alt="Garment factory production placeholder"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        fill
        priority
        sizes="100vw"
        src="/images/factory-hero.svg"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fbfaf8] via-[#fbfaf8]/92 to-[#fbfaf8]/76" />
      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-ocean">B2B OEM/ODM garment factory</p>
          <h1 className="text-balance text-4xl font-semibold tracking-normal sm:text-5xl lg:text-6xl">
            Custom Knitwear & Streetwear Manufacturing for Global Fashion Brands
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
            We help fashion startups, streetwear labels, boutiques, and wholesalers develop custom garments from design
            file to bulk production.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton label="Get Custom Quote" />
            <WhatsAppButton
              className="border border-ink/15 bg-white text-ink shadow-card hover:border-ocean hover:bg-white hover:text-ocean"
              label="Send Design on WhatsApp"
            />
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {buyerGroups.map((group) => (
              <div className="flex items-center gap-2 rounded-md bg-white/80 px-3 py-2 text-sm font-medium text-ink/75 ring-1 ring-ink/10" key={group}>
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-ocean" />
                {group}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
