"use client";

/**
 * TermsPageClient.tsx
 * Client component for the booking terms page — uses language context.
 * Rendered by src/app/terms/page.tsx (server component).
 *
 * ⚠️ TODO for business owner: Review these terms before publishing.
 * This is a draft for a small, non-technical taxi booking website.
 */

import { useLanguage } from "@/lib/language-context";
import { BUSINESS } from "@/lib/business";

export default function TermsPageClient() {
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

      {lang === "nl" ? <TermsNL /> : <TermsEN />}
    </div>
    </div>
  );
}

function TermsNL() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Boekingsvoorwaarden</h1>
      <p className="text-sm text-gray-500 mb-8">Versie 1 — VioTaxi, Hoogezand</p>

      <ProseSection title="1. Ritaanvragen zijn geen directe bevestigingen">
        <p>
          Een ritaanvraag via het online formulier, WhatsApp of e-mail is een verzoek,
          geen automatische bevestiging. Uw rit is uitsluitend bevestigd nadat VioTaxi
          persoonlijk contact met u heeft opgenomen en de rit heeft bevestigd.
        </p>
      </ProseSection>

      <ProseSection title="2. Bevestiging">
        <p>
          VioTaxi neemt zo snel mogelijk contact op na ontvangst van uw aanvraag. Totdat
          u een bevestiging heeft ontvangen, is de rit niet gereserveerd. Wacht niet tot
          het laatste moment met boeken.
        </p>
      </ProseSection>

      <ProseSection title="3. Prijzen">
        <p>
          De prijs van een rit wordt door VioTaxi bevestigd bij het maken van de
          afspraak. Er worden geen vaste tarieven gepubliceerd op de website. De
          definitieve prijs is afhankelijk van de rit, het moment en andere factoren.
        </p>
      </ProseSection>

      <ProseSection title="4. Verantwoordelijkheid van de klant">
        <p>De klant is verantwoordelijk voor het opgeven van:</p>
        <ul>
          <li>Het juiste ophaaladres;</li>
          <li>De juiste datum en tijd;</li>
          <li>De juiste contactgegevens (telefoonnummer).</li>
        </ul>
        <p>
          VioTaxi is niet verantwoordelijk voor gemiste ritten als gevolg van onjuiste
          of onvolledige informatie.
        </p>
      </ProseSection>

      <ProseSection title="5. Spoedritten">
        <p>
          Voor ritten die op korte termijn nodig zijn, is bellen de snelste manier om
          contact op te nemen. Online aanvragen worden niet altijd direct verwerkt.
          Beschikbaarheid voor spoedritten kan niet worden gegarandeerd.
        </p>
      </ProseSection>

      <ProseSection title="6. Annulering">
        <p>
          Als u een bevestigde rit wilt annuleren, neem dan zo vroeg mogelijk contact op
          via telefoon of WhatsApp. Een tijdige annulering wordt gewaardeerd zodat de
          chauffeur zijn planning kan aanpassen.
        </p>
      </ProseSection>

      <ProseSection title="7. Aansprakelijkheid">
        <p>
          VioTaxi doet zijn best om ritten stipt en veilig uit te voeren. In geval van
          overmacht of omstandigheden buiten de controle van de chauffeur kan geen
          aansprakelijkheid worden aanvaard voor vertragingen.
        </p>
      </ProseSection>

      <ProseSection title="8. Contact">
        <p>
          Vragen over deze voorwaarden? Neem contact op via{" "}
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

function TermsEN() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Booking Terms</h1>
      <p className="text-sm text-gray-500 mb-8">Version 1 — VioTaxi, Hoogezand</p>

      <ProseSection title="1. Booking requests are not automatic confirmations">
        <p>
          A booking request submitted via the online form, WhatsApp or email is a
          request, not an automatic confirmation. Your ride is only confirmed after
          VioTaxi has personally contacted you and confirmed the ride.
        </p>
      </ProseSection>

      <ProseSection title="2. Confirmation">
        <p>
          VioTaxi will contact you as soon as possible after receiving your request.
          Until you receive a confirmation, the ride is not reserved. Please do not
          leave bookings until the last moment.
        </p>
      </ProseSection>

      <ProseSection title="3. Pricing">
        <p>
          The price of a ride is confirmed by VioTaxi when the booking is made. No fixed
          rates are published on the website. The final price depends on the ride, the
          time, and other factors.
        </p>
      </ProseSection>

      <ProseSection title="4. Customer responsibility">
        <p>The customer is responsible for providing:</p>
        <ul>
          <li>The correct pickup address;</li>
          <li>The correct date and time;</li>
          <li>Correct contact details (phone number).</li>
        </ul>
        <p>
          VioTaxi is not responsible for missed rides resulting from incorrect or
          incomplete information.
        </p>
      </ProseSection>

      <ProseSection title="5. Urgent rides">
        <p>
          For rides needed at short notice, calling is the fastest way to get in touch.
          Online requests are not always processed immediately. Availability for urgent
          rides cannot be guaranteed.
        </p>
      </ProseSection>

      <ProseSection title="6. Cancellation">
        <p>
          If you need to cancel a confirmed ride, please contact us as early as possible
          by phone or WhatsApp. Timely cancellation is appreciated so the driver can
          adjust their schedule.
        </p>
      </ProseSection>

      <ProseSection title="7. Liability">
        <p>
          VioTaxi does its best to carry out rides punctually and safely. In the event
          of force majeure or circumstances beyond the driver&apos;s control, no
          liability can be accepted for delays.
        </p>
      </ProseSection>

      <ProseSection title="8. Contact">
        <p>
          Questions about these terms? Contact us via{" "}
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
      <div className="text-gray-700 text-sm leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        {children}
      </div>
    </section>
  );
}
