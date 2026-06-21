import type { Metadata } from "next";
import BookPageClient from "@/components/pages/BookPageClient";

export const metadata: Metadata = {
  title: "Rit reserveren",
  description:
    "Reserveer een taxi bij VioTaxi in Hoogezand. Vul het formulier in en VioTaxi neemt contact met u op om de rit te bevestigen.",
  openGraph: {
    title: "Rit reserveren | VioTaxi Hoogezand",
    description:
      "Reserveer een taxi in Hoogezand en de regio Groningen. Online aanvragen worden handmatig bevestigd door VioTaxi.",
  },
};

export default function BookPage() {
  return <BookPageClient />;
}
