import type { Metadata } from "next";
import PrivacyPageClient from "@/components/pages/PrivacyPageClient";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Privacyverklaring van VioTaxi. Welke gegevens worden verzameld bij een ritaanvraag en hoe worden ze gebruikt.",
  openGraph: {
    title: "Privacyverklaring | VioTaxi Hoogezand",
    description:
      "Hoe VioTaxi omgaat met uw persoonsgegevens bij het indienen van een ritaanvraag.",
  },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
