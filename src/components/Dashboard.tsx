import React, { useState } from 'react';
import { 
  Users, Building2, Plus, Phone, MessageSquare, CheckCircle, 
  Trash2, Search, Filter, ArrowUpRight, ShieldCheck, Clock, FileText, Check, AlertCircle 
} from 'lucide-react';
import { ClientInquiry, PropertyItem, PropertyCategory, InquiryStatus } from '../types';
import { formatPrice } from '../utils/formatters';
import { SSLogo } from './SSLogo';

interface DashboardProps {
  inquiries: ClientInquiry[];
  properties: PropertyItem[];
  currency: 'LKR' | 'USD';
  onUpdateInquiryStatus: (id: string, status: InquiryStatus) => void;
  onUpdateInquiryNotes: (id: string, notes: string) => void;
  onDeleteInquiry: (id: string) => void;
  onTogglePropertyStatus: (id: string, status: PropertyItem['status']) => void;
  onDeleteProperty: (id: string) => void;
  onOpenAddPropertyModal: () => void;
  onViewWebsite: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  inquiries,
  properties,
  currency,
  onUpdateInquiryStatus,
  onUpdateInquiryNotes,
  onDeleteInquiry,
  onTogglePropertyStatus,
  onDeleteProperty,
  onOpenAddPropertyModal,
  onViewWebsite
}) => {
  const [activeTab, setActiveTab] = useState<'inquiries' | 'properties' | 'overview'>('inquiries');
  const [inquiryFilter, setInquiryFilter] = useState<'all' | InquiryStatus>('all');
  const [inquirySearch, setInquirySearch] = useState('');
  const [propertyFilter, setPropertyFilter] = useState<'all' | PropertyCategory>('all');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [noteText, setNoteText] = useState('');

  // Calculations
  const newInquiriesCount = inquiries.filter((i) => i.status === 'New').length;
  const totalPortfolioLkr = properties.reduce((acc, p) => acc + p.priceLkr, 0);
  const totalPortfolioUsd = properties.reduce((acc, p) => acc + p.priceUsd, 0);

  // Filtered Inquiries
  const filteredInquiries = inquiries.filter((item) => {
    const matchesStatus = inquiryFilter === 'all' || item.status === inquiryFilter;
    const matchesSearch = 
      item.clientName.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      item.phone.includes(inquirySearch) ||
      item.email.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      (item.propertyTitle && item.propertyTitle.toLowerCase().includes(inquirySearch.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  // Filtered Properties
  const filteredProperties = properties.filter((prop) => {
    return propertyFilter === 'all' || prop.category === propertyFilter;
  });

  const handleStartEditNote = (inq: ClientInquiry) => {
    setEditingNoteId(inq.id);
    setNoteText(inq.notes || '');
  };

  const handleSaveNote = (id: string) => {
    onUpdateInquiryNotes(id, noteText);
    setEditingNoteId(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 py-8 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Dashboard Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="flex items-center gap-4">
            <SSLogo variant="mark" size="lg" />
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#deb68e]">
                <ShieldCheck className="h-4 w-4" />
                <span>SS Property Internal Real Estate Console</span>
              </div>
              <h1 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
                Client Inquiries & Property Management
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                Manage incoming Ceylon property leads, inspections, client communications, and listing inventory.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAddPropertyModal}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-xs font-semibold text-slate-950 hover:bg-amber-400 transition-colors shadow-md cursor-pointer whitespace-nowrap"
            >
              <Plus className="h-4 w-4" />
              <span>Add New Listing</span>
            </button>
            <button
              onClick={onViewWebsite}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Portal</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Executive Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Client Inquiries</span>
              <Users className="h-4 w-4 text-amber-400" />
            </div>
            <div className="font-mono text-2xl font-bold text-white tabular-nums">
              {inquiries.length}
            </div>
            <div className="text-[11px] text-amber-400 font-medium">
              {newInquiriesCount} requiring initial response
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Active Listings</span>
              <Building2 className="h-4 w-4 text-amber-400" />
            </div>
            <div className="font-mono text-2xl font-bold text-white tabular-nums">
              {properties.length}
            </div>
            <div className="text-[11px] text-slate-400">
              Houses, Lands, Commercial & Assets
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Managed Portfolio Value</span>
              <span className="text-[10px] font-mono text-amber-400 font-semibold">{currency}</span>
            </div>
            <div className="font-mono text-xl sm:text-2xl font-bold text-amber-400 tabular-nums">
              {formatPrice(totalPortfolioLkr, totalPortfolioUsd, currency)}
            </div>
            <div className="text-[11px] text-slate-400">
              Combined asset evaluation
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Realtor Hotlines</span>
              <Phone className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="font-mono text-xs font-semibold text-slate-200">
              070-2048359 | 074-0504717
            </div>
            <div className="text-[11px] text-slate-400">
              sspropertyofficialsl@gmail.com
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-800">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              activeTab === 'inquiries'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Users className="h-4 w-4" />
            <span>Client Inquiries ({inquiries.length})</span>
            {newInquiriesCount > 0 && (
              <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] text-amber-300 font-mono">
                {newInquiriesCount} New
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('properties')}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              activeTab === 'properties'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Building2 className="h-4 w-4" />
            <span>Property Inventory ({properties.length})</span>
          </button>
        </div>

        {/* TAB 1: CLIENT INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="relative w-full sm:max-w-xs">
                <input
                  type="text"
                  value={inquirySearch}
                  onChange={(e) => setInquirySearch(e.target.value)}
                  placeholder="Search inquiries by client, phone, property..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              {/* Status Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
                {(['all', 'New', 'Contacted', 'Inspection Scheduled', 'Closed'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setInquiryFilter(st)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      inquiryFilter === st
                        ? 'bg-amber-500 text-slate-950 font-semibold'
                        : 'bg-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    {st === 'all' ? 'All Inquiries' : st}
                  </button>
                ))}
              </div>
            </div>

            {/* Inquiries Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-slate-800 bg-slate-950/70 text-slate-400 font-medium uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="px-4 py-3.5">Client & Contact</th>
                    <th className="px-4 py-3.5">Property / Interest</th>
                    <th className="px-4 py-3.5">Message</th>
                    <th className="px-4 py-3.5">Status</th>
                    <th className="px-4 py-3.5">Agent Notes</th>
                    <th className="px-4 py-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {filteredInquiries.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                        No client inquiries match the current filter.
                      </td>
                    </tr>
                  ) : (
                    filteredInquiries.map((inq) => {
                      const cleanPhone = inq.phone.replace(/[^0-9]/g, '');
                      const whatsappLink = `https://wa.me/94${cleanPhone.startsWith('0') ? cleanPhone.slice(1) : cleanPhone}`;

                      return (
                        <tr key={inq.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="px-4 py-4 align-top">
                            <div className="font-semibold text-white">{inq.clientName}</div>
                            <div className="font-mono text-slate-300 mt-0.5">{inq.phone}</div>
                            <div className="text-[11px] text-slate-500">{inq.email}</div>
                            <div className="text-[10px] text-slate-500 mt-1">{inq.createdAt}</div>
                          </td>

                          <td className="px-4 py-4 align-top max-w-[200px]">
                            <span className="text-[10px] font-mono uppercase text-amber-400 block">
                              {inq.inquiryType}
                            </span>
                            <div className="font-medium text-slate-200 line-clamp-2">
                              {inq.propertyTitle || 'General Realtor Consultation'}
                            </div>
                          </td>

                          <td className="px-4 py-4 align-top max-w-[260px]">
                            <p className="text-slate-300 leading-relaxed line-clamp-3">
                              {inq.message}
                            </p>
                          </td>

                          <td className="px-4 py-4 align-top">
                            <select
                              value={inq.status}
                              onChange={(e) => onUpdateInquiryStatus(inq.id, e.target.value as InquiryStatus)}
                              className={`rounded-lg border px-2.5 py-1 text-xs font-semibold focus:outline-none ${
                                inq.status === 'New'
                                  ? 'border-amber-500/50 bg-amber-500/10 text-amber-300'
                                  : inq.status === 'Contacted'
                                  ? 'border-sky-500/50 bg-sky-500/10 text-sky-300'
                                  : inq.status === 'Inspection Scheduled'
                                  ? 'border-purple-500/50 bg-purple-500/10 text-purple-300'
                                  : 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Inspection Scheduled">Inspection Scheduled</option>
                              <option value="Closed">Closed</option>
                            </select>
                          </td>

                          <td className="px-4 py-4 align-top max-w-[220px]">
                            {editingNoteId === inq.id ? (
                              <div className="space-y-1.5">
                                <textarea
                                  rows={2}
                                  value={noteText}
                                  onChange={(e) => setNoteText(e.target.value)}
                                  className="w-full rounded border border-slate-700 bg-slate-950 p-1.5 text-xs text-slate-200 focus:border-amber-500 focus:outline-none"
                                />
                                <div className="flex items-center gap-1.5">
                                  <button
                                    onClick={() => handleSaveNote(inq.id)}
                                    className="rounded bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-slate-950"
                                  >
                                    Save
                                  </button>
                                  <button
                                    onClick={() => setEditingNoteId(null)}
                                    className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div 
                                onClick={() => handleStartEditNote(inq)} 
                                className="cursor-pointer group text-slate-300 hover:text-amber-300"
                                title="Click to edit notes"
                              >
                                {inq.notes ? (
                                  <span className="line-clamp-2">{inq.notes}</span>
                                ) : (
                                  <span className="italic text-slate-500">+ Add internal note...</span>
                                )}
                              </div>
                            )}
                          </td>

                          <td className="px-4 py-4 align-top text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <a
                                href={`tel:${inq.phone.replace(/[^0-9]/g, '')}`}
                                className="rounded p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
                                title="Call client"
                              >
                                <Phone className="h-3.5 w-3.5" />
                              </a>
                              <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded p-1.5 text-emerald-400 hover:bg-slate-800 hover:text-emerald-300"
                                title="Chat on WhatsApp"
                              >
                                <MessageSquare className="h-3.5 w-3.5" />
                              </a>
                              <button
                                onClick={() => onDeleteInquiry(inq.id)}
                                className="rounded p-1.5 text-slate-500 hover:bg-red-500/10 hover:text-red-400"
                                title="Remove inquiry"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: PROPERTY INVENTORY MANAGEMENT */}
        {activeTab === 'properties' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              {/* Category Segmented Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
                {(['all', 'houses', 'apartments', 'lands', 'commercial', 'gemstones', 'vehicles'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setPropertyFilter(cat)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap capitalize ${
                      propertyFilter === cat
                        ? 'bg-amber-500 text-slate-950 font-semibold'
                        : 'bg-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    {cat === 'all' ? 'All Inventory' : cat}
                  </button>
                ))}
              </div>

              <button
                onClick={onOpenAddPropertyModal}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-amber-400 hover:bg-slate-700 transition-colors"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>New Property Entry</span>
              </button>
            </div>

            {/* Properties Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-slate-800 bg-slate-950/70 text-slate-400 font-medium uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="px-4 py-3.5">Property / Asset</th>
                    <th className="px-4 py-3.5">Category</th>
                    <th className="px-4 py-3.5">Type</th>
                    <th className="px-4 py-3.5">Valuation (LKR / USD)</th>
                    <th className="px-4 py-3.5">Status</th>
                    <th className="px-4 py-3.5">Realtor Contact</th>
                    <th className="px-4 py-3.5 text-right">Manage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {filteredProperties.map((prop) => (
                    <tr key={prop.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-3">
                          <img
                            src={prop.image}
                            alt=""
                            className="h-10 w-10 rounded-lg object-cover bg-slate-950 border border-slate-800 shrink-0"
                          />
                          <div>
                            <span className="font-semibold text-white line-clamp-1">{prop.title}</span>
                            <span className="text-[11px] text-slate-400">{prop.location}</span>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3.5 font-mono capitalize text-slate-300">
                        {prop.category}
                      </td>

                      <td className="px-4 py-3.5">
                        <span className="font-mono text-amber-400">{prop.listingType}</span>
                      </td>

                      <td className="px-4 py-3.5 font-mono text-slate-200">
                        <div>{formatPrice(prop.priceLkr, prop.priceUsd, 'LKR')}</div>
                        <div className="text-[10px] text-slate-500">${prop.priceUsd.toLocaleString()} USD</div>
                      </td>

                      <td className="px-4 py-3.5">
                        <select
                          value={prop.status}
                          onChange={(e) => onTogglePropertyStatus(prop.id, e.target.value as any)}
                          className={`rounded-lg border px-2 py-1 text-xs font-semibold focus:outline-none ${
                            prop.status === 'Available'
                              ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
                              : prop.status === 'Under Offer'
                              ? 'border-amber-500/50 bg-amber-500/10 text-amber-300'
                              : 'border-slate-700 bg-slate-800 text-slate-400'
                          }`}
                        >
                          <option value="Available">Available</option>
                          <option value="Under Offer">Under Offer</option>
                          <option value="Sold">Sold</option>
                        </select>
                      </td>

                      <td className="px-4 py-3.5 font-mono text-slate-300">
                        {prop.realtorContact}
                      </td>

                      <td className="px-4 py-3.5 text-right">
                        <button
                          onClick={() => onDeleteProperty(prop.id)}
                          className="rounded p-1.5 text-slate-500 hover:bg-red-500/10 hover:text-red-400 transition-colors"
                          title="Delete listing"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
