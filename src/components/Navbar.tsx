import React from 'react';
import {
  Search,
  Map as MapIcon,
  Grid3X3,
  Columns2,
  Plus,
  Bookmark,
  BarChart3,
  X
} from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: 'map' | 'grid' | 'split';
  onViewModeChange: (mode: 'map' | 'grid' | 'split') => void;
  onOpenSubmitModal: () => void;
  onOpenStatsModal: () => void;
  totalCount: number;
  filteredCount: number;
  bookmarkedIds: string[];
  showOnlyBookmarks: boolean;
  onToggleBookmarksOnly: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  onOpenSubmitModal,
  onOpenStatsModal,
  totalCount,
  filteredCount,
  bookmarkedIds,
  showOnlyBookmarks,
  onToggleBookmarksOnly,
}) => {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand Logo & Geometric Identity */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-xs">
            <div className="w-4 h-4 bg-white rounded-xs rotate-45"></div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg sm:text-xl tracking-tight text-slate-900">
                PARIS STARTUP MAP
              </h1>
            </div>
            <p className="text-[10px] font-medium text-slate-500 hidden md:block">
              French Tech Directory &middot; {totalCount} Startups
            </p>
          </div>
        </div>

        {/* Search Input */}
        <div className="flex-1 max-w-xl mx-2 relative">
          <div className="relative">
            <input
              id="startup-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search startups in Paris..."
              className="w-full bg-slate-100 border-none rounded-full py-2 pl-10 pr-9 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all"
            />
            <div className="absolute left-3.5 top-2.5 text-slate-400 pointer-events-none">
              <Search className="w-4 h-4" />
            </div>
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Saved Bookmarks Filter */}
          <button
            id="favorites-filter-btn"
            onClick={onToggleBookmarksOnly}
            title="Saved Favorites"
            className={`relative p-2 rounded-lg border text-xs font-medium transition-all ${
              showOnlyBookmarks
                ? 'bg-amber-50 text-amber-900 border-amber-300 ring-1 ring-amber-400'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${showOnlyBookmarks ? 'fill-amber-500 text-amber-500' : ''}`} />
            {bookmarkedIds.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 bg-amber-500 text-white rounded-full text-[10px] font-bold">
                {bookmarkedIds.length}
              </span>
            )}
          </button>

          {/* Ecosystem Analytics Button */}
          <button
            id="ecosystem-stats-btn"
            onClick={onOpenStatsModal}
            title="Ecosystem Statistics"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 text-xs font-semibold transition-all shadow-2xs"
          >
            <BarChart3 className="w-3.5 h-3.5 text-slate-500" />
            <span>Stats</span>
          </button>

          {/* Submit Startup Button */}
          <button
            id="submit-startup-header-btn"
            onClick={onOpenSubmitModal}
            className="bg-indigo-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 hover:bg-indigo-700 active:scale-[0.98] transition-colors shadow-2xs"
          >
            <Plus className="w-4 h-4" strokeWidth={2.5} />
            <span className="hidden xs:inline">Submit Startup</span>
            <span className="xs:hidden">Submit</span>
          </button>
        </div>
      </div>
    </header>
  );
};
