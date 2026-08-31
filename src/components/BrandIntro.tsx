import React from 'react';
import { Compass, Sparkles, Hammer } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  return (
    <section
      id="brand-intro"
      className="relative bg-[#FAF7F0] text-[#1F1914] py-20 sm:py-28 px-5 sm:px-8 border-y border-[#E6DFC8]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Focused 2-3 line Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F1914] leading-[1.2] tracking-tight">
              Bespoke furniture and interior styling, crafted in Chattogram for spaces that refuse the ordinary.
            </h2>
            
            <p className="text-base sm:text-lg text-[#5A5046] font-light leading-relaxed max-w-2xl">
              Since 2020, Heaven Furniture Mart has designed and hand-built one-of-a-kind furniture pieces tailored precisely to the architectural proportions, lifestyle, and aesthetic of each client — rejecting mass-produced, off-the-shelf catalog compromises.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs sm:text-sm text-[#736556] font-sans">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E7B56]" />
                <span>Agrabad Access Road Showroom</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E7B56]" />
                <span>In-House Seasoning & Joinery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E7B56]" />
                <span>Direct Artisan Dialogue</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial visual composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-[#FFFFFF] p-3 sm:p-4 shadow-xl border border-[#E3D9C3] rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85"
                alt="Heaven Furniture Mart artisanal woodworking and bespoke detailing"
                className="w-full h-72 sm:h-80 object-cover rounded-xs"
                loading="lazy"
              />
              <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#827464] font-serif italic">
                <span>Hand-planed solid Burmese Teak</span>
                <span>Custom Commission #2026</span>
              </div>
            </div>

            {/* Decorative warm wood block behind */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#EAE2D0] -z-0 rounded-sm" />
          </div>

        </div>
      </div>
    </section>
  );
};
