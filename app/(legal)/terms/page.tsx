"use client"

import { useState } from "react"
import { Shield } from "lucide-react"

type Lang = "ko" | "en" | "zh-TW"
const LANGS: { id: Lang; label: string }[] = [
  { id: "ko", label: "한국어" },
  { id: "en", label: "English" },
  { id: "zh-TW", label: "繁體中文" },
]

export default function AppTermsPage() {
  const [lang, setLang] = useState<Lang>("ko")

  const titles: Record<Lang, string> = {
    ko: "이용약관",
    en: "Terms of Service",
    "zh-TW": "服務條款",
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 앱용 헤더 */}
      <div className="sticky top-0 z-10 bg-white border-b border-[#E2E8F0] px-4 py-3">
        <div className="flex items-center gap-3 max-w-[800px] mx-auto">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4AA] to-[#0088FF] flex items-center justify-center shrink-0">
            <Shield size={16} className="text-white" />
          </div>
          <div>
            <p className="text-[10px] text-[#94A3B8] leading-none">ScamLens AI</p>
            <h1 className="text-base font-black text-[#0F172A] leading-tight">{titles[lang]}</h1>
          </div>
        </div>
        {/* 언어 탭 */}
        <div className="flex gap-2 mt-3 max-w-[800px] mx-auto">
          {LANGS.map((l) => (
            <button
              key={l.id}
              onClick={() => setLang(l.id)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                lang === l.id
                  ? "bg-[#00D4AA] text-[#0A0A1A]"
                  : "bg-[#F0F4FF] text-[#64748B]"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* 본문 */}
      <div className="max-w-[800px] mx-auto px-4 py-8">
        {lang === "ko" && <TermsKO />}
        {lang === "en" && <TermsEN />}
        {lang === "zh-TW" && <TermsTW />}
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-base font-bold text-[#0F172A] mb-3 pb-2 border-b border-[#E2E8F0]">{title}</h2>
      <div className="space-y-3 text-[#64748B] text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  )
}

function ContactBox({ items }: { items: [string, string][] }) {
  return (
    <div className="bg-[#F8FAFF] border border-[#E2E8F0] rounded-xl p-4 space-y-1.5 text-sm text-[#475569]">
      {items.map(([label, value]) => (
        <p key={label}><strong className="text-[#0F172A]">{label}:</strong> {value}</p>
      ))}
    </div>
  )
}

function DocFooter({ date, label }: { date: string; label: string }) {
  return (
    <div className="mt-10 pt-6 border-t border-[#E2E8F0] text-xs text-[#94A3B8]">
      <p>{date}</p>
      <p className="mt-1">{label}</p>
    </div>
  )
}

function TermsKO() {
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-4 mb-8 text-sm text-[#64748B] leading-relaxed">
        본 약관은 Vibe A(이하 &ldquo;회사&rdquo;)가 제공하는 ScamLens AI 서비스의 이용 조건을 규정합니다.
        서비스를 설치하거나 이용함으로써 본 약관에 동의한 것으로 간주합니다.
      </div>
      <Section title="제1조 (목적)">
        <p>본 약관은 회사가 제공하는 AI 기반 스미싱·피싱 탐지 서비스 ScamLens AI의 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.</p>
      </Section>
      <Section title="제2조 (정의)">
        <ul>
          <li><strong className="text-[#0F172A]">&ldquo;서비스&rdquo;</strong>란 ScamLens AI 모바일 애플리케이션 및 관련 기능 일체를 의미합니다.</li>
          <li><strong className="text-[#0F172A]">&ldquo;이용자&rdquo;</strong>란 본 약관에 동의하고 서비스를 이용하는 자를 말합니다.</li>
          <li><strong className="text-[#0F172A]">&ldquo;유료 서비스&rdquo;</strong>란 구독 결제를 통해 제공되는 AI 심층 분석 등 프리미엄 기능을 말합니다.</li>
        </ul>
      </Section>
      <Section title="제3조 (약관의 효력 및 변경)">
        <ul>
          <li>본 약관은 서비스 화면 게시 또는 앱 내 공지를 통해 효력이 발생합니다.</li>
          <li>회사는 약관을 변경할 수 있으며, 변경 약관은 적용일 <strong className="text-[#0F172A]">7일 전</strong>부터 공지합니다. 이용자에게 불리한 변경은 <strong className="text-[#0F172A]">30일 전</strong> 공지합니다.</li>
        </ul>
      </Section>
      <Section title="제4조 (서비스의 제공)">
        <ul>
          <li><strong className="text-[#0F172A]">무료 서비스:</strong> 온디바이스 AI 스미싱·피싱 탐지, 위험도 알림, 기본 통계, 앱 안전성 검사</li>
          <li><strong className="text-[#0F172A]">유료 서비스 (월 구독):</strong> AI 심층 분석, 상세 탐지 보고서, URL 안전성 검사</li>
        </ul>
        <p>서비스는 연중무휴 24시간 제공을 원칙으로 하되, 시스템 점검·불가항력적 사유로 일시 중단될 수 있습니다.</p>
      </Section>
      <Section title="제5조 (유료 서비스 및 환불)">
        <ul>
          <li>유료 서비스는 Google Play 스토어를 통한 인앱 결제로 이루어집니다.</li>
          <li><strong className="text-[#0F172A]">자동 갱신:</strong> 구독은 자동으로 갱신되며, 갱신일 <strong className="text-[#0F172A]">24시간 전</strong>까지 취소하지 않으면 동일 금액으로 자동 결제됩니다.</li>
          <li>구독 해지 및 자동 갱신 취소는 Google Play 스토어 설정에서 가능하며, 해지 시 현재 구독 기간 만료까지 서비스가 유지됩니다.</li>
          <li>디지털 콘텐츠의 특성상 이미 제공된 서비스는 청약 철회가 제한될 수 있습니다.</li>
          <li>서비스 오류로 이용이 불가한 경우, 해당 기간 이용료를 환불하거나 구독 기간을 연장합니다.</li>
        </ul>
      </Section>
      <Section title="제6조 (이용자의 의무)">
        <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
        <ul>
          <li>서비스의 역공학, 디컴파일, 디스어셈블 등 역분석 행위</li>
          <li>타인의 개인정보 수집 또는 불법 행위에 이용하는 행위</li>
          <li>서버 또는 네트워크에 과부하를 유발하는 행위</li>
          <li>허위 신고, 도배 신고 등 서비스 품질을 의도적으로 저하시키는 행위</li>
          <li>회사의 명시적 동의 없이 서비스를 상업적으로 이용하는 행위</li>
        </ul>
      </Section>
      <Section title="제7조 (서비스 한계 및 면책)">
        <div className="bg-[rgba(255,179,71,0.06)] border border-[rgba(255,179,71,0.2)] rounded-xl p-4 mb-4">
          <p className="text-[#FFB347] font-semibold text-xs mb-1">중요 고지</p>
          <p>ScamLens AI는 스미싱·피싱 탐지를 지원하는 <strong className="text-[#FFB347]">보조 도구</strong>입니다. AI 탐지 결과가 100% 정확하지 않을 수 있으며, 최종 판단은 이용자 본인이 하셔야 합니다.</p>
        </div>
        <ul>
          <li>회사는 서비스가 탐지하지 못한 스미싱으로 인한 피해에 대해 법률이 허용하는 범위 내에서 책임을 제한합니다.</li>
          <li>불가항력적 사유로 인한 서비스 중단에 대해 책임지지 않습니다.</li>
        </ul>
      </Section>
      <Section title="제8조 (준거법 및 분쟁 해결)">
        <ul>
          <li>본 약관은 <strong className="text-[#0F172A]">대한민국 법률</strong>에 따라 해석됩니다.</li>
          <li>분쟁 발생 시 협의로 우선 해결을 시도하며, 협의 불성립 시 <strong className="text-[#0F172A]">서울중앙지방법원</strong>을 제1심 법원으로 합니다.</li>
        </ul>
      </Section>
      <Section title="제9조 (문의)">
        <ContactBox items={[
          ["고객문의", "vibe.factory904@gmail.com"],
          ["회사명", "Vibe A Corp."],
        ]} />
      </Section>
      <DocFooter date="시행일: 2026년 6월 7일" label="Vibe A Corp. · ScamLens AI · 이용약관" />
    </>
  )
}

function TermsEN() {
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-4 mb-8 text-sm text-[#64748B] leading-relaxed">
        These Terms of Service govern your use of ScamLens AI, operated by Vibe A Corp. By installing or using the Service, you agree to these Terms.
      </div>
      <Section title="1. Service Description">
        <ul>
          <li><strong className="text-[#0F172A]">Free Plan:</strong> On-device AI detection, risk alerts, basic statistics, app safety scan.</li>
          <li><strong className="text-[#0F172A]">Paid Plan:</strong> AI deep analysis, detailed threat reports, URL safety scanning.</li>
        </ul>
        <div className="bg-[rgba(255,179,71,0.06)] border border-[rgba(255,179,71,0.2)] rounded-xl p-4 mt-3">
          <p className="text-[#FFB347] font-semibold text-xs mb-1">DISCLAIMER</p>
          <p>ScamLens AI is a <strong className="text-[#FFB347]">supplementary tool</strong>. AI detection is not 100% accurate. We are not liable for losses from messages the Service fails to detect.</p>
        </div>
      </Section>
      <Section title="2. Subscriptions & Refunds">
        <ul>
          <li>Paid subscriptions are processed through the Google Play Store.</li>
          <li>Subscriptions auto-renew unless canceled 24 hours before the renewal date.</li>
          <li>Refunds are subject to Google Play&apos;s refund policy. Contact us for service-error credits.</li>
        </ul>
      </Section>
      <Section title="3. User Conduct">
        <p>You agree not to reverse engineer, misuse, or commercially exploit the Service without written consent.</p>
      </Section>
      <Section title="4. Limitation of Liability">
        <p>To the maximum extent permitted by law, Vibe A Corp. is not liable for indirect, incidental, or consequential damages arising from your use of the Service.</p>
      </Section>
      <Section title="5. Contact">
        <ContactBox items={[
          ["Support", "vibe.factory904@gmail.com"],
          ["Company", "Vibe A Corp."],
        ]} />
      </Section>
      <DocFooter date="Effective: June 7, 2026" label="Vibe A Corp. · ScamLens AI · Terms of Service" />
    </>
  )
}

function TermsTW() {
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-4 mb-8 text-sm text-[#64748B] leading-relaxed">
        本服務條款規範您使用由 Vibe A Corp. 所提供之 ScamLens AI 服務之條件。安裝或使用本服務，即表示您同意本條款。
      </div>
      <Section title="第一條（服務內容）">
        <ul>
          <li><strong className="text-[#0F172A]">免費服務：</strong>裝置端 AI 簡訊詐騙偵測、風險通知、基本統計、應用程式安全掃描</li>
          <li><strong className="text-[#0F172A]">付費服務：</strong>AI 深度分析、詳細偵測報告、網址安全性檢查</li>
        </ul>
        <div className="bg-[rgba(255,179,71,0.06)] border border-[rgba(255,179,71,0.2)] rounded-xl p-4 mt-3">
          <p className="text-[#FFB347] font-semibold text-xs mb-1">重要聲明</p>
          <p>ScamLens AI 為詐騙訊息偵測之<strong className="text-[#FFB347]">輔助工具</strong>，AI 偵測結果並非百分之百準確，最終判斷應由使用者自行決定。</p>
        </div>
      </Section>
      <Section title="第二條（付費服務及退款）">
        <ul>
          <li>付費服務透過 Google Play 商店之應用程式內購進行。</li>
          <li>訂閱將自動續訂，如欲取消，請於當期結束前至少24小時於 Google Play 設定辦理。</li>
          <li>退款事宜依 Google Play 退款政策辦理。</li>
        </ul>
      </Section>
      <Section title="第三條（聯絡我們）">
        <ContactBox items={[
          ["客服信箱", "vibe.factory904@gmail.com"],
          ["公司名稱", "Vibe A Corp."],
        ]} />
      </Section>
      <DocFooter date="生效日期：2026年6月7日" label="Vibe A Corp. · ScamLens AI · 服務條款" />
    </>
  )
}
