import type { Metadata } from "next";
import TermsPageClient from "@/components/pages/TermsPageClient";

export const metadata: Metadata = {
  title: "Boekingsvoorwaarden",
  description:
    "Booking terms for the fictional Noordlijn Chauffeurs portfolio concept.",
  openGraph: {
    title: "Booking Terms | Noordlijn Chauffeurs",
    description:
      "Terms explaining that requests do not create confirmed chauffeur bookings.",
  },
};

export default function TermsPage() {
  return <TermsPageClient />;
}
