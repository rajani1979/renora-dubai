"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Basic",
    price: "AED 3,000",
    period: "/ year",
    visits: "1 Visit / Month",
    response: "48 Hours",
    scope: [
      "Electrical checks & minor fixes",
      "Plumbing inspection",
      "Basic AC check",
      "Emergency advisory",
    ],
    featured: false,
  },
  {
    name: "Standard",
    price: "AED 6,000",
    period: "/ year",
    visits: "2 Visits / Month",
    response: "24 Hours",
    scope: [
      "Everything in Basic",
      "Minor painting & touch-ups",
      "Plumbing maintenance",
      "Green area care",
      "Priority scheduling",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "AED 10,000",
    period: "/ year",
    visits: "Weekly Visits",
    response: "Priority",
    scope: [
      "Everything in Standard",
      "All minor works covered",
      "2x Full AC Service",
      "Emergency priority response",
      "Dedicated ops contact",
    ],
    featured: false,
  },
];

export default function AMCPlans() {
  return (
    <section className="bg-renora-cream py-24" id="amc">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-renora-gold text-xs tracking-[0.3em] uppercase font-inter font-semibold mb-3">
            Annual Maintenance Contracts
          </p>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-renora-black mb-4">
            AMC Plans
          </h2>
          <div className="h-px w-14 bg-renora-gold mb-5" />
          <p className="text-renora-gray font-inter text-base max-w-2xl leading-relaxed">
            Predictable maintenance with scheduled visits and guaranteed response
            times. AMC contracts are Renora&apos;s highest-value offering —
            predictable cash flow for us, peace of mind for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col p-8 border-2 transition-all duration-300 ${
                plan.featured
                  ? "border-renora-gold bg-renora-black text-white shadow-xl"
                  : "border-renora-gray-light bg-white hover:border-renora-gold"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-renora-gold text-white text-[10px] tracking-[0.2em] uppercase font-inter font-bold px-4 py-1">
                  Best Value
                </div>
              )}

              <div className="mb-6">
                <p
                  className={`text-xs tracking-[0.3em] uppercase font-inter font-semibold mb-2 ${
                    plan.featured ? "text-renora-gold" : "text-renora-gold"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-playfair text-4xl font-bold ${
                      plan.featured ? "text-white" : "text-renora-black"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`font-inter text-sm ${
                      plan.featured ? "text-white/50" : "text-renora-gray"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              <div
                className={`flex gap-6 mb-6 pb-6 border-b ${
                  plan.featured ? "border-white/10" : "border-renora-gray-light"
                }`}
              >
                <div>
                  <p
                    className={`text-[10px] tracking-widest uppercase font-inter ${
                      plan.featured ? "text-white/40" : "text-renora-gray"
                    }`}
                  >
                    Visits
                  </p>
                  <p
                    className={`text-sm font-inter font-medium mt-0.5 ${
                      plan.featured ? "text-white" : "text-renora-black"
                    }`}
                  >
                    {plan.visits}
                  </p>
                </div>
                <div>
                  <p
                    className={`text-[10px] tracking-widest uppercase font-inter ${
                      plan.featured ? "text-white/40" : "text-renora-gray"
                    }`}
                  >
                    Response
                  </p>
                  <p
                    className={`text-sm font-inter font-medium mt-0.5 ${
                      plan.featured ? "text-white" : "text-renora-black"
                    }`}
                  >
                    {plan.response}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={15}
                      className="text-renora-gold mt-0.5 shrink-0"
                    />
                    <span
                      className={`text-sm font-inter ${
                        plan.featured ? "text-white/70" : "text-renora-gray"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={plan.featured ? "primary" : "outline"}
                className="w-full justify-center"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-renora-black/5 border border-renora-gray-light p-6 text-center"
        >
          <p className="text-renora-gray font-inter text-sm">
            <span className="font-semibold text-renora-black">
              Payment Policy:
            </span>{" "}
            All AMC contracts require 30–50% advance payment. Balance due before
            contract activation. No new work commences with pending payments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
