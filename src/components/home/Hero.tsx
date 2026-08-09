"use client";

import { motion, type Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-renora-black">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-renora-black via-renora-black-light to-[#0D0D0D]" />

      {/* Subtle diagonal gold accent */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #B8963E,
            #B8963E 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      {/* Large faded "RENORA" watermark */}
      <span className="absolute right-0 bottom-0 font-playfair font-bold text-[20vw] text-white/[0.03] select-none pointer-events-none leading-none pr-4 pb-4">
        RENORA
      </span>

      {/* Gold vertical accent bar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-40 bg-renora-gold" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="text-renora-gold text-xs tracking-[0.4em] uppercase font-inter font-semibold mb-6"
          >
            Integrated Maintenance &amp; Renovation · Dubai
          </motion.p>

          <motion.h1
            variants={item}
            className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6"
          >
            Transform
            <span className="block text-renora-gold italic">Your Space.</span>
            Elevate Your Life.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-white/60 font-inter text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            Premium residential renovations, reliable annual maintenance, and
            expert AC services — delivered with precision across Dubai.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/services" variant="primary" size="lg">
              View Services &amp; Pricing
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Get a Free Quote
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={item}
            className="mt-16 pt-10 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "6+", label: "Years in Dubai" },
              { value: "100%", label: "Advance Compliance" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-playfair font-bold text-2xl md:text-3xl text-renora-gold">
                  {s.value}
                </p>
                <p className="text-white/50 text-xs font-inter mt-1 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-inter">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
