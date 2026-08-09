"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const packages = [
  {
    size: "1 BHK",
    label: "Refresh",
    price: "AED 35,000",
    priceEnd: "– 50,000",
    duration: "3 – 4 Weeks",
    scope: ["Kitchen & Bathroom Refresh", "Full Repaint", "Deep Cleaning", "Minor Fixtures"],
  },
  {
    size: "2 BHK",
    label: "Upgrade",
    price: "AED 55,000",
    priceEnd: "– 75,000",
    duration: "4 – 6 Weeks",
    scope: ["Full Repaint", "Kitchen Upgrade", "2x Bathroom Reno", "New Flooring"],
    featured: true,
  },
  {
    size: "3 BHK",
    label: "Premium",
    price: "AED 75,000",
    priceEnd: "– 110,000+",
    duration: "6 – 8 Weeks",
    scope: ["Complete Renovation", "Custom Carpentry", "Lighting Design", "Multi-Zone AC"],
  },
];

export default function PackagePreview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Renovation Packages"
          title="Clear Pricing, No Surprises"
          subtitle="Our residential renovation packages are scoped, timed, and priced upfront. You know exactly what you get."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.size}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col p-8 border-2 transition-all duration-300 ${
                pkg.featured
                  ? "border-renora-gold bg-renora-black text-white shadow-xl"
                  : "border-renora-gray-light hover:border-renora-gold bg-renora-cream"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-renora-gold text-white text-[10px] tracking-[0.2em] uppercase font-inter font-bold px-4 py-1">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <p
                  className={`text-xs tracking-[0.25em] uppercase font-inter font-semibold mb-1 ${
                    pkg.featured ? "text-renora-gold" : "text-renora-gold"
                  }`}
                >
                  {pkg.size}
                </p>
                <h3
                  className={`font-playfair text-2xl font-bold ${
                    pkg.featured ? "text-white" : "text-renora-black"
                  }`}
                >
                  {pkg.label}
                </h3>
              </div>

              <div className="mb-6">
                <span
                  className={`font-playfair text-3xl font-bold ${
                    pkg.featured ? "text-renora-gold" : "text-renora-black"
                  }`}
                >
                  {pkg.price}
                </span>
                <span
                  className={`font-inter text-sm ${
                    pkg.featured ? "text-white/60" : "text-renora-gray"
                  }`}
                >
                  {pkg.priceEnd}
                </span>
                <p
                  className={`text-xs mt-1 font-inter ${
                    pkg.featured ? "text-white/40" : "text-renora-gray"
                  }`}
                >
                  Timeline: {pkg.duration}
                </p>
              </div>

              <ul className="space-y-2 flex-1 mb-8">
                {pkg.scope.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-renora-gold shrink-0" />
                    <span
                      className={`text-sm font-inter ${
                        pkg.featured ? "text-white/70" : "text-renora-gray"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={pkg.featured ? "primary" : "outline"}
                className="w-full justify-center"
              >
                Get a Quote
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-renora-gray hover:text-renora-gold transition-colors">
          <Button href="/services" variant="outline">
            See All Services &amp; AMC Plans
          </Button>
        </div>
      </div>
    </section>
  );
}
