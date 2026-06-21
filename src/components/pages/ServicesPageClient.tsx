"use client";

/**
 * ServicesPageClient.tsx — Premium dark services page.
 */

import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/lib/translations";
import ServiceCard from "@/components/ServiceCard";

const C = {
  dark:   "#080A14",
  navy:   "#0D1120",
  border: "#1E2A42",
  gold:   "#C8963E",
  cream:  "#F2EAD8",
  muted:  "#8A8478",
};

export default function ServicesPageClient() {
  const { lang } = useLanguage();
  const copy = t.servicesPage;

  return (
    <div style={{ backgroundColor: C.dark, color: C.cream, minHeight: "100vh" }}>
      {/* Page header */}
      <div
        className="py-14 px-4"
        style={{ backgroundColor: C.navy, borderBottom: `1px solid ${C.border}` }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: C.gold }}>
            {lang === "nl" ? "Wat wij aanbieden" : "What we offer"}
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight mb-4" style={{ color: C.cream }}>
            {tx(copy.title, lang)}
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: C.muted }}>
            {tx(copy.intro, lang)}
          </p>
        </div>
      </div>

      {/* Service sections */}
      <div className="max-w-4xl mx-auto px-4 py-14 flex flex-col gap-6">
        {copy.sections.map((section, idx) => (
          <ServiceCard
            key={idx}
            icon={section.icon}
            title={tx(section.title, lang)}
            description={tx(section.desc, lang)}
            showActions
            bookLabel={tx(copy.bookBtn, lang)}
            whatsappLabel={tx(copy.whatsappBtn, lang)}
          />
        ))}
      </div>
    </div>
  );
}
