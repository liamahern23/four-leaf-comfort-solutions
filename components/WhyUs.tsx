"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Clipboard, Smile, Heart, MapPin } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Family Owned & Operated",
    body: "There's no franchise behind us, no national call center, and no subcontractors you've never met. You deal with us directly — from the first call to the final walkthrough.",
  },
  {
    icon: Clipboard,
    title: "Clear Measurements, Written Quotes",
    body: "We don't estimate from the driveway or give ranges. We measure the space, check what's there, and hand you a specific number in writing before any work begins.",
  },
  {
    icon: Smile,
    title: "No Pressure, Ever",
    body: "The inspection is free, and the quote is yours to keep. If you decide to go another direction, that's fine — we're not going to follow up five times or manufacture urgency.",
  },
  {
    icon: Heart,
    title: "Built Around Comfort & Health",
    body: "Properly insulated and air-sealed homes don't just feel better — they have fewer allergens, less dust infiltration, and more consistent air quality. That matters to us too.",
  },
  {
    icon: MapPin,
    title: "Local. We Know This Climate.",
    body: "Northeast Ohio winters are real. We know what R-value targets matter here, what moisture issues to watch for, and what our neighbors' homes actually need.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="bg-charcoal py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24" ref={ref}>
          {/* Left: sticky title block */}
          <div className="lg:w-80 flex-shrink-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Why Four Leaf
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6"
            >
              We do this
              <br />
              <span className="text-gold">differently.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/40 text-base leading-relaxed mb-10"
            >
              Big companies route your call to whoever's available. We show up
              ourselves, measure twice, and tell you the truth about what your
              home needs.
            </motion.p>

            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="#contact"
              className="inline-flex items-center bg-gold hover:bg-gold-light text-green-dark font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Schedule Free Inspection
            </motion.a>
          </div>

          {/* Right: pillars */}
          <div className="flex-1 flex flex-col divide-y divide-white/5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex gap-6 py-8 first:pt-0"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300 mt-0.5">
                  <p.icon size={18} className="text-gold/60 group-hover:text-gold transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[16px] mb-2">{p.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
