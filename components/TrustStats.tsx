"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarClock, Users, MapPin, BadgeCheck } from "lucide-react";

const stats = [
  {
    icon: CalendarClock,
    value: "25+",
    label: "Years of Family Experience",
  },
  {
    icon: Users,
    value: "Second",
    label: "Generation Business",
  },
  {
    icon: MapPin,
    value: "Locally",
    label: "Owned & Operated",
  },
  {
    icon: BadgeCheck,
    value: "Free",
    label: "No-Pressure Estimates",
  },
];

export default function TrustStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-green-dark py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <s.icon size={20} className="text-gold" />
              </div>
              <p className="font-serif text-3xl lg:text-4xl text-white">{s.value}</p>
              <p className="text-white/50 text-xs lg:text-sm font-medium tracking-wide uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
