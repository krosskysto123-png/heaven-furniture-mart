export interface CollectionItem {
  id: string;
  title: string;
  category: 'Living' | 'Bedroom' | 'Dining' | 'Office';
  shortDesc: string;
  materials: string[];
  dimensions: string;
  imageUrl: string;
  aspectRatio?: string;
  featureNote?: string;
}

export interface TrustPillar {
  id: string;
  title: string;
  description: string;
  highlightText: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface QuoteRequestPayload {
  fullName: string;
  phone: string;
  email?: string;
  category: string;
  woodPreference: string;
  approxDimensions?: string;
  notes?: string;
  consultationType: 'showroom' | 'virtual' | 'home-visit';
}
