"use client";

import { projects } from "@/data/portfolio";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { BrutalCard } from "@/components/ui/brutal-card";
import type { Project, ProjectDetail } from "@/data/portfolio";

function DetailCard({ detail }: { detail: ProjectDetail }) {
  return (
    <BrutalCard className="p-6 md:p-8 h-full flex flex-col" color="bg-white">
      <h4 className="font-heading font-bold text-xl mb-2">{detail.title}</h4>
      {detail.concept && (
        <p className="text-sm font-bold opacity-60 mb-3">{detail.concept}</p>
      )}
      {detail.story && (
        <p className="text-base mb-4 leading-relaxed flex-grow">{detail.story}</p>
      )}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {detail.highlights.map((h) => (
          <span
            key={h}
            className="px-3 py-1 text-xs font-bold border-2 border-black rounded-full" style={{backgroundColor: "#F5EBC8"}}
          >
            {h}
          </span>
        ))}
      </div>
    </BrutalCard>
  );
}

function ProjectSection({ project }: { project: Project }) {
  const colClass =
    project.details.length === 4
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 md:grid-cols-3";

  return (
    <section
      id={project.id}
      className="relative py-24 md:py-32"
      style={{ backgroundColor: project.bgColor }}
    >
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black" />
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-heading font-bold text-sm px-3 py-1 border-2 border-black rounded-[4px] shadow-brutal-sm" style={{ backgroundColor: "#756F6A", color: "#F0EFEB" }}>
              {project.number}
            </span>
           <h2 className="font-heading font-bold text-4xl md:text-5xl text-black">
              {project.categoryEn}
            </h2>
          </div>
          <div className="mb-12">
            <p className="font-heading font-bold text-xl text-black/70 mb-1">
              {project.category}
            </p>
            {project.subtitle && (
              <p className="text-black/50 text-base">{project.subtitle}</p>
            )}
          </div>
        </ScrollReveal>

        <div className={`grid ${colClass} gap-6`}>
          {project.details.map((detail, i) => (
            <ScrollReveal key={detail.title} delay={0.1 * i}>
              <DetailCard detail={detail} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <>
      {projects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </>
  );
}
