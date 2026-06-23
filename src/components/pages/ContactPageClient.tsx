"use client";

/**
 * ContactPageClient.tsx — Premium dark contact page.
 */

import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/lib/translations";
import { BUSINESS } from "@/lib/business";

const C = {
  dark:   "#080A14",
  navy:   "#0D1120",
  border: "#1E2A42",
  gold:   "#C8963E",
  goldDim:"rgba(200,150,62,0.10)",
  cream:  "#F2EAD8",
  muted:  "#8A8478",
  subtle: "#4A4840",
};

export default function ContactPageClient() {
  const { lang } = useLanguage();
  const copy = t.contactPage;
  const areas = lang === "nl" ? BUSINESS.serviceArea : BUSINESS.serviceAreaEn;

  return (
    <div style={{ backgroundColor: C.dark, color: C.cream, minHeight: "100vh" }}>
      {/* Page header */}
      <div
        className="py-14 px-4"
        style={{ backgroundColor: C.navy, borderBottom: `1px solid ${C.border}` }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: C.gold }}>
            {lang === "nl" ? "Neem contact op" : "Get in touch"}
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight mb-4" style={{ color: C.cream }}>
            {tx(copy.title, lang)}
          </h1>
          <p className="text-base leading-relaxed" style={{ color: C.muted }}>
            {tx(copy.intro, lang)}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14 flex flex-col gap-12">

        {/* Urgent notice */}
        <div
          className="rounded-xl px-5 py-4 text-sm"
          style={{
            backgroundColor: C.goldDim,
            border: `1px solid rgba(200,150,62,0.25)`,
            color: "#B8913A",
          }}
        >
          ⚡ {tx(copy.urgentNote, lang)}
        </div>

        {/* Contact action buttons */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: C.gold }}>
            Contact
          </h2>
          <div className="flex flex-col gap-3">
            {/* Call */}
            <a
              href={`tel:${BUSINESS.phone}`}
              id="contact-call-btn"
              className="flex items-center gap-4 rounded-xl px-5 py-4 transition-all group"
              style={{ backgroundColor: C.navy, border: `1px solid ${C.border}` }}
            >
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                style={{ backgroundColor: C.goldDim, border: `1px solid rgba(200,150,62,0.3)` }}
                aria-hidden="true"
              >📞</span>
              <div>
                <p className="font-semibold text-sm" style={{ color: C.cream }}>
                  {tx(copy.callBtn, lang)}
                </p>
                <p className="text-xs mt-0.5" style={{ color: C.muted }}>
                  {BUSINESS.phoneDisplay}
                </p>
              </div>
              <span className="ml-auto text-lg" style={{ color: C.subtle }} aria-hidden="true">→</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              id="contact-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl px-5 py-4 transition-all"
              style={{ backgroundColor: C.navy, border: `1px solid ${C.border}` }}
            >
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                style={{ backgroundColor: C.goldDim, border: `1px solid rgba(200,150,62,0.3)` }}
                aria-hidden="true"
              >💬</span>
              <div>
                <p className="font-semibold text-sm" style={{ color: C.cream }}>
                  {tx(copy.whatsappBtn, lang)}
                </p>
                <p className="text-xs mt-0.5" style={{ color: C.muted }}>
                  {BUSINESS.whatsappDisplay}
                </p>
              </div>
              <span className="ml-auto text-lg" style={{ color: C.subtle }} aria-hidden="true">→</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${BUSINESS.email}`}
              id="contact-email-btn"
              className="flex items-center gap-4 rounded-xl px-5 py-4 transition-all"
              style={{ backgroundColor: C.navy, border: `1px solid ${C.border}` }}
            >
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                style={{ backgroundColor: C.goldDim, border: `1px solid rgba(200,150,62,0.3)` }}
                aria-hidden="true"
              >✉️</span>
              <div>
                <p className="font-semibold text-sm" style={{ color: C.cream }}>
                  {tx(copy.emailBtn, lang)}
                </p>
                <p className="text-xs mt-0.5" style={{ color: C.muted }}>
                  {BUSINESS.email}
                </p>
              </div>
              <span className="ml-auto text-lg" style={{ color: C.subtle }} aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        {/* Service area */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: C.gold }}>
            {tx(copy.serviceAreaHeading, lang)}
          </h2>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="text-sm font-medium px-3 py-1.5 rounded-full"
                style={{ backgroundColor: C.navy, border: `1px solid ${C.border}`, color: C.muted }}
              >
                {area}
              </span>
            ))}
          </div>
        </section>

        {/* Map placeholder */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: C.gold }}>
            {lang === "nl" ? "Kaart" : "Map"}
          </h2>
          <div
            className="rounded-xl p-8 text-center"
            style={{ backgroundColor: C.navy, border: `1px solid ${C.border}` }}
          >
            <p className="text-sm mb-3" style={{ color: C.subtle }}>
              {lang === "nl"
                ? "Kaartkoppeling — te configureren door de bedrijfseigenaar."
                : "Map link — to be configured by the business owner."}
            </p>
            <a
              href="https://www.google.com/maps/search/Groningen+Netherlands"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium underline transition-colors"
              style={{ color: C.gold }}
            >
              📍 {tx(copy.mapPlaceholder, lang)}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
