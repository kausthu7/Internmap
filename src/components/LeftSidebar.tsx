import React, { useState } from 'react';
import { FilterState } from '../types';
import { ChevronDown, ArrowRight, Briefcase, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LeftSidebarProps {
  totalCount: number;
  hiringCount: number;
  newThisMonth: number;
  filters: FilterState;
  onFilterChange: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  onResetFilters: () => void;
  activeTile: 'positron' | 'dark_matter' | 'voyager';
  onTileChange: (tile: 'positron' | 'dark_matter' | 'voyager') => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  totalCount,
  hiringCount,
  newThisMonth,
  filters,
  onFilterChange,
  onResetFilters,
  activeTile,
  onTileChange,
}) => {
  const { t } = useLanguage();
  const [showTileMenu, setShowTileMenu] = useState(false);
  const [showJobMenu, setShowJobMenu] = useState(false);

  return (
    <aside className="fixed top-24 left-4 bottom-4 w-[280px] z-50 flex flex-col pointer-events-none hidden lg:flex">
      
      {/* Stats Block */}
      <div className="mb-6 pointer-events-auto">
        <div className="bg-white/75 backdrop-blur-lg backdrop-saturate-150 border border-white/60 shadow-lg shadow-black/5 ring-1 ring-inset ring-white/80 p-4 rounded-3xl flex items-end justify-between">
          <div>
            <div className="text-[10px] font-bold text-slate-600 mb-0.5 uppercase tracking-wide">{t('sidebar.totalStartups')}</div>
            <div className="text-2xl font-black text-slate-900">{totalCount.toLocaleString()}</div>
          </div>
          <div className="text-[9px] font-bold text-emerald-600 bg-emerald-50/80 border border-emerald-100 backdrop-blur-sm px-2 py-1 rounded-full mb-1">
            {t('sidebar.newThisMonth').replace('{count}', newThisMonth.toString())}
          </div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="mb-6 pointer-events-auto flex gap-2">
        {/* Job Type Selector */}
        <div className="relative flex-1">
          <button
            onClick={() => setShowJobMenu(!showJobMenu)}
            className="w-full h-11 bg-white/75 hover:bg-white/90 backdrop-blur-lg backdrop-saturate-150 border border-white/60 shadow-lg shadow-black/5 rounded-2xl flex items-center justify-center gap-1.5 text-[10px] font-bold text-slate-700 transition-all cursor-pointer ring-1 ring-inset ring-white/80"
          >
            <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
            <span className="truncate">
              {filters.selectedJobType 
                ? (filters.selectedJobType === 'Full-time' 
                  ? t('sidebar.fullTime') 
                  : (filters.selectedJobType === 'Internship' 
                    ? t('sidebar.internship') 
                    : t('sidebar.partTime'))) 
                : t('sidebar.allJobs')}
            </span>
            <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
          </button>
          
          {showJobMenu && (
            <div className="absolute top-13 left-0 w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/80 p-1 z-[550] flex flex-col gap-0.5">
              {[
                { key: '', name: t('sidebar.allJobs') },
                { key: 'Internship', name: t('sidebar.internship') },
                { key: 'Full-time', name: t('sidebar.fullTime') },
                { key: 'Part-time', name: t('sidebar.partTime') }
              ].map((jobOpt) => (
                <button
                  key={jobOpt.key}
                  onClick={() => {
                    onFilterChange('selectedJobType', jobOpt.key);
                    setShowJobMenu(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 text-[10px] rounded-xl font-bold transition-all flex items-center justify-between cursor-pointer ${
                    filters.selectedJobType === jobOpt.key
                      ? 'bg-indigo-50 text-indigo-600 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{jobOpt.name}</span>
                  {filters.selectedJobType === jobOpt.key && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Switch Map Tiles */}
        <div className="relative flex-1">
          <button
            onClick={() => setShowTileMenu(!showTileMenu)}
            className="w-full h-11 bg-white/75 hover:bg-white/90 backdrop-blur-lg backdrop-saturate-150 border border-white/60 shadow-lg shadow-black/5 rounded-2xl flex items-center justify-center gap-1.5 text-[10px] font-bold text-slate-700 transition-all cursor-pointer ring-1 ring-inset ring-white/80"
          >
            <Layers className="w-3.5 h-3.5 text-slate-700" />
            <span>Map Theme</span>
          </button>
          
          {showTileMenu && (
            <div className="absolute top-13 left-0 w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/80 p-1 z-[550] flex flex-col gap-0.5">
              {[
                { key: 'voyager', name: 'Voyager' },
                { key: 'positron', name: 'Clean' },
                { key: 'dark_matter', name: 'Dark Mode' }
              ].map((tile) => (
                <button
                  key={tile.key}
                  onClick={() => {
                    onTileChange(tile.key as any);
                    setShowTileMenu(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 text-[10px] rounded-xl font-bold transition-all flex items-center justify-between cursor-pointer ${
                    activeTile === tile.key
                      ? 'bg-indigo-50 text-indigo-600 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{tile.name}</span>
                  {activeTile === tile.key && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-auto"></div>

      {/* Newsletter */}
      <div className="pointer-events-auto bg-white/75 backdrop-blur-lg backdrop-saturate-150 border border-white/60 shadow-lg shadow-black/5 ring-1 ring-inset ring-white/80 rounded-3xl p-5 mb-4">
        <h3 className="font-bold mb-1 text-xs text-slate-900">{t('sidebar.joinCommunity')}</h3>
        <p className="text-[10px] text-slate-600 mb-3 leading-tight">
          {t('sidebar.joinDesc')}
        </p>
        <div className="flex gap-1.5">
          <input
            type="email"
            placeholder={t('sidebar.emailPlaceholder')}
            className="flex-1 px-3 py-2 rounded-xl bg-white/70 border border-white/60 text-slate-900 placeholder:text-slate-400 text-[10px] outline-none focus:bg-white focus:border-indigo-300 transition w-full shadow-sm"
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-xl transition-colors flex items-center justify-center shrink-0 cursor-pointer shadow-sm">
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>

    </aside>
  );
};
