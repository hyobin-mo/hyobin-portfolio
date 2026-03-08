"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BrutalCard } from "@/components/ui/brutal-card";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        const data = await res.json();
        setError(data.error || "로그인에 실패했습니다.");
      }
    } catch {
      setError("네트워크 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <BrutalCard
        className="w-full max-w-md p-8"
        color="bg-white"
        hover="none"
      >
        <h1 className="mb-2 font-heading text-3xl font-bold">Admin</h1>
        <p className="mb-6 text-sm text-gray-600">
          관리자 비밀번호를 입력하세요.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            required
            className="border-3 border-black rounded-[5px] shadow-brutal-sm font-heading px-4 py-3 w-full focus:ring-2 focus:ring-black focus:outline-none"
          />

          {error && (
            <span className="inline-block px-3 py-1.5 text-sm font-bold font-heading border-2 border-black rounded-[4px] shadow-brutal-sm bg-accent-coral text-black">
              {error}
            </span>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full border-3 border-black rounded-[5px] bg-accent-yellow px-6 py-3 font-heading font-bold shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>
      </BrutalCard>
    </div>
  );
}
