/**
 * whatsapp.ts
 * Generates pre-filled WhatsApp message URLs from booking form data.
 */

import { BUSINESS } from "./business";

export interface BookingData {
  name: string;
  phone: string;
  email?: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  luggage?: string;
  rideType: string;
  notes?: string;
}

/** Build a human-readable WhatsApp message from booking form data */
export function buildWhatsAppUrl(data: BookingData): string {
  const lines = [
    "Hello Noordlijn Chauffeurs, I would like to request a chauffeur journey or airport transfer.",
    "",
    `Naam: ${data.name}`,
    `Telefoon: ${data.phone}`,
    data.email ? `E-mail: ${data.email}` : null,
    `Ophaaladres: ${data.pickup}`,
    `Bestemming: ${data.destination}`,
    `Datum: ${data.date}`,
    `Tijd: ${data.time}`,
    `Passagiers: ${data.passengers}`,
    data.luggage ? `Bagage: ${data.luggage}` : null,
    `Type aanvraag: ${data.rideType}`,
    data.notes ? `Opmerkingen: ${data.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const encoded = encodeURIComponent(lines);
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encoded}`;
}

/** Build a mailto: link with the same booking details */
export function buildMailtoUrl(data: BookingData): string {
  const subject = encodeURIComponent(`Chauffeur request Noordlijn Chauffeurs - ${data.name}`);
  const body = encodeURIComponent(
    [
      "Hello Noordlijn Chauffeurs,",
      "",
      "I would like to request a chauffeur journey or airport transfer:",
      "",
      `Naam: ${data.name}`,
      `Telefoon: ${data.phone}`,
      data.email ? `E-mail: ${data.email}` : null,
      `Ophaaladres: ${data.pickup}`,
      `Bestemming: ${data.destination}`,
      `Datum: ${data.date}`,
      `Tijd: ${data.time}`,
      `Passagiers: ${data.passengers}`,
      data.luggage ? `Bagage: ${data.luggage}` : null,
      `Type aanvraag: ${data.rideType}`,
      data.notes ? `Opmerkingen: ${data.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n")
  );
  return `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
}
