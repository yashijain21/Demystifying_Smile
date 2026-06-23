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
    {
      icon: ShieldCheck,
      title: "Comfortable Environment",
      desc: "Anxiety-reducing design elements, plush recliners, soothing ambient audio, and highly empathetic dental assistants."
    },
    {
      icon: Medal,
      title: "Premium Materials Only",
      desc: "We exclusively import premium implants (Straumann/Noble Biocare) and source aligners made only with biocompatible, FDA-approved polymer matrix."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-logo-blue-700 font-display text-xs font-extrabold uppercase tracking-widest bg-logo-blue-50 px-3 py-1 rounded-full border border-logo-blue-100">
            Why Choose Our Practice
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-3">
            Elite Dental Standards in Sector 53, Noida
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            We don't cut corners. We are fully committed to crafting healthy mouths and vibrant smiles with the utmost clinical transparency.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <div 
              key={idx}
              className="bg-[#fffaf4] border border-slate-100 rounded-2xl p-6.5 hover:bg-white hover:shadow-xl hover:border-logo-blue-100/60 transition-all duration-300 text-left flex flex-col items-start"
              id={`choose-card-${idx}`}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-logo-blue-50 text-logo-blue-600 flex items-center justify-center mb-5 shrink-0">
                <p.icon className="w-6 h-6 text-logo-orange-600" />
              </div>

              <h3 className="font-display text-lg font-bold text-slate-800 mb-2">
                {p.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
