import React, { useState } from 'react';
import { MapPin, Bed, Bath, Maximize2, Phone, Calendar, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PropertyItem } from '../types';
import { formatPrice } from '../utils/formatters';

interface ListingCardProps {
  property: PropertyItem;
  currency: 'LKR' | 'USD';
  onSelect: (prop: PropertyItem) => void;
  onInquire: (prop: PropertyItem) => void;
}

export const ListingCard: React.FC<ListingCardProps> = ({
  property,
  currency,
  onSelect,
  onInquire
}) => {
  const [imageError, setImageError] = useState(false);

  // Category specific subtitle metadata
  const getCategoryMeta = () => {
    switch (property.category) {
      case 'houses':
        return (
          <div className="flex items-center gap-2 text-xs text-slate-400">
            {property.bedrooms && <span>{property.bedrooms} Beds</span>}
            {property.bedrooms && property.bathrooms && <span aria-hidden="true">·</span>}
            {property.bathrooms && <span>{property.bathrooms} Baths</span>}
            {property.landPerches && <span aria-hidden="true">·</span>}
            {property.landPerches && <span>{property.landPerches} Perches</span>}
            {property.areaSqFt && <span aria-hidden="true">·</span>}
            {property.areaSqFt && <span>{property.areaSqFt.toLocaleString()} sq.ft</span>}
          </div>
        );
      case 'apartments':
        return (
          <div className="flex items-center gap-2 text-xs text-slate-400">
            {property.bedrooms && <span>{property.bedrooms} Beds</span>}
            {property.bedrooms && property.bathrooms && <span aria-hidden="true">·</span>}
            {property.bathrooms && <span>{property.bathrooms} Baths</span>}
            {property.areaSqFt && <span aria-hidden="true">·</span>}
            {property.areaSqFt && <span>{property.areaSqFt.toLocaleString()} sq.ft</span>}
          </div>
        );
      case 'lands':
        return (
          <div className="flex items-center gap-2 text-xs text-slate-400">
            {property.landPerches && <span>{property.landPerches} Perches Extent</span>}
            <span aria-hidden="true">·</span>
            <span>Clear Deed Title</span>
          </div>
        );
      case 'commercial':
        return (
          <div className="flex items-center gap-2 text-xs text-slate-400">
            {property.areaSqFt && <span>{property.areaSqFt.toLocaleString()} sq.ft</span>}
            {property.landPerches && <span aria-hidden="true">·</span>}
            {property.landPerches && <span>{property.landPerches} Perches</span>}
            <span aria-hidden="true">·</span>
            <span>Commercial Zoning</span>
          </div>
        );
      case 'gemstones':
        return (
          <div className="flex items-center gap-2 text-xs text-slate-400">
            {property.gemCarat && <span>{property.gemCarat} Carats</span>}
            <span aria-hidden="true">·</span>
            <span>{property.gemOrigin || 'Ceylon Mining'}</span>
            <span aria-hidden="true">·</span>
            <span>Certified Natural</span>
          </div>
        );
      case 'vehicles':
        return (
          <div className="flex items-center gap-2 text-xs text-slate-400">
            {property.vehicleYear && <span>{property.vehicleYear} Model</span>}
            <span aria-hidden="true">·</span>
            <span>Agent Maintained</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200">
      {/* Visual media banner */}
      <div 
        onClick={() => onSelect(property)} 
        className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-slate-950"
      >
        {!imageError ? (
          <img
            src={property.image}
            alt={property.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-center">
            <span className="font-serif-luxury text-sm font-semibold text-amber-400">{property.title}</span>
            <span className="mt-1 text-xs text-slate-500">{property.location}</span>
          </div>
        )}

        {/* Minimal gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Clean text markers overlay */}
        <div className="absolute top-3 left-3 text-xs font-semibold tracking-wider uppercase text-amber-300 drop-shadow-md">
          {property.listingType}
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
          <span className="flex items-center gap-1 font-medium truncate max-w-[70%]">
            <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
            <span className="truncate">{property.location}</span>
          </span>
          {property.status === 'Available' ? (
            <span className="text-emerald-400 font-mono text-[11px]">Available</span>
          ) : (
            <span className="text-amber-400 font-mono text-[11px]">{property.status}</span>
          )}
        </div>
      </div>

      {/* Body content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Unboxed Metadata Line */}
        <div className="mb-2">
          {getCategoryMeta()}
        </div>

        {/* Title */}
        <h3 
          onClick={() => onSelect(property)}
          className="font-serif-luxury text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer line-clamp-2 leading-snug"
        >
          {property.title}
        </h3>

        {/* Short description */}
        <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-2">
          {property.description}
        </p>

        {/* Price & Actions row */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Price</span>
            <span className="font-mono text-base font-bold text-amber-400 tabular-nums">
              {formatPrice(property.priceLkr, property.priceUsd, currency)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onInquire(property)}
              className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-300 hover:bg-amber-500/20 transition-colors whitespace-nowrap cursor-pointer"
            >
              Inquire
            </button>
            <button
              onClick={() => onSelect(property)}
              className="rounded-lg bg-slate-800 p-2 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
              title="View full property details"
            >
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
