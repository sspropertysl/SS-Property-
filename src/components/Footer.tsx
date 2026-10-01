import React from 'react';
import { 
  Phone, Mail, ArrowUpRight 
} from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/mockData';
import { SSLogo } from './SSLogo';

// Custom SVG Icons for social media requested
const FacebookIcon = () => (
  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TiktokIcon = () => (
  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.68c0 2.47-1.18 4.88-3.15 6.22-2.02 1.38-4.71 1.73-7.06.91-2.34-.82-4.18-2.84-4.81-5.23-.62-2.39.06-5.01 1.77-6.84 1.7-1.81 4.29-2.58 6.72-1.99v4.18c-.99-.34-2.11-.27-3.03.22-.92.49-1.57 1.4-1.74 2.43-.17 1.03.18 2.1.92 2.85.74.75 1.83 1.05 2.86.8 1.03-.25 1.87-1.07 2.12-2.1.13-.53.15-1.08.15-1.62V.02h.16z" />
  </svg>
);

interface FooterProps {
  onOpenInquiryModal: () => void;
  onOpenListPropertyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenInquiryModal,
  onOpenListPropertyModal
}) => {
  return (
    <footer id="contact" className="relative border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand & Corporate Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SSLogo variant="mark" size="md" />
              <div>
                <span className="font-sans text-xl font-bold tracking-tight text-white">
                  SS <span className="text-[#deb68e]">Property</span>
                </span>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Ceylon Real Estate & Assets
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold text-[#deb68e]">
              SS Property – Your Trusted Partner in Property Investment
            </p>

            <p className="text-xs leading-relaxed text-slate-400">
              SS Property is your trusted realtor and real estate partner in Ceylon. Whether you&apos;re looking to rent out or sell your asset, we make the process smooth, fast, and rewarding.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-slate-300">
                Partner of SS Holdings, Pathirana Holdings & BPS Holdings
              </div>
              <div className="text-[11px] text-amber-400/90 font-mono">
                EST. 1998 · Sri Lanka
              </div>
            </div>
          </div>

          {/* Contact Us: Phone numbers & Email (Col 6-9) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              <Phone className="h-4 w-4 text-amber-400" />
              <span>Contact Us</span>
            </h4>

            <div className="space-y-2.5 text-xs font-mono">
              <div>
                <span className="text-[10px] uppercase text-slate-500 block">Primary Hotline</span>
                <a 
                  href="tel:0702048359" 
                  className="text-white hover:text-amber-400 transition-colors font-semibold text-sm"
                >
                  070-2048359
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase text-slate-500 block">Senior Realtor</span>
                <a 
                  href="tel:0740504717" 
                  className="text-white hover:text-amber-400 transition-colors font-semibold text-sm"
                >
                  074-0504717
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase text-slate-500 block">Senior Realtor</span>
                <a 
                  href="tel:0716041322" 
                  className="text-white hover:text-amber-400 transition-colors font-semibold text-sm"
                >
                  071-6041322
                </a>
              </div>
              <div className="pt-1.5">
                <span className="text-[10px] uppercase text-slate-500 block flex items-center gap-1.5 mb-1">
                  <Mail className="h-3.5 w-3.5 text-amber-400" />
                  <span>Official Email</span>
                </span>
                <a
                  href="mailto:sspropertyofficialsl@gmail.com"
                  className="font-mono text-xs text-amber-300 hover:underline break-all"
                >
                  sspropertyofficialsl@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onOpenInquiryModal}
                className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-medium text-amber-300 hover:bg-amber-500/20 transition-colors cursor-pointer"
              >
                Request Property Callback
              </button>
            </div>
          </div>

          {/* Follow Us On (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Follow Us On
            </h4>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={COMPANY_CONTACTS.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:border-amber-500/50 hover:bg-slate-800 hover:text-white transition-all"
                title="Follow SS Property on Facebook"
              >
                <FacebookIcon />
              </a>

              <a
                href={COMPANY_CONTACTS.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:border-amber-500/50 hover:bg-slate-800 hover:text-white transition-all"
                title="Follow SS Property on Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href={COMPANY_CONTACTS.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:border-amber-500/50 hover:bg-slate-800 hover:text-white transition-all"
                title="Watch SS Property on YouTube"
              >
                <YoutubeIcon />
              </a>

              <a
                href={COMPANY_CONTACTS.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:border-amber-500/50 hover:bg-slate-800 hover:text-white transition-all"
                title="Follow SS Property on TikTok"
              >
                <TiktokIcon />
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 leading-relaxed">
              Connect with our real estate reels, video tours, and market analytics.
            </div>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SS Property. All rights reserved. Registered Real Estate & Asset Broker in Ceylon.</p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <a href="mailto:sspropertyofficialsl@gmail.com" className="hover:text-amber-400">
              sspropertyofficialsl@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
