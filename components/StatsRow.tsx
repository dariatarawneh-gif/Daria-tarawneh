"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
}

function StatCounter({ value, suffix = "", label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(stepValue * step), value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <motion.div
        className="font-display text-[clamp(3rem,6vw,5rem)] font-bold text-[#E84E3A] leading-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        {count.toLocaleString()}
        {suffix}
      </motion.div>
      <p className="text-sm text-[#4a4a4a] mt-1">{label}</p>
    </div>
  );
}

export default function StatsRow() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      <StatCounter value={57} label="Teams lead" />
      <StatCounter value={14} label="Products shipped" />
      <StatCounter value={283586} suffix="" label="Revenue impact" />
    </div>
  );
}
