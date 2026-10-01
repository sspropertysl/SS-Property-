import React from 'react';
import { Award, Shield, CheckCircle2, Users, Building, Landmark } from 'lucide-react';
import { FOUNDERS, COMPANY_CONTACTS } from '../data/mockData';
import { SSLogo } from './SSLogo';

export const AboutFounders: React.FC = () => {
  return (
    <section id="about" className="relative bg-slate-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* About Section Header & Exact Editorial Prose */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0d7d8c]/40 bg-[#0a6875]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#deb68e]">
              <Award className="h-3.5 w-3.5" />
              <span>Established 1998 · Ceylon Heritage</span>
            </div>
            
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              About Us: SS Property – Your Trusted Partner in Property Investment
            </h2>

            {/* Official Logo Brand Card */}
            <div className="rounded-2xl border border-[#0d7d8c]/30 bg-[#0a6875]/20 p-6 flex flex-col sm:flex-row items-center gap-5">
              <div className="shrink-0">
                <SSLogo variant="mark" size="lg" />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <span className="font-sans font-bold text-lg text-white block">
                  SS <span className="text-[#deb68e]">Property</span>
                </span>
                <span className="text-xs font-medium text-[#deb68e] block">
                  Your Trusted Partner in Property Investment
                </span>
                <p className="text-[11px] text-slate-300">
                  Official registered emblem of SS Property Ceylon
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Corporate Holdings Alliance
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Partner of <strong className="text-[#deb68e]">SS Holdings</strong>, <strong className="text-[#deb68e]">Pathirana Holdings</strong> & <strong className="text-[#deb68e]">BPS Holdings</strong>
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
                <span>EST. 1998</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="text-slate-200 font-medium">
              SS Property is a professional realtor and real estate company dedicated to helping you buy, sell, and invest in property with ease and confidence.
            </p>
            <p>
              As experienced realtors, we understand the market and work closely with our clients to find the right property solutions—whether it&apos;s a home, commercial space, or investment opportunity. We focus on clear communication, honest advice, and reliable service.
            </p>
            <p>
              With SS Property, you&apos;re not just working with a real estate company—you&apos;re partnering with trusted experts who care about your goals.
            </p>
            <p className="font-serif-luxury text-base sm:text-lg text-amber-400 font-semibold italic pt-2">
              &ldquo;Let SS Property be your guide in smart property decisions.&rdquo;
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4">
                <span className="font-serif-luxury text-sm font-bold text-white block">Market Insight</span>
                <span className="text-xs text-slate-400 mt-1 block">In-depth land valuation and legal clearance across Sri Lanka.</span>
              </div>
              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4">
                <span className="font-serif-luxury text-sm font-bold text-white block">Fast & Rewarding</span>
                <span className="text-xs text-slate-400 mt-1 block">Connecting verified buyers and institutional investors swiftly.</span>
              </div>
              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4">
                <span className="font-serif-luxury text-sm font-bold text-white block">Asset Diversity</span>
                <span className="text-xs text-slate-400 mt-1 block">Houses, land plots, commercial, certified gemstones, and vehicles.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div id="founders" className="space-y-8 pt-8 border-t border-slate-800/80">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Users className="h-4 w-4" />
              <span>Leadership & Executive Board</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              Founders & Executive Leadership
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              Backed by over two decades of corporate stewardship in Ceylon property, commercial ventures, and asset management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOUNDERS.map((founder, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-amber-500/40 hover:bg-slate-900/90 transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Executive Monogram Badge */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-amber-400 group-hover:border-amber-500/50 transition-colors">
                    <span className="font-serif-luxury text-xl font-bold">
                      {founder.role === 'Chairman' ? 'CH' : founder.role === 'Directress' ? 'DIR' : 'CEO'}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block">
                      {founder.role}
                    </span>
                    <h4 className="font-serif-luxury text-lg font-bold text-white mt-1">
                      {founder.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      {founder.title}
                    </p>
                  </div>

                  {founder.description && (
                    <p className="text-xs leading-relaxed text-slate-300">
                      {founder.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>SS Property Board</span>
                  <span className="text-amber-500/80">Est. 1998</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
