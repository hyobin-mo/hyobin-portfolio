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
    detail: "수림문화재단 · 아트센터이다 · 학고재",
    href: "#curate",
  },
  {
    id: "connect",
    number: "02",
    title: "CONNECT",
    subtitle: "콘텐츠 커뮤니케이션 능력",
    detail: "도슨트 · 전시 운영 스태프 · 교육 프로그램 보조강사",
    href: "#connect",
  },
  {
    id: "action",
    number: "03",
    title: "COOPERATE",
    subtitle: "함께 만들어 가는 협업력",
    detail: "블로그 운영 · 안티에그 · B2B협업",
    href: "#action",
  },
];

const education = [
  { period: "2022.3. — 현재", org: "홍익대학교 미술대학원", role: "예술기획 전공 (석사과정)" },
  { period: "2013.2. — 2018.2.", org: "숙명여자대학교", role: "역사문화학 전공" },
];

const work = [
  { period: "2025.12. — 현재", role: "매거진 파트너 에디터", org: "안티에그" },
  { period: "2019.12. — 2020.2.", role: "교육팀 팀원", org: "(주)아트센터이다" },
  { period: "2019.11. — 2019.12.", role: "운영지원팀 사원", org: "(주)엔비전스" },
  { period: "2019.1. — 2019.10.", role: "기획전략부 사원", org: "(재)수림문화재단" },
  { period: "2018.11. — 2019.1.", role: "전시팀 인턴", org: "학고재 갤러리" },
];

const badgeStyle = { backgroundColor: "#756F6A" };

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
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />
      <div className="mx-auto max-w-7xl px-6">

        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-heading font-bold text-sm px-3 py-1 border-2 border-black rounded-[4px] shadow-brutal-sm" style={{ ...badgeStyle, color: "white" }}>
              00
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-black">ABOUT</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <BrutalCard className="p-8 md:p-10 h-full" color="bg-white">
              <p className="font-heading font-bold text-xs tracking-widest mb-4" style={{ color: "#2A2522" }}>
                INTRO
              </p>
              <p className="font-heading font-bold text-xl md:text-2xl leading-snug mb-6">
                당신에게 닿을<br />
                예술 이야기를 전합니다.
              </p>
              <p className="text-base leading-relaxed mb-3" style={{ color: "#756F6A" }}>
                예술을 당신의 언어로 옮기는 아트 메신저, 모효빈입니다.
              </p>
              <p className="text-base leading-relaxed mb-3" style={{ color: "#756F6A" }}>
                수림문화재단 서포터즈로 시작해 프로젝트 매니저와 전략기획부 사원을 거치며 연간 사업 기획을 총괄했습니다. 아트센터이다에서는 프랑스 작가 '에르베 튈레'와 협업하여 국제 교육 프로그램을 기획하고 운영하며 다문화적 기획력을 넓혔습니다.
              </p>
              <p className="text-base leading-relaxed mb-3" style={{ color: "#756F6A" }}>
                예술이 관객에게 닿는 현장에도 늘 함께했습니다. 백범김구기념관, KF갤러리, 아뜰리에 에르메스 등 주요 문화예술 기관에서 한국어와 영어로 전시 해설을 진행하고 교육 프로그램 운영을 이끌었습니다.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#756F6A" }}>
                현재는 문화예술 매거진 '안티에그'의 파트너 에디터로 아티클을 기획 및 발행하고 있으며, 블로그 시리즈 「아트로그」와 「모데라토」를 통해 생생한 현장의 분위기가 담긴 예술 이야기를 꾸준히 전하고 있습니다.
              </p>
            </BrutalCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <BrutalCard className="p-8 h-full" color="bg-white">
              <div className="space-y-6">
                <div>
                  <p className="font-heading font-bold text-xs tracking-widest mb-4" style={{ color: "#2A2522" }}>
                    EDUCATION
                  </p>
                  <div className="space-y-4">
                    {education.map((e, i) => (
                      <div key={i} className="flex flex-col gap-0.5 pb-4 border-b border-black/10 last:border-0 last:pb-0">
                        <span className="text-xs font-bold" style={{ color: "#756F6A" }}>{e.period}</span>
                        <span className="font-heading font-bold text-sm">
                          {e.org} <span className="text-xs font-normal" style={{ color: "#756F6A" }}>{e.role}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-heading font-bold text-xs tracking-widest mb-4" style={{ color: "#2A2522" }}>
                    WORK
                  </p>
                  <div className="space-y-4">
                    {work.map((w, i) => (
                      <div key={i} className="flex flex-col gap-0.5 pb-4 border-b border-black/10 last:border-0 last:pb-0">
                        <span className="text-xs font-bold" style={{ color: "#756F6A" }}>{w.period}</span>
                        <span className="font-heading font-bold text-sm">
                          {w.org} <span className="text-xs font-normal" style={{ color: "#756F6A" }}>{w.role}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BrutalCard>
          </ScrollReveal>
        </div>

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
                      style={{ ...badgeStyle, color: "white" }}
                    >
                      {card.number}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "#756F6A" }}>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2 text-black">
                    {card.title}
                  </h3>
                  <p className="font-bold text-sm mb-3 text-black">{card.subtitle}</p>
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
