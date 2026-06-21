import type { Metadata } from "next";
import ServicesPageClient from "@/components/pages/ServicesPageClient";

export const metadata: Metadata = {
  title: "Taxidiensten",
  description:
    "Ontdek de taxidiensten van VioTaxi: lokale ritten, luchthavenvervoer, station, ziekenhuisafspraken, zakelijk vervoer en meer in Hoogezand en de regio Groningen.",
  openGraph: {
    title: "Taxidiensten | VioTaxi Hoogezand",
    description:
      "Lokale taxiritten, luchthavenvervoer, zakelijk vervoer en meer in Hoogezand en de regio Groningen.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
