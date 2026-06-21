import type { Metadata } from "next";
import TermsPageClient from "@/components/pages/TermsPageClient";

export const metadata: Metadata = {
  title: "Boekingsvoorwaarden",
  description:
    "Boekingsvoorwaarden van VioTaxi. Online ritaanvragen zijn geen automatische bevestigingen. VioTaxi neemt contact op na ontvangst.",
  openGraph: {
    title: "Boekingsvoorwaarden | VioTaxi Hoogezand",
    description:
      "Lees de boekingsvoorwaarden van VioTaxi voordat u een ritaanvraag indient.",
  },
};

export default function TermsPage() {
  return <TermsPageClient />;
}
