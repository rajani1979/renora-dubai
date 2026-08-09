"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const packages = [
  {
    size: "1 BHK",
    label: "Refresh",
    priceRange: "AED 35,000 – 50,000",
    timeline: "3 – 4 Weeks",
    scope: [
      "Kitchen & bathroom refresh",
      "Full interior repaint",
      "Deep professional cleaning",
      "Minor fixture replacements",
      "Touch-up carpentry",
    ],
  },
  {
    size: "2 BHK",
    label: "Upgrade",
    priceRange: "AED 55,000 – 75,000",
    timeline: "4 – 6 Weeks",
    scope: [
      "Full interior repaint",
      "Kitchen cabinet upgrade",
      "2x bathroom renovation",
      "New flooring installation",
      "Lighting upgrades",
      "Fixture replacements",
    ],
    featured: true,
  },
  {
    size: "3 BHK",
    label: "Premium",
    priceRange: "AED 75,000 – 110,000+",
    timeline: "6 – 8 Weeks",
    scope: [
      "Complete renovation",
      "Custom carpentry & joinery",
      "Lighting design & installation",
      "Multi-zone AC upgrade",
      "Full kitchen & bathrooms",
      "Flooring throughout",
      "Dedicated project manager",
    ],
  },
];

export default function RenovationPackages() {
  return (
    <section className="bg-white py-24" id="renovation">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-renora-gold text-xs tracking-[0.3em] uppercase font-inter font-semibold mb-3">
            Residential Renovations
          </p>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-renora-black mb-4">
            Renovation Packages
          </h2>
          <div className="h-px w-14 bg-renora-gold mb-5" />
          <p className="text-renora-gray font-inter text-base max-w-2xl leading-relaxed">
            All renovation projects include a site assessment, detailed scope of
            work, fixed timeline commitment, and a quality walkthrough before
            handover.
          </p>
        </motion.div>

        <div className="space-y-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.size}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 overflow-hidden transition-all duration-300 ${
                pkg.featured
                  ? "border-renora-gold"
                  : "border-renora-gray-light hover:border-renora-gold/50"
              }`}
            >
              {/* Left: Package info */}
              <div
                className={`lg:col-span-4 p-8 flex flex-col justify-between ${
                  pkg.featured ? "bg-renora-black" : "bg-renora-cream"
                }`}
              >
                {pkg.featured && (
                  <span className="inline-block bg-renora-gold text-white text-[10px] tracking-[0.2em] uppercase font-inter font-bold px-3 py-1 mb-4 self-start">
                    Most Popular
                  </span>
                )}
                <div>
                  <p
                    className={`text-xs tracking-[0.3em] uppercase font-inter font-semibold mb-1 text-renora-gold`}
                  >
                    {pkg.size}
                  </p>
                  <h3
                    className={`font-playfair text-3xl font-bold mb-4 ${
                      pkg.featured ? "text-white" : "text-renora-black"
                    }`}
                  >
                    {pkg.label}
                  </h3>
                  <p
                    className={`font-playfair text-2xl font-bold mb-2 ${
                      pkg.featured ? "text-renora-gold" : "text-renora-black"
                    }`}
                  >
                    {pkg.priceRange}
                  </p>
                  <div
                    className={`flex items-center gap-2 text-sm font-inter mt-3 ${
                      pkg.featured ? "text-white/50" : "text-renora-gray"
                    }`}
                  >
                    <Clock size={14} className="shrink-0" />
                    <span>Timeline: {pkg.timeline}</span>
                  </div>
                </div>
                <Button
                  href="/contact"
                  variant={pkg.featured ? "primary" : "outline"}
                  className="mt-8 self-start"
                >
                  Get a Quote
                </Button>
              </div>

              {/* Right: Scope */}
              <div className="lg:col-span-8 p-8 bg-white">
                <p
                  className={`text-[10px] tracking-[0.3em] uppercase font-inter font-semibold mb-5 text-renora-gray`}
                >
                  What&apos;s Included
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.scope.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={16}
                        className="text-renora-gold mt-0.5 shrink-0"
                      />
                      <span className="text-renora-gray font-inter text-sm leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-renora-gray font-inter text-sm mt-10"
        >
          All prices are indicative. Final pricing depends on materials, scope
          confirmation, and site assessment.{" "}
          <a href="/contact" className="text-renora-gold hover:underline">
            Request a custom quote →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
