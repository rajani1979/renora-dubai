import { MapPin, Mail, Clock, MessageCircle } from "lucide-react";

const details = [
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai, United Arab Emirates",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@renoradubai.com",
    href: "mailto:info@renoradubai.com",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours (Standard AMC) · 48 hours (Basic AMC)",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-10">
      {/* WhatsApp CTA — prominent */}
      <a
        href="https://wa.me/971506568453"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-6 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/15 p-8 transition-all duration-200 group"
      >
        <div className="w-16 h-16 bg-[#25D366] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="font-playfair font-bold text-xl text-renora-black group-hover:text-[#25D366] transition-colors duration-200 mb-1">
            Chat on WhatsApp
          </p>
          <p className="text-renora-gray font-inter text-sm">
            +971 50 656 8453 · Fastest way to reach us — we usually reply within hours
          </p>
        </div>
        <MessageCircle
          size={24}
          className="text-[#25D366] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </a>

      {/* Contact details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {details.map((d) => {
          const Icon = d.icon;
          return (
            <div key={d.label} className="bg-white p-6 flex flex-col gap-3">
              <div className="w-10 h-10 bg-renora-cream flex items-center justify-center">
                <Icon size={16} className="text-renora-gold" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase font-inter text-renora-gray mb-1">
                  {d.label}
                </p>
                {d.href ? (
                  <a
                    href={d.href}
                    className="text-renora-black font-inter text-sm hover:text-renora-gold transition-colors"
                  >
                    {d.value}
                  </a>
                ) : (
                  <p className="text-renora-black font-inter text-sm leading-snug">
                    {d.value}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Payment reminder */}
      <div className="bg-white border-l-4 border-renora-gold p-8">
        <p className="font-playfair font-bold text-renora-black text-base mb-3">
          Before You Enquire
        </p>
        <ul className="space-y-2">
          {[
            "Minimum job value: AED 1,000",
            "30–50% advance required to begin",
            "Balance due before handover",
          ].map((item) => (
            <li
              key={item}
              className="text-renora-gray font-inter text-sm flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-renora-gold shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
