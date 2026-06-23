import type { Metadata } from "next";
import PrivacyPageClient from "@/components/pages/PrivacyPageClient";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Privacy policy for the fictional Noordlijn Chauffeurs portfolio concept.",
  openGraph: {
    title: "Privacy Policy | Noordlijn Chauffeurs",
    description:
      "How chauffeur request data is composed in this fictional portfolio website.",
  },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
