import { CollectionItem, TrustPillar, Milestone } from '../types';

export const BRAND_DETAILS = {
  name: "Heaven Furniture Mart",
  tagline: "Designed. Crafted. Customized.",
  founder: "Abul Kalam Bhuiyan",
  founderTitle: "Managing Director",
  foundingYear: "2020",
  locationName: "Agrabad Access Road, Chattogram",
  fullAddress: "Agrabad Access Road (Near Badamtoli Moor / Commercial Zone), Chattogram 4100, Bangladesh",
  phone: "+880 1960-481983",
  phoneDisplay: "+880 1960-481983",
  whatsappNumber: "8801960481983",
  email: "heavenfurnituremart@gmail.com",
  hours: "Saturday – Thursday: 10:00 AM – 9:00 PM | Friday: 3:00 PM – 9:00 PM",
  socials: {
    facebook: "https://facebook.com/heavenfurnituremart",
    instagram: "https://instagram.com/heavenfurnituremart",
    whatsapp: "https://wa.me/8801819247833"
  }
};

export const TRUST_PILLARS: TrustPillar[] = [
  {
    id: "consultation",
    title: "Complimentary Design Consultation",
    description: "Meet with our in-house interior consultants at our Agrabad showroom or your residence to review floor plans, spatial lighting, and fabric swatches at zero upfront cost.",
    highlightText: "Zero-commitment initial styling"
  },
  {
    id: "bespoke-tailored",
    title: "100% Bespoke to Your Space",
    description: "Every millimeter is measured and customized around your specific room dimensions, ceiling height, and personal lifestyle. No mass-market compromises.",
    highlightText: "Tailored spatial precision"
  },
  {
    id: "wood-craftsmanship",
    title: "Seasoned Solid Hardwood & Master Joinery",
    description: "Sourced from sustainably aged Burmese Teak (Segun), Chittagong Gamari, and premium Mehogoni. Hand-planed and kiln-dried in our dedicated workshop.",
    highlightText: "100% Seasoned Solid Timber"
  },
  {
    id: "showroom-presence",
    title: "Spacious Physical Showroom in Agrabad",
    description: "Experience the tactile weight of solid wood and sit in custom ergonomic proportions at our flagship showroom on Agrabad Access Road before commissioning.",
    highlightText: "Flagship Agrabad location"
  },
  {
    id: "white-glove-delivery",
    title: "White-Glove Delivery & In-Home Assembly",
    description: "Our certified installation team carefully transports, positions, and installs every finished piece in your home across Chattogram and Dhaka.",
    highlightText: "Complete installation included"
  },
  {
    id: "proven-reputation",
    title: "Trusted by 650+ Homeowners & Estates",
    description: "Over 5 years of transforming prestigious residences, penthouses, executive offices, and luxury duplexes across greater Chattogram.",
    highlightText: "5-Star local reputation"
  }
];

export const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: "living-sofa-lounge",
    title: "The Agrabad Fluted Teak Sofa & Console",
    category: "Living",
    shortDesc: "Custom three-seater handcrafted in aged Segun (Burmese Teak) with Italian bouclé upholstery and matching low-slung credenza.",
    materials: ["Burmese Teak (Segun)", "Imported Bouclé / Linen", "Concealed Brass Joinery"],
    dimensions: "98\" W × 38\" D × 30\" H (Customizable)",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
    featureNote: "Living Room"
  },
  {
    id: "bedroom-sanctuary",
    title: "The Bayside Floating Master Bed Suite",
    category: "Bedroom",
    shortDesc: "Low-profile upholstered headboard integrated into continuous fluted wood paneling with soft-close cantilevered nightstands.",
    materials: ["Solid Chittagong Gamari", "Nubuck Microfiber", "Warm Dimmable LED channels"],
    dimensions: "King (84\" W × 88\" L) / Queen Available",
    imageUrl: "/assets/bedroom.jpg",
    featureNote: "Bedroom"
  },
  {
    id: "dining-statement",
    title: "The Karnaphuli 8-Seater Monolith Dining Table",
    category: "Dining",
    shortDesc: "Substantial solid wood slab with chamfered live-edge profile, paired with sculpturally carved ergonomic dining armchairs.",
    materials: ["Kiln-Dried Solid Mehogoni / Teak", "Matte Polyurethane Protective Seal"],
    dimensions: "96\" L × 42\" W × 30\" H (6 to 12 Seater)",
    imageUrl: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=85",
    featureNote: "Dining"
  },
  {
    id: "office-executive",
    title: "The Karnaphuli Executive Desk & Wall Library",
    category: "Office",
    shortDesc: "Statement executive workstation with fluted timber pedestal, flush wire management channels, and floor-to-ceiling modular bookshelf.",
    materials: ["Seasoned Teak Core", "Hand-brushed Brass hardware", "Leather inlay pad"],
    dimensions: "78\" W × 36\" D × 30\" H",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85",
    featureNote: "Office & Study"
  }
];

export const BESPOKE_STEPS = [
  {
    step: "01",
    name: "Spatial Consultation & Concept",
    detail: "We review your room measurements, lighting orientation, and functional lifestyle requirements over tea at our Agrabad studio or via in-home visit."
  },
  {
    step: "02",
    name: "Timber & Finish Selection",
    detail: "Hand-select from seasoned raw timber slabs (Teak, Mehogoni, Gamari) and test high-performance upholstery fabrics and metal hardware."
  },
  {
    step: "03",
    name: "3D Drafting & Joinery Detailing",
    detail: "Our design team produces precise technical shop drawings to confirm proportion, ergonomics, and seamless room integration."
  },
  {
    step: "04",
    name: "Master Artisan Handcrafting",
    detail: "Experienced Chattogram craftsmen hand-cut, mortise-and-tenon join, and apply multi-layer natural oil or satin polyurethane finishes."
  },
  {
    step: "05",
    name: "White-Glove Delivery & Installation",
    detail: "Delivered straight to your doorstep and installed by our dedicated team with zero hassle or debris left behind."
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: "2020",
    title: "Founded by Abul Kalam Bhuiyan",
    description: "Established Heaven Furniture Mart in Chattogram with a dedicated workshop of master carpenters focused on bespoke residential joinery."
  },
  {
    year: "2021",
    title: "Agrabad Access Road Showroom",
    description: "Inaugurated our flagship multi-floor showroom, offering clients a serene, tactile space to touch solid wood and test custom finishes."
  },
  {
    year: "2024",
    title: "International Furniture Fair, Chattogram",
    description: "Awarded top acclaim for artisanal living and dining collections engineered from seasoned Bangladeshi and Burmese hardwoods."
  },
  {
    year: "2025",
    title: "Chamber of Commerce Member",
    description: "Officially inducted into the Chattogram Chamber of Commerce & Industry, cementing our dedication to trade integrity and ethical timber sourcing."
  },
  {
    year: "2026",
    title: "Nationwide BFIOA Recognition",
    description: "Recognized by the Bangladesh Furniture Industry Owners Association (BFIOA) for outstanding excellence in bespoke craftsmanship and tailored interiors."
  }
];

export const TESTIMONIAL_HIGHLIGHT = {
  quote: "Furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.",
  author: "Abul Kalam Bhuiyan",
  role: "Founder & Managing Director",
  company: "Heaven Furniture Mart, Chattogram"
};
