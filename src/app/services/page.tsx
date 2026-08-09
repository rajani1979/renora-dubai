import AMCPlans from "@/components/services/AMCPlans";
import RenovationPackages from "@/components/services/RenovationPackages";
import OperationalBoundaries from "@/components/services/OperationalBoundaries";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing | Renora Dubai",
  description:
    "Transparent pricing for Dubai residential renovations and annual maintenance contracts. AMC from AED 3,000/year. Renovations from AED 35,000.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-renora-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-renora-gold text-xs tracking-[0.35em] uppercase font-inter font-semibold mb-4">
            Transparent Pricing
          </p>
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white leading-tight mb-4">
            Services &amp; Pricing
          </h1>
          <div className="h-px w-14 bg-renora-gold mb-6" />
          <p className="text-white/50 font-inter text-base max-w-xl leading-relaxed">
            No hidden fees. No vague estimates. Every service is scoped, timed,
            and priced before a single tool is picked up.
          </p>
          {/* Anchor links */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#amc"
              className="text-xs tracking-[0.2em] uppercase font-inter text-white/60 hover:text-renora-gold border border-white/20 hover:border-renora-gold px-5 py-2 transition-colors duration-200"
            >
              AMC Plans ↓
            </a>
            <a
              href="#renovation"
              className="text-xs tracking-[0.2em] uppercase font-inter text-white/60 hover:text-renora-gold border border-white/20 hover:border-renora-gold px-5 py-2 transition-colors duration-200"
            >
              Renovation Packages ↓
            </a>
          </div>
        </div>
      </section>

      <AMCPlans />
      <RenovationPackages />
      <OperationalBoundaries />
      <CTABanner />
    </>
  );
}
