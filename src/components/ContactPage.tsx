import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquareCode, ShieldCheck, Compass, CheckCircle2 } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import contactHero from "../assets/contact-hero.png";
export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedQuery, setSubmittedQuery] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate real local database submit or email query dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmittedQuery(true);
      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1000);
  };

  const contacts = [
    {
      icon: MapPin,
      title: "Clinic Address",
      lines: ["H-42, Block H, Sector 53", "Noida, Uttar Pradesh 201301", "Near landmark / primary sector hub"],
      color: "text-logo-orange-500",
      bg: "bg-logo-orange-50"
    },
    {
      icon: Phone,
      title: "Calling & Whatsapp Support",
      lines: ["+91 98910 73008 (Front Desk Call)", "+91 98910 73008 (Emergency SOS)", "Active WhatsApp Live Support"],
      color: "text-logo-blue-500",
      bg: "bg-logo-blue-50"
    },
    {
      icon: Mail,
      title: "Corporate Email Queries",
      lines: ["info@demystifyingsmiles.com"],
      color: "text-logo-auburn-500",
      bg: "bg-logo-auburn-50"
    },
    {
      icon: Clock,
      title: "Clinic Operating Hours",
      lines: ["Monday to Saturday: 10:30 AM - 8:00 PM", "Sunday: closed (strictly on-call trauma emergencies only)"],
      color: "text-logo-blue-500",
      bg: "bg-logo-blue-50"
    }
  ];

  return (
   <>
   <Header />
    <div className="bg-[#fffaf4]" id="contact-us-page">
      
      {/* Hero banner */}
      <section className="relative isolate overflow-hidden border-b border-black/10 text-left">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHero})` }}
        />
        <div className="absolute inset-0 bg-black/52" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 lg:py-28">
          <div className="max-w-3xl space-y-4 text-white">
           
            <h1 className="max-w-2xl font-serif text-2xl font-bold tracking-tight leading-tight sm:text-3xl lg:text-4xl mt-5">
              Connect with Our Noida Care Desk
            </h1>
            <p className="max-w-2xl text-[13px] leading-relaxed text-white/82 sm:text-sm lg:text-base">
              Have a question about treatment costs, scheduling, or general clinical capabilities?
              Drop us a message below or call us directly. Our specialized assistants are ready to answer your queries instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Key Contacts Directory Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="font-serif text-2xl font-bold text-logo-auburn-500 tracking-tight">
              Direct Contact Information
            </h2>
            <p className="text-slate-500 text-xs">
              Feel free to visit, phone, or send an email regarding clinical consultation, aligners cost, or root canal appointments.
            </p>

            <div className="space-y-4">
              {contacts.map((c, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-4 border border-logo-blue-100 p-5 rounded-2xl bg-white hover:shadow-xs transition-shadow"
                >
                  <div className={`w-11 h-11 rounded-xl ${c.bg} ${c.color} flex items-center justify-center shrink-0 border border-logo-blue-100/20`}>
                    <c.icon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 tracking-tight mb-2">
                      {c.title}
                    </h3>
                    {c.lines.map((line, lIdx) => (
                      <span key={lIdx} className="block text-slate-500 text-xs leading-relaxed font-normal">
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Emergency Assistance Box */}
            <div className="bg-logo-orange-50 border border-logo-orange-200/60 p-5 rounded-2xl text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <strong className="block text-sm text-logo-orange-700 font-bold">Have deep tooth trauma or extreme pain?</strong>
                <span className="text-xs text-logo-orange-600 font-medium">Get priority booking for rapid single-sitting pain relief.</span>
              </div>
              <a 
                href="tel:+919891073008"
                className="bg-logo-orange-500 hover:bg-logo-orange-600 text-white font-bold px-4 py-2.5 rounded-xl block shrink-0 text-center text-xs tracking-tight shadow-sm cursor-pointer"
                id="emergency-call-contact"
              >
                Call Front Desk Now
              </a>
            </div>

            {/* Accessibility Landmarks info */}
            <div className="bg-logo-blue-50/50 border border-logo-blue-100/60 p-5 rounded-2xl text-xs space-y-2">
              <strong className="block text-logo-blue-700">Transit & Metros Accessibility:</strong>
              <p className="text-slate-600 leading-normal font-normal">
                📍 Situated close to main Noida transit pathways. The clinic features dedicated private car parking reserved purely for our active patients. Lift access is fully integrated to assist elderly patients safely.
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-logo-blue-100/80 p-6 sm:p-8 rounded-3xl shadow-xs text-left">
            <h2 className="font-serif text-2xl font-bold text-logo-auburn-500 mb-6 flex items-center gap-2">
              <MessageSquareCode className="w-6 h-6 text-logo-orange-500" />
              <span>Send Noida Front Desk a Message</span>
            </h2>

            {submittedQuery ? (
              <div className="bg-logo-orange-50/50 border-2 border-logo-orange-200 rounded-2xl p-6 text-center space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-12 h-12 bg-logo-orange-100 text-logo-orange-600 rounded-full flex items-center justify-center mx-auto border border-logo-orange-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-logo-auburn-500">Query Distributed Successfully!</h3>
                  <p className="text-slate-600 text-xs max-w-sm mx-auto leading-normal">
                    Thank you for reaching out to Demystifying Smiles Dental Clinic. 
                    Our administrative desk will compile response protocols and call you back shortly.
                  </p>
                </div>
                <div>
                  <button 
                    onClick={() => setSubmittedQuery(false)}
                    className="text-xs text-logo-blue-600 hover:text-logo-blue-700 font-bold underline cursor-pointer"
                  >
                    Send another query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Yashica Sharma" 
                      className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-logo-blue-500 rounded-xl px-4 py-3 text-xs focus:outline-none text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 9988776655" 
                      className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-logo-blue-500 rounded-xl px-4 py-3 text-xs focus:outline-none text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email ID <span className="text-slate-400 font-normal">(Optional)</span></label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. yashica@gmail.com" 
                    className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-logo-blue-500 rounded-xl px-4 py-3 text-xs focus:outline-none text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Inquiry Subject *</label>
                  <input 
                    type="text" 
                    required 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Cost of Clear Aligners / Dental Implant safety inquiries" 
                    className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-logo-blue-500 rounded-xl px-4 py-3 text-xs focus:outline-none text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">How can we assist you? Describe your symptoms *</label>
                  <textarea 
                    rows={4} 
                    required 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your requirements, dental pain, swelling, chips, aligner cost targets, or anything else..." 
                    className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-logo-blue-500 rounded-xl p-4 text-xs focus:outline-none text-slate-800"
                  />
                </div>

                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                  <ShieldCheck className="w-4 h-4 text-logo-blue-500" />
                  <span>Your medical details are strictly 100% private, protected under patient privacy laws.</span>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-logo-orange-500 hover:bg-logo-orange-600 disabled:opacity-50 text-white font-display text-xs font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  id="direct-inquiry-btn"
                >
                  {submitting ? (
                    <span>Transmitting inquiry logs...</span>
                  ) : (
                    <>
                      <span>Transmit Inquiry securely</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Styled Interactive Location Map Frame */}
      <section className="py-8 max-w-6xl mx-auto px-4 sm:px-6 mb-16 text-left">
        <h2 className="font-serif text-2xl font-bold text-logo-auburn-500 tracking-tight mb-4">
          Visual Navigation & Interactive Map coordinates
        </h2>
        <div className="relative group overflow-hidden rounded-[2.5rem] border-2 border-logo-blue-100 bg-slate-50 shadow-md min-h-[360px] flex">
          {/* Map Image hotlinked */}
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmOcm3VMHGnVG-2fNfuJyE9Y0mqrKP9MVSK-Gp-d5KZsHiK9YD_9HOLHX3m3JHQ5jJ8Se-Y-kTJt8vThr9LEeRXcq5oNywAAtgJKNM3GJPNXBBuvEvkqjuFGoR0KR3mg28B0tyDspE5dA_6ydPJTeLSZOqanKxvbYQ1RZnTK1U93umVd3ZJv55gzjbmSKJKdycKBbDgo0h9sA5qNBKJlWhr34OhwszGlCt6BmYF5-IvmNZHU9cPnQhGXgk49VOktpIxs1lleLWcA" 
            alt="Demystifying Smiles Dental Clinic location map in Sector 53 Noida" 
            className="w-full h-full object-cover select-none transform group-hover:scale-101 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />

          {/* Dynamic Map Navigation details float */}
          <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl border border-slate-700/60 shadow-xl text-left flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h4 className="text-white text-sm font-bold flex items-center gap-2 leading-none mb-1.5">
                <Compass className="w-5 h-5 text-logo-orange-500 shrink-0 animate-spin" />
                <span>Demystifying Smiles • Noida</span>
              </h4>
              <p className="text-slate-300 text-xs mt-1 leading-normal max-w-sm font-normal">
                H-42, Block H, Sector 53, Noida, Uttar Pradesh 201301. Ample reserved workspace car parking is available.
              </p>
            </div>
            
            <a
              href="https://maps.google.com/?q=Demystifying+Smiles+Sector+53+Noida"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-logo-orange-500 hover:bg-logo-orange-600 text-white font-extrabold text-xs py-3 px-4 rounded-xl shadow-lg transition-all flex items-center gap-1 shrink-0 cursor-pointer"
              id="open-maps-contact-btn"
            >
              <span>Get Direct Route</span>
            </a>
          </div>
        </div>
      </section>

    </div>
   <Footer />
   </>
  );
}
