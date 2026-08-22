import React from 'react';
import {
  X,
  BarChart3,
  Download,
  PieChart,
  MapPin
} from 'lucide-react';
import { Startup } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface EcosystemStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  startups: Startup[];
}

export const EcosystemStatsModal: React.FC<EcosystemStatsModalProps> = ({
  isOpen,
  onClose,
  startups,
}) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  const totalCount = startups.length;
  const unicornCount = startups.filter((s) => s.type === 'Unicorn').length;
  const totalJobs = startups.reduce((acc, curr) => acc + (curr.activeJobsCount || 0), 0);
  const totalFundingEurM = startups.reduce((acc, curr) => acc + (curr.fundingTotalEurM || 0), 0);

  // Sector breakdown
  const sectorCounts: Record<string, number> = {};
  startups.forEach((s) => {
    sectorCounts[s.sector] = (sectorCounts[s.sector] || 0) + 1;
  });
  const sortedSectors = Object.entries(sectorCounts).sort((a, b) => b[1] - a[1]);

  // Arrondissement / Area breakdown
  const areaCounts: Record<string, number> = {};
  startups.forEach((s) => {
    const simplifiedArea = s.area.split('(')[0].trim();
    areaCounts[simplifiedArea] = (areaCounts[simplifiedArea] || 0) + 1;
  });
  const sortedAreas = Object.entries(areaCounts).sort((a, b) => b[1] - a[1]);

  // Export JSON
  const handleExportJSON = () => {
    const dataStr = JSON.stringify(startups, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `paris-startups-ecosystem-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  // Export CSV
  const handleExportCSV = () => {
    const headers = ['Name', 'Sector', 'Stage', 'Type', 'Area', 'Address', 'Funding', 'Headcount', 'Hiring', 'Jobs Count', 'Website'];
    const rows = startups.map((s) => [
      `"${s.name}"`,
      `"${s.sector}"`,
      `"${s.stage}"`,
      `"${s.type}"`,
      `"${s.area}"`,
      `"${s.address}"`,
      `"${s.fundingDisplay}"`,
      `"${s.headcount}"`,
      s.hiringNow ? 'Yes' : 'No',
      s.activeJobsCount,
      `"${s.websiteUrl}"`,
    ]);
    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `paris-startups-ecosystem-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  return (
    <div
      id="ecosystem-stats-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        id="ecosystem-stats-modal"
        className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold shadow-2xs">
              <BarChart3 className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                {t('stats.title')}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {t('stats.subtitle')}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Top Summary Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('sidebar.totalStartups')}</span>
              <span className="text-xl font-bold text-slate-900 mt-1 block">{totalCount}</span>
            </div>

            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <span className="text-[10px] uppercase font-bold text-purple-700 block">{t('stats.unicorns')}</span>
              <span className="text-xl font-bold text-purple-900 mt-1 block">{unicornCount}</span>
            </div>

            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <span className="text-[10px] uppercase font-bold text-green-700 block">{t('stats.activeRoles')}</span>
              <span className="text-xl font-bold text-green-900 mt-1 block">{totalJobs}+</span>
            </div>

            <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
              <span className="text-[10px] uppercase font-bold text-indigo-600 block">{t('stats.fundingTracked')}</span>
              <span className="text-xl font-bold text-slate-900 mt-1 block">€{(totalFundingEurM / 1000).toFixed(1)}B+</span>
            </div>
          </div>

          {/* Sector Breakdown */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <PieChart className="w-3.5 h-3.5 text-slate-500" />
              {t('stats.sectorsBreakdown')}
            </h4>
            <div className="space-y-2">
              {sortedSectors.map(([sector, count]) => {
                const percentage = Math.round((count / totalCount) * 100);
                return (
                  <div key={sector} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-800">{sector}</span>
                      <span className="text-slate-500">
                        {count} ({percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded overflow-hidden">
                      <div
                        className="bg-indigo-600 h-full rounded transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Arrondissement Hotspots */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              {t('stats.hotspots')}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sortedAreas.slice(0, 6).map(([area, count]) => (
                <div
                  key={area}
                  className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between"
                >
                  <span className="text-xs font-bold text-slate-800 truncate">{area}</span>
                  <span className="px-2 py-0.5 bg-white text-slate-700 rounded text-[11px] font-bold border border-slate-200">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: Export Buttons */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <span className="text-xs text-slate-500 font-medium">{t('stats.exportLabel')}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 rounded text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CSV</span>
            </button>
            <button
              onClick={handleExportJSON}
              className="px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>JSON</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

