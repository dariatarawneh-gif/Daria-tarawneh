"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedHero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center bg-[#F5F4F0]">
      {/* Animated blob background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-24 w-[600px] h-[600px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, #E84E3A 0%, #f0a090 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.15, 1.05, 1.2, 1],
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 30, -10, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, #E84E3A 0%, #f0c0b0 50%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{
            scale: [1, 1.1, 0.95, 1.15, 1],
            x: [0, -20, 10, -30, 0],
            y: [0, 20, -10, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <motion.p
          className="text-sm font-medium tracking-[0.2em] uppercase text-[#4a4a4a] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello I am Daria , Design Leader at SAP, Team Manager, Speaker and Author
        </motion.p>

        <motion.h1
          className="font-display text-[clamp(3rem,8vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-[#1a1a1a] mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Leading Design Through Complexity and Growth. From Startups to
          Enterprise Scale.
        </motion.h1>

        <motion.div
          className="flex items-center gap-6 text-sm text-[#4a4a4a]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <span>Scroll down</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-12 rounded-full border-2 border-[#4a4a4a] flex items-start justify-center pt-2">
              <motion.div
                className="w-1 h-2 bg-[#4a4a4a] rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
          <Link
            href="/projects"
            className="hover:text-[#E84E3A] transition-colors"
          >
            to see projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
