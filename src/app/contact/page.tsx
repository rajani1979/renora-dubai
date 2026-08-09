import ContactInfo from "@/components/contact/ContactInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Renora Dubai",
  description:
    "Get in touch with Renora Dubai for home renovation and maintenance enquiries. Reach us via WhatsApp or email.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-renora-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-renora-gold text-xs tracking-[0.35em] uppercase font-inter font-semibold mb-4">
            Get in Touch
          </p>
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white leading-tight mb-4">
            Let&apos;s Talk About
            <span className="block text-renora-gold italic">Your Project</span>
          </h1>
          <div className="h-px w-14 bg-renora-gold mb-6" />
          <p className="text-white/50 font-inter text-base max-w-xl leading-relaxed">
            Reach out via WhatsApp or email and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className="bg-renora-cream py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
