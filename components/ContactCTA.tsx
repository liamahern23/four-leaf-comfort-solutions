"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-green-dark py-24 lg:py-36 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: copy */}
          <div className="lg:w-[480px] flex-shrink-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Get Started
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6"
            >
              Get Your Home Checked
              Before Another Season of
              <span className="text-gold"> Uneven Temperatures.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/45 text-base leading-relaxed mb-12"
            >
              We'll come out, take a full look at your attic and walls, and give
              you a written scope and quote before we leave. No obligation.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col gap-5"
            >
              {[
                { icon: Phone, label: "(330) 752-8971", href: "tel:3307528971" },
                { icon: Mail, label: "[Company URL]", href: "mailto:info@[Company URL]" },
                { icon: MapPin, label: "Serving Northeast Ohio", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 text-white/40 hover:text-white/70 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Icon size={15} className="text-gold/60 group-hover:text-gold transition-colors" />
                  </div>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            {submitted ? (
              <div className="bg-green-mid/40 border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <CheckCircle size={28} className="text-gold" />
                </div>
                <h3 className="text-white font-serif text-2xl mb-3">We'll be in touch.</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                  Thanks for reaching out. We typically respond within a few hours
                  and can usually schedule within a week.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/40 text-xs font-medium tracking-wide uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-gold/40 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/40 text-xs font-medium tracking-wide uppercase">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Best number to reach you"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-gold/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-white/40 text-xs font-medium tracking-wide uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Optional — for your written quote"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-white/40 text-xs font-medium tracking-wide uppercase">
                    Tell Us About Your Home
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Which rooms bother you most? Hot upstairs? Cold bedroom? Drafts? Anything helps."
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-gold/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-light text-green-dark font-semibold text-base px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/20"
                >
                  Schedule Free Inspection
                  <ArrowRight size={16} />
                </button>

                <p className="text-white/20 text-xs text-center">
                  No spam. No sales calls. Just a confirmation and a time that works.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
