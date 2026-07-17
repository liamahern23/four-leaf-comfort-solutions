"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto bg-cream rounded-3xl border border-green/10 shadow-xl shadow-green/5 p-10 lg:p-16 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-5">
            Ready to Make Your Home More Comfortable?
          </h2>
          <p className="text-charcoal-light text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-9">
            Whether you're dealing with hot upstairs bedrooms, cold drafts,
            high energy bills, or aging insulation, we're here to help.
            Schedule your free estimate today and let our family help make
            your home more comfortable year-round.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-green-dark hover:bg-green text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green/20"
          >
            Schedule Your Free Estimate
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
