"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle, RefreshCw } from "lucide-react";

const doItems = [
  "Renovations above AED 5,000",
  "Bundled maintenance contracts",
  "Annual Maintenance Contracts (AMC)",
  "AC servicing & strategic upgrades",
  "Green area & landscaping work",
  "High-margin ecosystem upgrades",
];

const dontItems = [
  "One-off jobs under AED 1,000",
  "Emergency freebies",
  "Work without advance payment",
  "Open-ended timelines",
  "Projects with pending balances",
];

const focusItems = [
  "Repeat client priority",
  "Long-term ecosystem upgrades",
  "AMC + renovation bundles",
  "High-value project pipeline",
];

export default function OperationalBoundaries() {
  return (
    <section className="bg-renora-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-renora-gold text-xs tracking-[0.3em] uppercase font-inter font-semibold mb-3">
            How We Operate
          </p>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
            Our Boundaries
          </h2>
          <div className="h-px w-14 bg-renora-gold mx-auto mb-5" />
          <p className="text-white/50 font-inter text-sm max-w-xl mx-auto">
            Clarity protects everyone. Here is exactly what Renora does and
            doesn&apos;t do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-renora-gold/30 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle size={20} className="text-renora-gold" />
              <h3 className="font-playfair text-lg font-bold text-white">
                What We Do
              </h3>
            </div>
            <ul className="space-y-3">
              {doItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-renora-gold mt-2 shrink-0" />
                  <span className="text-white/60 font-inter text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What We Don't */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 border border-white/10 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle size={20} className="text-red-400" />
              <h3 className="font-playfair text-lg font-bold text-white">
                What We Don&apos;t Do
              </h3>
            </div>
            <ul className="space-y-3">
              {dontItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span className="text-white/60 font-inter text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Growth Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-renora-gold/10 border border-renora-gold/40 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw size={20} className="text-renora-gold" />
              <h3 className="font-playfair text-lg font-bold text-white">
                Growth Focus
              </h3>
            </div>
            <ul className="space-y-3">
              {focusItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-renora-gold mt-2 shrink-0" />
                  <span className="text-white/60 font-inter text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-renora-gold/20">
              <p className="text-renora-gold font-inter text-xs leading-relaxed">
                Minimum job value: <strong>AED 1,000</strong>
                <br />
                Advance required: <strong>30 – 50%</strong>
                <br />
                Balance due: <strong>before handover</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
