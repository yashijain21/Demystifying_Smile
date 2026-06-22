import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "./Logo";
import { services } from "../data/services";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const servicesRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY.current;
      const atTop = currentScrollY < 24;

      setHeaderVisible(scrollingUp || atTop);
      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setShowServices(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServices(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0  z-50 bg-transparent transition-all duration-300 ${
        headerVisible ? "translate-y-0" : "-translate-y-full "
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between rounded-full border border-white/80 bg-white/90 px-4 shadow-[0_18px_50px_rgba(114,174,230,0.15)] backdrop-blur-xl sm:px-6">
          <Link to="/" className="flex items-center justify-center gap-3 text-[#203040]">
           <Logo/>  
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
            <Link to="/" className="transition hover:text-secondary">
              Home
            </Link>
            <Link to="/about" className="transition hover:text-secondary">
              About
            </Link>

            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setShowServices(!showServices)}
                className="flex items-center gap-2 transition hover:text-secondary"
              >
                Services
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    showServices ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showServices && (
                <div className="absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur-xl">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => setShowServices(false)}
                      className="block rounded-2xl px-4 py-3 text-sm text-slate-700 transition hover:bg-[#fff4ea] hover:text-secondary"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/gallery" className="transition hover:text-secondary">
              Gallery
            </Link>
            <Link to="/contact" className="transition hover:text-secondary">
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919891073008"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-[#f4f8ff] px-4 py-2 text-sm font-semibold text-[#203040] transition hover:bg-[#fff0e6]"
            >
              <FaPhoneAlt />
              Book Visit
            </a>
          </div>

          <button
            className="rounded-full border border-primary/20 bg-[#f4f8ff] p-3 text-[#203040] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-3 rounded-3xl border border-slate-200 bg-white/95 p-5 text-[#203040] shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium">
              <Link to="/" onClick={closeMobileMenu} className="text-slate-700">
                Home
              </Link>
              <Link to="/about" onClick={closeMobileMenu} className="text-slate-700">
                About
              </Link>

              <div>
                <button
                  onClick={() => setMobileServices(!mobileServices)}
                  className="flex w-full items-center justify-between text-slate-700"
                >
                  <span>Services</span>
                  <FaChevronDown
                    className={`transition-transform ${
                      mobileServices ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServices && (
                  <div className="mt-3 ml-3 flex flex-col gap-2 border-l border-slate-200 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        onClick={closeMobileMenu}
                        className="py-1 text-slate-500"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/gallery" onClick={closeMobileMenu} className="text-slate-700">
                Gallery
              </Link>
              <Link to="/contact" onClick={closeMobileMenu} className="text-slate-700">
                Contact
              </Link>

              <a
                href="tel:+919891073008"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-secondary px-5 py-3 font-semibold text-white"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
