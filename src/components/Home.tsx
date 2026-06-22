import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import ServicesGrid from "./ServicesGrid";
import WhyChooseUs from "./WhyChooseUs";
import TransformationSlider from "./TransformationSlider";
import Testimonials from "./Testimonials";
import ClinicMap from "./ClinicMap";
import Footer from "./Footer";

import { Calendar, Sparkles } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate("/appointments");
    window.scrollTo(0, 0);
  };

  const handleServicesClick = () => {
    navigate("/#services");
  };

  const handleAiClick = () => {
    navigate("/ai-advisor");
    window.scrollTo(0, 0);
  };

  const handleServiceSelect = (slug) => {
    navigate(`/services/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
     <Header onBookClick={handleBookClick} />
    <div className="min-h-screen flex flex-col bg-[#fffaf4] text-slate-800">
     

      <main className="flex-grow ">
        <Hero
          onBookClick={handleBookClick}
          onServicesClick={handleServicesClick}
          onAiClick={handleAiClick}

        />

        <About />

        <ServicesGrid onServiceSelect={handleServiceSelect} />

        <WhyChooseUs />

      

        <Testimonials />

        {/* CTA */}
        <section className="relative overflow-hidden bg-slate-900 px-6 py-14 text-white">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl"></div>

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold">
                Ready to Perfect & Protect Your Smile?
              </h2>

              <p className="mt-3 max-w-2xl text-sm text-slate-400">
                Whether you need invisible aligners, root canal treatment,
                dental implants, or cosmetic smile designing, our experts are
                here to help.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleBookClick}
                className="flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
              >
                <Calendar size={18} />
                Book Appointment
              </button>

              <button
                onClick={handleAiClick}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-orange-200 hover:bg-slate-700"
              >
                <Sparkles size={18} />
                AI Dental Advisor
              </button>
            </div>
          </div>
        </section>

        <ClinicMap />
      </main>

      <Footer />
    </div>
    </>
  );
}