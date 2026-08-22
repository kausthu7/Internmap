import React, { useState } from 'react';
import {
  X,
  Plus,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Startup, Sector, StartupStage, StartupType } from '../types';
import { PARIS_AREAS, STARTUP_SECTORS, STARTUP_STAGES, STARTUP_TYPES } from '../data/startups';

interface SubmitStartupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newStartup: Startup) => void;
  isAdminMode?: boolean;
}

// Approximate arrondissement center coordinates in Paris
const AREA_COORDINATES: Record<string, [number, number]> = {
  '1st arrondissement (Louvre / Palais-Royal)': [48.8606, 2.3376],
  '2nd arrondissement (Sentier / Bourse)': [48.8682, 2.3428],
  '3rd arrondissement (Haut Marais)': [48.8637, 2.3615],
  '4th arrondissement (Le Marais / Île Saint-Louis)': [48.8543, 2.3576],
  '5th arrondissement (Quartier Latin)': [48.8449, 2.3498],
  '8th arrondissement (Champs-Élysées / Madeleine)': [48.8744, 2.3106],
  '9th arrondissement (Opera / Silicon Sentier)': [48.8762, 2.3372],
  '10th arrondissement (Canal Saint-Martin)': [48.8738, 2.3621],
  '11th arrondissement (Oberkampf / Bastille)': [48.8592, 2.3783],
  '12th arrondissement (Gare de Lyon)': [48.8412, 2.3876],
  '13th arrondissement (Station F / Freyssinet)': [48.8351, 2.3705],
  '15th arrondissement (Front de Seine)': [48.8411, 2.2982],
  '16th arrondissement (Passy / Trocadéro)': [48.8604, 2.2682],
  '17th arrondissement (Batignolles / Villiers)': [48.8872, 2.3082],
  '19th arrondissement (Canal de l’Ourcq)': [48.8867, 2.3812],
  'La Défense / West Hub': [48.8924, 2.2372],
};

export const SubmitStartupModal: React.FC<SubmitStartupModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isAdminMode = false,
}) => {
  const [name, setName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [sector, setSector] = useState<Sector>('AI & DeepTech');
  const [type, setType] = useState<StartupType>('Early Stage');
  const [stage, setStage] = useState<StartupStage>('Seed');
  const [area, setArea] = useState<string>('2nd arrondissement (Sentier / Bourse)');
  const [address, setAddress] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [careersUrl, setCareersUrl] = useState('');
  const [fundingDisplay, setFundingDisplay] = useState('€2M (Seed)');
  const [headcount, setHeadcount] = useState('10-25');
  const [hiringNow, setHiringNow] = useState(true);
  const [activeJobsCount, setActiveJobsCount] = useState(3);
  const [foundersInput, setFoundersInput] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [techStackInput, setTechStackInput] = useState('');
  const [brandColor, setBrandColor] = useState('#2E6F40');
  const [customLogoUrl, setCustomLogoUrl] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [isBoosted, setIsBoosted] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contactEmail.trim()) return;
    if (isAdminMode && !tagline.trim()) return;

    // Pick coordinates with slight random jitter to prevent exact overlap
    const baseCoords = AREA_COORDINATES[area] || [48.8566, 2.3522];
    const jitterLat = (Math.random() - 0.5) * 0.006;
    const jitterLng = (Math.random() - 0.5) * 0.006;
    const finalCoords: [number, number] = [
      Number((baseCoords[0] + jitterLat).toFixed(5)),
      Number((baseCoords[1] + jitterLng).toFixed(5)),
    ];

    const foundersList = foundersInput
      ? foundersInput.split(',').map((f) => ({
          name: f.trim(),
          role: 'Co-founder',
        }))
      : [{ name: 'Founder & Team', role: 'Founding Team' }];

    const tagsList = tagsInput
      ? tagsInput.split(',').map((t) => t.trim()).filter(Boolean)
      : [sector, stage];

    const techList = techStackInput
      ? techStackInput.split(',').map((t) => t.trim()).filter(Boolean)
      : ['TypeScript', 'React', 'Python'];

    const newStartup: Startup = {
      id: `custom-${Date.now()}-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      slug: name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      name: name.trim(),
      tagline: tagline.trim(),
      description: description.trim() || tagline.trim(),
      sector,
      type,
      stage,
      area,
      address: address.trim() || `Paris, ${area}`,
      coordinates: finalCoords,
      foundedYear: new Date().getFullYear(),
      fundingTotalEurM: 2,
      fundingDisplay: fundingDisplay.trim() || 'Undisclosed',
      headcount,
      hiringNow,
      activeJobsCount: hiringNow ? Number(activeJobsCount) || 1 : 0,
      websiteUrl: websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl || 'example.com'}`,
      careersUrl: careersUrl.startsWith('http') ? careersUrl : `https://${careersUrl || websiteUrl || 'example.com/careers'}`,
      customLogoUrl: customLogoUrl.trim() || undefined,
      brandColor,
      tags: tagsList,
      techStack: techList,
      founders: foundersList,
      isCommunitySubmitted: true,
      dateAdded: new Date().toISOString(),
      isBoosted: isBoosted,
      jobs: hiringNow
        ? [
            {
              title: 'Founding Engineer / Fullstack Developer',
              department: 'Engineering',
              location: 'Paris HQ',
              type: 'Full-time',
            },
          ]
        : [],
    };

    // If Admin: Add directly to map, no email.
    // If Public: Send email to admin for review, do not add to map directly.
    
    if (isAdminMode) {
      onSubmit(newStartup);
    } else {
      // Prepare email content
      const emailPayload = {
        _subject: `New Startup Submission: ${name.trim()}`,
        startupName: name.trim(),
        email: contactEmail.trim(), // 'email' key automatically sets the Reply-To header in FormSubmit
        exactLocation: address.trim(),
        websiteUrl,
        sector,
        tagline: tagline.trim(),
        area,
        fundingDisplay,
        headcount,
        careersUrl,
        hiringNow: hiringNow ? 'Yes' : 'No',
        requestedBoost: isBoosted ? 'Yes (50 € Package)' : 'No',
        foundersInput,
        tagsInput
      };

      try {
        await fetch("https://formsubmit.co/ajax/snhubinternational@gmail.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(emailPayload)
        });
      } catch (e) {
        console.error("Failed to submit form", e);
      }
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2E6F40', '#0f172a', '#ffffff', '#10B981'],
      });
    } catch (err) {
      // ignore
    }

    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      id="submit-startup-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="submit-startup-modal"
        className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold shadow-2xs">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                {isAdminMode ? 'Admin: Add Startup to Map' : 'Submit a Parisian Startup'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {isAdminMode 
                  ? 'This will bypass verification and instantly pin it to the map.' 
                  : 'Submit your venture. We will review and verify it before pinning to the map.'}
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

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          {submittedSuccess ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-bold text-slate-900">
                {isAdminMode ? 'Startup Instantly Added!' : 'Submission Received!'}
              </h4>
              <p className="text-xs text-slate-500">
                {isAdminMode 
                  ? `${name} is now pinned to the interactive Paris map.` 
                  : `Your details have been sent to the admins. We will email you for verification soon!`}
              </p>
            </div>
          ) : (
            <>
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Startup Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Acme AI Paris"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Contact Email ID *
                  </label>
                  <input
                    required
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="you@startup.com"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Exact Location (Address) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Exact Location / Address *
                </label>
                <input
                  required={!isAdminMode}
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 15 Rue de la Paix, 75002 Paris"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                />
              </div>

              {/* Website URL & Sector (Always shown) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Website URL
                  </label>
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://mycompany.com"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Sector
                  </label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value as Sector)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 outline-none cursor-pointer"
                  >
                    {STARTUP_SECTORS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {isAdminMode && (
                <>
                  {/* Brand Color */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Brand Color
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={brandColor}
                        onChange={(e) => setBrandColor(e.target.value)}
                        className="w-10 h-8 p-0.5 rounded border border-slate-200 cursor-pointer bg-white"
                      />
                      <input
                        type="text"
                        value={brandColor}
                        onChange={(e) => setBrandColor(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs text-slate-700 font-mono"
                      />
                    </div>
                  </div>

                  {/* Custom Logo URL */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Logo Image (URL or Upload)
                    </label>
                    <div className="flex gap-2 items-center flex-wrap sm:flex-nowrap">
                      <input
                        type="url"
                        value={customLogoUrl.length > 200 ? 'Uploaded file...' : customLogoUrl}
                        onChange={(e) => setCustomLogoUrl(e.target.value)}
                        placeholder="https://example.com/logo.png"
                        className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all min-w-[200px]"
                      />
                      <span className="text-xs text-slate-500 font-bold shrink-0">OR</span>
                      <label className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded cursor-pointer transition-colors border border-slate-200 whitespace-nowrap shrink-0">
                        Upload File
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileUpload}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Tagline */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Tagline (One-sentence pitch) *
                    </label>
                    <input
                      required={isAdminMode}
                      type="text"
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                      placeholder="e.g. Next-generation AI agents for European legal and compliance teams"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                    />
                  </div>

                  {/* Paris Arrondissement / Area */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Paris Arrondissement / Area
                    </label>
                    <select
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 outline-none cursor-pointer"
                    >
                      {PARIS_AREAS.filter((a) => a !== 'All areas').map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>

              {/* Row 3: Stage & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Stage
                  </label>
                  <select
                    value={stage}
                    onChange={(e) => setStage(e.target.value as StartupStage)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 outline-none cursor-pointer"
                  >
                    {STARTUP_STAGES.map((stg) => (
                      <option key={stg} value={stg}>
                        {stg}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Company Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as StartupType)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 outline-none cursor-pointer"
                  >
                    {STARTUP_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Funding & Team Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Funding (e.g. €3.5M Seed, Bootstrapped)
                  </label>
                  <input
                    type="text"
                    value={fundingDisplay}
                    onChange={(e) => setFundingDisplay(e.target.value)}
                    placeholder="€2M (Seed)"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Headcount (Team Size)
                  </label>
                  <input
                    type="text"
                    value={headcount}
                    onChange={(e) => setHeadcount(e.target.value)}
                    placeholder="10-25"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Website URL
                  </label>
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://mycompany.com"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Careers / Jobs URL
                  </label>
                  <input
                    type="text"
                    value={careersUrl}
                    onChange={(e) => setCareersUrl(e.target.value)}
                    placeholder="https://mycompany.com/careers"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 outline-none"
                  />
                </div>
              </div>

              {/* Hiring Toggle & Job Count */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="hiring-toggle-checkbox"
                    checked={hiringNow}
                    onChange={(e) => setHiringNow(e.target.checked)}
                    className="w-4 h-4 text-indigo-600 rounded cursor-pointer accent-[#4f46e5]"
                  />
                  <label htmlFor="hiring-toggle-checkbox" className="text-xs font-bold text-slate-800 cursor-pointer">
                    Currently hiring in Paris?
                  </label>
                </div>

                {hiringNow && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-medium">Open Positions:</span>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={activeJobsCount}
                      onChange={(e) => setActiveJobsCount(Number(e.target.value))}
                      className="w-16 px-2 py-1 bg-white border border-slate-200 rounded text-xs font-bold text-slate-900 text-center"
                    />
                  </div>
                )}
              </div>

              {/* Boost Toggle */}
              <div className="p-3 bg-orange-50/50 rounded-lg border border-orange-200 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="boost-toggle-checkbox"
                      checked={isBoosted}
                      onChange={(e) => setIsBoosted(e.target.checked)}
                      className="w-4 h-4 text-orange-600 rounded cursor-pointer accent-[#ff5a1f]"
                    />
                    <label htmlFor="boost-toggle-checkbox" className="text-xs font-bold text-orange-950 cursor-pointer flex items-center gap-1.5">
                      <span>Upgrade to Map Pin Boost ⚡</span>
                      {!isAdminMode && <span className="bg-orange-100 text-orange-800 text-[9px] px-1.5 py-0.5 rounded font-bold">50 €</span>}
                    </label>
                  </div>
                </div>
                <p className="text-[10px] text-orange-800 leading-relaxed font-semibold pl-6">
                  {isAdminMode 
                    ? "Highlights the pin on the map: 2× size, orange pulsing glow, and stays unclustered."
                    : "Make your pin stand out! 2× size with an orange highlight and pulsing glow. Stays full-size at every zoom level for 7 days."
                  }
                </p>
              </div>

              {/* Founders & Tags */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Founders (comma separated)
                </label>
                <input
                  type="text"
                  value={foundersInput}
                  onChange={(e) => setFoundersInput(e.target.value)}
                  placeholder="Arthur Mensch, Guillaume Lample..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Tags & Tech Stack (comma separated)
                </label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="Generative AI, PyTorch, React, Rust, B2B SaaS..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm text-slate-900 outline-none"
                />
              </div>

                </>
              )}

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                >
                  {isAdminMode ? 'Add to Map' : 'Submit for Verification'}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

