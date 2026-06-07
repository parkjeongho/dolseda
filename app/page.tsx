"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import QRCode from "react-qr-code"
import { useLang } from "@/components/LanguageProvider"
import NetworkBackground from "@/components/NetworkBackground"

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
          <Image src={SCREENS[idx]} alt={`ScamLens AI 화면 ${idx + 1}`} width={995} height={2048} className="w-full h-auto block" />
        </motion.div>
      </AnimatePresence>
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

function DesktopCarousel() {
  return (
    <div className="relative shrink-0" style={{ height: '65vh', aspectRatio: '9/16' }}>
      <div className="absolute top-[6%] w-[62%]" style={{ zIndex: 1, left: '-6%' }}>
        <Image src="/m1.png" alt="ScamLens AI 화면 1" width={995} height={2048} className="w-full h-auto block" />
      </div>
      <div className="absolute right-0 top-0 w-[62%]" style={{ zIndex: 2 }}>
        <div className="absolute bottom-0 left-[5%] right-[5%] h-8 rounded-full"
          style={{ background: 'rgba(0,0,0,0.3)', filter: 'blur(16px)', transform: 'translateY(55%)', zIndex: -1 }} />
        <Image src="/m2.png" alt="ScamLens AI 화면 2" width={995} height={2048} className="w-full h-auto block" />
      </div>
    </div>
  )
}

export default function HomePage() {
  const { t } = useLang()

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <NetworkBackground opacity={0.55} />
      </div>

      {/* GNB 여백 */}
      <div className="h-[72px] shrink-0" />

      {/* 중앙 콘텐츠 */}
      <div className="relative z-10 flex-1 flex items-center min-h-0 py-10 lg:py-0">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-center">

            {/* 텍스트 */}
            <div className="flex-1 max-w-[580px] w-full text-center lg:text-left">
              {t.hero.badge && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.25)] text-[#2563EB] text-xs font-semibold mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                  {t.hero.badge}
                </motion.div>
              )}

              <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}
                className="leading-[1.12] tracking-[-0.03em] mb-5">
                <span className="block text-[clamp(1rem,1.8vw,1.6rem)] font-medium text-[#94A3B8] mb-1">{t.hero.line1}</span>
                <span className="block text-[clamp(1.75rem,3.8vw,3.25rem)] font-black text-[#0F172A] whitespace-pre-line">{t.hero.line2}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.18 }}
                className="text-[#64748B] text-[0.9rem] leading-relaxed mb-6 max-w-[460px] whitespace-pre-line mx-auto lg:mx-0">
                {t.hero.desc}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.26 }}
                className="flex flex-col gap-2 mb-7">
                <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
                  {t.hero.features.slice(0, 3).map((f, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" />{f}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
                  {t.hero.features.slice(3).map((f, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" />{f}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
                className="flex justify-center lg:justify-start">
                {/* 모바일: 배너만 */}
                <div className="lg:hidden">
                  <a href={PLAY_URL} target="_blank" rel="noopener noreferrer"
                    className="hover:opacity-90 transition-all duration-200 inline-block">
                    <Image src="/google.png" alt="Google Play" width={180} height={50} className="h-[50px] w-auto block rounded-lg" />
                  </a>
                </div>
                {/* 데스크탑: 배너 + 버튼 + QR */}
                <div className="hidden lg:flex gap-3 items-start">
                  <div className="flex flex-col gap-2 h-[148px]">
                    <a href={PLAY_URL} target="_blank" rel="noopener noreferrer"
                      className="shrink-0 hover:opacity-90 transition-all duration-200">
                      <div style={{border: '7px solid #12100B', borderRadius: '8px', overflow: 'hidden'}}>
                        <Image src="/google.png" alt="Google Play" width={200} height={56} className="w-[200px] h-[56px] block" />
                      </div>
                    </a>
                    <a href={PLAY_URL} target="_blank" rel="noopener noreferrer"
                      className="h-[70px] hover:opacity-90 transition-all duration-200 relative">
                      <span className="flex items-center justify-center w-full h-full rounded-lg bg-[#2563EB] text-white text-base font-black">
                        QR 찍고 바로 다운로드!
                      </span>
                      <div style={{
                        position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)',
                        width: 0, height: 0,
                        borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '10px solid #2563EB',
                      }} />
                    </a>
                  </div>
                  <a href={PLAY_URL} target="_blank" rel="noopener noreferrer"
                    className="hover:opacity-90 transition-all duration-200">
                    <div className="p-2 bg-white border-[6px] border-[#2563EB]">
                      <QRCode value={PLAY_URL} size={120} />
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* 목업: 데스크탑만 */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              className="hidden lg:block">
              <DesktopCarousel />
            </motion.div>

            {/* 모바일: 캐러셀 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:hidden flex justify-center w-full">
              <MobileCarousel />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
