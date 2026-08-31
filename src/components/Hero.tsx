import React from 'react';
import { MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { BRAND_DETAILS } from '../data/furnitureData';

interface HeroProps {
  onRequestQuote: () => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote, onOpenWhatsApp }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] sm:min-h-screen flex items-end pb-16 sm:pb-24 pt-32 sm:pt-40 bg-[#0D191A] overflow-hidden"
    >
      {/* Background imagery with editorial dark grading */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
          alt="Bespoke luxury living room crafted by Heaven Furniture Mart Chattogram"
          className="w-full h-full object-cover object-center scale-105 transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Editorial gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D191A] via-[#0D191A]/75 to-[#0D191A]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0D191A]/30 to-[#0D191A]/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Studio context note */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded bg-[#132426]/80 border border-[#243F42] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-xs tracking-wider text-[#DCD4C7] font-sans">
              Agrabad Access Road · Chattogram Atelier
            </span>
          </div>

          {/* Main Editorial Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FAF8F3] leading-[1.08] tracking-tight">
              Designed. <br />
              Crafted. <br />
              <span className="italic text-[#C5A880] font-normal">Customized.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#D8D2C4] font-light max-w-2xl leading-relaxed pt-2">
              Luxury bespoke furniture and tailored architectural interiors, handcrafted to your exact space in Chattogram.
            </p>
          </div>

          {/* Conversion Actions - Clear single primary CTA + subtle WhatsApp */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              id="hero-primary-cta"
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center px-8 py-4 rounded bg-[#C5A880] hover:bg-[#D4B78E] text-[#0D191A] font-semibold text-sm tracking-widest uppercase font-sans transition-all duration-200 shadow-xl active:scale-[0.99]"
            >
              Request a Quote
            </button>

            <button
              id="hero-whatsapp-cta"
              onClick={onOpenWhatsApp}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded bg-[#132426]/90 hover:bg-[#1A3134] text-[#E8E2D5] border border-[#2B4B4F] text-sm font-medium font-sans transition-all backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Us Directly</span>
            </button>
          </div>

          {/* Quick Credibility Micro-Bar */}
          <div className="pt-8 border-t border-[#1C3234]/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
            <div>
              <p className="text-[#C5A880] font-serif text-xl sm:text-2xl font-medium">100%</p>
              <p className="text-xs text-[#9EB2B3] font-sans mt-0.5">Bespoke to Your Space</p>
            </div>
            <div>
              <p className="text-[#C5A880] font-serif text-xl sm:text-2xl font-medium">Seasoned</p>
              <p className="text-xs text-[#9EB2B3] font-sans mt-0.5">Burmese Teak & Solid Timber</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[#C5A880] font-serif text-xl sm:text-2xl font-medium">Agrabad</p>
              <p className="text-xs text-[#9EB2B3] font-sans mt-0.5">Flagship Studio & Workshop</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
