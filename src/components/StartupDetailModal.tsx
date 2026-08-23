import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  MapPin,
  Briefcase,
  TrendingUp,
  Users,
  Calendar,
  Code2,
  Bookmark,
  Share2,
  Check,
  ArrowUpRight,
  Flag
} from 'lucide-react';
import { Startup } from '../types';
import { getLogoFilename } from '../logoHelper';
import { useLanguage } from '../context/LanguageContext';

interface StartupDetailModalProps {
  startup: Startup | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (startupId: string) => void;
  onFocusOnMap?: (startup: Startup) => void;
  reportedPendingIds: string[];
  onReportNotHiring: (startupId: string) => void;
}

export const StartupDetailModal: React.FC<StartupDetailModalProps> = ({
  startup,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onFocusOnMap,
  reportedPendingIds,
  onReportNotHiring,
}) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'jobs' | 'founders' | 'stack'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);
  const [showReportSuccess, setShowReportSuccess] = useState(false);

  if (!startup) return null;

  const isUnicorn = startup.type === 'Unicorn';
  const initial = startup.name.slice(0, 2).toUpperCase();
  const brandBg = startup.brandColor || (isUnicorn ? '#8b5cf6' : '#2E6F40');

  const handleShare = () => {
    const shareUrl = `${window.location.origin}?startup=${startup.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div
      id="startup-detail-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        id="startup-detail-modal"
        className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-slate-200 bg-white">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-24 h-14 rounded-lg flex items-center justify-center font-bold text-lg text-white shadow-2xs shrink-0 border border-slate-200 overflow-hidden bg-white"
              >
                {getLogoFilename(startup) ? (
                  <>
                    <img 
                      src={getLogoFilename(startup)!} 
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
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                    {startup.name}
                  </h2>
                  {isUnicorn && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-700 uppercase tracking-wider">
                      {t('card.unicorn')}
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                    {startup.type}
                  </span>
                </div>

                <p className="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>{startup.area}</span>
                  <span className="text-slate-300">•</span>
                  <span>{t('detail.founded')} {startup.foundedYear}</span>
                </p>
              </div>
            </div>

            {/* Quick Action Top Icons */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={handleShare}
                title={t('detail.copyLink')}
                className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => onToggleBookmark(startup.id)}
                title={isBookmarked ? 'Remove Bookmark' : t('detail.savedBookmarks')}
                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'bg-amber-50 text-amber-500 border-amber-300'
                    : 'bg-white text-slate-500 hover:text-slate-900 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
              </button>

              <button
                onClick={onClose}
                title="Close"
                className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            {startup.tagline}
          </p>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-100 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {t('detail.overview')}
            </button>

            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'jobs'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t('detail.jobsTab')} ({startup.activeJobsCount})</span>
            </button>

            <button
              onClick={() => setActiveTab('founders')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'founders'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {t('detail.foundersTab')} ({startup.founders.length})
            </button>

            {startup.techStack && startup.techStack.length > 0 && (
              <button
                onClick={() => setActiveTab('stack')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'stack'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {t('detail.techStackTab')}
              </button>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-230px)] space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('card.funding')}</span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block truncate">
                    {startup.fundingDisplay}
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('header.allStages').replace('Tous les ', '')}</span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                    {startup.stage}
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('card.team')}</span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                    {startup.headcount}
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('header.allSectors').replace('Tous les ', '')}</span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block truncate">
                    {startup.sector}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {t('detail.about')} {startup.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {startup.description}
                </p>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {t('detail.keywords')}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {startup.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded border border-slate-200 text-indigo-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">{t('detail.headquarters')}</h5>
                    <p className="text-xs text-slate-600 mt-0.5">{startup.address}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Coordinates: {startup.coordinates[0]}, {startup.coordinates[1]}</p>
                  </div>
                </div>

                {onFocusOnMap && (
                  <button
                    onClick={() => {
                      onClose();
                      onFocusOnMap(startup);
                    }}
                    className="px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 rounded text-xs font-semibold transition-colors shrink-0 cursor-pointer"
                  >
                    {t('detail.viewOnMap')}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: JOBS & CAREERS */}
          {activeTab === 'jobs' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                  <span className="text-xs font-bold text-indigo-950">
                    {startup.hiringNow ? `${startup.activeJobsCount} ${t('card.openPositions')}` : t('detail.vacancies')}
                  </span>
                </div>
                <a
                  href={startup.careersUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs font-semibold text-indigo-600 hover:underline flex items-center gap-1"
                >
                  <span>{t('detail.careersPortal')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {startup.jobs && startup.jobs.length > 0 ? (
                <div className="space-y-2">
                  {startup.jobs.map((job, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white border border-slate-200 rounded-lg flex items-center justify-between gap-3"
                    >
                      <div>
                        <h5 className="font-bold text-xs sm:text-sm text-slate-900">{job.title}</h5>
                        <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                          <span className="px-1.5 py-0.5 bg-slate-100 rounded text-[10px] font-semibold text-slate-700">
                            {job.department}
                          </span>
                          <span>•</span>
                          <span>{job.location}</span>
                          <span>•</span>
                          <span className="text-green-700 font-semibold">{job.type}</span>
                        </div>
                      </div>

                      <a
                        href={job.url || startup.careersUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="px-3 py-1.5 bg-slate-900 hover:bg-black text-white text-xs font-semibold rounded transition-colors shrink-0"
                      >
                        Apply
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500">
                  <Briefcase className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-xs font-medium">{t('detail.vacancies')}</p>
                </div>
              )}

            </div>
          )}

          {/* TAB 3: FOUNDERS */}
          {activeTab === 'founders' && (
            <div className="space-y-3">
              {startup.founders.map((founder, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                    {founder.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900">{founder.name}</h5>
                    <p className="text-xs text-slate-600 font-medium">{founder.role}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: TECH STACK */}
          {activeTab === 'stack' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {startup.techStack?.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-semibold text-slate-800"
                  >
                    <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3 w-full">
            <a
              href={startup.websiteUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 py-2 px-4 border border-slate-300 hover:bg-slate-100 text-slate-800 rounded text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>{t('detail.visitWebsite')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={startup.careersUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              <span>{t('detail.openJobs')}</span>
            </a>
          </div>

          {startup.hiringNow && (
            <div className="flex justify-center w-full pt-1 border-t border-slate-100">
              {showReportSuccess ? (
                <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
                  {t('detail.reportedSuccess')}
                </div>
              ) : reportedPendingIds.includes(startup.id) ? (
                <div className="text-xs font-medium text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-full flex items-center gap-1 border border-slate-200 shadow-3xs">
                  <Flag className="w-3.5 h-3.5 text-slate-400 fill-slate-400" />
                  {t('detail.alreadyReported')}
                </div>
              ) : (
                <button
                  onClick={() => {
                    onReportNotHiring(startup.id);
                    setShowReportSuccess(true);
                    setTimeout(() => setShowReportSuccess(false), 3000);
                    // Open native mailto prefilled to snhubinternational@gmail.com
                    const subject = encodeURIComponent(`Not Hiring Report: ${startup.name}`);
                    const body = encodeURIComponent(`Hello,\n\nI would like to report that "${startup.name}" is not currently hiring.\n\nPlease update the Internmap database accordingly.\n\nThanks!`);
                    window.open(`mailto:snhubinternational@gmail.com?subject=${subject}&body=${body}`);
                  }}
                  className="text-xs text-slate-400 hover:text-rose-600 font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Flag className="w-3.5 h-3.5" />
                  {t('detail.reportNotHiring')}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

