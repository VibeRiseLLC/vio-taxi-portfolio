import type { Metadata } from "next";
import ServicesPageClient from "@/components/pages/ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the Noordlijn Chauffeurs concept for airport transfers, business travel and long-distance private transport.",
  openGraph: {
    title: "Services | Noordlijn Chauffeurs",
    description:
      "Service overview for a polished fictional chauffeurservice portfolio concept.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
