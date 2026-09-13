"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <motion.div
          className="relative w-full rounded-2xl overflow-hidden cursor-pointer"
          style={{
            backgroundColor: project.bgColor,
            aspectRatio: "16/9",
          }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Background placeholder (will show image when available) */}
          <div
            className="absolute inset-0 z-0"
            style={{ backgroundColor: project.bgColor }}
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-8 py-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-white/80 border border-white/30 rounded-full px-3 py-1 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="font-display text-[clamp(1.5rem,4vw,2.75rem)] font-bold uppercase text-white leading-tight mb-3 max-w-2xl">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-white/75 text-sm max-w-lg leading-relaxed">
              {project.description}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
