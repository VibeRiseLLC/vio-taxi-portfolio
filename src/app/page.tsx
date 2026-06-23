import type { Metadata } from "next";
import HomePageClient from "@/components/pages/HomePageClient";

export const metadata: Metadata = {
  title: "Noordlijn Chauffeurs | Premium Chauffeurservice Groningen",
  description:
    "Fictional portfolio concept for premium chauffeurservice, airport transfers and business travel from Groningen.",
  openGraph: {
    title: "Noordlijn Chauffeurs | Premium Chauffeurservice Groningen",
    description:
      "Fictional portfolio website for a calm, premium chauffeurservice booking flow.",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
