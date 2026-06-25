"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/custom-manufacturing", label: "Custom Manufacturing" },
  { href: "/fabrics-techniques", label: "Fabrics & Techniques" },
  { href: "/production-workflow", label: "Workflow" },
  { href: "/about", label: "Factory" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link aria-label="9Young Knit home" className="flex items-center gap-3" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ocean text-sm font-bold text-white">
            9Y
          </span>
          <span>
            <span className="block text-base font-semibold leading-5 text-ink">9Young Knit</span>
            <span className="block text-xs leading-4 text-ink/60">OEM/ODM garment factory</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link className="text-sm font-medium text-ink/75 transition hover:text-ocean" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton />
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink/15 bg-white text-ink shadow-card lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-[4.5rem] border-b border-ink/10 bg-white p-4 shadow-soft lg:top-20 lg:hidden" id="mobile-navigation">
          <nav aria-label="Mobile navigation" className="grid gap-2">
            {navItems.map((item) => (
              <Link
                className="rounded-md px-3 py-3 text-base font-medium text-ink transition hover:bg-oat"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <WhatsAppButton className="mt-4 w-full" />
        </div>
      ) : null}
    </header>
  );
}
