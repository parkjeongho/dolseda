const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-5">
          <a href="/security/terms"
            className="text-sm text-[#475569] hover:text-[#0F172A] transition-colors">
            이용약관
          </a>
          <span className="text-[#CBD5E1]">|</span>
          <a href="/security/privacy"
            className="text-sm text-[#475569] hover:text-[#0F172A] transition-colors">
            개인정보처리방침
          </a>
          <span className="text-[#CBD5E1]">|</span>
          <a href="mailto:vibe.factory904@gmail.com"
            className="text-sm text-[#475569] hover:text-[#0F172A] transition-colors">
            고객문의
          </a>
          <span className="text-[#CBD5E1]">|</span>
          <a href="mailto:vibe.factory904@gmail.com"
            className="text-sm text-[#475569] hover:text-[#0F172A] transition-colors">
            제휴문의
          </a>
        </div>
        <p className="text-center text-xs text-[#94A3B8]">
          © {year} Vibe A Corp. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
