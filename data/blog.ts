export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "when-good-design-gets-stuck",
    title: "When Good Design Gets Stuck: Why the Best Teams Hit Walls",
    excerpt:
      "After two decades leading design teams, I've noticed a pattern: the best teams hit the worst walls. Here's what I've learned about why — and how to break through.",
    category: "Design Leadership",
    date: "Aug 12, 2026",
    readTime: "7 min read",
    image: "/images/blog/design-stuck.jpg",
  },
  {
    slug: "ai-governance-design-practice",
    title: "AI Governance Is a Design Problem",
    excerpt:
      "Most companies treat AI governance as a legal and compliance issue. That's the wrong frame. The decisions that shape how AI behaves in your product are design decisions.",
    category: "AI & Design",
    date: "Jul 30, 2026",
    readTime: "9 min read",
    image: "/images/blog/ai-governance.jpg",
  },
  {
    slug: "reframing-the-problem",
    title: "The First Answer Is Usually Wrong",
    excerpt:
      "We're trained to solve problems fast. But the fastest path to the wrong solution is solving the problem you first see. On problem reframing and why it matters more than execution.",
    category: "Thinking",
    date: "Jul 15, 2026",
    readTime: "6 min read",
    image: "/images/blog/reframing.jpg",
  },
  {
    slug: "managing-design-at-scale",
    title: "Managing Design at Scale Without Losing the Craft",
    excerpt:
      "When your team grows from 5 to 50, something usually breaks. The question isn't how to manage more people — it's how to stay close to the work when you're no longer doing it.",
    category: "Design Leadership",
    date: "Jun 28, 2026",
    readTime: "8 min read",
    image: "/images/blog/scale.jpg",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
