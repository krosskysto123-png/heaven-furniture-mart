import React from 'react';
import { 
  Sparkles, 
  Ruler, 
  TreePine, 
  Building2, 
  Truck, 
  CreditCard, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { TRUST_PILLARS } from '../data/furnitureData';

interface WhyChooseProps {
  onRequestQuote: () => void;
}

export const WhyChoose: React.FC<WhyChooseProps> = ({ onRequestQuote }) => {
  return (
    <section
      id="why-choose"
      className="bg-[#0D191A] text-[#F3EFE6] py-24 sm:py-32 px-5 sm:px-8 border-b border-[#1A2E30] relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF8F3] tracking-tight">
            Why Discerning Homeowners Choose Heaven
          </h2>
          <p className="text-base sm:text-lg text-[#9EB2B3] font-light leading-relaxed">
            From the initial sketch in Agrabad to the final hand-buffed coat of natural oil, our process removes the uncertainty of custom furniture.
          </p>
        </div>

        {/* Asymmetric Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Trust Point 1: Free Design Consultation */}
          <div className="bg-[#122224] p-8 rounded-sm border border-[#1E3638] flex flex-col justify-between hover:border-[#C5A880]/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-[#1A3134] flex items-center justify-center text-[#C5A880]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#F5F1E9]">
                Complimentary Design Consultation
              </h3>
              <p className="text-sm text-[#A2B5B7] leading-relaxed font-light">
                Bring your floor plans or room photos. Our interior specialists evaluate dimensions, flow, lighting, and timber tones at zero upfront cost.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#1B3234] text-xs text-[#C5A880] font-sans tracking-wide">
              Showroom or In-Home Visit
            </div>
          </div>

          {/* Trust Point 2: 100% Bespoke */}
          <div className="bg-[#122224] p-8 rounded-sm border border-[#1E3638] flex flex-col justify-between hover:border-[#C5A880]/50 transition-all duration-300 lg:translate-y-4">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-[#1A3134] flex items-center justify-center text-[#C5A880]">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#F5F1E9]">
                Fully Bespoke, Never Mass-Produced
              </h3>
              <p className="text-sm text-[#A2B5B7] leading-relaxed font-light">
                Every unit is engineered millimeter-by-millimeter to fit your specific walls, niches, and ceiling heights. No standard cookie-cutter sizing.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#1B3234] text-xs text-[#C5A880] font-sans tracking-wide">
              Custom CAD & Joinery Drawings
            </div>
          </div>

          {/* Trust Point 3: Seasoned Hardwood */}
          <div className="bg-[#122224] p-8 rounded-sm border border-[#1E3638] flex flex-col justify-between hover:border-[#C5A880]/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-[#1A3134] flex items-center justify-center text-[#C5A880]">
                <TreePine className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#F5F1E9]">
                Seasoned Solid Wood & Master Joinery
              </h3>
              <p className="text-sm text-[#A2B5B7] leading-relaxed font-light">
                We work exclusively with seasoned Burmese Teak (Segun), Chittagong Gamari, and select Mahogany. Kiln-dried to withstand coastal humidity.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#1B3234] text-xs text-[#C5A880] font-sans tracking-wide">
              100% Solid Hardwood Core
            </div>
          </div>

          {/* Trust Point 4: Physical Agrabad Showroom */}
          <div className="bg-[#122224] p-8 rounded-sm border border-[#1E3638] flex flex-col justify-between hover:border-[#C5A880]/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-[#1A3134] flex items-center justify-center text-[#C5A880]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#F5F1E9]">
                Flagship Showroom on Agrabad Access Road
              </h3>
              <p className="text-sm text-[#A2B5B7] leading-relaxed font-light">
                A permanent physical presence you can visit any day of the week. Sit in our chairs, feel wood grains, and consult with our artisans directly.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#1B3234] text-xs text-[#C5A880] font-sans tracking-wide">
              Open 7 Days a Week in Agrabad
            </div>
          </div>

          {/* Trust Point 5: Delivery & White-Glove Installation */}
          <div className="bg-[#122224] p-8 rounded-sm border border-[#1E3638] flex flex-col justify-between hover:border-[#C5A880]/50 transition-all duration-300 lg:translate-y-4">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-[#1A3134] flex items-center justify-center text-[#C5A880]">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#F5F1E9]">
                White-Glove Delivery & Installation Included
              </h3>
              <p className="text-sm text-[#A2B5B7] leading-relaxed font-light">
                No third-party couriers. Our specialized in-house delivery craftsmen transport, assemble, level, and clean every piece inside your home.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#1B3234] text-xs text-[#C5A880] font-sans tracking-wide">
              Chattogram & Nationwide Service
            </div>
          </div>

          {/* Trust Point 6: Flexible Payments & Trusted Heritage */}
          <div className="bg-[#122224] p-8 rounded-sm border border-[#1E3638] flex flex-col justify-between hover:border-[#C5A880]/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-[#1A3134] flex items-center justify-center text-[#C5A880]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#F5F1E9]">
                Transparent Terms & Easy Milestones
              </h3>
              <p className="text-sm text-[#A2B5B7] leading-relaxed font-light">
                Staged milestone payments linked directly to design approval, timber selection, and final delivery. Backed by full structural craftsmanship warranty.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#1B3234] text-xs text-[#C5A880] font-sans tracking-wide">
              Trusted by 650+ Homeowners
            </div>
          </div>

        </div>

        {/* Action Prompt */}
        <div className="pt-4 text-center">
          <button
            onClick={onRequestQuote}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-[#C5A880] text-[#0D191A] font-semibold text-xs uppercase tracking-widest font-sans hover:bg-[#D6BB93] transition-all shadow-lg active:scale-95"
          >
            Schedule a Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
