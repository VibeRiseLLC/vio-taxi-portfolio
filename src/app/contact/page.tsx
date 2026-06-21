import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met VioTaxi in Hoogezand. Bel, WhatsApp of stuur een e-mail. Voor spoedritten is bellen het snelst.",
  openGraph: {
    title: "Contact | VioTaxi Hoogezand",
    description:
      "Neem direct contact op met VioTaxi. Bel of stuur een WhatsApp voor de snelste reactie.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
