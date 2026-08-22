import React, { useState } from 'react';
import { 
  Building2, 
  Sparkles, 
  Plus, 
  Trash2, 
  Briefcase, 
  Upload, 
  CheckCircle2, 
  Globe, 
  MapPin, 
  Euro, 
  Users, 
  ArrowLeft 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { Sector, StartupType, StartupStage, JobRole, Founder } from '../types';
import { STARTUP_SECTORS, STARTUP_STAGES, STARTUP_TYPES, PARIS_AREAS } from '../data/startups';

interface StartupPortalPageProps {
  onBackToMap: () => void;
  onAddStartup: (newStartup: any) => void;
}

export const StartupPortalPage: React.FC<StartupPortalPageProps> = ({ onBackToMap, onAddStartup }) => {
  const { t, language, setLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<'submit' | 'advertise'>('submit');

  // --- SUBMIT STARTUP FORM STATES ---
  const [name, setName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [address, setAddress] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [sector, setSector] = useState<Sector>('AI & DeepTech');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<StartupType>('Early Stage');
  const [stage, setStage] = useState<StartupStage>('Seed');
  const [area, setArea] = useState('Paris');
  const [foundedYear, setFoundedYear] = useState<number>(new Date().getFullYear());
  const [fundingTotalEurM, setFundingTotalEurM] = useState<number>(0);
  const [fundingDisplay, setFundingDisplay] = useState('');
  const [headcount, setHeadcount] = useState('1-10');
  const [hiringNow, setHiringNow] = useState(false);
  const [logoText, setLogoText] = useState('');
  const [brandColor, setBrandColor] = useState('#2E6F40');

  // Dynamic Jobs, Founders, Tech stack, Tags
  const [jobs, setJobs] = useState<JobRole[]>([]);
  const [founders, setFounders] = useState<Founder[]>([]);
  const [tagsInput, setTagsInput] = useState('');
  const [techStackInput, setTechStackInput] = useState('');

  // Submit States
  const [isSubmittingStartup, setIsSubmittingStartup] = useState(false);
  const [submitStartupSuccess, setSubmitStartupSuccess] = useState(false);

  // --- ADVERTISE FORM STATES ---
  const [selectedPlan, setSelectedPlan] = useState<'plan1' | 'plan2'>('plan1');
  const [companyName, setCompanyName] = useState('');
  const [pocName, setPocName] = useState('');
  const [pocEmail, setPocEmail] = useState('');
  const [ctaLink, setCtaLink] = useState('');
  const [bannerFileName, setBannerFileName] = useState('');
  const [proofFileName, setProofFileName] = useState('');
  const [bannerBase64, setBannerBase64] = useState('');
  const [proofBase64, setProofBase64] = useState('');
  const [isSubmittingAd, setIsSubmittingAd] = useState(false);
  const [submitAdSuccess, setSubmitAdSuccess] = useState(false);

  // --- HANDLERS FOR SUBMIT STARTUP ---
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

  const handleStartupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contactEmail || !address) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    setIsSubmittingStartup(true);

    const emailPayload = {
      _subject: `New Startup Submission: ${name.trim()}`,
      startupName: name.trim(),
      email: contactEmail.trim(),
      exactLocation: address.trim(),
      websiteUrl,
      sector,
      tagline: tagline.trim(),
      description: description.trim(),
      area,
      type,
      stage,
      foundedYear,
      fundingDisplay: fundingDisplay || (fundingTotalEurM > 0 ? `€${fundingTotalEurM}M` : 'Bootstrapped'),
      headcount,
      hiringNow: hiringNow ? 'Yes' : 'No',
      brandColor,
      logoText: logoText || name.substring(0, 2).toUpperCase(),
      tags: tagsInput.split(',').map(t => t.trim()).filter(Boolean).join(', '),
      techStack: techStackInput.split(',').map(t => t.trim()).filter(Boolean).join(', '),
      founders: JSON.stringify(founders.filter(f => f.name.trim())),
      jobs: JSON.stringify(jobs.filter(j => j.title.trim())),
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/snhubinternational@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      if (response.ok) {
        setSubmitStartupSuccess(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2E6F40', '#0f172a', '#ffffff', '#10B981'],
        });
        
        // Reset form
        setName('');
        setContactEmail('');
        setAddress('');
        setWebsiteUrl('');
        setTagline('');
        setDescription('');
        setJobs([]);
        setFounders([]);
        setTagsInput('');
        setTechStackInput('');
      } else {
        alert('Failed to submit startup details. Please try again.');
      }
    } catch (err) {
      console.error("Failed to submit form", err);
      alert('Network error. Please try again.');
    } finally {
      setIsSubmittingStartup(false);
    }
  };

  // --- HANDLERS FOR ADVERTISE ---
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'banner' | 'proof') => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (type === 'banner') setBannerFileName(file.name);
    else setProofFileName(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      if (type === 'banner') setBannerBase64(reader.result as string);
      else setProofBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleAdSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !pocName || !pocEmail) {
      alert('Please fill out the required contact details.');
      return;
    }

    setIsSubmittingAd(true);

    const emailPayload = {
      _subject: `New Advertising Request: ${companyName.trim()}`,
      selectedPlan: selectedPlan === 'plan1' ? 'Plan 1: Sponsor Tile (30 €)' : 'Plan 2: Map Pin Boost (50 €)',
      companyName: companyName.trim(),
      pocName: pocName.trim(),
      pocEmail: pocEmail.trim(),
      ctaLink: ctaLink.trim(),
      bannerFileName,
      proofFileName,
      bannerDataUrl: bannerBase64,
      proofDataUrl: proofBase64,
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/snhubinternational@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });
      
      if (response.ok) {
        setSubmitAdSuccess(true);
        confetti({
          particleCount: 100,
          spread: 80,
          colors: ['#f97316', '#2E6F40', '#ffffff']
        });

        // Reset Form
        setCompanyName('');
        setPocName('');
        setPocEmail('');
        setCtaLink('');
        setBannerFileName('');
        setProofFileName('');
        setBannerBase64('');
        setProofBase64('');
      } else {
        alert('Failed to submit ad booking. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting advertisement', err);
      alert('Network error. Please try again.');
    } finally {
      setIsSubmittingAd(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 flex flex-col">
      
      {/* Portal Header */}
      <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40 px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo & Switch mode */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onBackToMap}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Jobseeker Map</span>
          </button>
          
          <div className="h-4 w-px bg-slate-200 hidden sm:block" />
          
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-indigo-600" />
            <h1 className="font-extrabold text-[15px] sm:text-base tracking-tight leading-none text-slate-800">
              Startup Portal
            </h1>
          </div>
        </div>

        {/* Right side configs */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-[10px] font-black text-slate-600 transition-all cursor-pointer"
          >
            <Globe className="w-3 h-3" />
            {language.toUpperCase()}
          </button>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Tab Selector */}
        <div className="flex bg-slate-200/60 p-1 rounded-2xl max-w-md mx-auto mb-8 shadow-inner">
          <button
            onClick={() => {
              setActiveTab('submit');
              setSubmitStartupSuccess(false);
            }}
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'submit' 
                ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/50' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>List Your Startup (Free)</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('advertise');
              setSubmitAdSuccess(false);
            }}
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'advertise' 
                ? 'bg-white text-orange-600 shadow-sm border border-slate-200/50' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Premium Promotion</span>
          </button>
        </div>

        {/* Tab Content Panel */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
          
          {/* TAB 1: SUBMIT STARTUP FORM */}
          {activeTab === 'submit' && (
            <div>
              {submitStartupSuccess ? (
                <div className="py-16 text-center space-y-4 max-w-md mx-auto animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900">Submission Received!</h2>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Your startup details have been submitted and sent to the admins at <b>snhubinternational@gmail.com</b>. We will review and publish your listing on the map soon!
                  </p>
                  <button 
                    onClick={() => setSubmitStartupSuccess(false)}
                    className="mt-6 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    Submit Another Startup
                  </button>
                </div>
              ) : (
                <form onSubmit={handleStartupSubmit} className="space-y-8">
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">List Your Venture on the Paris Map</h2>
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      Fill out the form below. Once reviewed by our admins, your startup will be pinned to the interactive directory.
                    </p>
                  </div>

                  {/* Section 1: Basic Info */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest border-b border-slate-100 pb-2">1. Brand & Contact Info</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Startup Name *</label>
                        <input
                          required
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Acme AI Paris"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Contact Email ID *</label>
                        <input
                          required
                          type="email"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="contact@mycompany.com"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Website URL</label>
                        <input
                          type="url"
                          value={websiteUrl}
                          onChange={(e) => setWebsiteUrl(e.target.value)}
                          placeholder="https://mycompany.com"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Sector</label>
                        <select
                          value={sector}
                          onChange={(e) => setSector(e.target.value as Sector)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all cursor-pointer"
                        >
                          {STARTUP_SECTORS.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">One-line Tagline *</label>
                      <input
                        required
                        type="text"
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                        placeholder="e.g. Next-generation AI security engine for enterprise SaaS integrations"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Full Description</label>
                      <textarea
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Explain what your startup builds, its mission, and the problems it solves..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Section 2: Details & Location */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest border-b border-slate-100 pb-2">2. Headquarters & Location</h3>
                    
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Exact Address *</label>
                      <input
                        required
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="e.g. 102 Bd de Sébastopol, 75003 Paris, France"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Paris Area / Arrondissement</label>
                        <select
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all cursor-pointer"
                        >
                          {PARIS_AREAS.filter(a => a !== 'All areas').map((a) => (
                            <option key={a} value={a}>{a}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Founded Year</label>
                        <input
                          type="number"
                          value={foundedYear}
                          onChange={(e) => setFoundedYear(parseInt(e.target.value, 10))}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Team Size (Headcount)</label>
                        <select
                          value={headcount}
                          onChange={(e) => setHeadcount(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all cursor-pointer"
                        >
                          {['1-10', '11-50', '51-100', '101-250', '251-500', '500+'].map((h) => (
                            <option key={h} value={h}>{h} employees</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Funding & Stage */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest border-b border-slate-100 pb-2">3. Stage & Funding</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Startup Type</label>
                        <select
                          value={type}
                          onChange={(e) => setType(e.target.value as StartupType)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all cursor-pointer"
                        >
                          {STARTUP_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Funding Stage</label>
                        <select
                          value={stage}
                          onChange={(e) => setStage(e.target.value as StartupStage)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all cursor-pointer"
                        >
                          {STARTUP_STAGES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Total Funding (M€)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={fundingTotalEurM}
                          onChange={(e) => setFundingTotalEurM(parseFloat(e.target.value))}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Funding Text (Custom)</label>
                        <input
                          type="text"
                          value={fundingDisplay}
                          onChange={(e) => setFundingDisplay(e.target.value)}
                          placeholder="e.g. €2.5M Seed or Bootstrapped"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Brand Identity & Aesthetics */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest border-b border-slate-100 pb-2">4. Brand Identity</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Monogram Logo (2 Letters)</label>
                        <input
                          type="text"
                          maxLength={2}
                          value={logoText}
                          onChange={(e) => setLogoText(e.target.value.toUpperCase())}
                          placeholder="e.g. AC"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Brand Accent Color</label>
                        <div className="flex items-center gap-3">
                          <input
                            type="color"
                            value={brandColor}
                            onChange={(e) => setBrandColor(e.target.value)}
                            className="h-10 w-16 border border-slate-200 rounded-xl cursor-pointer p-0.5"
                          />
                          <span className="text-xs font-mono font-bold text-slate-600">{brandColor}</span>
                        </div>
                      </div>

                      <div className="flex items-end">
                        <label className="flex items-center gap-2.5 cursor-pointer h-10 select-none">
                          <input
                            type="checkbox"
                            checked={hiringNow}
                            onChange={(e) => setHiringNow(e.target.checked)}
                            className="w-4.5 h-4.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                          />
                          <span className="text-xs font-bold text-slate-700">Currently hiring now</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Section 5: Tech stack & Tags */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Tech Stack (comma separated)</label>
                      <input
                        type="text"
                        value={techStackInput}
                        onChange={(e) => setTechStackInput(e.target.value)}
                        placeholder="React, TypeScript, Node.js, Python"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Keywords / Tags (comma separated)</label>
                      <input
                        type="text"
                        value={tagsInput}
                        onChange={(e) => setTagsInput(e.target.value)}
                        placeholder="SaaS, Cybersecurity, AI Agents, DevTools"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Section 6: Dynamic Founders */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">5. Founders</h3>
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
                      <p className="text-xs text-slate-400 italic">No founders added yet.</p>
                    ) : (
                      <div className="space-y-3">
                        {founders.map((founder, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl">
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
                              placeholder="Role (e.g. Co-Founder & CTO)"
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

                  {/* Section 7: Dynamic Open Roles */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">6. Open Job / Internship Roles</h3>
                      <button
                        type="button"
                        onClick={handleAddJob}
                        className="flex items-center gap-1 text-[11px] font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Open Role</span>
                      </button>
                    </div>

                    {jobs.length === 0 ? (
                      <p className="text-xs text-slate-400 italic">No job roles added. Enable "Currently hiring now" checkbox to highlight your recruiting status.</p>
                    ) : (
                      <div className="space-y-3">
                        {jobs.map((job, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl">
                            <input
                              required
                              type="text"
                              value={job.title}
                              onChange={(e) => handleJobChange(idx, 'title', e.target.value)}
                              placeholder="Job Title (e.g. Front-End Intern)"
                              className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                            />
                            <select
                              value={job.type}
                              onChange={(e) => handleJobChange(idx, 'type', e.target.value)}
                              className="px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs cursor-pointer"
                            >
                              {['Full-time', 'Hybrid', 'Remote', 'Internship', 'Part-time'].map(t => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                            <input
                              type="url"
                              value={job.url || ''}
                              onChange={(e) => handleJobChange(idx, 'url', e.target.value)}
                              placeholder="Application Link URL"
                              className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveJob(idx)}
                              className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer shrink-0"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-slate-200 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmittingStartup}
                      className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {isSubmittingStartup ? 'Submitting Details...' : 'Submit Startup Listing'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: ADVERTISE & BOOST */}
          {activeTab === 'advertise' && (
            <div>
              {submitAdSuccess ? (
                <div className="py-16 text-center space-y-4 max-w-md mx-auto animate-fade-in">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900">Promotion Requested!</h2>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Your ad request and proof of payment details have been sent to <b>snhubinternational@gmail.com</b>. The admins will review the transfer and push your ad live within 12 hours!
                  </p>
                  <button 
                    onClick={() => setSubmitAdSuccess(false)}
                    className="mt-6 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    Submit Another Ad
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  
                  {/* Left Column: Plan selection & Payment Details */}
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Boost Your Startup Presence</h2>
                      <p className="text-xs text-slate-500 mt-1 font-medium">
                        Promote your brand or boost recruiting. Choose your premium plan, scan the Revolut QR code or perform an IBAN SEPA transfer, upload the screenshot, and submit.
                      </p>
                    </div>

                    {/* Plan Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Plan 1 card */}
                      <div
                        onClick={() => setSelectedPlan('plan1')}
                        className={`p-5 rounded-2xl border-2 transition-all cursor-pointer select-none flex flex-col justify-between ${
                          selectedPlan === 'plan1' 
                            ? 'border-orange-500 bg-orange-50/30' 
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-black text-orange-600 uppercase tracking-widest">Plan 1</span>
                            <span className="text-lg font-black text-slate-800">30 €</span>
                          </div>
                          <h4 className="text-sm font-extrabold text-slate-900 mb-1">Sponsor Tile</h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            A square banner in the sponsor bar at the bottom of the map, visible to all jobseekers browsing the directory. Runs for 24 hours.
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-orange-600 mt-4 block">⚡ Instant Visibility (24 hrs)</span>
                      </div>

                      {/* Plan 2 card */}
                      <div
                        onClick={() => setSelectedPlan('plan2')}
                        className={`p-5 rounded-2xl border-2 transition-all cursor-pointer select-none flex flex-col justify-between ${
                          selectedPlan === 'plan2' 
                            ? 'border-orange-500 bg-orange-50/30' 
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-black text-orange-600 uppercase tracking-widest">Plan 2</span>
                            <span className="text-lg font-black text-slate-800">50 €</span>
                          </div>
                          <h4 className="text-sm font-extrabold text-slate-900 mb-1">Map Pin Boost</h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            Upgrade your map pin to 2× scale, add an active pulsing orange pulse glow, and remain unclustered so it's always visible at all zoom levels. Runs for 7 days.
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-orange-600 mt-4 block">🚀 Premium Map Presence (7 Days)</span>
                      </div>
                    </div>

                    {/* Step 2: Payment Details (QR & Bank details) */}
                    <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-5">
                      <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Payment Instructions</h3>
                      
                      <div className="flex flex-col md:flex-row gap-5 items-center bg-white p-4 rounded-xl border border-slate-100 shadow-2xs">
                        <div className="w-28 h-28 bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 rounded-lg relative overflow-hidden">
                          {/* Custom visual mockup of Revolut QR */}
                          <div className="absolute inset-2 border-2 border-slate-300 border-dashed flex flex-col items-center justify-center text-center p-1">
                            <div className="w-10 h-10 border border-slate-400 flex flex-wrap p-0.5 gap-0.5 mb-1 bg-white">
                              {[...Array(9)].map((_, i) => (
                                <div key={i} className={`w-2.5 h-2.5 ${i % 3 === 0 || i === 8 ? 'bg-slate-800' : 'bg-slate-200'}`} />
                              ))}
                            </div>
                            <span className="text-[7.5px] font-black text-slate-500 uppercase tracking-tight">Scan with Revolut</span>
                          </div>
                        </div>
                        <div className="text-center md:text-left space-y-1">
                          <h4 className="text-xs font-black text-slate-800">Revolut Payment Link</h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            Scan with your camera/Revolut app to pay <b>@kausthw6my</b>. Set the transfer description as your company name.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 text-[11px] text-slate-600 leading-relaxed">
                        <h4 className="text-xs font-black text-slate-800">SEPA Bank Transfer (IBAN)</h4>
                        <div className="grid grid-cols-3 gap-y-1 border-t border-slate-200/50 pt-2">
                          <span className="font-bold text-slate-500">Beneficiary:</span>
                          <span className="col-span-2 font-mono text-slate-800">Kausthubh</span>
                          <span className="font-bold text-slate-500">IBAN:</span>
                          <span className="col-span-2 font-mono text-slate-800 break-all select-all">FR76 3000 6000 0123 4567 8901 234</span>
                          <span className="font-bold text-slate-500">BIC/SWIFT:</span>
                          <span className="col-span-2 font-mono text-slate-800">AGRIFRPPPXXX</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Submission details form */}
                  <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8">
                    <form onSubmit={handleAdSubmit} className="space-y-4">
                      <h3 className="text-xs font-bold text-orange-600 uppercase tracking-widest border-b border-slate-100 pb-2">Submit Ad Booking</h3>
                      
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Company Name *</label>
                        <input
                          required
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. Acme AI"
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-orange-500 outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">POC Name *</label>
                          <input
                            required
                            type="text"
                            value={pocName}
                            onChange={(e) => setPocName(e.target.value)}
                            placeholder="Your Name"
                            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-orange-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">POC Email *</label>
                          <input
                            required
                            type="email"
                            value={pocEmail}
                            onChange={(e) => setPocEmail(e.target.value)}
                            placeholder="you@company.com"
                            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-orange-500 outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">CTA Redirect Link</label>
                        <input
                          type="url"
                          value={ctaLink}
                          onChange={(e) => setCtaLink(e.target.value)}
                          placeholder="https://mycompany.com/careers"
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-orange-500 outline-none"
                        />
                      </div>

                      {/* File uploads */}
                      <div className="space-y-3 pt-2">
                        {/* Banner Image */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                            {selectedPlan === 'plan1' ? 'Ad Banner (Square 1:1) *' : 'Startup Logo Image *'}
                          </label>
                          <div className="flex items-center gap-3">
                            <label className="flex items-center justify-center gap-1.5 px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-600 cursor-pointer transition-colors shrink-0">
                              <Upload className="w-3.5 h-3.5" />
                              <span>Upload File</span>
                              <input 
                                type="file" 
                                accept="image/*"
                                onChange={(e) => handleFileChange(e, 'banner')}
                                className="hidden" 
                              />
                            </label>
                            <span className="text-[11px] text-slate-500 truncate max-w-[120px]" title={bannerFileName || 'No file chosen'}>
                              {bannerFileName || 'No file chosen'}
                            </span>
                          </div>
                        </div>

                        {/* Payment Screenshot */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Payment Receipt Screenshot *</label>
                          <div className="flex items-center gap-3">
                            <label className="flex items-center justify-center gap-1.5 px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-600 cursor-pointer transition-colors shrink-0">
                              <Upload className="w-3.5 h-3.5" />
                              <span>Upload Proof</span>
                              <input 
                                type="file" 
                                accept="image/*"
                                onChange={(e) => handleFileChange(e, 'proof')}
                                className="hidden" 
                              />
                            </label>
                            <span className="text-[11px] text-slate-500 truncate max-w-[120px]" title={proofFileName || 'No file chosen'}>
                              {proofFileName || 'No file chosen'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmittingAd}
                          className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-50"
                        >
                          {isSubmittingAd ? 'Booking details...' : 'Submit Boost Request'}
                        </button>
                      </div>
                    </form>
                  </div>

                </div>
              )}
            </div>
          )}

        </div>

      </main>
    </div>
  );
};
