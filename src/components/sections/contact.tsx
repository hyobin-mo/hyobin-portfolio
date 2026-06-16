"use client";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BrutalCard } from "@/components/ui/brutal-card";
export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32" style={{backgroundColor: "#D6CD95"}}>
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-heading font-bold text-sm px-3 py-1 border-2 border-black bg-white rounded-[4px] shadow-brutal-sm">
                  06
                </span>
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-black">
                  Contact
                </h2>
              </div>
              <p className="text-xl md:text-2xl font-bold text-black/60 max-w-md">
                모두에게 닿을 문화예술을 전합니다.
                <br />
                당신의 이야기를 들려주세요.
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
                  <a href="https://www.instagram.com/hyo_b.m" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border-2 border-black rounded-[5px] shadow-brutal-sm brutal-hover font-bold" style={{backgroundColor: "#F0EFEB"}}>
                    <span className="w-10 h-10 flex items-center justify-center border-2 border-black bg-white rounded-[4px] text-lg">
                      📷
                    </span>
                    <div>
                      <p className="text-xs font-heading" style={{color: "#756F6A"}}>INSTAGRAM</p>
                      <p className="font-heading">@hyo_b.m</p>
                    </div>
                  </a>
                  <a href="https://blog.naver.com/hyo_bm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border-2 border-black rounded-[5px] shadow-brutal-sm brutal-hover font-bold" style={{backgroundColor: "#C7E4CA"}}>
                    <span className="w-10 h-10 flex items-center justify-center border-2 border-black bg-white rounded-[4px] text-lg">
                      ✍
                    </span>
                    <div>
                      <p className="text-xs font-heading" style={{color: "#756F6A"}}>BLOG</p>
                      <p className="font-heading">blog.naver.com/hyo_bm</p>
                    </div>
                  </a>
                  <a href="https://antiegg.kr/author/hyobm/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border-2 border-black rounded-[5px] shadow-brutal-sm brutal-hover font-bold" style={{backgroundColor: "#D6CD95"}}>
                    <span className="w-10 h-10 flex items-center justify-center border-2 border-black bg-white rounded-[4px] text-lg">
                      🥚
                    </span>
                    <div>
                      <p className="text-xs font-heading" style={{color: "#756F6A"}}>ANTIEGG</p>
                      <p className="font-heading">antiegg.kr/author/hyobm</p>
                    </div>
                  </a>
                </div>
              </div>
            </BrutalCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
