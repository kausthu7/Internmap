import React, { useState } from 'react';
import { ArrowLeft, Upload, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AdvertisePageProps {
  onBack: () => void;
}

export const AdvertisePage: React.FC<AdvertisePageProps> = ({ onBack }) => {
  const { t } = useLanguage();

  // Plan State
  const [selectedPlan, setSelectedPlan] = useState<'plan1' | 'plan2'>('plan1');

  // Form Fields State
  const [companyName, setCompanyName] = useState('');
  const [pocName, setPocName] = useState('');
  const [pocEmail, setPocEmail] = useState('');
  const [ctaLink, setCtaLink] = useState('');

  // Uploads Base64 Strings
  const [bannerBase64, setBannerBase64] = useState('');
  const [bannerFileName, setBannerFileName] = useState('');
  const [proofBase64, setProofBase64] = useState('');
  const [proofFileName, setProofFileName] = useState('');

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // File Upload Handlers (convert file to base64 for FormSubmit ajax)
  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBannerFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setBannerBase64(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProofUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProofFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setProofBase64(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !pocName.trim() || !pocEmail.trim()) {
      alert("Please fill in all contact details.");
      return;
    }
    if (!bannerBase64) {
      alert("Please upload your ad banner.");
      return;
    }
    if (!proofBase64) {
      alert("Please upload your payment proof screenshot.");
      return;
    }
    if (!isConfirmed) {
      alert("Please confirm you are authorized to advertise this company.");
      return;
    }

    setIsSubmitting(true);

    const emailPayload = {
      _subject: `New Advertising Request: ${companyName.trim()}`,
      selectedPlan: selectedPlan === 'plan1' ? 'Plan 1: Sponsor Tile (10 €)' : 'Plan 2: Map Pin Boost (30 €)',
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
        setSubmittedSuccess(true);
      } else {
        alert('Failed to submit. Please try again or contact support.');
      }
    } catch (e) {
      console.error('Error submitting advertisement', e);
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedSuccess) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans p-4 sm:p-6 overflow-y-auto flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-xl p-6 sm:p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 text-emerald-500 mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 mb-3">Submission Success!</h1>
          <p className="text-slate-600 text-sm font-medium mb-6 leading-relaxed">
            Your advertising details and payment screenshot have been submitted successfully. I will review and deploy them to the map within 12 hours.
          </p>
          <button
            onClick={onBack}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl transition-all cursor-pointer shadow-sm text-sm"
          >
            Back to Map
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans p-3 sm:p-6 overflow-y-auto flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl shadow-sm p-4 sm:p-8 mt-4 sm:mt-10">
        
        <button 
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-sm mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('advertise.back')}
        </button>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">{t('advertise.title')}</h1>
        <p className="text-slate-600 text-sm sm:text-base font-medium mb-8">
          {t('advertise.subtitle')}
        </p>

        {/* Plan Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Plan 1: Sponsor Bar Flash Tile */}
          <button
            type="button"
            onClick={() => setSelectedPlan('plan1')}
            className={`w-full text-left rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs transition-all border-2 cursor-pointer ${
              selectedPlan === 'plan1'
                ? 'bg-indigo-50/70 border-indigo-600 ring-2 ring-indigo-600/20'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-indigo-900 font-bold text-[11px] uppercase tracking-wider">{t('advertise.plan1.title')}</span>
                <span className="bg-indigo-100 text-indigo-800 text-[10px] px-2 py-0.5 rounded-full font-bold">{t('advertise.plan1.duration')}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{t('advertise.plan1.price')}</h3>
              <p className="text-xs text-slate-600 font-medium mb-4 leading-relaxed">
                {t('advertise.plan1.desc')}
              </p>
              <ul className="text-[11px] text-slate-600 space-y-2 font-semibold">
                <li className="flex gap-1.5"><span className="text-indigo-500">•</span> {t('advertise.plan1.bullet1')}</li>
                <li className="flex gap-1.5"><span className="text-indigo-500">•</span> {t('advertise.plan1.bullet2')}</li>
                <li className="flex gap-1.5"><span className="text-indigo-500">•</span> {t('advertise.plan1.bullet3')}</li>
              </ul>
            </div>
            {selectedPlan === 'plan1' && (
              <div className="mt-4 flex items-center justify-end text-xs font-bold text-indigo-600 gap-1">
                <CheckCircle2 className="w-4 h-4" /> Selected
              </div>
            )}
          </button>

          {/* Plan 2: Map Pin Boost */}
          <button
            type="button"
            onClick={() => setSelectedPlan('plan2')}
            className={`w-full text-left rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs transition-all border-2 cursor-pointer ${
              selectedPlan === 'plan2'
                ? 'bg-orange-50/70 border-orange-600 ring-2 ring-orange-600/20'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-orange-950 font-bold text-[11px] uppercase tracking-wider">{t('advertise.plan2.title')}</span>
                <span className="bg-orange-100 text-orange-800 text-[10px] px-2 py-0.5 rounded-full font-bold">{t('advertise.plan2.duration')}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{t('advertise.plan2.price')}</h3>
              <p className="text-xs text-slate-600 font-medium mb-4 leading-relaxed">
                {t('advertise.plan2.desc')}
              </p>
              <ul className="text-[11px] text-slate-600 space-y-2 font-semibold">
                <li className="flex gap-1.5"><span className="text-orange-500">•</span> {t('advertise.plan2.bullet1')}</li>
                <li className="flex gap-1.5"><span className="text-orange-500">•</span> {t('advertise.plan2.bullet2')}</li>
                <li className="flex gap-1.5"><span className="text-orange-500">•</span> {t('advertise.plan2.bullet3')}</li>
              </ul>
            </div>
            {selectedPlan === 'plan2' && (
              <div className="mt-4 flex items-center justify-end text-xs font-bold text-orange-600 gap-1">
                <CheckCircle2 className="w-4 h-4" /> Selected
              </div>
            )}
          </button>
        </div>
        <p className="text-xs text-slate-400 mb-8 italic text-center">
          {t('advertise.plan.note')}
        </p>

        {/* Section 1 */}
        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-5 border-b border-slate-100 pb-2">{t('advertise.step1.title')}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">{t('advertise.step1.company')}</label>
              <input 
                type="text" 
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-indigo-500 transition-colors shadow-sm" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">{t('advertise.step1.poc')}</label>
              <input 
                type="text" 
                value={pocName}
                onChange={(e) => setPocName(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-indigo-500 transition-colors shadow-sm" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">{t('advertise.step1.email')}</label>
              <input 
                type="email" 
                value={pocEmail}
                onChange={(e) => setPocEmail(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-indigo-500 transition-colors shadow-sm" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">{t('advertise.step1.link')}</label>
              <input 
                type="url" 
                placeholder="https://" 
                value={ctaLink}
                onChange={(e) => setCtaLink(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-indigo-500 transition-colors shadow-sm" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">{t('advertise.step1.banner')}</label>
              <p className="text-xs text-slate-500 mb-2">{t('advertise.step1.bannerHint')}</p>
              <label className="border-2 border-dashed border-slate-200 rounded-xl p-6 bg-slate-50 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors">
                <Upload className="w-6 h-6 text-slate-400 mb-2" />
                <span className="text-sm font-semibold text-indigo-600 break-all px-2 block text-center max-w-full">
                  {bannerFileName ? bannerFileName : t('advertise.step1.upload')}
                </span>
                <span className="text-xs text-slate-400 mt-1">{t('advertise.step1.drag')}</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleBannerUpload}
                  className="hidden" 
                />
              </label>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-5 border-b border-slate-100 pb-2">
            2 · {selectedPlan === 'plan1' ? 'Pay 10 € via Revolut / IBAN' : 'Pay 30 € via Revolut / IBAN'}
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* QR Code Card */}
            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-xs">
              <div className="w-40 h-40 bg-white rounded-xl shadow-xs flex items-center justify-center border border-slate-200 overflow-hidden mb-3">
                <img src="/revolut-qr.jpg" alt="Revolut QR Code" className="w-full h-full object-contain p-2" />
              </div>
              <p className="text-xs font-bold text-slate-800">{t('advertise.step2.revolutTitle')}</p>
              <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">{t('advertise.step2.revolutScan')}</p>
            </div>

            {/* Bank Transfer Details Card */}
            <div className="flex-[1.5] bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-xs">
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-4">{t('advertise.step2.bankTitle')}</h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5 gap-2">
                  <span className="text-slate-500 font-medium shrink-0">{t('advertise.step2.beneficiary')}</span>
                  <span className="font-bold text-slate-800 select-all truncate text-right">Kausthub Rajan</span>
                </div>
                <div className="flex flex-col border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500 font-medium mb-0.5">{t('advertise.step2.iban')}</span>
                  <span className="font-mono font-bold text-slate-800 text-[10px] sm:text-[11px] select-all tracking-wide break-all">FR76 2823 3000 0184 2676 9367 421</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5 gap-2">
                  <span className="text-slate-500 font-medium shrink-0">{t('advertise.step2.bic')}</span>
                  <span className="font-mono font-bold text-slate-800 select-all">REVOFRP2</span>
                </div>
                <div className="flex flex-col border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500 font-medium mb-0.5">{t('advertise.step2.bankName')}</span>
                  <span className="font-bold text-slate-800 leading-tight">
                    Revolut Bank UAB<br />
                    10 avenue Kléber, 75116, Paris, France
                  </span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-slate-500 font-medium shrink-0">{t('advertise.step2.correspondentBic')}</span>
                  <span className="font-mono font-bold text-slate-800 select-all">CHASDEFX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-5 border-b border-slate-100 pb-2">{t('advertise.step3.title')}</h2>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">{t('advertise.step3.screenshot')}</label>
            <p className="text-xs text-slate-500 mb-2">{t('advertise.step3.screenshotHint')}</p>
            <label className="border-2 border-dashed border-slate-200 rounded-xl p-6 bg-slate-50 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors">
              <Upload className="w-6 h-6 text-slate-400 mb-2" />
              <span className="text-sm font-semibold text-indigo-600 break-all px-2 block text-center max-w-full">
                {proofFileName ? proofFileName : t('advertise.step3.upload')}
              </span>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleProofUpload}
                className="hidden" 
              />
            </label>
          </div>
        </div>

        {/* Confirmation & Submit */}
        <div className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200">
          <label className="flex items-start gap-3 cursor-pointer mb-6">
            <input 
              type="checkbox" 
              checked={isConfirmed}
              onChange={(e) => setIsConfirmed(e.target.checked)}
              className="mt-1 w-4 h-4 text-indigo-600 rounded border-slate-300 cursor-pointer shrink-0" 
              required
            />
            <span className="text-xs sm:text-sm font-medium text-slate-700 leading-tight">
              {t('advertise.confirm')}
            </span>
          </label>
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <CheckCircle2 className="w-5 h-5" />
            {isSubmitting ? 'Submitting...' : t('advertise.submit')}
          </button>
          
          <p className="text-center text-xs font-semibold text-slate-500 mt-4">
            {t('advertise.reviewNote')}
          </p>
        </div>

      </form>
    </div>
  );
};
