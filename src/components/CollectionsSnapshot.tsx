import React, { useState } from 'react';
import { Sparkles, Maximize2, Layers, Check } from 'lucide-react';
import { COLLECTIONS_DATA } from '../data/furnitureData';
import { CollectionItem } from '../types';

interface CollectionsSnapshotProps {
  onSelectItemForQuote: (itemTitle: string, category: string) => void;
}

export const CollectionsSnapshot: React.FC<CollectionsSnapshotProps> = ({
  onSelectItemForQuote
}) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Living' | 'Bedroom' | 'Dining' | 'Office'>('All');
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);

  const filteredItems = activeCategory === 'All'
    ? COLLECTIONS_DATA
    : COLLECTIONS_DATA.filter(item => item.category === activeCategory);

  return (
    <section
      id="collections"
      className="bg-[#FAF7F0] text-[#1F1914] py-24 sm:py-32 px-5 sm:px-8 border-b border-[#E6DFC8]"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#E3D9C3] pb-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F1914] tracking-tight">
              Collections Snapshot
            </h2>
            <p className="text-sm sm:text-base text-[#675C50] font-light leading-relaxed">
              A curated preview of recent bespoke commissions across Living, Bedroom, Dining, and Executive Study spaces.
            </p>
          </div>

          {/* Clean Editorial Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'Living', 'Bedroom', 'Dining', 'Office'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-sans tracking-wider uppercase transition-all rounded-xs ${
                  activeCategory === cat
                    ? 'bg-[#1F1914] text-[#FAF7F0] font-semibold'
                    : 'bg-[#EDE7D8] text-[#675C50] hover:bg-[#E2DAC8] hover:text-[#1F1914]'
                }`}
              >
                {cat === 'All' ? 'All Spaces' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className={`group flex flex-col bg-[#FFFFFF] border border-[#E6DFC8] p-5 sm:p-7 shadow-md transition-all duration-300 hover:shadow-xl ${
                idx % 2 === 1 ? 'md:translate-y-6' : ''
              }`}
            >
              {/* Image with zoom effect */}
              <div className="relative overflow-hidden bg-[#EAE2D0] aspect-[16/10] mb-6">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#0D191A]/85 backdrop-blur-md px-3 py-1 text-[11px] font-sans tracking-widest uppercase text-[#F3EFE6] rounded-xs">
                  {item.featureNote || item.category}
                </div>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="absolute bottom-3 right-3 bg-[#0D191A]/80 hover:bg-[#0D191A] text-[#FAF7F0] p-2.5 rounded-xs backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  title="View Details"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Description */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif text-[#1F1914] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#675C50] font-light mt-2 leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Materials & Details */}
                <div className="pt-4 border-t border-[#EAE2D0] space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.materials.map((mat, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-sans bg-[#F2EDE2] text-[#55493D] px-2.5 py-1 rounded-xs border border-[#E3D9C4]"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-[#827464] font-sans">
                      {item.dimensions}
                    </span>
                    <button
                      onClick={() => onSelectItemForQuote(item.title, item.category)}
                      className="text-xs font-semibold uppercase tracking-wider font-sans text-[#8B6640] hover:text-[#1F1914] transition-colors"
                    >
                      Request Quote for this Piece
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Quick View */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D191A]/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#FAF7F0] border border-[#E3D9C3] max-w-2xl w-full p-6 sm:p-8 rounded-sm shadow-2xl space-y-6 text-[#1F1914] max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-sans uppercase tracking-widest text-[#9E7B56]">
                    {selectedItem.category} Space
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1F1914] mt-1">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-xs font-sans uppercase px-3 py-1.5 bg-[#EAE2D0] hover:bg-[#DACFBC] rounded-xs"
                >
                  Close
                </button>
              </div>

              <div className="aspect-[16/10] overflow-hidden bg-[#EAE2D0]">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm text-[#55493D] font-light leading-relaxed">
                <p>{selectedItem.shortDesc}</p>
                <div className="bg-[#FFFFFF] p-4 border border-[#E6DFC8] space-y-2 rounded-xs">
                  <div className="text-xs font-sans font-semibold uppercase tracking-wider text-[#1F1914]">
                    Craftsmanship Specifications
                  </div>
                  <div className="text-xs text-[#675C50] space-y-1">
                    <p><strong className="font-medium text-[#1F1914]">Materials:</strong> {selectedItem.materials.join(', ')}</p>
                    <p><strong className="font-medium text-[#1F1914]">Proportions:</strong> {selectedItem.dimensions}</p>
                    <p><strong className="font-medium text-[#1F1914]">Customization:</strong> 100% adaptable to your room dimensions and wood finish</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const item = selectedItem;
                    setSelectedItem(null);
                    onSelectItemForQuote(item.title, item.category);
                  }}
                  className="flex-1 py-3.5 bg-[#1F1914] text-[#FAF7F0] text-xs font-semibold tracking-widest uppercase rounded-xs hover:bg-[#332A22] transition-colors"
                >
                  Request a Quote for this Design
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="py-3.5 px-6 border border-[#DACFBC] text-xs font-medium uppercase rounded-xs hover:bg-[#EAE2D0]"
                >
                  Return to Snapshot
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
