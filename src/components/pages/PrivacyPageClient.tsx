"use client";

/**
 * PrivacyPageClient.tsx
 * Draft privacy copy for the fictional Noordlijn Chauffeurs portfolio concept.
 */

import { useLanguage } from "@/lib/language-context";
import { BUSINESS } from "@/lib/business";

export default function PrivacyPageClient() {
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

        {lang === "nl" ? <PrivacyNL /> : <PrivacyEN />}
      </div>
    </div>
  );
}

function PrivacyNL() {
  return (
    <>
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: "#F2EAD8" }}>
        Privacyverklaring
      </h1>
      <p className="text-sm mb-8" style={{ color: "#8A8478" }}>
        Versie 1 - Noordlijn Chauffeurs, Groningen
      </p>

      <ProseSection title="1. Inleiding">
        <p>
          Noordlijn Chauffeurs is een fictioneel merk voor een portfolio-demonstratie. Deze
          privacyverklaring legt uit welke gegevens in de aanvraagformulieren worden
          samengesteld en hoe die gegevens via uw eigen WhatsApp- of e-mailapp kunnen
          worden doorgestuurd.
        </p>
      </ProseSection>

      <ProseSection title="2. Welke gegevens worden gebruikt?">
        <p>Wanneer u een aanvraag invult, gebruikt het formulier:</p>
        <ul>
          <li>Naam</li>
          <li>Telefoonnummer</li>
          <li>E-mailadres (optioneel)</li>
          <li>Ophaaladres en bestemming</li>
          <li>Datum, tijd, passagiers, bagage en type traject</li>
          <li>Eventuele opmerkingen</li>
        </ul>
        <p>Er worden geen betaalgegevens verzameld en er is geen online betaalsysteem.</p>
      </ProseSection>

      <ProseSection title="3. Waarvoor worden gegevens gebruikt?">
        <p>
          De gegevens worden alleen gebruikt om een bericht voor WhatsApp of e-mail
          samen te stellen. Deze website heeft geen database en maakt geen bevestigde boeking.
        </p>
      </ProseSection>

      <ProseSection title="4. Verzending">
        <p>
          Als u op WhatsApp of e-mail klikt, opent uw eigen app met de ingevulde
          trajectdetails. U bepaalt zelf of u dat bericht verstuurt.
        </p>
      </ProseSection>

      <ProseSection title="5. Contact">
        <p>
          Vragen over deze portfolio-demonstratie? Gebruik{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-yellow-500 underline">
            {BUSINESS.email}
          </a>{" "}
          of bel {BUSINESS.phoneDisplay}.
        </p>
      </ProseSection>
    </>
  );
}

function PrivacyEN() {
  return (
    <>
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: "#F2EAD8" }}>
        Privacy Policy
      </h1>
      <p className="text-sm mb-8" style={{ color: "#8A8478" }}>
        Version 1 - Noordlijn Chauffeurs, Groningen
      </p>

      <ProseSection title="1. Introduction">
        <p>
          Noordlijn Chauffeurs is a fictional brand for a portfolio demonstration. This privacy
          policy explains what data is composed in the request forms and how that data can
          be passed through your own WhatsApp or email app.
        </p>
      </ProseSection>

      <ProseSection title="2. What data is used?">
        <p>When you fill in a request, the form uses:</p>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address (optional)</li>
          <li>Pickup address and destination</li>
          <li>Date, time, passengers, luggage and journey type</li>
          <li>Any notes or remarks</li>
        </ul>
        <p>No payment details are collected and there is no online payment system.</p>
      </ProseSection>

      <ProseSection title="3. How is data used?">
        <p>
          The data is only used to compose a message for WhatsApp or email. This
          website has no database and does not create a confirmed booking.
        </p>
      </ProseSection>

      <ProseSection title="4. Sending">
        <p>
          When you click WhatsApp or email, your own app opens with the journey details.
          You decide whether to send that message.
        </p>
      </ProseSection>

      <ProseSection title="5. Contact">
        <p>
          Questions about this portfolio demonstration? Use{" "}
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
