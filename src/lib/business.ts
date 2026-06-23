/**
 * business.ts
 * Single source of truth for Northline Private Hire demo data.
 */

export const BUSINESS = {
  name: "Northline Private Hire",
  tagline: {
    nl: "Premium luchthaventransfers en privechauffeurritten",
    en: "Premium airport transfers and private chauffeur rides",
  },
  location: "Groningen, Netherlands",
  phone: "+31612345678",
  phoneDisplay: "+31 6 1234 5678",
  whatsapp: "31612345678",
  whatsappDisplay: "+31 6 1234 5678",
  email: "hello@northlineprivatehire.example",
  domain: "northlineprivatehire.example",
  demoNotice:
    "Portfolio demonstration website. Northline Private Hire is a fictional brand created for design and development showcase purposes.",
  serviceArea: [
    "Groningen",
    "Haren",
    "Hoogezand",
    "Sappemeer",
    "Assen",
    "Schiphol Airport",
  ],
  serviceAreaEn: [
    "Groningen",
    "Haren",
    "Hoogezand",
    "Sappemeer",
    "Assen",
    "Schiphol Airport",
  ],
} as const;
