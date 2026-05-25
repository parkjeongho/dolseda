"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Shield, CheckCircle, ChevronDown } from "lucide-react"
import { useLang } from "@/components/LanguageProvider"
import NetworkBackground from "@/components/NetworkBackground"

function FadeUp({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.waffleparty.app"
const SCREENS = ["/m1.png", "/m2.png"]

function MobileCarousel() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDir(1)
      setIdx(i => (i + 1) % SCREENS.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-[150px] mx-auto overflow-hidden">
      <AnimatePresence mode="wait" initial={false} custom={dir}>
        <motion.div
          key={idx}
          custom={dir}
          variants={{
            enter: (d: number) => ({ x: d * 60, opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d: number) => ({ x: d * -60, opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        >
          <div style={{ filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.28)) drop-shadow(0 6px 12px rgba(0,0,0,0.16))" }}>
            <Image src={SCREENS[idx]} alt={`ScamLens AI 화면 ${idx + 1}`} width={995} height={2048} className="w-full h-auto block" />
          </div>
        </motion.div>
      </AnimatePresence>
      {/* 인디케이터 */}
      <div className="flex justify-center gap-1.5 mt-3">
        {SCREENS.map((_, i) => (
          <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
            className={`rounded-full transition-all duration-300 ${i === idx ? "w-4 h-1.5 bg-[#2563EB]" : "w-1.5 h-1.5 bg-[#CBD5E1]"}`}
          />
        ))}
      </div>
    </div>
  )
}
const SECTION_IDS = ["hero", "problem", "features", "how", "stats", "download"]

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-[140px] lg:w-[240px]" style={{ filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.28)) drop-shadow(0 6px 12px rgba(0,0,0,0.15))" }}>
      <Image src={src} alt={alt} width={995} height={2048} className="w-full h-auto block" />
    </div>
  )
}

export default function HomePage() {
  const { t, lang } = useLang()

  useEffect(() => {
    let locked = false
    const COOLDOWN = 900

    const onWheel = (e: WheelEvent) => {
      if (locked) return
      const sections = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
      if (!sections.length) return

      let currentIdx = 0
      let minDist = Infinity
      for (let i = 0; i < sections.length; i++) {
        const dist = Math.abs(sections[i].getBoundingClientRect().top)
        if (dist < minDist) { minDist = dist; currentIdx = i }
      }

      const dir = e.deltaY > 0 ? 1 : -1
      const next = Math.max(0, Math.min(sections.length - 1, currentIdx + dir))
      if (next === currentIdx) return

      e.preventDefault()
      locked = true
      sections[next].scrollIntoView({ behavior: "smooth", block: "start" })
      setTimeout(() => { locked = false }, COOLDOWN)
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    return () => window.removeEventListener("wheel", onWheel)
  }, [])

  return (
    <>
      {/* ─── Hero ─── */}
      <section id="hero" className="relative h-screen flex flex-col overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <NetworkBackground opacity={0.55} />
        </div>

        {/* GNB 여백 */}
        <div className="h-[72px] shrink-0" />

        {/* 중앙 콘텐츠: 남은 높이에서 수직 중앙 */}
        <div className="relative z-10 flex-1 flex items-center min-h-0">
          <div className="w-full max-w-[1200px] mx-auto px-6">
            <div className="flex items-center gap-12 justify-center">

              {/* 텍스트: 넓게 */}
              <div className="flex-1 max-w-[580px]">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.25)] text-[#2563EB] text-xs font-semibold mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                  {t.hero.badge}
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}
                  className="leading-[1.12] tracking-[-0.03em] mb-5">
                  <span className="block text-[clamp(1.1rem,1.8vw,1.6rem)] font-medium text-[#94A3B8] mb-1">{t.hero.line1}</span>
                  <span className="block text-[clamp(2rem,3.8vw,3.25rem)] font-black text-[#0F172A] whitespace-pre-line">{t.hero.line2}</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.18 }}
                  className="text-[#64748B] text-[0.9rem] leading-relaxed mb-6 max-w-[460px] whitespace-pre-line">
                  {t.hero.desc}
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.26 }}
                  className="flex flex-wrap gap-2 mb-7">
                  {t.hero.features.map((f, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />{f}
                    </span>
                  ))}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
                  className="flex items-center gap-3">
                  <a href={PLAY_URL} target="_blank" rel="noopener noreferrer"
                    className="hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
                    <div className="inline-block px-4 py-2 rounded-xl border border-[#D1D5DB]">
                      <Image src="/google-banner-w.png" alt="Google Play" width={160} height={48} className="w-56 h-auto block" />
                    </div>
                  </a>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{t.hero.free}</p>
                </motion.div>
              </div>

              {/* 목업: 작게, 데스크탑만 */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
                className="hidden lg:flex items-end gap-3 shrink-0">
                <div className="-translate-y-6">
                  <PhoneMockup src="/m1.png" alt="ScamLens AI 화면 1" />
                </div>
                <div className="translate-y-6">
                  <PhoneMockup src="/m2.png" alt="ScamLens AI 화면 2" />
                </div>
              </motion.div>

              {/* 모바일: 캐러셀 */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:hidden flex justify-center shrink-0">
                <MobileCarousel />
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* ─── Problem ─── */}
      <section id="problem" className="h-screen flex items-center bg-[#F8FAFF] border-t border-[#E2E8F0] overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <FadeUp className="text-center mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-[rgba(255,71,87,0.07)] border border-[rgba(255,71,87,0.18)] text-[#E53E3E] text-[0.65rem] font-bold tracking-widest uppercase mb-3">{t.problem.badge}</div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-black text-[#0F172A] leading-[1.1] tracking-[-0.03em] whitespace-pre-line">{t.problem.heading}</h2>
            <p className="text-[#64748B] mt-3 max-w-[480px] mx-auto text-sm leading-relaxed">{t.problem.desc}</p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-4">
            {t.problem.messages.map((m, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 h-full relative overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[rgba(255,71,87,0.4)] to-transparent" />
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#475569] text-xs font-semibold">{m.sender}</span>
                    <span className="text-[0.6rem] font-bold px-2 py-0.5 rounded-full bg-[rgba(255,71,87,0.07)] border border-[rgba(255,71,87,0.18)] text-[#E53E3E]">{m.label}</span>
                  </div>
                  <p className="text-[#334155] text-sm leading-relaxed">{m.text}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-[#00A88A] text-[0.65rem] font-semibold">
                    <Shield size={10} />{t.problem.blocked}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className="h-screen flex items-center bg-white border-t border-[#E2E8F0] overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <FadeUp className="text-center mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-[rgba(0,212,170,0.08)] border border-[rgba(0,212,170,0.2)] text-[#00A88A] text-[0.65rem] font-bold tracking-widest uppercase mb-3">{t.features.badge}</div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-black text-[#0F172A] leading-[1.1] tracking-[-0.03em] whitespace-pre-line">{t.features.heading}</h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.features.items.map((item, i) => (
              <FadeUp key={i} delay={i * 0.09}>
                <div className="rounded-2xl bg-[#F8FAFF] border border-[#E2E8F0] p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-[#0F172A] font-bold text-sm mb-2 group-hover:text-[#00A88A] transition-colors">{item.title}</h3>
                  <p className="text-[#64748B] text-xs leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section id="how" className="h-screen flex items-center bg-[#F8FAFF] border-t border-[#E2E8F0] overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-[rgba(0,212,170,0.08)] border border-[rgba(0,212,170,0.2)] text-[#00A88A] text-[0.65rem] font-bold tracking-widest uppercase mb-3">{t.howItWorks.badge}</div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-black text-[#0F172A] leading-[1.1] tracking-[-0.03em] whitespace-pre-line">{t.howItWorks.heading}</h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-[rgba(0,212,170,0.3)] via-[rgba(0,212,170,0.1)] to-[rgba(0,212,170,0.3)] hidden md:block" />
            {t.howItWorks.steps.map((step, i) => (
              <FadeUp key={i} delay={i * 0.13}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center mx-auto mb-5 relative z-10 shadow-sm">
                    <span className="text-[#00A88A] text-2xl font-black">{step.n}</span>
                  </div>
                  <h3 className="text-[#0F172A] font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed max-w-[260px] mx-auto">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section id="stats" className="h-screen flex items-center bg-white border-t border-[#E2E8F0] overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-black text-[#0F172A] tracking-[-0.02em]">
              {lang === "ko" ? "숫자로 보는 ScamLens AI" : lang === "en" ? "ScamLens AI by the Numbers" : "用數字看 ScamLens AI"}
            </h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.map((s, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="text-center rounded-2xl bg-[#F8FAFF] border border-[#E2E8F0] py-10 px-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="text-[clamp(2rem,4.5vw,3.25rem)] font-black text-[#00A88A] mb-2">{s.v}</div>
                  <div className="text-[#64748B] text-xs leading-snug">{s.l}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Download CTA ─── */}
      <section id="download" className="h-screen flex items-center bg-[#F8FAFF] border-t border-[#E2E8F0] overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 60% 60% at 50% 100%,rgba(0,212,170,0.07) 0%,transparent 60%)" }} className="absolute inset-0" />
        </div>
        <div className="relative z-10 w-full max-w-[680px] mx-auto px-6 text-center">
          <FadeUp>
            <div className="inline-block px-3 py-1 rounded-full bg-[rgba(0,212,170,0.08)] border border-[rgba(0,212,170,0.2)] text-[#00A88A] text-[0.65rem] font-bold tracking-widest uppercase mb-5">{t.download.badge}</div>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black text-[#0F172A] leading-[1.1] tracking-[-0.03em] whitespace-pre-line mb-5">{t.download.heading}</h2>
            <p className="text-[#64748B] text-base mb-10 leading-relaxed">{t.download.desc}</p>

            <a href={PLAY_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
              <Image src="/google-banner-w.png" alt="Google Play" width={190} height={56} className="h-14 w-auto mx-auto rounded-xl border border-[#D1D5DB]" />
            </a>

            <div className="mt-6 flex items-center justify-center gap-2 text-[#94A3B8] text-xs">
              <span className="text-sm">🇰🇷</span><span className="text-sm">🇺🇸</span><span className="text-sm">🇹🇼</span>
              <span className="ml-1">{t.download.countries}</span>
            </div>
            <div className="mt-3 flex items-center justify-center gap-1.5 text-[#00A88A] text-xs">
              <CheckCircle size={11} />{t.download.free}
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
