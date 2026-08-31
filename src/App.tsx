import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { WhyChoose } from './components/WhyChoose';
import { CollectionsSnapshot } from './components/CollectionsSnapshot';
import { BespokeHighlight } from './components/BespokeHighlight';
import { SocialProof } from './components/SocialProof';
import { ShowroomSection } from './components/ShowroomSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { BRAND_DETAILS } from './data/furnitureData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteItem, setSelectedQuoteItem] = useState<{ title: string; category: string } | null>(null);

  const handleOpenQuoteModal = useCallback((itemTitle?: string, itemCategory?: string) => {
    if (itemTitle && itemCategory) {
      setSelectedQuoteItem({ title: itemTitle, category: itemCategory });
    } else {
      setSelectedQuoteItem(null);
    }
    setIsQuoteModalOpen(true);
  }, []);

  const handleCloseQuoteModal = useCallback(() => {
    setIsQuoteModalOpen(false);
    setSelectedQuoteItem(null);
  }, []);

  const handleOpenWhatsApp = useCallback((customMessage?: string) => {
    const defaultMsg = `Hello Heaven Furniture Mart! I would like to inquire about your luxury bespoke furniture & interior styling services at your Agrabad Access Road showroom.`;
    const message = customMessage || defaultMsg;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${BRAND_DETAILS.whatsappNumber}?text=${encoded}`, '_blank');
  }, []);

  return (
    <div className="min-h-screen bg-[#0D191A] text-[#F3EFE6] flex flex-col selection:bg-[#C5A880]/30 selection:text-[#FFFFFF]">
      {/* Top Navigation */}
      <Navbar
        onRequestQuote={() => handleOpenQuoteModal()}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onRequestQuote={() => handleOpenQuoteModal()}
          onOpenWhatsApp={() => handleOpenWhatsApp()}
        />

        {/* Section 2: Brand Intro */}
        <BrandIntro />

        {/* Section 3: Why Choose Heaven (Trust Points) */}
        <WhyChoose
          onRequestQuote={() => handleOpenQuoteModal()}
        />

        {/* Section 4: Collections Snapshot */}
        <CollectionsSnapshot
          onSelectItemForQuote={(itemTitle, category) => handleOpenQuoteModal(itemTitle, category)}
        />

        {/* Section 5: Bespoke Highlight (#1 Differentiator) */}
        <BespokeHighlight
          onRequestQuote={() => handleOpenQuoteModal()}
          onOpenWhatsAppWithMessage={(msg) => handleOpenWhatsApp(msg)}
        />

        {/* Section 6: Social Proof (MD Quote & Milestones) */}
        <SocialProof />

        {/* Physical Showroom on Agrabad Access Road */}
        <ShowroomSection
          onRequestQuote={() => handleOpenQuoteModal()}
          onOpenWhatsApp={() => handleOpenWhatsApp()}
        />
      </main>

      {/* Section 8: Footer */}
      <Footer
        onRequestQuote={() => handleOpenQuoteModal()}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* Sticky Mobile Conversion Bar */}
      <StickyMobileCTA
        onRequestQuote={() => handleOpenQuoteModal()}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* Request a Quote / WhatsApp Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialItem={selectedQuoteItem?.title}
        initialCategory={selectedQuoteItem?.category}
      />
    </div>
  );
}
