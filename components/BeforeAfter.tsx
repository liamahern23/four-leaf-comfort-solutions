"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const cards = [
  {
    before: {
      label: "Attic — Before",
      points: [
        "3–4 inches of settled blown-in",
        "R-11 effective value or less",
        "Open top plates leaking warm air",
        "Blocked soffit vents, no baffles",
        "Attic hatch with no insulation",
      ],
      visual: {
        description: "Thin, flat, gray insulation layer barely covering joists",
        color: "from-amber-900/20 to-amber-950/40",
      },
    },
    after: {
      label: "Attic — After",
      points: [
        "14–16 inches of blown-in insulation",
        "R-49 achieved across full area",
        "Top plates sealed with foam & caulk",
        "Baffles installed at every rafter bay",
        "Hatch insulated and weatherstripped",
      ],
      visual: {
        description: "Deep, even, fluffy insulation filling full joist depth",
        color: "from-green-900/30 to-green-dark/50",
      },
    },
  },
  {
    before: {
      label: "Bedroom Wall — Before",
      points: [
        "Hollow wall cavities, no insulation",
        "Cold to the touch in winter",
        "Drafts along baseboard and trim",
        "HVAC running constantly to compensate",
        "Temperature varies 12–18° from hall",
      ],
      visual: {
        description: "Cross-section showing empty stud bays, bare drywall",
        color: "from-slate-800/20 to-slate-900/40",
      },
    },
    after: {
      label: "Bedroom Wall — After",
      points: [
        "Dense pack cellulose in every cavity",
        "Wall feels warmer to the touch",
        "Drafts eliminated at perimeter",
        "HVAC cycles at normal frequency",
        "Room temperature matches rest of home",
      ],
      visual: {
        description: "Cross-section showing packed, tight insulation fill",
        color: "from-green-900/30 to-green-dark/50",
      },
    },
  },
];

export default function BeforeAfter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-cream-warm py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="max-w-xl mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Real Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl text-charcoal leading-tight"
          >
            Before we leave,
            <br />
            you'll see the difference.
          </motion.h2>
        </div>

        {/* Before/After cards */}
        <div className="flex flex-col gap-8">
          {cards.map((card, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + ci * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              {/* Before */}
              <div className="bg-white rounded-2xl overflow-hidden border border-cream-dark/40">
                {/* Visual placeholder */}
                <div className={`h-44 bg-gradient-to-br ${card.before.visual.color} relative flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 9px)`,
                  }} />
                  <div className="text-center px-6">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                      <X size={11} />
                      Before
                    </div>
                    <p className="text-white/40 text-xs">{card.before.visual.description}</p>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-charcoal font-semibold text-[15px] mb-5 tracking-wide uppercase text-xs text-charcoal-light">
                    {card.before.label}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {card.before.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm text-charcoal-light">
                        <X size={14} className="text-red-400/70 flex-shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* After */}
              <div className="bg-green-dark rounded-2xl overflow-hidden border border-green-mid/30">
                {/* Visual placeholder */}
                <div className={`h-44 bg-gradient-to-br ${card.after.visual.color} relative flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 6px, rgba(255,255,255,0.3) 6px, rgba(255,255,255,0.3) 7px)`,
                  }} />
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 14px, rgba(200,150,62,0.3) 14px, rgba(200,150,62,0.3) 15px)`,
                  }} />
                  <div className="text-center px-6">
                    <div className="inline-flex items-center gap-2 bg-green-muted/40 border border-gold/30 text-gold text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                      <Check size={11} />
                      After
                    </div>
                    <p className="text-white/30 text-xs">{card.after.visual.description}</p>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-gold/60 font-semibold uppercase text-xs tracking-wide mb-5">
                    {card.after.label}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {card.after.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm text-white/60">
                        <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
