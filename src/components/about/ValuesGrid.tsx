"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality Over Volume",
    description:
      "We take on fewer projects to deliver exceptional results. Every job we accept gets our full attention — not split across a dozen sites.",
  },
  {
    icon: TrendingUp,
    title: "Predictable Cash Flow",
    description:
      "Financial clarity isn't just good business — it's a sign of respect. Our payment structure is clear, consistent, and non-negotiable.",
  },
  {
    icon: Heart,
    title: "Mutual Respect",
    description:
      "We value your time, your investment, and your home. Every team member is trained to treat client properties as their own.",
  },
  {
    icon: Users,
    title: "Clear Accountability",
    description:
      "Every project has a clear owner: strategy (management), execution (ops lead), and documentation (admin). No ambiguity. No handoff gaps.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-renora-gold text-xs tracking-[0.3em] uppercase font-inter font-semibold mb-3">
            Core Principles
          </p>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-renora-black mb-4">
            What We Stand For
          </h2>
          <div className="h-px w-14 bg-renora-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex gap-6 p-8 border border-renora-gray-light hover:border-renora-gold transition-all duration-300 bg-renora-cream hover:bg-white"
              >
                <div className="w-12 h-12 bg-renora-gold/10 flex items-center justify-center shrink-0 group-hover:bg-renora-gold transition-colors duration-300">
                  <Icon
                    size={20}
                    className="text-renora-gold group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-renora-black mb-2">
                    {v.title}
                  </h3>
                  <p className="text-renora-gray font-inter text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
