import React, { useState } from 'react';
import { SubmitStartupModal } from './SubmitStartupModal';
import { EditStartupModal } from './EditStartupModal';
import { Startup } from '../types';
import { Plus, Settings, Image as ImageIcon, MapPin, Trash2, Edit2, Globe, ExternalLink } from 'lucide-react';

interface AdminDashboardProps {
  startups: Startup[];
  onLogout: () => void;
  onAddStartup: (startup: Startup) => void;
  onDeleteStartup: (id: string) => void;
  onToggleBoost: (id: string) => void;
  onEditStartup: (startup: Startup) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  startups, 
  onLogout, 
  onAddStartup, 
  onDeleteStartup,
  onToggleBoost,
  onEditStartup
}) => {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [editingStartup, setEditingStartup] = useState<Startup | null>(null);
  
  // Ad management state (v2 supports links)
  const [ads, setAds] = useState<{imageUrl: string, linkUrl: string}[]>(() => {
    try {
      const saved = localStorage.getItem('paris_startups_ads_v2');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [newAdImageUrl, setNewAdImageUrl] = useState('');
  const [newAdLinkUrl, setNewAdLinkUrl] = useState('');

  const handleAddAd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAdImageUrl.trim() || !newAdLinkUrl.trim()) return;
    const updated = [...ads, { imageUrl: newAdImageUrl.trim(), linkUrl: newAdLinkUrl.trim() }];
    setAds(updated);
    localStorage.setItem('paris_startups_ads_v2', JSON.stringify(updated));
    setNewAdImageUrl('');
    setNewAdLinkUrl('');
  };

  const handleAdFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!newAdLinkUrl.trim()) {
      alert("Please enter a Target Link URL first before uploading the image.");
      e.target.value = '';
      return;
    }
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          const updated = [...ads, { imageUrl: reader.result, linkUrl: newAdLinkUrl.trim() }];
          setAds(updated);
          localStorage.setItem('paris_startups_ads_v2', JSON.stringify(updated));
          setNewAdLinkUrl('');
        }
      };
      reader.readAsDataURL(file);
    }
    // reset input so same file can be selected again
    e.target.value = '';
  };

  const handleRemoveAd = (index: number) => {
    const updated = ads.filter((_, i) => i !== index);
    setAds(updated);
    localStorage.setItem('paris_startups_ads_v2', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-indigo-600" />
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:underline">
            View Live Site
          </a>
          <button
            onClick={onLogout}
            className="text-sm text-slate-600 hover:text-slate-900 font-medium"
          >
            Log Out
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-8">
        {/* Startups Section */}
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-500" />
                Manage Startups
              </h2>
              <p className="text-sm text-slate-500">
                Add, delete, or edit verified startups directly to the interactive map and directory.
              </p>
            </div>
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-700 transition cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Add Startup
            </button>
          </div>
          <div className="bg-slate-50 p-4 rounded text-sm text-slate-600 border border-slate-100 mb-6">
            <strong>Note:</strong> Startups added, deleted, or edited here are tracked in your browser's local storage.
          </div>

          <div className="border border-slate-200 rounded-lg overflow-hidden max-h-[600px] overflow-y-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase text-slate-700 sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3">Startup Name</th>
                  <th className="px-4 py-3">Sector</th>
                  <th className="px-4 py-3">Website</th>
                  <th className="px-4 py-3">Job Links</th>
                  <th className="px-4 py-3">Boosted</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {startups.map((startup) => (
                  <tr key={startup.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-900">{startup.name}</td>
                    <td className="px-4 py-3 text-xs">{startup.sector}</td>
                    <td className="px-4 py-3">
                      {startup.websiteUrl ? (
                        <a 
                          href={startup.websiteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-xs text-indigo-600 hover:underline flex items-center gap-1"
                        >
                          <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate max-w-[100px]" title={startup.websiteUrl}>Link</span>
                        </a>
                      ) : (
                        <span className="text-slate-400 italic text-xs">No link</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-1 max-w-[200px]">
                        {startup.jobs && startup.jobs.length > 0 ? (
                          startup.jobs.map((job, idx) => (
                            <a 
                              key={idx} 
                              href={job.url || startup.careersUrl || startup.websiteUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-[11px] text-indigo-600 hover:underline flex items-center gap-1"
                              title={`${job.title} (${job.type})`}
                            >
                              <ExternalLink className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                              <span className="truncate">{job.title}</span>
                            </a>
                          ))
                        ) : (
                          <span className="text-slate-400 italic text-[11px]">No active jobs</span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => onToggleBoost(startup.id)}
                        className={`px-2 py-1 rounded text-[10px] font-bold transition-all cursor-pointer ${
                          startup.isBoosted
                            ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-sm ring-1 ring-orange-400'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                        }`}
                      >
                        {startup.isBoosted ? 'Boosted ⚡' : 'Boost'}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setEditingStartup(startup)}
                          className="text-slate-500 hover:text-slate-800 p-1.5 rounded transition-colors hover:bg-slate-100 cursor-pointer"
                          title="Edit Startup"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onDeleteStartup(startup.id)}
                          className="text-red-500 hover:text-rose-700 p-1.5 rounded transition-colors hover:bg-rose-50 cursor-pointer"
                          title="Delete Startup"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {startups.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                      No startups found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Ads Section */}
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-orange-500" />
              Manage Advertisements
            </h2>
            <p className="text-sm text-slate-500">
              Add image URLs for banners to display in the grid view.
            </p>
          </div>
          
          <form onSubmit={handleAddAd} className="flex gap-2 mb-6 flex-wrap">
            <input
              type="url"
              placeholder="Target Link URL (e.g. https://company.com)"
              value={newAdLinkUrl}
              onChange={(e) => setNewAdLinkUrl(e.target.value)}
              className="flex-1 px-3 py-2 border border-slate-200 rounded outline-none focus:border-indigo-600 text-sm min-w-[200px]"
              required
            />
            <input
              type="url"
              placeholder="Image URL (or use upload button)"
              value={newAdImageUrl}
              onChange={(e) => setNewAdImageUrl(e.target.value)}
              className="flex-1 px-3 py-2 border border-slate-200 rounded outline-none focus:border-indigo-600 text-sm min-w-[200px]"
            />
            <button
              type="submit"
              className="bg-slate-900 text-white px-4 py-2 rounded font-semibold text-sm hover:bg-slate-800 transition whitespace-nowrap shrink-0"
            >
              Add Ad URL
            </button>
            <span className="text-slate-400 font-bold self-center px-2 shrink-0 text-xs">OR</span>
            <label className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-4 py-2 rounded font-semibold text-sm transition cursor-pointer border border-indigo-200 whitespace-nowrap shrink-0">
              Upload Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAdFileUpload}
              />
            </label>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ads.map((ad, i) => (
              <div key={i} className="relative group rounded-lg overflow-hidden border border-slate-200">
                <img src={ad.imageUrl} alt={`Ad ${i}`} className="w-full h-32 object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <a href={ad.linkUrl} target="_blank" rel="noopener noreferrer" className="text-white text-xs font-bold underline bg-black/40 px-2 py-1 rounded">
                    {ad.linkUrl}
                  </a>
                </div>
                <button
                  onClick={() => handleRemoveAd(i)}
                  className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition"
                >
                  Remove
                </button>
              </div>
            ))}
            {ads.length === 0 && (
              <div className="col-span-full py-8 text-center text-slate-400 text-sm border-2 border-dashed border-slate-200 rounded">
                No active advertisements
              </div>
            )}
          </div>
        </section>
      </main>

      <SubmitStartupModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmit={onAddStartup}
        isAdminMode={true}
      />

      <EditStartupModal
        isOpen={editingStartup !== null}
        onClose={() => setEditingStartup(null)}
        startup={editingStartup}
        onSave={onEditStartup}
      />
    </div>
  );
};
