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
    ko:    { title: "개인정보처리방침", updated: "2026년 6월 7일", subtitle: "시행일" },
    en:    { title: "Privacy Policy",  updated: "June 7, 2026",  subtitle: "Effective Date" },
    "zh-TW": { title: "隱私權政策",   updated: "2026年6月7日",   subtitle: "生效日期" },
  }

  const h = headerInfo[lang]

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="border-b border-[#E2E8F0] pb-12 mb-0">
        <div className="max-w-[800px] mx-auto px-6">
          <Link href="/security" className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#2563EB] transition-colors mb-8">
            <ChevronLeft size={16} /> ScamLens AI
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4AA] to-[#0088FF] flex items-center justify-center">
              <Shield size={18} className="text-white" />
            </div>
            <div>
              <div className="text-xs text-[#64748B]">ScamLens AI · Vibe A</div>
              <h1 className="text-2xl font-black tracking-tight text-[#0F172A]">{h.title}</h1>
            </div>
          </div>
          <p className="text-[#64748B] text-sm mb-6">{h.subtitle}: {h.updated}</p>

          {/* Language tabs */}
          <div className="flex gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setLang(t.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  lang === t.id
                    ? "bg-[#5B6EF5] text-white"
                    : "bg-[#F0F4FF] text-[#64748B] hover:bg-[#E8EEFF] hover:text-[#2563EB]"
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
      <h2 className="text-lg font-bold text-[#0F172A] mb-4 pb-3 border-b border-[#E2E8F0]">{title}</h2>
      <div className="space-y-3 text-[#64748B] text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_table]:w-full [&_table]:border-collapse [&_table]:rounded-xl [&_table]:overflow-hidden [&_th]:bg-[#F0F4FF] [&_th]:text-[#0F172A] [&_th]:font-semibold [&_th]:text-xs [&_th]:p-3 [&_th]:text-left [&_td]:p-3 [&_td]:border-b [&_td]:border-[#E2E8F0] [&_td]:text-xs [&_td]:text-[#475569]">
        {children}
      </div>
    </div>
  )
}

function ContactBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F8FAFF] border border-[#E2E8F0] rounded-xl p-5 space-y-1 text-[#475569] text-sm">
      {children}
    </div>
  )
}

function Footer({ line1, line2 }: { line1: string; line2: string }) {
  return (
    <div className="mt-12 pt-8 border-t border-[#E2E8F0] text-xs text-[#94A3B8]">
      <p>{line1}</p>
      <p className="mt-1">{line2}</p>
    </div>
  )
}

/* ─────────────────────────── Korean (개인정보보호법 / PIPA) ─────────────────────────── */

function PrivacyKO() {
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-5 mb-10 text-sm text-[#64748B] leading-relaxed">
        <strong className="text-[#0F172A]">핵심 원칙:</strong> ScamLens AI는 문자 원문 및 전화번호 원문을 서버에 저장하지 않습니다.
        모든 분석은 기기에서 처리되며, 서버에는 암호화된 해시값과 위험도 분류 결과만 저장됩니다.
        본 방침은 <strong className="text-[#0F172A]">개인정보 보호법(PIPA)</strong>을 준수하여 작성되었습니다.
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
            <tr><td>광고 식별자(GAID)</td><td>Google AdMob SDK 자동 수집</td><td>광고 표시 및 광고 사기 방지</td></tr>
            <tr><td>알림 내용(제목·본문)</td><td>알림 접근 권한으로 자동 수집</td><td>온디바이스 AI 스팸·피싱 분석 (분석 즉시 폐기, 서버 미전송)</td></tr>
            <tr><td>설치된 앱 목록</td><td>앱 목록 조회 권한으로 자동 수집</td><td>앱 안전성 검사(앱체크) 기능 제공 (기기 내 처리, 서버 미전송)</td></tr>
          </tbody>
        </table>
        <p className="mt-4"><strong className="text-[#0F172A]">절대 저장·전송하지 않는 정보:</strong> 문자·알림 원문(분석 즉시 폐기), 전화번호 원문, 주소, 금융정보, 위치정보</p>
      </Section>

      <Section title="제2조 (개인정보 처리 원칙)">
        <ul>
          <li><strong className="text-[#0F172A]">온디바이스 우선:</strong> 문자 분석은 사용자의 기기에서 수행되며, 원문은 기기 밖으로 전송되지 않습니다.</li>
          <li><strong className="text-[#0F172A]">최소 수집:</strong> 서비스 제공에 필수적인 최소한의 정보만 수집합니다 (개인정보 보호법 제3조 제1항).</li>
          <li><strong className="text-[#0F172A]">목적 외 사용 금지:</strong> 수집된 정보는 명시된 목적 외에 사용되지 않습니다 (개인정보 보호법 제3조 제2항).</li>
          <li><strong className="text-[#0F172A]">재난안전문자 완전 제외:</strong> 국가 재난안전문자는 탐지 대상에서 제외되며 데이터가 수집되지 않습니다.</li>
        </ul>
        <p className="mt-5 font-semibold text-[#0F172A]">앱 접근 권한 및 AI 분석 처리 흐름</p>
        <ul className="mt-2">
          <li><strong className="text-[#0F172A]">알림 접근 권한(NotificationListenerService):</strong> 앱은 안드로이드 알림 접근 권한을 통해 SMS·카카오톡·WhatsApp·LINE 등 메시지 앱의 알림 제목과 본문을 읽습니다. 읽은 내용은 즉시 온디바이스 AI가 분석하며, 원문은 분석 완료 즉시 폐기됩니다. 서버에는 해시값과 위험도 분류 결과만 전송됩니다.</li>
          <li><strong className="text-[#0F172A]">앱 목록 조회 권한(앱체크 기능):</strong> 앱체크 기능 사용 시 설치된 앱 목록을 기기 내에서 조회합니다. 앱 목록은 기기 내에서만 분석되며 서버로 전송되지 않습니다.</li>
          <li><strong className="text-[#0F172A]">AI 분석 처리 흐름:</strong> ① 알림 수신 → ② 온디바이스 TFLite 모델 1차 분석 → ③ 위험도 점수 20점 이상 시 Cloud Run으로 정규화 텍스트 전송(발신자 정보 제거) → ④ 점수 20~69점 구간의 프리미엄 사용자에 한해 Gemini AI 심층 분석 요청(정규화 텍스트만 전송, 분석 즉시 삭제)</li>
          <li><strong className="text-[#0F172A]">재부팅 자동 실행 및 백그라운드 상시 실행:</strong> 앱은 기기 재부팅 후 자동으로 시작되어 메시지 알림을 상시 모니터링합니다. 이는 실시간 보호 기능 제공을 위해 필요하며, 설정에서 알림 접근 권한을 해제하면 모니터링이 즉시 중단됩니다.</li>
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
            <tr><td>Google LLC (AdMob)</td><td>광고 표시, 광고 성과 측정, 광고 사기 방지</td><td>위탁 계약 종료 시</td></tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs">Gemini API로 전송되는 텍스트는 발신자 정보가 제거된 정규화 텍스트이며, Google DPA에 따라 AI 학습 데이터로 사용되지 않습니다. AdMob은 광고 식별자(GAID)를 수집하며, 기기 설정에서 광고 ID를 초기화하거나 맞춤 광고를 거부할 수 있습니다.</p>
      </Section>

      <Section title="제6조 (정보주체의 권리)">
        <p>사용자는 언제든지 아래의 권리를 행사할 수 있으며, 요청일로부터 <strong className="text-[#0F172A]">10일 이내</strong>에 처리합니다.</p>
        <ul>
          <li>개인정보 열람 요청 (개인정보 보호법 제35조)</li>
          <li>개인정보 정정·삭제 요청 (제36조)</li>
          <li>개인정보 처리 정지 요청 (제37조)</li>
          <li>동의 철회</li>
        </ul>
        <p>권리 행사는 앱 내 설정 메뉴 또는 개인정보 보호책임자 이메일로 요청하십시오. 앱 삭제 시 기기 내 데이터는 즉시 삭제되며, 서버 데이터 삭제는 이메일로 요청하실 수 있습니다.</p>
        <p className="mt-2">권리 행사에 관한 불만이 있으신 경우 <strong className="text-[#0F172A]">개인정보보호위원회</strong> (privacy.go.kr / 국번없이 182)에 신고하실 수 있습니다.</p>
      </Section>

      <Section title="제7조 (개인정보의 안전성 확보 조치)">
        <ul>
          <li><strong className="text-[#0F172A]">단방향 암호화:</strong> 수집되는 모든 해시값은 SHA-256으로 암호화되어 원문 복원이 불가능합니다.</li>
          <li><strong className="text-[#0F172A]">전송 구간 암호화:</strong> 모든 서버 통신은 TLS 1.2 이상의 HTTPS로 암호화됩니다.</li>
          <li><strong className="text-[#0F172A]">접근 제한:</strong> 개인정보 처리 시스템에 대한 접근 권한을 업무 담당자로 최소화합니다.</li>
          <li><strong className="text-[#0F172A]">온디바이스 설계:</strong> 원본 데이터 서버 전송 자체를 아키텍처 설계 단계에서 차단합니다.</li>
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
            <tr><td>미국</td><td>Google LLC (AdMob)</td><td>광고 식별자(GAID), 기기 정보</td><td>광고 표시</td></tr>
          </tbody>
        </table>
      </Section>

      <Section title="제9조 (만 14세 미만 아동)">
        <p>ScamLens AI는 만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다. 만 14세 미만 아동은 법정대리인의 동의를 얻어야 서비스를 이용할 수 있습니다 (개인정보 보호법 제22조의2). 만 14세 미만 아동의 정보가 수집된 사실이 확인될 경우 즉시 삭제합니다.</p>
      </Section>

      <Section title="제10조 (개인정보 보호책임자)">
        <ContactBox>
          <p><strong className="text-[#0F172A]">개인정보 보호책임자</strong></p>
          <p>이름: Jay Park</p>
          <p>소속: Vibe A</p>
          <p>이메일: privacy@vibeacorp.com</p>
          <p className="text-xs text-[#94A3B8] pt-2">개인정보 관련 문의, 불만, 피해 구제 요청은 위 이메일로 접수하실 수 있습니다. 처리 결과가 만족스럽지 않으실 경우 개인정보보호위원회(privacy.go.kr)에 심의를 신청하실 수 있습니다.</p>
        </ContactBox>
      </Section>

      <Section title="제11조 (방침 변경)">
        <p>본 방침은 법령·서비스 변경 시 개정될 수 있습니다. 중요한 변경이 있을 경우 시행 <strong className="text-[#0F172A]">7일 전</strong>에 앱 내 공지 및 이메일로 안내합니다.</p>
      </Section>

      <Footer line1="시행일: 2026년 6월 7일" line2="Vibe A · ScamLens AI · 개인정보처리방침" />
    </>
  )
}

/* ─────────────────────────── English / California (CCPA) ─────────────────────────── */

function PrivacyEN() {
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-5 mb-10 text-sm text-[#64748B] leading-relaxed">
        <strong className="text-[#0F172A]">Privacy-First by Design.</strong> ScamLens AI never stores the raw text of your messages or your raw phone number. All analysis runs on your device; only cryptographic hashes and risk-level classifications leave it.
        This Policy is governed by the laws of the <strong className="text-[#0F172A]">State of California, United States</strong> and complies with the <strong className="text-[#0F172A]">California Consumer Privacy Act (CCPA/CPRA)</strong> and CalOPPA.
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
            <tr><td>Advertising ID (GAID)</td><td>Google AdMob SDK, automatic</td><td>Ad delivery and fraud prevention</td></tr>
            <tr><td>Notification content (title &amp; body)</td><td>Notification access permission, automatic</td><td>On-device AI spam/phishing analysis (discarded immediately after analysis, never sent to server)</td></tr>
            <tr><td>Installed app list</td><td>App list permission, automatic</td><td>App Safety Check feature (processed on-device only, never sent to server)</td></tr>
          </tbody>
        </table>
        <p className="mt-4"><strong className="text-[#0F172A]">Data we never store or transmit:</strong> raw message/notification text (discarded immediately after analysis), raw phone numbers, precise geolocation, financial account details, Social Security numbers.</p>
      </Section>

      <Section title="2. How We Use Information">
        <ul>
          <li>To detect spam, phishing, and smishing messages</li>
          <li>To maintain and improve community-driven blocklists</li>
          <li>To provide and improve the Service and fix bugs</li>
          <li>To process subscriptions and authenticate users</li>
          <li>To comply with legal obligations</li>
        </ul>
        <p className="mt-2">We do <strong className="text-[#0F172A]">not</strong> use your data for targeted advertising. We do <strong className="text-[#0F172A]">not</strong> sell, rent, or share your personal information with third parties for their own marketing purposes.</p>
        <p className="mt-5 font-semibold text-[#0F172A]">App Permissions &amp; AI Analysis Flow</p>
        <ul className="mt-2">
          <li><strong className="text-[#0F172A]">Notification Access (NotificationListenerService):</strong> The app uses Android&apos;s notification access permission to read the title and body of notifications from SMS, KakaoTalk, WhatsApp, LINE, and other messaging apps. Notification content is immediately processed by the on-device AI and the raw text is discarded upon completion. Only hashes and risk classifications are transmitted to our servers.</li>
          <li><strong className="text-[#0F172A]">App List Permission (App Safety Check):</strong> When you use the App Safety Check feature, the app reads your list of installed apps entirely on-device. This data is never transmitted to our servers.</li>
          <li><strong className="text-[#0F172A]">AI Analysis Flow:</strong> ① Notification received → ② On-device TFLite model performs initial analysis → ③ If risk score ≥ 20, normalized text (sender info stripped) is sent to Cloud Run → ④ For premium users with risk scores 20–69, normalized text is sent to Gemini AI for deep analysis, then immediately deleted.</li>
          <li><strong className="text-[#0F172A]">Auto-Start &amp; Background Operation:</strong> The app starts automatically after device reboot and runs persistently in the background to monitor incoming message notifications. You can stop this monitoring at any time by revoking the notification access permission in device settings.</li>
        </ul>
      </Section>

      <Section title="3. Disclosure of Information">
        <p>We share data only in the following limited circumstances:</p>
        <ul>
          <li><strong className="text-[#0F172A]">Service providers (processors):</strong> Supabase Inc. (hash/risk storage), Google Cloud Platform (Cloud Run AI), Google Gemini API (normalized text only — deleted after analysis per DPA), Google AdMob (advertising ID and device info for ad delivery and fraud prevention). These parties are contractually prohibited from using your data for any other purpose. You may reset your Advertising ID or opt out of personalized ads in your device settings.</li>
          <li><strong className="text-[#0F172A]">Legal process:</strong> We may disclose data when required by valid court order, subpoena, or applicable law. We will notify you unless prohibited by law.</li>
          <li><strong className="text-[#0F172A]">Business transfers:</strong> In a merger or acquisition, your data may transfer to the successor entity subject to the same privacy commitments.</li>
        </ul>
      </Section>

      <Section title="4. California Privacy Rights (CCPA / CPRA)">
        <p>If you are a California resident, you have the following rights:</p>
        <ul>
          <li><strong className="text-[#0F172A]">Right to Know:</strong> You may request disclosure of the categories and specific pieces of personal information we have collected about you, the sources, our business purpose, and the categories of third parties with whom we share it.</li>
          <li><strong className="text-[#0F172A]">Right to Delete:</strong> You may request deletion of personal information we have collected, subject to certain exceptions (e.g., legal obligations).</li>
          <li><strong className="text-[#0F172A]">Right to Correct:</strong> You may request correction of inaccurate personal information.</li>
          <li><strong className="text-[#0F172A]">Right to Opt-Out of Sale or Sharing:</strong> We do <strong className="text-[#0F172A]">not</strong> sell or share your personal information for cross-context behavioral advertising. No opt-out is needed, but you may request confirmation at any time.</li>
          <li><strong className="text-[#0F172A]">Right to Limit Sensitive Personal Information:</strong> We do not use sensitive personal information beyond what is necessary to provide the Service.</li>
          <li><strong className="text-[#0F172A]">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of these rights. We will not deny Service, charge different prices, or provide a different quality of service.</li>
        </ul>
        <p className="mt-3">To exercise your rights, contact us at <strong className="text-[#0F172A]">privacy@vibeacorp.com</strong>. We will respond within <strong className="text-[#0F172A]">45 days</strong> (extendable by an additional 45 days with notice). We may verify your identity before fulfilling a request. You may designate an authorized agent to submit requests on your behalf.</p>
        <p className="mt-2 text-xs">California&rsquo;s &ldquo;Shine the Light&rdquo; law (Civil Code § 1798.83) entitles California residents to request, once per calendar year, information about disclosures to third parties for direct marketing purposes. We do not make such disclosures.</p>
      </Section>

      <Section title="5. &ldquo;Do Not Sell or Share My Personal Information&rdquo;">
        <p>We do <strong className="text-[#0F172A]">not</strong> sell or share personal information as defined under CCPA/CPRA. We do not engage in cross-context behavioral advertising. If you have questions, email <strong className="text-[#0F172A]">privacy@vibeacorp.com</strong>.</p>
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
            <tr><td>Advertising ID (GAID)</td><td>Managed by Google AdMob per its data retention policy; resettable in device settings</td></tr>
          </tbody>
        </table>
      </Section>

      <Section title="7. International Data Transfers">
        <p>If you use the Service outside the United States, your information may be transferred to and processed in the United States, where data protection laws may differ from those in your jurisdiction. By using the Service, you acknowledge this transfer. We implement contractual safeguards (Standard Contractual Clauses where applicable) to protect transferred data.</p>
      </Section>

      <Section title="8. Children's Privacy (COPPA)">
        <p>The Service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn that we have inadvertently collected such information, we will delete it promptly. If you believe we have collected information from a child under 13, contact us at <strong className="text-[#0F172A]">privacy@vibeacorp.com</strong>.</p>
      </Section>

      <Section title="9. Security">
        <ul>
          <li><strong className="text-[#0F172A]">Irreversible hashing:</strong> SHA-256 one-way hashes — raw data cannot be reconstructed.</li>
          <li><strong className="text-[#0F172A]">Transit encryption:</strong> All communications use TLS 1.2 or higher.</li>
          <li><strong className="text-[#0F172A]">Access controls:</strong> Personal data access is restricted to authorized personnel on a need-to-know basis.</li>
          <li><strong className="text-[#0F172A]">Privacy by design:</strong> Raw message content is never transmitted beyond the device — enforced at the architecture level.</li>
        </ul>
        <p className="mt-2 text-xs">No method of transmission or storage is 100% secure. In the event of a data breach affecting California residents, we will notify affected individuals and the California Attorney General as required by Civil Code § 1798.82.</p>
      </Section>

      <Section title="10. Your Privacy Contact">
        <ContactBox>
          <p><strong className="text-[#0F172A]">Privacy Contact</strong></p>
          <p>Vibe A</p>
          <p>Email: privacy@vibeacorp.com</p>
          <p className="text-xs text-[#94A3B8] pt-2">For privacy-related inquiries, rights requests, or complaints. We respond within 45 days for CCPA requests. California residents may also contact the California Privacy Protection Agency (cppa.ca.gov) or the California Attorney General.</p>
        </ContactBox>
      </Section>

      <Section title="11. Changes to This Policy">
        <p>We may update this Policy as laws or the Service change. For material changes, we will provide at least <strong className="text-[#0F172A]">30 days&rsquo; notice</strong> via in-app notification or email before the change takes effect. Continued use after the effective date constitutes acceptance. If you do not agree, please discontinue use and contact us to delete your account.</p>
      </Section>

      <Footer line1="Effective Date: June 7, 2026" line2="Vibe A · ScamLens AI · Privacy Policy · California Law" />
    </>
  )
}

/* ─────────────────────────── Traditional Chinese / Taiwan (個人資料保護法 PDPA) ─────────────────────────── */

function PrivacyTW() {
  return (
    <>
      <div className="bg-[rgba(91,110,245,0.06)] border border-[rgba(91,110,245,0.2)] rounded-xl p-5 mb-10 text-sm text-[#64748B] leading-relaxed">
        <strong className="text-[#0F172A]">核心原則：</strong>ScamLens AI 不在伺服器儲存您的原始簡訊內容或電話號碼。所有分析均在您的裝置上執行，伺服器僅保存加密雜湊值及風險等級分類結果。
        本隱私權政策依據<strong className="text-[#0F172A]">中華民國個人資料保護法（個資法）</strong>制定。
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
            <tr><td>廣告識別碼（GAID）</td><td>Google AdMob SDK 自動蒐集</td><td>廣告投放及廣告詐欺防範</td></tr>
            <tr><td>通知內容（標題·內文）</td><td>通知存取權限自動蒐集</td><td>裝置端 AI 詐騙訊息分析（分析後立即銷毀，不傳送至伺服器）</td></tr>
            <tr><td>已安裝應用程式清單</td><td>應用程式清單存取權限自動蒐集</td><td>應用程式安全檢查功能（僅限裝置端處理，不傳送至伺服器）</td></tr>
          </tbody>
        </table>
        <p className="mt-4"><strong className="text-[#0F172A]">絕不儲存或傳送：</strong>簡訊·通知原文（分析後立即銷毀）、電話號碼原碼、地址、金融帳戶資訊</p>
      </Section>

      <Section title="第二條（個人資料處理原則）">
        <ul>
          <li><strong className="text-[#0F172A]">裝置端優先：</strong>簡訊分析於使用者裝置執行，原文不傳送至外部伺服器。</li>
          <li><strong className="text-[#0F172A]">最小蒐集：</strong>僅蒐集服務所必要之最小限度資料（個資法第5條）。</li>
          <li><strong className="text-[#0F172A]">目的限制：</strong>蒐集之資料不得逾越蒐集目的之必要範圍（個資法第5條）。</li>
          <li><strong className="text-[#0F172A]">災防簡訊豁免：</strong>國家災防緊急通報簡訊完全排除於偵測範圍外，不蒐集任何資料。</li>
        </ul>
        <p className="mt-5 font-semibold text-[#0F172A]">應用程式存取權限及 AI 分析處理流程</p>
        <ul className="mt-2">
          <li><strong className="text-[#0F172A]">通知存取權限（NotificationListenerService）：</strong>應用程式透過 Android 通知存取權限讀取 SMS、KakaoTalk、WhatsApp、LINE 等訊息應用程式之通知標題及內文。讀取之內容隨即由裝置端 AI 進行分析，原始內容於分析完成後立即銷毀。僅雜湊值及風險等級分類結果傳送至伺服器。</li>
          <li><strong className="text-[#0F172A]">應用程式清單存取權限（應用程式安全檢查）：</strong>使用應用程式安全檢查功能時，應用程式於裝置端讀取已安裝之應用程式清單。此資料僅於裝置端分析，不傳送至伺服器。</li>
          <li><strong className="text-[#0F172A]">AI 分析處理流程：</strong>① 收到通知 → ② 裝置端 TFLite 模型初步分析 → ③ 風險分數 ≥ 20 時，將正規化文字（已移除發送方資訊）傳送至 Cloud Run → ④ 付費用戶且分數介於 20～69 時，正規化文字傳送至 Gemini AI 進行深度分析，分析後立即刪除。</li>
          <li><strong className="text-[#0F172A]">開機自動啟動及背景常駐執行：</strong>應用程式於裝置重新開機後自動啟動，並持續於背景監控傳入之訊息通知。您可隨時於裝置設定中撤銷通知存取權限以停止監控。</li>
        </ul>
      </Section>

      <Section title="第三條（當事人之權利）">
        <p>依個資法第3條，您得隨時向本公司行使下列權利，本公司將於<strong className="text-[#0F172A]">15個工作日內</strong>回覆：</p>
        <ul>
          <li><strong className="text-[#0F172A]">查詢或閱覽：</strong>您可要求查詢本公司保有之您的個人資料（個資法第3條第1款）。</li>
          <li><strong className="text-[#0F172A]">製給複製本：</strong>您可要求本公司提供您個人資料之複製（個資法第3條第1款）。</li>
          <li><strong className="text-[#0F172A]">補充或更正：</strong>您可要求更正不正確之個人資料（個資法第3條第2款）。</li>
          <li><strong className="text-[#0F172A]">停止蒐集、處理或利用：</strong>您可要求停止蒐集、處理或利用您的個人資料（個資法第3條第4款）。</li>
          <li><strong className="text-[#0F172A]">刪除：</strong>您可要求刪除本公司保有之您的個人資料（個資法第3條第5款）。</li>
        </ul>
        <p className="mt-2">請將權利行使請求寄至：<strong className="text-[#0F172A]">privacy@vibeacorp.com</strong></p>
        <p className="mt-2">如對本公司之處理結果不滿意，您可向<strong className="text-[#0F172A]">個人資料保護委員會</strong>（pdpc.gov.tw）提出申訴，或依個資法第51條提起訴訟。</p>
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
            <tr><td>廣告識別碼（GAID）</td><td>依 AdMob 政策管理，可於裝置設定重設</td><td>廣告服務提供</td></tr>
          </tbody>
        </table>
        <p className="mt-3">本公司將資料儲存於美國（Supabase Inc.、Google Cloud、Google AdMob），並對受託方要求遵守個資法等同等級之資料保護義務。</p>
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
            <tr><td>Google LLC — AdMob（美國）</td><td>廣告投放、廣告效果評估、廣告詐欺防範</td><td>依 AdMob 資料保留政策，可於裝置設定重設</td></tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs">Gemini API 僅接收已移除發送方資訊之正規化文字，依 Google DPA 不用於 AI 訓練。AdMob 蒐集廣告識別碼（GAID），您可於裝置設定中重設廣告 ID 或拒絕個人化廣告。</p>
      </Section>

      <Section title="第六條（安全維護措施）">
        <ul>
          <li><strong className="text-[#0F172A]">單向雜湊加密：</strong>所有雜湊值採用 SHA-256 加密，無法還原原文。</li>
          <li><strong className="text-[#0F172A]">傳輸加密：</strong>所有伺服器通訊使用 TLS 1.2 以上之 HTTPS 加密。</li>
          <li><strong className="text-[#0F172A]">存取控制：</strong>個人資料存取僅限授權人員，並依最小權限原則管理。</li>
          <li><strong className="text-[#0F172A]">隱私設計：</strong>原始簡訊資料於架構設計層面即阻止傳送至外部伺服器。</li>
        </ul>
      </Section>

      <Section title="第七條（未成年人）">
        <p>本服務不以未滿18歲之未成年人為對象。本公司不故意蒐集未成年人之個人資料。若發現不慎蒐集相關資料，將立即刪除。未成年人之法定代理人可代為行使個資法第3條之各項權利。</p>
      </Section>

      <Section title="第八條（個人資料保護聯絡方式）">
        <ContactBox>
          <p><strong className="text-[#0F172A]">個人資料管理負責人</strong></p>
          <p>姓名：Jay Park</p>
          <p>公司：Vibe A</p>
          <p>電子郵件：privacy@vibeacorp.com</p>
          <p className="text-xs text-[#94A3B8] pt-2">如有個人資料相關問題、申訴或權利行使請求，請以電子郵件聯絡。若對本公司處理結果不滿意，您可向個人資料保護委員會（pdpc.gov.tw）提出申訴。</p>
        </ContactBox>
      </Section>

      <Section title="第九條（政策修訂）">
        <p>本政策因法規或服務變更時得予修訂。重大修訂時，本公司將於生效日前<strong className="text-[#0F172A]">7日</strong>透過應用程式內通知或電子郵件告知。繼續使用本服務即視為同意修訂後之條款。</p>
      </Section>

      <Footer line1="生效日期：2026年6月7日" line2="Vibe A · ScamLens AI · 隱私權政策 · 適用中華民國法律" />
    </>
  )
}
