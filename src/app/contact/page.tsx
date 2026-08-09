import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Get a Quote | Renora Dubai",
  description:
    "Get a free consultation for your Dubai renovation or maintenance project. Reach Renora via WhatsApp, email, or our quote form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-renora-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-renora-gold text-xs tracking-[0.35em] uppercase font-inter font-semibold mb-4">
            Free Consultation
          </p>
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white leading-tight mb-4">
            Let&apos;s Talk About
            <span className="block text-renora-gold italic">Your Project</span>
          </h1>
          <div className="h-px w-14 bg-renora-gold mb-6" />
          <p className="text-white/50 font-inter text-base max-w-xl leading-relaxed">
            Tell us what you need. We&apos;ll assess, quote clearly, and only
            begin when you&apos;re confident.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-renora-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form — wider */}
            <div className="lg:col-span-3 bg-white p-10 shadow-sm">
              <h2 className="font-playfair font-bold text-2xl text-renora-black mb-2">
                Send an Enquiry
              </h2>
              <p className="text-renora-gray font-inter text-sm mb-8">
                Fill in the details below and we&apos;ll be in touch within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-playfair font-bold text-2xl text-renora-black mb-2">
                Get in Touch
              </h2>
              <p className="text-renora-gray font-inter text-sm mb-8">
                Prefer to talk directly? Reach us on WhatsApp for the fastest
                response.
              </p>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
