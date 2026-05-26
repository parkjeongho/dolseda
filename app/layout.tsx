import type { Metadata, Viewport } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { LanguageProvider } from "@/components/LanguageProvider"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5B6EF5",
}

export const metadata: Metadata = {
  title: {
    default: "Vibe A — AI로 세상을 바꾸다",
    template: "%s | Vibe A",
  },
  description:
    "Vibe A는 AI 기술을 바탕으로 보안, 엔터테인먼트, 온디맨드, 게임 분야에서 혁신적인 서비스를 만드는 글로벌 테크 기업입니다.",
  keywords: ["Vibe A Corp", "AI", "스팸", "보안", "ScamLens AI", "스미싱", "피싱"],
  authors: [{ name: "Vibe A" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "Vibe A",
    title: "Vibe A — AI로 세상을 바꾸다",
    description: "AI 기술로 보안, 엔터테인먼트, 온디맨드, 게임 분야의 전에 없던 서비스를 만드는 글로벌 테크 기업",
  },
  twitter: { card: "summary_large_image" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-[#07070F] text-[#F0F0FF] antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
