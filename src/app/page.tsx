import type { Metadata } from "next";
import HomePageClient from "@/components/pages/HomePageClient";

export const metadata: Metadata = {
  title: "VioTaxi Hoogezand | Taxi boeken in Hoogezand en regio Groningen",
  description:
    "Boek een taxi in Hoogezand, Sappemeer en de regio Groningen. Bel, stuur WhatsApp of reserveer online bij VioTaxi.",
  openGraph: {
    title: "VioTaxi Hoogezand | Taxi boeken in Hoogezand en regio Groningen",
    description:
      "Betrouwbare taxi in Hoogezand, Sappemeer en de regio Groningen. Direct contact, lokale service.",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
