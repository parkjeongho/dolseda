"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, ChevronDown, X, Menu } from "lucide-react"
import { useLang } from "@/components/LanguageProvider"
import { type Lang, LANG_LABELS } from "@/lib/i18n"

const LANGS: Lang[] = ["ko", "en", "zh-TW"]
const PLAY_URL = "https://play.google.com/store/apps/details?id=com.waffleparty.app"

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-2xl border-b border-[#E2E8F0] shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo22.png"
              alt="Vibe A Corp."
              width={575}
              height={352}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Right: Language + CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language selector */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(v => !v)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[0.8rem] font-medium transition-colors duration-200 ${
                  langOpen
                    ? "bg-[rgba(0,212,170,0.08)] text-[#00A88A]"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFF]"
                }`}
              >
                <Globe size={14} />
                <span>{LANG_LABELS[lang]}</span>
                <ChevronDown size={11} className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-36 bg-white border border-[#E2E8F0] rounded-2xl py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
                  >
                    {LANGS.map(l => (
                      <button
                        key={l}
                        onClick={() => { setLang(l); setLangOpen(false) }}
                        className={`w-full flex items-center justify-between px-4 py-2.5 text-sm rounded-xl transition-colors mx-auto ${
                          lang === l
                            ? "text-[#0F172A] bg-[#F0FDF9]"
                            : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFF]"
                        }`}
                        style={{ width: "calc(100% - 8px)", marginInline: "4px" }}
                      >
                        <span>{LANG_LABELS[l]}</span>
                        {lang === l && <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Google Play CTA */}
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] hover:-translate-y-0.5 transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="sm:hidden p-2 text-white" onClick={() => setMobileOpen(v => !v)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 pt-[72px]">
            <div className="flex gap-2">
              {LANGS.map(l => (
                <button key={l} onClick={() => { setLang(l); setMobileOpen(false) }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    lang === l
                      ? "bg-[rgba(0,212,170,0.12)] border border-[rgba(0,212,170,0.28)] text-[#00D4AA]"
                      : "bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#6B7A8D]"
                  }`}>
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="px-10 py-4 rounded-2xl text-base font-bold text-[#080C18] bg-[#00D4AA] shadow-[0_0_32px_rgba(0,212,170,0.3)]">
              {t.nav.cta}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
