import { PropertyItem, ClientInquiry, Founder } from '../types';
import heroVillaImg from '../assets/images/hero_ceylon_luxury_villa_1790842457306.jpg';
import penthouseImg from '../assets/images/colombo_waterfront_penthouse_1790842470694.jpg';
import commercialImg from '../assets/images/ceylon_commercial_tower_1790842484344.jpg';
import sapphireImg from '../assets/images/ceylon_royal_sapphire_1790842499208.jpg';

export const INITIAL_PROPERTIES: PropertyItem[] = [
  {
    id: 'prop-1',
    title: 'Modern Tropical Luxury Villa with Infinity Pool',
    category: 'houses',
    listingType: 'Sale',
    priceLkr: 285000000,
    priceUsd: 950000,
    location: 'Thalawathugoda, Colombo',
    district: 'Colombo',
    image: heroVillaImg,
    description: 'An architectural masterpiece designed in tropical modernism. Features expansive double-height living areas, imported teak wood finishes, private infinity pool, solar backup, and landscaped tropical gardens.',
    features: ['5 En-suite Bedrooms', 'Private Swimming Pool', 'Solar Powered System', 'Maids Quarters', '3-Car Garage', 'Architect-Designed'],
    bedrooms: 5,
    bathrooms: 6,
    areaSqFt: 6200,
    landPerches: 24,
    featured: true,
    status: 'Available',
    createdAt: '2026-09-24',
    realtorContact: '070-2048359'
  },
  {
    id: 'prop-2',
    title: 'Oceanfront Sky Penthouse with Colombo Skyline Vista',
    category: 'apartments',
    listingType: 'Sale',
    priceLkr: 195000000,
    priceUsd: 650000,
    location: 'Kollupitiya (Colombo 03), Marine Drive',
    district: 'Colombo',
    image: penthouseImg,
    description: 'Exclusive penthouse with panoramic views of the Indian Ocean and Colombo port city. Luxury Italian kitchen, smart home automation, private elevator access, and rooftop terrace.',
    features: ['Panoramic Ocean View', 'Italian Designer Kitchen', 'Smart Home Integration', 'Clubhouse & Gym', '2 Dedicated Parking Slots'],
    bedrooms: 4,
    bathrooms: 4,
    areaSqFt: 3850,
    featured: true,
    status: 'Available',
    createdAt: '2026-09-28',
    realtorContact: '074-0504717'
  },
  {
    id: 'prop-3',
    title: 'Prime 7-Storey Commercial Office Headquarters',
    category: 'commercial',
    listingType: 'Rent',
    priceLkr: 4200000, // Monthly Rent LKR
    priceUsd: 14000,
    location: 'Cinnamon Gardens (Colombo 07)',
    district: 'Colombo',
    image: commercialImg,
    description: 'A Grade-A corporate office building situated in the most prestigious diplomatic zone of Colombo 07. Fully fitted glass curtain walls, centralized HVAC, dual high-speed elevators, and backup generator.',
    features: ['Grade-A Corporate Spec', 'Dual High-Speed Elevators', '24/7 Security & CCTV', 'Underground Parking for 25 Vehicles', '100% Generator Backup'],
    areaSqFt: 22000,
    landPerches: 35,
    featured: true,
    status: 'Available',
    createdAt: '2026-09-18',
    realtorContact: '071-6041322'
  },
  {
    id: 'prop-4',
    title: 'Natural Ceylon Royal Blue Sapphire (14.28 Carats)',
    category: 'gemstones',
    listingType: 'Investment',
    priceLkr: 65000000,
    priceUsd: 215000,
    location: 'Ratnapura / Colombo Vault',
    district: 'Ratnapura',
    image: sapphireImg,
    description: 'Museum-grade natural unheated Ceylon Royal Blue Sapphire from the historic mines of Ratnapura. Complete with GIA & GIC international laboratory certification. An exceptional inflation-resistant tangible asset investment.',
    features: ['14.28 Carats Weight', 'Unheated / Untreated Natural', 'Certified GIA & GIC Gemological Lab', 'Vivid Royal Blue Color Grade', 'Vault Storage Available'],
    gemCarat: 14.28,
    gemOrigin: 'Ceylon (Ratnapura)',
    featured: true,
    status: 'Available',
    createdAt: '2026-09-15',
    realtorContact: '070-2048359'
  },
  {
    id: 'prop-5',
    title: 'Beachfront 80 Perches Tourism & Resort Land Plot',
    category: 'lands',
    listingType: 'Sale',
    priceLkr: 320000000,
    priceUsd: 1060000,
    location: 'Bentota Golden Mile Beach, Southern Coast',
    district: 'Galle',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: 'Rare direct oceanfront parcel with 45 meters of pristine sandy beach frontage. Clear deed with SLTDA (Sri Lanka Tourism Development Authority) boutique resort clearance.',
    features: ['Direct Beach Frontage', 'Tourism Board Approved', 'Clear Freehold Title', '3-Phase Electricity & Water Mains', 'Ideal for Boutique Hotel or Luxury Villa'],
    landPerches: 80,
    featured: false,
    status: 'Available',
    createdAt: '2026-09-20',
    realtorContact: '074-0504717'
  },
  {
    id: 'prop-6',
    title: '25 Perches Prime Residential Land in Rajagiriya',
    category: 'lands',
    listingType: 'Sale',
    priceLkr: 112500000,
    priceUsd: 375000,
    location: 'Nawala Road, Rajagiriya',
    district: 'Colombo',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    description: 'Superb square land plot nestled in an elite residential gated community. 20-foot wide carpeted access road, minutes away from supermarkets, international schools, and hospitals.',
    features: ['20-Foot Carpeted Access Road', 'Clear Bank Loans Available', 'Square Shaped Plot', 'High Elevation Non-Flood Area'],
    landPerches: 25,
    featured: false,
    status: 'Available',
    createdAt: '2026-09-22',
    realtorContact: '071-6041322'
  },
  {
    id: 'prop-7',
    title: 'Toyota Land Cruiser V8 ZX Modellista Luxury SUV',
    category: 'vehicles',
    listingType: 'Sale',
    priceLkr: 78500000,
    priceUsd: 260000,
    location: 'Colombo Showroom, Colombo 04',
    district: 'Colombo',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    description: 'Immaculate condition Toyota Land Cruiser ZX with full Modellista factory aero package. Sunroof, rear entertainment screens, 360-degree cameras, cool box, and low mileage.',
    features: ['V8 Twin Turbo Engine', 'Modellista Aero Bodykit', 'Full Leather Interior & Sunroof', '360 Camera & JBL Sound', 'Single Owner / Maintained at Agent'],
    vehicleMake: 'Toyota Land Cruiser ZX',
    vehicleYear: 2022,
    featured: false,
    status: 'Available',
    createdAt: '2026-09-29',
    realtorContact: '070-2048359'
  },
  {
    id: 'prop-8',
    title: 'Industrial Heavy Logistics Warehouse & Storage Yard',
    category: 'commercial',
    listingType: 'Rent',
    priceLkr: 2200000,
    priceUsd: 7300,
    location: 'Kelaniya Industrial Zone, Colombo Suburbs',
    district: 'Gampaha',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    description: '35,000 sq.ft heavy duty clear-span logistics warehouse with 10-meter ceiling clearance, 4 container loading docks, and 24-hour container trailer turning radius.',
    features: ['35,000 Sq.Ft Covered Space', '4 Container Loading Docks', '10-Meter Eaves Clearance', '3-Phase Heavy Industrial Power', 'Fire Hydrant System Certified'],
    areaSqFt: 35000,
    landPerches: 120,
    featured: false,
    status: 'Available',
    createdAt: '2026-09-12',
    realtorContact: '074-0504717'
  }
];

export const INITIAL_INQUIRIES: ClientInquiry[] = [
  {
    id: 'inq-1',
    clientName: 'Dr. Rohan Wickramasinghe',
    phone: '077-4589210',
    email: 'rohan.w@ceylonmed.lk',
    propertyId: 'prop-1',
    propertyTitle: 'Modern Tropical Luxury Villa with Infinity Pool',
    inquiryType: 'Buy',
    message: 'Interested in scheduling a private on-site inspection for the Thalawathugoda luxury villa this Saturday morning. Please confirm the valuation details.',
    status: 'New',
    notes: 'High-intent buyer looking for primary residence. Follow up via WhatsApp.',
    createdAt: '2026-09-30 14:22'
  },
  {
    id: 'inq-2',
    clientName: 'Mrs. Shanthi Jayawardena',
    phone: '071-8841203',
    email: 's.jayawardena@finvest.com',
    propertyId: 'prop-2',
    propertyTitle: 'Oceanfront Sky Penthouse with Colombo Skyline Vista',
    inquiryType: 'Buy',
    message: 'We are looking for an ocean view penthouse for expatriate leasing or direct purchase. Please share the deed verification papers.',
    status: 'Inspection Scheduled',
    notes: 'Site visit confirmed with realtor Samitha for Oct 3rd at 3:00 PM.',
    createdAt: '2026-09-29 09:15'
  },
  {
    id: 'inq-3',
    clientName: 'Dilshan Perera (Logistics Director)',
    phone: '077-3021948',
    email: 'dilshan@globalfreight.lk',
    propertyId: 'prop-8',
    propertyTitle: 'Industrial Heavy Logistics Warehouse & Storage Yard',
    inquiryType: 'Rent',
    message: 'Requesting commercial lease terms for a 3-year agreement on the Kelaniya logistics center.',
    status: 'Contacted',
    notes: 'Sent PDF lease draft and rate card.',
    createdAt: '2026-09-28 17:40'
  },
  {
    id: 'inq-4',
    clientName: 'Kavinda Alwis',
    phone: '076-9051833',
    email: 'kavinda.alwis@gmail.com',
    inquiryType: 'Sell / List',
    message: 'I have 18 perches of residential land in Nawala with old house, looking to sell through SS Property. Please contact me for valuation.',
    status: 'New',
    notes: 'Requested site evaluation for property listing in Nawala.',
    createdAt: '2026-10-01 08:30'
  }
];

export const FOUNDERS: Founder[] = [
  {
    name: 'Mr. H.D. Samitha Senavirathna',
    role: 'Chairman',
    title: 'Chairman & Principal Partner',
    description: 'Visionary leadership directing strategic investments, high-value land acquisitions, and institutional real estate developments across Sri Lanka since 1998.'
  },
  {
    name: 'Mrs. D.P. Priyantha Pathirana',
    role: 'Directress',
    title: 'Directress & Head of Governance',
    description: 'Overseeing legal diligence, corporate compliance, property title verifications, and financial governance ensuring complete client peace of mind.'
  },
  {
    name: 'Mr. H.D. Basuru Prasanjith Senavirathna',
    role: 'CEO',
    title: 'Chief Executive Officer',
    description: 'Spearheading modern operations, premium portfolio expansions, international investor relations, and technology-driven asset transactions.'
  }
];

export const COMPANY_CONTACTS = {
  phoneNumbers: ['070-2048359', '074-0504717', '071-6041322'],
  websites: ['www.ssproperty.com', 'www.ssproperty.lk'],
  email: 'sspropertyofficialsl@gmail.com',
  youtubeVideoId: 'nMQ_fjrNaWQ',
  youtubeVideoUrl: 'https://youtu.be/nMQ_fjrNaWQ?si=VAT3YGl2OV3ZBCDm',
  socialLinks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtu.be/nMQ_fjrNaWQ?si=VAT3YGl2OV3ZBCDm',
    tiktok: 'https://tiktok.com'
  },
  holdings: ['SS Holdings', 'Pathirana Holdings', 'BPS Holdings'],
  estYear: 1998
};
