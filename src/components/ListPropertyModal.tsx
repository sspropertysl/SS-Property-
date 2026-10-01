import React, { useState } from 'react';
import { X, Plus, Upload, CheckCircle2, Shield } from 'lucide-react';
import { PropertyItem, PropertyCategory, ListingType } from '../types';
import heroVillaImg from '../assets/images/hero_ceylon_luxury_villa_1790842457306.jpg';
import penthouseImg from '../assets/images/colombo_waterfront_penthouse_1790842470694.jpg';
import commercialImg from '../assets/images/ceylon_commercial_tower_1790842484344.jpg';
import sapphireImg from '../assets/images/ceylon_royal_sapphire_1790842499208.jpg';

interface ListPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProperty: (property: PropertyItem) => void;
}

export const ListPropertyModal: React.FC<ListPropertyModalProps> = ({
  isOpen,
  onClose,
  onAddProperty
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<PropertyCategory>('houses');
  const [listingType, setListingType] = useState<ListingType>('Sale');
  const [priceLkr, setPriceLkr] = useState<string>('45000000');
  const [location, setLocation] = useState('');
  const [district, setDistrict] = useState('Colombo');
  const [bedrooms, setBedrooms] = useState('4');
  const [bathrooms, setBathrooms] = useState('3');
  const [landPerches, setLandPerches] = useState('15');
  const [areaSqFt, setAreaSqFt] = useState('2800');
  const [description, setDescription] = useState('');
  const [contactNumber, setContactNumber] = useState('070-2048359');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const defaultImages: Record<PropertyCategory, string> = {
    houses: heroVillaImg,
    apartments: penthouseImg,
    commercial: commercialImg,
    gemstones: sapphireImg,
    lands: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    vehicles: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !location.trim()) return;

    const numericLkr = parseFloat(priceLkr) || 10000000;
    const approximateUsd = Math.round(numericLkr / 300); // 1 USD approx 300 LKR

    const newProperty: PropertyItem = {
      id: `prop-${Date.now()}`,
      title: title.trim(),
      category,
      listingType,
      priceLkr: numericLkr,
      priceUsd: approximateUsd,
      location: location.trim(),
      district,
      image: defaultImages[category] || defaultImages.houses,
      description: description.trim() || 'A verified premium property listing represented exclusively by SS Property Ceylon.',
      features: ['Clear Deed Verified', 'Exclusive Representation', 'Prime Accessibility'],
      bedrooms: bedrooms ? parseInt(bedrooms) : undefined,
      bathrooms: bathrooms ? parseInt(bathrooms) : undefined,
      landPerches: landPerches ? parseFloat(landPerches) : undefined,
      areaSqFt: areaSqFt ? parseInt(areaSqFt) : undefined,
      featured: false,
      status: 'Available',
      createdAt: new Date().toISOString().split('T')[0],
      realtorContact: contactNumber
    };

    onAddProperty(newProperty);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div>
            <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-white">
              List Your Property / Asset with SS Property
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Submit your house, apartment, land, commercial space, gemstone, or vehicle
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center space-y-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="font-serif-luxury text-lg font-bold text-white">Listing Added Successfully</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Your property has been submitted and is immediately available in your active inventory and client dashboard.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">
                Property / Asset Title <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. 4 Bedroom Architect House in Battaramulla"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Category <span className="text-amber-400">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as PropertyCategory)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 focus:border-amber-500 focus:outline-none"
                >
                  <option value="houses">Houses & Luxury Villas</option>
                  <option value="apartments">Apartments</option>
                  <option value="lands">Lands & Plots</option>
                  <option value="commercial">Commercial & Warehouses</option>
                  <option value="gemstones">Gem Stones</option>
                  <option value="vehicles">Vehicles</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Listing Type
                </label>
                <select
                  value={listingType}
                  onChange={(e) => setListingType(e.target.value as ListingType)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 focus:border-amber-500 focus:outline-none"
                >
                  <option value="Sale">For Sale</option>
                  <option value="Rent">For Rent / Lease</option>
                  <option value="Investment">Investment Asset</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Price in LKR (Sri Lankan Rupees) <span className="text-amber-400">*</span>
                </label>
                <input
                  type="number"
                  required
                  value={priceLkr}
                  onChange={(e) => setPriceLkr(e.target.value)}
                  placeholder="e.g. 55000000"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 font-mono focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  District
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 focus:border-amber-500 focus:outline-none"
                >
                  <option value="Colombo">Colombo</option>
                  <option value="Gampaha">Gampaha</option>
                  <option value="Kalutara">Kalutara</option>
                  <option value="Kandy">Kandy</option>
                  <option value="Galle">Galle</option>
                  <option value="Matara">Matara</option>
                  <option value="Ratnapura">Ratnapura</option>
                  <option value="Other">Other Region in Sri Lanka</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">
                Specific Location / Street <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Nawala Road, Rajagiriya, Colombo"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
              />
            </div>

            {/* Dimensional Specifications for property */}
            {(category === 'houses' || category === 'apartments' || category === 'commercial') && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Bedrooms</label>
                  <input
                    type="number"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-2 py-1.5 text-xs text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Bathrooms</label>
                  <input
                    type="number"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-2 py-1.5 text-xs text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Perches</label>
                  <input
                    type="number"
                    step="0.1"
                    value={landPerches}
                    onChange={(e) => setLandPerches(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-2 py-1.5 text-xs text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Sq.Ft Area</label>
                  <input
                    type="number"
                    value={areaSqFt}
                    onChange={(e) => setAreaSqFt(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-2 py-1.5 text-xs text-white font-mono"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">
                Property Description & Key Details
              </label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe deeds, architectural style, road access, and specific facilities..."
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">
                Assigned Contact Hotline
              </label>
              <select
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs sm:text-sm text-slate-100 focus:border-amber-500 focus:outline-none font-mono"
              >
                <option value="070-2048359">070-2048359 (Primary)</option>
                <option value="074-0504717">074-0504717</option>
                <option value="071-6041322">071-6041322</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-amber-500 py-3 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
              >
                <Plus className="h-4 w-4" />
                <span>Publish Listing to SS Property</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
