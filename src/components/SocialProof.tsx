import React from 'react';
import { Quote, Award, Building, CheckCircle2 } from 'lucide-react';
import { MILESTONES, TESTIMONIAL_HIGHLIGHT } from '../data/furnitureData';

export const SocialProof: React.FC = () => {
  return (
    <section
      id="heritage"
      className="bg-[#FAF7F0] text-[#1F1914] py-24 sm:py-36 px-5 sm:px-8 border-b border-[#E6DFC8]"
    >
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Managing Director's Quote Section */}
        <div className="bg-[#FFFFFF] border border-[#E6DFC8] p-8 sm:p-14 lg:p-16 shadow-xl rounded-sm relative overflow-hidden">
          <div className="absolute top-6 right-8 text-[#EADFCB] opacity-40 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1]" />
          </div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="text-xs font-sans tracking-widest text-[#8B6640] uppercase">
              Managing Director's Vision
            </span>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1F1914] leading-[1.3] font-normal italic">
              "{TESTIMONIAL_HIGHLIGHT.quote}"
            </blockquote>

            <div className="pt-6 border-t border-[#EAE2D0] flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="text-lg font-serif text-[#1F1914] font-medium">
                  {TESTIMONIAL_HIGHLIGHT.author}
                </div>
                <div className="text-xs text-[#7A6B5C] font-sans">
                  {TESTIMONIAL_HIGHLIGHT.role} · {TESTIMONIAL_HIGHLIGHT.company}
                </div>
              </div>

              <div className="text-xs font-sans px-3.5 py-1.5 bg-[#F2ECE0] text-[#675647] rounded-xs border border-[#E0D5C3]">
                Agrabad Access Road, Chattogram
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-sans tracking-widest text-[#8B6640] uppercase">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1F1914] tracking-tight">
              A Journey of Craftsmanship & Trust
            </h2>
            <p className="text-sm sm:text-base text-[#675C50] font-light leading-relaxed">
              From our founding workshop to nationwide recognition by the Bangladesh Furniture Industry Owners Association.
            </p>
          </div>

          {/* Sequential Timeline Track */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative">
            {MILESTONES.map((milestone, idx) => (
              <div
                key={milestone.year}
                className="bg-[#FFFFFF] border border-[#E3D9C3] p-6 rounded-sm shadow-sm flex flex-col justify-between relative group hover:border-[#8B6640] transition-colors"
              >
                <div>
                  <div className="text-2xl font-serif font-bold text-[#8B6640] pb-2 border-b border-[#EFE8DA]">
                    {milestone.year}
                  </div>
                  <h3 className="text-base font-serif text-[#1F1914] font-medium mt-3 leading-snug">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-[#6F6253] font-light mt-2 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F5EFE4] text-[10px] uppercase font-sans tracking-wider text-[#A08F7D]">
                  {idx === 0 ? 'Foundation' : idx === 4 ? 'Accreditation' : 'Expansion'}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
