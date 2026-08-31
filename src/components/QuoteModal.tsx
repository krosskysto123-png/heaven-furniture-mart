import React, { useState, useEffect } from 'react';
import { X, MessageCircle, CheckCircle2, Phone, Calendar, Ruler, Sparkles } from 'lucide-react';
import { BRAND_DETAILS } from '../data/furnitureData';
import { QuoteRequestPayload } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItem?: string;
  initialCategory?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialItem = '',
  initialCategory = 'Living'
}) => {
  const [formData, setFormData] = useState<QuoteRequestPayload>({
    fullName: '',
    phone: '',
    email: '',
    category: initialCategory || 'Living',
    woodPreference: 'Burmese Teak (Segun)',
    approxDimensions: initialItem ? `Regarding piece: ${initialItem}` : '',
    notes: '',
    consultationType: 'showroom'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setFormData(prev => ({
        ...prev,
        category: initialCategory,
        approxDimensions: initialItem ? `Regarding piece: ${initialItem}` : prev.approxDimensions
      }));
    }
  }, [initialItem, initialCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const message = `Hello Heaven Furniture Mart!\nI would like to request a bespoke quote.\n- Name: ${formData.fullName || 'Valued Client'}\n- Phone: ${formData.phone || 'N/A'}\n- Space: ${formData.category}\n- Wood: ${formData.woodPreference}\n- Details: ${formData.approxDimensions || 'Custom specifications'}\n- Consultation Preference: ${formData.consultationType.toUpperCase()}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${BRAND_DETAILS.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0D191A]/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#FAF7F0] border border-[#E3D9C3] text-[#1F1914] w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#122224] text-[#FAF8F3] px-6 sm:px-8 py-5 flex items-center justify-between border-b border-[#1E3A3D]">
          <div>
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C5A880]">
              Heaven Furniture Mart · Agrabad
            </span>
            <h3 className="text-xl sm:text-2xl font-serif mt-0.5">
              Request a Bespoke Quote & Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#9DB2B4] hover:text-[#FFFFFF] p-1.5 rounded-xs transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-14 h-14 rounded-full bg-[#E5F5EC] text-[#1E7E45] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-serif text-[#1F1914]">
                  Quote Request Received
                </h4>
                <p className="text-sm text-[#675B4F] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#1F1914]">{formData.fullName}</strong>. Our Managing Director & design consultants will review your custom specifications and reach you at <span className="font-mono text-[#1F1914]">{formData.phone}</span> within 24 hours.
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE2D0] flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-6 py-3 bg-[#25D366] text-[#0A2616] font-semibold text-xs uppercase tracking-wider font-sans rounded-xs hover:bg-[#20BD5B] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send via WhatsApp for Faster Response</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-[#D5C9B5] text-xs font-medium uppercase rounded-xs hover:bg-[#EAE2D0]"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Category & Timber selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-sans uppercase tracking-wider text-[#675C50] font-medium">
                    Space / Room Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#D8CEBA] rounded-xs px-3.5 py-2.5 text-xs text-[#1F1914] focus:outline-none focus:border-[#8B6640]"
                    required
                  >
                    <option value="Living">Living Room (Sofas, Credenzas, TV Units)</option>
                    <option value="Bedroom">Master Bedroom (Beds, Wardrobes, Vanities)</option>
                    <option value="Dining">Dining (Tables, Sculpted Chairs, Cabinets)</option>
                    <option value="Office">Office & Study (Executive Desks, Library)</option>
                    <option value="FullBespoke">Entire Residence / Custom Commission</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-sans uppercase tracking-wider text-[#675C50] font-medium">
                    Timber Preference *
                  </label>
                  <select
                    value={formData.woodPreference}
                    onChange={(e) => setFormData({ ...formData, woodPreference: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#D8CEBA] rounded-xs px-3.5 py-2.5 text-xs text-[#1F1914] focus:outline-none focus:border-[#8B6640]"
                  >
                    <option value="Burmese Teak (Segun)">Burmese Teak (Segun) - Premium</option>
                    <option value="Solid Chittagong Gamari">Solid Chittagong Gamari</option>
                    <option value="Kiln-Dried Mehogoni">Kiln-Dried Mehogoni</option>
                    <option value="Artisan Recommendation">Guide Me / Need Recommendation</option>
                  </select>
                </div>
              </div>

              {/* Client Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-sans uppercase tracking-wider text-[#675C50] font-medium">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Ahmed"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#D8CEBA] rounded-xs px-3.5 py-2.5 text-xs text-[#1F1914] focus:outline-none focus:border-[#8B6640]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-sans uppercase tracking-wider text-[#675C50] font-medium">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 18XX-XXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#D8CEBA] rounded-xs px-3.5 py-2.5 text-xs text-[#1F1914] focus:outline-none focus:border-[#8B6640]"
                  />
                </div>
              </div>

              {/* Custom specs note */}
              <div className="space-y-1.5">
                <label className="text-xs font-sans uppercase tracking-wider text-[#675C50] font-medium">
                  Project Notes, Room Dimensions or Desired Pieces
                </label>
                <textarea
                  rows={3}
                  value={formData.approxDimensions}
                  onChange={(e) => setFormData({ ...formData, approxDimensions: e.target.value })}
                  placeholder="Provide approximate room dimensions, preferred finish, or reference photos you have in mind..."
                  className="w-full bg-[#FFFFFF] border border-[#D8CEBA] rounded-xs px-3.5 py-2.5 text-xs text-[#1F1914] focus:outline-none focus:border-[#8B6640] resize-none"
                />
              </div>

              {/* Consultation Preference */}
              <div className="space-y-1.5">
                <label className="text-xs font-sans uppercase tracking-wider text-[#675C50] font-medium">
                  Preferred Consultation Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'showroom', label: 'Agrabad Showroom' },
                    { id: 'virtual', label: 'WhatsApp / Call' },
                    { id: 'home-visit', label: 'Chattogram Home Visit' }
                  ].map((mode) => (
                    <button
                      type="button"
                      key={mode.id}
                      onClick={() => setFormData({ ...formData, consultationType: mode.id as any })}
                      className={`py-2 px-2 text-[11px] font-sans text-center rounded-xs transition-all border ${
                        formData.consultationType === mode.id
                          ? 'bg-[#1F1914] text-[#FAF7F0] font-medium border-[#1F1914]'
                          : 'bg-[#FFFFFF] text-[#675C50] border-[#D8CEBA] hover:bg-[#F2ECE0]'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-[#E8DFC9] flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:flex-1 py-3.5 bg-[#1F1914] hover:bg-[#332B23] text-[#FAF7F0] font-semibold text-xs uppercase tracking-widest font-sans rounded-xs transition-all disabled:opacity-50"
                >
                  {submitting ? 'Submitting Request...' : 'Submit Quote Request'}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-5 py-3.5 bg-[#25D366] hover:bg-[#20BC5A] text-[#0A2616] font-semibold text-xs uppercase tracking-wider font-sans rounded-xs flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Instant WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-[#867664] text-center font-sans">
                Complimentary initial consultation. No obligation to purchase.
              </p>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
