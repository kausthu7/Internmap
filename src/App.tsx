import React, { useState, useEffect, useMemo } from 'react';
import { PARIS_STARTUPS_DATA } from './data/startups';
import { FilterState, Startup } from './types';
import { FloatingHeader } from './components/FloatingHeader';
import { MapComponent } from './components/MapComponent';
import { StartupCard } from './components/StartupCard';
import { StartupDetailModal } from './components/StartupDetailModal';
import { SubmitStartupModal } from './components/SubmitStartupModal';
import { EcosystemStatsModal } from './components/EcosystemStatsModal';
import { AdminAuth } from './components/AdminAuth';
import { AdminDashboard } from './components/AdminDashboard';
import { LeftSidebar } from './components/LeftSidebar';
import { RightSidebar } from './components/RightSidebar';
import { BottomBar } from './components/BottomBar';
import { AdvertisePage } from './components/AdvertisePage';
import { useLanguage } from './context/LanguageContext';
import {
  MapPin,
  Search,
  Sparkles,
  RotateCcw,
  Briefcase,
  Layers,
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  Bookmark,
  X,
  Plus
} from 'lucide-react';

const LOCAL_STORAGE_CUSTOM_STARTUPS = 'paris_startups_custom_v1';
const LOCAL_STORAGE_BOOKMARKS = 'paris_startups_bookmarks_v1';
const LOCAL_STORAGE_DELETED_STARTUPS = 'paris_startups_deleted_v1';

export default function App() {
  const { t } = useLanguage();
  // 1. Startups list state (Default + LocalStorage user submitted)
  const [startups, setStartups] = useState<Startup[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_CUSTOM_STARTUPS);
      const savedDeleted = localStorage.getItem(LOCAL_STORAGE_DELETED_STARTUPS);
      const deletedIds: string[] = savedDeleted ? JSON.parse(savedDeleted) : [];
      
      let baseList = PARIS_STARTUPS_DATA;
      if (deletedIds.length > 0) {
        baseList = baseList.filter(s => !deletedIds.includes(s.id));
      }

      if (saved) {
        const custom: Startup[] = JSON.parse(saved);
        return [...custom, ...baseList];
      }
      return baseList;
    } catch (e) {
      console.error('Error loading custom startups', e);
    }
    return PARIS_STARTUPS_DATA;
  });

  // 2. Bookmarks state
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_BOOKMARKS);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // 3. View Mode State
  const [viewMode, setViewMode] = useState<'map' | 'grid' | 'split'>('map');
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState(false);

  // 4. Modal States
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);

  // 5. Filter State
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    selectedType: '',
    selectedArea: '',
    selectedStage: '',
    selectedSector: '',
    selectedJobType: '',
    hiringOnly: false,
  });

  // 6. Admin State & Routing
  const [currentPath, setCurrentPath] = useState(window.location.hash);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // 7. Ad Overlay State
  const [showAdOverlay, setShowAdOverlay] = useState(true);

  // 8. Map Tile & Centering controls
  const [activeTile, setActiveTile] = useState<'positron' | 'dark_matter' | 'voyager'>('voyager');
  const [resetCenterTrigger, setResetCenterTrigger] = useState(0);

  useEffect(() => {
    const handleHashChange = () => setCurrentPath(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Persist Bookmarks
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_BOOKMARKS, JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error('Failed to save bookmarks', e);
    }
  }, [bookmarkedIds]);

  // Handle Adding New Startup
  const handleAddStartup = (newStartup: Startup) => {
    setStartups((prev) => {
      const updated = [newStartup, ...prev];
      try {
        const customOnly = updated.filter((s) => s.isCommunitySubmitted);
        localStorage.setItem(LOCAL_STORAGE_CUSTOM_STARTUPS, JSON.stringify(customOnly));
      } catch (e) {
        console.error('Failed to persist custom startup', e);
      }
      return updated;
    });
  };

  // Handle Deleting Startup
  const handleDeleteStartup = (id: string) => {
    setStartups((prev) => {
      const target = prev.find((s) => s.id === id);
      const updated = prev.filter((s) => s.id !== id);
      
      try {
        if (target?.isCommunitySubmitted) {
          // It's a custom startup, update custom storage
          const customOnly = updated.filter((s) => s.isCommunitySubmitted);
          localStorage.setItem(LOCAL_STORAGE_CUSTOM_STARTUPS, JSON.stringify(customOnly));
        } else {
          // It's a hardcoded startup, add to deleted storage
          const savedDeleted = localStorage.getItem(LOCAL_STORAGE_DELETED_STARTUPS);
          const deletedIds: string[] = savedDeleted ? JSON.parse(savedDeleted) : [];
          deletedIds.push(id);
          localStorage.setItem(LOCAL_STORAGE_DELETED_STARTUPS, JSON.stringify(deletedIds));
        }
      } catch (e) {
        console.error('Failed to persist deleted startup', e);
      }
      return updated;
    });
  };

  // Handle Toggling Boost Status
  const handleToggleBoost = (id: string) => {
    setStartups((prev) => {
      const updated = prev.map((s) => s.id === id ? { ...s, isBoosted: !s.isBoosted } : s);
      try {
        const customOnly = updated.filter((s) => s.isCommunitySubmitted);
        localStorage.setItem(LOCAL_STORAGE_CUSTOM_STARTUPS, JSON.stringify(customOnly));
      } catch (e) {
        console.error('Failed to persist custom startup boost status', e);
      }
      return updated;
    });
  };

  // Toggle Bookmark
  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter change helper
  const handleFilterChange = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Reset Filters
  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      selectedType: '',
      selectedArea: '',
      selectedStage: '',
      selectedSector: '',
      selectedJobType: '',
      hiringOnly: false,
    });
    setShowOnlyBookmarks(false);
  };

  // Filtered Startups Calculation
  const filteredStartups = useMemo(() => {
    return startups.filter((startup) => {
      // 1. Bookmarks filter
      if (showOnlyBookmarks && !bookmarkedIds.includes(startup.id)) {
        return false;
      }

      // 2. Search query (Search in name, tagline, description, area, tags, techStack, founders)
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchName = startup.name.toLowerCase().includes(query);
        const matchTagline = startup.tagline.toLowerCase().includes(query);
        const matchDesc = startup.description.toLowerCase().includes(query);
        const matchArea = startup.area.toLowerCase().includes(query);
        const matchSector = startup.sector.toLowerCase().includes(query);
        const matchTags = startup.tags.some((t) => t.toLowerCase().includes(query));
        const matchTech = startup.techStack?.some((t) => t.toLowerCase().includes(query));
        const matchFounders = startup.founders.some((f) => f.name.toLowerCase().includes(query));

        if (
          !matchName &&
          !matchTagline &&
          !matchDesc &&
          !matchArea &&
          !matchSector &&
          !matchTags &&
          !matchTech &&
          !matchFounders
        ) {
          return false;
        }
      }

      // 3. Sector filter
      if (filters.selectedSector && startup.sector !== filters.selectedSector) {
        return false;
      }

      // 4. Area filter
      if (filters.selectedArea && !startup.area.includes(filters.selectedArea.replace('All areas', ''))) {
        // Also check if arrondissement number matches
        const selectedArrondMatch = filters.selectedArea.match(/(\d+)(st|nd|rd|th)\s+arrondissement/i);
        if (selectedArrondMatch) {
          const num = parseInt(selectedArrondMatch[1], 10);
          if (startup.arrondissementNumber !== num && !startup.area.toLowerCase().includes(`${num}`)) {
            return false;
          }
        } else if (!startup.area.toLowerCase().includes(filters.selectedArea.toLowerCase())) {
          return false;
        }
      }

      // 5. Stage filter
      if (filters.selectedStage && startup.stage !== filters.selectedStage) {
        return false;
      }

      // 6. Type filter
      if (filters.selectedType && startup.type !== filters.selectedType) {
        return false;
      }

      // 7. Hiring Only filter
      if (filters.hiringOnly && (!startup.hiringNow || startup.activeJobsCount <= 0)) {
        return false;
      }

      // 8. Job Type filter
      if (filters.selectedJobType) {
        if (!startup.jobs || !startup.jobs.some((job) => job.type === filters.selectedJobType)) {
          return false;
        }
      }

      return true;
    });
  }, [startups, filters, showOnlyBookmarks, bookmarkedIds]);

  const hiringCount = useMemo(() => {
    return startups.filter((s) => s.hiringNow).length;
  }, [startups]);

  const newThisMonthCount = useMemo(() => {
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    return startups.filter(s => s.dateAdded && new Date(s.dateAdded).getTime() > thirtyDaysAgo).length;
  }, [startups]);

  // Admin Route
  if (currentPath === '#/admin') {
    if (!isAdminLoggedIn) {
      return <AdminAuth onLogin={() => setIsAdminLoggedIn(true)} />;
    }
    return (
      <AdminDashboard
        startups={startups}
        onLogout={() => setIsAdminLoggedIn(false)}
        onAddStartup={handleAddStartup}
        onDeleteStartup={handleDeleteStartup}
        onToggleBoost={handleToggleBoost}
      />
    );
  }

  // Advertise Route
  if (currentPath === '#/advertise') {
    return <AdvertisePage onBack={() => window.location.hash = ''} />;
  }

  // Retrieve Ads to display
  const activeAds: { imageUrl: string, linkUrl: string }[] = (() => {
    try {
      const saved = localStorage.getItem('paris_startups_ads_v2');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  })();

  return (
    <div className="h-screen w-full bg-[#F8FAFC] text-slate-900 flex flex-col overflow-hidden relative">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 flex flex-col">
        {viewMode === 'map' ? (
          <div className="w-full h-full">
            <MapComponent
              startups={filteredStartups}
              selectedStartup={selectedStartup}
              onSelectStartup={setSelectedStartup}
              onBookmarkStartup={handleToggleBookmark}
              bookmarkedIds={bookmarkedIds}
              activeTile={activeTile}
              resetCenterTrigger={resetCenterTrigger}
            />
          </div>
        ) : (
          <div className="w-full h-full bg-slate-50"></div>
        )}
      </div>

      {/* --- FOREGROUND UI LAYER --- */}
      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        {/* Top Navigation - Mobile Only (< lg) */}
        <div className="fixed top-4 left-4 right-4 z-50 h-16 flex pointer-events-none lg:hidden">
          <div className="flex-1 min-w-0 h-full pointer-events-auto">
            <FloatingHeader
              searchQuery={filters.searchQuery}
              onSearchChange={(q) => handleFilterChange('searchQuery', q)}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onOpenStatsModal={() => setIsStatsModalOpen(true)}
              totalCount={startups.length}
              filteredCount={filteredStartups.length}
              bookmarkedIds={bookmarkedIds}
              showOnlyBookmarks={showOnlyBookmarks}
              onToggleBookmarksOnly={() => setShowOnlyBookmarks(!showOnlyBookmarks)}
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              hiringCount={hiringCount}
              onBoostClick={() => window.location.hash = '/advertise'}
              onSubmitClick={() => setIsSubmitModalOpen(true)}
              isMobile={true}
            />
          </div>
        </div>

        {/* Top Navigation - Desktop Only (>= lg) */}
        <div className="hidden lg:block">
          <FloatingHeader
            searchQuery={filters.searchQuery}
            onSearchChange={(q) => handleFilterChange('searchQuery', q)}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            onOpenStatsModal={() => setIsStatsModalOpen(true)}
            totalCount={startups.length}
            filteredCount={filteredStartups.length}
            bookmarkedIds={bookmarkedIds}
            showOnlyBookmarks={showOnlyBookmarks}
            onToggleBookmarksOnly={() => setShowOnlyBookmarks(!showOnlyBookmarks)}
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            hiringCount={hiringCount}
            onBoostClick={() => window.location.hash = '/advertise'}
            onSubmitClick={() => setIsSubmitModalOpen(true)}
            isMobile={false}
          />
        </div>

        {/* Mobile Action Buttons Bar (visible below header on screens < lg) */}
        <div className="fixed top-22 left-4 right-4 z-40 flex gap-2 pointer-events-none lg:hidden">
          <a
            href="#/advertise"
            className="flex-1 h-9 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-bold flex items-center justify-center gap-1 pointer-events-auto shadow-md border border-orange-400/30 cursor-pointer decoration-none"
          >
            <span>⚡ Boost Startup</span>
          </a>
          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="flex-1 h-9 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold flex items-center justify-center gap-1 pointer-events-auto shadow-md border border-indigo-500/30 cursor-pointer"
          >
            <span>+ Submit Startup</span>
          </button>
        </div>

        {/* Middle Section (Sidebars + Main Content) */}
        <div className="flex-1 flex overflow-hidden relative justify-between">
          
          <div className="pointer-events-auto h-full">
            <LeftSidebar
              totalCount={startups.length}
              hiringCount={hiringCount}
              newThisMonth={newThisMonthCount}
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              activeTile={activeTile}
              onTileChange={setActiveTile}
            />
          </div>

          {/* Main Content Area (Grid Mode content) */}
          <main className="flex-1 relative flex flex-col overflow-hidden pointer-events-none">
            
            {/* Ad Overlay for Map Mode */}
            {showAdOverlay && viewMode === 'map' && (
              <div className="pointer-events-auto fixed bottom-4 left-1/2 -translate-x-1/2 z-[500] bg-white/75 backdrop-blur-lg backdrop-saturate-150 rounded-2xl shadow-xl shadow-black/5 ring-1 ring-inset ring-white/80 p-2 pr-10 flex gap-2 overflow-x-auto max-w-full">
                {/* Box 1-5: Ads or Flash Slots */}
                {[0, 1, 2, 3, 4].map((i) => {
                  const ad = activeAds[i];
                  return (
                    <div key={i} className="w-24 h-24 rounded-xl border border-white/60 overflow-hidden shrink-0 relative flex items-center justify-center shadow-sm">
                      {ad ? (
                        <a href={ad.linkUrl} target="_blank" rel="noopener noreferrer" className="w-full h-full bg-slate-50 relative block hover:opacity-90 transition-opacity">
                          <img src={ad.imageUrl} alt={`Ad ${i + 1}`} className="w-full h-full object-cover" />
                          <span className="absolute top-1 left-1 bg-black/60 text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">AD</span>
                        </a>
                      ) : (
                        <a href="#/advertise" className="w-full h-full border-2 border-dashed border-orange-300/60 bg-orange-50/70 flex flex-col items-center justify-center text-center p-2 cursor-pointer hover:bg-orange-100/80 transition block decoration-none">
                          <span className="text-orange-500 font-bold text-xs mb-1">⚡ 24-hr flash slot</span>
                          <span className="text-orange-600 text-[11px] font-semibold">30 €</span>
                        </a>
                      )}
                    </div>
                  );
                })}

                <button
                  onClick={() => setShowAdOverlay(false)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-700 bg-white/80 hover:bg-white rounded-full transition-colors cursor-pointer shadow-xs border border-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {viewMode === 'grid' && (
              <div className="pointer-events-auto w-full h-full overflow-y-auto pt-[100px] pb-12 px-4 lg:pl-[312px] xl:pr-[392px]">
                <div className="max-w-5xl mx-auto">
                  {/* Display Ads */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Featured / Advertisements</h3>
                    <div className="flex gap-3 overflow-x-auto pb-4 snap-x hide-scrollbar">
                      {[0, 1, 2, 3, 4].map((i) => {
                        const ad = activeAds[i];
                        return (
                          <div key={i} className="w-48 h-32 md:w-64 md:h-40 rounded-xl border border-white/60 bg-white/50 backdrop-blur-md overflow-hidden shrink-0 relative flex items-center justify-center shadow-sm snap-start">
                            {ad ? (
                              <a href={ad.linkUrl} target="_blank" rel="noopener noreferrer" className="w-full h-full bg-slate-50 relative block hover:opacity-90 transition-opacity">
                                <img src={ad.imageUrl} alt={`Ad ${i + 1}`} className="w-full h-full object-cover" />
                                <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">AD</span>
                              </a>
                            ) : (
                              <a href="#/advertise" className="w-full h-full border-2 border-dashed border-orange-300 bg-orange-50/80 flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:bg-orange-100 transition block decoration-none">
                                <span className="text-orange-500 font-bold text-sm mb-1">⚡ 24-hr flash slot</span>
                                <span className="text-orange-600 text-xs font-semibold">30 €</span>
                              </a>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {filteredStartups.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                      {filteredStartups.map((startup) => (
                        <StartupCard
                          key={startup.id}
                          startup={startup}
                          isBookmarked={bookmarkedIds.includes(startup.id)}
                          onToggleBookmark={handleToggleBookmark}
                          onSelect={setSelectedStartup}
                          onLocateOnMap={(s) => {
                            setSelectedStartup(s);
                            setViewMode('map');
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20 bg-white/70 backdrop-blur-lg rounded-xl border border-white/50 shadow-sm max-w-lg mx-auto w-full">
                      <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-slate-900">No Startups Found</h3>
                      <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">
                        Try adjusting your filters, or reset to explore all startups.
                      </p>
                      <button
                        onClick={handleResetFilters}
                        className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-lg shadow-sm transition-colors cursor-pointer"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </main>

          <div className="pointer-events-auto h-full shadow-xl">
            <RightSidebar
              startups={filteredStartups}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
              onSelectStartup={setSelectedStartup}
            />
          </div>
          
        </div>

        {/* Bottom Stats Bar */}
        <div className="pointer-events-auto">
          <BottomBar />
        </div>
      </div>

      {/* 4. Startup Detail Modal / Drawer */}
      <StartupDetailModal
        startup={selectedStartup}
        onClose={() => setSelectedStartup(null)}
        isBookmarked={selectedStartup ? bookmarkedIds.includes(selectedStartup.id) : false}
        onToggleBookmark={handleToggleBookmark}
        onFocusOnMap={(s) => {
          setSelectedStartup(s);
          setViewMode('map');
        }}
      />

      {/* 5. Submit Startup Modal */}
      <SubmitStartupModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmit={handleAddStartup}
      />

      {/* 6. Ecosystem Analytics Modal */}
      <EcosystemStatsModal
        isOpen={isStatsModalOpen}
        onClose={() => setIsStatsModalOpen(false)}
        startups={startups}
      />
    </div>
  );
}
