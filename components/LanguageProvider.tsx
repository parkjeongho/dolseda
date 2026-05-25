"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { type Lang, translations, type Translations } from "@/lib/i18n"

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LangCtx>({
  lang: "ko",
  setLang: () => {},
  t: translations.ko,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ko")

  useEffect(() => {
    const saved = localStorage.getItem("vibe_lang") as Lang | null
    if (saved && translations[saved]) setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem("vibe_lang", l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
