"use client";

/**
 * HomePageClient.tsx — Premium Noordlijn Chauffeurs homepage.
 */

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/lib/translations";
import { BUSINESS } from "@/lib/business";
import Button from "@/components/Button";
import HowItWorks from "@/components/HowItWorks";
import QuickBookingSection from "@/components/QuickBookingSection";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";

/* ── Colour tokens ── */
const C = {
  bg:         "#050914",
  dark:       "#080A14",
  navy:       "#0B1020",
  card:       "rgba(8,13,28,0.88)",
  border:     "#1E2A42",
  borderGold: "rgba(210,164,58,0.35)",
  gold:       "#D2A43A",
  goldDim:    "rgba(210,164,58,0.12)",
  cream:      "#F4EFE3",
  muted:      "#C9C3B8",
  mutedDark:  "#A09488",
};

/* ── SVG icon paths (no emoji) ── */
const ICONS = {
  calendar: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  tag: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  chevron: "M9 5l7 7-7 7",
  phone: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  person: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  check: "M9 12l2 2 4-4",
  pin: "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  plane: "M10.18 9.15L3 6.5l1.15-2 8.55 1.35L17.8 1.8a2 2 0 012.55.1 2 2 0 01.08 2.84l-4.1 5.1 1.35 8.55-2 1.15-2.65-7.18-4.28 4.28.18 3.04-1.62.92-1.64-4.18-4.18-1.64.92-1.62 3.04.18 4.28-4.2z",
  briefcase: "M10 6V5a2 2 0 012-2h0a2 2 0 012 2v1m-8 0h12a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2zm0 5h12",
  route: "M6 19a3 3 0 100-6 3 3 0 000 6zm12-8a3 3 0 100-6 3 3 0 000 6zM8.5 14.5l7-5",
  clipboard: "M9 5h6m-7 2h8a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2zm1-4h6a1 1 0 011 1v2H8V4a1 1 0 011-1zm1 11l1.5 1.5L15 12",
};

const WA_PATH = "M16 3C8.832 3 3 8.832 3 16c0 2.295.618 4.537 1.79 6.504L3 29l6.652-1.748A13.01 13.01 0 0016 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm0 2c6.065 0 11 4.935 11 11S22.065 27 16 27a10.99 10.99 0 01-5.578-1.523l-.34-.207-3.948 1.036 1.067-3.844-.226-.352A10.966 10.966 0 015 16C5 9.935 9.935 5 16 5zm-2.7 4.5c-.264 0-.694.099-.955.374-.261.274-.999.976-.999 2.38 0 1.404 1.021 2.762 1.163 2.953.143.19 2.007 3.07 4.865 4.306.68.293 1.21.468 1.624.599.682.218 1.304.187 1.795.114.547-.082 1.685-.689 1.922-1.354.237-.665.237-1.235.166-1.354-.071-.12-.261-.19-.546-.333-.285-.143-1.685-.832-1.946-.927-.261-.095-.452-.143-.642.143-.19.285-.737.927-.902 1.117-.166.19-.332.214-.617.071-.285-.143-1.203-.443-2.292-1.414-.847-.754-1.419-1.686-1.585-1.97-.166-.285-.018-.44.125-.582.128-.127.285-.333.428-.499.143-.166.19-.285.285-.475.095-.19.047-.357-.024-.499-.071-.143-.641-1.547-.878-2.117-.231-.555-.465-.48-.642-.488-.166-.007-.356-.009-.547-.009z";

/* ── Reusable stroke icon ── */
function Icon({ d, size = 20, color = C.gold, sw = 1.5 }: { d: string; size?: number; color?: string; sw?: number }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={sw} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

function DemoReviewBadge({ lang }: { lang: "nl" | "en" }) {
  return (
    <div className="flex flex-wrap items-center gap-2 pt-2 text-sm" aria-label={lang === "nl" ? "Demo review badge" : "Demo review badge"}>
      <span className="font-semibold" style={{ color: C.cream }}>
        {lang === "nl" ? "Uitstekend" : "Excellent"}
      </span>
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, idx) => (
          <span key={idx} className="flex h-5 w-5 items-center justify-center rounded-[2px]" style={{ backgroundColor: "#00B67A", color: "#fff" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.7l2.85 5.78 6.38.93-4.62 4.5 1.09 6.36L12 17.27l-5.7 3 1.09-6.36-4.62-4.5 6.38-.93L12 2.7z" />
            </svg>
          </span>
        ))}
      </span>
      <span style={{ color: C.cream }}>
        {lang === "nl" ? "4.9 uit 5" : "4.9 out of 5"}
      </span>
      <span className="text-xs" style={{ color: C.mutedDark }}>
        {lang === "nl" ? "portfolio mockup" : "portfolio mockup"}
      </span>
    </div>
  );
}

function HeroRequestPanel({ lang }: { lang: "nl" | "en" }) {
  const fieldBase = "w-full rounded-md border py-3 text-[14px] outline-none transition-colors placeholder:text-[#8B857C] focus:border-[#D2A43A]";
  const fieldStyle = {
    backgroundColor: "rgba(244,239,227,0.08)",
    borderColor: "rgba(244,239,227,0.12)",
    color: C.cream,
  };

  return (
    <aside
      id="hero-request-panel"
      className="hidden w-full max-w-[360px] rounded-xl border p-5 shadow-2xl lg:block"
      style={{
        backgroundColor: "rgba(10,15,29,0.92)",
        borderColor: "rgba(244,239,227,0.10)",
        boxShadow: "0 24px 70px rgba(0,0,0,0.38)",
        backdropFilter: "blur(14px)",
      }}
      aria-label={lang === "nl" ? "Transferaanvraag" : "Transfer request"}
    >
      <div className="mb-4">
        <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: C.cream }}>
          {lang === "nl" ? "Plan uw rit" : "Plan your ride"}
        </h2>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>
          {lang === "nl"
            ? "Ontvang een passende offerte na beoordeling van uw aanvraag."
            : "Receive a suitable quote after your request is reviewed."}
        </p>
      </div>

      <form action="/book" method="get" className="grid gap-3">
        <label className="relative block">
          <span className="absolute left-4 top-1/2 -translate-y-1/2">
            <Icon d={ICONS.pin} size={16} />
          </span>
          <span className="sr-only">{lang === "nl" ? "Ophaallocatie" : "Pickup location"}</span>
          <input
            name="pickup"
            required
            autoComplete="street-address"
            placeholder={lang === "nl" ? "Ophaallocatie" : "Pickup location"}
            className={`${fieldBase} pl-11 pr-4`}
            style={fieldStyle}
          />
        </label>

        <label className="relative block">
          <span className="absolute left-4 top-1/2 -translate-y-1/2">
            <Icon d={ICONS.pin} size={16} />
          </span>
          <span className="sr-only">{lang === "nl" ? "Bestemming" : "Destination"}</span>
          <input
            name="destination"
            required
            placeholder={lang === "nl" ? "Bestemming" : "Destination"}
            className={`${fieldBase} pl-11 pr-4`}
            style={fieldStyle}
          />
        </label>

        <div className="grid grid-cols-2 gap-2">
          <label className="relative block">
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              <Icon d={ICONS.calendar} size={15} />
            </span>
            <span className="sr-only">{lang === "nl" ? "Datum" : "Date"}</span>
            <input
              name="date"
              type="date"
              required
              className={`${fieldBase} pl-10 pr-3`}
              style={fieldStyle}
            />
          </label>
          <label className="relative block">
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              <Icon d={ICONS.clock} size={15} />
            </span>
            <span className="sr-only">{lang === "nl" ? "Tijd" : "Time"}</span>
            <input
              name="time"
              type="time"
              required
              className={`${fieldBase} pl-10 pr-3`}
              style={fieldStyle}
            />
          </label>
        </div>

        <label className="relative block">
          <span className="absolute left-4 top-1/2 -translate-y-1/2">
            <Icon d={ICONS.person} size={16} />
          </span>
          <span className="sr-only">{lang === "nl" ? "Aantal passagiers" : "Passengers"}</span>
          <select
            name="passengers"
            defaultValue="1"
            className={`${fieldBase} appearance-none pl-11 pr-10`}
            style={fieldStyle}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
              <option key={count} value={count}>
                {lang === "nl" ? `${count} persoon${count === 1 ? "" : "en"}` : `${count} passenger${count === 1 ? "" : "s"}`}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <Icon d="M6 9l6 6 6-6" size={15} color={C.mutedDark} sw={2} />
          </span>
        </label>

        <label className="relative block">
          <span className="absolute left-4 top-4">
            <Icon d={ICONS.clipboard} size={16} />
          </span>
          <span className="sr-only">{lang === "nl" ? "Opmerkingen" : "Notes"}</span>
          <textarea
            name="notes"
            rows={2}
            placeholder={lang === "nl" ? "Vluchtgegevens, bagage of wensen" : "Flight details, luggage or requests"}
            className={`${fieldBase} resize-none pl-11 pr-4`}
            style={fieldStyle}
          />
        </label>

        <p className="text-xs leading-relaxed" style={{ color: C.mutedDark }}>
          {lang === "nl"
            ? "Aanvragen worden beoordeeld voordat ze bevestigd worden."
            : "Requests are reviewed before confirmation."}
        </p>

        <button
          type="submit"
          className="mt-1 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-extrabold transition-all hover:brightness-105 active:scale-[0.98]"
          style={{ backgroundColor: C.gold, color: C.bg, boxShadow: "0 14px 28px rgba(210,164,58,0.18)" }}
        >
          {lang === "nl" ? "Offerte aanvragen" : "Request a quote"}
          <Icon d={ICONS.chevron} size={15} color={C.bg} sw={2.6} />
        </button>
      </form>
    </aside>
  );
}

export default function HomePageClient() {
  const { lang } = useLanguage();
  const serviceStrip = [
    {
      icon: ICONS.plane,
      title: { nl: "Luchthaventransfers", en: "Airport transfers" },
      desc: { nl: "Schiphol, Eelde Airport", en: "Schiphol, Eelde Airport" },
    },
    {
      icon: ICONS.briefcase,
      title: { nl: "Zakelijk vervoer", en: "Business travel" },
      desc: { nl: "Discreet, representatief", en: "Discreet and polished" },
    },
    {
      icon: ICONS.route,
      title: { nl: "Lange ritten", en: "Long-distance journeys" },
      desc: { nl: "Door Nederland en daarbuiten", en: "Across the Netherlands and beyond" },
    },
    {
      icon: ICONS.shield,
      title: { nl: "Heldere afspraken", en: "Clear arrangements" },
      desc: { nl: "Geen verrassingen", en: "No surprises" },
    },
  ];

  return (
    <div style={{ backgroundColor: C.bg, color: C.cream }}>

      <section id="hero" className="relative overflow-hidden" style={{ backgroundColor: C.dark, borderBottom: `1px solid ${C.border}` }}>
        <Image
          src="/images/noordlijn-hero-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover object-[58%_center]"
          priority
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,9,20,0.98) 0%, rgba(5,9,20,0.82) 35%, rgba(5,9,20,0.28) 66%, rgba(5,9,20,0.76) 100%), linear-gradient(180deg, rgba(5,9,20,0.34) 0%, rgba(5,9,20,0.18) 42%, rgba(5,9,20,0.96) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 pb-8 pt-12 md:px-6 md:pb-12 md:pt-16 lg:min-h-[610px] lg:grid-cols-[1fr_390px] lg:items-center lg:pb-28 lg:pt-16">
          <div className="flex max-w-2xl flex-col items-start gap-5 text-left">
            <div className="inline-flex items-center gap-2 border-l pl-3" style={{ borderColor: "rgba(210,164,58,0.72)" }}>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: C.gold }}>
                {lang === "nl" ? "Premium chauffeurservice vanuit Groningen" : "Premium chauffeur service from Groningen"}
              </span>
            </div>

            <h1 className="font-extrabold tracking-tight leading-[1.06]" style={{ color: C.cream, fontSize: "clamp(3rem, 5.4vw, 5.25rem)" }}>
              {lang === "nl" ? (
                <>
                  Comfortabel reizen.
                  <br />
                  Zorgvuldig gepland.
                </>
              ) : (
                <>
                  Travel in comfort.
                  <br />
                  Planned with care.
                </>
              )}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: C.muted }}>
              {lang === "nl"
                ? "Luchthaventransfers, zakelijke ritten en langeafstandstrajecten met discrete service en duidelijke afspraken."
                : "Airport transfers, business travel and long-distance journeys with discreet service and clear planning."}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full sm:w-auto">
              <a href="/book" id="hero-book-btn"
                className="inline-flex items-center justify-center gap-2 rounded-md font-bold transition-all hover:brightness-105 active:scale-[0.98] w-full sm:w-auto"
                style={{ backgroundColor: C.gold, color: C.bg, padding: "15px 30px", fontSize: "1rem", minHeight: 54, boxShadow: "0 16px 34px rgba(210,164,58,0.24)" }}>
                <Icon d={ICONS.calendar} size={17} color={C.bg} sw={2.4} />
                {lang === "nl" ? "Plan een transfer" : "Plan a transfer"}
              </a>
              <a href="/services" id="hero-services-btn"
                className="inline-flex items-center justify-center rounded-md font-semibold transition-all hover:text-[#F4EFE3] active:scale-[0.98] w-full sm:w-auto"
                style={{ color: C.cream, border: "1px solid rgba(244,239,227,0.24)", backgroundColor: "rgba(5,9,20,0.38)", padding: "14px 26px", fontSize: "0.95rem", minHeight: 52 }}>
                {lang === "nl" ? "Bekijk diensten" : "View services"}
              </a>
            </div>

            <DemoReviewBadge lang={lang} />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2 text-sm" style={{ color: C.cream }}>
              <span className="font-semibold">{lang === "nl" ? "Groningen" : "Groningen"}</span>
              {["Eelde Airport", "Assen", "Schiphol"].map((dest) => (
                <span key={dest} className="flex items-center gap-3" style={{ color: C.muted }}>
                  <span className="h-1 w-1 rounded-full" style={{ backgroundColor: C.gold }} aria-hidden="true" />
                  {dest}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden justify-self-end lg:block">
            <HeroRequestPanel lang={lang} />
          </div>
        </div>

        <div
          className="relative z-20 mx-4 mb-6 grid max-w-6xl grid-cols-2 overflow-hidden rounded-xl border md:mx-6 lg:absolute lg:inset-x-0 lg:bottom-6 lg:mx-auto lg:mb-0 lg:grid-cols-4"
          style={{ backgroundColor: "rgba(10,15,29,0.92)", borderColor: "rgba(244,239,227,0.13)", backdropFilter: "blur(14px)" }}
        >
          {serviceStrip.map((item, idx) => (
            <div
              key={tx(item.title, lang)}
              className={`flex min-h-[88px] items-center gap-3 px-4 py-4 md:min-h-[92px] md:px-5 ${
                idx < 2 ? "border-b md:border-b-0" : ""
              } ${idx % 2 === 0 ? "border-r" : ""} ${
                idx < serviceStrip.length - 1 ? "md:border-r" : "md:border-r-0"
              }`}
              style={{
                borderColor: "rgba(244,239,227,0.08)",
              }}
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(210,164,58,0.08)", color: C.gold }}
              >
                <Icon d={item.icon} size={20} color={C.gold} sw={1.7} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold leading-snug" style={{ color: C.cream }}>
                  {tx(item.title, lang)}
                </span>
                <span className="mt-1 block text-xs leading-relaxed" style={{ color: C.mutedDark }}>
                  {tx(item.desc, lang)}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="lg:hidden">
        <QuickBookingSection lang={lang} />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3: HOW IT WORKS — 3 compact steps
      ══════════════════════════════════════════════════════════════ */}
      <HowItWorks
        heading={tx(t.howItWorks.heading, lang)}
        steps={[
          { title: tx(t.howItWorks.step1title, lang), description: tx(t.howItWorks.step1desc, lang) },
          { title: tx(t.howItWorks.step2title, lang), description: tx(t.howItWorks.step2desc, lang) },
          { title: tx(t.howItWorks.step3title, lang), description: tx(t.howItWorks.step3desc, lang) },
        ]}
        notice={tx(t.howItWorks.notice, lang)}
      />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4: POSITIONING — personal trust with visual
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-14 px-4 md:px-6" style={{ backgroundColor: C.dark, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="flex flex-col items-start gap-5">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.gold }}>
              {lang === "nl" ? "Chauffeurservice" : "Chauffeur service"}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-snug" style={{ color: C.cream }}>{tx(t.meetDriver.heading, lang)}</h2>
            <p className="text-[15px] leading-relaxed" style={{ color: C.muted, fontWeight: 420 }}>{tx(t.meetDriver.body, lang)}</p>
            <ul className="flex flex-col gap-3.5 pt-1">
              {t.meetDriver.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(210,164,58,0.09)" }} aria-hidden="true">
                    <Icon d={ICONS.check} size={10} color={C.gold} sw={3} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: C.muted }}>{tx(point, lang)}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 pt-3 w-full sm:w-auto">
              <a href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-all hover:brightness-105 active:scale-[0.98] w-full sm:w-auto"
                style={{ backgroundColor: C.gold, color: C.bg, padding: "13px 24px", fontSize: "0.95rem", minHeight: 48 }}>
                <Icon d={ICONS.phone} size={16} color={C.bg} sw={2.5} />
                {tx(t.hero.ctaCall, lang)}
              </a>
              <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all hover:border-[#D2A43A] hover:text-[#F4EFE3] active:scale-[0.98] w-full sm:w-auto"
                style={{ backgroundColor: "rgba(244,239,227,0.035)", color: C.muted, border: "1px solid rgba(244,239,227,0.16)", padding: "13px 24px", fontSize: "0.95rem", minHeight: 48 }}>
                <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" className="shrink-0 text-green-400"><path d={WA_PATH} /></svg>
                {tx(t.hero.ctaWhatsapp, lang)}
              </a>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-[360px] md:max-w-md lg:max-w-[420px] rounded-2xl overflow-hidden" style={{ border: `1px solid rgba(210,164,58,0.20)` }}>
              <Image src="/images/noordlijn-hero.svg" alt="Noordlijn Chauffeurs chauffeur service concept artwork" width={600} height={600}
                className="w-full aspect-square md:aspect-[4/5] object-cover" style={{ objectPosition: "25% center" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5: PERSONAL SERVICE — trust & promises (different bg)
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-14 px-4 md:px-6" style={{ backgroundColor: C.navy, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: C.gold }}>
              {lang === "nl" ? "Geplande chauffeurservice" : "Pre-booked chauffeur service"}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-snug mb-5" style={{ color: C.cream }}>{tx(t.vipService.heading, lang)}</h2>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: C.muted, fontWeight: 420 }}>{tx(t.vipService.intro, lang)}</p>
            <Button href="/book" variant="primary" id="exp-driver-book-btn" className="py-3.5 px-8">
              {lang === "nl" ? "Transfer plannen" : "Plan a transfer"}
            </Button>
          </div>
          <ul className="flex flex-col gap-4 pt-1">
            {t.vipService.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(210,164,58,0.09)" }} aria-hidden="true">
                  <Icon d={ICONS.check} size={10} color={C.gold} sw={3} />
                </div>
                <span className="text-sm leading-relaxed font-medium" style={{ color: C.muted }}>{tx(point, lang)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6: SERVICES — 4 cards
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-14 px-4 md:px-6" style={{ backgroundColor: C.dark }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: C.gold }}>
            {lang === "nl" ? "Wat wij aanbieden" : "What we offer"}
          </p>
          <h2 className="text-2xl font-bold mb-7 text-center tracking-tight" style={{ color: C.cream }}>{tx(t.services.heading, lang)}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.services.items.map((item, idx) => (
              <ServiceCard key={idx} icon={item.icon} title={tx(item.title, lang)} description={tx(item.desc, lang)} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/services" variant="secondary" id="home-all-services-btn">
              {lang === "nl" ? "Alle diensten bekijken" : "View all services"} →
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7: PREMIUM COMFORT — visual break
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-14 px-4 md:px-6 relative overflow-hidden" style={{ backgroundColor: C.navy, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(210,164,58,0.04) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.gold }}>Comfort</p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: C.cream }}>{tx(t.mercedes.heading, lang)}</h2>
          <p className="text-[15px] leading-relaxed max-w-2xl" style={{ color: C.muted, fontWeight: 420 }}>{tx(t.mercedes.body, lang)}</p>
          <div className="mt-2 rounded-xl overflow-hidden w-full max-w-lg" style={{ border: `1px solid rgba(244,239,227,0.08)` }}>
            <Image src="/images/noordlijn-interior.svg" alt="Noordlijn Chauffeurs interior concept artwork" width={620} height={320} className="w-full h-56 object-cover" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8: SERVICE AREA — location chips
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-14 px-4 md:px-6" style={{ backgroundColor: C.dark }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 tracking-tight" style={{ color: C.cream }}>{tx(t.groningenVervoer.heading, lang)}</h2>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: C.muted, fontWeight: 420 }}>{tx(t.groningenVervoer.intro, lang)}</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {(lang === "nl" ? BUSINESS.serviceArea : BUSINESS.serviceAreaEn).map((area) => (
              <span key={area} className="text-[13px] font-medium px-3.5 py-2 rounded-full flex items-center gap-1.5" style={{ backgroundColor: C.navy, border: `1px solid ${C.border}`, color: C.muted }}>
                <Icon d={ICONS.pin} size={11} color={C.mutedDark} sw={2} />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 9: WHY NOORDLIJN — reason cards
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-11 md:py-14 px-4 md:px-6" style={{ backgroundColor: C.navy, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center tracking-tight" style={{ color: C.cream }}>{tx(t.whyUs.heading, lang)}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.whyUs.points.map((point, idx) => (
              <div key={idx} className="flex flex-col gap-3 rounded-xl p-4" style={{ backgroundColor: C.dark, border: `1px solid rgba(244,239,227,0.08)` }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(210,164,58,0.09)" }} aria-hidden="true">
                  <Icon d={ICONS.check} size={14} color={C.gold} sw={3} />
                </div>
                <h3 className="font-semibold text-sm" style={{ color: C.cream }}>{tx(point.title, lang)}</h3>
                <p className="text-sm leading-relaxed font-medium" style={{ color: C.muted }}>{tx(point.desc, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 10: FAQ — accordion
      ══════════════════════════════════════════════════════════════ */}
      <FAQSection
        heading={tx(t.faq.heading, lang)}
        items={t.faq.items.map((item) => ({ question: tx(item.q, lang), answer: tx(item.a, lang) }))}
      />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 10B: SERVICE VALUES
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-11 md:py-14 px-4 md:px-6" style={{ backgroundColor: C.dark, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: C.gold }}>
              {lang === "nl" ? "Kernwaarden" : "Service values"}
            </p>
            <h2 className="text-2xl font-bold tracking-tight mb-3" style={{ color: C.cream }}>
              {tx(t.testimonials.heading, lang)}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
              {tx(t.testimonials.intro, lang)}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.testimonials.items.map((item) => (
              <article key={tx(item.author, lang)} className="rounded-xl p-4" style={{ backgroundColor: C.navy, border: "1px solid rgba(244,239,227,0.08)" }}>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: C.gold }}>
                  {lang === "nl" ? "Chauffeurconcept" : "Chauffeur concept"}
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: C.muted }}>
                  {tx(item.quote, lang)}
                </p>
                <p className="text-xs font-semibold" style={{ color: C.cream }}>
                  {tx(item.author, lang)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 11: FINAL CTA — visually distinct booking block
          Slightly different background with subtle gold ambient glow
          to break away from the identical dark card pattern.
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-12 md:py-14 px-4 md:px-6 overflow-hidden" style={{ borderTop: `1px solid ${C.border}` }}>
        {/* Distinct background: darker base + subtle gold radial glow */}
        <div className="absolute inset-0" style={{ backgroundColor: "#040710" }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(210,164,58,0.06) 0%, transparent 60%)",
        }} aria-hidden="true" />
        {/* Top gold accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px" style={{ width: "min(80%, 400px)", background: `linear-gradient(90deg, transparent, ${C.gold}40, transparent)` }} aria-hidden="true" />

        <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: C.cream }}>
            {tx(t.finalCta.heading, lang)}
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: C.muted, fontWeight: 420 }}>
            {tx(t.finalCta.sub, lang)}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center pt-2">
            <a href="/book" id="final-book-btn"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg font-bold transition-all hover:brightness-105 active:scale-[0.98] w-full sm:w-auto text-center"
              style={{ backgroundColor: C.gold, color: C.bg, padding: "14px 28px", fontSize: "1rem", minHeight: 50, boxShadow: "0 12px 24px rgba(210,164,58,0.16)" }}>
              <Icon d={ICONS.calendar} size={18} color={C.bg} sw={2.5} />
              {tx(t.finalCta.ctaBook, lang)}
            </a>
            <a href={`https://wa.me/${BUSINESS.whatsapp}`} id="final-whatsapp-btn" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg font-semibold transition-all hover:border-[#D2A43A] hover:text-[#F4EFE3] active:scale-[0.98] w-full sm:w-auto text-center"
              style={{ backgroundColor: "rgba(244,239,227,0.035)", color: C.muted, border: "1px solid rgba(244,239,227,0.16)", padding: "14px 26px", fontSize: "0.96rem", minHeight: 50 }}>
              <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" className="shrink-0 text-green-400" aria-hidden="true"><path d={WA_PATH} /></svg>
              {tx(t.finalCta.ctaWhatsapp, lang)}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
