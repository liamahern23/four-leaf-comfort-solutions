"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Ruler,
  ClipboardList,
  Search,
  Wind,
  DoorOpen,
  Wallpaper,
  FileText,
} from "lucide-react";

const steps = [
  {
    icon: Ruler,
    step: "01",
    title: "Measure Attic Square Footage",
    body: "We map out the full attic area to calculate material needs accurately — no guessing, no inflated estimates.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Check Existing Insulation Depth & R-Value",
    body: "We probe your current insulation in multiple spots to get an honest read on what you actually have — and what you need.",
  },
  {
    icon: Search,
    step: "03",
    title: "Inspect Air Leakage Points",
    body: "We check top plates, electrical penetrations, plumbing chases, recessed lights, and attic hatch seals — the spots most inspectors skip.",
  },
  {
    icon: Wind,
    step: "04",
    title: "Count Baffles & Assess Ventilation",
    body: "Proper ventilation protects your roof and prevents moisture buildup. We confirm baffles are in place and soffits are clear.",
  },
  {
    icon: DoorOpen,
    step: "05",
    title: "Inspect Attic Hatch & Access",
    body: "The hatch is often the biggest air leak in the house. We check insulation, weatherstripping, and whether it actually seals.",
  },
  {
    icon: Wallpaper,
    step: "06",
    title: "Inspect Exterior Walls Where Needed",
    body: "For rooms that run cold or hot regardless of HVAC, we assess wall cavities for hollow spots, settled fill, or missing insulation.",
  },
  {
    icon: FileText,
    step: "07",
    title: "Clear Written Scope & Quote",
    body: "Every inspection ends with a written summary of what we found, what we recommend, and exactly what it costs. No vague estimates.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="bg-green-dark py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-24" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            What We Actually Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl text-white leading-tight"
          >
            A thorough look,
            <br />
            start to finish.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-white/50 text-lg leading-relaxed"
          >
            Our inspection isn't a sales call. It's a genuine look at how your
            home is performing — so any work we recommend is grounded in what
            we actually found.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute left-[26px] top-8 bottom-8 w-px bg-white/10" />

          <div className="flex flex-col gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex gap-8 lg:gap-12 group"
              >
                {/* Step indicator */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="relative w-[52px] h-[52px] rounded-full bg-green-mid border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <s.icon size={20} className="text-white/60 group-hover:text-green-dark transition-colors duration-300" />
                    <span className="absolute -top-1 -right-1 text-[9px] font-bold text-gold/60 group-hover:text-green-dark/60 transition-colors">
                      {s.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pb-8 border-b border-white/5 last:border-0 flex-1 pt-3">
                  <h3 className="text-white font-semibold text-[17px] mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed max-w-lg">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          <a
            href="#contact"
            className="inline-flex items-center bg-gold hover:bg-gold-light text-green-dark font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            Schedule Free Inspection
          </a>
          <p className="text-white/30 text-sm">
            No pressure. No obligation. Just an honest look.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
