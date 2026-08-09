"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Initial Enquiry",
    description:
      "Reach out via WhatsApp, email, or our contact form. Tell us about your space and what you need.",
  },
  {
    number: "02",
    title: "Site Visit & Assessment",
    description:
      "We schedule a visit, assess the space in person, and clarify scope, timeline, and materials.",
  },
  {
    number: "03",
    title: "Clear Quotation",
    description:
      "You receive a detailed quote: fixed price, confirmed timeline, and a breakdown of all work included.",
  },
  {
    number: "04",
    title: "Advance & Execution",
    description:
      "Upon 30–50% advance payment, work begins. Your dedicated ops lead manages every step.",
  },
  {
    number: "05",
    title: "Handover & Sign-off",
    description:
      "A quality walkthrough with you before final payment and keys. No surprises at the end.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-renora-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-renora-gold text-xs tracking-[0.3em] uppercase font-inter font-semibold mb-3">
            How It Works
          </p>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
            Our Process
          </h2>
          <div className="h-px w-14 bg-renora-gold mb-5" />
          <p className="text-white/50 font-inter text-base max-w-xl leading-relaxed">
            Every project follows the same transparent, structured process —
            from first call to final handover.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-10 right-10 h-px bg-white/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Step number circle */}
                <div className="w-20 h-20 rounded-full border-2 border-renora-gold bg-renora-black flex items-center justify-center mb-5 relative z-10">
                  <span className="font-playfair font-bold text-xl text-renora-gold">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-playfair text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/40 font-inter text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
