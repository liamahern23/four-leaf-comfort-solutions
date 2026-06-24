"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Thermometer,
  Wind,
  Gauge,
  Layers,
  AlertTriangle,
  DoorOpen,
} from "lucide-react";

const problems = [
  {
    icon: Thermometer,
    title: "Upstairs Is Unbearable in Summer",
    body: "If the second floor is 10–15° warmer than the main floor, your attic insulation is the problem — not your HVAC.",
  },
  {
    icon: Wind,
    title: "Cold Bedrooms in Winter",
    body: "Exterior walls without insulation turn bedrooms into iceboxes. Dense pack insulation changes that fast.",
  },
  {
    icon: DoorOpen,
    title: "Drafts You Can't Track Down",
    body: "Most drafts come from air leaks around top plates, electrical penetrations, and attic hatches — not windows.",
  },
  {
    icon: Gauge,
    title: "HVAC Running Constantly",
    body: "Your system works overtime because conditioned air is leaking out faster than it can keep up. Sealing and insulating fixes the source.",
  },
  {
    icon: Layers,
    title: "Old, Thin, or Settled Insulation",
    body: "Insulation compresses over time and loses R-value. Homes built before 2000 almost always need more.",
  },
  {
    icon: AlertTriangle,
    title: "Poor Attic Ventilation",
    body: "Blocked soffits and missing baffles trap heat and moisture, shortening roof life and making the whole house harder to cool.",
  },
];

export default function Problems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problems" className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Sound familiar?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl text-charcoal leading-tight"
          >
            These aren't quirks.
            <br />
            They're fixable problems.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-charcoal-light text-lg leading-relaxed"
          >
            Most homeowners live with these issues for years before realizing
            the solution is straightforward. We check everything in one visit.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-white rounded-2xl p-7 border border-cream-warm hover:border-green/20 hover:shadow-xl hover:shadow-green/5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-green-dark/5 flex items-center justify-center mb-5 group-hover:bg-green-dark group-hover:text-white transition-colors duration-300">
                <p.icon size={20} className="text-green-dark group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-charcoal text-[17px] mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 text-center"
        >
          <p className="text-charcoal-light mb-5 text-base">
            Not sure which applies to you? We'll figure it out together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-green-dark hover:bg-green-mid text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green/20"
          >
            Get Your Home Checked Before Another Season of Uneven Temperatures
          </a>
        </motion.div>
      </div>
    </section>
  );
}
