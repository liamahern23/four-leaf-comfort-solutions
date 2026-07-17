"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserRound } from "lucide-react";

const owners = [
  {
    name: "Liam Ahern",
    title: "Co-Owner",
    photoAlt: "Headshot of Liam Ahern, Co-Owner of Four Leaf Comfort Solutions",
    bio: [
      "Liam believes every homeowner deserves honest advice, clear communication, and an experience that feels straightforward from the first conversation to the final walkthrough. As a co-owner of Four Leaf Comfort Solutions, he's committed to helping homeowners make informed decisions while ensuring every project reflects the quality, professionalism, and care the company is known for.",
      "His focus is building lasting relationships through transparency, reliability, and treating every home with the same level of respect he would expect in his own.",
    ],
  },
  {
    name: "Aidan Ahern",
    title: "Co-Owner",
    photoAlt: "Headshot of Aidan Ahern, Co-Owner of Four Leaf Comfort Solutions",
    bio: [
      "Aidan is dedicated to providing homeowners with dependable service, thoughtful recommendations, and a commitment to quality workmanship on every project. As a co-owner of Four Leaf Comfort Solutions, he believes every customer deserves honest communication, attention to detail, and confidence that the job will be completed the right way.",
      "He takes pride in building trust through consistency, professionalism, and making sure every homeowner has a positive experience from beginning to end.",
    ],
  },
];

export default function Owners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="team" className="bg-white py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16 lg:mb-20" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Family Behind The Business
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl text-charcoal leading-tight"
          >
            Meet the Owners
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {owners.map((o, i) => (
            <motion.div
              key={o.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-cream rounded-2xl border border-cream-warm p-8 lg:p-10 hover:border-green/20 hover:shadow-xl hover:shadow-green/5 transition-all duration-300"
            >
              {/* Headshot placeholder — swap the div below for a next/image once photos are available */}
              <div
                role="img"
                aria-label={o.photoAlt}
                className="w-28 h-28 rounded-full bg-green-dark/8 border border-green/15 flex items-center justify-center mb-6"
              >
                <UserRound size={40} className="text-green/40" strokeWidth={1.5} />
              </div>

              <h3 className="font-serif text-2xl text-charcoal mb-1">{o.name}</h3>
              <p className="text-green-mid text-xs font-semibold tracking-widest uppercase mb-5">
                {o.title}
              </p>

              <div className="flex flex-col gap-4">
                {o.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-charcoal-light text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
