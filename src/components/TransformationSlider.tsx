import React, { useState, useRef } from "react";
import { ArrowLeftRight, ThumbsUp } from "lucide-react";

export default function TransformationSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  const currentHighlight = sliderPos < 35 
    ? "State-of-the-Art Clinical Rigor" 
    : sliderPos > 65 
      ? "Radiant, Confident Smile Outcome"
      : "Slide Left or Right to Compare Detail";

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden relative" id="transformations">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-logo-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <span className="text-logo-blue-200 font-display text-xs font-extrabold uppercase tracking-widest bg-logo-blue-500/10 px-3 py-1 rounded-full border border-logo-blue-500/20">
            Real Smile Transformations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-3">
            Interact With Our clinical Magic
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4">
            Drag the divider slider left and right to inspect the transition from a specialized surgical 
            dental care setting (Before) to a patient’s sparkling, relaxed new life-changing smile (After).
          </p>
        </div>

        {/* The Slider Sandbox Contain */}
        <div className="max-w-3xl mx-auto relative group">
          
          {/* Main Visual Arena */}
          <div 
            ref={containerRef}
            className="relative h-[250px] sm:h-[400px] w-full rounded-2xl overflow-hidden select-none border-4 border-slate-800 shadow-2xl bg-slate-950"
          >
            {/* BEFORE IMAGE (Full Background) */}
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH3z5n9s5aX9K1wwa-NpRlpi9ALy6AtIbxz_y4EFK5cEU0YrJd-Wfr26XMlsigNU3E8ZZGywEQf4YRSOOIpA1l8cKDp_RKh11PjH55SjwbcO4AutSIAdCGETd69KzoZnlwE--lZnpYevvaZyqLCrewvSnHi-aNU6T5EG39oegn_IlXZx0Gp0SW6O7ptoLbc6HsbXaO2qs4Ff3oMsnFw0llpKttiEZ4ezoNEvTCtKusmfWKnnOu1t_Js2rjsoa_ipUghAC-2otZvA" 
              alt="Advanced Surgical Clinical Setup Before Treatment" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 font-mono tracking-wider border border-slate-700/50 pointer-events-none">
              BEFORE: Clinical Planning
            </div>

            {/* AFTER IMAGE (Width Clipped Layer) */}
            <div 
              className="absolute inset-y-0 right-0 overflow-hidden pointer-events-none transition-all duration-75"
              style={{ left: `${sliderPos}%` }}
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPpUA9-u7Wo9ZofyjcQ-AhRn2COgq1gJS4CDC8S8cwmkB3vkfYcB8Dt6azVAR2BIrcp6f4CgAZGDns36lJzI7yoToDc5aSx-3bRHJS0aStfp3iJUo-U1pV9pe0HqIUJDolJfPCsqnyD2yRjfNgtvktL0F2EeJ3eFhPA9UCvHFDas7XX4i244STPdnVEy7Q52frwAha7wSLpTPfjWBMT3J1ZlnfO7Dgq92Oyprjty7HgxKCI4aYNwg-zOB6KJppuOoAeUx2tpnLqA" 
                alt="Radiant confident smile outcome" 
                className="absolute inset-y-0 right-0 h-full object-cover pointer-events-none max-w-none"
                style={{ width: containerRef.current?.getBoundingClientRect().width || 768 }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-logo-orange-600/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white font-mono tracking-wider border border-logo-orange-500/50 pointer-events-none">
                AFTER: Confident Smile
              </div>
            </div>

            {/* Dynamic Sliding Line Divider */}
            <div 
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-lg pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-logo-blue-500 border-2 border-white shadow-xl flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-200">
                <ArrowLeftRight className="w-4.5 h-4.5" />
              </div>
            </div>

          </div>

          {/* Actual Invisible Range Input Overlay */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPos}
            onChange={handleSliderChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            aria-label="Smile transformation dragging slider"
            id="transformation-slider"
          />

          {/* Dynamic Helper Info bar */}
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-2 font-mono">
            <span>Swipe slider above to discover changes</span>
            <span className="text-logo-blue-200 font-bold flex items-center gap-1">
              <ThumbsUp className="w-3.5 h-3.5 animate-pulse" />
              {currentHighlight}
            </span>
            <span>Drag progress: {sliderPos}%</span>
          </div>

        </div>

        {/* Benefits of our transformation process */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
          {[
            { title: "Personalized Mapping", desc: "No cookie-cutter smiles. We align ratios matching your unique facial architecture." },
            { title: "Durable Prosthetics", desc: "We deploy premium materials like solid Zirconia and E-max that resist wear for decades." },
            { title: "Micro-disseminated Pain Control", desc: "Our specialists use vibration-assisted anesthetic delivery, ensuring painless steps." }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-800 p-5 rounded-xl">
              <div className="w-7 h-7 rounded-lg bg-logo-blue-500/10 text-logo-blue-200 flex items-center justify-center font-bold text-xs mb-3 font-mono">
                0{idx + 1}
              </div>
              <h4 className="text-sm font-bold text-slate-100 mb-1.5">{item.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
