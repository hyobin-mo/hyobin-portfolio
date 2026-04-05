"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BrutalCard } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import { BrutalButton } from "@/components/ui/brutal-button";

const previewPosts = [
  {
    slug: "suhwa-exhibition",
    title: "국립중앙박물관 서화실 재개관, 겸재 정선과 서화동원",
    description: "6개월의 재단장을 마치고 돌아온 서화실, 글씨와 그림의 근원은 같다",
    date: "2026.03",
    tags: ["전시", "국립중앙박물관"],
    color: "bg-accent-green",
  },
  {
    slug: "grim-park",
    title: "국립현대미술관이 선택한 퀴어 불화,박그림 작가",
    description: "전통 기법으로 현대의 정체성을 그려내는 신예 작가 박그림의 작품 세계",
    date: "2026.03",
    tags: ["작가소개", "현대미술"],
    color: "bg-accent-pink",
  },
  {
    slug: "coldplay-viva-la-vida",
    title: "몰락한 권력자의 회상, Coldplay - Viva La Vida",
    description: "프리다 칼로의 유작에서 시작된 콜드플레이의 대표곡, 그 깊은 의미를 파헤쳐보다",
    date: "2025.04",
    tags: ["음악", "콜드플레이"],
    color: "bg-accent-blue",
  },
];

export function BlogPreviewSection() {
  return (
    <section id="blog" className="relative py-24 md:py-32" style={{backgroundColor: "#C7E0F4"}}>
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />

      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-heading font-bold text-sm px-3 py-1
                           border-2 border-black bg-white rounded-[4px] shadow-brutal-sm">
              05
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl">Blog</h2>
          </div>
          <p className="text-lg opacity-70 mb-12 max-w-xl">
            아트 커뮤니케이터의 시선으로 바라본 인사이트
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <BrutalCard className="p-0 overflow-hidden h-full" color="bg-white">
                  <div className={`h-3 ${post.color}`} />
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <BrutalBadge key={tag} color={post.color}>
                          {tag}
                        </BrutalBadge>
                      ))}
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3">
                      {post.title}
                    </h3>
                    <p className="text-sm opacity-60 leading-relaxed flex-1">
                      {post.description}
                    </p>
                    <div className="mt-4 pt-4 border-t-2 border-black/10
                                  flex items-center justify-between">
                      <span className="text-xs font-bold opacity-40">{post.date}</span>
                      <span className="text-xs font-heading font-bold flex items-center gap-1">
                        Read
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </BrutalCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <BrutalButton href="/blog" variant="secondary" size="lg">
              All Posts
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </BrutalButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
