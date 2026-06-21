"use client";

/**
 * HomePageClient.tsx — Premium VioTaxi homepage.
 * Mobile hero: split-composition with dark left text zone + Vio/car revealed on right.
 * ALL text + buttons stay inside the left content zone. Nothing overlaps Vio.
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

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1: HERO
      ══════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative overflow-hidden" style={{ borderBottom: `1px solid ${C.border}` }}>

        {/* ── MOBILE HERO ── */}
        <div className="block md:hidden">
          <div className="mobile-hero-shell">
            
            {/* 1. Image layer (Right-side only) */}
            <div className="mobile-hero-art">
              <Image
                src="/images/vio-exterior.jpg"
                alt="VioTaxi persoonlijke chauffeur"
                width={900}
                height={1400}
                sizes="100vw"
                className="pointer-events-none select-none"
                priority
              />
            </div>

            {/* 2. Content layer */}
            <div className="mobile-hero-content">
              {/* Text block with backing panel */}
              <div className="mobile-hero-copy">
                {/* Title */}
                <h1
                  className="font-extrabold"
                  style={{
                    color: "#F4EFE3",
                    fontSize: "clamp(29px, 7.6vw, 34px)",
                    lineHeight: 1.08,
                    marginBottom: 14,
                    letterSpacing: 0,
                    textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                  }}
                >
                  {lang === "nl" ? (
                    <>Persoonlijke taxi<br />in <span style={{ color: "#D2A43A", textShadow: "0 0 15px rgba(210,164,58,0.25)" }}>Groningen</span> &amp;<br />Hoogezand</>
                  ) : (
                    <>Private taxi<br />in <span style={{ color: "#D2A43A", textShadow: "0 0 15px rgba(210,164,58,0.25)" }}>Groningen</span> &amp;<br />Hoogezand</>
                  )}
                </h1>

                {/* Subtext */}
                <p style={{
                  color: "#D8D1C4",
                  fontSize: "clamp(15.5px, 4.1vw, 17px)",
                  lineHeight: 1.55,
                  fontWeight: 450,
                  marginBottom: 26,
                }}>
                  {lang === "nl" ? (
                    <>Comfortabele ritten, luchthavenvervoer en zakelijke afspraken — met een vaste, betrouwbare chauffeur.</>
                  ) : (
                    <>Comfortable rides, airport transfers and business appointments — with a trusted regular driver.</>
                  )}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mobile-hero-actions">
                {/* Primary CTA */}
                <a
                  href="/book"
                  className="flex items-center justify-center rounded-[16px] font-bold transition-all active:scale-[0.98]"
                  style={{
                    backgroundColor: "#D2A43A",
                    color: "#050914",
                    padding: "0 20px",
                    height: 58,
                    boxShadow: "0 4px 20px rgba(210,164,58,0.3)",
                  }}
                >
                  <Icon d={ICONS.calendar} size={22} color="#050914" sw={2.2} />
                  <span className="flex-1 text-center font-bold" style={{ fontSize: "1.05rem", paddingLeft: 6 }}>
                    {lang === "nl" ? "Rit reserveren" : "Book your ride"}
                  </span>
                  <Icon d={ICONS.chevron} size={20} color="#050914" sw={2.5} />
                </a>

                {/* Secondary CTA */}
                <a
                  href="/services"
                  className="flex items-center justify-center rounded-[16px] font-semibold transition-all active:scale-[0.98]"
                  style={{
                    color: "#F4EFE3",
                    border: `1.5px solid rgba(210,164,58,0.45)`,
                    backgroundColor: "rgba(5,9,20,0.65)",
                    padding: "0 20px",
                    height: 56,
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <Icon d={ICONS.tag} size={22} color="#D2A43A" sw={2} />
                  <span className="flex-1 text-center font-bold" style={{ fontSize: "1.02rem", paddingLeft: 6 }}>
                    {lang === "nl" ? "Bekijk tarieven" : "Pricing"}
                  </span>
                  <Icon d={ICONS.chevron} size={20} color="#F4EFE3" sw={2.5} />
                </a>
              </div>

              {/* Compact Trust Row */}
              <div className="mobile-hero-trust-row">
                <Icon d={ICONS.clock} size={15} color="#D2A43A" sw={2} />
                <span>
                  {lang === "nl"
                    ? "24/7 beschikbaar · Direct via WhatsApp · Groningen & omgeving"
                    : "24/7 available · Direct via WhatsApp · Groningen region"}
                </span>
              </div>

            </div>

            {/* 3. Floating WhatsApp & Phone */}
            <div className="mobile-hero-float-actions">
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full transition-all active:scale-90"
                style={{
                  width: 54, height: 54,
                  backgroundColor: "#050914",
                  border: `2px solid rgba(210,164,58,0.45)`,
                  boxShadow: "0 18px 34px rgba(0,0,0,0.52), 0 0 20px rgba(210,164,58,0.14)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 32 32" fill="#4ADE80" aria-hidden="true"><path d={WA_PATH} /></svg>
              </a>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center justify-center rounded-full transition-all active:scale-90"
                style={{
                  width: 54, height: 54,
                  backgroundColor: "#050914",
                  border: `2px solid rgba(210,164,58,0.45)`,
                  boxShadow: "0 18px 34px rgba(0,0,0,0.52), 0 0 20px rgba(210,164,58,0.14)",
                }}
              >
                <Icon d={ICONS.phone} size={26} color="#D2A43A" sw={2} />
              </a>
            </div>

          </div>
        </div>

        {/* ── DESKTOP HERO ── */}
        <div className="hidden md:block" style={{ backgroundColor: C.dark }}>
          <div className="absolute inset-0 pointer-events-none z-0" style={{
            background: `radial-gradient(circle at 15% 35%, rgba(210,164,58,0.06) 0%, transparent 55%),
                         radial-gradient(circle at 85% 25%, rgba(120,80,255,0.05) 0%, transparent 55%),
                         radial-gradient(ellipse at 50% 0%, rgba(120,80,255,0.08) 0%, transparent 70%)`,
          }} aria-hidden="true" />
          <div className="absolute select-none pointer-events-none z-0" style={{
            left: "4%", top: "50%", transform: "translateY(-50%)",
            fontSize: "clamp(8rem,24vw,28rem)", fontWeight: 900, lineHeight: 1,
            letterSpacing: "-0.06em", color: "rgba(244,239,227,0.018)", userSelect: "none",
          }} aria-hidden="true">VIO</div>

          <div className="max-w-6xl mx-auto px-4 pt-12 pb-16 grid grid-cols-[1fr_0.9fr] gap-12 items-center relative z-10">
            <div className="flex flex-col items-start text-left gap-3.5 w-full">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border"
                style={{ backgroundColor: C.goldDim, borderColor: "rgba(210,164,58,0.25)" }}>
                <Image src="/images/viotaxi-logo.jpg" alt="" width={20} height={20}
                  className="w-4.5 h-4.5 rounded-full object-cover border border-[#C8963E]/30 shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: C.muted }}>
                  {tx(t.hero.trustBadge, lang)}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight" style={{ color: C.cream }}>
                {tx(t.hero.title, lang)}
              </h1>
              <p className="text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: C.muted }}>
                {tx(t.hero.subtitle, lang)}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed max-w-lg -mt-1" style={{ color: C.mutedDark }}>
                {tx(t.hero.support, lang)}
              </p>
              <p className="text-xs font-semibold tracking-wide mt-1 max-w-lg select-none" style={{ color: "rgba(210,164,58,0.9)" }}>
                {tx(t.hero.ctaMicrocopy, lang)}
              </p>
              <div className="flex flex-row gap-3 pt-2 flex-wrap">
                <a href={`tel:${BUSINESS.phone}`} id="hero-call-now-btn"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl font-bold transition-all hover:scale-105 active:scale-95"
                  style={{ backgroundColor: C.gold, color: C.bg, padding: "14px 32px", fontSize: "1.0625rem", minHeight: 52, boxShadow: "0 4px 12px rgba(210,164,58,0.15)" }}>
                  <Icon d={ICONS.phone} size={18} color={C.bg} sw={3} />
                  {tx(t.hero.ctaCall, lang)}
                </a>
                <a href={`https://wa.me/${BUSINESS.whatsapp}`} id="hero-whatsapp-btn" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95"
                  style={{ backgroundColor: "rgba(210,164,58,0.06)", color: C.gold, border: `1.5px solid ${C.gold}`, padding: "14px 28px", fontSize: "1rem", minHeight: 52 }}>
                  <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" className="shrink-0 text-green-400" aria-hidden="true"><path d={WA_PATH} /></svg>
                  {tx(t.hero.ctaWhatsapp, lang)}
                </a>
                <a href="/book" id="hero-book-btn"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95"
                  style={{ backgroundColor: "rgba(244,239,227,0.06)", color: C.cream, border: "1.5px solid rgba(244,239,227,0.35)", padding: "14px 28px", fontSize: "1rem", minHeight: 52 }}>
                  <Icon d={ICONS.calendar} size={16} color={C.cream} sw={2} />
                  {tx(t.hero.ctaBook, lang)}
                </a>
              </div>
              <div className="flex flex-col items-start gap-2 pt-2.5 w-full">
                <span className="text-xs font-bold uppercase tracking-widest select-none flex items-center gap-1.5" style={{ color: "#8A8478" }}>
                  <Icon d={ICONS.pin} size={12} color="#8A8478" sw={2} />
                  {tx(t.hero.popularRides, lang)}
                </span>
                <div className="flex flex-wrap gap-1.5 max-w-2xl">
                  {["Groningen Airport Eelde","UMCG","Martini Ziekenhuis","Station Groningen","Zernike","Schiphol"].map((dest) => (
                    <a key={dest} href={`/book?dest=${encodeURIComponent(dest)}`}
                      className="px-2.5 py-1.5 rounded-lg border text-[11px] font-medium transition-all duration-200 hover:scale-[1.03] select-none"
                      style={{ backgroundColor: "rgba(210,164,58,0.03)", borderColor: "rgba(210,164,58,0.16)", color: "rgba(244,239,227,0.8)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor="rgba(210,164,58,0.08)"; e.currentTarget.style.borderColor="rgba(210,164,58,0.4)"; e.currentTarget.style.color=C.gold; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor="rgba(210,164,58,0.03)"; e.currentTarget.style.borderColor="rgba(210,164,58,0.16)"; e.currentTarget.style.color="rgba(244,239,227,0.8)"; }}
                    >{dest}</a>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${C.borderGold}`, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.40)" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A14] via-[#080A14]/20 to-transparent z-10 pointer-events-none opacity-90" aria-hidden="true" />
                <Image src="/images/vio-exterior.jpg" alt="VioTaxi chauffeur Hoogezand" width={800} height={600} className="w-full h-auto block" priority />
                <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.gold }} aria-hidden="true" />
                  <p className="text-xs font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ color: C.cream }}>
                    VioTaxi Hoogezand · persoonlijk vervoer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2: TRUST STRIP — desktop only
      ══════════════════════════════════════════════════════════════ */}
      <QuickBookingSection lang={lang} />

      <section className="hidden md:block py-6 px-4" style={{ backgroundColor: "#060810", borderBottom: `1px solid ${C.border}` }}>
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
          SECTION 4: MEET YOUR DRIVER — personal trust with photo
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6" style={{ backgroundColor: C.dark, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="flex flex-col items-start gap-5">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.gold }}>
              {lang === "nl" ? "Uw chauffeur" : "Your driver"}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-snug" style={{ color: C.cream }}>{tx(t.meetDriver.heading, lang)}</h2>
            <p className="text-[15px] leading-relaxed" style={{ color: C.muted, fontWeight: 420 }}>{tx(t.meetDriver.body, lang)}</p>
            <ul className="flex flex-col gap-3.5 pt-1">
              {t.meetDriver.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: C.goldDim, border: `1px solid ${C.borderGold}` }} aria-hidden="true">
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
              <Image src="/images/vio-exterior.jpg" alt="Chauffeur VioTaxi" width={600} height={600}
                className="w-full aspect-square md:aspect-[4/5] object-cover" style={{ objectPosition: "25% center" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5: PERSONAL SERVICE — trust & promises (different bg)
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6" style={{ backgroundColor: C.navy, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: C.gold }}>
              {lang === "nl" ? "Persoonlijk vervoer" : "Personal transport"}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-snug mb-5" style={{ color: C.cream }}>{tx(t.vipService.heading, lang)}</h2>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: C.muted, fontWeight: 420 }}>{tx(t.vipService.intro, lang)}</p>
            <Button href="/book" variant="primary" id="exp-driver-book-btn" className="py-3.5 px-8">
              {lang === "nl" ? "Rit reserveren" : "Book a ride"}
            </Button>
          </div>
          <ul className="flex flex-col gap-4 pt-1">
            {t.vipService.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: C.goldDim, border: `1px solid ${C.borderGold}` }} aria-hidden="true">
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
      <section className="py-20 px-4 md:px-6" style={{ backgroundColor: C.dark }}>
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
          SECTION 7: MERCEDES COMFORT — visual break
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 md:px-6 relative overflow-hidden" style={{ backgroundColor: C.navy, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(210,164,58,0.04) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.gold }}>Mercedes</p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: C.cream }}>{tx(t.mercedes.heading, lang)}</h2>
          <p className="text-[15px] leading-relaxed max-w-2xl" style={{ color: C.muted, fontWeight: 420 }}>{tx(t.mercedes.body, lang)}</p>
          <div className="mt-2 rounded-2xl overflow-hidden w-full max-w-lg" style={{ border: `1px solid ${C.border}`, boxShadow: "0 0 32px rgba(0,0,0,0.2)" }}>
            <Image src="/images/mercedes-interior.jpg" alt="Mercedes interieur — VioTaxi" width={620} height={320} className="w-full h-56 object-cover" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8: SERVICE AREA — location chips
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 md:px-6" style={{ backgroundColor: C.dark }}>
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
          SECTION 9: WHY VIOTAXI — reason cards
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 md:px-6" style={{ backgroundColor: C.navy, borderTop: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center tracking-tight" style={{ color: C.cream }}>{tx(t.whyUs.heading, lang)}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.whyUs.points.map((point, idx) => (
              <div key={idx} className="flex flex-col gap-3 rounded-2xl p-5" style={{ backgroundColor: C.dark, border: `1px solid ${C.border}` }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: C.goldDim, border: `1px solid ${C.borderGold}` }} aria-hidden="true">
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
          SECTION 11: FINAL CTA — visually distinct booking block
          Slightly different background with subtle gold ambient glow
          to break away from the identical dark card pattern.
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 px-4 md:px-6 overflow-hidden" style={{ borderTop: `1px solid ${C.border}` }}>
        {/* Distinct background: darker base + subtle gold radial glow */}
        <div className="absolute inset-0" style={{ backgroundColor: "#040710" }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(210,164,58,0.06) 0%, transparent 60%)",
        }} aria-hidden="true" />
        {/* Top gold accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px" style={{ width: "min(80%, 400px)", background: `linear-gradient(90deg, transparent, ${C.gold}40, transparent)` }} aria-hidden="true" />

        <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: C.cream }}>
            {lang === "nl" ? "Reis comfortabel met VioTaxi" : "Travel comfortably with VioTaxi"}
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: C.muted, fontWeight: 420 }}>
            {lang === "nl"
              ? "Plan uw rit eenvoudig en reis met een persoonlijke chauffeur in Groningen, Hoogezand en omgeving."
              : "Plan your ride easily and travel with a personal chauffeur in Groningen, Hoogezand and the surrounding area."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center pt-4">
            <a href="/book" id="final-book-btn"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
              style={{ backgroundColor: C.gold, color: C.bg, padding: "16px 36px", fontSize: "1.0625rem", minHeight: 54, boxShadow: "0 4px 16px rgba(210,164,58,0.20)" }}>
              <Icon d={ICONS.calendar} size={18} color={C.bg} sw={2.5} />
              {lang === "nl" ? "Rit reserveren" : "Book your ride"}
            </a>
            <a href={`https://wa.me/${BUSINESS.whatsapp}`} id="final-whatsapp-btn" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
              style={{ backgroundColor: "rgba(210,164,58,0.06)", color: C.gold, border: `1.5px solid ${C.gold}`, padding: "16px 32px", fontSize: "1rem", minHeight: 54 }}>
              <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" className="shrink-0 text-green-400" aria-hidden="true"><path d={WA_PATH} /></svg>
              {lang === "nl" ? "WhatsApp" : "WhatsApp"}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
