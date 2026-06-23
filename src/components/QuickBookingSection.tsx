"use client";

import type { ReactNode } from "react";
import type { Lang } from "@/lib/translations";

const C = {
  bg: "#050914",
  border: "#1E2A42",
  gold: "#D2A43A",
  cream: "#F4EFE3",
  muted: "#C9C3B8",
  mutedDark: "#A09488",
};

const ICONS = {
  calendar: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  pin: "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  user: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
};

function Icon({ d, size = 16, color = C.gold, sw = 1.8 }: { d: string; size?: number; color?: string; sw?: number }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={sw} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

function Field({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: C.mutedDark }}>
        {label}
      </span>
      {children}
    </label>
  );
}

const inputStyle = {
  backgroundColor: "rgba(244,239,227,0.055)",
  borderColor: "rgba(244,239,227,0.13)",
  color: C.cream,
} as const;

export default function QuickBookingSection({ lang }: { lang: Lang }) {
  return (
    <section id="quick-booking" className="px-4 py-7 md:px-6 md:py-9" style={{ backgroundColor: "#060810", borderBottom: `1px solid ${C.border}` }}>
      <div className="mx-auto max-w-6xl">
        <div
          className="grid gap-6 rounded-xl p-4 sm:p-5 md:grid-cols-[0.82fr_1.18fr] md:items-start md:p-6"
          style={{
            backgroundColor: "#0A0F1D",
            border: "1px solid rgba(244,239,227,0.09)",
            boxShadow: "0 18px 50px rgba(0,0,0,0.24)",
          }}
        >
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: C.gold }}>
              {lang === "nl" ? "Transfer aanvragen" : "Transfer request"}
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight leading-tight md:text-[1.7rem]" style={{ color: C.cream }}>
              {lang === "nl" ? "Plan uw chauffeurstraject" : "Plan your chauffeur journey"}
            </h2>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: C.muted }}>
              {lang === "nl"
                ? "Deel de belangrijkste gegevens voor een airport transfer, zakelijke reis of langeafstandstraject."
                : "Share the key details for an airport transfer, business journey or long-distance route."}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: C.mutedDark }}>
              {lang === "nl"
                ? "Aanvragen worden beoordeeld voordat ze bevestigd worden."
                : "Requests are reviewed before confirmation."}
            </p>
          </div>

          <form action="/book" method="get" className="grid gap-3 md:grid-cols-2" aria-label={lang === "nl" ? "Chauffeuraanvraag" : "Chauffeur request"}>
            <Field label={lang === "nl" ? "Ophaallocatie" : "Pickup"}>
              <span className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Icon d={ICONS.pin} />
                </span>
                <input
                  name="pickup"
                  type="text"
                  required
                  autoComplete="street-address"
                  placeholder={lang === "nl" ? "Adres, hotel of station" : "Address, hotel or station"}
                  className="w-full rounded-lg border py-3 pl-10 pr-3 text-[15px]"
                  style={inputStyle}
                />
              </span>
            </Field>

            <Field label={lang === "nl" ? "Bestemming" : "Destination"}>
              <span className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Icon d={ICONS.pin} />
                </span>
                <input
                  name="destination"
                  type="text"
                  required
                  placeholder={lang === "nl" ? "Eelde Airport, Schiphol, Assen..." : "Eelde Airport, Schiphol, Assen..."}
                  className="w-full rounded-lg border py-3 pl-10 pr-3 text-[15px]"
                  style={inputStyle}
                />
              </span>
            </Field>

            <Field label={lang === "nl" ? "Datum" : "Date"}>
              <span className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Icon d={ICONS.calendar} />
                </span>
                <input name="date" type="date" required className="w-full rounded-lg border py-3 pl-10 pr-3 text-[15px]" style={inputStyle} />
              </span>
            </Field>

            <div className="grid grid-cols-[1fr_0.8fr] gap-3">
              <Field label={lang === "nl" ? "Tijd" : "Time"}>
                <input name="time" type="time" required className="w-full rounded-lg border px-3 py-3 text-[15px]" style={inputStyle} />
              </Field>
              <Field label={lang === "nl" ? "Passagiers" : "Passengers"}>
                <span className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Icon d={ICONS.user} />
                  </span>
                  <input name="passengers" type="number" min="1" max="8" defaultValue="1" className="w-full rounded-lg border py-3 pl-10 pr-3 text-[15px]" style={inputStyle} />
                </span>
              </Field>
            </div>

            <Field label={lang === "nl" ? "Opmerkingen" : "Notes"}>
              <input
                name="notes"
                type="text"
                placeholder={lang === "nl" ? "Vluchtgegevens, bagage of wachttijd" : "Flight details, luggage or waiting time"}
                className="w-full rounded-lg border px-3 py-3 text-[15px]"
                style={inputStyle}
              />
            </Field>

            <div className="flex items-end">
              <button
                type="submit"
                id="quick-booking-submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-extrabold transition-all hover:brightness-105 active:scale-[0.98]"
                style={{ backgroundColor: C.gold, color: C.bg, minHeight: 48, boxShadow: "0 12px 24px rgba(210,164,58,0.16)" }}
              >
                <Icon d={ICONS.calendar} size={17} color={C.bg} sw={2.4} />
                {lang === "nl" ? "Aanvraag starten" : "Start request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
