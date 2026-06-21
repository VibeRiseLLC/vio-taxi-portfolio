"use client";

/**
 * FAQSection.tsx — Premium dark accordion FAQ.
 */

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  heading: string;
  items: FAQItem[];
}

export default function FAQSection({ heading, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#080A14" }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-2xl font-bold mb-8 text-center tracking-tight"
          style={{ color: "#F2EAD8" }}
        >
          {heading}
        </h2>
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid #1E2A42" }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{ borderBottom: idx < items.length - 1 ? "1px solid #1E2A42" : "none" }}
            >
              <button
                id={`faq-btn-${idx}`}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center px-6 py-5 text-left gap-4 transition-colors"
                style={{
                  backgroundColor: openIndex === idx ? "#0D1120" : "transparent",
                  color: "#F2EAD8",
                }}
              >
                <span className="text-sm font-medium leading-snug">{item.question}</span>
                <span
                  className="flex-shrink-0 text-xl transition-transform duration-200 font-light"
                  style={{
                    color: "#C8963E",
                    transform: openIndex === idx ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-btn-${idx}`}
                hidden={openIndex !== idx}
                className="px-6 pb-5 text-sm leading-relaxed"
                style={{ color: "#8A8478", backgroundColor: "#0D1120" }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
