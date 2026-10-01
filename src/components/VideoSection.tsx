import React, { useState } from 'react';
import { Play, ExternalLink, ShieldCheck, Film } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/mockData';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  const videoId = COMPANY_CONTACTS.youtubeVideoId;
  const youtubeUrl = COMPANY_CONTACTS.youtubeVideoUrl;

  return (
    <section id="video" className="relative bg-slate-950 py-16 lg:py-24 border-t border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <Film className="h-4 w-4" />
            <span>Corporate Video Presentation</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            SS Property – Your Trusted Partner in Property Investment
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Experience our vision, market leadership, and prestigious portfolio across Sri Lanka. Watch our official video presentation or connect directly to YouTube.
          </p>
        </div>

        {/* Video Player Box with Persistent Thumbnail */}
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          <div className="relative aspect-video w-full bg-slate-950">
            {!isPlaying ? (
              <div className="relative h-full w-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
                {/* YouTube Thumbnail */}
                <img
                  src={
                    thumbError
                      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                      : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                  }
                  alt="SS Property Official Video Thumbnail"
                  referrerPolicy="no-referrer"
                  onError={() => setThumbError(true)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20" />

                {/* Large Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 text-slate-950 shadow-xl shadow-amber-500/30 transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-8 w-8 fill-slate-950 translate-x-0.5" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-white drop-shadow-md">
                    Click to Play Presentation
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-amber-400 font-semibold">SS PROPERTY CEYLON</span>
                    <span aria-hidden="true" className="text-slate-500">·</span>
                    <span>Official Investment Channel</span>
                  </div>
                  <span className="rounded bg-black/60 px-2 py-0.5 font-mono text-[11px] text-slate-300">
                    HD 1080p
                  </span>
                </div>
              </div>
            ) : (
              /* Inline YouTube Embedded Player */
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title="SS Property Video Presentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            )}
          </div>

          {/* Video Control & External Link Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 bg-slate-950/90 p-4 sm:p-5">
            <div className="text-xs text-slate-400">
              <span className="font-semibold text-slate-200">Partner of SS Holdings, Pathirana Holdings & BPS Holdings</span>
              <p className="mt-0.5 text-slate-500">Connected official video broadcast on YouTube</p>
            </div>

            <div className="flex items-center gap-3">
              {isPlaying && (
                <button
                  onClick={() => setIsPlaying(false)}
                  className="rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Show Thumbnail
                </button>
              )}
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-400 transition-colors shadow-sm"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
