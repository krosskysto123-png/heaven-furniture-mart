import React, { useState } from 'react';
import { 
  Ruler, 
  TreePine, 
  Compass, 
  Hammer, 
  Sparkles, 
  MessageCircle, 
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { BESPOKE_STEPS, BRAND_DETAILS } from '../data/furnitureData';

interface BespokeHighlightProps {
  onRequestQuote: () => void;
  onOpenWhatsAppWithMessage: (message: string) => void;
}

export const BespokeHighlight: React.FC<BespokeHighlightProps> = ({
  onRequestQuote,
  onOpenWhatsAppWithMessage
}) => {
  const [selectedRoom, setSelectedRoom] = useState<string>('Living Room');
  const [selectedTimber, setSelectedTimber] = useState<string>('Burmese Teak (Segun)');
  const [estimatedSize, setEstimatedSize] = useState<string>('Full Room Suite');
  const [customNote, setCustomNote] = useState<string>('');

  const handleCustomWhatsAppQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Heaven Furniture Mart! I would like to inquire about a Bespoke Commission:\n- Space: ${selectedRoom}\n- Preferred Timber: ${selectedTimber}\n- Scope: ${estimatedSize}\n- Specific Notes: ${customNote || 'Custom design tailored to my room'}\n\nPlease share estimated consultation availability and quote details.`;
    onOpenWhatsAppWithMessage(text);
  };

  return (
    <section
      id="bespoke"
      className="bg-[#101F21] text-[#F3EFE6] py-24 sm:py-36 px-5 sm:px-8 border-b border-[#1C3639] relative overflow-hidden"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#1A383B]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-sans tracking-widest text-[#C5A880] uppercase">
              The Brand Differentiator
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#FAF8F3] leading-[1.1] tracking-tight">
              Furniture Created for Your Space. <br />
              <span className="italic font-normal text-[#D6BB93]">Never from a mass catalog.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#A2B6B8] font-light max-w-2xl leading-relaxed pt-2">
              Most furniture stores force you to adapt your home to standard showroom inventory. At Heaven Furniture Mart, every curve, joint, and millimeter originates from your room’s unique architecture.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={onRequestQuote}
              className="w-full sm:w-auto px-8 py-4 bg-[#C5A880] text-[#0D191A] font-semibold text-xs uppercase tracking-widest font-sans rounded-sm hover:bg-[#D6BB93] transition-all shadow-xl active:scale-95 text-center"
            >
              Request a Bespoke Quote
            </button>
          </div>
        </div>

        {/* The 5-Step Editorial Bespoke Journey */}
        <div className="space-y-6">
          <div className="text-xs font-sans tracking-widest uppercase text-[#8BA5A7] border-b border-[#1A3336] pb-3">
            The Bespoke Commissioning Journey
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {BESPOKE_STEPS.map((stepItem, idx) => (
              <div
                key={idx}
                className="bg-[#142629] p-6 rounded-sm border border-[#1E3A3D] space-y-3 hover:border-[#C5A880]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-serif text-[#C5A880] tracking-wider mb-2">
                    Phase {stepItem.step}
                  </div>
                  <h3 className="text-base font-serif text-[#F3EFE6] leading-snug">
                    {stepItem.name}
                  </h3>
                  <p className="text-xs text-[#9BB1B3] font-light mt-3 leading-relaxed">
                    {stepItem.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Custom Commission Estimator / WhatsApp Launcher */}
        <div className="bg-[#14282B] border border-[#214346] rounded-sm p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Visual & Context */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-sans tracking-wider text-[#C5A880] uppercase">
                  Interactive Commission Planner
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF8F3]">
                  Start Designing Your Custom Piece
                </h3>
                <p className="text-sm text-[#A0B7B9] font-light leading-relaxed">
                  Select your space and timber preferences below. Our managing director and senior joiners will prepare a bespoke spatial layout and material estimate.
                </p>
              </div>

              <div className="p-4 bg-[#0E1B1D] border border-[#1B3639] rounded-xs space-y-3">
                <div className="text-xs font-sans uppercase tracking-wider text-[#C5A880] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  <span>The Heaven Timber Standard</span>
                </div>
                <p className="text-xs text-[#95AEB0] font-light leading-relaxed">
                  Every log undergoes in-house seasoning and moisture-meter testing to prevent warping or shrinkage under Chattogram's coastal weather variations.
                </p>
              </div>
            </div>

            {/* Customizer Form */}
            <div className="lg:col-span-7 bg-[#0E1C1E] p-6 sm:p-8 rounded-sm border border-[#1E3C40] space-y-6">
              
              {/* Room Selector */}
              <div className="space-y-2">
                <label className="text-xs font-sans uppercase tracking-wider text-[#D0C7B8]">
                  Select Room / Area
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Living Room', 'Master Bedroom', 'Dining Space', 'Executive Office'].map(r => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setSelectedRoom(r)}
                      className={`py-2.5 px-3 text-xs font-sans text-center rounded-xs transition-all border ${
                        selectedRoom === r
                          ? 'bg-[#C5A880] text-[#0D191A] font-semibold border-[#C5A880]'
                          : 'bg-[#15272A] text-[#9FB3B5] border-[#1F3C40] hover:text-[#FFFFFF]'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timber Selector */}
              <div className="space-y-2">
                <label className="text-xs font-sans uppercase tracking-wider text-[#D0C7B8]">
                  Timber & Material Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Burmese Teak (Segun)',
                    'Solid Chittagong Gamari',
                    'Kiln-Dried Mehogoni'
                  ].map(t => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTimber(t)}
                      className={`py-2 px-3 text-xs font-sans text-left rounded-xs transition-all border ${
                        selectedTimber === t
                          ? 'bg-[#C5A880] text-[#0D191A] font-semibold border-[#C5A880]'
                          : 'bg-[#15272A] text-[#9FB3B5] border-[#1F3C40] hover:text-[#FFFFFF]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scope / Dimension Note */}
              <div className="space-y-2">
                <label className="text-xs font-sans uppercase tracking-wider text-[#D0C7B8]">
                  Custom Dimensions or Requirements (Optional)
                </label>
                <input
                  type="text"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="e.g. 10-foot TV wall unit with fluted teak & concealed LED, or custom 8-seater dining table"
                  className="w-full bg-[#15272A] border border-[#1F3C40] rounded-xs px-4 py-2.5 text-xs text-[#FAF8F3] placeholder-[#647C7E] focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              {/* Submit / WhatsApp Direct */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleCustomWhatsAppQuote}
                  className="flex-1 py-3.5 px-5 bg-[#25D366] hover:bg-[#20BE5C] text-[#0B2117] font-semibold text-xs uppercase tracking-wider font-sans rounded-xs flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire via WhatsApp with this Configuration</span>
                </button>
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="py-3.5 px-6 bg-[#C5A880] hover:bg-[#D4B78E] text-[#0D191A] font-semibold text-xs uppercase tracking-wider font-sans rounded-xs transition-all active:scale-[0.99]"
                >
                  Book Showroom Meeting
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
