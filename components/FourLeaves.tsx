"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FourLeafIcon from "@/components/icons/FourLeafIcon";

const leaves = [
  {
    title: "Honesty",
    body: "We believe trust is earned through transparency. That's why we provide honest recommendations, explain every option, and never recommend services your home doesn't truly need.",
  },
  {
    title: "Craftsmanship",
    body: "Quality isn't just about the materials we install — it's about the care, attention to detail, and pride we bring to every project. We believe in doing the job right the first time, without cutting corners.",
  },
  {
    title: "Reliability",
    body: "When you choose Four Leaf Comfort Solutions, you can expect clear communication, dependable scheduling, and a team that stands behind its work. We show up when we say we will and treat your home with the respect it deserves.",
  },
  {
    title: "Comfort",
    body: "Everything we do is centered around helping homeowners enjoy a healthier, quieter, more comfortable, and more energy-efficient home. Our goal is to provide solutions that make a lasting difference for you and your family.",
  },
];

export default function FourLeaves() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-cream py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16 lg:mb-20" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            What Our Name Means
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl text-charcoal leading-tight"
          >
            The Four Leaves of Four Leaf Comfort Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-charcoal-light text-lg leading-relaxed"
          >
            Our name represents something meaningful—it represents the four
            principles that guide every estimate, every installation, and
            every homeowner we serve.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {leaves.map((leaf, i) => (
            <motion.div
              key={leaf.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-white rounded-2xl p-7 border border-cream-warm hover:border-green/20 hover:shadow-xl hover:shadow-green/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-green-dark/5 flex items-center justify-center mb-5 group-hover:bg-green-dark transition-colors duration-300">
                <FourLeafIcon
                  size={22}
                  className="text-green-dark group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-semibold text-charcoal text-[17px] mb-3 leading-snug">
                {leaf.title}
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                {leaf.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 text-center text-charcoal-light text-base lg:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          These four leaves are more than values—they're the foundation of
          who we are and the standard we hold ourselves to every single day.
        </motion.p>
      </div>
    </section>
  );
}
