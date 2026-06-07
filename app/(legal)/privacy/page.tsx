"use client"

import { useState } from "react"
import { Shield } from "lucide-react"

type Lang = "ko" | "en" | "zh-TW"
const LANGS: { id: Lang; label: string }[] = [
  { id: "ko", label: "한국어" },
  { id: "en", label: "English" },
  { id: "zh-TW", label: "繁體中文" },
]

export default function AppPrivacyPage() {
  const [lang, setLang] = useState<Lang>("ko")

  const titles: Record<Lang, string> = {
    ko: "개인정보처리방침",
    en: "Privacy Policy",
    "zh-TW": "隱私權政策",
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

      <div className="max-w-[800px] mx-auto px-4 py-8">
        {lang === "ko"    && <PrivacyKO />}
        {lang === "en"    && <PrivacyEN />}
        {lang === "zh-TW" && <PrivacyTW />}
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-base font-bold text-[#0F172A] mb-3 pb-2 border-b border-[#E2E8F0]">{title}</h2>
      <div className="space-y-3 text-[#64748B] text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_table]:w-full [&_table]:border-collapse [&_th]:bg-[#F0F4FF] [&_th]:text-[#0F172A] [&_th]:font-semibold [&_th]:text-xs [&_th]:p-2.5 [&_th]:text-left [&_td]:p-2.5 [&_td]:border-b [&_td]:border-[#E2E8F0] [&_td]:text-xs [&_td]:text-[#475569]">
        {children}
      </div>
    </div>
  )
}

function DocFooter({ line1, line2 }: { line1: string; line2: string }) {
  return (
    <div className="mt-10 pt-6 border-t border-[#E2E8F0] text-xs text-[#94A3B8]">
      <p>{line1}</p>
      <p className="mt-1">{line2}</p>
    </div>
  )
}

function PrivacyKO() {
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-4 mb-8 text-sm text-[#64748B] leading-relaxed">
        <strong className="text-[#0F172A]">핵심 원칙:</strong> ScamLens AI는 문자 원문 및 전화번호 원문을 서버에 저장하지 않습니다.
        모든 분석은 기기에서 처리되며, 서버에는 암호화된 해시값과 위험도 분류 결과만 저장됩니다.
        본 방침은 <strong className="text-[#0F172A]">개인정보 보호법(PIPA)</strong>을 준수합니다.
      </div>

      <Section title="제1조 (수집하는 개인정보)">
        <table>
          <thead>
            <tr><th>수집 항목</th><th>목적</th></tr>
          </thead>
          <tbody>
            <tr><td>문자 해시값 (원문 복원 불가)</td><td>블랙리스트, 캐시</td></tr>
            <tr><td>위험도 분류 결과</td><td>서비스 품질 개선</td></tr>
            <tr><td>발신자 해시값 (원본 복원 불가)</td><td>악성 발신자 탐지</td></tr>
            <tr><td>소셜 로그인 고유번호·이메일</td><td>회원 식별, 유료 서비스</td></tr>
            <tr><td>구독 상태</td><td>유료 서비스 제공</td></tr>
          </tbody>
        </table>
        <p className="mt-3"><strong className="text-[#0F172A]">절대 수집하지 않음:</strong> 문자 원문, 전화번호 원문, 위치정보, 금융정보</p>
      </Section>

      <Section title="제2조 (처리 원칙)">
        <ul>
          <li><strong className="text-[#0F172A]">온디바이스 우선:</strong> 문자 분석은 사용자 기기에서 수행되며, 원문은 서버로 전송되지 않습니다.</li>
          <li><strong className="text-[#0F172A]">최소 수집:</strong> 서비스 제공에 필수적인 최소한의 정보만 수집합니다.</li>
          <li><strong className="text-[#0F172A]">재난안전문자 제외:</strong> 국가 재난안전문자는 탐지 대상에서 완전 제외됩니다.</li>
        </ul>
      </Section>

      <Section title="제3조 (보유 및 이용 기간)">
        <ul>
          <li>문자 해시값 및 분류 결과: 수집일로부터 <strong className="text-[#0F172A]">2년</strong></li>
          <li>구독 관련 결제 기록: <strong className="text-[#0F172A]">5년</strong> (전자상거래법)</li>
          <li>소셜 로그인 정보: 회원 탈퇴 시 즉시 삭제</li>
        </ul>
      </Section>

      <Section title="제4조 (제3자 제공 및 처리 위탁)">
        <p>수집한 정보는 원칙적으로 제3자에게 제공하지 않으며, 아래 업체에 처리를 위탁합니다.</p>
        <table>
          <thead>
            <tr><th>수탁 업체</th><th>처리 업무</th></tr>
          </thead>
          <tbody>
            <tr><td>Supabase Inc. (미국)</td><td>해시값·분류 결과 저장</td></tr>
            <tr><td>Google Cloud (미국)</td><td>서버 운영, AI 분석</td></tr>
            <tr><td>Google LLC — AdMob (미국)</td><td>광고 제공, 광고 식별자(GAID) 수집</td></tr>
          </tbody>
        </table>
        <p className="mt-3 text-xs text-[#94A3B8]">광고 기능 사용 시 Google AdMob이 Android 광고 식별자(GAID)를 수집할 수 있습니다. 맞춤 광고를 원하지 않으시면 기기 설정에서 광고 개인화를 비활성화할 수 있습니다.</p>
      </Section>

      <Section title="제5조 (이용자 권리)">
        <p>사용자는 언제든지 개인정보 열람, 정정·삭제, 처리 정지를 요청할 수 있습니다 (요청일로부터 10일 이내 처리).</p>
        <p>앱 삭제 시 기기 내 데이터는 즉시 삭제됩니다. 서버 데이터 삭제는 이메일로 요청 가능합니다.</p>
      </Section>

      <Section title="제6조 (안전성 확보)">
        <ul>
          <li>SHA-256 단방향 암호화 — 원문 복원 불가</li>
          <li>TLS 1.2 이상 HTTPS 전송 암호화</li>
          <li>온디바이스 설계로 원본 데이터 서버 전송 자체 차단</li>
        </ul>
      </Section>

      <Section title="제7조 (개인정보 보호책임자 및 문의)">
        <div className="bg-[#F8FAFF] border border-[#E2E8F0] rounded-xl p-4 space-y-1 text-sm text-[#475569]">
          <p><strong className="text-[#0F172A]">개인정보 보호책임자:</strong> Jay Park</p>
          <p><strong className="text-[#0F172A]">이메일:</strong> vibe.factory904@gmail.com</p>
          <p className="text-xs text-[#94A3B8] pt-1">불만 또는 피해 구제는 개인정보보호위원회(privacy.go.kr, 국번없이 182)에 신고하실 수 있습니다.</p>
        </div>
      </Section>

      <DocFooter line1="시행일: 2026년 6월 7일" line2="Vibe A Corp. · ScamLens AI · 개인정보처리방침" />
    </>
  )
}

function PrivacyEN() {
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-4 mb-8 text-sm text-[#64748B] leading-relaxed">
        <strong className="text-[#0F172A]">Privacy-First by Design.</strong> ScamLens AI never stores the raw text of your messages or your raw phone number on servers. All analysis runs on your device; only cryptographic hashes and risk classifications are transmitted.
      </div>

      <Section title="1. Data We Collect">
        <table>
          <thead>
            <tr><th>Data</th><th>Purpose</th></tr>
          </thead>
          <tbody>
            <tr><td>Message hash (non-reversible)</td><td>Blacklist, cache</td></tr>
            <tr><td>Risk classification result</td><td>Service improvement</td></tr>
            <tr><td>Sender hash (non-reversible)</td><td>Malicious sender detection</td></tr>
            <tr><td>Social login ID &amp; email</td><td>Account, paid service</td></tr>
            <tr><td>Subscription status</td><td>Paid service delivery</td></tr>
          </tbody>
        </table>
        <p className="mt-3"><strong className="text-[#0F172A]">We never collect:</strong> Raw message text, raw phone numbers, location data, financial information.</p>
      </Section>

      <Section title="2. How We Use Your Data">
        <ul>
          <li>On-device processing — original message content never leaves your device</li>
          <li>Hashed data used to improve detection accuracy and maintain blacklists</li>
          <li>Subscription data used solely to provide paid features</li>
        </ul>
      </Section>

      <Section title="3. Data Retention">
        <ul>
          <li>Message hashes &amp; classifications: <strong className="text-[#0F172A]">2 years</strong></li>
          <li>Billing records: <strong className="text-[#0F172A]">5 years</strong> (legal requirement)</li>
          <li>Account data: deleted immediately upon account deletion</li>
        </ul>
      </Section>

      <Section title="4. Service Providers">
        <table>
          <thead>
            <tr><th>Provider</th><th>Service</th></tr>
          </thead>
          <tbody>
            <tr><td>Supabase Inc. (US)</td><td>Hash &amp; classification storage</td></tr>
            <tr><td>Google Cloud (US)</td><td>Server infrastructure, AI analysis</td></tr>
            <tr><td>Google LLC — AdMob (US)</td><td>Advertising delivery, Android Advertising ID (GAID) collection</td></tr>
          </tbody>
        </table>
        <p className="mt-3 text-xs text-[#94A3B8]">When displaying ads, Google AdMob may collect your Android Advertising ID (GAID). You can opt out of personalized ads in your device settings under Google &gt; Ads.</p>
      </Section>

      <Section title="5. Your Rights (CCPA)">
        <p>California residents have the right to know, delete, and opt-out of the sale of personal information. We do not sell personal information. Submit requests to: vibe.factory904@gmail.com</p>
      </Section>

      <Section title="6. Contact">
        <div className="bg-[#F8FAFF] border border-[#E2E8F0] rounded-xl p-4 space-y-1 text-sm text-[#475569]">
          <p><strong className="text-[#0F172A]">Privacy Officer:</strong> Jay Park</p>
          <p><strong className="text-[#0F172A]">Email:</strong> vibe.factory904@gmail.com</p>
        </div>
      </Section>

      <DocFooter line1="Effective: June 7, 2026" line2="Vibe A Corp. · ScamLens AI · Privacy Policy" />
    </>
  )
}

function PrivacyTW() {
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-4 mb-8 text-sm text-[#64748B] leading-relaxed">
        <strong className="text-[#0F172A]">隱私優先設計。</strong>ScamLens AI 不會將您的訊息原文或電話號碼原文儲存於伺服器。所有分析在您的裝置上進行，僅傳輸加密雜湊值及風險分類結果。
      </div>

      <Section title="第一條（收集的個人資料）">
        <table>
          <thead>
            <tr><th>收集項目</th><th>目的</th></tr>
          </thead>
          <tbody>
            <tr><td>訊息雜湊值（不可還原）</td><td>黑名單、快取</td></tr>
            <tr><td>風險分類結果</td><td>服務品質改善</td></tr>
            <tr><td>發送者雜湊值（不可還原）</td><td>惡意發送者偵測</td></tr>
            <tr><td>社交登入ID及電子郵件</td><td>帳號識別、付費服務</td></tr>
            <tr><td>訂閱狀態</td><td>付費服務提供</td></tr>
          </tbody>
        </table>
        <p className="mt-3"><strong className="text-[#0F172A]">絕不收集：</strong>訊息原文、電話號碼原文、位置資訊、金融資訊</p>
      </Section>

      <Section title="第二條（資料保留期間）">
        <ul>
          <li>訊息雜湊值及分類結果：收集日起 <strong className="text-[#0F172A]">2年</strong></li>
          <li>訂閱相關付款記錄：<strong className="text-[#0F172A]">5年</strong>（法律要求）</li>
          <li>帳號資料：帳號刪除時立即刪除</li>
        </ul>
      </Section>

      <Section title="第三條（委外處理）">
        <table>
          <thead>
            <tr><th>委外廠商</th><th>處理業務</th></tr>
          </thead>
          <tbody>
            <tr><td>Supabase Inc.（美國）</td><td>雜湊值與分類結果儲存</td></tr>
            <tr><td>Google Cloud（美國）</td><td>伺服器運營、AI 分析</td></tr>
            <tr><td>Google LLC — AdMob（美國）</td><td>廣告提供、廣告識別碼（GAID）收集</td></tr>
          </tbody>
        </table>
        <p className="mt-3 text-xs text-[#94A3B8]">顯示廣告時，Google AdMob 可能收集您的 Android 廣告識別碼（GAID）。您可在裝置的 Google 設定中停用個人化廣告。</p>
      </Section>

      <Section title="第四條（您的權利）">
        <p>您可隨時要求查閱、更正、刪除個人資料或停止處理。請透過電子郵件提出申請，我們將於10日內處理。</p>
      </Section>

      <Section title="第五條（聯絡我們）">
        <div className="bg-[#F8FAFF] border border-[#E2E8F0] rounded-xl p-4 space-y-1 text-sm text-[#475569]">
          <p><strong className="text-[#0F172A]">隱私權負責人：</strong>Jay Park</p>
          <p><strong className="text-[#0F172A]">電子郵件：</strong>vibe.factory904@gmail.com</p>
        </div>
      </Section>

      <DocFooter line1="生效日期：2026年6月7日" line2="Vibe A Corp. · ScamLens AI · 隱私權政策" />
    </>
  )
}
