import type { Metadata } from "next";
import HomePageClient from "@/components/pages/HomePageClient";

export const metadata: Metadata = {
  title: "Northline Private Hire | Premium Airport Transfers Groningen",
  description:
    "Portfolio demo for a fictional private-hire company offering premium airport transfers and chauffeur rides from Groningen.",
  openGraph: {
    title: "Northline Private Hire | Premium Airport Transfers Groningen",
    description:
      "Fictional portfolio website for calm, premium private-hire booking flows.",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
