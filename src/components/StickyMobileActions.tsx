"use client";

/**
 * StickyMobileActions.tsx — Premium dark mobile bottom bar.
 * Call, WhatsApp and transfer planning actions.
 */

import { BUSINESS } from "@/lib/business";
import { t, tx } from "@/lib/translations";
import { useLanguage } from "@/lib/language-context";

export default function StickyMobileActions() {
  const { lang } = useLanguage();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden px-3 pb-[max(10px,env(safe-area-inset-bottom))] pt-2"
      style={{
        backgroundColor: "rgba(8,10,20,0.96)",
        borderTop: "1px solid #1E2A42",
        boxShadow: "0 -10px 28px rgba(0,0,0,0.36)",
        backdropFilter: "blur(14px)",
      }}
    >
      {/* Call */}
      <a
        href={`tel:${BUSINESS.phone}`}
        id="sticky-call-btn"
        aria-label={`${tx(t.stickyBar.call, lang)}: ${BUSINESS.phoneDisplay}`}
        className="flex-1 flex flex-col items-center justify-center rounded-lg py-2 gap-1 transition-colors"
        style={{ color: "#F2EAD8" }}
      >
        <svg className="w-5 h-5" style={{ color: "#C8963E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="text-[11px] font-medium" style={{ color: "#B9B1A5" }}>
          {tx(t.stickyBar.call, lang)}
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${BUSINESS.whatsapp}`}
        id="sticky-whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp: ${BUSINESS.whatsappDisplay}`}
        className="flex-1 flex flex-col items-center justify-center rounded-lg py-2 gap-1 transition-colors"
        style={{ color: "#F2EAD8" }}
      >
        <svg className="w-5 h-5" viewBox="0 0 32 32" fill="#C8963E" aria-hidden="true">
          <path d="M16 3C8.832 3 3 8.832 3 16c0 2.295.618 4.537 1.79 6.504L3 29l6.652-1.748A13.01 13.01 0 0016 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm0 2c6.065 0 11 4.935 11 11S22.065 27 16 27a10.99 10.99 0 01-5.578-1.523l-.34-.207-3.948 1.036 1.067-3.844-.226-.352A10.966 10.966 0 015 16C5 9.935 9.935 5 16 5zm-2.7 4.5c-.264 0-.694.099-.955.374-.261.274-.999.976-.999 2.38 0 1.404 1.021 2.762 1.163 2.953.143.19 2.007 3.07 4.865 4.306.68.293 1.21.468 1.624.599.682.218 1.304.187 1.795.114.547-.082 1.685-.689 1.922-1.354.237-.665.237-1.235.166-1.354-.071-.12-.261-.19-.546-.333-.285-.143-1.685-.832-1.946-.927-.261-.095-.452-.143-.642.143-.19.285-.737.927-.902 1.117-.166.19-.332.214-.617.071-.285-.143-1.203-.443-2.292-1.414-.847-.754-1.419-1.686-1.585-1.97-.166-.285-.018-.44.125-.582.128-.127.285-.333.428-.499.143-.166.19-.285.285-.475.095-.19.047-.357-.024-.499-.071-.143-.641-1.547-.878-2.117-.231-.555-.465-.48-.642-.488-.166-.007-.356-.009-.547-.009z" />
        </svg>
        <span className="text-[11px] font-medium" style={{ color: "#B9B1A5" }}>
          {tx(t.stickyBar.whatsapp, lang)}
        </span>
      </a>

      <a
        href="/book"
        id="sticky-book-btn"
        aria-label={tx(t.stickyBar.book, lang)}
        className="flex-[1.18] flex flex-col items-center justify-center rounded-lg py-2 gap-1 transition-colors"
        style={{ backgroundColor: "#C8963E", color: "#080A14" }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-[11px] font-bold">
          {tx(t.stickyBar.book, lang)}
        </span>
      </a>
    </div>
  );
}
