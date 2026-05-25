"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Shield } from "lucide-react"

type Lang = "ko" | "en" | "zh-TW"

export default function PrivacyPage() {
  const [lang, setLang] = useState<Lang>("ko")

  const tabs: { id: Lang; label: string }[] = [
    { id: "ko", label: "한국어" },
    { id: "en", label: "English" },
    { id: "zh-TW", label: "繁體中文" },
  ]

  const headerInfo: Record<Lang, { title: string; updated: string; subtitle: string }> = {
    ko:    { title: "개인정보처리방침", updated: "2026년 4월 19일", subtitle: "시행일" },
    en:    { title: "Privacy Policy",  updated: "April 19, 2026",  subtitle: "Effective Date" },
    "zh-TW": { title: "隱私權政策",   updated: "2026年4月19日",   subtitle: "生效日期" },
  }

  const h = headerInfo[lang]

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="border-b border-white/8 pb-12 mb-0">
        <div className="max-w-[800px] mx-auto px-6">
          <Link href="/security" className="inline-flex items-center gap-1.5 text-sm text-[#9090B8] hover:text-white transition-colors mb-8">
            <ChevronLeft size={16} /> ScamLens AI
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4AA] to-[#0088FF] flex items-center justify-center">
              <Shield size={18} className="text-white" />
            </div>
            <div>
              <div className="text-xs text-[#9090B8]">ScamLens AI · Vibe A</div>
              <h1 className="text-2xl font-black tracking-tight">{h.title}</h1>
            </div>
          </div>
          <p className="text-[#9090B8] text-sm mb-6">{h.subtitle}: {h.updated}</p>

          {/* Language tabs */}
          <div className="flex gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setLang(t.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  lang === t.id
                    ? "bg-[#5B6EF5] text-white"
                    : "bg-white/6 text-[#9090B8] hover:bg-white/10 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[800px] mx-auto px-6 py-12">
        {lang === "ko"    && <PrivacyKO />}
        {lang === "en"    && <PrivacyEN />}
        {lang === "zh-TW" && <PrivacyTW />}
      </div>
    </div>
  )
}

/* ─────────────────────────── Shared helpers ─────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/8">{title}</h2>
      <div className="space-y-3 text-[#9090B8] text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_table]:w-full [&_table]:border-collapse [&_table]:rounded-xl [&_table]:overflow-hidden [&_th]:bg-white/5 [&_th]:text-white [&_th]:font-semibold [&_th]:text-xs [&_th]:p-3 [&_th]:text-left [&_td]:p-3 [&_td]:border-b [&_td]:border-white/6 [&_td]:text-xs [&_td]:text-[#9090B8]">
        {children}
      </div>
    </div>
  )
}

function ContactBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/4 border border-white/8 rounded-xl p-5 space-y-1 text-[#9090B8] text-sm">
      {children}
    </div>
  )
}

function Footer({ line1, line2 }: { line1: string; line2: string }) {
  return (
    <div className="mt-12 pt-8 border-t border-white/8 text-xs text-[#5A5A7A]">
      <p>{line1}</p>
      <p className="mt-1">{line2}</p>
    </div>
  )
}

/* ─────────────────────────── Korean (개인정보보호법 / PIPA) ─────────────────────────── */

function PrivacyKO() {
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-5 mb-10 text-sm text-[#9090B8] leading-relaxed">
        <strong className="text-white">핵심 원칙:</strong> ScamLens AI는 문자 원문 및 전화번호 원문을 서버에 저장하지 않습니다.
        모든 분석은 기기에서 처리되며, 서버에는 암호화된 해시값과 위험도 분류 결과만 저장됩니다.
        본 방침은 <strong className="text-white">개인정보 보호법(PIPA)</strong>을 준수하여 작성되었습니다.
      </div>

      <Section title="제1조 (개인정보 수집 항목 및 목적)">
        <p>Vibe A(이하 &ldquo;회사&rdquo;)는 개인정보 보호법 제15조에 따라 아래와 같은 최소한의 개인정보를 수집합니다.</p>
        <table>
          <thead>
            <tr><th>수집 항목</th><th>수집 방법</th><th>수집 목적</th></tr>
          </thead>
          <tbody>
            <tr><td>정규화된 문자 해시값 (원문 복원 불가)</td><td>서비스 이용 시 자동 생성</td><td>집단지성 블랙리스트, 재분석 캐시</td></tr>
            <tr><td>위험도 분류 결과 (safe/suspicious/danger)</td><td>온디바이스 AI 분석 결과</td><td>서비스 품질 개선, 통계</td></tr>
            <tr><td>스팸 카테고리 (스미싱/피싱 등)</td><td>AI 분류 결과</td><td>패턴 학습 데이터</td></tr>
            <tr><td>발신자 해시값 (원본 번호 복원 불가)</td><td>자동 생성</td><td>악성 발신자 패턴 탐지</td></tr>
            <tr><td>익명화된 기기 식별자</td><td>앱 설치 시 자동 생성</td><td>중복 신고 방지</td></tr>
            <tr><td>소셜 로그인 고유번호 및 이메일</td><td>구글/카카오 로그인 시</td><td>회원 식별, 유료 서비스 제공</td></tr>
            <tr><td>구독 상태</td><td>결제 서비스 연동</td><td>유료 서비스 제공</td></tr>
          </tbody>
        </table>
        <p className="mt-4"><strong className="text-white">절대 수집하지 않는 정보:</strong> 문자 원문, 전화번호 원문, 주소, 금융정보, 위치정보</p>
      </Section>

      <Section title="제2조 (개인정보 처리 원칙)">
        <ul>
          <li><strong className="text-white">온디바이스 우선:</strong> 문자 분석은 사용자의 기기에서 수행되며, 원문은 기기 밖으로 전송되지 않습니다.</li>
          <li><strong className="text-white">최소 수집:</strong> 서비스 제공에 필수적인 최소한의 정보만 수집합니다 (개인정보 보호법 제3조 제1항).</li>
          <li><strong className="text-white">목적 외 사용 금지:</strong> 수집된 정보는 명시된 목적 외에 사용되지 않습니다 (개인정보 보호법 제3조 제2항).</li>
          <li><strong className="text-white">재난안전문자 완전 제외:</strong> 국가 재난안전문자는 탐지 대상에서 제외되며 데이터가 수집되지 않습니다.</li>
        </ul>
      </Section>

      <Section title="제3조 (개인정보 보유 및 이용 기간)">
        <table>
          <thead>
            <tr><th>수집 항목</th><th>보유 기간</th><th>근거</th></tr>
          </thead>
          <tbody>
            <tr><td>문자 해시값 및 분류 결과</td><td>수집일로부터 2년</td><td>서비스 품질 개선</td></tr>
            <tr><td>구독 관련 결제 기록</td><td>5년</td><td>전자상거래법 제6조</td></tr>
            <tr><td>소셜 로그인 정보</td><td>회원 탈퇴 시 즉시 삭제</td><td>사용자 요청</td></tr>
            <tr><td>기기 식별자</td><td>앱 삭제 또는 동의 철회 시 즉시 삭제</td><td>사용자 요청</td></tr>
          </tbody>
        </table>
      </Section>

      <Section title="제4조 (개인정보의 제3자 제공)">
        <p>회사는 개인정보 보호법 제17조에 따라 수집한 정보를 원칙적으로 제3자에게 제공하지 않습니다. 다만 아래의 경우는 예외입니다.</p>
        <ul>
          <li>사용자의 사전 동의를 받은 경우</li>
          <li>법원의 영장 등 적법한 절차에 따른 수사기관 요청이 있는 경우</li>
          <li>통계 작성, 학술 연구 등을 위해 특정 개인을 식별할 수 없는 형태로 제공하는 경우</li>
        </ul>
      </Section>

      <Section title="제5조 (개인정보 처리 위탁)">
        <p>회사는 서비스 제공을 위해 아래와 같이 개인정보 처리를 위탁하며, 위탁 계약 시 개인정보 보호 관련 법규 준수 및 안전성 확보 의무를 부과합니다.</p>
        <table>
          <thead>
            <tr><th>수탁 업체</th><th>처리 업무</th><th>보유 기간</th></tr>
          </thead>
          <tbody>
            <tr><td>Supabase Inc.</td><td>해시값·분류 결과 저장 (분석 캐시)</td><td>위탁 계약 종료 시</td></tr>
            <tr><td>Google Cloud Platform</td><td>Cloud Run 서버 운영 (유료 AI 분석)</td><td>위탁 계약 종료 시</td></tr>
            <tr><td>Google LLC (Gemini API)</td><td>유료 사용자 심층 AI 분석 (정규화 텍스트만 전송)</td><td>분석 완료 후 즉시 삭제</td></tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs">Gemini API로 전송되는 텍스트는 발신자 정보가 제거된 정규화 텍스트이며, Google DPA에 따라 AI 학습 데이터로 사용되지 않습니다.</p>
      </Section>

      <Section title="제6조 (정보주체의 권리)">
        <p>사용자는 언제든지 아래의 권리를 행사할 수 있으며, 요청일로부터 <strong className="text-white">10일 이내</strong>에 처리합니다.</p>
        <ul>
          <li>개인정보 열람 요청 (개인정보 보호법 제35조)</li>
          <li>개인정보 정정·삭제 요청 (제36조)</li>
          <li>개인정보 처리 정지 요청 (제37조)</li>
          <li>동의 철회</li>
        </ul>
        <p>권리 행사는 앱 내 설정 메뉴 또는 개인정보 보호책임자 이메일로 요청하십시오. 앱 삭제 시 기기 내 데이터는 즉시 삭제되며, 서버 데이터 삭제는 이메일로 요청하실 수 있습니다.</p>
        <p className="mt-2">권리 행사에 관한 불만이 있으신 경우 <strong className="text-white">개인정보보호위원회</strong> (privacy.go.kr / 국번없이 182)에 신고하실 수 있습니다.</p>
      </Section>

      <Section title="제7조 (개인정보의 안전성 확보 조치)">
        <ul>
          <li><strong className="text-white">단방향 암호화:</strong> 수집되는 모든 해시값은 SHA-256으로 암호화되어 원문 복원이 불가능합니다.</li>
          <li><strong className="text-white">전송 구간 암호화:</strong> 모든 서버 통신은 TLS 1.2 이상의 HTTPS로 암호화됩니다.</li>
          <li><strong className="text-white">접근 제한:</strong> 개인정보 처리 시스템에 대한 접근 권한을 업무 담당자로 최소화합니다.</li>
          <li><strong className="text-white">온디바이스 설계:</strong> 원본 데이터 서버 전송 자체를 아키텍처 설계 단계에서 차단합니다.</li>
        </ul>
      </Section>

      <Section title="제8조 (국외 이전)">
        <p>회사는 개인정보 보호법 제28조의8에 따라 아래와 같이 개인정보를 국외로 이전합니다. 사용자는 이전을 거부할 권리가 있으나, 거부 시 서비스 이용이 제한될 수 있습니다.</p>
        <table>
          <thead>
            <tr><th>이전 국가</th><th>업체</th><th>이전 항목</th><th>목적</th></tr>
          </thead>
          <tbody>
            <tr><td>미국</td><td>Supabase Inc.</td><td>해시값, 위험도</td><td>분석 캐시</td></tr>
            <tr><td>미국</td><td>Google Cloud / Gemini</td><td>정규화 텍스트 (원문 아님)</td><td>AI 분석</td></tr>
          </tbody>
        </table>
      </Section>

      <Section title="제9조 (만 14세 미만 아동)">
        <p>ScamLens AI는 만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다. 만 14세 미만 아동은 법정대리인의 동의를 얻어야 서비스를 이용할 수 있습니다 (개인정보 보호법 제22조의2). 만 14세 미만 아동의 정보가 수집된 사실이 확인될 경우 즉시 삭제합니다.</p>
      </Section>

      <Section title="제10조 (개인정보 보호책임자)">
        <ContactBox>
          <p><strong className="text-white">개인정보 보호책임자</strong></p>
          <p>이름: Jay Park</p>
          <p>소속: Vibe A</p>
          <p>이메일: privacy@vibeacorp.com</p>
          <p className="text-xs text-[#5A5A7A] pt-2">개인정보 관련 문의, 불만, 피해 구제 요청은 위 이메일로 접수하실 수 있습니다. 처리 결과가 만족스럽지 않으실 경우 개인정보보호위원회(privacy.go.kr)에 심의를 신청하실 수 있습니다.</p>
        </ContactBox>
      </Section>

      <Section title="제11조 (방침 변경)">
        <p>본 방침은 법령·서비스 변경 시 개정될 수 있습니다. 중요한 변경이 있을 경우 시행 <strong className="text-white">7일 전</strong>에 앱 내 공지 및 이메일로 안내합니다.</p>
      </Section>

      <Footer line1="시행일: 2026년 4월 19일" line2="Vibe A · ScamLens AI · 개인정보처리방침" />
    </>
  )
}

/* ─────────────────────────── English / California (CCPA) ─────────────────────────── */

function PrivacyEN() {
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-5 mb-10 text-sm text-[#9090B8] leading-relaxed">
        <strong className="text-white">Privacy-First by Design.</strong> ScamLens AI never stores the raw text of your messages or your raw phone number. All analysis runs on your device; only cryptographic hashes and risk-level classifications leave it.
        This Policy is governed by the laws of the <strong className="text-white">State of California, United States</strong> and complies with the <strong className="text-white">California Consumer Privacy Act (CCPA/CPRA)</strong> and CalOPPA.
      </div>

      <Section title="1. Information We Collect">
        <p>Vibe A (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects only the minimum data required to provide ScamLens AI (&ldquo;Service&rdquo;).</p>
        <table>
          <thead>
            <tr><th>Data Element</th><th>How Collected</th><th>Purpose</th></tr>
          </thead>
          <tbody>
            <tr><td>Normalized message hash (irreversible)</td><td>Auto-generated on-device</td><td>Community blacklist, re-analysis cache</td></tr>
            <tr><td>Risk classification (safe / suspicious / danger)</td><td>On-device AI result</td><td>Service quality, statistics</td></tr>
            <tr><td>Spam category (phishing, smishing, etc.)</td><td>AI classification</td><td>Model training data</td></tr>
            <tr><td>Sender hash (irreversible)</td><td>Auto-generated</td><td>Malicious sender pattern detection</td></tr>
            <tr><td>Anonymous device identifier</td><td>Generated at install</td><td>Duplicate-report prevention</td></tr>
            <tr><td>Social login UID and email</td><td>Google / Kakao sign-in</td><td>Account identification, paid service</td></tr>
            <tr><td>Subscription status</td><td>Payment service integration</td><td>Paid service delivery</td></tr>
          </tbody>
        </table>
        <p className="mt-4"><strong className="text-white">Data we never collect:</strong> raw message text, raw phone numbers, precise geolocation, financial account details, Social Security numbers.</p>
      </Section>

      <Section title="2. How We Use Information">
        <ul>
          <li>To detect spam, phishing, and smishing messages</li>
          <li>To maintain and improve community-driven blocklists</li>
          <li>To provide and improve the Service and fix bugs</li>
          <li>To process subscriptions and authenticate users</li>
          <li>To comply with legal obligations</li>
        </ul>
        <p className="mt-2">We do <strong className="text-white">not</strong> use your data for targeted advertising. We do <strong className="text-white">not</strong> sell, rent, or share your personal information with third parties for their own marketing purposes.</p>
      </Section>

      <Section title="3. Disclosure of Information">
        <p>We share data only in the following limited circumstances:</p>
        <ul>
          <li><strong className="text-white">Service providers (processors):</strong> Supabase Inc. (hash/risk storage), Google Cloud Platform (Cloud Run AI), Google Gemini API (normalized text only — deleted after analysis per DPA). These parties are contractually prohibited from using your data for any other purpose.</li>
          <li><strong className="text-white">Legal process:</strong> We may disclose data when required by valid court order, subpoena, or applicable law. We will notify you unless prohibited by law.</li>
          <li><strong className="text-white">Business transfers:</strong> In a merger or acquisition, your data may transfer to the successor entity subject to the same privacy commitments.</li>
        </ul>
      </Section>

      <Section title="4. California Privacy Rights (CCPA / CPRA)">
        <p>If you are a California resident, you have the following rights:</p>
        <ul>
          <li><strong className="text-white">Right to Know:</strong> You may request disclosure of the categories and specific pieces of personal information we have collected about you, the sources, our business purpose, and the categories of third parties with whom we share it.</li>
          <li><strong className="text-white">Right to Delete:</strong> You may request deletion of personal information we have collected, subject to certain exceptions (e.g., legal obligations).</li>
          <li><strong className="text-white">Right to Correct:</strong> You may request correction of inaccurate personal information.</li>
          <li><strong className="text-white">Right to Opt-Out of Sale or Sharing:</strong> We do <strong className="text-white">not</strong> sell or share your personal information for cross-context behavioral advertising. No opt-out is needed, but you may request confirmation at any time.</li>
          <li><strong className="text-white">Right to Limit Sensitive Personal Information:</strong> We do not use sensitive personal information beyond what is necessary to provide the Service.</li>
          <li><strong className="text-white">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of these rights. We will not deny Service, charge different prices, or provide a different quality of service.</li>
        </ul>
        <p className="mt-3">To exercise your rights, contact us at <strong className="text-white">privacy@vibeacorp.com</strong>. We will respond within <strong className="text-white">45 days</strong> (extendable by an additional 45 days with notice). We may verify your identity before fulfilling a request. You may designate an authorized agent to submit requests on your behalf.</p>
        <p className="mt-2 text-xs">California&rsquo;s &ldquo;Shine the Light&rdquo; law (Civil Code § 1798.83) entitles California residents to request, once per calendar year, information about disclosures to third parties for direct marketing purposes. We do not make such disclosures.</p>
      </Section>

      <Section title="5. &ldquo;Do Not Sell or Share My Personal Information&rdquo;">
        <p>We do <strong className="text-white">not</strong> sell or share personal information as defined under CCPA/CPRA. We do not engage in cross-context behavioral advertising. If you have questions, email <strong className="text-white">privacy@vibeacorp.com</strong>.</p>
      </Section>

      <Section title="6. Data Retention">
        <table>
          <thead>
            <tr><th>Data</th><th>Retention Period</th></tr>
          </thead>
          <tbody>
            <tr><td>Message hash &amp; risk classification</td><td>2 years from collection</td></tr>
            <tr><td>Subscription / payment records</td><td>5 years (California commercial law)</td></tr>
            <tr><td>Social login credentials</td><td>Deleted upon account deletion</td></tr>
            <tr><td>Device identifier</td><td>Deleted upon app uninstall or withdrawal of consent</td></tr>
            <tr><td>Gemini API analysis text</td><td>Deleted immediately after analysis</td></tr>
          </tbody>
        </table>
      </Section>

      <Section title="7. International Data Transfers">
        <p>If you use the Service outside the United States, your information may be transferred to and processed in the United States, where data protection laws may differ from those in your jurisdiction. By using the Service, you acknowledge this transfer. We implement contractual safeguards (Standard Contractual Clauses where applicable) to protect transferred data.</p>
      </Section>

      <Section title="8. Children's Privacy (COPPA)">
        <p>The Service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn that we have inadvertently collected such information, we will delete it promptly. If you believe we have collected information from a child under 13, contact us at <strong className="text-white">privacy@vibeacorp.com</strong>.</p>
      </Section>

      <Section title="9. Security">
        <ul>
          <li><strong className="text-white">Irreversible hashing:</strong> SHA-256 one-way hashes — raw data cannot be reconstructed.</li>
          <li><strong className="text-white">Transit encryption:</strong> All communications use TLS 1.2 or higher.</li>
          <li><strong className="text-white">Access controls:</strong> Personal data access is restricted to authorized personnel on a need-to-know basis.</li>
          <li><strong className="text-white">Privacy by design:</strong> Raw message content is never transmitted beyond the device — enforced at the architecture level.</li>
        </ul>
        <p className="mt-2 text-xs">No method of transmission or storage is 100% secure. In the event of a data breach affecting California residents, we will notify affected individuals and the California Attorney General as required by Civil Code § 1798.82.</p>
      </Section>

      <Section title="10. Your Privacy Contact">
        <ContactBox>
          <p><strong className="text-white">Privacy Contact</strong></p>
          <p>Vibe A</p>
          <p>Email: privacy@vibeacorp.com</p>
          <p className="text-xs text-[#5A5A7A] pt-2">For privacy-related inquiries, rights requests, or complaints. We respond within 45 days for CCPA requests. California residents may also contact the California Privacy Protection Agency (cppa.ca.gov) or the California Attorney General.</p>
        </ContactBox>
      </Section>

      <Section title="11. Changes to This Policy">
        <p>We may update this Policy as laws or the Service change. For material changes, we will provide at least <strong className="text-white">30 days&rsquo; notice</strong> via in-app notification or email before the change takes effect. Continued use after the effective date constitutes acceptance. If you do not agree, please discontinue use and contact us to delete your account.</p>
      </Section>

      <Footer line1="Effective Date: April 19, 2026" line2="Vibe A · ScamLens AI · Privacy Policy · California Law" />
    </>
  )
}

/* ─────────────────────────── Traditional Chinese / Taiwan (個人資料保護法 PDPA) ─────────────────────────── */

function PrivacyTW() {
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-5 mb-10 text-sm text-[#9090B8] leading-relaxed">
        <strong className="text-white">核心原則：</strong>ScamLens AI 不在伺服器儲存您的原始簡訊內容或電話號碼。所有分析均在您的裝置上執行，伺服器僅保存加密雜湊值及風險等級分類結果。
        本隱私權政策依據<strong className="text-white">中華民國個人資料保護法（個資法）</strong>制定。
      </div>

      <Section title="第一條（蒐集目的告知）">
        <p>Vibe A（以下簡稱「本公司」）依個資法第8條告知事項，說明蒐集個人資料之目的如下：</p>
        <table>
          <thead>
            <tr><th>蒐集項目</th><th>蒐集方式</th><th>蒐集目的</th></tr>
          </thead>
          <tbody>
            <tr><td>正規化簡訊雜湊值（無法還原原文）</td><td>使用服務時自動產生</td><td>黑名單資料庫、快取</td></tr>
            <tr><td>風險等級分類（safe/suspicious/danger）</td><td>裝置端 AI 分析結果</td><td>服務品質改善、統計</td></tr>
            <tr><td>詐騙類別（釣魚、簡訊詐騙等）</td><td>AI 分類結果</td><td>模型訓練資料</td></tr>
            <tr><td>發送方雜湊值（無法還原原始號碼）</td><td>自動產生</td><td>惡意發送方偵測</td></tr>
            <tr><td>匿名裝置識別碼</td><td>安裝時自動產生</td><td>防止重複檢舉</td></tr>
            <tr><td>社群登入 UID 及電子郵件</td><td>Google / Kakao 登入</td><td>帳號識別、付費服務</td></tr>
            <tr><td>訂閱狀態</td><td>付款服務串接</td><td>付費服務提供</td></tr>
          </tbody>
        </table>
        <p className="mt-4"><strong className="text-white">絕不蒐集：</strong>簡訊原文、電話號碼原碼、地址、金融帳戶資訊</p>
      </Section>

      <Section title="第二條（個人資料處理原則）">
        <ul>
          <li><strong className="text-white">裝置端優先：</strong>簡訊分析於使用者裝置執行，原文不傳送至外部伺服器。</li>
          <li><strong className="text-white">最小蒐集：</strong>僅蒐集服務所必要之最小限度資料（個資法第5條）。</li>
          <li><strong className="text-white">目的限制：</strong>蒐集之資料不得逾越蒐集目的之必要範圍（個資法第5條）。</li>
          <li><strong className="text-white">災防簡訊豁免：</strong>國家災防緊急通報簡訊完全排除於偵測範圍外，不蒐集任何資料。</li>
        </ul>
      </Section>

      <Section title="第三條（當事人之權利）">
        <p>依個資法第3條，您得隨時向本公司行使下列權利，本公司將於<strong className="text-white">15個工作日內</strong>回覆：</p>
        <ul>
          <li><strong className="text-white">查詢或閱覽：</strong>您可要求查詢本公司保有之您的個人資料（個資法第3條第1款）。</li>
          <li><strong className="text-white">製給複製本：</strong>您可要求本公司提供您個人資料之複製（個資法第3條第1款）。</li>
          <li><strong className="text-white">補充或更正：</strong>您可要求更正不正確之個人資料（個資法第3條第2款）。</li>
          <li><strong className="text-white">停止蒐集、處理或利用：</strong>您可要求停止蒐集、處理或利用您的個人資料（個資法第3條第4款）。</li>
          <li><strong className="text-white">刪除：</strong>您可要求刪除本公司保有之您的個人資料（個資法第3條第5款）。</li>
        </ul>
        <p className="mt-2">請將權利行使請求寄至：<strong className="text-white">privacy@vibeacorp.com</strong></p>
        <p className="mt-2">如對本公司之處理結果不滿意，您可向<strong className="text-white">個人資料保護委員會</strong>（pdpc.gov.tw）提出申訴，或依個資法第51條提起訴訟。</p>
      </Section>

      <Section title="第四條（個人資料之利用期間、地區、對象及方式）">
        <table>
          <thead>
            <tr><th>項目</th><th>保存期間</th><th>依據</th></tr>
          </thead>
          <tbody>
            <tr><td>簡訊雜湊值及分類結果</td><td>蒐集後2年</td><td>服務品質改善</td></tr>
            <tr><td>訂閱付款紀錄</td><td>5年</td><td>消費者保護法第19條</td></tr>
            <tr><td>社群登入資訊</td><td>帳號刪除時立即刪除</td><td>當事人要求</td></tr>
            <tr><td>裝置識別碼</td><td>解除安裝或撤回同意時立即刪除</td><td>當事人要求</td></tr>
          </tbody>
        </table>
        <p className="mt-3">本公司將資料儲存於美國（Supabase Inc.、Google Cloud），並對受託方要求遵守個資法等同等級之資料保護義務。</p>
      </Section>

      <Section title="第五條（個人資料之第三方提供）">
        <p>本公司原則上不將您的個人資料提供予第三方，但下列情形除外：</p>
        <ul>
          <li>經您事先書面同意</li>
          <li>依法令規定或主管機關之合法要求</li>
          <li>為提供服務，委託下列受託業者處理，且受託業者受相同保護義務約束：</li>
        </ul>
        <table>
          <thead>
            <tr><th>受託業者</th><th>處理業務</th><th>保存期間</th></tr>
          </thead>
          <tbody>
            <tr><td>Supabase Inc.（美國）</td><td>雜湊值、風險等級儲存</td><td>委託契約終止時</td></tr>
            <tr><td>Google Cloud Platform（美國）</td><td>Cloud Run 伺服器運作</td><td>委託契約終止時</td></tr>
            <tr><td>Google LLC — Gemini API（美國）</td><td>付費用戶深度 AI 分析（僅傳送正規化文字）</td><td>分析完成後立即刪除</td></tr>
          </tbody>
        </table>
      </Section>

      <Section title="第六條（安全維護措施）">
        <ul>
          <li><strong className="text-white">單向雜湊加密：</strong>所有雜湊值採用 SHA-256 加密，無法還原原文。</li>
          <li><strong className="text-white">傳輸加密：</strong>所有伺服器通訊使用 TLS 1.2 以上之 HTTPS 加密。</li>
          <li><strong className="text-white">存取控制：</strong>個人資料存取僅限授權人員，並依最小權限原則管理。</li>
          <li><strong className="text-white">隱私設計：</strong>原始簡訊資料於架構設計層面即阻止傳送至外部伺服器。</li>
        </ul>
      </Section>

      <Section title="第七條（未成年人）">
        <p>本服務不以未滿18歲之未成年人為對象。本公司不故意蒐集未成年人之個人資料。若發現不慎蒐集相關資料，將立即刪除。未成年人之法定代理人可代為行使個資法第3條之各項權利。</p>
      </Section>

      <Section title="第八條（個人資料保護聯絡方式）">
        <ContactBox>
          <p><strong className="text-white">個人資料管理負責人</strong></p>
          <p>姓名：Jay Park</p>
          <p>公司：Vibe A</p>
          <p>電子郵件：privacy@vibeacorp.com</p>
          <p className="text-xs text-[#5A5A7A] pt-2">如有個人資料相關問題、申訴或權利行使請求，請以電子郵件聯絡。若對本公司處理結果不滿意，您可向個人資料保護委員會（pdpc.gov.tw）提出申訴。</p>
        </ContactBox>
      </Section>

      <Section title="第九條（政策修訂）">
        <p>本政策因法規或服務變更時得予修訂。重大修訂時，本公司將於生效日前<strong className="text-white">7日</strong>透過應用程式內通知或電子郵件告知。繼續使用本服務即視為同意修訂後之條款。</p>
      </Section>

      <Footer line1="生效日期：2026年4月19日" line2="Vibe A · ScamLens AI · 隱私權政策 · 適用中華民國法律" />
    </>
  )
}
