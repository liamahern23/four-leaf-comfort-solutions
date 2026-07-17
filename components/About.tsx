"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="bg-cream py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24" ref={ref}>
          {/* Left: sticky title block */}
          <div className="lg:w-96 flex-shrink-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Our Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl text-charcoal leading-tight mb-6"
            >
              About Four Leaf Comfort Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-green-dark text-lg font-medium leading-relaxed"
            >
              Family owned. Second generation. Built on over 25 years of
              family experience in the insulation industry.
            </motion.p>
          </div>

          {/* Right: body copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col gap-5 text-charcoal-light text-base lg:text-lg leading-relaxed"
          >
            <p>
              Four Leaf Comfort Solutions is a second-generation family
              business, built on more than 25 years of family experience in
              the insulation industry. We grew up around this trade, and we
              started Four Leaf to bring that hands-on knowledge to
              homeowners across Northeast Ohio in a way that feels personal
              rather than corporate.
            </p>
            <p>
              We've paired that experience with modern technology, clear
              communication, and a level of customer service that a lot of
              insulation companies skip. That means faster answers, honest
              recommendations, and a written quote you can actually
              understand — not a sales pitch.
            </p>
            <p>
              Our focus is simple: give homeowners the information they need
              to make a confident decision, then do quality work that holds
              up. We treat every attic, every wall, and every home we work in
              as if it were our own.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
