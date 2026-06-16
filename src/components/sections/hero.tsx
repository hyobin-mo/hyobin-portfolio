"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/portfolio";
import { BrutalButton } from "@/components/ui/brutal-button";
import { useLenis } from "lenis/react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleScroll = (target: string) => {
    lenis?.scrollTo(target, {
      offset: -80,
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden" style={{backgroundColor: "#2A2522"}}
    >
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />

      <motion.div style={{ y, opacity }} className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-32 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-block px-4 py-2 font-heading font-bold text-sm
                               border-3 border-black bg-white rounded-[4px] shadow-brutal-sm">
                  {siteConfig.title}
                </span>
              </motion.div>

              <motion.h1
                className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95]" style={{color: "#F8F9FA"}}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {siteConfig.tagline.split(" ").map((word, i) => (
                  <span key={i} className="inline-block mr-[0.25em]">
                    {word}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl font-medium max-w-md" style={{color: "#F8F9FA"}}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {siteConfig.subtitle}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <BrutalButton
  color="bg-[#C9D3C0]"
  size="lg"
  onClick={() => handleScroll("#writing")}
>
  ARTICLE
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
</BrutalButton>
                <BrutalButton
                  variant="secondary"
                  size="lg"
                  onClick={() => handleScroll("#contact")}
                >
                  Contact
                </BrutalButton>
              </motion.div>
            </div>

            <motion.div
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-80 h-96 border-3 border-black bg-white rounded-[8px] shadow-brutal-lg p-8
                              flex flex-col items-center justify-center gap-4">
                <Image
                  src="/images/hero/character.jpg"
                  alt={siteConfig.name}
                  width={128}
                  height={128}
                  className="rounded-full border-3 border-black object-cover"
                />
                <div className="text-center">
                  <p className="font-heading font-bold text-2xl">{siteConfig.name}</p>
                  <p className="font-heading text-sm text-fg/60 mt-1">{siteConfig.title}</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 text-xs font-bold border-2 border-black rounded-full" style={{backgroundColor: "#F5EBC8"}}>
                    기획
                  </span>
                  <span className="px-3 py-1 text-xs font-bold border-2 border-black rounded-full" style={{backgroundColor: "#C9D3C0"}}>
                    소통
                  </span>
                  <span className="px-3 py-1 text-xs font-bold border-2 border-black rounded-full" style={{backgroundColor: "#F0EFEB"}}>
                    협업
                  </span>
                </div>

                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 border-3 border-black
                              rounded-full flex items-center justify-center font-heading font-bold text-sm"
                  style={{ backgroundColor: "#F5EBC8", color: "#2A2522" }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  HIRE
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-8 h-12 border-3 border-black rounded-full flex items-start justify-center pt-2 bg-white">
          <div className="w-1.5 h-3 bg-black rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
