"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { BrutalCard } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import { BrutalButton } from "@/components/ui/brutal-button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/sections/footer";

const colorMap: Record<string, string> = {
  "accent-pink": "bg-accent-pink",
  "accent-blue": "bg-accent-blue",
  "accent-orange": "bg-accent-orange",
  "accent-purple": "bg-accent-purple",
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <BrutalCard className="p-10 text-center" color="bg-white">
          <h1 className="font-heading font-bold text-3xl mb-4">404</h1>
          <p className="mb-6">프로젝트를 찾을 수 없습니다.</p>
          <BrutalButton onClick={() => router.push("/")}>홈으로</BrutalButton>
        </BrutalCard>
      </div>
    );
  }

  const bgColor = colorMap[project.color] ?? "bg-accent-yellow";
  const projectIndex = projects.findIndex((p) => p.id === slug);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <>
      <Navigation />
      <main>
        <section className={`relative pt-32 pb-20 ${bgColor}`}>
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />
          <div className="mx-auto max-w-5xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <button
                onClick={() => router.push("/#projects")}
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
                Back
              </button>

              <div className="flex items-center gap-4 mb-4">
                <span
                  className="font-heading font-bold text-sm px-3 py-1
                             border-2 border-black bg-white rounded-[4px] shadow-brutal-sm"
                >
                  PROJECT {project.number}
                </span>
              </div>

              <h1 className="font-heading font-bold text-5xl md:text-7xl tracking-tight mb-3">
                {project.categoryEn}
              </h1>
              <p className="font-heading font-bold text-2xl opacity-60 mb-8">
                {project.category}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.role.map((r) => (
                  <BrutalBadge key={r} color="bg-white">
                    {r}
                  </BrutalBadge>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-10">
                Details
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              {project.details.map((detail, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <BrutalCard className="p-8 md:p-10" color="bg-white">
                    <div className="flex items-start gap-6">
                      <span
                        className={`flex-shrink-0 w-12 h-12 flex items-center justify-center
                                    font-heading font-bold text-lg border-3 border-black
                                    rounded-full ${bgColor}`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        {detail.images && detail.images.length === 1 && (
                          <Image
                            src={detail.images[0]}
                            alt={detail.title}
                            width={800}
                            height={500}
                            className="w-full rounded-[4px] border-2 border-black object-cover mb-4"
                          />
                        )}
                        {detail.images && detail.images.length > 1 && (
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                            {detail.images.map((img, imgIdx) => (
                              <Image
                                key={imgIdx}
                                src={img}
                                alt={`${detail.title} ${imgIdx + 1}`}
                                width={400}
                                height={300}
                                className="w-full rounded-[4px] border-2 border-black object-cover"
                              />
                            ))}
                          </div>
                        )}
                        <h3 className="font-heading font-bold text-xl md:text-2xl mb-2">
                          {detail.title}
                        </h3>
                        {detail.concept && (
                          <p className="text-sm font-heading font-bold opacity-50 mb-2">
                            {detail.concept}
                          </p>
                        )}
                        {detail.story && (
                          <p className="text-base leading-relaxed mb-4 opacity-80">
                            {detail.story}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {detail.highlights.map((h) => (
                            <span
                              key={h}
                              className={`px-3 py-1 text-xs font-bold border-2 border-black rounded-full ${bgColor}`}
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </BrutalCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg pb-16 md:pb-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex items-center justify-between gap-4">
              {prevProject ? (
                <BrutalButton
                  variant="secondary"
                  onClick={() => router.push(`/projects/${prevProject.id}`)}
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
                  {prevProject.categoryEn}
                </BrutalButton>
              ) : (
                <div />
              )}
              {nextProject ? (
                <BrutalButton
                  variant="secondary"
                  onClick={() => router.push(`/projects/${nextProject.id}`)}
                >
                  {nextProject.categoryEn}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </BrutalButton>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
