"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Heart } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Quality Over Volume",
    description:
      "We take on fewer projects to deliver better results. Every renovation we complete is built to last — not rushed to the next job.",
  },
  {
    icon: TrendingUp,
    title: "Predictable Cash Flow",
    description:
      "Clear payment milestones. No work starts without an advance, and no handover happens without full settlement. Financial clarity for both sides.",
  },
  {
    icon: Heart,
    title: "Mutual Respect",
    description:
      "We value your time, your money, and your home. Every decision is made with transparency and professionalism at the forefront.",
  },
];

export default function WhyRenora() {
  return (
    <section className="bg-renora-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-renora-gold text-xs tracking-[0.3em] uppercase font-inter font-semibold mb-3">
            Why Choose Us
          </p>
          <h2 className="font-playfair font-bold text-3xl md:text-5xl text-white mb-4 leading-tight">
            The Renora Difference
          </h2>
          <div className="h-px w-14 bg-renora-gold mx-auto mb-5" />
          <p className="text-white/50 font-inter text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Three principles that guide every project we take on.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative text-center px-6 py-10 border border-white/10 hover:border-renora-gold/40 transition-all duration-300"
              >
                {/* Corner accent */}
                <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-renora-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-renora-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-14 h-14 mx-auto mb-6 bg-renora-gold/10 border border-renora-gold/30 flex items-center justify-center group-hover:bg-renora-gold/20 transition-colors duration-300">
                  <Icon size={24} className="text-renora-gold" />
                </div>

                <h3 className="font-playfair font-bold text-xl text-white mb-4">
                  {p.title}
                </h3>
                <p className="text-white/50 font-inter text-sm leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
