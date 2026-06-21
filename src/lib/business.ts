/**
 * business.ts
 * Single source of truth for all VioTaxi business data.
 * Update this file when real business details are confirmed.
 */

export const BUSINESS = {
  name: "VioTaxi",
  tagline: {
    nl: "Betrouwbare taxi in Hoogezand en de regio Groningen",
    en: "Reliable taxi service in Hoogezand and the Groningen region",
  },
  location: "Hoogezand, Nederland",
  phone: "+31619177707",
  phoneDisplay: "+31 6 19177707",
  whatsapp: "31619177707", // Format for wa.me (no + prefix)
  whatsappDisplay: "+31 6 19177707",
  email: "info@viotaxi.nl",
  domain: "viotaxi.nl",
  googleRating: "5.0",
  reviewCount: 6,
  serviceArea: [
    "Hoogezand",
    "Sappemeer",
    "Foxhol",
    "Kropswolde",
    "Westerbroek",
    "Zuidbroek",
    "Veendam",
    "Groningen",
    "Groningen Airport Eelde",
    "Schiphol (op aanvraag)",
  ],
  serviceAreaEn: [
    "Hoogezand",
    "Sappemeer",
    "Foxhol",
    "Kropswolde",
    "Westerbroek",
    "Zuidbroek",
    "Veendam",
    "Groningen",
    "Groningen Airport Eelde",
    "Schiphol (on request)",
  ],
} as const;
