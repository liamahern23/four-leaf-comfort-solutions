import { Phone, Mail, MapPin } from "lucide-react";

const links = [
  { label: "Our Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Why Four Leaf", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Schedule Inspection", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:w-72">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C9 6 4 7 4 12c0 2.2.9 4.2 2.3 5.7C7.5 19.1 9.6 20 12 20s4.5-.9 5.7-2.3C19.1 16.2 20 14.2 20 12c0-5-5-6-8-10z" opacity="0.3"/>
                  <path d="M12 2C10 5 7 6 5.5 9c1 .5 2.1.8 3.3.8C11 9.8 12.8 9 14 7.7c.3 1.5.1 3.1-.7 4.5 1.1-.2 2.2-.8 3-1.8C17.5 8.5 17 5 12 2z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Four Leaf Comfort Solutions</p>
                <p className="text-gold/50 text-xs">Northeast Ohio</p>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed mb-6">
              Family-owned residential insulation. Attic insulation, wall insulation,
              air sealing, baffles, and insulation removal — done right, for real.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:3307528971" className="flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors text-sm">
                <Phone size={14} className="text-gold/50" />
                (330) 752-8971
              </a>
              <a href="mailto:info@[Company URL]" className="flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors text-sm">
                <Mail size={14} className="text-gold/50" />
                [Company URL]
              </a>
              <span className="flex items-center gap-3 text-white/40 text-sm">
                <MapPin size={14} className="text-gold/50" />
                [Address]
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 flex flex-col sm:flex-row gap-12">
            <div>
              <p className="text-white/20 text-xs font-semibold tracking-widest uppercase mb-5">
                Site
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-white/40 hover:text-white text-sm transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/20 text-xs font-semibold tracking-widest uppercase mb-5">
                Services
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Attic Insulation",
                  "Wall Insulation",
                  "Air Sealing",
                  "Baffles & Ventilation",
                  "Insulation Removal",
                ].map((s) => (
                  <li key={s}>
                    <span className="text-white/40 text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Four Leaf Comfort Solutions. All rights reserved.
          </p>
          <p className="text-white/15 text-xs">
            Family owned & operated · Northeast Ohio
          </p>
        </div>
      </div>
    </footer>
  );
}
