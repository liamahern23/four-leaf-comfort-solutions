"use client";

import { motion } from "framer-motion";
import { ArrowDown, ShieldCheck, MapPin, Home } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const badges = [
  { icon: Home, label: "Family Owned & Operated" },
  { icon: MapPin, label: "Northeast Ohio" },
  { icon: ShieldCheck, label: "Residential Insulation" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-green flex flex-col justify-center overflow-hidden">
      {/* Light texture */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Soft radial highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-white/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-gold/8 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 lg:pt-44 lg:pb-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0.1)}
            className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-8"
          >
            Northeast Ohio's Home Comfort Specialists
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[82px] text-white leading-[1.08] tracking-tight mb-8"
          >
            Your Home Should
            <br />
            <span className="text-gold">Feel Right</span>
            <br />
            in Every Room.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
          >
            Four Leaf Comfort Solutions helps Northeast Ohio homeowners fix
            rooms that are too hot, too cold, or just never comfortable — with
            honest attic and wall insulation work that makes a real difference.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.45)}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-green-dark font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
            >
              Schedule Free Inspection
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium text-base px-8 py-4 rounded-full transition-all duration-300"
            >
              See What We Check
              <ArrowDown size={16} />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            {...fadeUp(0.55)}
            className="flex flex-wrap gap-4"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2.5"
              >
                <Icon size={14} className="text-gold" />
                <span className="text-white/70 text-xs font-medium tracking-wide">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green/40 to-transparent" />
    </section>
  );
}
