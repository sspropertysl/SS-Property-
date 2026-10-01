export type PropertyCategory = 
  | 'houses' 
  | 'apartments' 
  | 'lands' 
  | 'commercial' 
  | 'gemstones' 
  | 'vehicles';

export type ListingType = 'Sale' | 'Rent' | 'Investment';

export interface PropertyItem {
  id: string;
  title: string;
  category: PropertyCategory;
  listingType: ListingType;
  priceLkr: number; // in LKR
  priceUsd: number; // in USD
  location: string;
  district: string;
  image: string;
  description: string;
  features: string[];
  bedrooms?: number;
  bathrooms?: number;
  areaSqFt?: number;
  landPerches?: number;
  vehicleMake?: string;
  vehicleYear?: number;
  gemCarat?: number;
  gemOrigin?: string;
  featured: boolean;
  status: 'Available' | 'Under Offer' | 'Sold';
  createdAt: string;
  realtorContact: string;
}

export type InquiryStatus = 'New' | 'Contacted' | 'Inspection Scheduled' | 'Closed';

export interface ClientInquiry {
  id: string;
  clientName: string;
  phone: string;
  email: string;
  propertyId?: string;
  propertyTitle?: string;
  inquiryType: 'Buy' | 'Rent' | 'Sell / List' | 'Valuation' | 'Gemstone' | 'General';
  message: string;
  status: InquiryStatus;
  notes?: string;
  createdAt: string;
}

export interface Founder {
  name: string;
  role: string;
  title: string;
  description?: string;
  image?: string;
}
