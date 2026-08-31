import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X } from 'lucide-react';
import { BRAND_DETAILS } from '../data/furnitureData';

interface NavbarProps {
  onRequestQuote: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote, onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D191A]/95 backdrop-blur-md border-b border-[#1E3335] py-3.5 shadow-xl'
          : 'bg-gradient-to-b from-[#0D191A]/90 via-[#0D191A]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          id="nav-brand-logo"
          className="flex flex-col tracking-tight group"
        >
          <span className="font-serif text-2xl sm:text-3xl tracking-wider text-[#FDFBF7] group-hover:text-[#C5A880] transition-colors">
            HEAVEN
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#C5A880] font-sans -mt-1 font-medium">
            FURNITURE MART · CHATTOGRAM
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-sans tracking-wide text-[#DDD6C8]">
          <a
            href="#collections"
            className="hover:text-[#C5A880] transition-colors py-1"
          >
            Collections
          </a>
          <a
            href="#bespoke"
            className="hover:text-[#C5A880] transition-colors py-1"
          >
            Bespoke Atelier
          </a>
          <a
            href="#why-choose"
            className="hover:text-[#C5A880] transition-colors py-1"
          >
            Craftsmanship
          </a>
          <a
            href="#heritage"
            className="hover:text-[#C5A880] transition-colors py-1"
          >
            Our Story
          </a>
          <a
            href="#showroom"
            className="hover:text-[#C5A880] transition-colors py-1 flex items-center gap-1.5 text-xs text-[#9BB5B7] hover:text-[#C5A880]"
          >
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            Agrabad Showroom
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3.5">
          <button
            id="nav-whatsapp-btn"
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-[#234245] text-xs font-sans text-[#D6CEBE] hover:border-[#C5A880] hover:text-[#FFFFFF] transition-all bg-[#122123]/60"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </button>

          <button
            id="nav-quote-btn"
            onClick={onRequestQuote}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-[#C5A880] text-[#0D191A] hover:bg-[#D6BB93] text-xs font-semibold tracking-wider font-sans uppercase transition-all shadow-md active:scale-95"
          >
            Request a Quote
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#E7E0D2] hover:text-[#C5A880] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D191A] border-b border-[#1E3335] px-6 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="text-xs text-[#8BA7A9] flex items-center gap-1.5 pb-2 border-b border-[#1A2E30]">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            Agrabad Access Road, Chattogram
          </div>
          <div className="flex flex-col space-y-3 font-serif text-lg text-[#F0EBE0]">
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A880] transition-colors py-1"
            >
              Collections
            </a>
            <a
              href="#bespoke"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A880] transition-colors py-1"
            >
              Bespoke Commissioning
            </a>
            <a
              href="#why-choose"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A880] transition-colors py-1"
            >
              Why Heaven
            </a>
            <a
              href="#heritage"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A880] transition-colors py-1"
            >
              Heritage & Milestones
            </a>
            <a
              href="#showroom"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A880] transition-colors py-1"
            >
              Visit Agrabad Showroom
            </a>
          </div>

          <div className="pt-4 border-t border-[#1A2E30] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3 bg-[#C5A880] text-[#0D191A] font-semibold text-xs uppercase tracking-wider font-sans rounded"
            >
              Request a Quote
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full py-2.5 border border-[#234245] text-xs text-[#E5DFD3] rounded flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Direct Line</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
