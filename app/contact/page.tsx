import type { Metadata } from "next";
import { Building2, ExternalLink, Instagram, Linkedin, Mail, MessageCircle, Music2, Send, Store } from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import WhatsAppButton, { defaultWhatsAppMessage, getWhatsAppUrl, whatsappDisplay } from "@/components/WhatsAppButton";
import { siteInfo, socialLinks } from "@/data/site";

type ContactMethod = {
  title: string;
  value: string;
  href?: string;
  icon: ComponentType<LucideProps>;
};

export const metadata: Metadata = {
  title: "Contact | Custom Clothing Supplier China",
  description:
    "Contact 9Young Knit, a custom clothing supplier in China, for custom knitwear, streetwear, private label clothing, and low MOQ garment manufacturer inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact 9Young Knit | Custom Clothing Supplier China",
    description:
      "Send a WhatsApp inquiry for custom apparel manufacturing, product type, quantity, fabric, logo customization, and sample development support.",
    url: "/contact",
    type: "website",
  },
};

const checklist = [
  "Product category and reference images",
  "Tech pack, sketch, or measurements if available",
  "Target order quantity and color plan",
  "Fabric weight, handfeel, or composition direction",
  "Print, embroidery, wash, trim, and label details",
  "Packaging, barcode, carton, and delivery market needs",
];

const contactMethods: ContactMethod[] = [
  {
    title: "WhatsApp",
    value: whatsappDisplay,
    href: getWhatsAppUrl(defaultWhatsAppMessage),
    icon: MessageCircle,
  },
  {
    title: "Email placeholder",
    value: siteInfo.email,
    href: `mailto:${siteInfo.email}`,
    icon: Mail,
  },
  {
    title: "Company name placeholder",
    value: `${siteInfo.name} / Your Company Name`,
    icon: Building2,
  },
  {
    title: "Alibaba store link placeholder",
    value: "Add Alibaba store URL",
    href: socialLinks.alibaba,
    icon: Store,
  },
  {
    title: "Instagram link placeholder",
    value: "Add Instagram profile URL",
    href: socialLinks.instagram,
    icon: Instagram,
  },
  {
    title: "TikTok link placeholder",
    value: "Add TikTok profile URL",
    href: socialLinks.tiktok,
    icon: Music2,
  },
  {
    title: "LinkedIn link placeholder",
    value: "Add LinkedIn page URL",
    href: socialLinks.linkedin,
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-oat px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Send your custom garment manufacturing inquiry"
              description="WhatsApp is the main contact channel for design files, product references, quantity targets, fabric needs, logo customization, and sample development questions."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton label="Chat on WhatsApp" message={defaultWhatsAppMessage} />
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-ocean hover:text-ocean"
                href={`mailto:${siteInfo.email}`}
              >
                Email Factory
                <Mail aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 rounded-lg border border-ink/10 bg-white p-5">
              <p className="text-sm font-semibold text-ink">Default WhatsApp message</p>
              <p className="mt-2 text-sm leading-6 text-ink/70">{defaultWhatsAppMessage}</p>
            </div>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ocean">Inquiry checklist</p>
            <div className="mt-5 grid gap-3">
              {checklist.map((item) => (
                <div className="flex gap-3 rounded-md bg-oat p-3 text-sm text-ink/75" key={item}>
                  <Send aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-ocean" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Contact channels"
            title="Connect with 9Young Knit"
            description="Use the placeholders below for your official company, store, and social links before launch."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const cardContent = (
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-oat text-ocean">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  {method.href ? (
                    <ExternalLink aria-hidden="true" className="h-4 w-4 text-ink/40 transition group-hover:text-ocean" />
                  ) : null}
                </div>
              );

              if (!method.href) {
                return (
                  <article className="rounded-lg border border-ink/10 bg-white p-6" key={method.title}>
                    {cardContent}
                    <h2 className="mt-5 text-lg font-semibold text-ink">{method.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-ink/70">{method.value}</p>
                  </article>
                );
              }

              return (
                <a
                  className="group rounded-lg border border-ink/10 bg-white p-6 transition hover:border-ocean/40 hover:shadow-soft"
                  href={method.href}
                  key={method.title}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                >
                  {cardContent}
                  <h2 className="mt-5 text-lg font-semibold text-ink">{method.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-ink/70">{method.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionTitle
            eyebrow="Inquiry form"
            title="Send project details by email"
            description="For V1, this form opens your email client with the inquiry details. It does not connect to a database or store submissions."
          />
          <ContactForm />
        </div>
      </section>

      <section className="bg-ocean px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Fast inquiry</p>
            <h2 className="text-balance text-3xl font-semibold tracking-normal sm:text-4xl">
              Prefer WhatsApp? Send a pre-filled inquiry.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/80">
              The WhatsApp link includes the default message for custom garment manufacturing, quantity, fabric, logo
              customization, and sample development discussion.
            </p>
          </div>
          <WhatsAppButton
            className="bg-white text-ink hover:bg-stonewash"
            label="Open WhatsApp Inquiry"
            message={defaultWhatsAppMessage}
          />
        </div>
      </section>
    </>
  );
}
