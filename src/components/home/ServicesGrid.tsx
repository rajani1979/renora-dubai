"use client";

import { motion } from "framer-motion";
import { Hammer, ClipboardCheck, Wind, Leaf } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Hammer,
    title: "Full Renovations",
    description:
      "Complete residential transformations — from kitchen refreshes to full 3BHK premium renovations. Fixed timelines, transparent pricing.",
    detail: "AED 35,000 – 110,000+",
  },
  {
    icon: ClipboardCheck,
    title: "Annual Maintenance (AMC)",
    description:
      "Predictable maintenance with scheduled visits. Choose from Basic, Standard, or Premium plans with guaranteed response times.",
    detail: "From AED 3,000 / year",
  },
  {
    icon: Wind,
    title: "AC Services",
    description:
      "Strategic AC servicing, deep cleaning, and system upgrades. Included in our Premium AMC or available as bundled packages.",
    detail: "Included in Premium AMC",
  },
  {
    icon: Leaf,
    title: "Green Areas & Landscaping",
    description:
      "Quality greens management, garden upgrades, and outdoor maintenance. Bringing life to Dubai's residential spaces.",
    detail: "Bundled or standalone",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-renora-cream py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="What We Offer"
          title="Services Built for Dubai Homes"
          subtitle="We focus on high-value work that delivers lasting results. Every service is designed around quality, not volume."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white p-8 border-t-2 border-renora-gray-light hover:border-renora-gold transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-renora-cream-dark flex items-center justify-center mb-6 group-hover:bg-renora-gold transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-renora-gold group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-playfair text-xl font-bold text-renora-black mb-3">
                  {s.title}
                </h3>
                <p className="text-renora-gray font-inter text-sm leading-relaxed mb-5">
                  {s.description}
                </p>
                <p className="text-renora-gold font-inter text-sm font-semibold tracking-wide">
                  {s.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button href="/services" variant="primary" size="lg">
            View Full Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
