"use client";

/**
 * TermsPageClient.tsx
 * Draft terms for the fictional Noordlijn Chauffeurs portfolio concept.
 */

import { useLanguage } from "@/lib/language-context";
import { BUSINESS } from "@/lib/business";

export default function TermsPageClient() {
  const { lang } = useLanguage();

  return (
    <div style={{ backgroundColor: "#080A14", color: "#F2EAD8", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800 mb-8">
          ⚠️{" "}
          {lang === "nl"
            ? "Portfolio demonstratiewebsite - Noordlijn Chauffeurs is een fictioneel merk."
            : "Portfolio demonstration website - Noordlijn Chauffeurs is a fictional brand."}
        </div>

        {lang === "nl" ? <TermsNL /> : <TermsEN />}
      </div>
    </div>
  );
}

function TermsNL() {
  return (
    <>
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: "#F2EAD8" }}>
        Boekingsvoorwaarden
      </h1>
      <p className="text-sm mb-8" style={{ color: "#8A8478" }}>
        Versie 1 - Noordlijn Chauffeurs, Groningen
      </p>

      <ProseSection title="1. Aanvragen zijn geen boekingen">
        <p>
          Een aanvraag via het formulier, WhatsApp of e-mail is in deze portfolio-demonstratie
          geen echte boeking en geen automatische bevestiging.
        </p>
      </ProseSection>

      <ProseSection title="2. Bevestiging">
        <p>
          De website laat zien hoe een chauffeurmerk handmatige bevestiging kan
          uitleggen. Totdat een echte vervoerder bevestigt, is er geen traject gereserveerd.
        </p>
      </ProseSection>

      <ProseSection title="3. Prijzen">
        <p>
          De demonstratie gebruikt offerte- en prijsindicatiecopy. Er worden geen echte tarieven
          gepubliceerd en er wordt geen betaling verwerkt.
        </p>
      </ProseSection>

      <ProseSection title="4. Verantwoordelijkheid">
        <p>
          De invoervelden zijn bedoeld om de gebruikerservaring te demonstreren. Voor
          een echte vervoerder moeten voorwaarden, aansprakelijkheid en annuleringsregels
          juridisch worden gecontroleerd.
        </p>
      </ProseSection>

      <ProseSection title="5. Contact">
        <p>
          Vragen over deze portfolio-demonstratie? Neem contact op via{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-yellow-500 underline">
            {BUSINESS.email}
          </a>{" "}
          of bel {BUSINESS.phoneDisplay}.
        </p>
      </ProseSection>
    </>
  );
}

function TermsEN() {
  return (
    <>
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: "#F2EAD8" }}>
        Booking Terms
      </h1>
      <p className="text-sm mb-8" style={{ color: "#8A8478" }}>
        Version 1 - Noordlijn Chauffeurs, Groningen
      </p>

      <ProseSection title="1. Requests are not bookings">
        <p>
          A request submitted through the form, WhatsApp or email is not a real booking
          and not an automatic confirmation in this portfolio demonstration.
        </p>
      </ProseSection>

      <ProseSection title="2. Confirmation">
        <p>
          The website shows how a chauffeur brand can explain manual confirmation.
          Until a real transport provider confirms, no journey is reserved.
        </p>
      </ProseSection>

      <ProseSection title="3. Pricing">
        <p>
          The demonstration uses quote and estimate copy. No real tariffs are published and no
          payment is processed.
        </p>
      </ProseSection>

      <ProseSection title="4. Responsibility">
        <p>
          The fields are intended to demonstrate the user experience. For a real
          transport provider, terms, liability and cancellation rules should be legally
          reviewed.
        </p>
      </ProseSection>

      <ProseSection title="5. Contact">
        <p>
          Questions about this portfolio demonstration? Contact{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-yellow-500 underline">
            {BUSINESS.email}
          </a>{" "}
          or call {BUSINESS.phoneDisplay}.
        </p>
      </ProseSection>
    </>
  );
}

function ProseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-3" style={{ color: "#F2EAD8" }}>
        {title}
      </h2>
      <div className="text-sm leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1" style={{ color: "#C9C3B8" }}>
        {children}
      </div>
    </section>
  );
}
