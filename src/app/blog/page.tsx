import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BrutalCard } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/sections/footer";

const tagColors: Record<string, string> = {
  "오디오드라마": "bg-accent-green",
  "기획": "bg-accent-yellow",
  "앨범기획": "bg-accent-pink",
  "스토리텔링": "bg-accent-orange",
  "브랜딩": "bg-accent-blue",
  "카피라이팅": "bg-accent-purple",
};

export const metadata = {
  title: "Blog | 유혜승",
  description: "기획자의 시선으로 바라본 콘텐츠 인사이트",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navigation />
      <main>
        <section className="bg-accent-lime pt-32 pb-20 relative">
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />
          <div className="mx-auto max-w-5xl px-6">
            <span
              className="inline-block px-3 py-1 font-heading font-bold text-sm
                         border-2 border-black bg-white rounded-[4px] shadow-brutal-sm mb-4"
            >
              Blog
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-7xl tracking-tight mb-3">
              Insights
            </h1>
            <p className="text-lg md:text-xl opacity-70 max-w-lg">
              기획자의 시선으로 바라본 콘텐츠 인사이트
            </p>
          </div>
        </section>

        <section className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            {posts.length === 0 ? (
              <BrutalCard className="p-10 text-center" color="bg-white">
                <p className="font-heading font-bold text-xl">
                  아직 작성된 글이 없습니다.
                </p>
              </BrutalCard>
            ) : (
              <div className="space-y-6">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <BrutalCard
                      className="p-8 md:p-10 mb-6"
                      color="bg-white"
                      hover="lift"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-1">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.map((tag) => (
                              <BrutalBadge
                                key={tag}
                                color={tagColors[tag] ?? "bg-accent-yellow"}
                              >
                                {tag}
                              </BrutalBadge>
                            ))}
                          </div>
                          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-2">
                            {post.title}
                          </h2>
                          <p className="text-base opacity-60 leading-relaxed">
                            {post.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <p className="text-sm font-bold opacity-40">
                            {new Date(post.date).toLocaleDateString("ko-KR", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                          <p className="text-xs opacity-30 mt-1">
                            {post.readingTime}
                          </p>
                        </div>
                      </div>
                    </BrutalCard>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
