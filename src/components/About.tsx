import React from "react";
import { Sparkles, HeartPulse, ShieldCheck, Microscope } from "lucide-react";

export default function About() {
  const stats = [
    { value: "15+", label: "Years Experience", desc: "Expert multidisciplinary dental practice in Noida" },
    { value: "10,000+", label: "Happy Patients", desc: "Smiles restored across Delhi, Noida, and NCR" },
    { value: "25+", label: "Super Specialists", desc: "Oral surgeons, implantologists, orthodontists" },
    { value: "4.9/5", label: "Google Rating", desc: "Consistently recognized for painless care" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-logo-blue-700 font-display text-xs font-extrabold uppercase tracking-widest bg-logo-blue-50 px-3 py-1 rounded-full border border-logo-blue-100">
            About Demystifying Smiles
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-3">
            Creating Healthy, Beautiful & <br />Radiant Smiles for Noida
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            Demystifying Smiles is a leading, multi-specialty dental clinic in Sector 53, Noida, 
            committed to delivering cutting-edge and painless diagnostics & treatment in a highly hygienic, sterile environment.
          </p>
        </div>

        {/* Content Split: Description + Clinic Interior Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Text content details */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="font-display text-2xl font-bold text-slate-800">
              Welcome to Your Trusted Neighborhood Dental Home
            </h3>
            
            <p className="text-slate-600 font-normal leading-relaxed text-sm sm:text-base">
              At **Demystifying Smiles**, we believe dentistry should be welcoming and completely clear. 
              Our mission is to "demystify" complex procedures, ensuring you understand every phase of your 
              cosmetic makeover, RCT, or dental implants. 
            </p>

            <p className="text-slate-600 font-normal leading-relaxed text-sm sm:text-base">
              Conveniently located in Sector 53, Noida, our world-class clinic is fully integrated with 
              high-resolution intra-oral cameras, zero-radiation digital imaging, and high-frequency sterilization systems. 
              We operate under the strictest international guidelines to keep your safety absolute.
            </p>

            <div className="border-l-4 border-logo-orange-600 pl-4 py-1.5 italic text-slate-700 bg-slate-50/50 rounded-r-lg font-medium text-sm sm:text-base">
              "We take the anxiety out of dental checkups by tailoring treatments with premium patient comfort as our premier benchmark."
            </div>

            {/* Icons listing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-logo-blue-50 flex items-center justify-center text-logo-blue-600 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">100% Sterile Environment</h4>
                  <p className="text-xs text-slate-500">ISO-certified multi-stage disinfection</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-logo-orange-50 flex items-center justify-center text-logo-orange-600 shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Gentle & Pain-free Practice</h4>
                  <p className="text-xs text-slate-500">Specially formulated local anesthesia methods</p>
                </div>
              </div>
            </div>

          </div>

          {/* Photo frame with reception image */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-lg mx-auto">
              
              {/* Backing decorative shapes */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-logo-blue-500/10 rounded-3xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-logo-orange-600/5 rounded-full -z-10 blur-xl"></div>

              {/* Clinic Interior Reception Image */}
              <div className="overflow-hidden rounded-[2rem] border-4 border-white bg-slate-200 aspect-[16/11] object-cover shadow-xl">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU1F87l_jZqa1ebxM4d_kCc3CgRgzVTvk6OSysxol-2bY0TmbD72ezvfcyswLtZ0_72OE6ROl1ID-5yNzxs6A1frtcih3nzmMJfAw6Vx5FdRnh0y6swnr321J7GyyFdrAVunIEDvSzqsyYX60vFJb5s4_U9b8VaJ36g0HGJH5vkXPQYN1g9QasaQymKyJnq82Su_TnBxGHHiteubViuHO8Jiw5T-FCZfv49aPGb8i8zyEs9rAmQeBjjZj-fCghvPw-G6n1kV8Feg" 
                  alt="Hygienic reception and lobby of Demystifying Smiles Dental Clinic Noida" 
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Stat element */}
              <div className="absolute -bottom-6 left-6 bg-slate-900 border border-slate-800 text-slate-100 p-5 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-logo-blue-500/10 flex items-center justify-center text-logo-blue-500">
                  <Microscope className="w-6 h-6 animate-pulse" />
                </div>
                <div className="text-left">
                  <span className="block text-xl font-extrabold text-white">Ultra-Modern</span>
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-[#94a3b8]">Laser-Assisted Diagnostics</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Beautiful statistics Bento-grid cards wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {stats.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-b from-[#fffaf4] to-[#f2f8ff] p-6 rounded-2xl border border-slate-100/80 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group"
              id={`stat-card-${idx}`}
            >
              <div className="font-display text-4xl font-extrabold text-logo-blue-700 mb-2 group-hover:scale-105 transition-transform">
                {item.value}
              </div>
              <h4 className="text-slate-800 font-bold text-sm tracking-tight mb-1">
                {item.label}
              </h4>
              <p className="text-slate-500 text-xs font-normal leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
