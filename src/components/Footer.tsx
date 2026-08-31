import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart } from 'lucide-react';
import { BRAND_DETAILS } from '../data/furnitureData';

interface FooterProps {
  onRequestQuote: () => void;
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote, onOpenWhatsApp }) => {
  return (
    <footer
      id="brand-footer"
      className="bg-[#081213] text-[#F3EFE6] pt-20 pb-24 md:pb-16 px-5 sm:px-8 border-t border-[#162729]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Tier: Brand Statement & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-[#142628] items-center">
          <div className="lg:col-span-8 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF8F3]">
              Ready to elevate your living space?
            </h3>
            <p className="text-sm text-[#9BB1B3] font-light max-w-xl">
              Connect with our master artisans in Agrabad, Chattogram for a tailored consultation, material samples, and 3D joinery estimates.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:justify-end gap-3">
            <button
              onClick={onRequestQuote}
              className="px-6 py-3.5 bg-[#C5A880] text-[#0D191A] font-semibold text-xs uppercase tracking-widest font-sans rounded-xs hover:bg-[#D6BB93] transition-all text-center"
            >
              Request a Quote
            </button>
            <button
              onClick={onOpenWhatsApp}
              className="px-5 py-3.5 border border-[#234346] text-[#E8E2D5] font-sans text-xs rounded-xs hover:border-[#C5A880] hover:text-[#FFFFFF] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

        {/* Middle Tier: 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-xs sm:text-sm">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-wider text-[#FAF8F3]">
                HEAVEN
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#C5A880] font-sans -mt-1 font-medium">
                FURNITURE MART · CHATTOGRAM
              </span>
            </div>
            <p className="text-xs text-[#8FA5A7] font-light leading-relaxed">
              Luxury bespoke furniture and tailored architectural interior styling. Handcrafted with seasoned solid hardwoods since 2020.
            </p>
            <p className="text-xs text-[#C5A880] italic font-serif">
              "{BRAND_DETAILS.tagline}"
            </p>
          </div>

          {/* Showroom & Workshop Location */}
          <div className="space-y-3">
            <div className="text-xs font-sans uppercase tracking-widest text-[#C5A880] font-semibold">
              Showroom & Atelier
            </div>
            <div className="space-y-2 text-[#9FB5B7] font-light text-xs leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{BRAND_DETAILS.fullAddress}</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>Sat – Thu: 10AM – 9PM | Fri: 3PM – 9PM</span>
              </p>
            </div>
          </div>

          {/* Quick Direct Inquiries */}
          <div className="space-y-3">
            <div className="text-xs font-sans uppercase tracking-widest text-[#C5A880] font-semibold">
              Direct Contact
            </div>
            <div className="space-y-2 text-[#9FB5B7] font-light text-xs">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:${BRAND_DETAILS.phone}`} className="hover:text-[#FFFFFF] transition-colors font-mono">
                  {BRAND_DETAILS.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${BRAND_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  WhatsApp Direct Consultation
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`mailto:${BRAND_DETAILS.email}`} className="hover:text-[#FFFFFF] transition-colors">
                  {BRAND_DETAILS.email}
                </a>
              </p>
            </div>
          </div>

          {/* Collections Scope */}
          <div className="space-y-3">
            <div className="text-xs font-sans uppercase tracking-widest text-[#C5A880] font-semibold">
              Bespoke Disciplines
            </div>
            <ul className="space-y-1.5 text-xs text-[#8EA5A7] font-light">
              <li><a href="#collections" className="hover:text-[#C5A880] transition-colors">Living Room Lounges & Credenzas</a></li>
              <li><a href="#collections" className="hover:text-[#C5A880] transition-colors">Master Bedroom Suites & Wardrobes</a></li>
              <li><a href="#collections" className="hover:text-[#C5A880] transition-colors">Solid Hardwood Dining Tables</a></li>
              <li><a href="#collections" className="hover:text-[#C5A880] transition-colors">Executive Desks & Wall Libraries</a></li>
              <li><a href="#bespoke" className="hover:text-[#C5A880] transition-colors">Custom Architectural Wall Paneling</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Ethical Timber Sourcing */}
        <div className="pt-8 border-t border-[#132325] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7B9294] font-sans">
          <p>
            © {new Date().getFullYear()} Heaven Furniture Mart. All rights reserved. Agrabad, Chattogram, Bangladesh.
          </p>
          <div className="flex items-center gap-6">
            <span>Managing Director: Abul Kalam Bhuiyan</span>
            <span className="text-[#C5A880]">•</span>
            <span>BFIOA Member</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
