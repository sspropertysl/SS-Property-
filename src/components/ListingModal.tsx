import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Maximize2, ShieldCheck, Check, Phone, MessageSquare, ExternalLink, Share2 } from 'lucide-react';
import { PropertyItem } from '../types';
import { formatPriceDetailed } from '../utils/formatters';

interface ListingModalProps {
  property: PropertyItem | null;
  onClose: () => void;
  onOpenInquiry: (prop: PropertyItem) => void;
}

export const ListingModal: React.FC<ListingModalProps> = ({
  property,
  onClose,
  onOpenInquiry
}) => {
  const [copied, setCopied] = useState(false);

  if (!property) return null;

  const { lkrStr, usdStr } = formatPriceDetailed(property.priceLkr, property.priceUsd);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello SS Property, I am inquiring about the listing: "${property.title}" (Ref: ${property.id}) located in ${property.location}. Please provide more details.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 px-6 py-4 bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-amber-400 uppercase tracking-wider">{property.category}</span>
            <span aria-hidden="true">·</span>
            <span>Listing ID: {property.id}</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400 font-medium">{property.status}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              title="Copy share link"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Visual */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
            <img
              src={property.image}
              alt={property.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-3 left-3 rounded-md bg-slate-950/80 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-sm">
              {property.listingType} Asset
            </div>
          </div>

          {/* Title & Location */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
              <MapPin className="h-4 w-4" />
              <span>{property.location}, {property.district} District</span>
            </div>
            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
              {property.title}
            </h2>
          </div>

          {/* Pricing Highlight Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Sri Lankan Rupees (LKR)</span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-amber-400 tabular-nums">
                {lkrStr}
              </span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block">US Dollar Equivalent (USD)</span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-slate-200 tabular-nums">
                {usdStr}
              </span>
            </div>
          </div>

          {/* Specific Spec Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {property.bedrooms !== undefined && (
              <div className="rounded-lg border border-slate-800/80 bg-slate-900/80 p-3">
                <span className="text-[10px] uppercase text-slate-500 block">Bedrooms</span>
                <span className="font-mono text-base font-semibold text-white">{property.bedrooms} Ensuite</span>
              </div>
            )}
            {property.bathrooms !== undefined && (
              <div className="rounded-lg border border-slate-800/80 bg-slate-900/80 p-3">
                <span className="text-[10px] uppercase text-slate-500 block">Bathrooms</span>
                <span className="font-mono text-base font-semibold text-white">{property.bathrooms} Luxury</span>
              </div>
            )}
            {property.landPerches !== undefined && (
              <div className="rounded-lg border border-slate-800/80 bg-slate-900/80 p-3">
                <span className="text-[10px] uppercase text-slate-500 block">Land Extent</span>
                <span className="font-mono text-base font-semibold text-amber-300">{property.landPerches} Perches</span>
              </div>
            )}
            {property.areaSqFt !== undefined && (
              <div className="rounded-lg border border-slate-800/80 bg-slate-900/80 p-3">
                <span className="text-[10px] uppercase text-slate-500 block">Floor Area</span>
                <span className="font-mono text-base font-semibold text-white">{property.areaSqFt.toLocaleString()} sq.ft</span>
              </div>
            )}
            {property.gemCarat !== undefined && (
              <div className="rounded-lg border border-slate-800/80 bg-slate-900/80 p-3">
                <span className="text-[10px] uppercase text-slate-500 block">Carat Weight</span>
                <span className="font-mono text-base font-semibold text-amber-300">{property.gemCarat} Carats</span>
              </div>
            )}
            {property.vehicleYear !== undefined && (
              <div className="rounded-lg border border-slate-800/80 bg-slate-900/80 p-3">
                <span className="text-[10px] uppercase text-slate-500 block">Manufacture Year</span>
                <span className="font-mono text-base font-semibold text-white">{property.vehicleYear}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Overview & Property Insights
            </h4>
            <p className="text-sm leading-relaxed text-slate-300">
              {property.description}
            </p>
          </div>

          {/* Features Checklist */}
          {property.features && property.features.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Key Highlights & Inclusions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Assigned Realtor Contact Box */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Assigned Realtor</span>
                <span className="text-sm font-semibold text-white">SS Property Senior Realtor</span>
              </div>
              <span className="text-xs text-emerald-400 font-mono">Verified Listing</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={`tel:${property.realtorContact.replace(/-/g, '')}`}
                className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-medium text-slate-200 hover:text-white hover:border-slate-600 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-amber-400" />
                <span>Call {property.realtorContact}</span>
              </a>
              <a
                href={`https://wa.me/94702048359?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20 transition-colors"
              >
                <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between border-t border-slate-800/80 px-6 py-4 bg-slate-950/80 shrink-0">
          <div className="text-xs text-slate-400">
            {copied && <span className="text-emerald-400">Link copied to clipboard!</span>}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(property);
              }}
              className="rounded-lg bg-amber-500 px-5 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer"
            >
              Book Inspection / Inquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
