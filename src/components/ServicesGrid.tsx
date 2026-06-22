import React from "react";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";

interface ServicesGridProps {
  onServiceSelect: (serviceSlug: string) => void;
}

export const dentalServices = services;

export default function ServicesGrid({ onServiceSelect }: ServicesGridProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-logo-blue-50/60 to-white" id="services-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
          <span className="text-logo-blue-700 font-display text-xs font-extrabold uppercase tracking-widest bg-logo-blue-50 px-3 py-1 rounded-full border border-logo-blue-100">
            Premium Dental Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-3">
            Elite Super-Specialty Dental Care
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl md:mx-auto">
            From essential preventive cleanings to advanced prosthetic implantology and full orthodontic corrections,
            we utilize top-tier global equipment to orchestrate optimal results for Sector 53, Noida residents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              id={`service-card-${service.slug}`}
            >
              <div className="text-left">
                <div className="w-12 h-12 rounded-2xl bg-logo-blue-50 text-logo-blue-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <service.icon className="w-6 h-6 text-logo-orange-600" />
                </div>

                <h3 className="font-display text-xl font-bold text-slate-800 mb-2">
                  {service.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-left mt-4">
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-logo-orange-500"></span>
                  <span>{service.process.length} step treatment</span>
                </span>

                <button
                  onClick={() => onServiceSelect(service.slug)}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-logo-blue-700 group-hover:text-logo-blue-600 bg-logo-blue-50 group-hover:bg-logo-blue-100/70 py-2 px-3 rounded-xl transition-colors cursor-pointer"
                  id={`learn-btn-${service.slug}`}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
