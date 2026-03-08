import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { useMDXComponents } from "@/components/mdx-components";
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

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | 유혜승 Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) notFound();

  const components = useMDXComponents();

  return (
    <>
      <Navigation />
      <main>
        <section className="bg-accent-lime pt-32 pb-16 relative">
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mb-8 font-heading font-bold text-sm
                         px-4 py-2 border-2 border-black bg-white rounded-[4px]
                         shadow-brutal-sm brutal-hover"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <BrutalBadge
                  key={tag}
                  color={tagColors[tag] ?? "bg-accent-yellow"}
                >
                  {tag}
                </BrutalBadge>
              ))}
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-6xl tracking-tight mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm opacity-50 font-bold">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </section>

        <article className="bg-bg py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <MDXRemote source={post.content} components={components} />
          </div>
        </article>

        <section className="bg-bg pb-16">
          <div className="mx-auto max-w-3xl px-6">
            <hr className="border-t-3 border-black mb-10" />
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-heading font-bold text-base
                         px-6 py-3 border-3 border-black bg-accent-yellow rounded-[5px]
                         shadow-brutal brutal-hover"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Posts
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
