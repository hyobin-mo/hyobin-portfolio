"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/admin/login";

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b-3 border-black bg-white px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <h1 className="font-heading text-xl font-bold">유혜승 Admin</h1>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-heading text-sm font-bold underline underline-offset-4 hover:text-accent-purple"
            >
              사이트 보기
            </Link>
            <button
              onClick={handleLogout}
              className="border-2 border-black rounded-[4px] bg-accent-coral px-4 py-1.5 font-heading text-sm font-bold shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-100 cursor-pointer"
            >
              로그아웃
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
    </div>
  );
}
