import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Save, MapPin, Globe, Briefcase, Building2 } from 'lucide-react';
import { Startup, Sector, StartupType, StartupStage, JobRole, Founder } from '../types';
import { STARTUP_SECTORS, STARTUP_STAGES, STARTUP_TYPES, PARIS_AREAS } from '../data/startups';

interface EditStartupModalProps {
  isOpen: boolean;
  onClose: () => void;
  startup: Startup | null;
  onSave: (updatedStartup: Startup) => void;
}

export const EditStartupModal: React.FC<EditStartupModalProps> = ({
  isOpen,
  onClose,
  startup,
  onSave,
}) => {
  // Form states
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [sector, setSector] = useState<Sector>('AI & DeepTech');
  const [type, setType] = useState<StartupType>('Early Stage');
  const [stage, setStage] = useState<StartupStage>('Seed');
  const [area, setArea] = useState('Paris');
  const [address, setAddress] = useState('');
  const [lat, setLat] = useState<number>(48.8566);
  const [lng, setLng] = useState<number>(2.3522);
  const [foundedYear, setFoundedYear] = useState<number>(2024);
  const [fundingTotalEurM, setFundingTotalEurM] = useState<number>(0);
  const [fundingDisplay, setFundingDisplay] = useState('');
  const [headcount, setHeadcount] = useState('1-10');
  const [hiringNow, setHiringNow] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [careersUrl, setCareersUrl] = useState('');
  const [logoText, setLogoText] = useState('');
  const [customLogoUrl, setCustomLogoUrl] = useState('');
  const [brandColor, setBrandColor] = useState('#2E6F40');

  // Lists state
  const [jobs, setJobs] = useState<JobRole[]>([]);
  const [founders, setFounders] = useState<Founder[]>([]);
  const [tagsInput, setTagsInput] = useState('');
  const [techStackInput, setTechStackInput] = useState('');

  useEffect(() => {
    if (startup && isOpen) {
      setName(startup.name || '');
      setTagline(startup.tagline || '');
      setDescription(startup.description || '');
      setSector(startup.sector || 'AI & DeepTech');
      setType(startup.type || 'Early Stage');
      setStage(startup.stage || 'Seed');
      setArea(startup.area || 'Paris');
      setAddress(startup.address || '');
      setLat(startup.coordinates?.[0] || 48.8566);
      setLng(startup.coordinates?.[1] || 2.3522);
      setFoundedYear(startup.foundedYear || 2024);
      setFundingTotalEurM(startup.fundingTotalEurM || 0);
      setFundingDisplay(startup.fundingDisplay || '');
      setHeadcount(startup.headcount || '1-10');
      setHiringNow(startup.hiringNow || false);
      setWebsiteUrl(startup.websiteUrl || '');
      setCareersUrl(startup.careersUrl || '');
      setLogoText(startup.logoText || '');
      setCustomLogoUrl(startup.customLogoUrl || '');
      setBrandColor(startup.brandColor || '#2E6F40');
      setJobs(startup.jobs || []);
      setFounders(startup.founders || []);
      setTagsInput(startup.tags?.join(', ') || '');
      setTechStackInput(startup.techStack?.join(', ') || '');
    }
  }, [startup, isOpen]);

  if (!isOpen || !startup) return null;

  // Jobs dynamic list handlers
  const handleAddJob = () => {
    setJobs([...jobs, { title: '', department: sector, location: 'Paris', type: 'Full-time', url: '' }]);
  };

  const handleRemoveJob = (index: number) => {
    setJobs(jobs.filter((_, i) => i !== index));
  };

  const handleJobChange = (index: number, field: keyof JobRole, value: string) => {
    const updated = [...jobs];
    updated[index] = { ...updated[index], [field]: value };
    setJobs(updated);
  };

  // Founders dynamic list handlers
  const handleAddFounder = () => {
    setFounders([...founders, { name: '', role: 'Founder & CEO', linkedinUrl: '' }]);
  };

  const handleRemoveFounder = (index: number) => {
    setFounders(founders.filter((_, i) => i !== index));
  };

  const handleFounderChange = (index: number, field: keyof Founder, value: string) => {
    const updated = [...founders];
    updated[index] = { ...updated[index], [field]: value };
    setFounders(updated);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setCustomLogoUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedStartup: Startup = {
      ...startup,
      name: name.trim(),
      tagline: tagline.trim(),
      description: description.trim(),
      sector,
      type,
      stage,
      area,
      address: address.trim(),
      coordinates: [Number(lat), Number(lng)],
      foundedYear: Number(foundedYear),
      fundingTotalEurM: Number(fundingTotalEurM),
      fundingDisplay: fundingDisplay.trim() || (fundingTotalEurM > 0 ? `€${fundingTotalEurM}M` : 'Bootstrapped'),
      headcount,
      hiringNow,
      activeJobsCount: hiringNow ? jobs.length : 0,
      websiteUrl: websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`,
      careersUrl: careersUrl.startsWith('http') ? careersUrl : `https://${careersUrl}`,
      logoText: logoText.trim() || undefined,
      customLogoUrl: customLogoUrl.trim() || undefined,
      brandColor,
      tags: tagsInput.split(',').map(t => t.trim()).filter(Boolean),
      techStack: techStackInput.split(',').map(t => t.trim()).filter(Boolean),
      founders: founders.filter(f => f.name.trim() !== ''),
      jobs: jobs.filter(j => j.title.trim() !== ''),
    };

    onSave(updatedStartup);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden max-h-[90vh] flex flex-col my-auto animate-fade-in">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 tracking-tight">Edit Startup: {startup.name}</h3>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">Modify properties, website URLs, coordinates, and active job/internship listings.</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Section 1: Basic Information */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest border-b border-slate-100 pb-2">1. Brand & Contact details</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Startup Name *</label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Acme AI"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-indigo-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Sector</label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value as Sector)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-indigo-600 outline-none cursor-pointer"
                >
                  {STARTUP_SECTORS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Website URL</label>
                <input
                  type="text"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="https://company.com"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Careers Portal URL</label>
                <input
                  type="text"
                  value={careersUrl}
                  onChange={(e) => setCareersUrl(e.target.value)}
                  placeholder="https://company.com/careers"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Tagline *</label>
              <input
                required
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                placeholder="One-line pitch"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Full Description</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Full description..."
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white resize-none"
              />
            </div>
          </div>

          {/* Section 2: Location & Map Coordinates */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest border-b border-slate-100 pb-2">2. Map Placement & Address</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Arrondissement / Area</label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white cursor-pointer"
                >
                  {PARIS_AREAS.filter(a => a !== 'All areas').map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street Address, Paris"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white"
                />
              </div>
            </div>

            {/* Latitude and Longitude edit */}
            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Latitude (map center)</label>
                <input
                  required
                  type="number"
                  step="0.0000001"
                  value={lat}
                  onChange={(e) => setLat(parseFloat(e.target.value))}
                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Longitude (map center)</label>
                <input
                  required
                  type="number"
                  step="0.0000001"
                  value={lng}
                  onChange={(e) => setLng(parseFloat(e.target.value))}
                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Financials & Size */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest border-b border-slate-100 pb-2">3. Financials & Size</h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Stage</label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value as StartupStage)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 cursor-pointer"
                >
                  {STARTUP_STAGES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as StartupType)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 cursor-pointer"
                >
                  {STARTUP_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Funding (M€)</label>
                <input
                  type="number"
                  step="0.1"
                  value={fundingTotalEurM}
                  onChange={(e) => setFundingTotalEurM(parseFloat(e.target.value))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Funding Text</label>
                <input
                  type="text"
                  value={fundingDisplay}
                  onChange={(e) => setFundingDisplay(e.target.value)}
                  placeholder="e.g. €250M (Series C)"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Monogram Logo (2 chars)</label>
                <input
                  type="text"
                  maxLength={2}
                  value={logoText}
                  onChange={(e) => setLogoText(e.target.value.toUpperCase())}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Accolade Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={brandColor}
                    onChange={(e) => setBrandColor(e.target.value)}
                    className="h-9 w-16 border border-slate-200 rounded-lg cursor-pointer p-0.5"
                  />
                  <span className="text-xs font-mono">{brandColor}</span>
                </div>
              </div>

              <div className="flex items-end pb-2">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hiringNow}
                    onChange={(e) => setHiringNow(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                  />
                  <span className="text-xs font-bold text-slate-700">Currently hiring now</span>
                </label>
              </div>
            </div>
          </div>

          {/* Section 4: Tech Stack, Tags, Founders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Tech Stack (comma separated)</label>
              <input
                type="text"
                value={techStackInput}
                onChange={(e) => setTechStackInput(e.target.value)}
                placeholder="React, Python, AWS"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Tags (comma separated)</label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="SaaS, GenAI, FinTech"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white"
              />
            </div>
          </div>

          {/* Section 5: Job Links Editor */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h4 className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest">4. Job Opportunities</h4>
              <button
                type="button"
                onClick={handleAddJob}
                className="flex items-center gap-1 text-[11px] font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Job Link</span>
              </button>
            </div>

            {jobs.length === 0 ? (
              <p className="text-xs text-slate-400 italic">No job links listed.</p>
            ) : (
              <div className="space-y-3">
                {jobs.map((job, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row items-center gap-3 p-3 bg-slate-50 border border-slate-150 rounded-2xl">
                    <input
                      required
                      type="text"
                      value={job.title}
                      onChange={(e) => handleJobChange(idx, 'title', e.target.value)}
                      placeholder="Job Title"
                      className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                    <select
                      value={job.type}
                      onChange={(e) => handleJobChange(idx, 'type', e.target.value)}
                      className="px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs cursor-pointer focus:border-indigo-600 outline-none"
                    >
                      {['Full-time', 'Hybrid', 'Remote', 'Internship', 'Part-time'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <input
                      type="url"
                      value={job.url || ''}
                      onChange={(e) => handleJobChange(idx, 'url', e.target.value)}
                      placeholder="Job URL Link"
                      className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveJob(idx)}
                      className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer shrink-0 animate-fade-in"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 6: Founders list */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h4 className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest">5. Founders</h4>
              <button
                type="button"
                onClick={handleAddFounder}
                className="flex items-center gap-1 text-[11px] font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Founder</span>
              </button>
            </div>

            {founders.length === 0 ? (
              <p className="text-xs text-slate-400 italic">No founders listed.</p>
            ) : (
              <div className="space-y-3">
                {founders.map((founder, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row items-center gap-3 p-3 bg-slate-50 border border-slate-150 rounded-2xl">
                    <input
                      required
                      type="text"
                      value={founder.name}
                      onChange={(e) => handleFounderChange(idx, 'name', e.target.value)}
                      placeholder="Founder Name"
                      className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                    <input
                      type="text"
                      value={founder.role}
                      onChange={(e) => handleFounderChange(idx, 'role', e.target.value)}
                      placeholder="Role (e.g. Co-founder)"
                      className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                    <input
                      type="url"
                      value={founder.linkedinUrl || ''}
                      onChange={(e) => handleFounderChange(idx, 'linkedinUrl', e.target.value)}
                      placeholder="LinkedIn URL"
                      className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveFounder(idx)}
                      className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </form>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3.5 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-indigo-600/10 cursor-pointer"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Changes</span>
          </button>
        </div>

      </div>
    </div>
  );
};
