import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { getWhatsAppUrl, whatsappDisplay } from "@/components/WhatsAppButton";
import { siteInfo } from "@/data/site";

const footerLinks = [
  { href: "/products", label: "Products" },
  { href: "/custom-manufacturing", label: "Custom Manufacturing" },
  { href: "/fabrics-techniques", label: "Fabrics & Techniques" },
  { href: "/production-workflow", label: "Production Workflow" },
  { href: "/about", label: "About / Factory" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xl font-semibold">{siteInfo.name}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
            Custom knitwear and garment manufacturing for overseas B2B buyers, private label teams, wholesalers,
            boutiques, and streetwear brands.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-flax">Pages</p>
          <nav className="mt-4 grid gap-3">
            {footerLinks.map((item) => (
              <Link className="text-sm text-white/70 transition hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-flax">Inquiry</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <a className="hover:text-white" href={getWhatsAppUrl()} rel="noreferrer" target="_blank">
              WhatsApp: {whatsappDisplay}
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={`mailto:${siteInfo.email}`}>
              <Mail aria-hidden="true" className="h-4 w-4" />
              {siteInfo.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4" />
              {siteInfo.location}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {siteInfo.name}. B2B garment factory showcase for {siteInfo.domain}.
      </div>
    </footer>
  );
}
