import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans_KR } from "next/font/google";
import { SmoothScrollProvider } from "@/providers/smooth-scroll";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "효빈 | Art Communicator Portfolio",
  description:
    "당신이 사랑할 문화예술을 전하는 아트 커뮤니케이터 효빈의 포트폴리오. 전시 기획, 도슨트, 문화예술 콘텐츠.",
  keywords: [
    "아트 커뮤니케이터",
    "문화예술 기획",
    "전시 기획",
    "도슨트",
    "콘텐츠 기획",
    "모효빈",
    "효빈",
  ],
  openGraph: {
    title: "효빈 | Art Communicator Portfolio",
    description: "당신이 사랑할 문화예술을 전하는 아트 커뮤니케이터",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${spaceGrotesk.variable} ${notoSansKR.variable} antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
