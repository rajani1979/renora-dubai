import StorySection from "@/components/about/StorySection";
import ValuesGrid from "@/components/about/ValuesGrid";
import ProcessSteps from "@/components/about/ProcessSteps";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Renora Dubai",
  description:
    "Renora is Dubai's trusted integrated maintenance and renovation company. Quality Over Volume. Predictable Cash Flow. Mutual Respect.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-renora-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-renora-gold text-xs tracking-[0.35em] uppercase font-inter font-semibold mb-4">
            Who We Are
          </p>
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white leading-tight mb-4">
            About Renora
          </h1>
          <div className="h-px w-14 bg-renora-gold mb-6" />
          <p className="text-white/50 font-inter text-base max-w-xl leading-relaxed">
            An integrated maintenance company built on trust, transparency, and
            a deep respect for your home.
          </p>
        </div>
      </section>

      <StorySection />
      <ValuesGrid />
      <ProcessSteps />
      <CTABanner />
    </>
  );
}
