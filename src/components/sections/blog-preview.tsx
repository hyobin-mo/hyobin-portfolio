"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BrutalCard } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import { BrutalButton } from "@/components/ui/brutal-button";

const previewPosts = [
  {
    slug: "audio-drama-production",
    title: "좋은 오디오 드라마는 어떻게 만들어지는가",
    description: "원작 검토부터 각색, 캐스팅, 녹음까지 — 오디오 드라마 제작의 A to Z",
    date: "2025.11",
    tags: ["오디오드라마", "기획"],
    color: "bg-accent-green",
  },
  {
    slug: "album-storytelling",
    title: "K-POP 앨범 컨셉, 스토리텔링이 답이다",
    description: "단순한 비주얼을 넘어서, 앨범 하나에 서사를 담는 기획 프로세스",
    date: "2025.10",
    tags: ["앨범기획", "스토리텔링"],
    color: "bg-accent-pink",
  },
  {
    slug: "rebranding-story",
    title: "브랜드에 이야기를 입히는 법",
    description: "카피 한 줄이 브랜드의 방향을 바꾼다 — 리브랜딩 실전 이야기",
    date: "2025.09",
    tags: ["브랜딩", "카피라이팅"],
    color: "bg-accent-blue",
  },
];

export function BlogPreviewSection() {
  return (
    <section id="blog" className="relative bg-accent-lime py-24 md:py-32">
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />

      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-heading font-bold text-sm px-3 py-1
                           border-2 border-black bg-white rounded-[4px] shadow-brutal-sm">
              03
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl">Blog</h2>
          </div>
          <p className="text-lg opacity-70 mb-12 max-w-xl">
            기획자의 시선으로 바라본 콘텐츠 인사이트
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
