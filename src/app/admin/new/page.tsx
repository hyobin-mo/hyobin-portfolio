"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function AdminNewPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [tagsInput, setTagsInput] = useState("");
  const [published, setPublished] = useState(true);
  const [content, setContent] = useState("");
  const [activeTab, setActiveTab] = useState<"upload" | "write">("upload");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    setSlug(slugify(value));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setContent(text);
    };
    reader.readAsText(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    try {
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          description,
          date,
          tags,
          published,
          content,
        }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        const data = await res.json();
        setError(data.error || "글 작성에 실패했습니다.");
      }
    } catch {
      setError("네트워크 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "border-3 border-black rounded-[5px] shadow-brutal-sm font-heading px-4 py-3 w-full focus:ring-2 focus:ring-black focus:outline-none";

  return (
    <div>
      <h2 className="mb-8 font-heading text-2xl font-bold">새 글 작성</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 제목 */}
        <div>
          <label className="mb-2 block font-heading text-sm font-bold">
            제목 *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="글 제목을 입력하세요"
            required
            className={inputClass}
          />
        </div>

        {/* 슬러그 */}
        <div>
          <label className="mb-2 block font-heading text-sm font-bold">
            슬러그 *
          </label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(slugify(e.target.value))}
            placeholder="url-safe-slug"
            required
            className={inputClass}
          />
          <p className="mt-1 text-xs text-gray-500">
            URL에 사용됩니다: /blog/{slug || "..."}
          </p>
        </div>

        {/* 설명 */}
        <div>
          <label className="mb-2 block font-heading text-sm font-bold">
            설명
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="간단한 설명"
            className={inputClass}
          />
        </div>

        {/* 날짜 + 태그 */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block font-heading text-sm font-bold">
              날짜
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-2 block font-heading text-sm font-bold">
              태그
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="태그1, 태그2, 태그3"
              className={inputClass}
            />
          </div>
        </div>

        {/* 공개 여부 */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="published"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="h-5 w-5 accent-black cursor-pointer"
          />
          <label
            htmlFor="published"
            className="font-heading text-sm font-bold cursor-pointer"
          >
            공개
          </label>
        </div>

        {/* 마크다운 내용 */}
        <div>
          <label className="mb-2 block font-heading text-sm font-bold">
            마크다운 내용 *
          </label>

          {/* 탭 */}
          <div className="mb-3 flex gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("upload")}
              className={`border-2 border-black rounded-[4px] px-4 py-2 font-heading text-sm font-bold transition-all duration-100 cursor-pointer ${
                activeTab === "upload"
                  ? "bg-accent-yellow shadow-brutal-sm"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              파일 업로드
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("write")}
              className={`border-2 border-black rounded-[4px] px-4 py-2 font-heading text-sm font-bold transition-all duration-100 cursor-pointer ${
                activeTab === "write"
                  ? "bg-accent-yellow shadow-brutal-sm"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              직접 작성
            </button>
          </div>

          {activeTab === "upload" && (
            <div className="space-y-3">
              <input
                type="file"
                accept=".md,.mdx,.txt"
                onChange={handleFileUpload}
                className={inputClass + " cursor-pointer"}
              />
              {content && (
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={16}
                  className={inputClass + " font-mono text-sm"}
                />
              )}
            </div>
          )}

          {activeTab === "write" && (
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={20}
              placeholder="마크다운 형식으로 내용을 작성하세요..."
              className={inputClass + " font-mono text-sm"}
            />
          )}
        </div>

        {/* 에러 */}
        {error && (
          <span className="inline-block px-3 py-1.5 text-sm font-bold font-heading border-2 border-black rounded-[4px] shadow-brutal-sm bg-accent-coral text-black">
            {error}
          </span>
        )}

        {/* 버튼 */}
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={submitting}
            className="border-3 border-black rounded-[5px] bg-accent-yellow px-6 py-3 font-heading font-bold shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "발행 중..." : "발행하기"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin")}
            className="border-3 border-black rounded-[5px] bg-white px-6 py-3 font-heading font-bold shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100 cursor-pointer"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}
