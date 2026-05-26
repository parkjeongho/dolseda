"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Shield, Star, Smartphone, Globe, Brain, Lock, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"

function FadeUp({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}>
      {children}
    </motion.div>
  )
}

const features = [
  { icon: <Brain size={20} />, title: "온디바이스 AI 탐지", desc: "문자 내용이 서버로 전송되지 않습니다. 내 기기에서 AI가 직접 분석해 개인정보를 완벽하게 보호합니다.", color: "#5B6EF5" },
  { icon: <Globe size={20} />, title: "글로벌 집단지성", desc: "전 세계 사용자의 신고 패턴을 학습한 AI가 최신 사기 수법을 실시간으로 탐지합니다. 혼자가 아닌 함께 막습니다.", color: "#9060F0" },
  { icon: <Lock size={20} />, title: "Trust-First 아키텍처", desc: "공공기관, 금융기관, 통신사 등 신뢰 발신자 DB를 우선 확인해 정상 문자 오탐을 최소화합니다.", color: "#00D4AA" },
  { icon: <Smartphone size={20} />, title: "3개국 특화 탐지", desc: "한국, 미국, 대만 각 국가의 사기 패턴을 별도 분석합니다. 나라별 최신 스미싱 수법에 대응합니다.", color: "#74C0FC" },
  { icon: <Shield size={20} />, title: "즉각적인 경고", desc: "위험 문자 수신 즉시 알림을 보냅니다. AI 분석 결과와 함께 왜 위험한지, 어떻게 대처해야 할지 안내합니다.", color: "#FFB347" },
  { icon: <Star size={20} />, title: "Gemini AI 심층 분석", desc: "유료 사용자는 Google Gemini AI의 심층 분석으로 더 정밀한 탐지와 상세 설명을 받을 수 있습니다.", color: "#FF7B7B" },
]

// 스크린샷 — /public/screenshots/ 에 파일 드롭하면 즉시 활성화
// 파일명: screen-1.png ~ screen-5.png
const screenshots = [
  { label: "홈 화면\n(실시간 탐지)",  src: "/screenshots/screen-1.png" },
  { label: "문자 분석\n결과 상세",    src: "/screenshots/screen-2.png" },
  { label: "위험도\n통계 현황",       src: "/screenshots/screen-3.png" },
  { label: "설정 및\n알림 관리",      src: "/screenshots/screen-4.png" },
  { label: "프리미엄\n심층 분석",     src: "/screenshots/screen-5.png" },
]

const howItWorks = [
  { step: "01", title: "문자 수신 감지", desc: "새 문자가 도착하는 순간, 백그라운드에서 자동으로 분석을 시작합니다. 별도 앱 실행 불필요." },
  { step: "02", title: "온디바이스 AI 분석", desc: "기기 내 AI가 발신자, 문자 패턴, URL, 키워드를 종합 분석합니다. 데이터는 기기 밖으로 나가지 않습니다." },
  { step: "03", title: "즉각 결과 전달", desc: "안전/확인필요/위험 3단계로 분류한 결과를 알림으로 전달합니다. 위험 시 즉각 차단 안내도 함께 제공합니다." },
]

const countries = [
  { flag: "🇰🇷", name: "한국", desc: "보이스피싱·스미싱 특화 탐지\n금융기관 사칭 패턴 분석\n재난안전문자 완전 제외" },
  { flag: "🇺🇸", name: "미국", desc: "IRS·USPS·FedEx 사칭 탐지\n패키지 배달 사기 탐지\nSmishing 링크 안전성 검사" },
  { flag: "🇹🇼", name: "대만", desc: "ATM 조작 지시 즉시 차단\n통관 사기 패턴 분석\n165 반詐騙 기관 정보 연동" },
]

export default function SecurityPage() {
  const [activeScreen, setActiveScreen] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollTo = (dir: "prev" | "next") => {
    const next = dir === "next"
      ? Math.min(activeScreen + 1, screenshots.length - 1)
      : Math.max(activeScreen - 1, 0)
    setActiveScreen(next)
    if (scrollRef.current) {
      const card = scrollRef.current.children[next] as HTMLElement
      card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
    }
  }

  return (
    <>
      {/* ─── App Hero ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse 70% 50% at 50% 0%,rgba(0,212,170,0.12) 0%,transparent 55%),radial-gradient(ellipse 50% 40% at 80% 60%,rgba(0,136,255,0.08) 0%,transparent 55%)"}}>
        </div>
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: App info */}
            <div>
              <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
                <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#0F172A] transition-colors mb-10">
                  <ChevronLeft size={16} /> Vibe A
                </Link>

                <div className="w-24 h-24 rounded-[22px] bg-gradient-to-br from-[#00D4AA] to-[#0088FF] flex items-center justify-center text-4xl mb-7 shadow-[0_8px_40px_rgba(0,212,170,0.35)]">
                  🛡️
                </div>

                <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-[-0.03em] leading-tight mb-3">
                  ScamLens AI
                </h1>
                <p className="text-[#64748B] text-sm mb-1">Vibe A · 보안</p>

                <div className="flex flex-wrap items-center gap-4 my-6">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#FBBF24] text-sm">★★★★★</span>
                    <span className="font-semibold text-sm">5.0</span>
                    <span className="text-[#94A3B8] text-xs">(초기 출시)</span>
                  </div>
                  <div className="w-px h-4 bg-[#E2E8F0]" />
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[rgba(0,212,170,0.12)] border border-[rgba(0,212,170,0.25)] text-[#00D4AA] text-xs font-bold">
                    ● LIVE
                  </span>
                  <div className="w-px h-4 bg-[#E2E8F0]" />
                  <span className="text-[#64748B] text-xs">무료 · 인앱결제</span>
                </div>

                {/* Country flags */}
                <div className="flex items-center gap-3 mb-7">
                  {countries.map(c => (
                    <div key={c.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8FAFF] border border-[#E2E8F0]">
                      <span className="text-lg">{c.flag}</span>
                      <span className="text-xs text-[#475569] font-medium">{c.name}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[#475569] leading-relaxed mb-9 max-w-[500px]">
                  온디바이스 AI와 글로벌 집단지성으로 스미싱·피싱 문자를 실시간 탐지합니다.
                  내 기기에서만 처리되어 개인정보가 완벽하게 보호됩니다.
                </p>

                <div className="flex flex-wrap gap-3 mb-7">
                  <a href="#" className="hover:-translate-y-0.5 transition-transform duration-200">
                    <Image src="/ko_googleplay.svg" alt="Get it on Google Play" width={180} height={70} className="h-[52px] w-auto" />
                  </a>
                  <div className="opacity-35 cursor-not-allowed" title="App Store — 준비중">
                    <Image src="/badge-app-store.svg" alt="Download on the App Store" width={180} height={70} className="h-[52px] w-auto" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["AI 보안","스미싱 탐지","피싱 방지","온디바이스","개인정보 보호"].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-[0.7rem] font-medium bg-[#F8FAFF] border border-[#E2E8F0] text-[#475569]">{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Phone mockup */}
            <motion.div initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{duration:0.7,delay:0.2}}
              className="flex flex-col items-center gap-4">
              <div className="relative w-[240px] h-[500px] rounded-[36px] bg-[#0C0C1A] border-2 border-white/15 overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 flex flex-col">
                  <div className="h-8 bg-[#07070F] flex items-center justify-between px-4 shrink-0">
                    <span className="text-[0.6rem] text-[#9090B8]">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-2 rounded-sm bg-[#00D4AA]" />
                      <div className="w-1.5 h-2 rounded-sm bg-white/20" />
                    </div>
                  </div>
                  <div className="flex-1 bg-[#07070F] flex flex-col items-center justify-center px-4 gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D4AA] to-[#0088FF] flex items-center justify-center text-2xl">🛡️</div>
                    <div className="text-center">
                      <div className="font-bold text-sm mb-1">ScamLens AI</div>
                      <div className="text-[#00D4AA] text-xs">보호 중 · 실시간 탐지 ON</div>
                    </div>
                    <div className="w-full space-y-2">
                      {[
                        {txt:"[안전] 국민은행 결제 알림",c:"#00D4AA"},
                        {txt:"[확인필요] 해외발신 문자",c:"#FFB347"},
                        {txt:"[위험] 긴급 계좌 확인 요망",c:"#FF7B7B"},
                      ].map(r=>(
                        <div key={r.txt} className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/8">
                          <div className="w-2 h-2 rounded-full shrink-0" style={{background:r.c}} />
                          <div className="text-[0.6rem] text-[#9090B8] truncate">{r.txt}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[#5A5A7A] text-xs">실제 앱 UI (스크린샷 추가 예정)</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="border-y border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[{v:"3국",l:"동시 출시"},{v:"무료",l:"기본 탐지"},{v:"0원",l:"서버 전송 비용"},{v:"100%",l:"온디바이스 분석"}].map((s,i)=>(
              <FadeUp key={s.l} delay={i*0.08} className={`py-10 text-center ${i<3?"border-r border-[#E2E8F0]":""}`}>
                <div className="text-2xl font-black grad-text-security mb-2">{s.v}</div>
                <div className="text-xs text-[#64748B]">{s.l}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Global Coverage ─── */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeUp className="text-center mb-14">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[rgba(0,212,170,0.1)] border border-[rgba(0,212,170,0.2)] text-[#00D4AA] text-[0.7rem] font-bold tracking-widest uppercase mb-5">Global Coverage</div>
            <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-black tracking-[-0.025em] leading-tight mb-4">3개국 특화 탐지</h2>
            <p className="text-[#475569] max-w-[480px] mx-auto text-base leading-relaxed">각 국가의 사기 수법은 다릅니다. ScamLens AI는 한국·미국·대만 각지의 패턴을 별도로 분석합니다.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {countries.map((c, i) => (
              <FadeUp key={c.name} delay={i * 0.1}>
                <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-sm p-8 hover:bg-[#F8FAFF] hover:border-[#CBD5E1] hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="text-5xl mb-5">{c.flag}</div>
                  <h3 className="font-black text-xl mb-4">{c.name}</h3>
                  <ul className="space-y-2">
                    {c.desc.split("\n").map(line => (
                      <li key={line} className="flex items-start gap-2 text-sm text-[#475569]">
                        <CheckCircle2 size={13} className="text-[#00D4AA] shrink-0 mt-0.5" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

      {/* ─── Screenshots ─── */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeUp className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="inline-block px-3.5 py-1 rounded-full bg-[rgba(0,212,170,0.1)] border border-[rgba(0,212,170,0.2)] text-[#00D4AA] text-[0.7rem] font-bold tracking-widest uppercase mb-4">Screenshots</div>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-black tracking-[-0.025em]">앱 미리보기</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollTo("prev")}
                disabled={activeScreen === 0}
                className="w-10 h-10 rounded-full bg-[#F8FAFF] border border-[#E2E8F0] flex items-center justify-center hover:bg-[#EFF6FF] disabled:opacity-30 disabled:cursor-not-allowed transition-all">
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs text-[#5A5A7A] w-12 text-center">{activeScreen + 1} / {screenshots.length}</span>
              <button
                onClick={() => scrollTo("next")}
                disabled={activeScreen === screenshots.length - 1}
                className="w-10 h-10 rounded-full bg-[#F8FAFF] border border-[#E2E8F0] flex items-center justify-center hover:bg-[#EFF6FF] disabled:opacity-30 disabled:cursor-not-allowed transition-all">
                <ChevronRight size={18} />
              </button>
            </div>
          </FadeUp>

          <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory select-none scrollbar-none">
            {screenshots.map((s, i) => (
              <motion.div key={i}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{delay:i*0.08,duration:0.5}}
                className={`flex-shrink-0 w-[190px] h-[400px] rounded-[28px] border snap-start overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeScreen === i
                    ? "border-[#2563EB] scale-105 shadow-[0_0_20px_rgba(37,99,235,0.15)]"
                    : "border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
                onClick={() => setActiveScreen(i)}>
                <Image
                  src={s.src}
                  alt={s.label.replace("\n", " ")}
                  width={190}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, i) => (
              <button key={i} onClick={() => setActiveScreen(i)}
                className={`rounded-full transition-all duration-200 ${
                  activeScreen === i ? "w-6 h-2 bg-[#2563EB]" : "w-2 h-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                }`} />
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

      {/* ─── Features ─── */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeUp className="text-center mb-14">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[rgba(0,212,170,0.1)] border border-[rgba(0,212,170,0.2)] text-[#00D4AA] text-[0.7rem] font-bold tracking-widest uppercase mb-5">Features</div>
            <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-black tracking-[-0.025em] leading-tight mb-4">AI가 만드는<br />새로운 보안 경험</h2>
            <p className="text-[#475569] max-w-[480px] mx-auto text-base leading-relaxed">기존 보안 앱과 다릅니다. 개인정보를 지키면서 더 정확하게 탐지합니다.</p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-sm p-8 hover:bg-[#F8FAFF] hover:border-[#CBD5E1] hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border"
                    style={{ background: `${f.color}15`, borderColor: `${f.color}30`, color: f.color }}>
                    {f.icon}
                  </div>
                  <h3 className="font-bold mb-3 text-sm">{f.title}</h3>
                  <p className="text-[#475569] text-xs leading-relaxed">{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

      {/* ─── How it works ─── */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-8">
          <FadeUp className="text-center mb-14">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[rgba(0,212,170,0.1)] border border-[rgba(0,212,170,0.2)] text-[#00D4AA] text-[0.7rem] font-bold tracking-widest uppercase mb-5">How It Works</div>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-black tracking-[-0.025em] mb-4">어떻게 작동하나요?</h2>
          </FadeUp>
          <div className="relative">
            <div className="absolute left-[31px] top-10 bottom-10 w-px bg-gradient-to-b from-[#00D4AA] via-[#0088FF] to-transparent hidden md:block" />
            <div className="flex flex-col gap-8">
              {howItWorks.map((step, i) => (
                <FadeUp key={step.step} delay={i * 0.1}>
                  <div className="flex gap-6 items-start">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-base font-black shrink-0 relative z-10"
                      style={{ background: "rgba(0,212,170,0.12)", border: "1px solid rgba(0,212,170,0.3)", color: "#00D4AA" }}>
                      {step.step}
                    </div>
                    <div className="pt-3 flex-1">
                      <h3 className="font-bold mb-2">{step.title}</h3>
                      <p className="text-[#475569] text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

      {/* ─── Ratings ─── */}
      <section className="py-20">
        <div className="max-w-[800px] mx-auto px-8">
          <FadeUp className="text-center mb-10">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[rgba(0,212,170,0.1)] border border-[rgba(0,212,170,0.2)] text-[#00D4AA] text-[0.7rem] font-bold tracking-widest uppercase mb-4">Reviews</div>
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-black tracking-[-0.025em] mb-2">사용자 리뷰</h2>
          </FadeUp>
          <FadeUp>
            <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-sm p-10 text-center">
              <div className="text-6xl font-black grad-text-security mb-2">5.0</div>
              <div className="text-[#FBBF24] text-xl mb-2">★★★★★</div>
              <div className="text-[#64748B] text-sm mb-8">초기 출시 · 리뷰 수집 중</div>
              <div className="max-w-[280px] mx-auto space-y-2">
                {[{stars:5,pct:100},{stars:4,pct:0},{stars:3,pct:0},{stars:2,pct:0},{stars:1,pct:0}].map(r=>(
                  <div key={r.stars} className="flex items-center gap-2">
                    <span className="text-xs text-[#64748B] w-2">{r.stars}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-[#E2E8F0] overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#00D4AA] to-[#0088FF]" style={{width:`${r.pct}%`}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

      {/* ─── Privacy commitment ─── */}
      <section className="py-20">
        <div className="max-w-[900px] mx-auto px-8">
          <FadeUp>
            <div className="rounded-2xl bg-[rgba(0,212,170,0.05)] border border-[rgba(0,212,170,0.15)] p-10 md:p-12">
              <div className="flex items-start gap-6 flex-wrap">
                <div className="w-14 h-14 rounded-xl bg-[rgba(0,212,170,0.12)] border border-[rgba(0,212,170,0.25)] flex items-center justify-center text-[#00D4AA] shrink-0">
                  <Lock size={22} />
                </div>
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-black text-xl mb-4">개인정보 보호 약속</h3>
                  <div className="space-y-3">
                    {[
                      "문자 원문은 서버에 절대 저장되지 않습니다",
                      "분석은 내 기기 안에서만 이루어집니다",
                      "저장되는 건 해시값(암호화된 패턴)뿐입니다",
                      "재난안전문자는 탐지 대상에서 완전 제외됩니다",
                    ].map(item => (
                      <div key={item} className="flex items-center gap-3 text-sm text-[#475569]">
                        <CheckCircle2 size={15} className="text-[#00D4AA] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link href="/security/privacy" className="inline-flex items-center gap-1.5 mt-6 text-sm text-[#0D9488] hover:text-[#0F172A] transition-colors font-semibold">
                    개인정보처리방침 전체 보기 <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── Download CTA ─── */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl bg-[#0C0C1A] border border-[rgba(0,212,170,0.2)] p-16 md:p-24 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[rgba(0,212,170,0.5)] to-transparent" />
              <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse 50% 60% at 50% 0%,rgba(0,212,170,0.08) 0%,transparent 70%)"}} />
              <div className="relative z-10">
                <div className="flex justify-center gap-3 mb-6">
                  <span className="text-3xl">🇰🇷</span>
                  <span className="text-3xl">🇺🇸</span>
                  <span className="text-3xl">🇹🇼</span>
                </div>
                <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#00D4AA] mb-5">무료로 시작하세요</div>
                <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-black tracking-[-0.025em] leading-tight mb-5">
                  스미싱으로부터 내 가족을<br />
                  <span className="grad-text-security">AI가 지킵니다</span>
                </h2>
                <p className="text-[#9090B8] max-w-[420px] mx-auto text-base leading-relaxed mb-12">
                  지금 바로 무료로 다운로드하세요. 기본 탐지는 영구 무료입니다.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a href="#" className="hover:-translate-y-1 transition-transform duration-200 drop-shadow-[0_0_20px_rgba(0,212,170,0.4)] hover:drop-shadow-[0_0_32px_rgba(0,212,170,0.6)]">
                    <Image src="/ko_googleplay.svg" alt="Get it on Google Play" width={216} height={84} className="h-[64px] w-auto" />
                  </a>
                  <div className="opacity-30 cursor-not-allowed" title="App Store — 준비중">
                    <Image src="/badge-app-store.svg" alt="Download on the App Store" width={216} height={84} className="h-[64px] w-auto" />
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-5 mt-7 text-xs text-[#5A5A7A]">
                  <Link href="/security/privacy" className="hover:text-[#9090B8] transition-colors">개인정보처리방침</Link>
                  <Link href="/security/terms" className="hover:text-[#9090B8] transition-colors">이용약관</Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
