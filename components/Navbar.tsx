"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/speaking", label: "Speaking" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F4F0]/90 backdrop-blur-sm border-b border-black/5">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#E84E3A] flex items-center justify-center text-white font-bold text-sm font-display">
            DT
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[#E84E3A] ${
                  pathname === link.href
                    ? "text-[#E84E3A]"
                    : "text-[#1a1a1a]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/illustrations"
            className="text-sm font-medium text-[#1a1a1a] hover:text-[#E84E3A] transition-colors"
          >
            Illustrations
          </Link>
          <Link
            href="/#contact"
            className="bg-[#1a1a1a] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#E84E3A] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-[#1a1a1a] mb-1.5" />
          <div className="w-5 h-0.5 bg-[#1a1a1a] mb-1.5" />
          <div className="w-5 h-0.5 bg-[#1a1a1a]" />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#F5F4F0] border-t border-black/5 px-6 py-4"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#1a1a1a] hover:text-[#E84E3A] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/illustrations"
                  className="text-sm font-medium text-[#1a1a1a] hover:text-[#E84E3A] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Illustrations
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="inline-block bg-[#1a1a1a] text-white text-sm font-medium px-5 py-2 rounded-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
