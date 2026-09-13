import StatsRow from "@/components/StatsRow";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#4a4a4a] mb-4">
          About Me
        </p>
        <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] text-[#1a1a1a] max-w-3xl">
          Design Leader, Speaker, Author
        </h1>
      </div>

      {/* Bio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <div>
          {/* Photo placeholder */}
          <div className="w-full aspect-[4/5] rounded-2xl bg-[#e0ddd8] mb-6" />
        </div>

        <div>
          <p className="text-[#4a4a4a] text-base leading-relaxed mb-6">
            I&apos;m Daria Tarawneh, VP of Design and design leader with 20+
            years turning ambiguity into products people actually use — from
            startup UX to enterprise design strategy.
          </p>
          <p className="text-[#4a4a4a] text-base leading-relaxed mb-6">
            I lead teams at scale, but I never stopped caring about craft. The
            pixel is where strategy either holds up or falls apart. Off the
            clock, I&apos;m on a stage, in a classroom, or writing about design
            leadership and AI.
          </p>
          <p className="text-[#4a4a4a] text-base leading-relaxed mb-10">
            Currently VP of Design at SAP, where I&apos;m leading the design of
            Joule Studio — SAP&apos;s agentic AI experience. Previously: AWS,
            Miro, and founder of Ikemu across three countries.
          </p>

          <StatsRow />

          <div className="flex gap-4 mt-10">
            <Link
              href="/projects"
              className="bg-[#1a1a1a] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#E84E3A] transition-colors"
            >
              See my work
            </Link>
            <Link
              href="/#contact"
              className="border border-[#1a1a1a] text-[#1a1a1a] text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="border-t border-black/10 pt-16">
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase text-[#1a1a1a] mb-10">
          Experience
        </h2>

        <div className="flex flex-col gap-0">
          {[
            {
              role: "VP of Design",
              company: "SAP",
              period: "2023 – Present",
              note: "Joule Studio · Agentic AI",
            },
            {
              role: "Head of Design",
              company: "Miro",
              period: "2021 – 2023",
              note: "Enterprise Trust · Security · AI Governance",
            },
            {
              role: "Director of Design",
              company: "AWS",
              period: "2019 – 2021",
              note: "Strategic Portfolio · 4X Growth",
            },
            {
              role: "Founder & CEO",
              company: "Ikemu",
              period: "2016 – 2019",
              note: "Japan · New Zealand · Australia",
            },
          ].map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 py-6 border-b border-black/10"
            >
              <div>
                <p className="font-display text-lg font-bold uppercase text-[#1a1a1a]">
                  {exp.role}
                </p>
                <p className="text-[#E84E3A] font-medium text-sm">
                  {exp.company}
                </p>
              </div>
              <p className="text-[#4a4a4a] text-sm self-center">{exp.note}</p>
              <p className="text-[#4a4a4a] text-sm md:text-right self-center">
                {exp.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
