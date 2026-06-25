import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Category } from "@/data/categories";
import { getWhatsAppUrl } from "@/components/WhatsAppButton";

export default function ProductCard({ category }: { category: Category }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-ink/10 bg-white shadow-card transition hover:border-ocean/40 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden bg-stonewash">
        <Image
          alt={`${category.title} product category`}
          className="h-full w-full object-cover"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          src={category.image}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">{category.eyebrow}</p>
        <h3 className="mt-3 text-xl font-semibold text-ink">{category.title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/70">{category.description}</p>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">Key customization options</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[...category.materials.slice(0, 2), ...category.techniques.slice(0, 3)].map((option) => (
              <span className="rounded-md bg-oat px-2.5 py-1.5 text-xs font-medium text-ink/75 ring-1 ring-ink/5" key={option}>
                {option}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          <Link
            className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-ocean hover:text-ocean"
            href={`/products/${category.slug}`}
          >
            View Details
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <a
            className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-moss"
            href={getWhatsAppUrl(`Hello 9Young Knit, I would like to ask for a quote for ${category.title}. Please share sample and production details.`)}
            rel="noreferrer"
            target="_blank"
          >
            Ask for Quote
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
