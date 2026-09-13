export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  heroImage: string;
  bgColor: string;
  year: string;
  role: string;
  company: string;
  challenge: string;
  approach: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "sap-agentic",
    title: "Building SAP's Agentic Future",
    subtitle: "Leading the design of Joule Studio through SAP's shift to agentic AI",
    tags: ["Team Leadership", "Agentic AI"],
    description:
      "I led the team through SAP's shift to agentic AI — building Joule Studio while managing people, not just deliverables, through constant speed and uncertainty.",
    heroImage: "/images/projects/sap-agentic.jpg",
    bgColor: "#1a1040",
    year: "2024",
    role: "VP of Design",
    company: "SAP",
    challenge:
      "SAP needed to rapidly shift its product vision toward agentic AI. The challenge was designing an entirely new interaction paradigm — Joule Studio — while maintaining design quality, team cohesion, and delivery speed under extreme ambiguity.",
    approach:
      "I restructured the team around agentic workflows, established design principles for AI-first interactions, and created a feedback loop between design, product, and engineering that kept us aligned even as the product definition changed weekly.",
    outcome:
      "Joule Studio shipped as a flagship agentic experience. The team grew in capability and confidence. The design principles we established became the foundation for SAP's broader AI design system.",
  },
  {
    slug: "aws-portfolio",
    title: "From Fragmented to Strategic",
    subtitle: "Leading AWS's Product Portfolio Management Suite",
    tags: ["Strategic Portfolio"],
    description:
      "I led the teams behind AWS's portfolio management suite, aligning strategy across provisioning, compliance, security, and monitoring. The result: 4X growth, and a portfolio that finally worked as one.",
    heroImage: "/images/projects/aws-portfolio.jpg",
    bgColor: "#0d1a3a",
    year: "2022",
    role: "Director of Design",
    company: "AWS",
    challenge:
      "AWS's portfolio management tools had grown independently across different teams, creating a fragmented experience that confused enterprise customers who needed to manage complex, multi-account cloud environments.",
    approach:
      "I unified four separate design teams under a single strategic vision, established a shared design language, and built a cross-functional partnership with the product and engineering org that had never existed before.",
    outcome:
      "4X growth in product adoption. The suite became AWS's reference model for enterprise portfolio management, and the unified design approach we created was adopted as a template for other AWS product families.",
  },
  {
    slug: "miro-security",
    title: "Building Enterprise Trust",
    subtitle: "Security, Compliance, and AI at Miro",
    tags: ["AI Governance", "Security"],
    description:
      "I led the strategy behind Miro's enterprise security and compliance, authentication, authorization, permissions, and AI governance — turning a new regulation into a design standard the whole org trusted.",
    heroImage: "/images/projects/miro-security.jpg",
    bgColor: "#1e1040",
    year: "2023",
    role: "Head of Design",
    company: "Miro",
    challenge:
      "Enterprise customers were blocking Miro adoption due to security and compliance gaps. New AI regulations created additional urgency. We needed to design for trust in a product built for creativity.",
    approach:
      "I built a dedicated security design practice from scratch, partnered with legal and security teams to translate regulatory requirements into user-centered experiences, and created AI governance patterns that became models across the industry.",
    outcome:
      "Enterprise contract closures increased significantly. The security and compliance framework I designed became Miro's core trust narrative with Fortune 500 customers. Our AI governance work was cited externally as a best practice.",
  },
  {
    slug: "ikemu",
    title: "From Zero to Global",
    subtitle: "Founding Ikemu Across Three Countries",
    tags: ["0-to-1", "Founder"],
    description:
      "I founded Ikemu, a platform turning advertising into playable games, launched across Japan, New Zealand, and Australia, and built the team in Manila, owning product, business, and design from zero.",
    heroImage: "/images/projects/ikemu.jpg",
    bgColor: "#1a0a40",
    year: "2018",
    role: "Founder & CEO",
    company: "Ikemu",
    challenge:
      "The advertising industry was saturated with passive formats that users ignored. I saw an opportunity to transform brand messages into interactive games — but had to build the product, the business model, and the team simultaneously.",
    approach:
      "Starting in Tokyo, I validated the concept with local brands, built a small product team in Manila, and used each market launch (Japan, then New Zealand, then Australia) as a test of the business model before scaling.",
    outcome:
      "Ikemu launched in three markets, signed brand partnerships across APAC, and demonstrated a new format for interactive brand engagement. The experience became the foundation for my later work on AI-powered innovation at scale.",
  },
  {
    slug: "making-sense",
    title: "Making Sense of the Mess",
    subtitle: "A book about problem framing and how we see past the first answer",
    tags: ["Writer"],
    description:
      "Making Sense of the Mess is the book I'm writing on problem framing — why the first answer is usually just the loudest symptom, and how to find the frame that actually matters.",
    heroImage: "/images/projects/making-sense.jpg",
    bgColor: "#2a1560",
    year: "2025",
    role: "Author",
    company: "Independent",
    challenge:
      "Most organizations are excellent at solving the wrong problem. I wanted to write a book that helped leaders recognize when they're inside a bad frame — and give them a practical method for finding a better one.",
    approach:
      "I drew on 20+ years of design leadership and research in cognitive science to build a framework around problem reframing. The book weaves real cases from my career with accessible theory, in the tradition of Kahneman and Gladwell.",
    outcome:
      "In progress. Two chapters complete, working with an editor toward publication. The ideas in the book have already shaped consulting engagements and speaking invitations.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
