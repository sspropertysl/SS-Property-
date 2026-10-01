import React from 'react';
import { Home, Building2, Map, Briefcase, Gem, Car, Layers } from 'lucide-react';
import { PropertyCategory, ListingType } from '../types';

interface CategoryNavProps {
  selectedCategory: 'all' | PropertyCategory;
  onSelectCategory: (cat: 'all' | PropertyCategory) => void;
  selectedListingType: 'all' | ListingType;
  onSelectListingType: (type: 'all' | ListingType) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  categoryCounts: Record<string, number>;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedListingType,
  onSelectListingType,
  searchQuery,
  onSearchChange,
  categoryCounts
}) => {
  const categories: { id: 'all' | PropertyCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Portfolio', icon: <Layers className="h-4 w-4" /> },
    { id: 'houses', label: 'Houses & Villas', icon: <Home className="h-4 w-4" /> },
    { id: 'apartments', label: 'Apartments', icon: <Building2 className="h-4 w-4" /> },
    { id: 'lands', label: 'Lands & Plots', icon: <Map className="h-4 w-4" /> },
    { id: 'commercial', label: 'Commercial & Warehouses', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'gemstones', label: 'Gem Stones', icon: <Gem className="h-4 w-4" /> },
    { id: 'vehicles', label: 'Vehicles', icon: <Car className="h-4 w-4" /> },
  ];

  return (
    <div id="categories" className="space-y-4">
      {/* Category Tabs (Segmented Button Controls) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = cat.id === 'all' 
            ? Object.values(categoryCounts).reduce((a, b) => a + b, 0)
            : (categoryCounts[cat.id] || 0);

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/15'
                  : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
              <span className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                isActive ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by title, location (Colombo 07, Bentota, Kandy)..."
            className="w-full rounded-lg border border-slate-700/80 bg-slate-950/80 px-3.5 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Listing Type Filter (Sale / Rent / Investment) */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto justify-end">
          <span className="text-xs text-slate-400 font-medium mr-1 hidden sm:inline">Transaction:</span>
          {(['all', 'Sale', 'Rent', 'Investment'] as const).map((type) => (
            <button
              key={type}
              onClick={() => onSelectListingType(type)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                selectedListingType === type
                  ? 'bg-slate-100 text-slate-950 font-semibold'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white'
              }`}
            >
              {type === 'all' ? 'All Types' : type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
