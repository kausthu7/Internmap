import React from 'react';
import { Startup } from '../types';
import { Bookmark, ChevronDown, ArrowRight } from 'lucide-react';
import { getLogoFilename } from '../logoHelper';
import { useLanguage } from '../context/LanguageContext';

interface RightSidebarProps {
  startups: Startup[];
  bookmarkedIds: string[];
  onToggleBookmark: (startupId: string) => void;
  onSelectStartup: (startup: Startup) => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  startups,
  bookmarkedIds,
  onToggleBookmark,
  onSelectStartup,
}) => {
  const { t } = useLanguage();
  // Let's assume we want to show hiring startups or recently added.
  // For the mockup, we show a list of them.
  const displayStartups = startups.slice(0, 15); // just taking top 15 for sidebar

  return (
    <aside className="fixed top-24 right-4 bottom-4 w-[360px] z-50 rounded-3xl bg-white/75 backdrop-blur-lg backdrop-saturate-150 border border-white/60 shadow-xl shadow-black/5 ring-1 ring-inset ring-white/80 flex flex-col overflow-hidden hidden xl:flex">
      
      {/* Header */}
      <div className="p-4 border-b border-white/40 flex items-center justify-between shrink-0 bg-transparent">
        <h2 className="text-[11px] font-bold text-slate-900">
          <span className="text-indigo-600 mr-1">{startups.length}</span>
          {t('sidebar.startupsHiring')}
        </h2>
        <button className="flex items-center gap-1 text-[9px] font-semibold text-slate-500 hover:text-slate-800 transition-colors">
          {t('sidebar.recentlyAdded')}
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      {/* Startup List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar p-2.5 space-y-2.5 bg-transparent">
        {displayStartups.map((startup) => {
          const logoUrl = getLogoFilename(startup);
          const isBookmarked = bookmarkedIds.includes(startup.id);
          const isUnicorn = startup.type === 'Unicorn';
          const initial = startup.name.slice(0, 2).toUpperCase();
          const brandBg = startup.brandColor || (isUnicorn ? '#8b5cf6' : '#2E6F40');

          return (
            <div 
              key={startup.id} 
              className="rounded-xl bg-white/50 hover:bg-white/90 border border-white/40 hover:border-white/80 p-3 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex gap-3 relative group"
              onClick={() => onSelectStartup(startup)}
            >
              {/* Logo */}
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-[10px] shrink-0 overflow-hidden border border-white/50 shadow-sm">
                {logoUrl ? (
                  <img src={logoUrl} alt={startup.name} className="w-full h-full object-contain p-1" />
                ) : (
                  <div style={{ backgroundColor: brandBg }} className="w-full h-full flex items-center justify-center">
                    {initial}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0 pr-5">
                <h3 className="font-bold text-xs text-slate-900 truncate group-hover:text-indigo-600 transition-colors">
                  {startup.name}
                </h3>
                <div className="text-[9px] text-slate-500 font-medium truncate mt-0.5">
                  {startup.sector} • {startup.stage}
                </div>
                <div className="text-[9px] text-slate-400 truncate mt-0.5">
                  {startup.area}
                </div>
                
                {startup.hiringNow && (
                  <div className="mt-1.5">
                    <span className="inline-block px-1.5 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded text-[9px] font-bold">
                      {startup.activeJobsCount} {t('sidebar.jobs')}
                    </span>
                  </div>
                )}
              </div>

              {/* Bookmark */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(startup.id);
                }}
                className={`absolute top-2.5 right-2.5 p-1 rounded hover:bg-white/70 transition-colors ${isBookmarked ? 'text-amber-500' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-white/40 shrink-0 bg-transparent">
        <button className="w-full py-2 rounded-lg text-[11px] font-bold text-indigo-600 hover:bg-white/50 transition-colors flex items-center justify-center gap-1.5">
          {t('sidebar.viewAll')}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </aside>
  );
};
