"use client";

/**
 * BookingForm.tsx
 * Booking request form — Version 1.
 * - Client-side validation only (no database, no server action)
 * - On valid submit: shows success panel with WhatsApp deep link + mailto fallback
 * - Makes crystal clear that the ride is NOT automatically confirmed
 */

import { useState, FormEvent, useEffect } from "react";
import Button from "./Button";
import { t, tx } from "@/lib/translations";
import { useLanguage } from "@/lib/language-context";
import { buildWhatsAppUrl, buildMailtoUrl, type BookingData } from "@/lib/whatsapp";

interface FormErrors {
  [key: string]: string;
}

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  pickup: "",
  destination: "",
  date: "",
  time: "",
  passengers: "1",
  luggage: "",
  rideType: "",
  notes: "",
  confirmed: false,
};

export default function BookingForm() {
  const { lang } = useLanguage();
  const [form, setForm] = useState(typeof emptyForm === "object" ? { ...emptyForm } : emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [mailtoUrl, setMailtoUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const next = {
        pickup: params.get("pickup") || "",
        destination: params.get("dest") || params.get("destination") || "",
        date: params.get("date") || "",
        time: params.get("time") || "",
        rideType: params.get("rideType") || "",
      };

      if (Object.values(next).some(Boolean)) {
        const frame = window.requestAnimationFrame(() => {
          setForm((prev) => ({ ...prev, ...next }));
        });
        return () => window.cancelAnimationFrame(frame);
      }
    }
  }, []);

  const copy = t.bookPage;

  const rideTypeOptions = [
    { value: "lokale-rit", label: tx(copy.rideTypes.local, lang) },
    { value: "luchthaven", label: tx(copy.rideTypes.airport, lang) },
    { value: "station", label: tx(copy.rideTypes.station, lang) },
    { value: "ziekenhuis", label: tx(copy.rideTypes.hospital, lang) },
    { value: "zakelijk", label: tx(copy.rideTypes.business, lang) },
    { value: "anders", label: tx(copy.rideTypes.other, lang) },
  ];

  function validate(): FormErrors {
    const e: FormErrors = {};
    const requiredMsg = tx(copy.errors.required, lang);
    if (!form.name.trim()) e.name = requiredMsg;
    if (!form.phone.trim()) e.phone = requiredMsg;
    if (!form.pickup.trim()) e.pickup = requiredMsg;
    if (!form.destination.trim()) e.destination = requiredMsg;
    if (!form.date) e.date = requiredMsg;
    if (!form.time) e.time = requiredMsg;
    if (!form.rideType) e.rideType = requiredMsg;
    if (!form.confirmed) {
      e.confirmed = tx(copy.errors.checkboxRequired, lang);
    }
    return e;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const rideTypeLabel =
      rideTypeOptions.find((o) => o.value === form.rideType)?.label ?? form.rideType;

    const data: BookingData = {
      name: form.name,
      phone: form.phone,
      email: form.email || undefined,
      pickup: form.pickup,
      destination: form.destination,
      date: form.date,
      time: form.time,
      passengers: form.passengers,
      luggage: form.luggage || undefined,
      rideType: rideTypeLabel,
      notes: form.notes || undefined,
    };

    setWhatsappUrl(buildWhatsAppUrl(data));
    setMailtoUrl(buildMailtoUrl(data));
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function handleReset() {
    setForm({ ...emptyForm });
    setErrors({});
    setSubmitted(false);
    setWhatsappUrl("");
    setMailtoUrl("");
  }

  if (submitted) {
    return (
      <div className="bg-white border border-green-200 rounded-2xl p-8 shadow-sm max-w-xl mx-auto text-center">
        <div className="text-5xl mb-4" aria-hidden="true">✅</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {tx(copy.successTitle, lang)}
        </h2>
        <p className="text-gray-600 mb-2 leading-relaxed">{tx(copy.successText, lang)}</p>
        <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
          ⚠️{" "}
          {lang === "nl"
            ? "Dit is een demo. Er is geen echte rit bevestigd."
            : "This is a demo. No real ride has been confirmed."}
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-confirm-btn"
            className="inline-flex items-center justify-center gap-2 w-full rounded-lg px-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-base transition-colors"
          >
            💬 {tx(copy.whatsappBtn, lang)}
          </a>
          <a
            href={mailtoUrl}
            id="mailto-confirm-btn"
            className="inline-flex items-center justify-center gap-2 w-full rounded-lg px-5 py-3 bg-white border-2 border-gray-900 hover:bg-gray-50 text-gray-900 font-semibold text-base transition-colors"
          >
            ✉️ {tx(copy.mailtoBtn, lang)}
          </a>
          <button
            onClick={handleReset}
            id="new-request-btn"
            className="text-sm text-gray-500 hover:text-gray-700 underline mt-2 transition-colors"
          >
            {tx(copy.newRequest, lang)}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 max-w-xl mx-auto flex flex-col gap-5"
    >
      {/* Notice banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
        <strong>{tx(copy.noticeTitle, lang)}:</strong> {tx(copy.notice, lang)}
      </div>

      {/* Name */}
      <Field
        id="field-name"
        label={tx(copy.labelName, lang)}
        required
        error={errors.name}
      >
        <input
          id="field-name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          className={inputClass(!!errors.name)}
          placeholder="Jan de Vries"
        />
      </Field>

      {/* Phone */}
      <Field
        id="field-phone"
        label={tx(copy.labelPhone, lang)}
        required
        error={errors.phone}
      >
        <input
          id="field-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          className={inputClass(!!errors.phone)}
          placeholder="+31 6 ..."
        />
      </Field>

      {/* Email */}
      <Field id="field-email" label={tx(copy.labelEmail, lang)}>
        <input
          id="field-email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          className={inputClass(false)}
          placeholder="demo@example.com"
        />
      </Field>

      {/* Pickup */}
      <Field
        id="field-pickup"
        label={tx(copy.labelPickup, lang)}
        required
        error={errors.pickup}
      >
        <input
          id="field-pickup"
          name="pickup"
          type="text"
          value={form.pickup}
          onChange={handleChange}
          className={inputClass(!!errors.pickup)}
          placeholder="Grote Markt, Groningen"
        />
      </Field>

      {/* Destination */}
      <Field
        id="field-destination"
        label={tx(copy.labelDestination, lang)}
        required
        error={errors.destination}
      >
        <input
          id="field-destination"
          name="destination"
          type="text"
          value={form.destination}
          onChange={handleChange}
          className={inputClass(!!errors.destination)}
          placeholder="Schiphol Airport"
        />
      </Field>

      {/* Date + Time side by side */}
      <div className="grid grid-cols-2 gap-4">
        <Field
          id="field-date"
          label={tx(copy.labelDate, lang)}
          required
          error={errors.date}
        >
          <input
            id="field-date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className={inputClass(!!errors.date)}
          />
        </Field>
        <Field
          id="field-time"
          label={tx(copy.labelTime, lang)}
          required
          error={errors.time}
        >
          <input
            id="field-time"
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            className={inputClass(!!errors.time)}
          />
        </Field>
      </div>

      {/* Passengers */}
      <Field
        id="field-passengers"
        label={tx(copy.labelPassengers, lang)}
        required
      >
        <select
          id="field-passengers"
          name="passengers"
          value={form.passengers}
          onChange={handleChange}
          className={inputClass(false)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n} value={String(n)}>
              {n}
            </option>
          ))}
        </select>
      </Field>

      {/* Luggage */}
      <Field id="field-luggage" label={tx(copy.labelLuggage, lang)}>
        <input
          id="field-luggage"
          name="luggage"
          type="text"
          value={form.luggage}
          onChange={handleChange}
          className={inputClass(false)}
          placeholder={lang === "nl" ? "bijv. 2 koffers" : "e.g. 2 suitcases"}
        />
      </Field>

      {/* Ride type */}
      <Field
        id="field-rideType"
        label={tx(copy.labelRideType, lang)}
        required
        error={errors.rideType}
      >
        <select
          id="field-rideType"
          name="rideType"
          value={form.rideType}
          onChange={handleChange}
          className={inputClass(!!errors.rideType)}
        >
          <option value="">{lang === "nl" ? "Kies een type rit" : "Select ride type"}</option>
          {rideTypeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      {/* Notes */}
      <Field id="field-notes" label={tx(copy.labelNotes, lang)}>
        <textarea
          id="field-notes"
          name="notes"
          rows={3}
          value={form.notes}
          onChange={handleChange}
          className={`${inputClass(false)} resize-y`}
          placeholder={
            lang === "nl"
              ? "Bijzondere wensen of andere informatie..."
              : "Special requests or other information..."
          }
        />
      </Field>

      {/* Confirmation checkbox */}
      <div className="flex flex-col gap-1">
        <div className="flex items-start gap-3">
          <input
            id="field-confirmed"
            name="confirmed"
            type="checkbox"
            checked={form.confirmed}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-400 flex-shrink-0 cursor-pointer"
          />
          <label
            htmlFor="field-confirmed"
            className="text-sm text-gray-700 cursor-pointer leading-snug"
          >
            {tx(copy.confirmCheckbox, lang)}
          </label>
        </div>
        {errors.confirmed && (
          <p className="text-red-600 text-xs ml-7" role="alert">
            {errors.confirmed}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button type="submit" variant="primary" id="submit-booking-btn" className="w-full text-base py-4">
        {tx(copy.submit, lang)}
      </Button>
    </form>
  );
}

/* ── Helpers ── */

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border px-3 py-2.5 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 transition ${
    hasError
      ? "border-red-400 bg-red-50"
      : "border-gray-300 bg-white hover:border-gray-400"
  }`;
}

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
        {required && (
          <span className="text-red-500 ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="text-red-600 text-xs" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
