
import { ShieldCheck, HeartPulse, Sparkles, Award, Microscope, Users, BadgeCheck } from "lucide-react";
import { doctors } from "../data/doctors";
import Header from "./Header";
import Footer from "./Footer";
interface AboutPageProps {
  onBookClick: () => void;
}

export default function AboutPage({ onBookClick }: AboutPageProps) {
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
              <Sparkles className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-logo-auburn-500 leading-tight">
              git Dentistry with Trust, Quality & Care
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {doctors.map((doctor) => {
            const bioParagraphs = doctor.bio
              .trim()
              .split(/\n+/)
              .map((paragraph) => paragraph.trim())
              .filter(Boolean);
            const bioPreview = bioParagraphs[0] ?? "";

            return (
              <article
                key={doctor.name}
                className="group overflow-hidden rounded-[2rem] border border-logo-blue-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-left lg:flex lg:min-h-[260px]"
              >
                <div className="relative lg:w-44 lg:shrink-0">
                  <div className={`aspect-[4/5] overflow-hidden ${doctor.mediaWrapperClassName ?? "bg-[#f8efe1]"}`}>
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-logo-orange-200 shadow-lg">
                    <h3 className="font-serif text-lg font-bold text-logo-auburn-500 leading-none">
                      {doctor.name}
                    </h3>
                    <span className="block text-[10px] font-semibold text-logo-blue-600 mt-1 font-mono">
                      {doctor.designation}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 lg:flex-1 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-logo-orange-50 text-logo-orange-700 text-[9px] font-bold uppercase tracking-wider border border-logo-orange-200">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      <span>{doctor.experience}</span>
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-logo-blue-50 text-logo-blue-700 text-[9px] font-bold uppercase tracking-wider border border-logo-blue-100">
                      Compact profile
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-logo-orange-600 font-mono">
                      Education
                    </h4>
                    <ul className="space-y-1.5">
                      {doctor.education.slice(0, 2).map((item) => (
                        <li key={item} className="flex gap-2 text-xs text-slate-600 leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-logo-blue-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-logo-orange-600 font-mono">
                      About
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-600">
                      {bioPreview}
                    </p>
                  </div>

                  <button
                    onClick={onBookClick}
                    className="w-full bg-logo-orange-500 hover:bg-logo-orange-600 text-white font-display text-[10px] font-extrabold px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Book Consultation
                  </button>
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
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Every crown placed in our clinic carries raw materials imported directly from Germany (E-Max / IPS)
              with solid warranty cards ranging from 10 to 25 years. We utilize lead-free shielding in digital X-Rays
              and biological indicators to double-check sterilization states daily.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 text-[10px] font-mono font-bold text-slate-400">
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
