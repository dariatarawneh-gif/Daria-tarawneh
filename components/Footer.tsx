import Link from "next/link";

const socialLinks = [
  { href: "https://twitter.com", label: "X (Twitter)", icon: "𝕏" },
  { href: "https://instagram.com", label: "Instagram", icon: "◎" },
  { href: "https://behance.net", label: "Behance", icon: "Bē" },
  { href: "https://dribbble.com", label: "Dribbble", icon: "⊛" },
];

export default function Footer() {
  return (
    <footer className="bg-[#D94E2C] text-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-sm opacity-80">
            © Copyright 2025. All Rights Reserved by{" "}
            <Link href="/" className="underline hover:opacity-100 transition-opacity">
              Daria Tarawneh
            </Link>
          </p>

          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
