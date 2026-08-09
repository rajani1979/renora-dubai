"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Projects Delivered", sub: "Across Dubai" },
  {
    value: "AED 3K",
    label: "Starting Price",
    sub: "Annual Maintenance Plans",
  },
  { value: "3–8", label: "Week Timelines", sub: "Renovation Packages" },
  { value: "5★", label: "Client Satisfaction", sub: "Quality Over Volume" },
];

export default function Stats() {
  return (
    <section className="bg-renora-black py-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`px-6 py-10 border-r border-b border-white/10 last:border-r-0 ${
                i >= 2 ? "border-b-0" : ""
              } lg:border-b-0 text-center`}
            >
              <p className="font-playfair font-bold text-3xl md:text-4xl text-renora-gold mb-1">
                {s.value}
              </p>
              <p className="text-white font-inter text-sm font-medium mb-1">
                {s.label}
              </p>
              <p className="text-white/40 font-inter text-xs">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
