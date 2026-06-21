"use client";

/**
 * language-context.tsx
 * Simple React context for NL/EN language switching.
 * No external i18n package needed.
 */

import { createContext, useContext, useState, ReactNode } from "react";
import type { Lang } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "nl",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("nl");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Hook to use in any component */
export function useLanguage() {
  return useContext(LanguageContext);
}
