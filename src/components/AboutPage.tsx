
import { ShieldCheck, HeartPulse, Award, Microscope, Users, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { doctors } from "../data/doctors";
import Header from "./Header";
import Footer from "./Footer";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Class-B Active Sterilization",
      desc: "Our clinic runs ISO-certified 4-tier sterilization cycles. Tools are wrapped, pressurized in digital autoclaves, and opened directly in front of the patient."
    },
    {
      icon: HeartPulse,
      title: "Painless Injection Techniques",
      desc: "We utilize computerized micro-vibration delivery systems to make local anesthesia completely virtual and painless, eliminating needle phobia permanently."
    },
    {
      icon: Microscope,
      title: "Intraoral High-Def Cameras",
      desc: "We show you what is happening inside your tooth structures in live high-definition. No hidden work, no jargon - pure, demystified dental care."
    },
    {
      icon: Users,
      title: "Patient-First Budget Transparency",
      desc: "Receive exact, fully detailed itemized quotes before treatment begins. We strictly have zero hidden charges, zero unexpected billing, and simple EMI plans."
    }
  ];

  return (
   <>
   <Header/>
    <div className="bg-[#fffaf4]" id="about-us-page">
      <section className="relative overflow-hidden bg-gradient-to-br from-logo-blue-50 via-white to-logo-orange-50 border-b border-logo-blue-100 py-20 px-4 md:py-28 text-left">
        <div className="absolute top-0 right-0 w-96 h-96 bg-logo-orange-100/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-logo-blue-100/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-logo-orange-100 text-logo-orange-700 border border-logo-orange-200">
            <BadgeCheck className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-logo-auburn-500 leading-tight">
              Dentistry with Trust, Quality & Care
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Located in the heart of Sector 53, Noida, our clinic was founded with a singular, resolute philosophy:
              to strip the anxiety, complex medical jargon, and hidden billing out of dentistry, replacing it with
              crystal-clear transparency and premium treatment comfort.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-logo-blue-50 text-logo-blue-700 border border-logo-blue-100">
            <Award className="w-3.5 h-3.5" />
            <span>Our Doctors</span>
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-logo-auburn-500">
            Experienced clinicians behind the practice
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Meet the team. Each profile below is driven directly from shared doctor data and local image assets, so updates stay consistent across the site.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:gap-10">
          {doctors.map((doctor) => {
            const bioParagraphs = doctor.bio
              .trim()
              .split(/\n+/)
              .map((paragraph) => paragraph.trim())
              .filter(Boolean);
            const bioPreview = bioParagraphs.slice(0, 2).join(" ");

            return (
              <article
                key={doctor.name}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)] transition-all duration-300 text-left"
              >
                <div className="h-1.5 bg-gradient-to-r from-logo-blue-500 via-logo-orange-500 to-logo-blue-500"></div>

                <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">
                  <div className="relative bg-[#fbfaf7] p-5 sm:p-6 lg:p-7">
                    <div className={`overflow-hidden rounded-[1.75rem] aspect-[4/5] shadow-lg ring-1 ring-black/5 ${doctor.mediaWrapperClassName ?? "bg-[#f8efe1]"}`}>
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center rounded-full bg-logo-orange-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-logo-orange-700">
                          {doctor.experience}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-logo-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-logo-blue-700">
                          Clinical Lead
                        </span>
                      </div>
                      <h3 className="mt-4 font-serif text-3xl leading-tight font-bold text-logo-auburn-500">
                        {doctor.name}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-slate-500">
                        {doctor.designation}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3 pb-5 border-b border-slate-100">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-logo-orange-200 bg-logo-orange-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-logo-orange-700">
                        <BadgeCheck className="w-3.5 h-3.5" />
                        Board-Supported
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-logo-blue-100 bg-logo-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-logo-blue-700">
                        {doctor.education.length} Credentials
                      </span>
                    </div>

                    <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.26em] text-logo-orange-600 font-mono">
                            Professional Summary
                          </h4>
                          <p className="max-w-3xl text-sm sm:text-base leading-8 text-slate-600">
                            {bioPreview}
                          </p>
                        </div>

                        <Link
                          to="/contact"
                          className="inline-flex w-full sm:w-auto min-w-[240px] items-center justify-center rounded-xl bg-logo-orange-500 px-6 py-3 text-xs font-extrabold text-white shadow-md transition-colors hover:bg-logo-orange-600"
                        >
                          Book Consultation
                        </Link>
                      </div>

                      <div className="space-y-6 rounded-[1.5rem] border border-slate-100 bg-slate-50/70 p-5 sm:p-6">
                        <div className="space-y-3">
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.26em] text-logo-orange-600 font-mono">
                            Education
                          </h4>
                          <ul className="space-y-4">
                            {doctor.education.slice(0, 2).map((item) => (
                              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-logo-blue-500" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {(doctor.achievements?.length || doctor.memberships?.length) ? (
                          <div className="space-y-3">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.26em] text-logo-orange-600 font-mono">
                              Key Highlights
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {(doctor.achievements?.slice(0, 2) ?? []).map((item) => (
                                <span
                                  key={item}
                                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-600"
                                >
                                  {item}
                                </span>
                              ))}
                              {(doctor.memberships?.slice(0, 2) ?? []).map((item) => (
                                <span
                                  key={item}
                                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-600"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-logo-blue-50/30 border-y border-logo-blue-100 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-logo-orange-600 font-mono">Our Standard of Practice</span>
            <h2 className="font-serif text-3xl font-bold text-logo-auburn-500 leading-tight">
              The Four Cornerstones of Clean Clinical Care
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              We operate an modern luxury workspace environment adhering to global clinical parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="bg-white border border-logo-blue-100 p-6 sm:p-8 rounded-3xl shadow-xs text-left hover:scale-[1.01] hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-logo-blue-50 border border-logo-blue-100/50 text-logo-blue-500 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-logo-blue-500" />
                </div>
                <h3 className="font-serif text-lg font-bold text-logo-auburn-500 mb-2">
                  {v.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-logo-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-logo-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-logo-orange-500 font-mono text-xs font-bold uppercase tracking-widest bg-logo-orange-500/10 px-3 py-1 rounded">
              ISO Standards & Safety
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
              We Never Compromise on Safety, Disinfection, or Materials
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Every crown placed in our clinic carries raw materials imported directly from Germany (E-Max / IPS)
              with solid warranty cards ranging from 10 to 25 years. We utilize lead-free shielding in digital X-Rays
              and biological indicators to double-check sterilization states daily.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 text-[10px] font-mono font-bold text-slate-300">
              <span className="bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700">100% LEAD SHEILD SAFETY</span>
              <span className="bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700">BIOLOGICAL CHECKS ENFORCED</span>
              <span className="bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700">IPS E-MAX OFFICIAL PARTNER</span>
            </div>
          </div>
        </div>
      </section>
    </div>
   <Footer/>

   </>
  );
}
