import React from 'react';
import { MessageCircle, FileText } from 'lucide-react';

interface StickyMobileCTAProps {
  onRequestQuote: () => void;
  onOpenWhatsApp: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({
  onRequestQuote,
  onOpenWhatsApp
}) => {
  return (
    <div
      id="sticky-mobile-cta"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0D191A]/95 backdrop-blur-lg border-t border-[#1F393C] p-3 px-4 flex items-center gap-3 shadow-2xl safe-area-pb"
    >
      <button
        onClick={onOpenWhatsApp}
        className="flex-1 py-3 px-3 bg-[#162D30] hover:bg-[#1C3B3F] text-[#FAF8F3] border border-[#2B4B4F] rounded-xs font-sans text-xs font-medium flex items-center justify-center gap-2 active:scale-95 transition-all"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        <span>WhatsApp</span>
      </button>

      <button
        onClick={onRequestQuote}
        className="flex-[1.4] py-3 px-4 bg-[#C5A880] text-[#0D191A] font-semibold font-sans text-xs uppercase tracking-wider rounded-xs active:scale-95 transition-all shadow-md flex items-center justify-center gap-1.5"
        aria-label="Request a Custom Quote"
      >
        <span>Request a Quote</span>
      </button>
    </div>
  );
};
