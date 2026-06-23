import type { Metadata } from "next";
import BookPageClient from "@/components/pages/BookPageClient";

export const metadata: Metadata = {
  title: "Plan a Transfer",
  description:
    "Plan an airport transfer, business journey or long-distance chauffeur request for the fictional Noordlijn Chauffeurs concept.",
  openGraph: {
    title: "Plan a Transfer | Noordlijn Chauffeurs",
    description:
      "Chauffeur request flow for airport transfers, business travel and private journeys.",
  },
};

export default function BookPage() {
  return <BookPageClient />;
}
