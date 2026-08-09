"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${center ? "text-center" : "text-left"} mb-12`}
    >
      {eyebrow && (
        <p
          className={`text-xs tracking-[0.3em] uppercase font-inter font-semibold mb-3 ${
            light ? "text-renora-gold-light" : "text-renora-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-renora-black"
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-px w-14 bg-renora-gold ${center ? "mx-auto" : ""} mb-5`}
      />
      {subtitle && (
        <p
          className={`font-inter text-base md:text-lg leading-relaxed max-w-2xl ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-renora-gray"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
