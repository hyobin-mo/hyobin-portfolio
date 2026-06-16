import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading font-bold text-xl">
              {siteConfig.name}
              <span className="text-accent-coral ml-1">.</span>
            </p>
            <p className="text-sm text-white/50 mt-1">
              {siteConfig.title}
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/50">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-white transition-colors"
            >
              {siteConfig.email}
            </a>
            <span className="hidden md:inline">|</span>
            <a
              href={`tel:${siteConfig.phone}`}
              className="hover:text-white transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/30">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="mt-1">
            당신에게 닿을 예술 이야기를 전합니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
