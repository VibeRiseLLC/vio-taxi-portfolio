"use client";

/**
 * BookPageClient.tsx — Premium dark booking page.
 */

import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/lib/translations";
import BookingForm from "@/components/BookingForm";

export default function BookPageClient() {
  const { lang } = useLanguage();
  const copy = t.bookPage;

  return (
    <div style={{ backgroundColor: "#080A14", minHeight: "100vh" }}>
      {/* Page header */}
      <div
        className="py-14 px-4"
        style={{ backgroundColor: "#0D1120", borderBottom: "1px solid #1E2A42" }}
      >
        <div className="max-w-2xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#C8963E" }}
          >
            {lang === "nl" ? "Online reservering" : "Online booking"}
          </p>
          <h1
            className="text-3xl font-extrabold tracking-tight mb-3"
            style={{ color: "#F2EAD8" }}
          >
            {tx(copy.title, lang)}
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#8A8478" }}>
            {tx(copy.intro, lang)}
          </p>
        </div>
      </div>

      {/* Form — kept on white background for readability and accessibility */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <BookingForm />
      </div>
    </div>
  );
}
