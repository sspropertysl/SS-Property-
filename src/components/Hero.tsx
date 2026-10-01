import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, MapPin, Building, Sparkles } from 'lucide-react';
import { PropertyCategory } from '../types';
import { SSLogo } from './SSLogo';
import heroVillaImg from '../assets/images/hero_ceylon_luxury_villa_1790842457306.jpg';

interface HeroProps {
  onSelectCategory: (cat: PropertyCategory) => void;
  onExploreClick: () => void;
  onOpenInquiryModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectCategory,
  onExploreClick,
  onOpenInquiryModal
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-8 pb-16 lg:pt-12 lg:pb-24">
      {/* Background radial gradient glow with Ceylon teal and warm sand gold */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0a6875]/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[350px] bg-[#deb68e]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Heritage & Partnership Trust Marker */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-5 mb-10 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="font-semibold text-[#deb68e] font-mono">EST. 1998</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>28+ Years of Trust in Ceylon Real Estate</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <span className="text-slate-500">Corporate Affiliates:</span>
            <span className="text-slate-300 font-medium">SS Holdings</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300 font-medium">Pathirana Holdings</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300 font-medium">BPS Holdings</span>
          </div>
        </div>

        {/* Main Grid: Headline + Hero Visual */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Proposition & Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-[1.18]">
                SS Property – Your Trusted Partner in Property Investment
              </h1>
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#deb68e]">
                Ceylon Premier Residential, Commercial & Tangible Assets
              </p>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-slate-300">
              SS Property is your trusted realtor and real estate partner in Ceylon. Whether you&apos;re looking to rent out or sell your asset, we make the process smooth, fast, and rewarding. With expert market insights and a wide network, we help you get the best value for your property.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0a6875] border border-[#0d7d8c] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0c7c8c] shadow-lg shadow-[#0a6875]/25 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore Available Listings</span>
                <ArrowRight className="h-4 w-4 text-[#deb68e]" />
              </button>

              <button
                onClick={onOpenInquiryModal}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm font-medium text-slate-200 hover:border-slate-600 hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Consult Our Realtors</span>
              </button>
            </div>

            {/* Quick Contact Numbers Bar */}
            <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <PhoneCall className="h-3.5 w-3.5 text-[#deb68e]" />
                  Direct Hotline Access
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">Realtors Available Now</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm font-mono text-slate-200">
                <a href="tel:0702048359" className="hover:text-[#deb68e] transition-colors font-semibold">
                  070-2048359
                </a>
                <span className="text-slate-600 font-normal">|</span>
                <a href="tel:0740504717" className="hover:text-[#deb68e] transition-colors font-semibold">
                  074-0504717
                </a>
                <span className="text-slate-600 font-normal">|</span>
                <a href="tel:0716041322" className="hover:text-[#deb68e] transition-colors font-semibold">
                  071-6041322
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Impact Visual Asset */}
          <div className="lg:col-span-6 relative">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-800 shadow-2xl bg-slate-900">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src={heroVillaImg}
                  alt="Modern Tropical Luxury Villa in Ceylon"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized container if image load interrupted
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

              {/* Overlay card details */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white space-y-2">
                <div className="flex items-center gap-2 text-xs text-amber-300 font-medium">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Featured Ceylon Prime Estate · Thalawathugoda</span>
                </div>
                <h3 className="font-serif-luxury text-lg sm:text-xl font-bold">
                  Contemporary Tropical Luxury Residence
                </h3>
                <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                  <span>5 En-suite Bedrooms · Infinity Pool · 24 Perches</span>
                  <span className="font-mono text-amber-400 font-semibold text-sm">LKR 285 Mn</span>
                </div>
              </div>
            </div>

            {/* Quick Category Jump Bar */}
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[
                { label: 'Houses', id: 'houses' as PropertyCategory },
                { label: 'Apartments', id: 'apartments' as PropertyCategory },
                { label: 'Lands', id: 'lands' as PropertyCategory },
                { label: 'Commercial', id: 'commercial' as PropertyCategory },
                { label: 'Gemstones', id: 'gemstones' as PropertyCategory },
                { label: 'Vehicles', id: 'vehicles' as PropertyCategory },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelectCategory(item.id)}
                  className="rounded-lg border border-slate-800/80 bg-slate-900/60 p-2 text-center text-xs font-medium text-slate-300 hover:border-amber-500/50 hover:bg-slate-800 hover:text-white transition-all cursor-pointer truncate"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
