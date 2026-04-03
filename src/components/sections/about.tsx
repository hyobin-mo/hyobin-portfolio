"use client";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BrutalCard } from "@/components/ui/brutal-card";

const aboutCards = [
  {
    id: "curate",
    title: "CURATE",
    subtitle: "현장 이해 기반 기획력",
    detail: "수림문화재단·아트센터이다·학고재·안티에그",
    href: "#curate",
  },
  {
    id: "connect",
    title: "CONNECT",
    subtitle: "콘텐츠 커뮤니케이션력",
    detail: "도슨트·전시운영·교육프로그램·대학원 수강",
    href: "#connect",
  },
  {
    id: "action",
    title: "ACTION",
    subtitle: "프로젝트 실행력",
    detail: "블로그 운영·아트디깅클럽·아트바젤 취재·기관 협업",
    href: "#action",
  },
];

export function AboutSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative py-24 md:py-32" style={{ backgroundColor: "#C7E0F4" }}>
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-heading font-bold text-sm px-3 py-1 border-2 border-black bg-white rounded-[4px] shadow-brutal-sm">
              01
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl">About</h2>
          </div>
        </ScrollReveal>

        {/* 상단 배너 */}
        <ScrollReveal delay={0.1}>
          <div className="w-full border-2 border-black bg-white shadow-brutal mb-8 px-8 py-6 md:py-8">
            <p className="font-heading font-bold text-xl md:text-3xl lg:text-4xl leading-snug">
              문화예술 현장을 이해하여, 기획하고, 소통하고, 실행합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* 하단 카드 3개 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutCards.map((card, i) => (
            <ScrollReveal key={card.id} delay={0.1 * (i + 2)}>
              <button
                className="w-full text-left"
                onClick={() => handleScroll(card.href)}
              >
                <BrutalCard className="p-8 hover:translate-y-[-4px] transition-transform duration-200" color="bg-white">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3">
                    {card.title}
                  </h3>
                  <p className="font-bold text-base mb-4 text-teal-700">{card.subtitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.detail}</p>
                </BrutalCard>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
