import React from "react";
import { ShieldCheck, Award, HeartHandshake, ArrowRight, Star, Sparkles } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
  onServicesClick: () => void;
  onAiClick: () => void;
}

export default function Hero({ onBookClick, onServicesClick, onAiClick }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-logo-blue-50 to-logo-orange-50 py-12 md:py-20 lg:py-24">
      {/* Abstract Background Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-logo-blue-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-logo-orange-200/25 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Copy Column */}
        <div className="lg:col-span-8 flex flex-col items-start space-y-6 text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-logo-blue-100/70 text-logo-blue-700 text-xs font-bold font-mono tracking-wide border border-logo-blue-200/40">
            <Sparkles className="w-3.5 h-3.5 text-logo-orange-600 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Noida's Premier Advanced Dental Hub</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Transforming <span className="text-logo-blue-600 relative inline-block">Smiles<span className="absolute bottom-1.5 left-0 w-full h-2 bg-logo-orange-100 -z-10"></span></span> <br />
            With Ultimate Confidence
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Experience painless, ultra-modern dental care at Demystifying Smiles in Sector 53, Noida. 
            From expert dental implants to invisible aligners and complete smile design makeovers, we blend 
            unmatched scientific expertise with warm, clinical care.
          </p>

          {/* Quick core values/assurances */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl pt-2">
            {[
              { icon: ShieldCheck, text: "Strict Global Hygiene Protocols" },
              { icon: Award, text: "Elite Certified Specialists" },
              { icon: HeartHandshake, text: "Fully Painless Techniques" }
            ].map((v, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-slate-100 flex-1">
                <v.icon className="w-4 h-4 text-logo-orange-600 shrink-0" />
                <span>{v.text}</span>
              </div>
            ))}
          </div>

          {/* Buttons and call to action triggers */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-3">
            <button
              onClick={onBookClick}
              className="bg-logo-orange-500 hover:bg-logo-orange-600 active:scale-98 text-white font-display text-base font-bold py-4 px-8 rounded-xl shadow-xl shadow-logo-orange-500/20 hover:shadow-logo-orange-500/35 transition-all duration-200 text-center flex items-center justify-center gap-2 group cursor-pointer"
              id="hero-book-btn"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onServicesClick}
              className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 font-display text-base font-bold py-4 px-8 rounded-xl shadow-sm transition-all text-center cursor-pointer"
              id="hero-services-btn"
            >
              Our Treatments
            </button>
            <button
              onClick={onAiClick}
              className="bg-slate-900 hover:bg-slate-800 text-logo-orange-200 font-display text-xs font-bold px-4 py-3 sm:py-0 rounded-xl flex items-center justify-center gap-1.5 border border-slate-800 shadow-sm"
              id="hero-ai-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-logo-blue-500" />
              <span>Ask AI Dental Advisor</span>
            </button>
          </div>

          {/* Trust rating badge */}
          <div className="flex items-center gap-3.5 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-700">
                  {i === 4 ? "+10k" : `P${i}`}
                </div>
              ))}
            </div>
            <div className="text-left text-xs text-slate-500">
              <div className="flex items-center gap-0.5 text-logo-orange-500 font-bold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-slate-800 ml-1 font-mono">4.9/5 Rating</span>
              </div>
              <span>Trusted by 10,000+ happy patient smiles</span>
            </div>
          </div>

        </div>

        {/* Right Photo Column */}
        <div className="lg:col-span-4 relative flex justify-center items-center">
          <div className="relative w-full max-w-xs sm:max-w-sm">
            
            {/* Visual Frame Backing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-logo-blue-500 to-logo-orange-500 rounded-[2rem] transform rotate-3 scale-98 shadow-2xl -z-10 blur-sm opacity-90"></div>
            
            {/* Real Hotlinked Dental Patient Picture */}
            <div className="overflow-hidden rounded-[2rem] border-4 border-white bg-slate-100 aspect-[3/4] object-cover shadow-xl max-w-full">
              <img 
                src="https://img.freepik.com/free-photo/close-up-perfect-smile_1149-1021.jpg?semt=ais_hybrid?w=1200" 
                alt="Expert caring dentistry at Demystifying Smiles" 
                className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Float Element: Smile Design badge */}
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-2.5 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-8 h-8 rounded-full bg-logo-orange-50 flex items-center justify-center text-logo-orange-600">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <strong className="block text-[11px] text-slate-900">Advanced Smile Makeover</strong>
                <span className="block text-[9px] text-slate-500">100% Customized Aesthetic Planning</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
