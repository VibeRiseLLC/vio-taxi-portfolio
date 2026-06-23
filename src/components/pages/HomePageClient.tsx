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

export default function HomePageClient() {
  const { lang } = useLanguage();

  return (
    <div style={{ backgroundColor: C.bg, color: C.cream }}>

      <section id="hero" className="relative overflow-hidden" style={{ backgroundColor: C.dark, borderBottom: `1px solid ${C.border}` }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(180deg, rgba(13,17,32,0.72), rgba(5,9,20,0.96))",
        }} aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 md:py-12 lg:py-14 grid gap-8 md:grid-cols-[1.02fr_0.98fr] md:items-center">
          <div className="flex flex-col items-start text-left gap-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 border-l pl-3" style={{ borderColor: "rgba(210,164,58,0.72)" }}>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: C.gold }}>
                {tx(t.hero.trustBadge, lang)}
              </span>
            </div>

            <h1 className="font-extrabold tracking-tight leading-[1.05]" style={{ color: C.cream, fontSize: "clamp(2.2rem, 3.8vw, 3.55rem)" }}>
              {tx(t.hero.title, lang)}
            </h1>

            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.muted }}>
              {tx(t.hero.subtitle, lang)}
            </p>

            <p className="text-sm leading-relaxed max-w-lg" style={{ color: C.mutedDark }}>
              {tx(t.hero.support, lang)}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full sm:w-auto">
              <a href="/book" id="hero-book-btn"
                className="inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-all hover:brightness-105 active:scale-[0.98] w-full sm:w-auto"
                style={{ backgroundColor: C.gold, color: C.bg, padding: "13px 24px", fontSize: "1rem", minHeight: 48, boxShadow: "0 12px 28px rgba(210,164,58,0.18)" }}>
                <Icon d={ICONS.calendar} size={17} color={C.bg} sw={2.4} />
                {tx(t.hero.ctaBook, lang)}
              </a>
              <a href="/services" id="hero-services-btn"
                className="inline-flex items-center justify-center rounded-lg font-semibold transition-all hover:text-[#F4EFE3] active:scale-[0.98] w-full sm:w-auto"
                style={{ color: C.muted, border: "1px solid rgba(244,239,227,0.18)", padding: "12px 20px", fontSize: "0.94rem", minHeight: 46 }}>
                {lang === "nl" ? "Bekijk diensten" : "View services"}
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-1" aria-label={tx(t.hero.popularRides, lang)}>
              {(lang === "nl"
                ? ["Groningen","Hoogezand","Eelde Airport","Assen","Schiphol"]
                : ["Groningen","Hoogezand","Eelde Airport","Assen","Schiphol"]
              ).map((dest) => (
                <a key={dest} href={`/book?dest=${encodeURIComponent(dest)}`}
                  className="rounded-full px-3 py-1.5 text-[11px] font-medium transition-colors"
                  style={{ backgroundColor: "rgba(244,239,227,0.045)", color: "rgba(244,239,227,0.74)", border: "1px solid rgba(244,239,227,0.08)" }}
                >{dest}</a>
              ))}
            </div>
          </div>

          <div className="relative md:justify-self-end w-full">
            <div className="relative mx-auto md:mx-0 w-full max-w-[560px] overflow-hidden rounded-xl" style={{ backgroundColor: "#0B1020", border: `1px solid rgba(244,239,227,0.10)` }}>
              <Image
                src="/images/noordlijn-hero.svg"
                alt="Noordlijn Chauffeurs airport transfer concept artwork"
                width={900}
                height={675}
                sizes="(max-width: 767px) 100vw, 48vw"
                className="block h-auto w-full"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 px-4 py-3" style={{ background: "linear-gradient(180deg, transparent, rgba(5,9,20,0.92))" }}>
                <p className="text-xs font-medium" style={{ color: C.muted }}>
                  Noordlijn Chauffeurs · Groningen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2: TRUST STRIP — desktop only
      ══════════════════════════════════════════════════════════════ */}
      <QuickBookingSection lang={lang} />

      <section className="hidden md:block py-4 px-4" style={{ backgroundColor: "#060810", borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto grid grid-cols-6 gap-6">
          {t.trustStrip.items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 py-2">
              <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
              <span className="text-sm font-medium" style={{ color: C.muted }}>{tx(item.label, lang)}</span>
            </div>
          ))}
        </div>
      </section>

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
      <section className="py-14 md:py-16 px-4 md:px-6" style={{ backgroundColor: C.dark, borderBottom: `1px solid ${C.border}` }}>
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
                className="inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                style={{ backgroundColor: C.gold, color: C.bg, padding: "14px 28px", fontSize: "0.95rem", minHeight: 48 }}>
                <Icon d={ICONS.phone} size={16} color={C.bg} sw={2.5} />
                {tx(t.hero.ctaCall, lang)}
              </a>
              <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                style={{ backgroundColor: "rgba(210,164,58,0.05)", color: C.gold, border: `1.5px solid ${C.gold}`, padding: "14px 28px", fontSize: "0.95rem", minHeight: 48 }}>
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
      <section className="py-14 md:py-16 px-4 md:px-6" style={{ backgroundColor: C.navy, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
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
      <section className="py-14 md:py-16 px-4 md:px-6" style={{ backgroundColor: C.dark }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: C.gold }}>
            {lang === "nl" ? "Wat wij aanbieden" : "What we offer"}
          </p>
          <h2 className="text-2xl font-bold mb-10 text-center tracking-tight" style={{ color: C.cream }}>{tx(t.services.heading, lang)}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((item, idx) => (
              <ServiceCard key={idx} icon={item.icon} title={tx(item.title, lang)} description={tx(item.desc, lang)} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/services" variant="secondary" id="home-all-services-btn">
              {lang === "nl" ? "Alle diensten bekijken" : "View all services"} →
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7: PREMIUM COMFORT — visual break
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-16 px-4 md:px-6 relative overflow-hidden" style={{ backgroundColor: C.navy, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
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
      <section className="py-12 md:py-14 px-4 md:px-6" style={{ backgroundColor: C.navy, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center tracking-tight" style={{ color: C.cream }}>{tx(t.whyUs.heading, lang)}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.whyUs.points.map((point, idx) => (
              <div key={idx} className="flex flex-col gap-3 rounded-2xl p-5" style={{ backgroundColor: C.dark, border: `1px solid ${C.border}` }}>
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
      <section className="py-12 md:py-14 px-4 md:px-6" style={{ backgroundColor: C.dark, borderTop: `1px solid ${C.border}` }}>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.testimonials.items.map((item) => (
              <article key={tx(item.author, lang)} className="rounded-2xl p-5" style={{ backgroundColor: C.navy, border: `1px solid ${C.border}` }}>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: C.gold }}>
                  {lang === "nl" ? "Chauffeurconcept" : "Chauffeur concept"}
                </p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
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
      <section className="relative py-14 md:py-16 px-4 md:px-6 overflow-hidden" style={{ borderTop: `1px solid ${C.border}` }}>
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
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center pt-4">
            <a href="/book" id="final-book-btn"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
              style={{ backgroundColor: C.gold, color: C.bg, padding: "16px 36px", fontSize: "1.0625rem", minHeight: 54, boxShadow: "0 4px 16px rgba(210,164,58,0.20)" }}>
              <Icon d={ICONS.calendar} size={18} color={C.bg} sw={2.5} />
              {tx(t.finalCta.ctaBook, lang)}
            </a>
            <a href={`https://wa.me/${BUSINESS.whatsapp}`} id="final-whatsapp-btn" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
              style={{ backgroundColor: "rgba(210,164,58,0.06)", color: C.gold, border: `1.5px solid ${C.gold}`, padding: "16px 32px", fontSize: "1rem", minHeight: 54 }}>
              <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" className="shrink-0 text-green-400" aria-hidden="true"><path d={WA_PATH} /></svg>
              {tx(t.finalCta.ctaWhatsapp, lang)}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
