import React, { useState } from 'react';
import { X, Send, Phone, Mail, CheckCircle2, MessageSquare } from 'lucide-react';
import { PropertyItem, ClientInquiry } from '../types';
import { COMPANY_CONTACTS } from '../data/mockData';

interface InquiryModalProps {
  property?: PropertyItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmitInquiry: (inquiry: Omit<ClientInquiry, 'id' | 'createdAt'>) => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  property,
  isOpen,
  onClose,
  onSubmitInquiry
}) => {
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState<ClientInquiry['inquiryType']>(
    property?.listingType === 'Rent' ? 'Rent' : 'Buy'
  );
  const [message, setMessage] = useState(
    property ? `I am interested in "${property.title}" in ${property.location}. Please get in touch with inspection and pricing options.` : ''
  );
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !phone.trim()) return;

    onSubmitInquiry({
      clientName: clientName.trim(),
      phone: phone.trim(),
      email: email.trim() || 'Not specified',
      propertyId: property?.id,
      propertyTitle: property?.title,
      inquiryType,
      message: message.trim() || 'General inquiry for SS Property realtors.',
      status: 'New'
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div>
            <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-white">
              {property ? 'Inquire About Property' : 'Connect with SS Property Realtor'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {property ? `Listing: ${property.title}` : 'Direct consultation for buyers, sellers, and investors'}
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
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="font-serif-luxury text-lg font-bold text-white">Inquiry Received</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xs">
              Thank you, {clientName}. An SS Property realtor will contact you directly via phone or WhatsApp shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5">
                Your Full Name <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Mr. Samantha De Silva"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1.5">
                  Phone Number <span className="text-amber-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="07X-XXXXXXX"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5">
                Interest / Transaction Category
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value as any)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 focus:border-amber-500 focus:outline-none"
              >
                <option value="Buy">Buy Property / Asset</option>
                <option value="Rent">Rent / Lease</option>
                <option value="Sell / List">Sell My Asset</option>
                <option value="Valuation">Valuation & Market Advice</option>
                <option value="Gemstone">Ceylon Gemstone Investment</option>
                <option value="General">General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5">
                Message / Inspection Details
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mention preferred inspection times or specific questions..."
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-amber-500 py-3 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Submit Inquiry to SS Property</span>
              </button>
            </div>

            <div className="border-t border-slate-800/80 pt-3 text-center">
              <span className="text-[11px] text-slate-400">
                Or speak immediately: <a href="tel:0702048359" className="text-amber-400 font-mono font-medium hover:underline">070-2048359</a> / <a href="tel:0740504717" className="text-amber-400 font-mono font-medium hover:underline">074-0504717</a>
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
