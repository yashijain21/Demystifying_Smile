import React from "react";
import { MapPin, Phone, Mail, Clock, Compass, ArrowUpRight } from "lucide-react";

export default function ClinicMap() {
  const contacts = [
    {
      icon: MapPin,
      title: "Clinic Location",
      lines: ["H-42, Block H, Sector 53", "Noida, Uttar Pradesh 201301", "Near landmark / primary sector hub"]
    },
    {
      icon: Phone,
      title: "Direct Calling & WhatsApp Support",
      lines: ["+91 98910 73008 (Direct Phone)", "+91 98910 73008 (Emergency Support)", "WhatsApp Consultation active"]
    },
    {
      icon: Mail,
      title: "Email Queries",
      lines: ["info@demystifyingsmiles.com", "appointments@demystifyingsmiles.com"]
    },
    {
      icon: Clock,
      title: "Operational Timings",
      lines: ["Monday to Saturday: 10:30 AM - 8:00 PM", "Sunday: strictly closed (except severe trauma emergency)"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="clinic-location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
          <span className="text-logo-blue-700 font-display text-xs font-extrabold uppercase tracking-widest bg-logo-blue-50 px-3 py-1 rounded-full border border-logo-blue-100">
            Visit Our Clinic
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-3">
            Easy Accessibility in Sector 53, Noida
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Our luxury dental clinic is extremely easy to navigate, located directly near the primary sector roads 
            with comfortable private parking structures and clean patient waiting lounges.
          </p>
        </div>

        {/* content grid: left contacts details, right map hotlink image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Address Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {contacts.map((c, idx) => (
                <div key={idx} className="flex gap-4 text-left border border-slate-50 p-5 rounded-2xl hover:bg-slate-50/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-logo-blue-50 text-logo-blue-600 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-logo-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-800 tracking-tight mb-2">
                      {c.title}
                    </h4>
                    {c.lines.map((line, lIdx) => (
                      <span key={lIdx} className="block text-slate-500 text-xs font-normal leading-relaxed">
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-logo-orange-500/10 border border-logo-orange-500/20 p-5 rounded-2xl text-left flex items-center justify-between gap-4">
              <div>
                <strong className="block text-sm text-logo-orange-700 font-bold">Have an Emergency?</strong>
                <span className="text-xs text-logo-orange-600/90 font-medium">We offer rapid appointments for sudden tooth trauma or severe pain.</span>
              </div>
              <a 
                href="tel:+919891073008"
                className="bg-logo-orange-600 hover:bg-logo-orange-700 text-white font-bold p-3.5 rounded-xl block shrink-0 text-center text-xs tracking-tight"
                id="emergency-call-btn"
              >
                Call Clinic Now
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Mock visual Representation */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-md h-full min-h-[300px] flex">
              {/* Map Image hotlinked */}
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmOcm3VMHGnVG-2fNfuJyE9Y0mqrKP9MVSK-Gp-d5KZsHiK9YD_9HOLHX3m3JHQ5jJ8Se-Y-kTJt8vThr9LEeRXcq5oNywAAtgJKNM3GJPNXBBuvEvkqjuFGoR0KR3mg28B0tyDspE5dA_6ydPJTeLSZOqanKxvbYQ1RZnTK1U93umVd3ZJv55gzjbmSKJKdycKBbDgo0h9sA5qNBKJlWhr34OhwszGlCt6BmYF5-IvmNZHU9cPnQhGXgk49VOktpIxs1lleLWcA" 
                alt="Demystifying Smiles Dental Clinic location map in Sector 53 Noida" 
                className="w-full h-full object-cover select-none transform group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Map Navigation details float */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl border border-slate-700/60 shadow-xl text-left flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className="text-white text-sm font-bold flex items-center gap-1.5 leading-none mb-1.5">
                    <Compass className="w-5 h-5 text-logo-blue-500 shrink-0" />
                    <span>Demystifying Smiles Dental Clinique</span>
                  </h4>
                  <p className="text-slate-300 text-xs mt-1 leading-normal max-w-sm">
                    H-42, Block H, Sector 53, Noida, Uttar Pradesh 201301. Ample reserved workspace car parking is available.
                  </p>
                </div>
                
                <a
                  href="https://maps.google.com/?q=Demystifying+Smiles+Sector+53+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-logo-blue-600 hover:bg-logo-blue-700 text-white font-extrabold text-xs py-3 px-4.5 rounded-xl shadow-lg transition-all flex items-center gap-1 shrink-0"
                  id="google-maps-directions-link"
                >
                  <span>Open in Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
