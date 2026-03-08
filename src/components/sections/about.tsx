"use client";

import { siteConfig, skills } from "@/data/portfolio";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BrutalCard } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";

const skillColors = [
  "bg-accent-pink",
  "bg-accent-blue",
  "bg-accent-green",
  "bg-accent-orange",
];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-accent-blue py-24 md:py-32">
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />

      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-heading font-bold text-sm px-3 py-1
                           border-2 border-black bg-white rounded-[4px] shadow-brutal-sm">
              01
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl">About</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <BrutalCard className="p-8 md:p-10" color="bg-white">
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-6">
                {siteConfig.tagline}
              </h3>
              <div className="space-y-4 text-base md:text-lg leading-relaxed">
                <p>
                  K-POP 앨범 기획부터 브랜드 리뉴얼, 오디오 드라마 기획,
                  그리고 시나리오 작업까지 — 스토리가 필요한 모든 곳에서
                  기획하고 실행합니다.
                </p>
                <p>
                  아이디어를 구체화하고, 팀을 구성하고, 현장을 진행하는 것까지.
                  {siteConfig.subtitle}.
                </p>
              </div>
            </BrutalCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <BrutalCard
                  key={skill.category}
                  className="p-6"
                  color={skillColors[i % skillColors.length]}
                >
                  <h4 className="font-heading font-bold text-lg mb-3">
                    {skill.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <BrutalBadge key={item} color="bg-white">
                        {item}
                      </BrutalBadge>
                    ))}
                  </div>
                </BrutalCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
