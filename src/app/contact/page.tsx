import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact actions for the fictional Noordlijn Chauffeurs portfolio concept.",
  openGraph: {
    title: "Contact | Noordlijn Chauffeurs",
    description:
      "Call, WhatsApp and email actions for a premium chauffeurservice concept.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
