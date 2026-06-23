import type { Metadata } from "next";
import ServicesPageClient from "@/components/pages/ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore fictional Northline Private Hire services for premium airport transfers, business rides and private chauffeur trips.",
  openGraph: {
    title: "Services | Northline Private Hire",
    description:
      "Fictional service overview for a polished private-hire portfolio demo.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
