import type { Metadata } from "next";
import PrivacyPageClient from "@/components/pages/PrivacyPageClient";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Privacy policy for the fictional Northline Private Hire portfolio demo.",
  openGraph: {
    title: "Privacy Policy | Northline Private Hire",
    description:
      "How demo ride-request data is handled in this fictional portfolio website.",
  },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
