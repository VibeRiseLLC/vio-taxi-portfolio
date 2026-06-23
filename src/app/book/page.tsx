import type { Metadata } from "next";
import BookPageClient from "@/components/pages/BookPageClient";

export const metadata: Metadata = {
  title: "Book a Ride",
  description:
    "Compose a demo ride or quote request for Northline Private Hire, a fictional private-hire portfolio brand.",
  openGraph: {
    title: "Book a Ride | Northline Private Hire",
    description:
      "Demo booking flow for airport transfers and private chauffeur rides.",
  },
};

export default function BookPage() {
  return <BookPageClient />;
}
