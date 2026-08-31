import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, Calendar } from 'lucide-react';
import { BRAND_DETAILS } from '../data/furnitureData';

interface ShowroomSectionProps {
  onRequestQuote: () => void;
  onOpenWhatsApp: () => void;
}

export const ShowroomSection: React.FC<ShowroomSectionProps> = ({
  onRequestQuote,
  onOpenWhatsApp
}) => {
  return (
    <section
      id="showroom"
      className="bg-[#0D191A] text-[#F3EFE6] py-24 sm:py-32 px-5 sm:px-8 border-b border-[#1A2E30] relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-sans tracking-widest text-[#C5A880] uppercase">
            Experience In Person
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF8F3] tracking-tight">
            Visit Our Agrabad Flagship Studio
          </h2>
          <p className="text-base sm:text-lg text-[#9EB2B3] font-light leading-relaxed">
            There is no substitute for the tactile resonance of hand-finished solid teakwood. Walk through fully realized room environments and consult with our design directors.
          </p>
        </div>

        {/* Showroom Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Visual Showcase of the Showroom */}
          <div className="lg:col-span-7 relative bg-[#132426] border border-[#1E373A] rounded-sm overflow-hidden min-h-[360px] sm:min-h-[440px] flex flex-col justify-end p-8">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85"
              alt="Heaven Furniture Mart Flagship Showroom on Agrabad Access Road"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D191A] via-[#0D191A]/50 to-transparent" />
            
            <div className="relative z-10 space-y-2 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D191A]/80 border border-[#264548] rounded-xs text-xs text-[#C5A880]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Agrabad Access Road · Chattogram</span>
              </div>
              <h3 className="text-2xl font-serif text-[#FAF8F3]">
                Full Living, Dining & Master Suites on Display
              </h3>
              <p className="text-xs text-[#C0D2D4] font-light">
                Conveniently located near the Agrabad commercial district with dedicated client parking.
              </p>
            </div>
          </div>

          {/* Practical Visit Information & Direct Contact */}
          <div className="lg:col-span-5 bg-[#122224] border border-[#1E3638] p-8 sm:p-10 rounded-sm flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-[#F5F1E9] border-b border-[#1A3336] pb-4">
                Showroom Schedule & Location
              </h3>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs sm:text-sm">
                  <div className="font-medium text-[#EBE6DC]">Visiting Hours</div>
                  <p className="text-[#96ACAE] font-light">
                    Saturday – Thursday: 10:00 AM – 9:00 PM
                  </p>
                  <p className="text-[#96ACAE] font-light">
                    Friday: 3:00 PM – 9:00 PM
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs sm:text-sm">
                  <div className="font-medium text-[#EBE6DC]">Location</div>
                  <p className="text-[#96ACAE] font-light leading-relaxed">
                    {BRAND_DETAILS.fullAddress}
                  </p>
                </div>
              </div>

              {/* Telephone & WhatsApp */}
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs sm:text-sm">
                  <div className="font-medium text-[#EBE6DC]">Direct Line & WhatsApp</div>
                  <a
                    href={`tel:${BRAND_DETAILS.phone}`}
                    className="text-[#C5A880] hover:underline block font-mono"
                  >
                    {BRAND_DETAILS.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#1A3336] space-y-3">
              <button
                onClick={onRequestQuote}
                className="w-full py-3.5 bg-[#C5A880] text-[#0D191A] font-semibold text-xs uppercase tracking-widest font-sans rounded-xs hover:bg-[#D4B78E] transition-all"
              >
                Schedule Private Showroom Appointment
              </button>

              <button
                onClick={onOpenWhatsApp}
                className="w-full py-3 border border-[#254548] text-xs text-[#E3DCD0] font-sans rounded-xs hover:border-[#C5A880] hover:text-[#FFFFFF] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Message on WhatsApp for Directions</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
