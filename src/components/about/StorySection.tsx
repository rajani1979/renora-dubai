"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="bg-renora-cream py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-renora-gold text-xs tracking-[0.3em] uppercase font-inter font-semibold mb-3">
              Our Story
            </p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-renora-black mb-4 leading-tight">
              Built in Dubai,
              <span className="block italic text-renora-gold">
                Built for Dubai
              </span>
            </h2>
            <div className="h-px w-14 bg-renora-gold mb-8" />

            <div className="space-y-5 text-renora-gray font-inter text-base leading-relaxed">
              <p>
                Renora was founded with a simple belief: Dubai&apos;s residents
                deserve a maintenance and renovation partner they can actually
                trust. One that shows up on time, delivers on its promises, and
                treats your home with the same care you do.
              </p>
              <p>
                We are an integrated maintenance company specializing in quality
                residential upgrades and reliable long-term maintenance. We work
                with homeowners, landlords, and property managers across Dubai
                to deliver renovations that last — and maintenance that
                prevents problems before they happen.
              </p>
              <p>
                Our focus is narrow by design. We don&apos;t chase volume. We
                build relationships with clients who value quality over price and
                understand that good work takes time.
              </p>
            </div>
          </motion.div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Main card */}
            <div className="bg-renora-black aspect-[4/3] flex flex-col justify-end p-10 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    #B8963E,
                    #B8963E 1px,
                    transparent 1px,
                    transparent 40px
                  )`,
                }}
              />
              <span className="absolute top-8 right-8 font-playfair font-bold text-[8rem] text-white/[0.04] leading-none select-none">
                R
              </span>
              <div className="relative z-10">
                <p className="text-renora-gold font-inter text-xs tracking-[0.3em] uppercase mb-2">
                  Our Mission
                </p>
                <p className="font-playfair text-white text-xl md:text-2xl font-bold leading-snug">
                  &ldquo;We are not here to stay busy — we are here to build a
                  strong company.&rdquo;
                </p>
              </div>
            </div>

            {/* Stats inset */}
            <div className="grid grid-cols-3 bg-white border-t-0 border border-renora-gray-light">
              {[
                { value: "6+", label: "Years" },
                { value: "100+", label: "Projects" },
                { value: "3", label: "AMC Tiers" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`p-5 text-center ${i < 2 ? "border-r border-renora-gray-light" : ""}`}
                >
                  <p className="font-playfair font-bold text-xl text-renora-gold">
                    {s.value}
                  </p>
                  <p className="text-renora-gray font-inter text-xs mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
