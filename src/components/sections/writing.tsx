"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BrutalCard } from "@/components/ui/brutal-card";
import { articles } from "@/data/portfolio";

function SourceBadge({ source }: { source: "Blog" | "Antiegg" }) {
  const isBlog = source === "Blog";
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-heading font-bold border-2 border-black rounded-[3px]"
      style={{ backgroundColor: isBlog ? "#C9D3C0" : "#F5EBC8" }}
    >
      {isBlog ? "✍" : "🥚"} {source}
    </span>
  );
}

export function WritingSection() {
  return (
    <section id="writing" className="relative py-24 md:py-32" style={{ backgroundColor: "#F0EFEB" }}>
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />

      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span
              className="font-heading font-bold text-sm px-3 py-1 border-2 border-black rounded-[4px] shadow-brutal-sm"
              style={{ backgroundColor: "#756F6A", color: "white" }}
            >
              04
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-black">ARTICLE</h2>
          </div>
          <p className="text-base mb-12 max-w-xl" style={{ color: "#756F6A" }}>
            아트 메신저의 시선으로 쓴 블로그와 안티에그 아티클
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <ScrollReveal key={`${article.source}-${i}`} delay={i * 0.08}>
              {article.external ? (
                <a href={article.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <ArticleCard article={article} />
                </a>
              ) : (
                <Link href={article.href} className="block h-full">
                  <ArticleCard article={article} />
                </Link>
              )}
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="https://blog.naver.com/hyo_bm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-heading font-bold text-sm border-2 border-black rounded-[4px] shadow-brutal-sm brutal-hover"
              style={{ backgroundColor: "#C9D3C0" }}
            >
              ✍ 네이버 블로그 전체보기
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://antiegg.kr/author/hyobm/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-heading font-bold text-sm border-2 border-black rounded-[4px] shadow-brutal-sm brutal-hover"
              style={{ backgroundColor: "#F5EBC8" }}
            >
              🥚 안티에그 아티클 전체보기
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: typeof articles[0] }) {
  const accentColor = article.source === "Blog" ? "#C9D3C0" : "#F5EBC8";

  return (
    <BrutalCard className="p-0 overflow-hidden h-full flex flex-col" color="bg-white">
      <div className="h-2" style={{ backgroundColor: accentColor }} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <SourceBadge source={article.source} />
          <div className="flex gap-1.5">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-bold border border-black/30 rounded-full"
                style={{ color: "#756F6A" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="font-heading font-bold text-lg leading-snug mb-3 flex-1">
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#756F6A" }}>
          {article.description}
        </p>
        <div className="mt-auto pt-4 border-t-2 border-black/10 flex items-center justify-between">
          <span className="text-xs font-bold" style={{ color: "#756F6A" }}>{article.date}</span>
          <span className="text-xs font-heading font-bold flex items-center gap-1">
            Read
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </BrutalCard>
  );
}
