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
  title: "유혜승 | Story Planner Portfolio",
  description:
    "상상과 현실을 잇는 스토리 기획자 유혜승의 포트폴리오. 앨범 기획, 브랜드 기획, 오디오 드라마, 시나리오.",
  keywords: [
    "스토리 기획자",
    "콘텐츠 기획",
    "앨범 기획",
    "오디오 드라마",
    "시나리오",
    "브랜드 기획",
    "유혜승",
  ],
  openGraph: {
    title: "유혜승 | Story Planner Portfolio",
    description: "상상과 현실을 잇는 스토리 기획자",
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
