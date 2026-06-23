import type { Metadata } from "next";
import TermsPageClient from "@/components/pages/TermsPageClient";

export const metadata: Metadata = {
  title: "Boekingsvoorwaarden",
  description:
    "Booking terms for the fictional Northline Private Hire portfolio demo.",
  openGraph: {
    title: "Booking Terms | Northline Private Hire",
    description:
      "Demo terms explaining that requests do not create real bookings.",
  },
};

export default function TermsPage() {
  return <TermsPageClient />;
}
