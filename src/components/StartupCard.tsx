import React from 'react';
import {
  MapPin,
  TrendingUp,
  Users,
  Bookmark,
  ExternalLink,
  ChevronRight,
  Briefcase
} from 'lucide-react';
import { Startup } from '../types';
import { getLogoFilename } from '../logoHelper';
import { useLanguage } from '../context/LanguageContext';

interface StartupCardProps {
  startup: Startup;
  isBookmarked: boolean;
  onToggleBookmark: (startupId: string) => void;
  onSelect: (startup: Startup) => void;
  onLocateOnMap?: (startup: Startup) => void;
}

export const StartupCard: React.FC<StartupCardProps> = ({
  startup,
  isBookmarked,
  onToggleBookmark,
  onSelect,
  onLocateOnMap,
}) => {
  const { t } = useLanguage();
  const isUnicorn = startup.type === 'Unicorn';
  const initial = startup.name.slice(0, 2).toUpperCase();
  const brandBg = startup.brandColor || (isUnicorn ? '#8b5cf6' : '#2E6F40');
  const logoUrl = getLogoFilename(startup);

  return (
    <div
      id={`startup-card-${startup.id}`}
      className="group rounded-2xl bg-white/60 hover:bg-white/90 border border-white/50 hover:border-white/90 p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          {/* Logo & Basic Info */}
          <div className="flex items-center gap-3">
            <div
              className="w-20 h-12 rounded-lg flex items-center justify-center font-bold text-sm text-white shadow-2xs shrink-0 border border-slate-200/80 overflow-hidden bg-white"
            >
              {logoUrl ? (
                <>
                  <img 
                    src={logoUrl} 
                    alt={startup.name} 
                    className="w-full h-full object-contain p-1" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                         (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }} 
                  />
                  <div style={{ display: 'none', backgroundColor: brandBg }} className="w-full h-full items-center justify-center">
                    {initial}
                  </div>
                </>
              ) : (
                <div style={{ backgroundColor: brandBg }} className="w-full h-full flex items-center justify-center">
                  {initial}
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3
                  onClick={() => onSelect(startup)}
                  className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  {startup.name}
                </h3>
                {isUnicorn && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-700 uppercase tracking-wider">
                    {t('card.unicorn')}
                  </span>
                )}
                {startup.isCommunitySubmitted && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-600 uppercase tracking-wider">
                    {t('card.community')}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 text-xs text-slate-500 font-medium mt-0.5">
                <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="truncate max-w-[200px]">{startup.area}</span>
              </div>
            </div>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(startup.id);
            }}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Startup'}
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              isBookmarked
                ? 'bg-amber-50 text-amber-500 border-amber-300'
                : 'bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-600 border-slate-200'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
          </button>
        </div>

        {/* Tagline */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
          {startup.tagline}
        </p>

        {/* Sector & Tags Chips */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700">
            {startup.sector}
          </span>
          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100">
            {startup.stage}
          </span>
          {startup.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-50 text-slate-500 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics Row & Footer Actions */}
      <div>
        <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-50 rounded-lg mb-3 border border-slate-200 text-xs">
          <div>
            <span className="text-[10px] uppercase font-semibold text-slate-400 flex items-center gap-1">
              <TrendingUp className="w-2.5 h-2.5 text-indigo-600" />
              {t('card.funding')}
            </span>
            <span className="font-bold text-slate-900 truncate block mt-0.5">
              {startup.fundingDisplay}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-semibold text-slate-400 flex items-center gap-1">
              <Users className="w-2.5 h-2.5 text-slate-500" />
              {t('card.team')}
            </span>
            <span className="font-bold text-slate-900 truncate block mt-0.5">
              {startup.headcount}
            </span>
          </div>
        </div>

        {/* Hiring Bar */}
        {startup.hiringNow && (
          <div className="flex items-center justify-between mb-3 px-2.5 py-1.5 rounded-lg bg-green-50 border border-green-200 text-xs">
            <span className="flex items-center gap-1.5 font-bold text-green-800 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {startup.activeJobsCount} {t('card.openPositions')}
            </span>
            <a
              href={startup.careersUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[11px] font-semibold text-green-700 hover:text-green-900 underline"
            >
              {t('card.apply')} &rarr;
            </a>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
          <button
            onClick={() => onSelect(startup)}
            className="flex-1 py-1.5 px-3 bg-slate-900 hover:bg-black text-white rounded text-xs font-semibold transition-all shadow-2xs flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>{t('card.profile')}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {onLocateOnMap && (
            <button
              onClick={() => onLocateOnMap(startup)}
              title="Locate on Map"
              className="p-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded text-xs font-semibold transition-colors flex items-center justify-center cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-indigo-600" />
            </button>
          )}

          <a
            href={startup.websiteUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="p-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded text-xs font-semibold transition-colors flex items-center justify-center"
            title="Visit Website"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

