import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { label: "Full Renovations", href: "/services" },
  { label: "Annual Maintenance (AMC)", href: "/services" },
  { label: "AC Services", href: "/services" },
  { label: "Green Areas & Landscaping", href: "/services" },
];

const pages = [
  { label: "Home", href: "/" },
  { label: "Services & Pricing", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-renora-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-playfair font-bold text-2xl tracking-widest uppercase text-white">
                RENORA
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase font-inter text-renora-gold mt-0.5">
                Dubai
              </span>
            </Link>
            <p className="text-white/60 text-sm font-inter leading-relaxed mt-4">
              Quality renovations and trusted maintenance for Dubai&apos;s
              residential market. Excellence in every project.
            </p>
            <div className="mt-6 h-px w-12 bg-renora-gold" />
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-sm tracking-widest uppercase text-renora-gold mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-white/60 hover:text-renora-gold text-sm font-inter transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-playfair text-sm tracking-widest uppercase text-renora-gold mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {pages.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="text-white/60 hover:text-renora-gold text-sm font-inter transition-colors duration-200"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-sm tracking-widest uppercase text-renora-gold mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-renora-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm font-inter leading-relaxed">
                  Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-renora-gold shrink-0" />
                <Link
                  href="https://wa.me/971506568453"
                  className="text-white/60 hover:text-renora-gold text-sm font-inter transition-colors"
                >
                  WhatsApp Us
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-renora-gold shrink-0" />
                <Link
                  href="mailto:info@renoradubai.com"
                  className="text-white/60 hover:text-renora-gold text-sm font-inter transition-colors"
                >
                  info@renoradubai.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-inter tracking-wide">
            © {new Date().getFullYear()} Renora. All rights reserved. Dubai, UAE.
          </p>
          <p className="text-white/30 text-xs font-inter italic">
            Quality Over Volume · Predictable Cash Flow · Mutual Respect
          </p>
        </div>
      </div>
    </footer>
  );
}
