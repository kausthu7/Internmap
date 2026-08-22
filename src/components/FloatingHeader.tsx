import React from 'react';
import {
  Search,
  ChevronDown,
  RotateCcw,
  BarChart3,
  X,
  Globe,
  Sparkles,
  Plus
} from 'lucide-react';
import { FilterState } from '../types';
import { PARIS_AREAS, STARTUP_SECTORS, STARTUP_STAGES, STARTUP_TYPES } from '../data/startups';
import { useLanguage } from '../context/LanguageContext';

interface FloatingHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: 'map' | 'grid' | 'split';
  onViewModeChange: (mode: 'map' | 'grid' | 'split') => void;
  onOpenStatsModal: () => void;
  totalCount: number;
  filteredCount: number;
  bookmarkedIds: string[];
  showOnlyBookmarks: boolean;
  onToggleBookmarksOnly: () => void;
  filters: FilterState;
  onFilterChange: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  onResetFilters: () => void;
  hiringCount: number;
  onBoostClick: () => void;
  onSubmitClick: () => void;
  isMobile: boolean;
}

export const FloatingHeader: React.FC<FloatingHeaderProps> = ({
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  onOpenStatsModal,
  totalCount,
  filteredCount,
  bookmarkedIds,
  showOnlyBookmarks,
  onToggleBookmarksOnly,
  filters,
  onFilterChange,
  onResetFilters,
  hiringCount,
  onBoostClick,
  onSubmitClick,
  isMobile,
}) => {
  const { t, language, setLanguage } = useLanguage();

  const isAnyFilterActive =
    filters.selectedSector !== '' ||
    filters.selectedArea !== '' ||
    filters.selectedStage !== '' ||
    filters.selectedType !== '' ||
    filters.selectedJobType !== '' ||
    filters.hiringOnly ||
    filters.searchQuery !== '';

  // --- DESKTOP VIEW LAYOUT (isMobile === false) ---
  if (!isMobile) {
    return (
      <header className="fixed top-4 left-4 right-4 z-50 h-14 rounded-2xl bg-white/75 backdrop-blur-md backdrop-saturate-150 border border-white/65 shadow-lg shadow-black/5 flex items-center justify-between px-4 gap-2 overflow-visible pointer-events-auto whitespace-nowrap">
        
        {/* Left Side Group (Logo, Search, Filters) */}
        <div className="flex items-center gap-3.5 shrink-0">
          {/* Brand Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center justify-center">
              <svg
                width="24"
                height="28"
                viewBox="0 0 32 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="splitGradientDesktop" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="50%" stopColor="#2E6F40" />
                    <stop offset="50%" stopColor="#68BA7F" />
                  </linearGradient>
                </defs>
                <ellipse cx="16" cy="32" rx="7" ry="1.8" stroke="url(#splitGradientDesktop)" strokeWidth="1.8" />
                <path d="M 16 3 C 10 3 6 7 6 13 C 6 18.5 11 23.2 16 28.5 C 21 23.2 26 18.5 26 13 C 26 7 22 3 16 3 Z" stroke="url(#splitGradientDesktop)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 16 6 L 15 12 H 17 Z M 14.5 12 H 17.5 V 13.5 H 14.5 Z M 14 13.5 L 13.5 17.5 H 18.5 L 18 13.5 Z M 13 17.5 H 19 V 19 H 13 Z M 12.5 19 L 11.5 24 H 13.5 A 2.5 2.5 0 0 1 18.5 24 H 20.5 L 19.5 19 Z" fill="url(#splitGradientDesktop)" />
                <circle cx="16" cy="24" r="1.2" fill="url(#splitGradientDesktop)" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="font-extrabold text-[13px] tracking-tight leading-none">
                <span className="text-[#2E6F40]">Intern</span>
                <span className="text-[#68BA7F]">map</span>
              </h1>
              <span className="text-[7px] uppercase tracking-wider text-[#2E6F40] font-bold leading-none mt-0.5 hidden 2xl:block">
                {t('header.subtitle')}
              </span>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative w-40 2xl:w-48">
            <input
              id="startup-search-input-desktop"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t('header.search')}
              className="w-full h-9 pl-7 pr-6 text-xs bg-white/60 hover:bg-white/90 focus:bg-white border border-slate-200 rounded-xl outline-none transition-all"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            )}
          </div>

          {/* Desktop Filters (Inline) */}
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="relative inline-block">
              <select
                value={filters.selectedType}
                onChange={(e) => onFilterChange('selectedType', e.target.value)}
                className={`h-9 px-2.5 pr-6 text-xs bg-white/60 border rounded-xl outline-none appearance-none cursor-pointer transition-colors max-w-[90px] 2xl:max-w-[120px] truncate ${
                  filters.selectedType ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50' : 'border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <option value="">{t('header.allTypes')}</option>
                {STARTUP_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative inline-block">
              <select
                value={filters.selectedArea}
                onChange={(e) => onFilterChange('selectedArea', e.target.value)}
                className={`h-9 px-2.5 pr-6 text-xs bg-white/60 border rounded-xl outline-none appearance-none cursor-pointer transition-colors max-w-[90px] 2xl:max-w-[120px] truncate ${
                  filters.selectedArea ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50' : 'border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <option value="">{t('header.allAreas')}</option>
                {PARIS_AREAS.filter(a => a !== 'All areas').map((area) => <option key={area} value={area}>{area}</option>)}
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative inline-block">
              <select
                value={filters.selectedStage}
                onChange={(e) => onFilterChange('selectedStage', e.target.value)}
                className={`h-9 px-2.5 pr-6 text-xs bg-white/60 border rounded-xl outline-none appearance-none cursor-pointer transition-colors max-w-[90px] 2xl:max-w-[120px] truncate ${
                  filters.selectedStage ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50' : 'border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <option value="">{t('header.allStages')}</option>
                {STARTUP_STAGES.map((stage) => <option key={stage} value={stage}>{stage}</option>)}
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative inline-block">
              <select
                value={filters.selectedSector}
                onChange={(e) => onFilterChange('selectedSector', e.target.value)}
                className={`h-9 px-2.5 pr-6 text-xs bg-white/60 border rounded-xl outline-none appearance-none cursor-pointer transition-colors max-w-[90px] 2xl:max-w-[120px] truncate ${
                  filters.selectedSector ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50' : 'border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <option value="">{t('header.allSectors')}</option>
                {STARTUP_SECTORS.map((sector) => <option key={sector} value={sector}>{sector}</option>)}
              </select>
              <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {isAnyFilterActive && (
              <button onClick={onResetFilters} className="p-1 text-slate-400 hover:text-red-500 transition-colors cursor-pointer" title={t('sidebar.clearFilters')}>
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Right Side Group (View mode, Language, Stats, CTAs) */}
        <div className="flex items-center gap-2.5 shrink-0 pr-1">
          {/* View Mode Toggle */}
          <div className="flex bg-slate-100/80 p-0.5 rounded-xl border border-slate-200 shrink-0 text-xs">
            <button
              onClick={() => onViewModeChange('map')}
              className={`px-2.5 py-1 rounded-lg text-[10.5px] font-bold flex items-center transition-all cursor-pointer ${
                viewMode === 'map' ? 'bg-[#2E6F40] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {t('header.map')}
            </button>
            <button
              onClick={() => onViewModeChange('grid')}
              className={`px-2.5 py-1 rounded-lg text-[10.5px] font-bold flex items-center transition-all cursor-pointer ${
                viewMode === 'grid' ? 'bg-[#2E6F40] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {t('header.grid')}
            </button>
          </div>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-1 px-2.5 h-9 bg-white/60 hover:bg-white/90 border border-slate-200 rounded-xl text-[10px] font-black text-slate-600 transition-all cursor-pointer shrink-0"
            title="Toggle Language"
          >
            <Globe className="w-3 h-3" />
            {language.toUpperCase()}
          </button>

          {/* Stats Button */}
          <button
            onClick={onOpenStatsModal}
            className="flex items-center gap-1.5 px-3 h-9 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 text-[11px] font-bold transition-all shrink-0 cursor-pointer"
          >
            <BarChart3 className="w-3 h-3" />
            <span>{t('header.stats')}</span>
          </button>

          {/* Boost CTA */}
          <button
            onClick={onBoostClick}
            className="h-9 px-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold flex items-center gap-1 transition-all shadow-md hover:shadow-lg shrink-0 border border-orange-400/30 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
            <span>Boost Startup</span>
          </button>

          {/* Submit CTA */}
          <button
            onClick={onSubmitClick}
            className="h-9 px-3 rounded-xl bg-[#2E6F40] hover:bg-[#2E6F40]/90 text-white text-xs font-bold flex items-center gap-1 transition-all shadow-md hover:shadow-lg shrink-0 border border-emerald-500/30 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Submit Startup</span>
          </button>
        </div>
      </header>
    );
  }

  // --- MOBILE VIEW LAYOUT (isMobile === true) ---
  return (
    <header className="h-full w-full rounded-2xl bg-white/70 backdrop-blur-md backdrop-saturate-150 border border-white/60 shadow-lg shadow-black/5 ring-1 ring-inset ring-white/80 flex items-center justify-between px-4 gap-3 overflow-x-auto whitespace-nowrap hide-scrollbar">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 pl-1 pr-2 shrink-0">
          <div className="flex items-center justify-center">
            <svg
              width="28"
              height="32"
              viewBox="0 0 32 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="splitGradientMobile" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="50%" stopColor="#2E6F40" />
                  <stop offset="50%" stopColor="#68BA7F" />
                </linearGradient>
              </defs>
              <ellipse cx="16" cy="32" rx="7" ry="1.8" stroke="url(#splitGradientMobile)" strokeWidth="1.8" />
              <path d="M 16 3 C 10 3 6 7 6 13 C 6 18.5 11 23.2 16 28.5 C 21 23.2 26 18.5 26 13 C 26 7 22 3 16 3 Z" stroke="url(#splitGradientMobile)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 16 6 L 15 12 H 17 Z M 14.5 12 H 17.5 V 13.5 H 14.5 Z M 14 13.5 L 13.5 17.5 H 18.5 L 18 13.5 Z M 13 17.5 H 19 V 19 H 13 Z M 12.5 19 L 11.5 24 H 13.5 A 2.5 2.5 0 0 1 18.5 24 H 20.5 L 19.5 19 Z" fill="url(#splitGradientMobile)" />
              <circle cx="16" cy="24" r="1.2" fill="url(#splitGradientMobile)" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="font-extrabold text-[15px] tracking-tight leading-none">
              <span className="text-[#2E6F40]">Intern</span>
              <span className="text-[#68BA7F]">map</span>
            </h1>
            <span className="text-[7.5px] uppercase tracking-wider text-[#2E6F40] font-bold leading-none mt-1">
              {t('header.subtitle')}
            </span>
          </div>
        </div>

        {/* Search Input */}
        <div className="flex-1 max-w-[180px] sm:max-w-[240px] relative shrink-0">
          <input
            id="startup-search-input-mobile"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t('header.search')}
            className="w-full bg-slate-50 border border-slate-200 rounded-full py-1 pl-7 pr-6 text-[11px] text-slate-900 placeholder:text-slate-400 focus:ring-1 focus:ring-indigo-600 focus:outline-none transition-all"
          />
          <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-2.5 h-2.5" />
            </button>
          )}
        </div>

        {/* Inline Filters */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="relative inline-block">
            <select
              value={filters.selectedType}
              onChange={(e) => onFilterChange('selectedType', e.target.value)}
              className={`bg-white border rounded-full px-2.5 py-1 pr-5 text-[11px] font-medium appearance-none cursor-pointer outline-none transition-colors ${
                filters.selectedType ? 'border-indigo-600 text-indigo-600 bg-indigo-50' : 'border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <option value="">{t('header.allTypes')}</option>
              {STARTUP_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
            <ChevronDown className="w-2.5 h-2.5 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative inline-block">
            <select
              value={filters.selectedArea}
              onChange={(e) => onFilterChange('selectedArea', e.target.value)}
              className={`bg-white border rounded-full px-2.5 py-1 pr-5 text-[11px] font-medium appearance-none cursor-pointer outline-none transition-colors ${
                filters.selectedArea ? 'border-indigo-600 text-indigo-600 bg-indigo-50' : 'border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <option value="">{t('header.allAreas')}</option>
              {PARIS_AREAS.filter(a => a !== 'All areas').map((area) => <option key={area} value={area}>{area}</option>)}
            </select>
            <ChevronDown className="w-2.5 h-2.5 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative inline-block hidden lg:block">
            <select
              value={filters.selectedStage}
              onChange={(e) => onFilterChange('selectedStage', e.target.value)}
              className={`bg-white border rounded-full px-2.5 py-1 pr-5 text-[11px] font-medium appearance-none cursor-pointer outline-none transition-colors ${
                filters.selectedStage ? 'border-indigo-600 text-indigo-600 bg-indigo-50' : 'border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <option value="">{t('header.allStages')}</option>
              {STARTUP_STAGES.map((stage) => <option key={stage} value={stage}>{stage}</option>)}
            </select>
            <ChevronDown className="w-2.5 h-2.5 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative inline-block hidden xl:block">
            <select
              value={filters.selectedSector}
              onChange={(e) => onFilterChange('selectedSector', e.target.value)}
              className={`bg-white border rounded-full px-2.5 py-1 pr-5 text-[11px] font-medium appearance-none cursor-pointer outline-none transition-colors ${
                filters.selectedSector ? 'border-indigo-600 text-indigo-600 bg-indigo-50' : 'border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <option value="">{t('header.allSectors')}</option>
              {STARTUP_SECTORS.map((sector) => <option key={sector} value={sector}>{sector}</option>)}
            </select>
            <ChevronDown className="w-2.5 h-2.5 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {isAnyFilterActive && (
            <button onClick={onResetFilters} className="p-1 text-slate-400 hover:text-red-500 transition-colors cursor-pointer" title={t('sidebar.clearFilters')}>
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Separator */}
        <div className="w-[1px] h-4 bg-slate-200 mx-0.5 shrink-0"></div>

        {/* View Mode Toggle */}
        <div className="flex bg-slate-100 p-0.5 rounded-full border border-slate-200 shrink-0">
          <button
            onClick={() => onViewModeChange('map')}
            className={`px-3 py-1 rounded-full text-[11px] font-bold flex items-center transition-all ${
              viewMode === 'map' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {t('header.map')}
          </button>
          <button
            onClick={() => onViewModeChange('grid')}
            className={`px-3 py-1 rounded-full text-[11px] font-bold flex items-center transition-all ${
              viewMode === 'grid' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {t('header.grid')}
          </button>
        </div>

        {/* Actions & Language */}
        <div className="flex items-center gap-2 shrink-0 pr-1">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 transition-all cursor-pointer mr-1"
            title="Toggle Language"
          >
            <Globe className="w-3 h-3" />
            {language.toUpperCase()}
          </button>

          <button
            onClick={onOpenStatsModal}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 text-[11px] font-bold transition-all cursor-pointer"
          >
            <BarChart3 className="w-3 h-3" />
            <span className="hidden md:inline">{t('header.stats')}</span>
          </button>
        </div>
      </header>
  );
};
