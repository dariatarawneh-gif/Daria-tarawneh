import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Back */}
      <Link
        href="/blog"
        className="text-sm text-[#4a4a4a] hover:text-[#E84E3A] transition-colors mb-10 inline-block"
      >
        ← All posts
      </Link>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-medium text-[#E84E3A] border border-[#E84E3A]/30 rounded-full px-3 py-0.5">
          {post.category}
        </span>
        <span className="text-xs text-[#4a4a4a]">{post.date}</span>
        <span className="text-xs text-[#4a4a4a]">{post.readTime}</span>
      </div>

      {/* Title */}
      <h1 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.9] text-[#1a1a1a] mb-10">
        {post.title}
      </h1>

      {/* Hero image placeholder */}
      <div className="w-full aspect-[16/7] rounded-2xl bg-[#e0ddd8] mb-12" />

      {/* Content placeholder */}
      <div className="flex flex-col gap-6 text-[#4a4a4a] leading-relaxed">
        <p className="text-lg font-medium text-[#1a1a1a]">{post.excerpt}</p>
        <p>
          Full article content coming soon. This page is ready to receive your
          writing — you can populate it by adding a <code>content</code> field
          to the blog data file, or by integrating a CMS like Contentful,
          Sanity, or Notion.
        </p>
      </div>
    </div>
  );
}
