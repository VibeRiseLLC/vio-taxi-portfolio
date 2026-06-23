/**
 * business.ts
 * Single source of truth for Noordlijn Chauffeurs concept data.
 */

export const BUSINESS = {
  name: "Noordlijn Chauffeurs",
  tagline: {
    nl: "Premium chauffeurservice en airport transfers vanuit Groningen",
    en: "Premium chauffeur service and airport transfers from Groningen",
  },
  location: "Groningen, Netherlands",
  phone: "+31612345678",
  phoneDisplay: "+31 6 1234 5678",
  whatsapp: "31612345678",
  whatsappDisplay: "+31 6 1234 5678",
  email: "hello@noordlijnchauffeurs.example",
  domain: "noordlijnchauffeurs.example",
  demoNotice:
    "Portfolio demonstration website. Noordlijn Chauffeurs is a fictional brand created for design and development showcase purposes.",
  serviceArea: [
    "Groningen",
    "Hoogezand",
    "Eelde Airport",
    "Assen",
    "Schiphol",
    "Noord-Nederland",
  ],
  serviceAreaEn: [
    "Groningen",
    "Hoogezand",
    "Eelde Airport",
    "Assen",
    "Schiphol",
    "Northern Netherlands",
  ],
} as const;
