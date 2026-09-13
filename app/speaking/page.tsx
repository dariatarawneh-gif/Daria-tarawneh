export default function Speaking() {
  const talks = [
    {
      event: "UX Leaders Summit",
      title: "AI Won't Replace Designers. Bad Framing Will.",
      location: "Berlin, Germany",
      date: "June 2026",
      type: "Keynote",
    },
    {
      event: "ProductCon",
      title: "Design Decisions at Scale: Managing Portfolios, Not Just Products",
      location: "San Francisco, CA",
      date: "March 2026",
      type: "Talk",
    },
    {
      event: "Miro Design Summit",
      title: "Building Trust in Enterprise AI: A Design Governance Framework",
      location: "Amsterdam, Netherlands",
      date: "November 2025",
      type: "Keynote",
    },
    {
      event: "SXSW Interactive",
      title: "From Founder to VP: What Scale Changes (and What It Shouldn't)",
      location: "Austin, TX",
      date: "March 2025",
      type: "Panel",
    },
    {
      event: "Design Matters",
      title: "Making Sense of the Mess: How Reframing Changes Everything",
      location: "Copenhagen, Denmark",
      date: "October 2024",
      type: "Talk",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#4a4a4a] mb-4">
          On Stage
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase leading-[0.9] text-[#1a1a1a] max-w-2xl">
          Speaking, Workshops & Upskilling
        </h1>
        <p className="text-[#4a4a4a] mt-6 max-w-lg">
          I speak at conferences and run workshops on design leadership, AI in
          product design, and problem framing. My goal is always the same:
          leave the room with more clarity than it walked in with.
        </p>
      </div>

      {/* Topics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          {
            topic: "Design Leadership",
            desc: "Managing teams at scale, building design culture, and staying close to the craft as you grow.",
          },
          {
            topic: "AI & Product Design",
            desc: "Designing for agentic AI, AI governance frameworks, and what AI actually changes about how we work.",
          },
          {
            topic: "Problem Framing",
            desc: "Why the first answer is usually wrong, and how to find the frame that actually matters.",
          },
        ].map((t) => (
          <div
            key={t.topic}
            className="bg-white/50 rounded-2xl p-6 border border-black/5"
          >
            <h3 className="font-display text-lg font-bold uppercase text-[#1a1a1a] mb-2">
              {t.topic}
            </h3>
            <p className="text-[#4a4a4a] text-sm leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>

      {/* Past talks */}
      <div className="border-t border-black/10 pt-16">
        <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold uppercase text-[#1a1a1a] mb-10">
          Past Talks
        </h2>

        <div className="flex flex-col">
          {talks.map((talk, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 py-6 border-b border-black/10"
            >
              <div className="md:col-span-2">
                <p className="font-display text-base font-bold uppercase text-[#1a1a1a] mb-1">
                  {talk.title}
                </p>
                <p className="text-[#E84E3A] text-sm font-medium">
                  {talk.event}
                </p>
              </div>
              <p className="text-[#4a4a4a] text-sm self-center">
                {talk.location}
              </p>
              <div className="flex items-center justify-between md:justify-end gap-4">
                <span className="text-xs font-medium border border-[#1a1a1a]/20 rounded-full px-3 py-1">
                  {talk.type}
                </span>
                <span className="text-[#4a4a4a] text-sm">{talk.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book me CTA */}
      <div className="mt-20 text-center">
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase text-[#1a1a1a] mb-4">
          Invite Me to Speak
        </h2>
        <p className="text-[#4a4a4a] mb-8 max-w-md mx-auto">
          Available for keynotes, panels, workshops, and company offsites.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-[#1a1a1a] text-white font-display font-bold uppercase tracking-widest text-sm px-8 py-3 rounded-full hover:bg-[#E84E3A] transition-colors"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
