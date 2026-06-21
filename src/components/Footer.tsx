"use client";

/**
 * Footer.tsx — Premium dark footer matching brand palette.
 */

import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/business";
import { t, tx } from "@/lib/translations";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();
  const areas = lang === "nl" ? BUSINESS.serviceArea : BUSINESS.serviceAreaEn;

  return (
    <footer style={{ backgroundColor: "#050710", borderTop: "1px solid #1E2A42" }}>
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/viotaxi-logo.jpg"
              alt="VioTaxi logo"
              width={40}
              height={40}
              className="rounded-lg object-cover"
            />
            <div>
              <p className="font-bold text-base" style={{ color: "#C8963E" }}>VioTaxi</p>
              <p className="text-xs" style={{ color: "#4A4840" }}>Hoogezand</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#6A6560" }}>
            {tx(t.footer.tagline, lang)}
          </p>
          <p className="text-xs" style={{ color: "#4A4840" }}>
            {tx(BUSINESS.tagline, lang)}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#C8963E" }}
          >
            Contact
          </h3>
          <ul className="space-y-3 text-sm" style={{ color: "#8A8478" }}>
            <li>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-2 transition-colors hover:text-[#C8963E]"
              >
                <span aria-hidden="true">📞</span>
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-[#C8963E]"
              >
                <span aria-hidden="true">💬</span>
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 transition-colors hover:text-[#C8963E]"
              >
                <span aria-hidden="true">✉️</span>
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Area + links */}
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#C8963E" }}
          >
            {tx(t.footer.serviceArea, lang)}
          </h3>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "#6A6560" }}>
            {areas.slice(0, 5).join(" · ")}
          </p>
          <nav className="flex flex-col gap-2 text-sm" style={{ color: "#8A8478" }}>
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#C8963E]"
            >
              {tx(t.footer.privacyLink, lang)}
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-[#C8963E]"
            >
              {tx(t.footer.termsLink, lang)}
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-4 py-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs"
        style={{ borderColor: "#1E2A42", color: "#4A4840" }}
      >
        <p>{tx(t.footer.disclaimer, lang)}</p>
        <p>
          © {year} {BUSINESS.name} · {tx(t.footer.rights, lang)}
        </p>
      </div>
    </footer>
  );
}
