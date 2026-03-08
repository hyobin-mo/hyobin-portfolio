"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BrutalCard } from "@/components/ui/brutal-card";

interface AdminPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
  readingTime: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/admin/posts");
      const data = await res.json();
      setPosts(data.posts || []);
    } catch {
      console.error("글 목록을 불러올 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (slug: string, title: string) => {
    if (!confirm(`"${title}" 글을 정말 삭제하시겠습니까?`)) return;

    try {
      const res = await fetch(`/api/admin/posts/${slug}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchPosts();
      }
    } catch {
      console.error("삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold">블로그 관리</h2>
        <button
          onClick={() => router.push("/admin/new")}
          className="border-3 border-black rounded-[5px] bg-accent-green px-5 py-2.5 font-heading font-bold shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100 cursor-pointer"
        >
          새 글 작성
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 py-12">불러오는 중...</p>
      ) : posts.length === 0 ? (
        <BrutalCard className="p-12 text-center" color="bg-white" hover="none">
          <p className="text-lg text-gray-500">
            아직 작성된 글이 없습니다.
          </p>
          <button
            onClick={() => router.push("/admin/new")}
            className="mt-4 border-2 border-black rounded-[4px] bg-accent-yellow px-4 py-2 font-heading text-sm font-bold shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-100 cursor-pointer"
          >
            첫 글 작성하기
          </button>
        </BrutalCard>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <BrutalCard
              key={post.slug}
              className="flex items-center justify-between gap-4 p-5"
              color="bg-white"
              hover="none"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-heading text-lg font-bold truncate">
                    {post.title}
                  </h3>
                  <span
                    className={`shrink-0 inline-block px-2 py-0.5 text-xs font-bold font-heading border-2 border-black rounded-[4px] ${
                      post.published
                        ? "bg-accent-green"
                        : "bg-gray-200"
                    }`}
                  >
                    {post.published ? "공개" : "비공개"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>{post.date}</span>
                  {post.tags.length > 0 && (
                    <span className="truncate">
                      {post.tags.join(", ")}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  onClick={() => router.push(`/admin/edit/${post.slug}`)}
                  className="border-2 border-black rounded-[4px] bg-accent-blue px-3 py-1.5 font-heading text-sm font-bold shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-100 cursor-pointer"
                >
                  수정
                </button>
                <button
                  onClick={() => handleDelete(post.slug, post.title)}
                  className="border-2 border-black rounded-[4px] bg-accent-coral px-3 py-1.5 font-heading text-sm font-bold shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-100 cursor-pointer"
                >
                  삭제
                </button>
              </div>
            </BrutalCard>
          ))}
        </div>
      )}
    </div>
  );
}
