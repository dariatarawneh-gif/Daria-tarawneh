"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

export default function AccordionItem({
  number,
  title,
  children,
}: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#1a1a1a]/20">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-display text-xl font-bold uppercase tracking-wide text-[#1a1a1a] group-hover:text-[#E84E3A] transition-colors">
          {number}. {title}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-[#1a1a1a] ml-4 shrink-0"
        >
          ∧
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-[#4a4a4a] text-base leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
