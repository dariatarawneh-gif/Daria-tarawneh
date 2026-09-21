"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blogs" },
  { href: "/speaking", label: "Speaking" },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="overflow-hidden rounded-full">
      <Link
        href={href}
        onClick={onClick}
        className="relative block px-3.5 py-2 rounded-full hover:bg-[#E84E3A]/5 transition-colors group"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Default label — slides up on hover */}
        <span
          className={`block text-sm font-medium whitespace-nowrap transition-transform duration-[280ms] ease-[cubic-bezier(.4,0,.2,1)] group-hover:-translate-y-full ${
            isActive ? "text-[#1a1a1a]" : "text-[#1a1a1a]"
          }`}
        >
          {label}
        </span>
        {/* Hover label — comes up from below, red */}
        <span
          className="absolute inset-x-0 top-full flex justify-center px-3.5 py-2 text-sm font-medium text-[#E84E3A] whitespace-nowrap transition-transform duration-[280ms] ease-[cubic-bezier(.4,0,.2,1)] group-hover:-translate-y-full"
          aria-hidden
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Floating pill navbar */}
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.nav
          className="pointer-events-auto flex items-center bg-white/90 backdrop-blur-md rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.10),0_1px_4px_rgba(0,0,0,0.06)] border border-white/60 p-1.5"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Avatar */}
          <Link
            href="/"
            className="w-11 h-11 rounded-full shrink-0 mr-2 border-2 border-[#f0eeea] bg-gradient-to-br from-[#f0a090] to-[#E84E3A] flex items-center justify-center text-white font-bold text-sm overflow-hidden"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            DT
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0 px-2">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ul>

          {/* Contact — left-to-right fill */}
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center relative overflow-hidden text-white text-sm font-medium px-5 py-2.5 rounded-full ml-1 whitespace-nowrap isolate group"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "#1a1a1a",
            }}
          >
            {/* sliding fill */}
            <span className="absolute inset-0 bg-[#E84E3A] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[380ms] ease-[cubic-bezier(.4,0,.2,1)] -z-10" />
            Contact
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-[#1a1a1a] mb-1.5" />
            <div className="w-5 h-0.5 bg-[#1a1a1a] mb-1.5" />
            <div className="w-5 h-0.5 bg-[#1a1a1a]" />
          </button>
        </motion.nav>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed top-24 left-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-3xl shadow-xl border border-white/60 p-5"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-sm font-medium text-[#1a1a1a] hover:text-[#E84E3A] px-3 py-2.5 rounded-xl hover:bg-[#E84E3A]/5 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 pt-3 border-t border-black/5">
                <Link
                  href="/#contact"
                  className="block text-center bg-[#1a1a1a] text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-[#E84E3A] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
