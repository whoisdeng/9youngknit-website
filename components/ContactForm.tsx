"use client";

import { Mail } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { siteInfo } from "@/data/site";

const recipientEmail = siteInfo.email;

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const body = [
      `Name: ${formData.get("name") || ""}`,
      `Country: ${formData.get("country") || ""}`,
      `Brand / Company: ${formData.get("brand") || ""}`,
      `Product Type: ${formData.get("productType") || ""}`,
      `Estimated Quantity: ${formData.get("quantity") || ""}`,
      `Customization Needs: ${formData.get("customization") || ""}`,
      `Message: ${formData.get("message") || ""}`,
      `WhatsApp / Email: ${formData.get("contact") || ""}`,
    ].join("\n");

    const subject = encodeURIComponent("Custom garment manufacturing inquiry from 9youngknit.com");
    const encodedBody = encodeURIComponent(body);

    setStatus("Opening your email client with the inquiry details. This V1 form does not save data.");
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${encodedBody}`;
  }

  return (
    <form className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft" onSubmit={handleSubmit}>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ocean">Inquiry form</p>
        <h2 className="mt-3 text-2xl font-semibold text-ink">Tell us about your project</h2>
        <p className="mt-3 text-sm leading-6 text-ink/70">
          This form opens your email client with the details filled in. No database is connected in V1.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink/75">
          Name
          <input
            className="min-h-11 rounded-md border border-ink/15 bg-oat px-3 text-sm text-ink outline-none transition focus:border-ocean"
            name="name"
            placeholder="Your name"
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink/75">
          Country
          <input
            className="min-h-11 rounded-md border border-ink/15 bg-oat px-3 text-sm text-ink outline-none transition focus:border-ocean"
            name="country"
            placeholder="Country / market"
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink/75">
          Brand / Company
          <input
            className="min-h-11 rounded-md border border-ink/15 bg-oat px-3 text-sm text-ink outline-none transition focus:border-ocean"
            name="brand"
            placeholder="Brand or company name"
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink/75">
          Product Type
          <input
            className="min-h-11 rounded-md border border-ink/15 bg-oat px-3 text-sm text-ink outline-none transition focus:border-ocean"
            name="productType"
            placeholder="Hoodie, sweater, tracksuit, T-shirt..."
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink/75">
          Estimated Quantity
          <input
            className="min-h-11 rounded-md border border-ink/15 bg-oat px-3 text-sm text-ink outline-none transition focus:border-ocean"
            name="quantity"
            placeholder="Estimated pieces / styles"
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink/75">
          WhatsApp / Email
          <input
            className="min-h-11 rounded-md border border-ink/15 bg-oat px-3 text-sm text-ink outline-none transition focus:border-ocean"
            name="contact"
            placeholder="Your WhatsApp number or email"
            type="text"
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-ink/75">
          Customization Needs
          <textarea
            className="min-h-28 rounded-md border border-ink/15 bg-oat px-3 py-3 text-sm text-ink outline-none transition focus:border-ocean"
            name="customization"
            placeholder="Fabric, logo, embroidery, printing, labels, packaging..."
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink/75">
          Message
          <textarea
            className="min-h-32 rounded-md border border-ink/15 bg-oat px-3 py-3 text-sm text-ink outline-none transition focus:border-ocean"
            name="message"
            placeholder="Share your design idea, timeline, sample needs, or questions."
          />
        </label>
      </div>

      <button
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss sm:w-auto"
        type="submit"
      >
        Submit by Email
        <Mail aria-hidden="true" className="h-4 w-4" />
      </button>

      {status ? <p className="mt-4 text-sm leading-6 text-ink/60">{status}</p> : null}
    </form>
  );
}
