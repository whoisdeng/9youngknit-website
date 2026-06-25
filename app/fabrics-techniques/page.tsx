import type { Metadata } from "next";
import {
  Badge,
  Boxes,
  Brush,
  Layers,
  Package,
  Palette,
  Scissors,
  Shirt,
  Sparkles,
  Tag,
  Waves,
} from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import InquiryCTA from "@/components/InquiryCTA";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Fabrics & Techniques for Custom Apparel Manufacturing",
  description:
    "Explore fabrics and techniques for custom apparel manufacturing, including fleece, French terry, jersey, jacquard knit, nylon, embroidery, printing, labels, and packaging.",
  alternates: {
    canonical: "/fabrics-techniques",
  },
  openGraph: {
    title: "Fabrics & Techniques for Custom Apparel Manufacturing",
    description:
      "Review fabric options, logo techniques, wash effects, custom labels, and packaging for private label clothing and OEM ODM garment production.",
    url: "/fabrics-techniques",
    type: "website",
  },
};

const notes = [
  "Fabric options are confirmed by target style, handfeel, season, weight, color plan, and buyer budget.",
  "Decoration methods should be checked against artwork size, fabric surface, wash requirement, and bulk consistency.",
  "Any performance claims, testing standards, or compliance requests should be confirmed before bulk production.",
];

const fabrics = [
  {
    name: "Heavyweight Fleece",
    description: "Thick, warm fleece with a structured handfeel for premium casual garments.",
    bestUsedFor: "Hoodies, sweatshirts, sweatpants, and streetwear sets.",
    value: "Helps brands build heavier products with a strong perceived quality and stable shape.",
    icon: Shirt,
  },
  {
    name: "French Terry",
    description: "Loop-back knit fabric with a lighter feel than brushed fleece.",
    bestUsedFor: "Spring sweatshirts, joggers, shorts sets, and relaxed casualwear.",
    value: "Good for buyers who need comfort, breathability, and year-round wearability.",
    icon: Waves,
  },
  {
    name: "Cotton Jersey",
    description: "Soft knitted fabric commonly used for everyday tops and basics.",
    bestUsedFor: "T-shirts, tops, shorts sets, and private label essentials.",
    value: "A practical base for testing new styles, graphics, sizing, and color programs.",
    icon: Layers,
  },
  {
    name: "Knitted Cotton",
    description: "Cotton-based knit structure with a comfortable feel and flexible use.",
    bestUsedFor: "Sweaters, knit tops, cardigans, and lightweight knitwear.",
    value: "Supports custom texture, fit, and seasonal knitwear development.",
    icon: Scissors,
  },
  {
    name: "Jacquard Knit",
    description: "Patterned knit fabric created directly through the knitting process.",
    bestUsedFor: "Custom sweaters, vests, cardigans, and statement knit pieces.",
    value: "Allows brands to create unique patterns without relying only on surface printing.",
    icon: Sparkles,
  },
  {
    name: "Nylon Fabric",
    description: "Lightweight woven fabric with a smooth technical handfeel.",
    bestUsedFor: "Windbreakers, track pants, nylon shorts, and sportswear sets.",
    value: "Useful for active casual, outdoor-inspired, and streetwear collections.",
    icon: Boxes,
  },
  {
    name: "Rib Knit",
    description: "Stretch knit with visible vertical texture and good recovery.",
    bestUsedFor: "Cuffs, hems, collars, lounge sets, fitted tops, and trims.",
    value: "Improves fit, comfort, and finishing quality for both garments and details.",
    icon: Badge,
  },
  {
    name: "Cotton Blend Fabric",
    description: "Cotton mixed with other fibers to adjust softness, stretch, durability, or cost.",
    bestUsedFor: "Hoodies, T-shirts, loungewear, sweat sets, and basics programs.",
    value: "Gives buyers more control over price target, handfeel, and performance needs.",
    icon: Palette,
  },
];

const techniques = [
  {
    name: "Embroidery",
    description: "Thread-based logo or artwork decoration with a raised, durable finish.",
    bestUsedFor: "Logos, chest marks, sleeve details, hats, hoodies, and sweatshirts.",
    value: "Adds a clean branded detail that works well for private label products.",
    icon: Sparkles,
  },
  {
    name: "Chenille Patch",
    description: "Textured patch technique with a soft raised surface.",
    bestUsedFor: "Varsity-style graphics, streetwear logos, outerwear, and fleece pieces.",
    value: "Creates a strong visual feature for capsule collections and statement garments.",
    icon: Badge,
  },
  {
    name: "Jacquard Knitting",
    description: "Pattern or logo created inside the knit structure instead of applied on top.",
    bestUsedFor: "Sweaters, knit vests, scarves, and custom knit panels.",
    value: "Helps buyers develop more original knitwear with integrated artwork.",
    icon: Layers,
  },
  {
    name: "Screen Printing",
    description: "Classic ink printing method for clean and repeatable graphics.",
    bestUsedFor: "T-shirts, hoodies, sweatshirts, shorts, and bulk graphic programs.",
    value: "Efficient for larger runs with solid artwork and controlled color placement.",
    icon: Brush,
  },
  {
    name: "Puff Printing",
    description: "Raised print effect that adds texture and dimension to artwork.",
    bestUsedFor: "Streetwear graphics, logo marks, hoodies, tees, and fleece sets.",
    value: "Gives simple graphics a more premium and tactile look.",
    icon: Palette,
  },
  {
    name: "DTF Printing",
    description: "Transfer printing method suitable for detailed and multi-color artwork.",
    bestUsedFor: "Small-batch graphics, complex artwork, samples, and varied color runs.",
    value: "Useful for testing designs and handling artwork with many colors or gradients.",
    icon: Brush,
  },
  {
    name: "Acid Wash",
    description: "Garment wash effect that creates a vintage or uneven color appearance.",
    bestUsedFor: "Streetwear hoodies, sweatshirts, tees, and casual sets.",
    value: "Helps brands create washed collection stories without using trademarked references.",
    icon: Waves,
  },
  {
    name: "Custom Labels",
    description: "Brand labels added to neck, side seam, waistband, or care label positions.",
    bestUsedFor: "Private label garments, wholesale programs, and boutique collections.",
    value: "Turns factory-made garments into buyer-owned branded products.",
    icon: Tag,
  },
  {
    name: "Custom Packaging",
    description: "Buyer-specific packing such as polybags, stickers, hang tags, and carton marks.",
    bestUsedFor: "Wholesale shipments, private label orders, and fulfillment-ready packing.",
    value: "Improves delivery organization and helps buyers prepare goods for their sales channels.",
    icon: Package,
  },
];

type InfoItem = {
  name: string;
  description: string;
  bestUsedFor: string;
  value: string;
  icon: ComponentType<LucideProps>;
};

function InfoGrid({ items }: { items: InfoItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft" key={item.name}>
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-oat text-ocean">
            <item.icon aria-hidden="true" className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-ink">{item.name}</h3>
          <p className="mt-3 text-sm leading-6 text-ink/70">{item.description}</p>
          <div className="mt-5 border-t border-ink/10 pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">Best used for</p>
            <p className="mt-2 text-sm leading-6 text-ink/75">{item.bestUsedFor}</p>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">B2B buyer value</p>
            <p className="mt-2 text-sm leading-6 text-ink/75">{item.value}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function FabricsTechniquesPage() {
  return (
    <>
      <section className="bg-oat px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionTitle
            eyebrow="Fabrics & techniques"
            title="Materials and finishing options for custom garments"
            description="Choose fabric, decoration, trims, labels, and packaging based on your target product, order plan, season, and buyer expectations."
          />
          <WhatsAppButton label="Ask About Fabric Options" />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Fabric options"
            title="Common fabrics for OEM/ODM garment programs"
            description="Fabric selection affects handfeel, structure, season, decoration method, and production planning. Final material direction is confirmed during sampling."
          />
          <div className="mt-10">
            <InfoGrid items={fabrics} />
          </div>
        </div>
      </section>

      <section className="bg-oat px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Technique options"
            title="Logo, graphic, wash, label, and packaging techniques"
            description="Technique selection depends on artwork, fabric surface, order quantity, target effect, and buyer requirements."
          />
          <div className="mt-10">
            <InfoGrid items={techniques} />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Practical notes"
            title="Sampling confirms what a product page cannot"
            description="Online references are useful, but fabric handfeel, garment fit, print effect, and wash behavior should be checked through samples before bulk production."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {notes.map((note) => (
              <article className="rounded-lg border border-ink/10 bg-oat p-5" key={note}>
                <p className="text-sm leading-6 text-ink/70">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InquiryCTA
        title="Need help choosing fabric and decoration?"
        description="Send your target style and reference images. We can suggest practical material and technique directions for sample development."
      />
    </>
  );
}
