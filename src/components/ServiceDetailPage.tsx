import React, { useEffect, useState } from "react";
import { ArrowRight, Calendar, CheckCircle, FileText, HelpingHand, Info } from "lucide-react";
import { dentalServices } from "./ServicesGrid";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface ServiceDetailPageProps {
  initialServiceId?: string;
  onBookClick: () => void;
}

export default function ServiceDetailPage({ initialServiceId = "dental-implants", onBookClick }: ServiceDetailPageProps) {

const { slug } = useParams();

const activeService =
  dentalServices.find((service) => service.slug === slug) ||
  dentalServices[0];

  return (
    <>
    <Header/>
      <div className="bg-[#fffaf4]" id="service-details-page">
      <section className="bg-gradient-to-br from-logo-blue-50/70 via-white to-logo-orange-50/30 border-b border-logo-blue-100 py-12 px-4 text-left">
        <div className="max-w-6xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-logo-blue-100 text-logo-blue-700">
            <Info className="w-4 h-4" />
            <span>Service Detail & Treatment Dossier</span>
          </span>
          <h1 className="font-serif text-3.5xl sm:text-5xl font-bold text-logo-auburn-500 mt-3 leading-tight tracking-tight">
            {activeService.heroTitle}
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-2xl">
            {activeService.heroDescription}
          </p>
        </div>
      </section>

      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <aside className="lg:col-span-4 space-y-3">
            <div className="bg-white border border-logo-blue-100 p-4 rounded-3xl shadow-xs text-left">
              <span className="block text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase mb-4 px-2">
                Treatments Catalog
              </span>
              <div className="space-y-1.5">
                {dentalServices.map((service) => {
                  const isCurrent = service.slug === activeService.slug;
                  return (
                    <button
                      key={service.slug}
                      onClick={() => setactiveService.slug(service.slug)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left transition-all cursor-pointer ${
                        isCurrent
                          ? "bg-logo-orange-50/80 border border-logo-orange-200 text-logo-auburn-500 shadow-xs"
                          : "hover:bg-slate-50 border border-transparent text-slate-600"
                      }`}
                      id={`sidebar-select-${service.slug}`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                            isCurrent ? "bg-logo-orange-500 text-white" : "bg-logo-blue-50 text-logo-blue-500"
                          }`}
                        >
                          <service.icon className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <span className="block text-xs font-bold leading-tight">{service.title}</span>
                          <span className="block text-[9px] text-slate-450 mt-0.5">{service.process.length} steps</span>
                        </div>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isCurrent ? "translate-x-1 text-logo-orange-500" : "text-slate-300"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-logo-blue-50/50 border border-logo-blue-100 p-5 rounded-3xl text-left space-y-3">
              <strong className="block text-xs text-logo-blue-700 font-bold">Unsure which treatment fits you?</strong>
              <p className="text-[11px] text-slate-600 leading-normal">
                Use our diagnostic selector tool on the home view or chat with the AI Advisor to receive real-time customized dental guidance.
              </p>
              <button
                onClick={onBookClick}
                className="w-full bg-logo-orange-500 hover:bg-logo-orange-600 text-white font-bold text-xs py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
              >
                Request Free Consult
              </button>
            </div>
          </aside>

          <div className="lg:col-span-8 bg-white border border-logo-blue-100 p-6 sm:p-9 rounded-3xl shadow-xs text-left space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2.5xl bg-logo-blue-50 text-logo-blue-500 flex items-center justify-center border border-logo-blue-100">
                  <activeService.icon className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3.5xl font-bold text-logo-auburn-500 leading-tight">
                    {activeService.title}
                  </h2>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-logo-orange-500 font-mono tracking-tight mt-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Personalized treatment journey
                  </span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-logo-blue-100 bg-slate-50 shadow-sm">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-[240px] sm:h-[340px] object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-logo-auburn-500 border-b border-logo-blue-100 pb-2 flex items-center gap-2">
                <FileText className="w-4.5 h-4.5 text-logo-blue-500" />
                <span>Clinical Overview</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                {activeService.overview}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-logo-auburn-500 border-b border-logo-blue-100 pb-2 flex items-center gap-2">
                <HelpingHand className="w-4.5 h-4.5 text-logo-blue-500" />
                <span>Treatment Journey & Milestones</span>
              </h3>

              <div className="relative pl-5 border-l-2 border-logo-blue-200 space-y-6">
                {activeService.process.map((step, index) => (
                  <div key={step} className="relative">
                    <span className="absolute -left-[27px] top-0 w-3.5 h-3.5 bg-[#fffaf4] border-2 border-logo-blue-500 rounded-full flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-logo-blue-500 rounded-full"></span>
                    </span>
                    <strong className="block text-slate-800 text-xs font-bold mb-1">
                      Phase {index + 1}
                    </strong>
                    <span className="block text-slate-500 text-xs leading-normal font-normal">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-logo-blue-50/30 border border-logo-blue-100/60 p-5 rounded-2xl">
                <strong className="block text-xs text-logo-blue-700 font-bold mb-1">Benefits</strong>
                <ul className="space-y-2">
                  {activeService.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2 text-slate-600 text-xs leading-normal">
                      <CheckCircle className="w-4 h-4 text-logo-orange-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-logo-orange-50/30 border border-logo-orange-200/50 p-5 rounded-2xl">
                <strong className="block text-xs text-logo-orange-700 font-bold mb-1">Quick Summary</strong>
                <span className="block text-slate-600 text-xs leading-normal font-normal">
                  {activeService.shortDescription}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-logo-auburn-500 border-b border-logo-blue-100 pb-2">
                Treatment Specific FAQs
              </h3>
              <div className="space-y-4">
                {activeService.faqs.map((faq) => (
                  <div key={faq.question} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                    <strong className="block text-xs text-slate-800 font-bold mb-1.5">Q: {faq.question}</strong>
                    <span className="block text-slate-500 text-xs leading-relaxed font-normal">A: {faq.answer}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-left">
              <div className="space-y-1">
                <strong className="block text-white text-xs sm:text-sm font-bold">Ready to take the next step?</strong>
                <span className="block text-slate-400 text-xs">Request consultation with our dental specialists in Noida Sector 53.</span>
              </div>
              <button
                onClick={onBookClick}
                className="bg-logo-orange-500 hover:bg-logo-orange-600 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Book Appointment</span>
                <Calendar className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    
    </>
    
  );
}
