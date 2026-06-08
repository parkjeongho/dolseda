"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, UserX, Smartphone, Mail, Clock, ShieldCheck } from "lucide-react"

type Lang = "ko" | "en" | "zh-TW"

export default function DeleteAccountPage() {
  const [lang, setLang] = useState<Lang>("ko")

  const tabs: { id: Lang; label: string }[] = [
    { id: "ko", label: "한국어" },
    { id: "en", label: "English" },
    { id: "zh-TW", label: "繁體中文" },
  ]

  const content: Record<Lang, {
    title: string
    subtitle: string
    contactTitle: string
    steps: { icon: React.ReactNode; heading: string; body: string }[]
    dataTitle: string
    dataItems: string[]
    timelineTitle: string
    timelineItems: { label: string; desc: string }[]
    contactBody: string
    contactBtn: string
    note: string
  }> = {
    ko: {
      title: "계정 삭제 안내",
      subtitle: "스켐렌즈 AI 계정 삭제 방법 및 처리 절차를 안내합니다.",
      steps: [
        {
          icon: <Smartphone size={18} className="text-[#5B6EF5]" />,
          heading: "앱에서 직접 탈퇴",
          body: "앱 하단 탭 → 설정 → 로그인된 상태에서 하단 '로그아웃' 버튼 아래 '회원탈퇴' 링크를 탭합니다.",
        },
        {
          icon: <Mail size={18} className="text-[#5B6EF5]" />,
          heading: "이메일 문의로 탈퇴",
          body: "앱 접근이 어려우신 경우 아래 이메일로 탈퇴 요청을 보내주세요. 계정 확인 후 처리해 드립니다.",
        },
      ],
      dataTitle: "삭제되는 데이터",
      dataItems: [
        "계정 정보 (이메일, 이름)",
        "스팸 분석 기록",
        "앱 설정 및 메신저 보호 설정",
        "가족 보호 연결 정보",
      ],
      timelineTitle: "처리 일정",
      timelineItems: [
        { label: "탈퇴 신청", desc: "신청 즉시 계정 접근이 비활성화됩니다." },
        { label: "15일 대기", desc: "탈퇴 신청 철회를 위한 유예 기간입니다. 이 기간 내에 재로그인 시 탈퇴가 취소됩니다." },
        { label: "완전 삭제", desc: "15일 경과 후 계정 및 모든 관련 데이터가 영구적으로 삭제됩니다." },
      ],
      contactTitle: "이메일로 탈퇴 요청",
      contactBody: "앱 내 탈퇴가 어려우신 경우 아래 이메일로 문의해 주세요.\n계정 확인 절차 후 1~3 영업일 내에 처리해 드립니다.",
      contactBtn: "Vibe.factory904@gmail.com",
      note: "구독 중인 플랜이 있는 경우, 탈퇴 신청 후에도 현재 결제 기간이 끝날 때까지 서비스를 이용하실 수 있습니다. 이후 구독은 자동으로 해지됩니다.",
    },
    en: {
      title: "Account Deletion",
      subtitle: "Learn how to delete your ScamLens AI account and what happens to your data.",
      steps: [
        {
          icon: <Smartphone size={18} className="text-[#5B6EF5]" />,
          heading: "Delete from the app",
          body: "Go to the bottom tab → Settings → scroll to the bottom while signed in → tap 'Delete Account' below the Sign Out button.",
        },
        {
          icon: <Mail size={18} className="text-[#5B6EF5]" />,
          heading: "Request by email",
          body: "If you can't access the app, send a deletion request to the email below. We'll verify your account and process your request.",
        },
      ],
      dataTitle: "Data that will be deleted",
      dataItems: [
        "Account information (email, name)",
        "Spam analysis history",
        "App settings and messenger protection settings",
        "Family protection connection data",
      ],
      timelineTitle: "Deletion Timeline",
      timelineItems: [
        { label: "Request submitted", desc: "Account access is deactivated immediately." },
        { label: "15-day grace period", desc: "You can cancel the deletion by signing back in within 15 days." },
        { label: "Permanent deletion", desc: "After 15 days, your account and all associated data are permanently deleted." },
      ],
      contactTitle: "Request deletion by email",
      contactBody: "If you're unable to delete your account from within the app, contact us at the email below.\nWe'll process your request within 1–3 business days after verifying your identity.",
      contactBtn: "Vibe.factory904@gmail.com",
      note: "If you have an active subscription, you may continue using the service until the end of the current billing period. Your subscription will be automatically cancelled after that.",
    },
    "zh-TW": {
      title: "帳號刪除說明",
      subtitle: "了解如何刪除您的 ScamLens AI 帳號，以及資料的處理方式。",
      steps: [
        {
          icon: <Smartphone size={18} className="text-[#5B6EF5]" />,
          heading: "從應用程式刪除",
          body: "進入應用程式底部分頁 → 設定 → 在登入狀態下滑至最底部 → 點選「登出」按鈕下方的「刪除帳號」連結。",
        },
        {
          icon: <Mail size={18} className="text-[#5B6EF5]" />,
          heading: "透過電子郵件申請",
          body: "若無法使用應用程式，請傳送刪除申請至下方電子郵件。經帳號確認後，我們將為您處理。",
        },
      ],
      dataTitle: "將被刪除的資料",
      dataItems: [
        "帳號資訊（電子郵件、姓名）",
        "垃圾訊息分析記錄",
        "應用程式設定及通訊軟體保護設定",
        "家庭保護連結資訊",
      ],
      timelineTitle: "處理時程",
      timelineItems: [
        { label: "申請提交", desc: "申請後帳號存取將立即停用。" },
        { label: "15 天緩衝期", desc: "緩衝期內重新登入即可取消刪除申請。" },
        { label: "永久刪除", desc: "15 天後，帳號及所有相關資料將被永久刪除。" },
      ],
      contactTitle: "透過電子郵件申請刪除",
      contactBody: "若無法在應用程式內刪除帳號，請透過下方電子郵件聯繫我們。\n完成身份驗證後，我們將於 1–3 個工作天內為您處理。",
      contactBtn: "Vibe.factory904@gmail.com",
      note: "若您目前有有效訂閱，申請刪除後仍可使用服務至本期結束。訂閱將於屆時自動取消。",
    },
  }

  const c = content[lang]

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Header */}
      <div className="border-b border-[#E2E8F0] pb-12 mb-0">
        <div className="max-w-[780px] mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#2563EB] transition-colors mb-8"
          >
            <ChevronLeft size={16} /> ScamLens AI
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EF4444] to-[#F97316] flex items-center justify-center">
              <UserX size={18} className="text-white" />
            </div>
            <div>
              <div className="text-xs text-[#64748B]">ScamLens AI · Vibe A</div>
              <h1 className="text-2xl font-black tracking-tight text-[#0F172A]">{c.title}</h1>
            </div>
          </div>
          <p className="text-[#64748B] text-sm mb-6">{c.subtitle}</p>

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
      <div className="max-w-[780px] mx-auto px-6 pt-12 space-y-12">

        {/* How to delete */}
        <section>
          <div className="space-y-4">
            {c.steps.map((step, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border border-[#E2E8F0] bg-[#FAFBFF]">
                <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] flex items-center justify-center shrink-0 mt-0.5">
                  {step.icon}
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] text-[15px] mb-1">{step.heading}</p>
                  <p className="text-sm text-[#475569] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data deletion */}
        <section>
          <h2 className="text-base font-bold text-[#0F172A] mb-4 flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#5B6EF5]" />
            {c.dataTitle}
          </h2>
          <ul className="space-y-2">
            {c.dataItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-[#475569]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-base font-bold text-[#0F172A] mb-5 flex items-center gap-2">
            <Clock size={16} className="text-[#5B6EF5]" />
            {c.timelineTitle}
          </h2>
          <div className="relative">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-[#E2E8F0]" />
            <div className="space-y-6">
              {c.timelineItems.map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-8 h-8 rounded-full bg-[#EEF2FF] border-2 border-[#5B6EF5] flex items-center justify-center shrink-0 z-10">
                    <span className="text-xs font-bold text-[#5B6EF5]">{i + 1}</span>
                  </div>
                  <div className="pt-1">
                    <p className="font-semibold text-[#0F172A] text-sm mb-0.5">{item.label}</p>
                    <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium note */}
        <div className="flex gap-3 p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A]">
          <span className="text-lg shrink-0 mt-0.5">💳</span>
          <p className="text-sm text-[#92400E] leading-relaxed">{c.note}</p>
        </div>

        {/* Contact */}
        <section className="border border-[#E2E8F0] rounded-2xl p-6 bg-[#FAFBFF]">
          <h2 className="text-base font-bold text-[#0F172A] mb-3 flex items-center gap-2">
            <Mail size={16} className="text-[#5B6EF5]" />
            {c.contactTitle}
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed whitespace-pre-line mb-5">{c.contactBody}</p>
          <a
            href="mailto:Vibe.factory904@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5B6EF5] text-white text-sm font-semibold hover:bg-[#4F63E3] transition-colors"
          >
            <Mail size={14} />
            {c.contactBtn}
          </a>
        </section>

      </div>
    </div>
  )
}
