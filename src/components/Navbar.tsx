import React, { useState } from 'react';
import { Menu, X, LayoutDashboard, PlusCircle, PhoneCall, Building2 } from 'lucide-react';
import { SSLogo } from './SSLogo';

interface NavbarProps {
  currentView: 'website' | 'dashboard';
  onNavigate: (view: 'website' | 'dashboard') => void;
  currency: 'LKR' | 'USD';
  onToggleCurrency: () => void;
  onOpenListPropertyModal: () => void;
  inquiryCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  currency,
  onToggleCurrency,
  onOpenListPropertyModal,
  inquiryCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (anchorId: string) => {
    if (currentView === 'dashboard') {
      onNavigate('website');
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(anchorId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text wordmark with official interlocking SS logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigate('website')} 
            className="group flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
          >
            <SSLogo variant="mark" size="md" />
            <div>
              <span className="font-sans text-xl font-bold tracking-tight text-white group-hover:text-[#deb68e] transition-colors">
                SS <span className="text-[#deb68e]">Property</span>
              </span>
              <p className="text-[10px] uppercase tracking-wider text-slate-400">
                Ceylon Real Estate
              </p>
            </div>
          </button>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => handleNavClick('listings')}
            className="hover:text-amber-400 transition-colors whitespace-nowrap cursor-pointer"
          >
            Listings
          </button>
          <button
            onClick={() => handleNavClick('categories')}
            className="hover:text-amber-400 transition-colors whitespace-nowrap cursor-pointer"
          >
            Asset Categories
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-amber-400 transition-colors whitespace-nowrap cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('video')}
            className="hover:text-amber-400 transition-colors whitespace-nowrap cursor-pointer"
          >
            Corporate Video
          </button>
          <button
            onClick={() => handleNavClick('founders')}
            className="hover:text-amber-400 transition-colors whitespace-nowrap cursor-pointer"
          >
            Founders
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-amber-400 transition-colors whitespace-nowrap cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Currency Switcher */}
          <button
            onClick={onToggleCurrency}
            className="flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-900/80 px-2.5 py-1.5 text-xs font-semibold text-slate-300 hover:border-amber-500/50 hover:text-white transition-colors"
            title="Switch currency display between Sri Lankan Rupees (LKR) and US Dollars (USD)"
          >
            <span className="text-[10px] text-amber-400">CURRENCY</span>
            <span className="text-white font-mono">{currency}</span>
          </button>

          {/* List Property Action */}
          <button
            onClick={onOpenListPropertyModal}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-2 text-xs font-medium text-amber-300 hover:bg-amber-500/20 hover:border-amber-500/60 transition-colors whitespace-nowrap cursor-pointer"
          >
            <PlusCircle className="h-3.5 w-3.5" />
            <span>List Asset</span>
          </button>

          {/* User Dashboard / Portal Toggle */}
          <button
            onClick={() => onNavigate(currentView === 'website' ? 'dashboard' : 'website')}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-medium transition-all cursor-pointer whitespace-nowrap shadow-sm ${
              currentView === 'dashboard'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-amber-500/20'
                : 'bg-slate-800 text-slate-100 hover:bg-slate-700 hover:text-white border border-slate-700'
            }`}
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            <span>{currentView === 'dashboard' ? 'Back to Website' : 'Agent Dashboard'}</span>
            {inquiryCount > 0 && currentView !== 'dashboard' && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-slate-950">
                {inquiryCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-5 shadow-2xl">
          <div className="flex flex-col space-y-3 pb-3 text-sm">
            <button
              onClick={() => handleNavClick('listings')}
              className="text-left py-2 font-medium text-slate-200 hover:text-amber-400"
            >
              Available Listings
            </button>
            <button
              onClick={() => handleNavClick('categories')}
              className="text-left py-2 font-medium text-slate-200 hover:text-amber-400"
            >
              Asset Categories (Houses, Lands, Gemstones, Vehicles)
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 font-medium text-slate-200 hover:text-amber-400"
            >
              About SS Property
            </button>
            <button
              onClick={() => handleNavClick('video')}
              className="text-left py-2 font-medium text-slate-200 hover:text-amber-400"
            >
              Watch Video
            </button>
            <button
              onClick={() => handleNavClick('founders')}
              className="text-left py-2 font-medium text-slate-200 hover:text-amber-400"
            >
              Founders & Board
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 font-medium text-slate-200 hover:text-amber-400"
            >
              Contact Us & Realtors
            </button>
          </div>
          <div className="border-t border-slate-800 pt-4 flex flex-col gap-2.5">
            <button
              onClick={() => {
                onOpenListPropertyModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 py-2.5 text-xs font-semibold text-amber-300"
            >
              <PlusCircle className="h-4 w-4" />
              List Your Property / Asset
            </button>
            <a
              href="tel:0702048359"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-slate-800 py-2.5 text-xs font-medium text-slate-200"
            >
              <PhoneCall className="h-3.5 w-3.5 text-amber-400" />
              Call Realtor: 070-2048359
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
