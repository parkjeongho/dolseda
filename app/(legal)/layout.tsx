import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: { default: "ScamLens AI", template: "%s | ScamLens AI" },
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-[#0F172A] antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}
