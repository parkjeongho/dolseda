"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
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
const SECTION_IDS = ["hero", "problem", "features", "how", "stats", "download"]

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative" style={{ width: 295 }}>
      {/* 폰 바디 */}
      <div className="relative rounded-[42px] bg-[#111318] overflow-hidden"
        style={{
          padding: "12px 8px 14px 8px",
          boxShadow: "0 40px 80px rgba(0,0,0,0.28), 0 8px 24px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}>
        {/* 사이드 버튼 (장식) */}
        <div className="absolute -left-[3px] top-[88px] w-[3px] h-8 rounded-l-sm bg-[#1E2028]" />
        <div className="absolute -left-[3px] top-[132px] w-[3px] h-12 rounded-l-sm bg-[#1E2028]" />
        <div className="absolute -left-[3px] top-[192px] w-[3px] h-12 rounded-l-sm bg-[#1E2028]" />
        <div className="absolute -right-[3px] top-[120px] w-[3px] h-16 rounded-r-sm bg-[#1E2028]" />

        {/* 스크린 영역 */}
        <div className="relative rounded-[34px] overflow-hidden bg-black">
          {/* 펀치홀 카메라 */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0A0A0C] z-10
            ring-[2px] ring-[#1A1A1E]" />
          <Image
            src={src}
            alt={alt}
            width={1440}
            height={2952}
            className="w-full h-auto block"
          />
        </div>
      </div>
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
      <section id="hero" className="relative h-screen flex items-center overflow-hidden bg-white pt-[72px]">
        <div className="absolute inset-0 pointer-events-none">
          <NetworkBackground opacity={0.55} />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-transparent to-white/20" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,1.3fr] gap-8 items-center">

            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,212,170,0.10)] border border-[rgba(0,212,170,0.28)] text-[#00A88A] text-xs font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] animate-pulse" />
                {t.hero.badge}
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}
                className="leading-[1.12] tracking-[-0.03em] mb-6">
                <span className="block text-[clamp(1.5rem,2.5vw,2rem)] font-medium text-[#94A3B8] mb-1">{t.hero.line1}</span>
                <span className="block text-[clamp(2.25rem,4.5vw,3.75rem)] font-black text-[#0F172A]">{t.hero.line2}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.18 }}
                className="text-[#64748B] text-[0.95rem] leading-relaxed mb-8 max-w-[440px]">
                {t.hero.desc}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.28 }}
                className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <a href={PLAY_URL} target="_blank" rel="noopener noreferrer"
                  className="hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200">
                  <Image src="/badge-google-play.svg" alt="Google Play" width={160} height={48} className="h-12 w-auto" />
                </a>
                <div className="flex items-center gap-1.5 text-sm text-[#94A3B8]">
                  <CheckCircle size={13} className="text-[#00D4AA] shrink-0" />
                  {t.hero.free}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="flex items-center gap-2 mt-6 text-xs text-[#94A3B8]">
                <span className="text-base">🇰🇷</span><span className="text-base">🇺🇸</span><span className="text-base">🇹🇼</span>
                <span className="ml-1">{t.download.countries}</span>
              </motion.div>
            </div>

            {/* Right: Two staggered phone mockups */}
            <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              className="hidden lg:flex justify-center items-center">
              <div className="relative flex items-end gap-5">

                {/* 왼쪽 폰 — 위로 */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                  className="-translate-y-16">
                  <PhoneMockup src="/screen1.png" alt="ScamLens AI 화면 1" />
                </motion.div>

                {/* 오른쪽 폰 — 아래로 */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.32 }}
                  className="translate-y-16">
                  <PhoneMockup src="/screen2.png" alt="ScamLens AI 화면 2" />
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>

        {/* 아래 화살표 */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-[#CBD5E1]">
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
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
              <Image src="/badge-google-play.svg" alt="Google Play" width={190} height={56} className="h-14 w-auto mx-auto" />
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
