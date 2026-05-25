"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

function FadeUp({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}>
      {children}
    </motion.div>
  )
}

// 팀 — /public/team/ 에 사진 드롭하면 즉시 활성화
// photo: null 이면 이니셜 폴백 표시
const teamMembers = [
  {
    name: "Jay Park",
    role: "Founder & CEO",
    domain: "Vibe A",
    desc: "전 세계인의 삶을 더 안전하고 풍요롭게 만드는 것이 목표인 창업자. AI 기술로 기존에는 없던 서비스를 현실로 만든다.",
    accent: true,
    bg: "rgba(37,99,235,0.12)",
    border: "rgba(37,99,235,0.3)",
    photo: "/team/jay-park.jpg",
    initial: "J",
  },
  {
    name: "TBA",
    role: "CTO",
    domain: "기술 총괄",
    desc: "AI 파이프라인 아키텍처부터 온디바이스 모델 최적화까지. 기술로 가능성을 현실로 만든다.",
    accent: false,
    bg: "rgba(241,245,249,1)",
    border: "rgba(226,232,240,1)",
    photo: "/team/cto.jpg",
    initial: "C",
  },
  {
    name: "TBA",
    role: "COO",
    domain: "운영 총괄",
    desc: "글로벌 서비스 운영, 파트너십, 비즈니스 개발을 총괄. 빠른 실행과 지속 가능한 성장을 이끈다.",
    accent: false,
    bg: "rgba(241,245,249,1)",
    border: "rgba(226,232,240,1)",
    photo: "/team/coo.jpg",
    initial: "C",
  },
  {
    name: "TBA",
    role: "Security Lead",
    domain: "Security",
    desc: "스미싱·피싱 탐지 AI 파이프라인 설계와 글로벌 위협 데이터베이스를 담당. ScamLens AI 프로덕트 오너.",
    accent: false,
    bg: "rgba(0,212,170,0.15)",
    border: "rgba(0,212,170,0.25)",
    domainColor: "#00D4AA",
    photo: "/team/security-lead.jpg",
    initial: "S",
  },
  {
    name: "TBA",
    role: "Entertainment Lead",
    domain: "Entertainment",
    desc: "오늘뉴스퀴즈 등 엔터테인먼트 카테고리 기획 및 프로덕트를 담당.",
    accent: false,
    bg: "rgba(255,123,123,0.12)",
    border: "rgba(255,123,123,0.2)",
    domainColor: "#FF7B7B",
    photo: "/team/ent-lead.jpg",
    initial: "E",
  },
  {
    name: "TBA",
    role: "On-Demand Lead",
    domain: "On-Demand",
    desc: "온디맨드 카테고리 Project A 기획 및 개발을 담당. 새로운 형태의 온디맨드 경험을 만들어간다.",
    accent: false,
    bg: "rgba(255,179,71,0.12)",
    border: "rgba(255,179,71,0.2)",
    domainColor: "#FFB347",
    photo: "/team/ondemand-lead.jpg",
    initial: "O",
  },
  {
    name: "TBA",
    role: "Game Lead",
    domain: "Game",
    desc: "게임 카테고리 Project B 기획 및 개발 담당. AI와 게임의 접점에서 새로운 경험을 탐구한다.",
    accent: false,
    bg: "rgba(116,192,252,0.12)",
    border: "rgba(116,192,252,0.2)",
    domainColor: "#74C0FC",
    photo: "/team/game-lead.jpg",
    initial: "G",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse 70% 50% at 50% -10%,rgba(37,99,235,0.10) 0%,transparent 60%)"}}>
        </div>
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_50%_30%,black_10%,transparent_70%)]" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 text-center">
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
            className="inline-block px-3.5 py-1 rounded-full bg-[rgba(79,70,229,0.08)] border border-[rgba(79,70,229,0.2)] text-[#4F46E5] text-[0.7rem] font-bold tracking-widest uppercase mb-6">
            About Us
          </motion.div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}}
            className="text-[clamp(3rem,7vw,5.5rem)] font-black tracking-[-0.035em] leading-[1.07] mb-7">
            우리가 꿈꾸는<br /><span className="grad-text">세상</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}}
            className="text-[#475569] max-w-[560px] mx-auto text-base md:text-lg leading-relaxed">
            혁신적인 AI 기술로 보안, 엔터테인먼트, 온디맨드, 게임 분야에서
            기존에는 없던 경험을 만들어가는 글로벌 테크 기업 Vibe A를 소개합니다.
          </motion.p>
        </div>
      </section>

      {/* ─── Story ─── */}
      <section className="py-24">
        <div className="max-w-[840px] mx-auto px-8">
          <FadeUp>
            <div className="inline-block px-3.5 py-1 rounded-full bg-[rgba(79,70,229,0.08)] border border-[rgba(79,70,229,0.2)] text-[#4F46E5] text-[0.7rem] font-bold tracking-widest uppercase mb-8">Our Story</div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-black tracking-[-0.025em] leading-tight mb-8">
              &ldquo;왜 이게 없었지?&rdquo;<br />그 질문에서 시작했습니다
            </h2>
            <div className="space-y-6 text-[#475569] leading-relaxed text-base">
              <p>2023년, Vibe A는 하나의 질문에서 시작됐습니다. AI 기술이 이렇게 발전했는데, 왜 우리 부모님은 여전히 스미싱 문자를 구분하지 못할까? 왜 가장 취약한 사람들이 가장 복잡한 보안 지식을 요구받을까?</p>
              <p>해답은 AI에 있었습니다. 우리는 최신 온디바이스 AI 기술을 활용해 개인정보를 서버에 보내지 않으면서도, 글로벌 집단지성으로 최신 사기 패턴을 실시간으로 탐지하는 보안 서비스를 구축했습니다.</p>
              <p>첫 번째 서비스 <strong className="text-[#2563EB]">ScamLens AI</strong>는 그 결과입니다. 한국, 미국, 대만 3개국에서 동시에 출시하는 진정한 글로벌 보안 앱으로, AI 기술의 혜택이 언어와 국경을 넘어 모든 사람에게 닿을 수 있음을 증명합니다.</p>
              <p>우리는 여기서 멈추지 않습니다. 보안 다음은 엔터테인먼트, 온디맨드, 게임으로 확장합니다. 각 카테고리에서 &ldquo;왜 이게 없었지?&rdquo;라는 질문에 답하는 서비스를 만들어갑니다.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

      {/* ─── Mission / Vision / Values ─── */}
      <section id="mission" className="py-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Mission",
                title: "전 세계인의 삶을\n더 안전하고 즐겁게",
                desc: "AI 기술의 혜택이 일부 사람에게만 닿는 것이 아니라, 전 세계 모든 사람에게 닿을 수 있도록 서비스를 만듭니다.",
                color: "#5B6EF5",
              },
              {
                label: "Vision",
                title: "AI로 가능한\n세상의 새 기준",
                desc: "최신 AI 기술을 통해 기존에는 불가능했던 서비스들을 현실로 만들고, 각 카테고리에서 업계 표준을 새로 정의합니다.",
                color: "#9060F0",
              },
              {
                label: "Values",
                title: "기술보다\n사람이 먼저",
                desc: "아무리 뛰어난 기술도 사람의 삶을 실질적으로 개선하지 못하면 의미 없습니다. 우리의 모든 결정은 사람을 먼저 생각합니다.",
                color: "#00D4AA",
              },
            ].map((item, i) => (
              <FadeUp key={item.label} delay={i * 0.1}>
                <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-sm p-10 h-full">
                  <div className="text-[0.7rem] font-bold tracking-widest uppercase mb-5" style={{ color: item.color }}>
                    {item.label}
                  </div>
                  <h3 className="text-xl font-black leading-tight mb-5 whitespace-pre-line">{item.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

      {/* ─── History ─── */}
      <section id="history" className="py-28">
        <div className="max-w-[840px] mx-auto px-8">
          <FadeUp className="mb-14">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[rgba(79,70,229,0.08)] border border-[rgba(79,70,229,0.2)] text-[#4F46E5] text-[0.7rem] font-bold tracking-widest uppercase mb-6">History</div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-black tracking-[-0.025em]">Vibe A 연혁</h2>
          </FadeUp>
          <div className="relative">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[#4F46E5] via-[#6D28D9] to-transparent" />
            <div className="flex flex-col gap-10 pl-12">
              {[
                {year:"2023",events:["Vibe A 설립","보안 AI 서비스 기획 시작"]},
                {year:"2024",events:["ScamLens AI 개발 착수","한·미·대만 3개국 시장 조사 완료","온디바이스 AI 파이프라인 구축"]},
                {year:"2025",events:["Trust-First 아키텍처 도입","글로벌 위협 데이터베이스 구축","Gemini AI 심층 분석 통합"]},
                {year:"2026",events:["ScamLens AI 한국·미국·대만 동시 출시","엔터테인먼트·온디맨드·게임 카테고리 확장 시작"]},
              ].map((h,i)=>(
                <FadeUp key={h.year} delay={i*0.08}>
                  <div className="relative">
                    <div className="absolute -left-[2.85rem] top-1 w-3.5 h-3.5 rounded-full bg-[#4F46E5] border-2 border-white" />
                    <div className="text-[#4F46E5] text-xs font-bold tracking-widest uppercase mb-2">{h.year}</div>
                    <ul className="space-y-1.5">
                      {h.events.map(e=>(
                        <li key={e} className="text-[#475569] text-sm flex items-start gap-2">
                          <span className="text-[#5B6EF5] mt-1.5 shrink-0">·</span>{e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

      {/* ─── Team ─── */}
      <section id="team" className="py-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <FadeUp className="text-center mb-18">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[rgba(79,70,229,0.08)] border border-[rgba(79,70,229,0.2)] text-[#4F46E5] text-[0.7rem] font-bold tracking-widest uppercase mb-6">Team</div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-[-0.03em] leading-tight mb-5">각 분야를 이끄는<br />전문가들</h2>
            <p className="text-[#475569] max-w-[500px] mx-auto text-base leading-relaxed">보안, 기술, 운영, 엔터테인먼트, 게임 — 각 카테고리 전문가들이 하나의 미션 아래 모여 있습니다.</p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {teamMembers.map((m, i) => (
              <FadeUp key={m.role} delay={i * 0.07}>
                <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-sm p-7 hover:bg-[#F8FAFF] hover:border-[#CBD5E1] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* 팀 사진 — photo 경로에 파일 드롭 시 즉시 활성화, 없으면 이니셜 */}
                  <div className="w-20 h-20 rounded-full mb-6 border-2 overflow-hidden"
                    style={{ borderColor: m.border }}>
                    <Image
                      src={m.photo ?? ""}
                      alt={m.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none" }}
                    />
                    {/* 이니셜 폴백 (사진 없을 때) */}
                    <div className="w-full h-full flex items-center justify-center text-xl font-black text-[#94A3B8]"
                      style={{ background: m.bg, marginTop: "-80px" }}>
                      {m.initial}
                    </div>
                  </div>
                  <div className="font-bold text-base mb-1">{m.name}</div>
                  <div className="text-[#475569] text-xs mb-1.5">{m.role}</div>
                  <div className={`text-[0.7rem] font-semibold mb-4 ${m.accent ? "grad-text" : ""}`}
                    style={!m.accent && m.domainColor ? { color: m.domainColor } : !m.accent ? { color: "#94A3B8" } : {}}>
                    {m.domain}
                  </div>
                  <p className="text-[#475569] text-xs leading-relaxed flex-1">{m.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center mt-12">
            <p className="text-[#94A3B8] text-sm">팀원 이름 및 추가 정보는 순차적으로 공개됩니다.</p>
          </FadeUp>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

      {/* ─── CTA ─── */}
      <section className="py-28">
        <div className="max-w-[840px] mx-auto px-8 text-center">
          <FadeUp>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-black tracking-[-0.025em] mb-5">ScamLens AI로<br /><span className="grad-text-security">보안을 경험하세요</span></h2>
            <p className="text-[#475569] mb-10 leading-relaxed">Vibe A의 첫 번째 서비스. 지금 무료로 시작할 수 있습니다.</p>
            <Link href="/security" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] shadow-[0_0_32px_rgba(37,99,235,0.25)] hover:shadow-[0_0_48px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 transition-all duration-200">
              ScamLens AI 보기 <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
