import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#4a4a4a] mb-4">
          Case Studies
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase leading-[0.9] text-[#1a1a1a] max-w-3xl">
          My Projects Bring Together Strategy, Innovation, and Creative Energy
          Into the Enterprise World.
        </h1>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
