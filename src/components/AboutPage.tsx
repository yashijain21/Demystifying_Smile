import { ShieldCheck, HeartPulse, Award, Microscope, Users, Star, ArrowRight } from "lucide-react";
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
      <Header />
      <div className="bg-[#fffaf4]" id="about-us-page">
        <section
          className="relative overflow-hidden border-b border-black/10 px-4 pt-20 md:pt-28"
          style={{
            backgroundImage:
              "url('https://i-dentist.ca/wp-content/smush-webp/2025/06/dental-crown-vs-filling-1200x800.jpg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/65 pointer-events-none"></div>

          <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-16">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[0.55rem] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                About Our Practice
              </span>

              <h1 className="font-serif text-sm sm:text-xl lg:text-[2rem] font-normal tracking-tight text-white leading-[0.95] max-w-2xl">
                Care that feels calm, clear, and genuinely dental.
              </h1>

              <p className="max-w-2xl text-xs sm:text-sm leading-6 text-white/85">
                We keep treatment simple, transparent, and centered on long-term oral health. From routine care to
                advanced endodontics, every visit is designed to feel comfortable, informed, and patient-first.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                  Root Canal Care
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                  Smile Makeovers
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                  Family Dentistry
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-2xl sm:text-3xl font-normal text-white">20+</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-white/80 font-bold">Years of Care</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-2xl sm:text-3xl font-normal text-white">BDS</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-white/80 font-bold">Qualified Team</p>
              </div>
              <div className="col-span-2 rounded-[1.5rem] border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-sm sm:text-base leading-6 text-white/85">
                  Transparent treatment plans, gentle procedures, and a clean clinical experience from start to finish.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-logo-blue-50 text-logo-blue-700 border border-logo-blue-100">
              <Award className="w-3.5 h-3.5" />
              <span>Our Doctors</span>
            </span>
            <h2 className="font-serif text-lg sm:text-2xl md:text-4xl font-bold tracking-tight text-logo-auburn-500">
              Experienced clinicians behind the practice
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Meet the team. Each profile below is driven directly from shared doctor data and local image assets, so updates stay consistent across the site.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {doctors.map((doctor, index) => {
              const bioParagraphs = doctor.bio
                .trim()
                .split(/\n+/)
                .map((paragraph) => paragraph.trim())
                .filter(Boolean);
              const bioPreview = bioParagraphs[0] ?? doctor.bio.trim();
              const isReversed = index % 2 === 1;
              const firstName = doctor.name.replace(/^Dr\.\s*/, "").split(" ")[0];
              const specialty = doctor.name.includes("Nikhil") ? "Conservative Dentistry" : "Dentistry";

              return (
                <article
                  key={doctor.name}
                  className={`rounded-[1.5rem] border border-[#ead8c2] bg-[#f8f2e9] overflow-hidden ${isReversed ? "md:grid md:grid-cols-[minmax(0,1fr)_220px]" : "md:grid md:grid-cols-[220px_minmax(0,1fr)]"}`}
                >
                  <div className={`relative p-3 sm:p-3.5 md:p-3.5 ${isReversed ? "md:order-2" : ""}`}>
                    <div className={`relative h-[200px] w-[200px] overflow-hidden rounded-[1.25rem] bg-[#f0ece7] ${doctor.mediaWrapperClassName ?? ""} ${isReversed ? "md:ml-auto" : ""}`}>
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="absolute left-3 top-3 rounded-xl bg-white px-2 py-1.5 shadow-[0_8px_20px_rgba(68,40,20,0.08)]">
                      <div className="flex items-center gap-1.5">
                        <div className="grid h-7 w-7 place-items-center rounded-full bg-logo-blue-600 text-white">
                          <Star className="h-2.5 w-2.5 fill-current" />
                        </div>
                        <div>
                          <p className="text-[7px] uppercase tracking-[0.18em] text-logo-blue-500">Rating</p>
                          <p className="text-[11px] font-medium text-logo-blue-700">4.9 / 5</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 rounded-xl bg-white px-2 py-1.5 shadow-[0_8px_20px_rgba(68,40,20,0.08)]">
                      <div className="flex items-center gap-1.5">
                        <div className="grid h-7 w-7 place-items-center rounded-full bg-logo-orange-600 text-white">
                          <Star className="h-2.5 w-2.5 fill-current" />
                        </div>
                        <div>
                          <p className="text-[7px] uppercase tracking-[0.18em] text-logo-orange-500">Specialty</p>
                          <p className="text-[11px] font-medium text-logo-blue-700">{specialty}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`px-4 pb-4 pt-2 sm:px-5 sm:pb-5 sm:pt-3 md:px-5 md:py-5 lg:px-6 ${isReversed ? "md:order-1" : ""}`}>
                    <div className="max-w-3xl space-y-3">
                      <div className="space-y-1.5">
                        <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-logo-orange-500">
                          {index === 0 ? "01 - DENTAL CARE - ROOT CANAL - ENDODONTICS" : "02 - DENTAL CARE - SMILE MAKEOVER - ENDODONTICS"}
                        </span>
                        <h3 className="font-serif text-xl sm:text-[2rem] lg:text-[2.2rem] font-normal tracking-tight text-logo-blue-700 leading-[1.02]">
                          {doctor.name}
                        </h3>
                        <p className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.2em] text-logo-orange-600">
                          {index === 0 ? "Founder & Chief Endodontist" : "Dentist"}
                        </p>
                        <p className="text-[10px] sm:text-[11px] leading-5 text-slate-600 max-w-2xl">
                          {bioPreview}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div className="rounded-2xl border border-[#e5cfa9] bg-[#fbf7f0] px-3 py-2">
                          <p className="text-base font-normal text-logo-blue-700">{doctor.experience.replace(" Years", "")} yrs</p>
                          <p className="mt-1 text-[7px] uppercase tracking-[0.16em] text-logo-orange-500 font-bold">Practising</p>
                        </div>
                        <div className="rounded-2xl border border-[#e5cfa9] bg-[#fbf7f0] px-3 py-2">
                          <p className="text-base font-normal text-logo-blue-700">{index === 0 ? "9k+" : "6k+"}</p>
                          <p className="mt-1 text-[7px] uppercase tracking-[0.16em] text-logo-orange-500 font-bold">Patients Seen</p>
                        </div>
                        <div className="rounded-2xl border border-[#e5cfa9] bg-[#fbf7f0] px-3 py-2">
                          <p className="text-sm font-normal text-logo-blue-700 leading-none">{index === 0 ? "Dent" : "Dent"}</p>
                          <p className="mt-1 text-[7px] uppercase tracking-[0.16em] text-logo-orange-500 font-bold">{index === 0 ? "Conservative Dentistry" : "Dentistry"}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2.5 pt-0">
                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center rounded-full bg-logo-blue-700 px-4 py-2 text-[11px] sm:text-xs font-medium text-white shadow-md transition-colors hover:bg-logo-blue-600"
                        >
                          View profile <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center rounded-full border border-logo-orange-600 bg-transparent px-4 py-2 text-[11px] sm:text-xs font-medium text-logo-orange-600 transition-colors hover:bg-logo-orange-600 hover:text-white"
                        >
                          Book with {firstName}
                        </Link>
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
              <h2 className="font-serif text-xl font-bold text-logo-auburn-500 leading-tight">
                The Four Cornerstones of Clean Clinical Care
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                We operate an modern luxury workspace environment adhering to global clinical parameters.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-logo-blue-100 p-6 sm:p-8 rounded-3xl shadow-xs text-left hover:scale-[1.01] hover:shadow-md transition-all duration-300"
                >
                  <div className="lg:w-12 w-8 h-8 lg:h-12 rounded-2xl bg-logo-blue-50 border border-logo-blue-100/50 text-logo-blue-500 flex items-center justify-center mb-5">
                    <v.icon className="w-4 h-4  text-logo-blue-500" />
                  </div>
                  <h3 className="font-serif text-xs md:text-xl font-bold text-logo-auburn-500 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-slate-600 text-[0.5rem] leading-relaxed">
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
              <h3 className="font-serif text-sm sm:text-xl font-bold text-white leading-tight mt-2">
                We Never Compromise on Safety, Disinfection, or Materials
              </h3>
              <p className="text-slate-200 text-[0.7rem] sm:text-sm leading-relaxed">
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
      <Footer />
    </>
  );
}
