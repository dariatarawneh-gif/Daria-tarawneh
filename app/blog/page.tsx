import { blogPosts } from "@/data/blog";
import BlogCard from "@/components/BlogCard";

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#4a4a4a] mb-4">
          Writing
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase leading-[0.9] text-[#1a1a1a] max-w-2xl">
          Design Insights & Ideas
        </h1>
        <p className="text-[#4a4a4a] mt-6 max-w-md">
          From design trends to creative processes, these articles offer
          insights to help you elevate your craft, solve challenges, and spark
          new ideas for your projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
