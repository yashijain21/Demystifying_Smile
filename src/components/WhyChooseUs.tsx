import React from "react";
import { Users, Cpu, Heart, Shield, ShieldCheck, Medal } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Users,
      title: "Experienced Specialists",
      desc: "Our senior dental surgeons and orthodontists average 15+ years of active clinical expertise, managing complex aligners & implants seamlessly."
    },
    {
      icon: Cpu,
      title: "Modern Technology",
      desc: "Equipped with low-radiation digital radiograms, intra-oral HD scans, and advanced single-sitting automated cleaning lasers."
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      desc: "We prioritize your physical and psychological relaxation. Every step is clearly explained beforehand to ensure absolute peace of mind."
    },
    {
      icon: Shield,
      title: "100% Safe Procedures",
      desc: "Strict adherence to WHO sterilization standards. Our autoclaves and single-use kits guarantee a premium, zero-risk treatment loop."
    },
    
  ];

  return (
    <section className="py-10 sm:py-14 md:py-24 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 md:mb-16">
          <span className="inline-flex rounded-full border border-logo-blue-100 bg-logo-blue-50 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.24em] text-logo-blue-700">
            Why Choose Our Practice
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">
            Elite Dental Standards in Sector 53, Noida
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
            We don't cut corners. We are fully committed to crafting healthy mouths and vibrant smiles with the utmost clinical transparency.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="flex min-w-[47%] flex-col items-start rounded-[1.35rem] border border-slate-100 bg-[#fffaf4] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:bg-white hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)] hover:border-logo-blue-100/60 snap-start sm:p-6 md:min-w-0"
              id={`choose-card-${idx}`}
            >
              <div className="mb-4 flex h-6 w-6 sm:w-6 sm:h-6 shrink-0 items-center justify-center rounded-2xl bg-logo-blue-50 text-logo-blue-600">
                <p.icon className="h-4 w-4 sm:h-5 sm:w-5 text-logo-orange-600" />
              </div>

              <h3 className="mb-2 font-display text-sm sm:text-base font-medium text-slate-800">
                {p.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
