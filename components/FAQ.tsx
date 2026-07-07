"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How do I know if I need more insulation?",
    a: "A few common signs: rooms that are noticeably warmer or cooler than the rest of the house, heating or cooling bills that seem high for your home's size, or an attic you haven't looked at in 10+ years. The honest answer is — most homes built before 2000 need more. Our inspection takes the guesswork out of it completely.",
  },
  {
    q: "Do you offer free inspections?",
    a: "Yes. We come out, take a full look at your attic and any problem areas in your home, and give you a written quote at no charge. There's no obligation to move forward. We think homeowners deserve to know what they're dealing with before they commit to anything.",
  },
  {
    q: "Do you insulate walls?",
    a: "We do. We specialize in dense pack wall insulation — we drill small access holes through the exterior or interior, blow in cellulose tightly, and patch the holes clean. It's a minimally invasive process that makes a major difference for rooms that run cold or hot regardless of what your thermostat says.",
  },
  {
    q: "Do you remove old insulation?",
    a: "Yes. When old insulation has rodent damage, moisture staining, or has just compressed to the point where it's doing very little, we'll remove it before installing new material. We handle removal and disposal as part of the job — it's not an add-on you have to manage.",
  },
  {
    q: "How long does installation take?",
    a: "Most attic insulation jobs — including air sealing — are completed in a single day. Wall insulation timing depends on how many rooms we're doing, but a typical project runs one to two days. We'll give you a specific timeline when we quote the work.",
  },
  {
    q: "Will insulation actually make my home more comfortable?",
    a: "In most cases, yes — significantly. If your discomfort comes from heat loss, heat gain, air infiltration, or inconsistent temperatures room to room, insulation and air sealing directly addresses those causes. We won't oversell it: if we find something else is contributing, we'll tell you.",
  },
  {
    q: "How does pricing work?",
    a: "We provide clear written quotes after inspection so homeowners can make a confident decision. The price you see is what you pay — no ranges, no surprises after the job starts.",
  },
];

function FAQItem({ item, index, inView }: { item: typeof faqs[0]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-charcoal/10 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-7 text-left group"
      >
        <span className="font-medium text-charcoal text-[16px] leading-snug group-hover:text-green-dark transition-colors">
          {item.q}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full border border-charcoal/15 flex items-center justify-center mt-0.5 group-hover:border-green/30 group-hover:bg-green/5 transition-all">
          {open ? (
            <Minus size={14} className="text-green-dark" />
          ) : (
            <Plus size={14} className="text-charcoal/50" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-charcoal-light text-[15px] leading-relaxed pb-7 max-w-2xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24" ref={ref}>
          {/* Left */}
          <div className="lg:w-72 flex-shrink-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Questions
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl text-charcoal leading-tight mb-6"
            >
              Common
              <br />
              questions.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-charcoal-light text-base leading-relaxed mb-8"
            >
              Still not sure? Give us a call or send a message. We're happy to
              talk through your situation before you schedule anything.
            </motion.p>
            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="tel:3307528971"
              className="inline-flex items-center text-green-dark font-semibold text-sm hover:text-green-mid transition-colors"
            >
              (330) 752-8971 →
            </motion.a>
          </div>

          {/* Right: FAQ list */}
          <div className="flex-1">
            {faqs.map((item, i) => (
              <FAQItem key={item.q} item={item} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
