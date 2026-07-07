"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Our Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-green-dark/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gold/20 border border-gold/40 group-hover:bg-gold/30 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C9 6 4 7 4 12c0 2.2.9 4.2 2.3 5.7C7.5 19.1 9.6 20 12 20s4.5-.9 5.7-2.3C19.1 16.2 20 14.2 20 12c0-5-5-6-8-10z" opacity="0.3"/>
                  <path d="M12 2C10 5 7 6 5.5 9c1 .5 2.1.8 3.3.8C11 9.8 12.8 9 14 7.7c.3 1.5.1 3.1-.7 4.5 1.1-.2 2.2-.8 3-1.8C17.5 8.5 17 5 12 2z"/>
                  <path d="M8.8 9.8C7 10.4 5.5 11.9 5 14c.8-.3 1.6-.4 2.5-.4C9 13.6 10.4 14.4 11 15.7c.6-1.3.6-2.9-.2-4.4 1 .8 1.7 2 1.7 3.3 0 2.2-1.8 4-4 4-2.2 0-4-1.8-4-4 0-2.9 1.9-5.3 4.3-5.8z" opacity="0.6"/>
                </svg>
              </div>
              <div>
                <span className="block text-white font-semibold text-sm tracking-wide leading-tight">Four Leaf</span>
                <span className="block text-gold/80 text-xs tracking-widest uppercase leading-tight">Comfort Solutions</span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:3307528971"
                className="flex items-center gap-2 text-gold/80 hover:text-gold text-sm font-medium transition-colors"
              >
                <Phone size={15} />
                (330) 752-8971
              </a>
              <a
                href="#contact"
                className="bg-gold hover:bg-gold-light text-green-dark text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
              >
                Schedule Inspection
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-green-dark pt-20 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6 pt-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white text-2xl font-medium tracking-wide border-b border-white/10 pb-6"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 bg-gold text-green-dark text-center font-semibold px-6 py-4 rounded-full text-lg"
              >
                Schedule Free Inspection
              </a>
              <a
                href="tel:3307528971"
                className="text-gold/70 text-center text-base"
              >
                (330) 752-8971
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
