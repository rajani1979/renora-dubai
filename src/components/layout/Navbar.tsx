"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome || menuOpen
          ? "bg-white shadow-sm border-b border-renora-gray-light"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className={`font-playfair font-bold text-2xl tracking-widest uppercase transition-colors duration-300 ${
              scrolled || !isHome || menuOpen
                ? "text-renora-black"
                : "text-white"
            }`}
          >
            RENORA
          </span>
          <span
            className={`text-[10px] tracking-[0.25em] uppercase font-inter transition-colors duration-300 ${
              scrolled || !isHome || menuOpen
                ? "text-renora-gold"
                : "text-renora-gold-light"
            }`}
          >
            Dubai
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-widest uppercase font-inter font-medium transition-colors duration-200 relative group ${
                  scrolled || !isHome || menuOpen
                    ? "text-renora-black hover:text-renora-gold"
                    : "text-white/90 hover:text-white"
                } ${pathname === link.href ? "text-renora-gold!" : ""}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 bg-renora-gold`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="bg-renora-gold hover:bg-renora-gold-dark text-white text-xs tracking-[0.15em] uppercase font-inter font-semibold px-6 py-3 transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors ${
            scrolled || !isHome || menuOpen
              ? "text-renora-black"
              : "text-white"
          }`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-renora-gray-light ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-widest uppercase font-inter font-medium text-renora-black hover:text-renora-gold transition-colors ${
                  pathname === link.href ? "text-renora-gold" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              className="inline-block bg-renora-gold hover:bg-renora-gold-dark text-white text-xs tracking-[0.15em] uppercase font-inter font-semibold px-6 py-3 transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
