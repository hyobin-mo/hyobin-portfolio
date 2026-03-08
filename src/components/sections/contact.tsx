"use client";

import { siteConfig } from "@/data/portfolio";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BrutalButton } from "@/components/ui/brutal-button";
import { BrutalCard } from "@/components/ui/brutal-card";

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-accent-coral py-24 md:py-32">
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-heading font-bold text-sm px-3 py-1
                               border-2 border-black bg-white rounded-[4px] shadow-brutal-sm">
                  04
                </span>
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
                  Contact
                </h2>
              </div>
              <p className="text-xl md:text-2xl font-bold text-white/90 max-w-md">
                프로젝트에 스토리가 필요하신가요?
                <br />
                함께 만들어 나가요.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <BrutalCard className="p-8 md:p-10" color="bg-white">
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl mb-6">
                    Let&apos;s Talk
                  </h3>
                </div>

                <div className="space-y-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 p-4
                             border-2 border-black rounded-[5px] bg-accent-yellow
                             shadow-brutal-sm brutal-hover font-bold"
                  >
                    <span className="w-10 h-10 flex items-center justify-center
                                   border-2 border-black bg-white rounded-[4px] text-lg">
                      ✉
                    </span>
                    <div>
                      <p className="text-xs font-heading opacity-50">EMAIL</p>
                      <p className="font-heading">{siteConfig.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-4 p-4
                             border-2 border-black rounded-[5px] bg-accent-green
                             shadow-brutal-sm brutal-hover font-bold"
                  >
                    <span className="w-10 h-10 flex items-center justify-center
                                   border-2 border-black bg-white rounded-[4px] text-lg">
                      ☏
                    </span>
                    <div>
                      <p className="text-xs font-heading opacity-50">PHONE</p>
                      <p className="font-heading">{siteConfig.phone}</p>
                    </div>
                  </a>
                </div>

                <div className="pt-4">
                  <BrutalButton
                    color="bg-accent-coral"
                    className="w-full text-white"
                    size="lg"
                    href={`mailto:${siteConfig.email}?subject=프로젝트 문의`}
                  >
                    이메일 보내기
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </BrutalButton>
                </div>
              </div>
            </BrutalCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
