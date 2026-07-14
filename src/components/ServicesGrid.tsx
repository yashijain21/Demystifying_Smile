import React from "react";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";

interface ServicesGridProps {
  onServiceSelect: (serviceSlug: string) => void;
}

export const dentalServices = services;

export default function ServicesGrid({ onServiceSelect }: ServicesGridProps) {
  return (
    <section className="py-10 sm:py-14 md:py-24 bg-gradient-to-b from-logo-blue-50/60 to-white" id="services-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-10 lg:items-start">
          <div className="lg:col-span-3 text-left lg:pt-8">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.24em] text-logo-orange-600">
              Premium Services
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
              Enterprise-grade dental care for every smile
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-md">
              Browse our core treatments below. Each card is now presented in a cleaner, more breathable layout for smaller screens.
            </p>
            <button
              onClick={() => onServiceSelect(services[0].slug)}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-logo-orange-600 hover:text-logo-orange-700"
              id="services-explore-all"
            >
              <span>Explore services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-9">
            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-6 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300">
              {services.map((service) => (
                <article
                  key={service.slug}
                  className="group flex min-w-[80%] flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)] transition-all duration-300 snap-start sm:min-w-0"
                  id={`service-card-${service.slug}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-700 backdrop-blur-md">
                      <service.icon className="h-3.5 w-3.5 text-logo-orange-600" />
                      <span>{service.title}</span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5 text-left">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-logo-orange-600">
                      {service.process.length} step treatment
                    </p>
                    <h3 className="mt-2 font-display text-xl font-medium text-slate-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {service.shortDescription}
                    </p>

                    <button
                      onClick={() => onServiceSelect(service.slug)}
                      className="mt-5 inline-flex items-center gap-2 rounded-xl bg-logo-blue-50 px-4 py-2.5 text-xs font-extrabold text-logo-blue-700 transition-colors hover:bg-logo-blue-100 cursor-pointer"
                      id={`learn-btn-${service.slug}`}
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
