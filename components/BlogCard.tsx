import Link from "next/link";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group cursor-pointer">
        {/* Image placeholder */}
        <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#e0ddd8] mb-4">
          <div className="w-full h-full bg-gradient-to-br from-[#e0ddd8] to-[#c8c4be] group-hover:scale-105 transition-transform duration-500" />
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-medium text-[#E84E3A] border border-[#E84E3A]/30 rounded-full px-3 py-0.5">
            {post.category}
          </span>
          <span className="text-xs text-[#4a4a4a]">{post.date}</span>
          <span className="text-xs text-[#4a4a4a]">{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold uppercase text-[#1a1a1a] group-hover:text-[#E84E3A] transition-colors leading-tight mb-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#4a4a4a] leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      </article>
    </Link>
  );
}
