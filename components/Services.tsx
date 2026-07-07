"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Attic Insulation",
    subtitle: "Blown-in & Batts",
    body: "We install blown-in cellulose or fiberglass insulation to bring your attic up to the R-49 target for our climate zone — or as close as your space allows. Every job starts with air sealing first.",
    detail: "Most impactful upgrade for comfort & energy use",
    accent: true,
  },
  {
    number: "02",
    title: "Wall Insulation",
    subtitle: "Dense Pack",
    body: "We drill small holes in your exterior walls, blow in dense-pack insulation, and patch clean. No major renovation required. Ideal for cold bedrooms, drafty rooms, or older homes with hollow walls.",
    detail: "Minimal disruption, lasting results",
    accent: false,
  },
  {
    number: "03",
    title: "Air Sealing",
    subtitle: "Top Plates & Penetrations",
    body: "Air sealing is often more valuable than insulation alone. We seal around electrical boxes, plumbing penetrations, top plates, dropped ceilings, and any other attic bypasses before adding insulation.",
    detail: "Required step before new insulation",
    accent: false,
  },
  {
    number: "04",
    title: "Baffles & Ventilation",
    subtitle: "Soffit to Ridge",
    body: "Baffles keep soffit vents clear so fresh air can move through your attic. Without them, blown insulation blocks the intake and creates moisture and heat problems. We install them right the first time.",
    detail: "Protects your roof and insulation investment",
    accent: false,
  },
  {
    number: "05",
    title: "Insulation Removal",
    subtitle: "Old, Damaged, or Contaminated",
    body: "Old blown insulation with rodent damage, moisture staining, or simply too many years of compaction sometimes needs to come out before new material goes in. We handle removal cleanly and completely.",
    detail: "Full removal & disposal included",
    accent: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20" ref={ref}>
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              What We Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl text-charcoal leading-tight"
            >
              Residential insulation,
              <br />
              done properly.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal-light max-w-sm text-base leading-relaxed"
          >
            We don't do commercial, new construction, or a dozen other things.
            We do residential insulation — and we do it well.
          </motion.p>
        </div>

        {/* Services list */}
        <div className="flex flex-col gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group rounded-2xl p-7 lg:p-9 border transition-all duration-300 cursor-default ${
                s.accent
                  ? "bg-white border-green/30 shadow-md shadow-green/8"
                  : "bg-white border-cream-warm hover:border-green/20 hover:shadow-lg hover:shadow-green/5"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                {/* Number */}
                <span
                  className={`text-4xl font-serif font-medium flex-shrink-0 ${
                    s.accent ? "text-green/20" : "text-charcoal/10"
                  }`}
                >
                  {s.number}
                </span>

                {/* Title block */}
                <div className="lg:w-64 flex-shrink-0">
                  <h3
                    className={`font-semibold text-xl mb-1 ${
                      s.accent ? "text-green-dark" : "text-charcoal"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`text-xs font-medium tracking-widest uppercase ${
                      s.accent ? "text-green-muted" : "text-green-muted"
                    }`}
                  >
                    {s.subtitle}
                  </p>
                </div>

                {/* Body */}
                <p
                  className={`flex-1 text-sm leading-relaxed ${
                    s.accent ? "text-charcoal-light" : "text-charcoal-light"
                  }`}
                >
                  {s.body}
                </p>

                {/* Detail tag */}
                <div className="flex-shrink-0 flex items-center gap-2">
                  <span
                    className={`text-xs px-3 py-1.5 rounded-full border ${
                      s.accent
                        ? "border-green/20 text-green-mid"
                        : "border-green/15 text-green-mid"
                    }`}
                  >
                    {s.detail}
                  </span>
                  <ArrowRight
                    size={16}
                    className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                      s.accent ? "text-gold" : "text-green-dark"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
