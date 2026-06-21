"use client";

/**
 * PrivacyPageClient.tsx
 * Client component for the privacy page — uses language context.
 * Rendered by src/app/privacy/page.tsx (server component).
 *
 * ⚠️ TODO for business owner: Review this policy before publishing.
 * This is a draft for a small, non-technical taxi booking website.
 */

import { useLanguage } from "@/lib/language-context";
import { BUSINESS } from "@/lib/business";

export default function PrivacyPageClient() {
  const { lang } = useLanguage();

  return (
    <div style={{ backgroundColor: "#080A14", color: "#F2EAD8", minHeight: "100vh" }}>
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Review notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800 mb-8">
        ⚠️{" "}
        {lang === "nl"
          ? "Concept — de bedrijfseigenaar dient dit te controleren vóór publicatie."
          : "Draft — the business owner should review this before publishing."}
      </div>

      {lang === "nl" ? <PrivacyNL /> : <PrivacyEN />}
    </div>
    </div>
  );
}

function PrivacyNL() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacyverklaring</h1>
      <p className="text-sm text-gray-500 mb-8">Versie 1 — VioTaxi, Hoogezand</p>

      <ProseSection title="1. Inleiding">
        <p>
          VioTaxi hecht waarde aan de bescherming van uw persoonsgegevens. In deze
          privacyverklaring leggen wij uit welke gegevens wij verzamelen, waarom wij dat
          doen en hoe uw gegevens worden verwerkt.
        </p>
      </ProseSection>

      <ProseSection title="2. Welke gegevens worden verzameld?">
        <p>Wanneer u een ritaanvraag indient via het online formulier, verzamelen wij:</p>
        <ul>
          <li>Naam</li>
          <li>Telefoonnummer</li>
          <li>E-mailadres (optioneel)</li>
          <li>Ophaaladres</li>
          <li>Bestemming</li>
          <li>Datum en tijd van de rit</li>
          <li>Aantal passagiers</li>
          <li>Eventuele bagageinformatie</li>
          <li>Type rit</li>
          <li>Eventuele opmerkingen</li>
        </ul>
        <p>
          Er worden geen betaalgegevens, bankrekeningnummers of creditcardgegevens
          verzameld via dit formulier. VioTaxi heeft voor Versie 1 geen online
          betaalsysteem.
        </p>
      </ProseSection>

      <ProseSection title="3. Waarvoor worden uw gegevens gebruikt?">
        <p>Uw persoonsgegevens worden uitsluitend gebruikt om:</p>
        <ul>
          <li>Uw ritaanvraag te verwerken en te bevestigen;</li>
          <li>Contact met u op te nemen over de rit;</li>
          <li>Uw ritdetails door te sturen via WhatsApp of e-mail naar de chauffeur.</li>
        </ul>
        <p>Uw gegevens worden niet gebruikt voor marketingdoeleinden of gedeeld met derden.</p>
      </ProseSection>

      <ProseSection title="4. Hoe worden uw gegevens verstuurd?">
        <p>
          In Versie 1 van deze website worden ritaanvragen uitsluitend verwerkt via
          WhatsApp of e-mail. Uw gegevens worden niet opgeslagen in een database. Er zijn
          geen gebruikersaccounts.
        </p>
        <p>
          Wanneer u op de knop &apos;Stuur ook via WhatsApp&apos; of &apos;Stuur ook per
          e-mail&apos; klikt, worden uw ingevulde gegevens als bericht verzonden via de
          betreffende applicatie.
        </p>
      </ProseSection>

      <ProseSection title="5. Bewaartermijn">
        <p>
          Gegevens die via WhatsApp of e-mail worden ontvangen, worden bewaard zolang dat
          nodig is voor de afhandeling van de rit of voor wettelijk vereiste
          administratie. Neem contact op als u uw gegevens wilt laten verwijderen.
        </p>
      </ProseSection>

      <ProseSection title="6. Uw rechten">
        <p>U heeft het recht om:</p>
        <ul>
          <li>Inzage te vragen in uw persoonsgegevens;</li>
          <li>Onjuiste gegevens te laten corrigeren;</li>
          <li>Te verzoeken om verwijdering van uw gegevens.</li>
        </ul>
        <p>
          Stuur hiervoor een e-mail naar{" "}
          <a
            href={`mailto:${BUSINESS.email}`}
            className="text-yellow-700 underline hover:text-yellow-900"
          >
            {BUSINESS.email}
          </a>
          .
        </p>
      </ProseSection>

      <ProseSection title="7. Contact">
        <p>
          Heeft u vragen over deze privacyverklaring? Neem dan contact op via{" "}
          <a
            href={`mailto:${BUSINESS.email}`}
            className="text-yellow-700 underline hover:text-yellow-900"
          >
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
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Version 1 — VioTaxi, Hoogezand</p>

      <ProseSection title="1. Introduction">
        <p>
          VioTaxi values the protection of your personal data. This privacy policy
          explains what data we collect, why we collect it, and how it is processed.
        </p>
      </ProseSection>

      <ProseSection title="2. What data is collected?">
        <p>When you submit a booking request via the online form, we collect:</p>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address (optional)</li>
          <li>Pickup address</li>
          <li>Destination</li>
          <li>Date and time of the ride</li>
          <li>Number of passengers</li>
          <li>Luggage information (if provided)</li>
          <li>Ride type</li>
          <li>Any notes or remarks</li>
        </ul>
        <p>
          No payment details, bank account numbers or credit card information are
          collected via this form. VioTaxi does not have an online payment system in
          Version 1.
        </p>
      </ProseSection>

      <ProseSection title="3. How is your data used?">
        <p>Your personal data is used solely to:</p>
        <ul>
          <li>Process and confirm your booking request;</li>
          <li>Contact you about your ride;</li>
          <li>Forward your ride details to the driver via WhatsApp or email.</li>
        </ul>
        <p>Your data is not used for marketing purposes or shared with third parties.</p>
      </ProseSection>

      <ProseSection title="4. How is your data transmitted?">
        <p>
          In Version 1 of this website, booking requests are processed exclusively via
          WhatsApp or email. Your data is not stored in a database. There are no user
          accounts.
        </p>
        <p>
          When you click &apos;Also send via WhatsApp&apos; or &apos;Also send by
          email&apos;, your form data is sent as a message through the respective
          application.
        </p>
      </ProseSection>

      <ProseSection title="5. Retention period">
        <p>
          Data received via WhatsApp or email is retained for as long as necessary to
          handle the ride or to comply with legal administrative requirements. Contact us
          if you would like your data to be deleted.
        </p>
      </ProseSection>

      <ProseSection title="6. Your rights">
        <p>You have the right to:</p>
        <ul>
          <li>Request access to your personal data;</li>
          <li>Have incorrect data corrected;</li>
          <li>Request deletion of your data.</li>
        </ul>
        <p>
          To exercise these rights, send an email to{" "}
          <a
            href={`mailto:${BUSINESS.email}`}
            className="text-yellow-700 underline hover:text-yellow-900"
          >
            {BUSINESS.email}
          </a>
          .
        </p>
      </ProseSection>

      <ProseSection title="7. Contact">
        <p>
          Questions about this privacy policy? Contact us via{" "}
          <a
            href={`mailto:${BUSINESS.email}`}
            className="text-yellow-700 underline hover:text-yellow-900"
          >
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
      <h2 className="text-lg font-bold text-gray-900 mb-3">{title}</h2>
      <div className="prose-custom text-gray-700 text-sm leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        {children}
      </div>
    </section>
  );
}
