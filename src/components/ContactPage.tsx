import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquareCode,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
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
      title: "Clinic Location",
      lines: ["H-42, Block H, Sector 53", "Noida, Uttar Pradesh 201301"],
      color: "text-logo-orange-500",
      bg: "bg-logo-orange-50",
    },
    {
      icon: Phone,
      title: "Contact Number",
      lines: ["+91 98910 73008", "Active WhatsApp Support"],
      color: "text-logo-blue-500",
      bg: "bg-logo-blue-50",
    },
  
    {
      icon: Clock,
      title: "Operational Timings",
      lines: ["Monday - Saturday", "10:30 AM - 8:00 PM", "Sunday Closed"],
      color: "text-logo-blue-500",
      bg: "bg-logo-blue-50",
    },
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
            <div className="max-w-2xl space-y-4 text-white">
              <h1 className="mt-5 max-w-2xl font-serif text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Connect with Our Noida Care Desk
              </h1>
              <p className="max-w-2xl text-[13px] leading-relaxed text-white/82 sm:text-sm lg:text-base">
                Have a question about treatment costs, scheduling, or clinical
                care? Send us a message or call us directly and our team will
                help you with the next step.
              </p>
            </div>
          </div>
        </section>

        {/* Contact + Form */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="lg:w-[38%] text-left">
              <h2 className="font-serif text-2xl font-bold tracking-tight text-logo-auburn-500">
                Direct Contact Information
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Reach us by phone, email, or visit the clinic during operating
                hours.
              </p>

              <div className="mt-6 space-y-4">
                {contacts.map((c, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 rounded-2xl border border-logo-blue-100 bg-white p-5 transition-shadow hover:shadow-sm"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${c.bg} ${c.color} border border-logo-blue-100/20`}
                    >
                      <c.icon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-sm font-bold tracking-tight text-slate-800">
                        {c.title}
                      </h3>
                      {c.lines.map((line, lIdx) => (
                        <span
                          key={lIdx}
                          className="block text-xs leading-relaxed text-slate-500"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[62%] rounded-3xl border border-logo-blue-100/80 bg-white p-6 text-left shadow-xs sm:p-8">
              <h2 className="mb-6 flex items-center gap-2 font-serif text-2xl font-bold text-logo-auburn-500">
                <MessageSquareCode className="h-6 w-6 text-logo-orange-500" />
                <span>Send Noida Front Desk a Message</span>
              </h2>

              {submittedQuery ? (
                <div className="space-y-4 rounded-2xl border-2 border-logo-orange-200 bg-logo-orange-50/50 p-6 text-center animate-in fade-in zoom-in-95">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-logo-orange-200 bg-logo-orange-100 text-logo-orange-600">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-logo-auburn-500">
                      Query Distributed Successfully!
                    </h3>
                    <p className="mx-auto max-w-sm text-xs leading-normal text-slate-600">
                      Thank you for reaching out to Demystifying Smiles Dental
                      Clinic. Our administrative desk will call you back
                      shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmittedQuery(false)}
                    className="text-xs font-bold text-logo-blue-600 underline cursor-pointer hover:text-logo-blue-700"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-bold text-slate-700">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Yashica Sharma"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-800 focus:border-logo-blue-500 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-slate-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 9988776655"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-800 focus:border-logo-blue-500 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold text-slate-700">
                      Email ID{" "}
                      <span className="font-normal text-slate-400">
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. yashica@gmail.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-800 focus:border-logo-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold text-slate-700">
                      Inquiry Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Cost of Clear Aligners / Dental Implant safety inquiries"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-800 focus:border-logo-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold text-slate-700">
                      How can we assist you? Describe your symptoms *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your requirements, dental pain, swelling, chips, aligner cost targets, or anything else..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-800 focus:border-logo-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400">
                    <ShieldCheck className="h-4 w-4 text-logo-blue-500" />
                    <span>
                      Your medical details are strictly 100% private, protected
                      under patient privacy laws.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-logo-orange-500 py-4 text-xs font-bold text-white shadow-md transition-all hover:bg-logo-orange-600 disabled:opacity-50"
                    id="direct-inquiry-btn"
                  >
                    {submitting ? (
                      <span>Transmitting inquiry logs...</span>
                    ) : (
                      <>
                        <span>Transmit Inquiry securely</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Iframe below */}
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm">
            <iframe
              title="Demystifying Smiles Location"
              src="https://www.google.com/maps?q=Demystifying%20Smiles%20Sector%2053%20Noida&output=embed"
              className="min-h-[350px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
