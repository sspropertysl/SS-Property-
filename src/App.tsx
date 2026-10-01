/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { ListingCard } from './components/ListingCard';
import { ListingModal } from './components/ListingModal';
import { VideoSection } from './components/VideoSection';
import { AboutFounders } from './components/AboutFounders';
import { InquiryModal } from './components/InquiryModal';
import { ListPropertyModal } from './components/ListPropertyModal';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';
import { PropertyItem, ClientInquiry, PropertyCategory, ListingType, InquiryStatus } from './types';
import { INITIAL_PROPERTIES, INITIAL_INQUIRIES } from './data/mockData';
import { MessageSquare, PhoneCall, Sparkles, PlusCircle } from 'lucide-react';

export default function App() {
  // Persistence in localStorage
  const [properties, setProperties] = useState<PropertyItem[]>(() => {
    try {
      const saved = localStorage.getItem('ssproperty_properties');
      return saved ? JSON.parse(saved) : INITIAL_PROPERTIES;
    } catch {
      return INITIAL_PROPERTIES;
    }
  });

  const [inquiries, setInquiries] = useState<ClientInquiry[]>(() => {
    try {
      const saved = localStorage.getItem('ssproperty_inquiries');
      return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
    } catch {
      return INITIAL_INQUIRIES;
    }
  });

  const [currentView, setCurrentView] = useState<'website' | 'dashboard'>('website');
  const [currency, setCurrency] = useState<'LKR' | 'USD'>('LKR');
  const [selectedCategory, setSelectedCategory] = useState<'all' | PropertyCategory>('all');
  const [selectedListingType, setSelectedListingType] = useState<'all' | ListingType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [selectedPropertyForModal, setSelectedPropertyForModal] = useState<PropertyItem | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTargetProperty, setInquiryTargetProperty] = useState<PropertyItem | null>(null);
  const [listPropertyModalOpen, setListPropertyModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ssproperty_properties', JSON.stringify(properties));
    } catch (e) {
      console.error('Failed to save properties to localStorage', e);
    }
  }, [properties]);

  useEffect(() => {
    try {
      localStorage.setItem('ssproperty_inquiries', JSON.stringify(inquiries));
    } catch (e) {
      console.error('Failed to save inquiries to localStorage', e);
    }
  }, [inquiries]);

  // Category counts
  const categoryCounts = properties.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Filter listings
  const filteredListings = properties.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedListingType === 'all' || item.listingType === selectedListingType;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      item.title.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q) ||
      item.district.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      (item.vehicleMake && item.vehicleMake.toLowerCase().includes(q));

    return matchesCategory && matchesType && matchesSearch;
  });

  // Handlers for Dashboard
  const handleUpdateInquiryStatus = (id: string, status: InquiryStatus) => {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status } : inq))
    );
  };

  const handleUpdateInquiryNotes = (id: string, notes: string) => {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, notes } : inq))
    );
  };

  const handleDeleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((inq) => inq.id !== id));
  };

  const handleTogglePropertyStatus = (id: string, status: PropertyItem['status']) => {
    setProperties((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p))
    );
  };

  const handleDeleteProperty = (id: string) => {
    setProperties((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAddProperty = (newProp: PropertyItem) => {
    setProperties((prev) => [newProp, ...prev]);
  };

  const handleCreateInquiry = (inquiryData: Omit<ClientInquiry, 'id' | 'createdAt'>) => {
    const newInq: ClientInquiry = {
      ...inquiryData,
      id: `inq-${Date.now()}`,
      createdAt: new Date().toISOString().replace('T', ' ').slice(0, 16)
    };
    setInquiries((prev) => [newInq, ...prev]);
  };

  const handleOpenInquiryFor = (prop: PropertyItem) => {
    setInquiryTargetProperty(prop);
    setInquiryModalOpen(true);
  };

  const handleGeneralInquiry = () => {
    setInquiryTargetProperty(null);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans-body">
      {/* Universal Top Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={setCurrentView}
        currency={currency}
        onToggleCurrency={() => setCurrency(currency === 'LKR' ? 'USD' : 'LKR')}
        onOpenListPropertyModal={() => setListPropertyModalOpen(true)}
        inquiryCount={inquiries.filter((i) => i.status === 'New').length}
      />

      {/* Main View Switching: Website or Dashboard */}
      {currentView === 'dashboard' ? (
        <Dashboard
          inquiries={inquiries}
          properties={properties}
          currency={currency}
          onUpdateInquiryStatus={handleUpdateInquiryStatus}
          onUpdateInquiryNotes={handleUpdateInquiryNotes}
          onDeleteInquiry={handleDeleteInquiry}
          onTogglePropertyStatus={handleTogglePropertyStatus}
          onDeleteProperty={handleDeleteProperty}
          onOpenAddPropertyModal={() => setListPropertyModalOpen(true)}
          onViewWebsite={() => setCurrentView('website')}
        />
      ) : (
        <main className="flex-1">
          {/* Hero Section */}
          <Hero
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              const el = document.getElementById('listings');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onExploreClick={() => {
              const el = document.getElementById('listings');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenInquiryModal={handleGeneralInquiry}
          />

          {/* Listings & Categories Section */}
          <section id="listings" className="py-16 lg:py-24 bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                    <Sparkles className="h-4 w-4" />
                    <span>Prime Ceylon Portfolio</span>
                  </div>
                  <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mt-1">
                    Available Listings & Exclusive Assets
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1">
                    Carefully curated residential houses, luxury oceanfront apartments, commercial developments, rare Ratnapura gemstones, and luxury vehicles.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setListPropertyModalOpen(true)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition-colors cursor-pointer"
                  >
                    <PlusCircle className="h-4 w-4" />
                    <span>Sell or Rent Your Asset</span>
                  </button>
                </div>
              </div>

              {/* Segmented Category Navigator */}
              <CategoryNav
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                selectedListingType={selectedListingType}
                onSelectListingType={setSelectedListingType}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                categoryCounts={categoryCounts}
              />

              {/* Listings Grid */}
              {filteredListings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                  {filteredListings.map((prop) => (
                    <ListingCard
                      key={prop.id}
                      property={prop}
                      currency={currency}
                      onSelect={setSelectedPropertyForModal}
                      onInquire={handleOpenInquiryFor}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-12 text-center space-y-3">
                  <p className="text-base text-slate-300 font-medium">
                    No listings found matching your current filter criteria.
                  </p>
                  <p className="text-xs text-slate-500">
                    Try switching categories or clearing search keywords.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedListingType('all');
                      setSearchQuery('');
                    }}
                    className="rounded-lg bg-slate-800 px-4 py-2 text-xs font-medium text-amber-400 hover:bg-slate-700 transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* YouTube Video Section with Thumbnail */}
          <VideoSection />

          {/* About Us & Founders Section */}
          <AboutFounders />
        </main>
      )}

      {/* Footer with exhaustive contacts & social links */}
      <Footer
        onOpenInquiryModal={handleGeneralInquiry}
        onOpenListPropertyModal={() => setListPropertyModalOpen(true)}
      />

      {/* Modals */}
      <ListingModal
        property={selectedPropertyForModal}
        onClose={() => setSelectedPropertyForModal(null)}
        onOpenInquiry={(p) => {
          setSelectedPropertyForModal(null);
          handleOpenInquiryFor(p);
        }}
      />

      <InquiryModal
        property={inquiryTargetProperty}
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        onSubmitInquiry={handleCreateInquiry}
      />

      <ListPropertyModal
        isOpen={listPropertyModalOpen}
        onClose={() => setListPropertyModalOpen(false)}
        onAddProperty={handleAddProperty}
      />

      {/* Floating Quick Action Hotline for Instant Ceylon Realtor Access */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/94702048359?text=Hello%20SS%20Property%20Ceylon%2C%20I%20would%20like%20to%20inquire%20about%20your%20property%20listings."
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xl shadow-emerald-950/50 hover:bg-emerald-500 transition-all cursor-pointer"
          title="Chat directly on WhatsApp with SS Property Realtor"
        >
          <MessageSquare className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp Realtor</span>
        </a>
      </div>
    </div>
  );
}
