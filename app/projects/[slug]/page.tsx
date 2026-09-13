import { getProjectBySlug, projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Back */}
      <Link
        href="/projects"
        className="text-sm text-[#4a4a4a] hover:text-[#E84E3A] transition-colors mb-10 inline-block"
      >
        ← All projects
      </Link>

      {/* Hero */}
      <div
        className="w-full rounded-2xl overflow-hidden mb-16 relative"
        style={{
          backgroundColor: project.bgColor,
          aspectRatio: "16/7",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-white/80 border border-white/30 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase text-white leading-tight max-w-2xl">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Meta */}
      <div className="grid grid-cols-3 gap-6 mb-16 border-b border-black/10 pb-12">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#4a4a4a] mb-1">
            Role
          </p>
          <p className="font-medium text-[#1a1a1a]">{project.role}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-[#4a4a4a] mb-1">
            Company
          </p>
          <p className="font-medium text-[#1a1a1a]">{project.company}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-[#4a4a4a] mb-1">
            Year
          </p>
          <p className="font-medium text-[#1a1a1a]">{project.year}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl">
        <p className="text-[#4a4a4a] text-lg leading-relaxed mb-16">
          {project.description}
        </p>

        <div className="flex flex-col gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-[#1a1a1a] mb-4">
              The Challenge
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed">{project.challenge}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-[#1a1a1a] mb-4">
              The Approach
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed">{project.approach}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-[#1a1a1a] mb-4">
              The Outcome
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed">{project.outcome}</p>
          </div>
        </div>
      </div>

      {/* Next project */}
      <div className="mt-20 pt-12 border-t border-black/10 text-center">
        <Link
          href="/projects"
          className="inline-block border border-[#E84E3A] text-[#E84E3A] text-sm font-display font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-[#E84E3A] hover:text-white transition-colors"
        >
          View all projects
        </Link>
      </div>
    </div>
  );
}
