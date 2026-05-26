"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronLeft, Shield } from "lucide-react"

type Lang = "ko" | "en" | "zh-TW"

const LANGS: { id: Lang; label: string }[] = [
  { id: "ko", label: "한국어" },
  { id: "en", label: "English" },
  { id: "zh-TW", label: "繁體中文" },
]

export default function TermsPage() {
  const [lang, setLang] = useState<Lang>("ko")

  const titles: Record<Lang, string> = {
    ko: "이용약관",
    en: "Terms of Service",
    "zh-TW": "服務條款",
  }
  const dates: Record<Lang, string> = {
    ko: "시행일: 2026년 5월 1일",
    en: "Effective: May 1, 2026",
    "zh-TW": "生效日期：2026年5月1日",
  }

  return (
    <div className="pt-24 pb-20">
      <div className="border-b border-[#E2E8F0] pb-12">
        <div className="max-w-[800px] mx-auto px-6">
          <Link href="/security" className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#2563EB] transition-colors mb-8">
            <ChevronLeft size={16} /> ScamLens AI
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4AA] to-[#0088FF] flex items-center justify-center">
              <Shield size={18} className="text-white" />
            </div>
            <div>
              <div className="text-xs text-[#64748B]">ScamLens AI</div>
              <h1 className="text-2xl font-black tracking-tight text-[#0F172A]">{titles[lang]}</h1>
            </div>
          </div>
          <p className="text-[#64748B] text-sm mb-6">{dates[lang]} &nbsp;·&nbsp; Vibe A</p>

          {/* Language Tabs */}
          <div className="flex gap-2">
            {LANGS.map((l) => (
              <button
                key={l.id}
                onClick={() => setLang(l.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  lang === l.id
                    ? "bg-[#00D4AA] text-[#0A0A1A]"
                    : "bg-[#F0F4FF] text-[#64748B] hover:bg-[#E8EEFF]"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-12">
        {lang === "ko" && <TermsKO />}
        {lang === "en" && <TermsEN />}
        {lang === "zh-TW" && <TermsTW />}
      </div>
    </div>
  )
}

/* ─────────────── 한국어 ─────────────── */
function TermsKO() {
  const updated = "2026년 5월 1일"
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-5 mb-10 text-sm text-[#64748B] leading-relaxed">
        본 약관은 Vibe A(이하 &ldquo;회사&rdquo;)가 제공하는 ScamLens AI 서비스(이하 &ldquo;서비스&rdquo;)의 이용 조건을 규정합니다.
        서비스를 설치하거나 이용함으로써 본 약관에 동의한 것으로 간주합니다.
        본 약관은 <strong className="text-[#0F172A]">약관의 규제에 관한 법률</strong>, <strong className="text-[#0F172A]">정보통신망 이용촉진 및 정보보호 등에 관한 법률</strong>,
        <strong className="text-[#0F172A]"> 전자상거래 등에서의 소비자보호에 관한 법률</strong>에 따라 작성되었습니다.
      </div>

      <Section title="제1조 (목적)">
        <p>본 약관은 회사가 제공하는 AI 기반 스미싱·피싱 탐지 서비스 ScamLens AI의 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.</p>
      </Section>

      <Section title="제2조 (정의)">
        <ul>
          <li><strong className="text-[#0F172A]">&ldquo;서비스&rdquo;</strong>란 회사가 제공하는 ScamLens AI 모바일 애플리케이션 및 관련 기능 일체를 의미합니다.</li>
          <li><strong className="text-[#0F172A]">&ldquo;이용자&rdquo;</strong>란 본 약관에 동의하고 서비스를 이용하는 자를 말합니다.</li>
          <li><strong className="text-[#0F172A]">&ldquo;유료 서비스&rdquo;</strong>란 구독 결제를 통해 제공되는 Gemini AI 심층 분석 등 프리미엄 기능을 말합니다.</li>
          <li><strong className="text-[#0F172A]">&ldquo;온디바이스 AI&rdquo;</strong>란 이용자의 기기에서 직접 실행되는 인공지능 분석 기능을 말합니다.</li>
        </ul>
      </Section>

      <Section title="제3조 (약관의 효력 및 변경)">
        <ul>
          <li>본 약관은 서비스 화면 게시 또는 앱 내 공지를 통해 효력이 발생합니다.</li>
          <li>회사는 합리적 사유가 있을 경우 약관을 변경할 수 있으며, 변경 약관은 적용일 <strong className="text-[#0F172A]">7일 전</strong>부터 공지합니다. 다만, 이용자에게 불리한 변경은 <strong className="text-[#0F172A]">30일 전</strong>에 공지합니다.</li>
          <li>이용자가 변경 약관에 동의하지 않을 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다.</li>
        </ul>
      </Section>

      <Section title="제4조 (서비스의 제공)">
        <ul>
          <li><strong className="text-[#0F172A]">무료 서비스:</strong> 온디바이스 AI 기반 스미싱·피싱 탐지, 위험도 알림, 기본 통계, 앱 안전성 검사</li>
          <li><strong className="text-[#0F172A]">유료 서비스 (월 구독):</strong> Gemini AI 심층 분석, 상세 탐지 보고서, URL 안전성 검사</li>
        </ul>
        <p>서비스는 연중무휴 24시간 제공을 원칙으로 하되, 시스템 점검·불가항력적 사유로 일시 중단될 수 있습니다.</p>
      </Section>

      <Section title="제5조 (유료 서비스 및 환불)">
        <ul>
          <li>유료 서비스는 Google Play 스토어를 통한 인앱 결제로 이루어집니다.</li>
          <li>전자상거래소비자보호법 제17조에 따라, 디지털 콘텐츠의 특성상 이미 제공된 서비스는 청약 철회가 제한될 수 있습니다.</li>
          <li>서비스 이용이 불가능한 오류 발생 시, 이용 불가 기간에 해당하는 이용료를 환불하거나 구독 기간을 연장합니다.</li>
          <li>구독 해지는 Google Play 스토어 설정에서 가능하며, 해지 시 현재 구독 기간 만료까지 서비스가 유지됩니다.</li>
          <li>Google Play 결제 관련 환불은 <a href="https://support.google.com/googleplay/answer/2479637" className="text-[#00D4AA] hover:underline" target="_blank" rel="noopener noreferrer">Google Play 환불 정책</a>을 따릅니다.</li>
        </ul>
      </Section>

      <Section title="제6조 (이용자의 의무)">
        <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
        <ul>
          <li>서비스의 역공학, 디컴파일, 디스어셈블 등 역분석 행위</li>
          <li>서비스를 이용하여 타인의 개인정보를 수집하거나 불법 행위에 이용하는 행위</li>
          <li>회사 서버 또는 네트워크에 과부하를 유발하는 행위</li>
          <li>허위 신고, 도배 신고 등 서비스 품질을 의도적으로 저하시키는 행위</li>
          <li>회사의 명시적 동의 없이 서비스를 상업적으로 이용하는 행위</li>
        </ul>
      </Section>

      <Section title="제7조 (서비스 한계 및 면책)">
        <div className="bg-[rgba(255,179,71,0.06)] border border-[rgba(255,179,71,0.2)] rounded-xl p-5 mb-4">
          <p className="text-[#FFB347] font-semibold text-xs mb-2">중요: 서비스 한계에 관한 고지</p>
          <p>ScamLens AI는 스미싱·피싱 탐지를 지원하는 <strong className="text-[#FFB347]">보조 도구</strong>입니다. AI 탐지 결과가 100% 정확하지 않을 수 있으며, 최종 판단은 이용자 본인이 하셔야 합니다.</p>
        </div>
        <ul>
          <li>온디바이스 AI의 특성상 신종 사기 수법을 즉시 탐지하지 못할 수 있습니다.</li>
          <li>회사는 서비스가 탐지하지 못한 스미싱으로 인한 피해에 대해 법률이 허용하는 범위 내에서 책임을 제한합니다.</li>
          <li>불가항력적 사유(천재지변, 사이버 공격, 통신 장애 등)로 인한 서비스 중단에 대해 책임지지 않습니다.</li>
        </ul>
      </Section>

      <Section title="제8조 (지식재산권)">
        <ul>
          <li>서비스 및 서비스에 포함된 콘텐츠·소프트웨어에 관한 지식재산권은 회사에 귀속됩니다.</li>
          <li>이용자가 서비스 이용 중 생성된 탐지 패턴 데이터는 익명화된 형태로 서비스 품질 개선에 활용될 수 있습니다.</li>
        </ul>
      </Section>

      <Section title="제9조 (서비스 중단 및 종료)">
        <ul>
          <li>회사는 운영이 불가능한 경우 <strong className="text-[#0F172A]">30일 전</strong> 공지 후 서비스를 종료할 수 있습니다.</li>
          <li>서비스 종료 시 유료 이용자에게는 잔여 구독 기간에 해당하는 이용료를 환불합니다.</li>
        </ul>
      </Section>

      <Section title="제10조 (준거법 및 분쟁 해결)">
        <ul>
          <li>본 약관은 <strong className="text-[#0F172A]">대한민국 법률</strong>에 따라 해석됩니다.</li>
          <li>분쟁 발생 시 회사와 이용자는 상호 협의로 우선 해결을 시도합니다.</li>
          <li>협의 불성립 시 민사소송법에 따른 관할 법원(<strong className="text-[#0F172A]">서울중앙지방법원</strong>)을 제1심 법원으로 합니다.</li>
          <li>소비자 분쟁은 한국소비자원(www.kca.go.kr) 또는 공정거래위원회 분쟁조정 절차를 이용하실 수 있습니다.</li>
        </ul>
      </Section>

      <Section title="제11조 (문의)">
        <ContactBox items={[
          ["서비스 문의", "support@vibeacorp.com"],
          ["회사명", "Vibe A"],
          ["대표자", "Jay Park"],
        ]} />
      </Section>

      <Footer date={updated} label="Vibe A · ScamLens AI · 이용약관" />
    </>
  )
}

/* ─────────────── English (US / California) ─────────────── */
function TermsEN() {
  const updated = "May 1, 2026"
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-5 mb-10 text-sm text-[#64748B] leading-relaxed">
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of ScamLens AI, operated by Vibe A (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;).
        By installing or using the Service, you agree to these Terms. These Terms are governed by the laws of the
        <strong className="text-[#0F172A]"> State of California, United States</strong>, and comply with applicable federal and California consumer protection laws.
      </div>

      <Section title="1. About ScamLens AI">
        <p>ScamLens AI is an AI-powered mobile application that detects spam, smishing, and phishing text messages. It uses on-device AI processing, meaning your message content is analyzed locally on your device and is not uploaded to our servers in its original form.</p>
        <div className="bg-[rgba(255,179,71,0.06)] border border-[rgba(255,179,71,0.2)] rounded-xl p-4 mt-4">
          <p className="text-[#FFB347] font-semibold text-xs mb-1">IMPORTANT DISCLAIMER</p>
          <p>ScamLens AI is a <strong className="text-[#FFB347]">supplementary tool</strong>, not a guarantee of protection. AI detection is not 100% accurate. You should always exercise your own judgment. We are not responsible for losses arising from messages the Service fails to detect.</p>
        </div>
      </Section>

      <Section title="2. Eligibility">
        <ul>
          <li>You must be at least <strong className="text-[#0F172A]">13 years of age</strong> to use the Service. We do not knowingly collect information from children under 13 (COPPA).</li>
          <li>If you are under 18, you represent that your parent or legal guardian has reviewed and agreed to these Terms.</li>
          <li>By using the Service, you represent that you have the legal capacity to enter into this agreement.</li>
        </ul>
      </Section>

      <Section title="3. Service Description & Plans">
        <ul>
          <li><strong className="text-[#0F172A]">Free Plan:</strong> On-device AI detection, risk alerts, basic statistics, app safety scan.</li>
          <li><strong className="text-[#0F172A]">Paid Plan (Monthly Subscription):</strong> Gemini AI deep analysis, detailed threat reports, URL safety scanning.</li>
        </ul>
        <p>We reserve the right to modify, suspend, or discontinue any aspect of the Service with reasonable notice.</p>
      </Section>

      <Section title="4. Subscriptions, Billing & Refunds">
        <ul>
          <li>Paid subscriptions are processed through the <strong className="text-[#0F172A]">Google Play Store</strong>. By subscribing, you authorize recurring charges at the applicable rate.</li>
          <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period.</li>
          <li>You may cancel your subscription at any time through the Google Play Store. Cancellation takes effect at the end of the current billing period; no partial refunds are issued for unused time.</li>
          <li>Refunds for in-app purchases are subject to <a href="https://support.google.com/googleplay/answer/2479637" className="text-[#00D4AA] hover:underline" target="_blank" rel="noopener noreferrer">Google Play&apos;s refund policy</a>. If you experience a service-preventing error, contact us at support@vibeacorp.com for a pro-rated credit.</li>
          <li><strong className="text-[#0F172A]">California Residents:</strong> Under the California Automatic Renewal Law (Business &amp; Professions Code § 17600 et seq.), we disclose that your subscription will automatically renew. You may cancel at any time as described above.</li>
        </ul>
      </Section>

      <Section title="5. User Conduct">
        <p>You agree not to:</p>
        <ul>
          <li>Reverse engineer, decompile, or disassemble the Service</li>
          <li>Use the Service to collect others&apos; personal information or for unlawful purposes</li>
          <li>Overload, disrupt, or impair our servers or networks</li>
          <li>Submit false reports or abuse the reporting system</li>
          <li>Use the Service for commercial purposes without our written consent</li>
          <li>Violate any applicable federal, state, or local law</li>
        </ul>
      </Section>

      <Section title="6. Intellectual Property">
        <ul>
          <li>The Service, including all software, content, and trademarks, is owned by Vibe A and protected by U.S. and international intellectual property laws.</li>
          <li>Anonymized, aggregated detection pattern data generated through your use of the Service may be used to improve our AI models.</li>
          <li>If you believe any content infringes your copyright, contact us at support@vibeacorp.com with a DMCA-compliant takedown notice.</li>
        </ul>
      </Section>

      <Section title="7. Disclaimer of Warranties">
        <div className="bg-[#F8FAFF] border border-[#E2E8F0] rounded-xl p-4 text-xs uppercase tracking-wide text-[#64748B]">
          THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY ACCURATE IN DETECTING ALL THREATS.
        </div>
      </Section>

      <Section title="8. Limitation of Liability">
        <div className="bg-[#F8FAFF] border border-[#E2E8F0] rounded-xl p-4 text-xs uppercase tracking-wide text-[#64748B]">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, VIBE A SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) $50 USD.
        </div>
        <p className="mt-3">Some states, including California, do not allow certain limitations of liability. In such states, our liability is limited to the fullest extent permitted by applicable law.</p>
      </Section>

      <Section title="9. Dispute Resolution & Arbitration">
        <ul>
          <li><strong className="text-[#0F172A]">Informal Resolution First:</strong> Before filing any claim, you agree to contact us at support@vibeacorp.com and give us 30 days to resolve the dispute informally.</li>
          <li><strong className="text-[#0F172A]">Binding Arbitration:</strong> If informal resolution fails, disputes shall be resolved by binding individual arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules, not in court.</li>
          <li><strong className="text-[#0F172A]">Class Action Waiver:</strong> You waive the right to participate in class action lawsuits or class-wide arbitration.</li>
          <li><strong className="text-[#0F172A]">Small Claims Exception:</strong> Either party may bring claims in small claims court for qualifying disputes.</li>
          <li><strong className="text-[#0F172A]">Governing Law:</strong> These Terms are governed by the laws of the State of California, without regard to conflict of law principles.</li>
          <li><strong className="text-[#0F172A]">California Residents:</strong> You may report complaints to the California Department of Consumer Affairs at 1-800-952-5210 or www.dca.ca.gov.</li>
        </ul>
      </Section>

      <Section title="10. Changes to These Terms">
        <p>We may update these Terms from time to time. We will notify you of material changes via in-app notice or email at least <strong className="text-[#0F172A]">30 days</strong> before the changes take effect. Continued use of the Service after the effective date constitutes acceptance of the updated Terms.</p>
      </Section>

      <Section title="11. Contact">
        <ContactBox items={[
          ["Support", "support@vibeacorp.com"],
          ["Company", "Vibe A"],
          ["Representative", "Jay Park"],
        ]} />
      </Section>

      <Footer date={updated} label="Vibe A · ScamLens AI · Terms of Service" />
    </>
  )
}

/* ─────────────── 繁體中文 (台灣) ─────────────── */
function TermsTW() {
  const updated = "2026年5月1日"
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-5 mb-10 text-sm text-[#64748B] leading-relaxed">
        本服務條款（以下稱「本條款」）規範您使用由 Vibe A（以下稱「本公司」）所提供之 ScamLens AI 服務（以下稱「本服務」）之條件。
        安裝或使用本服務，即表示您同意本條款。本條款依據<strong className="text-[#0F172A]">中華民國（台灣）消費者保護法</strong>、
        <strong className="text-[#0F172A]">電子商務消費者保護綱領</strong>及相關法律規定訂定。
      </div>

      <Section title="第一條（目的）">
        <p>本條款旨在規範本公司與使用者就 ScamLens AI 服務之使用所產生之權利義務及責任事項。</p>
      </Section>

      <Section title="第二條（定義）">
        <ul>
          <li><strong className="text-[#0F172A]">「本服務」</strong>係指本公司提供之 ScamLens AI 行動應用程式及相關功能之全部。</li>
          <li><strong className="text-[#0F172A]">「使用者」</strong>係指同意本條款並使用本服務之人。</li>
          <li><strong className="text-[#0F172A]">「付費服務」</strong>係指透過訂閱付款所提供之 Gemini AI 深度分析等進階功能。</li>
          <li><strong className="text-[#0F172A]">「裝置端 AI」</strong>係指直接在使用者裝置上執行之人工智慧分析功能。</li>
        </ul>
      </Section>

      <Section title="第三條（條款之效力及變更）">
        <ul>
          <li>本條款自公布於本服務或應用程式內通知起生效。</li>
          <li>本公司得因合理事由修改本條款，修改後之條款將於生效日<strong className="text-[#0F172A]">七日前</strong>公告通知。對使用者不利之變更，將於<strong className="text-[#0F172A]">三十日前</strong>通知。</li>
          <li>使用者若不同意修改後之條款，得停止使用本服務並辦理退會。</li>
        </ul>
      </Section>

      <Section title="第四條（服務內容）">
        <ul>
          <li><strong className="text-[#0F172A]">免費服務：</strong>裝置端 AI 簡訊詐騙偵測、風險通知、基本統計、應用程式安全掃描</li>
          <li><strong className="text-[#0F172A]">付費服務（月訂閱）：</strong>Gemini AI 深度分析、詳細偵測報告、網址安全性檢查</li>
        </ul>
        <p>本服務原則上全年無休提供，惟因系統維護或不可抗力因素，得暫時中斷服務。</p>
      </Section>

      <Section title="第五條（付費服務及退款）">
        <ul>
          <li>付費服務透過 Google Play 商店之應用程式內購進行。</li>
          <li>依據消費者保護法第19條，數位內容服務因已提供之特性，<strong className="text-[#0F172A]">七日鑑賞期猶豫權</strong>可能受限，請於訂閱前詳閱。</li>
          <li>訂閱將自動續訂，如欲取消，請於當期結束前至少24小時於 Google Play 商店設定辦理。取消後，服務維持至當期結束。</li>
          <li>因本服務錯誤導致無法使用時，本公司將退還不可用期間之費用或延長訂閱期間。</li>
          <li>退款事宜依 <a href="https://support.google.com/googleplay/answer/2479637" className="text-[#00D4AA] hover:underline" target="_blank" rel="noopener noreferrer">Google Play 退款政策</a>辦理。</li>
        </ul>
      </Section>

      <Section title="第六條（使用者義務）">
        <p>使用者不得從事下列行為：</p>
        <ul>
          <li>對本服務進行逆向工程、反編譯、反組譯等行為</li>
          <li>利用本服務蒐集他人個人資料或從事違法行為</li>
          <li>對本公司伺服器或網路造成過度負荷</li>
          <li>提交虛假舉報或濫用舉報系統</li>
          <li>未經本公司書面同意，將本服務用於商業目的</li>
        </ul>
      </Section>

      <Section title="第七條（服務限制及免責聲明）">
        <div className="bg-[rgba(255,179,71,0.06)] border border-[rgba(255,179,71,0.2)] rounded-xl p-5 mb-4">
          <p className="text-[#FFB347] font-semibold text-xs mb-2">重要：服務限制告知</p>
          <p>ScamLens AI 為詐騙訊息偵測之<strong className="text-[#FFB347]">輔助工具</strong>，AI 偵測結果並非百分之百準確，最終判斷應由使用者自行決定。</p>
        </div>
        <ul>
          <li>裝置端 AI 可能無法即時偵測新型詐騙手法。</li>
          <li>本公司就本服務未能偵測之詐騙所造成之損失，於法律許可範圍內限制責任。</li>
          <li>因不可抗力事由（天災、網路攻擊、通訊障礙等）所致之服務中斷，本公司不負賠償責任。</li>
        </ul>
      </Section>

      <Section title="第八條（智慧財產權）">
        <ul>
          <li>本服務及其所含之內容、軟體之智慧財產權均歸屬本公司所有。</li>
          <li>使用者於使用本服務過程中產生之偵測模式資料，得以匿名化形式用於改善服務品質。</li>
        </ul>
      </Section>

      <Section title="第九條（服務中斷及終止）">
        <ul>
          <li>本公司於無法繼續提供服務時，將於<strong className="text-[#0F172A]">三十日前</strong>公告後終止服務。</li>
          <li>服務終止時，將退還付費使用者剩餘訂閱期間之費用。</li>
        </ul>
      </Section>

      <Section title="第十條（準據法及爭議解決）">
        <ul>
          <li>本條款依<strong className="text-[#0F172A]">中華民國（台灣）法律</strong>解釋及適用。</li>
          <li>爭議發生時，雙方應先行協商解決。</li>
          <li>協商不成時，以<strong className="text-[#0F172A]">台灣台北地方法院</strong>為第一審管轄法院。</li>
          <li>消費者得向<strong className="text-[#0F172A]">行政院消費者保護委員會</strong>或各縣市消費者服務中心申訴。</li>
        </ul>
      </Section>

      <Section title="第十一條（聯絡我們）">
        <ContactBox items={[
          ["客服信箱", "support@vibeacorp.com"],
          ["公司名稱", "Vibe A"],
          ["負責人", "Jay Park"],
        ]} />
      </Section>

      <Footer date={updated} label="Vibe A · ScamLens AI · 服務條款" />
    </>
  )
}

/* ─────────────── Shared Components ─────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-bold text-[#0F172A] mb-4 pb-3 border-b border-[#E2E8F0]">{title}</h2>
      <div className="space-y-3 text-[#64748B] text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  )
}

function ContactBox({ items }: { items: [string, string][] }) {
  return (
    <div className="bg-[#F8FAFF] border border-[#E2E8F0] rounded-xl p-5 space-y-1.5 text-sm text-[#475569]">
      {items.map(([label, value]) => (
        <p key={label}><strong className="text-[#0F172A]">{label}:</strong> {value}</p>
      ))}
    </div>
  )
}

function Footer({ date, label }: { date: string; label: string }) {
  return (
    <div className="mt-12 pt-8 border-t border-[#E2E8F0] text-xs text-[#94A3B8]">
      <p>{date}</p>
      <p className="mt-1">{label}</p>
    </div>
  )
}
