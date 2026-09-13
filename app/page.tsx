import AnimatedHero from "@/components/AnimatedHero";
import AccordionItem from "@/components/AccordionItem";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import StatsRow from "@/components/StatsRow";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";
import Link from "next/link";

const services = [
  {
    number: "1",
    title: "Team & Design Leadership",
    body: "I build and lead design teams that can operate with clarity under uncertainty. I've managed designers across multiple time zones, functions, and product lines — and I know how to grow people without losing momentum on the work.",
  },
  {
    number: "2",
    title: "Strategic Portfolio Management",
    body: "I align design strategy across product portfolios so that the whole is greater than the sum of its parts. I've turned fragmented product suites into coherent experiences — at AWS, at SAP, and at scale.",
  },
  {
    number: "3",
    title: "Speaking, Workshops & Upskilling",
    body: "I speak at conferences and run workshops on design leadership, AI in product design, and problem framing. My goal is always the same: leave the room with more clarity than it walked in with.",
  },
  {
    number: "4",
    title: "0-to-1 Innovation",
    body: "I've built products from zero — founding Ikemu, designing enterprise platforms from scratch. I know what it takes to turn a concept into something people actually use.",
  },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 4);
  const featuredPosts = blogPosts.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <AnimatedHero />

      {/* What I Can Do */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-xl">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase text-[#1a1a1a] mb-4">
            What I Can Do For You
          </h2>
          <p className="text-[#4a4a4a] text-base leading-relaxed mb-10">
            I help companies turn innovation into reality, taking AI-powered
            ideas from ideation to execution across portfolios.
          </p>

          <div>
            {services.map((s) => (
              <AccordionItem key={s.number} number={s.number} title={s.title}>
                {s.body}
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-black/10">
        <div className="max-w-xl">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase text-[#1a1a1a] mb-6">
            About Me
          </h2>
          <p className="text-[#4a4a4a] text-base leading-relaxed">
            I&apos;m Daria Tarawneh, VP of Design and design leader with 20+
            years turning ambiguity into products people actually use from
            startup UX to enterprise design strategy. I lead teams at scale,
            but I never stopped caring about craft — the pixel is where strategy
            either holds up or falls apart. Off the clock, I&apos;m on a stage,
            in a classroom, or writing about design leadership and AI.
          </p>

          <StatsRow />

          <Link
            href="/about"
            className="inline-block mt-10 border border-[#1a1a1a] text-[#1a1a1a] text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Read more about me
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-black/10">
        <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold uppercase text-[#1a1a1a] mb-2 max-w-2xl">
          My Projects Bring Together Strategy, Innovation, and Creative Energy
          Into the Enterprise World.
        </h2>
        <p className="text-[#4a4a4a] text-sm mb-10">Featured projects</p>

        <div className="flex flex-col gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block border border-[#E84E3A] text-[#E84E3A] text-sm font-display font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-[#E84E3A] hover:text-white transition-colors"
          >
            Browse All Projects
          </Link>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-black/10">
        <div className="mb-10">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase text-[#1a1a1a] mb-3">
            Design Insights & Ideas
          </h2>
          <p className="text-[#4a4a4a] text-base max-w-sm">
            From design trends to creative processes, these articles offer
            insights to help you elevate your craft, solve challenges, and spark
            new ideas for your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block border border-[#E84E3A] text-[#E84E3A] text-sm font-display font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-[#E84E3A] hover:text-white transition-colors"
          >
            Browse All Insights
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-black/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="w-32 h-32 rounded-full bg-[#E84E3A] flex items-center justify-center text-white font-bold text-3xl font-display mb-6">
              Hi
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase text-[#1a1a1a] mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-[#4a4a4a]">
              Let&apos;s work on something impactful together
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-[#E84E3A] font-medium mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full border border-[#1a1a1a]/20 rounded-lg px-4 py-2.5 text-sm bg-white/50 focus:outline-none focus:border-[#E84E3A] transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-[#E84E3A] font-medium mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="johnsmith@gmail.com"
                  className="w-full border border-[#1a1a1a]/20 rounded-lg px-4 py-2.5 text-sm bg-white/50 focus:outline-none focus:border-[#E84E3A] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-[#E84E3A] font-medium mb-1 block">
                Service Needed?
              </label>
              <select className="w-full border border-[#1a1a1a]/20 rounded-lg px-4 py-2.5 text-sm bg-white/50 focus:outline-none focus:border-[#E84E3A] transition-colors appearance-none">
                <option value="">Select...</option>
                <option>Team &amp; Design Leadership</option>
                <option>Strategic Portfolio Management</option>
                <option>Speaking or Workshop</option>
                <option>0-to-1 Innovation</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-[#E84E3A] font-medium mb-1 block">
                What Can I Help You...
              </label>
              <textarea
                rows={5}
                placeholder="Hello, I'd like to enquire about..."
                className="w-full border border-[#1a1a1a]/20 rounded-lg px-4 py-2.5 text-sm bg-white/50 focus:outline-none focus:border-[#E84E3A] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#1a1a1a] text-white font-display font-bold uppercase tracking-widest text-sm px-8 py-3 rounded-full hover:bg-[#E84E3A] transition-colors w-fit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
