import React from 'react';
import { Briefcase, Building2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface RoleSelectionScreenProps {
  onSelectRole: (role: 'jobseeker' | 'startup') => void;
}

export const RoleSelectionScreen: React.FC<RoleSelectionScreenProps> = ({ onSelectRole }) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-[#121e15] via-[#1b2e21] to-[#253D2C] text-white p-6 relative overflow-hidden">
      
      {/* Background decoration elements */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#2E6F40]/10 blur-[120px] -top-40 -left-40 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#68BA7F]/10 blur-[150px] -bottom-40 -right-40 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-4xl flex flex-col items-center z-10 text-center">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <div className="flex items-center justify-center bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shadow-lg">
            <svg
              width="36"
              height="40"
              viewBox="0 0 32 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="16" cy="32" rx="7" ry="1.8" stroke="#68BA7F" strokeWidth="1.8" />
              <path d="M 16 3 C 10 3 6 7 6 13 C 6 18.5 11 23.2 16 28.5 C 21 23.2 26 18.5 26 13 C 26 7 22 3 16 3 Z" stroke="#68BA7F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 16 6 L 15 12 H 17 Z M 14.5 12 H 17.5 V 13.5 H 14.5 Z M 14 13.5 L 13.5 17.5 H 18.5 L 18 13.5 Z M 13 17.5 H 19 V 19 H 13 Z M 12.5 19 L 11.5 24 H 13.5 A 2.5 2.5 0 0 1 18.5 24 H 20.5 L 19.5 19 Z" fill="#68BA7F" />
              <circle cx="16" cy="24" r="1.2" fill="#68BA7F" />
            </svg>
          </div>
          <div className="text-left">
            <h1 className="text-4xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-[#68BA7F] bg-clip-text text-transparent">
              Internmap
            </h1>
            <p className="text-xs uppercase tracking-widest text-[#68BA7F] font-bold mt-1">
              Discover Paris & Beyond
            </p>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-2 max-w-2xl px-4">
          Welcome! Who are you?
        </h2>
        <p className="text-sm text-slate-400 mb-12 max-w-md px-4">
          Select an option below to enter the platform customized for your needs.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl px-4">
          
          {/* Card 1: Jobseeker */}
          <div 
            onClick={() => onSelectRole('jobseeker')}
            className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-[#68BA7F]/40 hover:bg-white/8 transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between items-center text-center overflow-hidden hover:-translate-y-1.5"
          >
            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#68BA7F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors">
                I am a Jobseeker
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs mb-8">
                Explore tech internships and job opportunities across Parisian startups on an interactive map. Filter by tech stack, funding, size, and location.
              </p>
            </div>
            
            <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600/20 group-hover:bg-emerald-600 border border-emerald-500/40 text-emerald-300 group-hover:text-white rounded-xl text-xs font-bold transition-all duration-300">
              <span>Find Opportunities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 2: Startup */}
          <div 
            onClick={() => onSelectRole('startup')}
            className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-indigo-400/40 hover:bg-white/8 transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between items-center text-center overflow-hidden hover:-translate-y-1.5"
          >
            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E6F40]/30 to-[#68BA7F]/20 border border-[#68BA7F]/30 flex items-center justify-center mb-6 text-[#68BA7F] group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-[#68BA7F] transition-colors">
                I am a Startup
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs mb-8">
                List your company, add active internship listings, and discover ad placements like sponsor banners or pulsing map pins to recruit top talent.
              </p>
            </div>
            
            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#2E6F40]/30 group-hover:bg-[#2E6F40] border border-[#68BA7F]/40 text-[#68BA7F] group-hover:text-white rounded-xl text-xs font-bold transition-all duration-300">
              <span>Enter Startup Portal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
