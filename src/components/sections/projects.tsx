"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BrutalCard } from "@/components/ui/brutal-card";
import { BrutalBadge } from "@/components/ui/brutal-badge";
import type { Project } from "@/data/portfolio";

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <ScrollReveal>
      <BrutalCard
        className={`p-0 overflow-hidden cursor-pointer bg-${project.color}`}
        hover="lift"
      >
        <button onClick={onClick} className="w-full text-left">
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-heading font-bold text-6xl md:text-7xl opacity-20">
                {project.number}
              </span>
            </div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2">
              {project.categoryEn}
            </h3>
            <p className="font-heading font-bold text-lg opacity-70 mb-6">
              {project.category}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.role.slice(0, 2).map((r) => (
                <BrutalBadge key={r} color="bg-white">
                  {r}
                </BrutalBadge>
              ))}
              {project.role.length > 2 && (
                <BrutalBadge color="bg-white">
                  +{project.role.length - 2}
                </BrutalBadge>
              )}
            </div>
            <div className="flex items-center gap-2 font-heading font-bold text-sm">
              <span>View Details</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </button>
      </BrutalCard>
    </ScrollReveal>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        data-lenis-prevent
        className={`relative w-full max-w-4xl max-h-[85vh] overflow-y-auto
                    border-3 border-black rounded-[8px] shadow-brutal-lg bg-${project.color}`}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-6
                        border-b-3 border-black bg-white/80 backdrop-blur-sm">
          <div>
            <span className="font-heading font-bold text-sm opacity-50">
              PROJECT {project.number}
            </span>
            <h3 className="font-heading font-bold text-2xl">
              {project.category}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center
                       border-2 border-black bg-white rounded-[4px] shadow-brutal-sm
                       brutal-hover font-bold text-lg"
          >
            ✕
          </button>
        </div>

        <div className="p-6 md:p-10">
          <div className="mb-8">
            <h4 className="font-heading font-bold text-sm mb-3 opacity-60">ROLE</h4>
            <div className="flex flex-wrap gap-2">
              {project.role.map((r) => (
                <BrutalBadge key={r} color="bg-white">
                  {r}
                </BrutalBadge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {project.details.map((detail, i) => (
              <BrutalCard key={i} className="p-6 md:p-8" color="bg-white">
                <h4 className="font-heading font-bold text-xl mb-2">
                  {detail.title}
                </h4>
                {detail.concept && (
                  <p className="text-sm font-bold opacity-60 mb-1">
                    CONCEPT: {detail.concept}
                  </p>
                )}
                {detail.story && (
                  <p className="text-base mb-4 leading-relaxed">
                    {detail.story}
                  </p>
                )}
                {detail.images && detail.images.length > 0 && (
                  <div
                    data-lenis-prevent
                    className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 snap-x snap-mandatory mb-4"
                  >
                    {detail.images.map((img, imgIdx) => (
                      <Image
                        key={imgIdx}
                        src={img}
                        alt={`${detail.title} ${imgIdx + 1}`}
                        width={300}
                        height={200}
                        className="rounded-[4px] border-2 border-black object-cover flex-shrink-0 snap-start"
                      />
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mt-3">
                  {detail.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 text-xs font-bold bg-accent-yellow
                                 border-2 border-black rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </BrutalCard>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32" style={{backgroundColor: "#FFE07A"}}>
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />

      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-heading font-bold text-sm px-3 py-1
                           border-2 border-black bg-accent-yellow rounded-[4px] shadow-brutal-sm">
              02
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl">Projects</h2>
          </div>
          <p className="text-lg opacity-70 mb-12 max-w-xl">
            문화예술 현장을 이해하고, 기획하고, 소통하고, 실행합니다.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
