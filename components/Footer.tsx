import Link from "next/link"

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] pt-16 pb-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 font-bold text-lg tracking-tight text-[#0F172A] mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] flex items-center justify-center text-white font-black text-sm">
                V
              </div>
              Vibe A
            </Link>
            <p className="text-[#475569] text-sm leading-relaxed max-w-[280px] mt-4">
              AI 기술을 통해 보안, 엔터테인먼트, 온디맨드, 게임 분야에서
              전에 없던 서비스를 만드는 글로벌 테크 기업.
            </p>
            <p className="text-[#94A3B8] text-xs mt-4">Founded 2023 · Jay Park</p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#0F172A] mb-4">서비스</p>
            <ul className="space-y-3">
              <li><Link href="/security" className="text-sm text-[#475569] hover:text-[#0F172A] transition-colors">ScamLens AI 🟢</Link></li>
              <li><span className="text-sm text-[#94A3B8]">오늘뉴스퀴즈 (예정)</span></li>
              <li><span className="text-sm text-[#94A3B8]">Project A (예정)</span></li>
              <li><span className="text-sm text-[#94A3B8]">Project B (예정)</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#0F172A] mb-4">회사</p>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-[#475569] hover:text-[#0F172A] transition-colors">회사소개</Link></li>
              <li><Link href="/about#team" className="text-sm text-[#475569] hover:text-[#0F172A] transition-colors">팀</Link></li>
              <li><Link href="/#mission" className="text-sm text-[#475569] hover:text-[#0F172A] transition-colors">미션</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#0F172A] mb-4">법적 고지</p>
            <ul className="space-y-3">
              <li><Link href="/security/privacy" className="text-sm text-[#475569] hover:text-[#0F172A] transition-colors">개인정보처리방침</Link></li>
              <li><Link href="/security/terms" className="text-sm text-[#475569] hover:text-[#0F172A] transition-colors">이용약관</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-8 border-t border-[#E2E8F0]">
          <span className="text-[#94A3B8] text-xs">© {year} Vibe A All rights reserved.</span>
          <span className="text-[#94A3B8] text-xs">Vibe A · AI-Powered Services</span>
        </div>
      </div>
    </footer>
  )
}
