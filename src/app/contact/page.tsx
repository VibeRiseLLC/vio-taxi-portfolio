import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Demo contact page for Northline Private Hire, a fictional private-hire portfolio brand.",
  openGraph: {
    title: "Contact | Northline Private Hire",
    description:
      "Use sample Call, WhatsApp and email actions in this fictional portfolio demo.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
