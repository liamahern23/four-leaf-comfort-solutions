"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
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
            ? "bg-green/92 backdrop-blur-md shadow-md shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[88px] lg:h-[96px]">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <Image
                src="/images/logo-primary.png"
                alt="Four Leaf Comfort Solutions"
                width={4031}
                height={3685}
                className="h-[64px] lg:h-[80px] w-auto object-contain"
                priority
              />
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
