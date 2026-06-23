"use client";

import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/business";

const WA_PATH =
  "M16 3C8.832 3 3 8.832 3 16c0 2.295.618 4.537 1.79 6.504L3 29l6.652-1.748A13.01 13.01 0 0016 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm0 2c6.065 0 11 4.935 11 11S22.065 27 16 27a10.99 10.99 0 01-5.578-1.523l-.34-.207-3.948 1.036 1.067-3.844-.226-.352A10.966 10.966 0 015 16C5 9.935 9.935 5 16 5zm-2.7 4.5c-.264 0-.694.099-.955.374-.261.274-.999.976-.999 2.38 0 1.404 1.021 2.762 1.163 2.953.143.19 2.007 3.07 4.865 4.306.68.293 1.21.468 1.624.599.682.218 1.304.187 1.795.114.547-.082 1.685-.689 1.922-1.354.237-.665.237-1.235.166-1.354-.071-.12-.261-.19-.546-.333-.285-.143-1.685-.832-1.946-.927-.261-.095-.452-.143-.642.143-.19.285-.737.927-.902 1.117-.166.19-.332.214-.617.071-.285-.143-1.203-.443-2.292-1.414-.847-.754-1.419-1.686-1.585-1.97-.166-.285-.018-.44.125-.582.128-.127.285-.333.428-.499.143-.166.19-.285.285-.475.095-.19.047-.357-.024-.499-.071-.143-.641-1.547-.878-2.117-.231-.555-.465-.48-.642-.488-.166-.007-.356-.009-.547-.009z";

export default function FloatingContactBubbles() {
  const [hiddenBySection, setHiddenBySection] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    const quickBooking = document.querySelector("#quick-booking");
    if (!footer && !quickBooking) return;

    const update = () => {
      const isTabletWidth = window.innerWidth >= 768 && window.innerWidth < 1180;
      const footerRect = footer?.getBoundingClientRect();
      const quickRect = quickBooking?.getBoundingClientRect();
      const footerVisible = Boolean(footerRect && footerRect.top < window.innerHeight && footerRect.bottom > 0);
      const quickVisible = Boolean(
        isTabletWidth &&
          quickRect &&
          quickRect.top < window.innerHeight * 0.72 &&
          quickRect.bottom > window.innerHeight * 0.28
      );
      setHiddenBySection(footerVisible || quickVisible);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      data-floating-contact="rail"
      className={`fixed right-4 top-[56vh] z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex ${
        hiddenBySection ? "pointer-events-none opacity-0" : "opacity-100"
      } transition-opacity duration-200`}
      aria-label="Quick contact"
    >
      <a
        data-floating-contact="whatsapp"
        href={`https://wa.me/${BUSINESS.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp: ${BUSINESS.whatsappDisplay}`}
        className="flex h-12 w-12 items-center justify-center rounded-full border bg-[#080A14]/95 text-[#C8963E] transition-colors hover:border-[#C8963E] hover:bg-[#0D1120] focus-visible:border-[#C8963E]"
        style={{ borderColor: "rgba(200,150,62,0.34)", boxShadow: "0 8px 22px rgba(0,0,0,0.28)" }}
      >
        <svg width="23" height="23" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d={WA_PATH} />
        </svg>
      </a>
      <a
        data-floating-contact="phone"
        href={`tel:${BUSINESS.phone}`}
        aria-label={`Call: ${BUSINESS.phoneDisplay}`}
        className="flex h-12 w-12 items-center justify-center rounded-full border bg-[#080A14]/95 text-[#C8963E] transition-colors hover:border-[#C8963E] hover:bg-[#0D1120] focus-visible:border-[#C8963E]"
        style={{ borderColor: "rgba(200,150,62,0.34)", boxShadow: "0 8px 22px rgba(0,0,0,0.28)" }}
      >
        <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.1} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </div>
  );
}
