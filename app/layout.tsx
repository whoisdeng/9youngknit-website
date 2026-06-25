import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://9youngknit.com"),
  title: {
    default: "9Young Knit | Custom Knitwear Manufacturer & OEM ODM Garment Factory",
    template: "%s | 9Young Knit",
  },
  description:
    "9Young Knit is a custom knitwear manufacturer and OEM ODM garment factory for private label clothing, streetwear, and custom apparel manufacturing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "9Young Knit | Custom Knitwear Manufacturer & OEM ODM Garment Factory",
    description:
      "B2B custom apparel manufacturing for global fashion buyers seeking knitwear, streetwear, private label clothing, and garment production support.",
    url: "https://9youngknit.com",
    siteName: "9Young Knit",
    images: ["/images/og-9youngknit.svg"],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton sticky />
      </body>
    </html>
  );
}
