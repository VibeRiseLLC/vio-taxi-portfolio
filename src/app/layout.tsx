import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileActions from "@/components/StickyMobileActions";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    default: "Noordlijn Chauffeurs | Premium Chauffeurservice Groningen",
    template: "%s | Noordlijn Chauffeurs",
  },
  description:
    "Fictional portfolio concept for premium chauffeurservice and airport transfers from Groningen, Netherlands.",
  metadataBase: new URL(`https://${BUSINESS.domain}`),
  openGraph: {
    siteName: BUSINESS.name,
    type: "website",
    locale: "nl_NL",
    title: "Noordlijn Chauffeurs | Premium Chauffeurservice Groningen",
    description:
      "Fictional portfolio concept for premium chauffeurservice, airport transfers and business travel from Groningen.",
  },
};

/** JSON-LD structured data for the fictional LocalBusiness concept. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  description:
    "Portfolio demonstration website for a fictional chauffeurservice concept offering airport transfers, business travel and long-distance private transport.",
  url: `https://${BUSINESS.domain}`,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Groningen",
    addressCountry: "NL",
  },
  areaServed: BUSINESS.serviceAreaEn,
  disambiguatingDescription:
    "Fictional brand created for design and development showcase purposes. No aggregate ratings, review markup, awards, or licence claims are included.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" style={{ backgroundColor: "#080A14", color: "#F2EAD8" }}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen pb-24 md:pb-0">{children}</main>
          <Footer />
          <StickyMobileActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
