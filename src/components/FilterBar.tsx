import React from 'react';
import {
  Sparkles,
  ChevronDown,
  RotateCcw,
  Map as MapIcon,
  Grid3X3,
  Columns2
} from 'lucide-react';
import { FilterState, Sector, StartupStage, StartupType } from '../types';
import { PARIS_AREAS, STARTUP_SECTORS, STARTUP_STAGES, STARTUP_TYPES } from '../data/startups';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  onResetFilters: () => void;
  filteredCount: number;
  totalCount: number;
  hiringCount: number;
  viewMode?: 'map' | 'grid' | 'split';
  onViewModeChange?: (mode: 'map' | 'grid' | 'split') => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  filteredCount,
  totalCount,
  hiringCount,
  viewMode = 'map',
  onViewModeChange,
}) => {
  const isAnyFilterActive =
    filters.selectedSector !== '' ||
    filters.selectedArea !== '' ||
    filters.selectedStage !== '' ||
    filters.selectedType !== '' ||
    filters.selectedJobType !== '' ||
    filters.hiringOnly ||
    filters.searchQuery !== '';

  const activeFiltersCount =
    (filters.selectedSector ? 1 : 0) +
    (filters.selectedArea ? 1 : 0) +
    (filters.selectedStage ? 1 : 0) +
    (filters.selectedType ? 1 : 0) +
    (filters.selectedJobType ? 1 : 0) +
    (filters.hiringOnly ? 1 : 0) +
    (filters.searchQuery ? 1 : 0);

  // Quick Preset Helper
  const setPreset = (preset: 'all' | 'unicorns' | 'ai' | 'fintech' | 'climate' | 'station-f') => {
    onResetFilters();
    if (preset === 'unicorns') {
      onFilterChange('selectedType', 'Unicorn');
    } else if (preset === 'ai') {
      onFilterChange('selectedSector', 'AI & DeepTech');
    } else if (preset === 'fintech') {
      onFilterChange('selectedSector', 'FinTech & InsurTech');
    } else if (preset === 'climate') {
      onFilterChange('selectedSector', 'ClimateTech & Green');
    } else if (preset === 'station-f') {
      onFilterChange('selectedArea', '13th arrondissement (Station F / Freyssinet)');
    }
  };

  return (
    <nav className="bg-white border-b border-slate-200 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Geometric Nav Filter Strip */}
        <div className="min-h-14 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Left: Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto">
            {/* Type Filter */}
            <div className="relative inline-block">
              <select
                id="type-filter-select"
                value={filters.selectedType}
                onChange={(e) => onFilterChange('selectedType', e.target.value)}
                className={`bg-white border rounded px-3 py-1.5 pr-7 text-xs font-medium appearance-none cursor-pointer outline-none transition-colors ${
                  filters.selectedType
                    ? 'border-indigo-600 text-indigo-600 ring-1 ring-indigo-600/30'
                    : 'border-slate-200 text-slate-700 hover:border-slate-300 focus:ring-1 focus:ring-indigo-600'
                }`}
              >
                <option value="">All types</option>
                {STARTUP_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Area Filter */}
            <div className="relative inline-block">
              <select
                id="area-filter-select"
                value={filters.selectedArea}
                onChange={(e) => onFilterChange('selectedArea', e.target.value)}
                className={`bg-white border rounded px-3 py-1.5 pr-7 text-xs font-medium appearance-none cursor-pointer outline-none transition-colors ${
                  filters.selectedArea
                    ? 'border-indigo-600 text-indigo-600 ring-1 ring-indigo-600/30'
                    : 'border-slate-200 text-slate-700 hover:border-slate-300 focus:ring-1 focus:ring-indigo-600'
                }`}
              >
                <option value="">All areas</option>
                {PARIS_AREAS.filter((a) => a !== 'All areas').map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Stage Filter */}
            <div className="relative inline-block">
              <select
                id="stage-filter-select"
                value={filters.selectedStage}
                onChange={(e) => onFilterChange('selectedStage', e.target.value)}
                className={`bg-white border rounded px-3 py-1.5 pr-7 text-xs font-medium appearance-none cursor-pointer outline-none transition-colors ${
                  filters.selectedStage
                    ? 'border-indigo-600 text-indigo-600 ring-1 ring-indigo-600/30'
                    : 'border-slate-200 text-slate-700 hover:border-slate-300 focus:ring-1 focus:ring-indigo-600'
                }`}
              >
                <option value="">All stages</option>
                {STARTUP_STAGES.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Sector Filter */}
            <div className="relative inline-block">
              <select
                id="sector-filter-select"
                value={filters.selectedSector}
                onChange={(e) => onFilterChange('selectedSector', e.target.value)}
                className={`bg-white border rounded px-3 py-1.5 pr-7 text-xs font-medium appearance-none cursor-pointer outline-none transition-colors ${
                  filters.selectedSector
                    ? 'border-indigo-600 text-indigo-600 ring-1 ring-indigo-600/30'
                    : 'border-slate-200 text-slate-700 hover:border-slate-300 focus:ring-1 focus:ring-indigo-600'
                }`}
              >
                <option value="">All sectors</option>
                {STARTUP_SECTORS.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Job Type Filter */}
            <div className="relative inline-block">
              <select
                id="job-type-filter-select"
                value={filters.selectedJobType}
                onChange={(e) => onFilterChange('selectedJobType', e.target.value)}
                className={`bg-white border rounded px-3 py-1.5 pr-7 text-xs font-medium appearance-none cursor-pointer outline-none transition-colors ${
                  filters.selectedJobType
                    ? 'border-indigo-600 text-indigo-600 ring-1 ring-indigo-600/30'
                    : 'border-slate-200 text-slate-700 hover:border-slate-300 focus:ring-1 focus:ring-indigo-600'
                }`}
              >
                <option value="">All job types</option>
                <option value="Full-time">Full-time</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="h-4 w-[1px] bg-slate-300 mx-1 hidden sm:block"></div>

            {/* Hiring Now Toggle */}
            <button
              id="hiring-only-toggle-btn"
              onClick={() => onFilterChange('hiringOnly', !filters.hiringOnly)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                filters.hiringOnly
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-600 shadow-2xs'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${filters.hiringOnly ? 'bg-indigo-600 animate-pulse' : 'bg-slate-400'}`}></div>
              <span>Hiring Now</span>
              <span className="text-[10px] opacity-80">({hiringCount})</span>
            </button>
          </div>

          {/* Right: Results status, Reset & Segmented View Switcher */}
          <div className="flex items-center gap-3">
            {isAnyFilterActive && (
              <button
                id="reset-all-filters-btn"
                onClick={onResetFilters}
                className="flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700 hover:underline cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset ({activeFiltersCount})</span>
              </button>
            )}

            <span className="text-xs text-slate-500 font-medium hidden md:inline">
              <span className="font-bold text-slate-800">{filteredCount}</span> of {totalCount}
            </span>

            {/* Segmented View Mode Toggle */}
            {onViewModeChange && (
              <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button
                  id="view-mode-map-btn"
                  onClick={() => onViewModeChange('map')}
                  title="Map View"
                  className={`px-3 py-1 rounded text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewMode === 'map'
                      ? 'bg-white shadow-xs text-slate-800'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <MapIcon className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Map</span>
                </button>

                <button
                  id="view-mode-split-btn"
                  onClick={() => onViewModeChange('split')}
                  title="Split View"
                  className={`hidden lg:flex px-3 py-1 rounded text-xs font-bold items-center gap-1.5 transition-all cursor-pointer ${
                    viewMode === 'split'
                      ? 'bg-white shadow-xs text-slate-800'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Columns2 className="w-3.5 h-3.5 text-slate-700" />
                  <span>Split</span>
                </button>

                <button
                  id="view-mode-grid-btn"
                  onClick={() => onViewModeChange('grid')}
                  title="Grid View"
                  className={`px-3 py-1 rounded text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-white shadow-xs text-slate-800'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Grid3X3 className="w-3.5 h-3.5 text-slate-700" />
                  <span>Grid</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Quick Presets Sub-bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-2 border-t border-slate-100 text-xs">
          <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider shrink-0 flex items-center gap-1 mr-1">
            <Sparkles className="w-3 h-3 text-indigo-600" />
            Presets:
          </span>

          <button
            onClick={() => setPreset('all')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-all shrink-0 cursor-pointer ${
              !isAnyFilterActive
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All ({totalCount})
          </button>

          <button
            onClick={() => setPreset('unicorns')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1 ${
              filters.selectedType === 'Unicorn'
                ? 'bg-purple-700 text-white'
                : 'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200/60'
            }`}
          >
            <span>🦄 Unicorns</span>
          </button>

          <button
            onClick={() => setPreset('ai')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1 ${
              filters.selectedSector === 'AI & DeepTech'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/60'
            }`}
          >
            <span>🤖 AI & DeepTech</span>
          </button>

          <button
            onClick={() => setPreset('fintech')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1 ${
              filters.selectedSector === 'FinTech & InsurTech'
                ? 'bg-emerald-700 text-white'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200/60'
            }`}
          >
            <span>💳 FinTech</span>
          </button>

          <button
            onClick={() => setPreset('climate')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1 ${
              filters.selectedSector === 'ClimateTech & Green'
                ? 'bg-teal-700 text-white'
                : 'bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200/60'
            }`}
          >
            <span>🌿 Climate</span>
          </button>

          <button
            onClick={() => setPreset('station-f')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1 ${
              filters.selectedArea.includes('Station F')
                ? 'bg-slate-900 text-white'
                : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200/60'
            }`}
          >
            <span>⚡ Station F</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
