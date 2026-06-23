import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    default: "Northline Private Hire | Premium Airport Transfers Groningen",
    template: "%s | Northline Private Hire",
  },
  description:
    "Portfolio demo for Northline Private Hire, a fictional premium private-hire brand for airport transfers and chauffeur rides.",
  metadataBase: new URL(`https://${BUSINESS.domain}`),
  openGraph: {
    siteName: BUSINESS.name,
    type: "website",
    locale: "nl_NL",
    title: "Northline Private Hire | Premium Airport Transfers Groningen",
    description:
      "Fictional portfolio website for premium airport transfers and private chauffeur rides.",
  },
};

/** JSON-LD structured data for Local Business / Taxi Service */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  name: BUSINESS.name,
  description:
    "Portfolio demonstration website for a fictional private-hire brand offering premium airport transfer and chauffeur ride concepts.",
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
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
