"use client";

/**
 * Header.tsx — Premium dark navigation.
 */

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/lib/translations";
import type { Lang } from "@/lib/translations";
import { usePathname } from "next/navigation";
import { BUSINESS } from "@/lib/business";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: tx(t.nav.home, lang) },
    { href: "/book", label: tx(t.nav.book, lang) },
    { href: "/services", label: tx(t.nav.services, lang) },
    { href: "/contact", label: tx(t.nav.contact, lang) },
  ];

  return (
    <>
      {/* Top Trust Bar */}
      <div
        className="mobile-trust-bar border-b flex items-center justify-center px-4 select-none"
        style={{
          backgroundColor: "#050914",
          borderColor: "#1a1f30",
          height: 28,
        }}
      >
        {/* Trust Bar */}
        <div className="mobile-trust-bar-content flex items-center gap-2">
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 12l2 2 4-4" stroke="#C8963E" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[10.5px] tracking-wide" style={{ color: "#AFA79A" }}>
            {lang === "nl"
              ? "Premium chauffeurservice vanuit Groningen"
              : "Premium chauffeur service from Groningen"}
          </span>
        </div>
      </div>


      <header
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: "#080A14",
          borderColor: "#1E2A42",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="mobile-header-row max-w-6xl mx-auto px-4 h-[52px] flex items-center justify-between">
          {/* Brand — circular logo mark + refined wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none group"
            aria-label="Noordlijn Chauffeurs - terug naar home"
          >
            {/* Circular logo icon */}
            <div
              className="header-logo-mark relative shrink-0 transition-all duration-300 group-hover:shadow-[0_0_14px_rgba(200,150,62,0.30)]"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid rgba(200,150,62,0.24)",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/noordlijn-mark.svg"
                alt=""
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Vertical hairline divider between logo and text */}
            <div className="flex flex-col items-start select-none leading-none">
              <span className="flex items-baseline gap-1">
                <span
                  className="header-wordmark font-cinzel text-[15px] md:text-[16px] font-bold uppercase transition-colors duration-300"
                  style={{ color: "#F2EAD8", letterSpacing: "0.055em" }}
                >
                  Noordlijn
                </span>
              </span>
              <span
                className="mt-1 text-[8.5px] font-semibold uppercase leading-none"
                style={{ color: "#C8963E", letterSpacing: "0.16em" }}
              >
                Chauffeurs
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5 text-[13px] font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-2 transition-colors duration-300 group"
                  style={{
                    color: isActive ? "#C8963E" : "#E2DCD0",
                  }}
                >
                  <span className="group-hover:text-[#C8963E] transition-colors duration-300">
                    {link.label}
                  </span>
                  <span
                    className="absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-all duration-300"
                    style={{
                      background: "#C8963E",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "center",
                      boxShadow: "none",
                    }}
                  />
                  {!isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-all duration-300 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                      style={{
                        background: "rgba(200,150,62,0.65)",
                        boxShadow: "none",
                        transformOrigin: "center",
                      }}
                    />
                  )}
                </Link>
              );
            })}
            <LanguageSwitcher lang={lang} setLang={setLang} />

            <a
              href={`tel:${BUSINESS.phone}`}
              className="ml-2 flex items-center gap-2 transition-colors hover:text-[#C8963E]"
              style={{ color: "#E2DCD0" }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#C8963E" strokeWidth={2.4} className="shrink-0" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="flex flex-col leading-tight">
                <span className="text-[11px]" style={{ color: "#AFA79A" }}>
                  {lang === "nl" ? "Direct contact" : "Direct contact"}
                </span>
                <span className="text-[13px] font-semibold" style={{ color: "#F2EAD8" }}>
                  {BUSINESS.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href="/book"
              id="header-call-btn"
              className="px-5 py-2.5 rounded-md text-[13px] font-bold transition-all hover:brightness-105 active:scale-95 shrink-0 flex items-center gap-2 cursor-pointer select-none"
              style={{
                backgroundColor: "#C8963E",
                color: "#080A14",
                boxShadow: "none",
              }}
            >
              <span>{lang === "nl" ? "Offerte aanvragen" : "Request a quote"}</span>
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="mobile-header-controls flex lg:hidden items-center gap-2">
            <LanguageSwitcher lang={lang} setLang={setLang} />
            <button
              aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-menu-button p-2 rounded-lg transition-colors"
              style={{ color: "#9A9088" }}
            >
              {menuOpen ? (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            className="lg:hidden border-t px-4 pb-4 pt-2"
            style={{ backgroundColor: "#080A14", borderColor: "#1E2A42" }}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2.5 px-3 rounded-lg font-medium transition-all"
                    style={{
                      color: isActive ? "#C8963E" : "#F2EAD8",
                      backgroundColor: isActive ? "rgba(200,150,62,0.08)" : "transparent",
                      borderLeft: isActive ? "3px solid #C8963E" : "3px solid transparent",
                      paddingLeft: isActive ? "16px" : "12px",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

function LanguageSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const languages = {
    nl: {
      short: "NL",
      label: "Nederlands",
      flag: (
        <svg width="16" height="11" viewBox="0 0 9 6" className="shrink-0 rounded-sm overflow-hidden" aria-hidden="true">
          <rect width="9" height="2" fill="#AE1C28"/>
          <rect y="2" width="9" height="2" fill="#FFF"/>
          <rect y="4" width="9" height="2" fill="#21468B"/>
        </svg>
      ),
    },
    en: {
      short: "EN",
      label: "English",
      flag: (
        <svg width="16" height="11" viewBox="0 0 50 30" className="shrink-0 rounded-sm overflow-hidden" aria-hidden="true">
          <rect width="50" height="30" fill="#012169"/>
          <path d="M0,0 L50,30 M50,0 L0,30" stroke="#FFF" strokeWidth="6"/>
          <path d="M0,0 L50,30 M50,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
          <path d="M0,15 H50 M25,0 V30" stroke="#FFF" strokeWidth="10"/>
          <path d="M0,15 H50 M25,0 V30" stroke="#C8102E" strokeWidth="6"/>
        </svg>
      ),
    },
  };

  const current = languages[lang];

  return (
    <div className="mobile-language-switcher relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={lang === "nl" ? "Taal selecteren" : "Select language"}
        className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-[#1E2A42] bg-transparent text-[11px] font-semibold text-[#C9C3B8] hover:text-[#C8963E] hover:border-[#C8963E] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C8963E] select-none"
      >
        <span className="leading-none">{current.short}</span>
        <svg
          className={`w-3 h-3 text-[#8A857F] transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180 text-[#C8963E]" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div
          className="absolute right-0 mt-1.5 w-28 rounded-lg border border-[#1E2A42] bg-[#0A0D18] shadow-[0_4px_20px_rgba(0,0,0,0.45)] focus:outline-none z-50 overflow-hidden"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            <button
              onClick={() => {
                setLang("nl");
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 w-full text-left px-3 py-2 text-xs font-semibold transition-all duration-150 cursor-pointer ${
                lang === "nl"
                  ? "text-[#C8963E] bg-[#1E2A42]/30"
                  : "text-[#E2DCD0] hover:text-[#C8963E] hover:bg-[#11162B]"
              }`}
              role="menuitem"
            >
              <span className="leading-none shrink-0" aria-hidden="true">{languages.nl.flag}</span>
              <span>{languages.nl.label}</span>
            </button>
            <button
              onClick={() => {
                setLang("en");
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 w-full text-left px-3 py-2 text-xs font-semibold transition-all duration-150 cursor-pointer ${
                lang === "en"
                  ? "text-[#C8963E] bg-[#1E2A42]/30"
                  : "text-[#E2DCD0] hover:text-[#C8963E] hover:bg-[#11162B]"
              }`}
              role="menuitem"
            >
              <span className="leading-none shrink-0" aria-hidden="true">{languages.en.flag}</span>
              <span>{languages.en.label}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
