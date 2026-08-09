"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

const services = [
  "Full Renovation (1BHK Refresh)",
  "Full Renovation (2BHK Upgrade)",
  "Full Renovation (3BHK Premium)",
  "Annual Maintenance Contract (Basic)",
  "Annual Maintenance Contract (Standard)",
  "Annual Maintenance Contract (Premium)",
  "AC Services",
  "Green Areas & Landscaping",
  "Custom / Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // Simulate sending — replace with your actual form handler / email service
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-renora-cream border border-renora-gray-light focus:border-renora-gold focus:outline-none px-4 py-3 font-inter text-sm text-renora-black placeholder:text-renora-gray/60 transition-colors duration-200";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-renora-black h-full min-h-80">
        <div className="w-14 h-14 bg-renora-gold/20 border border-renora-gold flex items-center justify-center mb-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#B8963E"
            strokeWidth="2"
            className="w-7 h-7"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-playfair text-2xl font-bold text-white mb-3">
          Message Received
        </h3>
        <p className="text-white/50 font-inter text-sm max-w-xs leading-relaxed">
          Thank you for reaching out. We&apos;ll get back to you within 24
          hours. For urgent matters, please WhatsApp us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-[10px] tracking-[0.2em] uppercase font-inter text-renora-gray mb-2">
            Full Name *
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Your name"
            className={inputClass}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-[10px] tracking-[0.2em] uppercase font-inter text-renora-gray mb-2">
            WhatsApp / Phone *
          </label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            placeholder="+971 XX XXX XXXX"
            className={inputClass}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="block text-[10px] tracking-[0.2em] uppercase font-inter text-renora-gray mb-2">
          Service of Interest *
        </label>
        <select
          {...register("service", { required: "Please select a service" })}
          className={`${inputClass} cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-[10px] tracking-[0.2em] uppercase font-inter text-renora-gray mb-2">
          Tell Us About Your Project
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Describe your space, requirements, or questions..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-renora-gold hover:bg-renora-gold-dark disabled:opacity-60 text-white font-inter font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-200"
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>

      <p className="text-renora-gray font-inter text-xs text-center">
        We respond within 24 hours. No spam. No commitments.
      </p>
    </form>
  );
}
