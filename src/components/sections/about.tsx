"use client";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BrutalCard } from "@/components/ui/brutal-card";
import { useLenis } from "lenis/react";

const aboutCards = [
  {
    id: "curate",
    number: "01",
    title: "CURATE",
    subtitle: "현장 이해 기반 기획력",
    detail: "수림문화재단 · 아트센터이다 · 학고재 · 안티에그",
    href: "#curate",
  },
  {
    id: "connect",
    number: "02",
    title: "CONNECT",
    subtitle: "콘텐츠 커뮤니케이션력",
    detail: "도슨트 · 전시 운영 스태프 · 교육 프로그램 보조강사 · 서포터즈",
    href: "#connect",
  },
  {
    id: "action",
    number: "03",
    title: "ACTION",
    subtitle: "프로젝트 실행력",
    detail: "블로그 운영 · 문화예술 스터디 · SNS 기관 협업 · 해외 취재",
    href: "#action",
  },
];

const careers = [
  { period: "2023 — 현재", role: "매거진 파트너 에디터", org: "안티에그" },
  { period: "2021 — 2024", role: "전략기획부 사원", org: "수림문화재단" },
  { period: "2022", role: "교육팀 에듀케이터", org: "아트센터이다" },
  { period: "2016 — 2018", role: "도슨트", org: "백범김구기념관 · KF갤러리 외" },
];

export function AboutSection() {
  const lenis = useLenis();

  const handleScroll = (href: string) => {
    lenis?.scrollTo(href, {
      offset: -80,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <section id="about" className="relative py-24 md:py-32" style={{ backgroundColor: "#F0EFEB" }}>
      <div className="absolute inset-x-0 bottom-0 h-[3px]" style={{ backgroundColor: "#756F6A" }} />
      <div className="mx-auto max-w-7xl px-6">

        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-heading font-bold text-sm px-3 py-1 border-2 border-black bg-white rounded-[4px] shadow-brutal-sm">
              00
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl">About</h2>
          </div>
        </ScrollReveal>

        {/* 소개 + 경력 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <BrutalCard className="p-8 md:p-10 h-full" color="bg-white">
              <p className="font-heading font-bold text-xs tracking-widest mb-4" style={{ color: "#756F6A" }}>
                INTRO
              </p>
              <p className="font-heading font-bold text-xl md:text-2xl leading-snug mb-6">
                문화예술 현장을 이해하여,<br />
                기획하고, 소통하고, 실행합니다.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#756F6A" }}>
                이성과 감성이 균형 잡힌 아트 커뮤니케이터입니다.
                수림문화재단 전략기획부에서 서포터즈·PM·사업담당자를 거쳐 연간 사업 기획을 총괄했고,
                아트센터이다에서 프랑스 예술가와 협업하는 국제 교육 프로그램을 운영했습니다.
              </p>
              <p className="text-base leading-relaxed mt-3" style={{ color: "#756F6A" }}>
                백범김구기념관, KF갤러리, 아뜰리에 에르메스 등에서 한·영 양어로 도슨트 활동을 이어왔으며,
                안티에그 매거진 파트너 에디터로 문화예술 콘텐츠를 기획·발행하고 있습니다.
                블로그 「아트로그」·「모데라토」를 통해 현장 취재와 글쓰기를 계속합니다.
              </p>
            </BrutalCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <BrutalCard className="p-8 h-full" color="bg-white">
              <p className="font-heading font-bold text-xs tracking-widest mb-6" style={{ color: "#756F6A" }}>
                CAREER
              </p>
              <div className="space-y-5">
                {careers.map((c, i) => (
                  <div key={i} className="flex flex-col gap-0.5 pb-4 border-b border-black/10 last:border-0 last:pb-0">
                    <span className="text-xs font-bold" style={{ color: "#756F6A" }}>{c.period}</span>
                    <span className="font-heading font-bold text-base">{c.role}</span>
                    <span className="text-sm" style={{ color: "#756F6A" }}>{c.org}</span>
                  </div>
                ))}
              </div>
            </BrutalCard>
          </ScrollReveal>
        </div>

        {/* CURATE / CONNECT / ACTION 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutCards.map((card, i) => (
            <ScrollReveal key={card.id} delay={0.1 * (i + 3)}>
              <button
                className="w-full text-left"
                onClick={() => handleScroll(card.href)}
              >
                <BrutalCard
                  className="p-8 hover:translate-y-[-4px] transition-transform duration-200"
                  color="bg-white"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-heading font-bold px-2 py-0.5 border-2 border-black rounded-[3px]"
                      style={{ backgroundColor: "#D6CD95" }}
                    >
                      {card.number}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "#756F6A" }}>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2">
                    {card.title}
                  </h3>
                  <p className="font-bold text-sm mb-3" style={{ color: "#756F6A" }}>{card.subtitle}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#756F6A" }}>{card.detail}</p>
                </BrutalCard>
              </button>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
