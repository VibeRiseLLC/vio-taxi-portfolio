import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/business";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-cinzel", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "VioTaxi Hoogezand | Taxi boeken in Hoogezand en regio Groningen",
    template: "%s | VioTaxi Hoogezand",
  },
  description:
    "Boek een taxi in Hoogezand, Sappemeer en de regio Groningen. Bel, stuur WhatsApp of reserveer online bij VioTaxi.",
  metadataBase: new URL(`https://${BUSINESS.domain}`),
  openGraph: {
    siteName: BUSINESS.name,
    type: "website",
    locale: "nl_NL",
    title: "VioTaxi Hoogezand | Taxi boeken in Hoogezand en regio Groningen",
    description:
      "Betrouwbare taxi in Hoogezand, Sappemeer en de regio Groningen. Direct contact, lokale service.",
  },
};

/** JSON-LD structured data for Local Business / Taxi Service */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  name: BUSINESS.name,
  description:
    "Betrouwbare taxidienst in Hoogezand en de regio Groningen. Lokale ritten, luchthavenvervoer en meer.",
  url: `https://${BUSINESS.domain}`,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  areaServed: [
    "Hoogezand",
    "Sappemeer",
    "Foxhol",
    "Kropswolde",
    "Westerbroek",
    "Zuidbroek",
    "Veendam",
    "Groningen",
  ],
  // Note: address, coordinates, openingHours, and priceRange are intentionally
  // omitted in Version 1 — add them when the business owner confirms the details.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.className} ${cinzel.variable}`}>
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
