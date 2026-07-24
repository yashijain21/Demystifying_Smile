import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import Logo from "./Logo";
import { services } from "../data/services";

export default function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isHero, setIsHero] = useState(true);

  const servicesRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const scrollingUp = currentScrollY < lastScrollY.current;
      const atTop = currentScrollY < 50;

      setHeaderVisible(scrollingUp || atTop);

      // Hero text color control
      setIsHero(atTop);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setShowServices(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);


  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServices(false);
  };


  const isServiceDetailPage = pathname.startsWith("/services/");
  const isHeroPage = isHero && !isServiceDetailPage;

  const textColor = isHeroPage
    ? "text-white"
    : "text-[#203040]";
  const mobileMenuShellColor = isHeroPage
    ? "border-white/20 bg-slate-950/80 text-white"
    : "border-white/30 bg-white/40 text-[#203040]";
  const mobileMenuLinkColor = isHeroPage
    ? "text-white"
    : "text-[#203040]";
  const mobileMenuSubLinkColor = isHeroPage
    ? "text-white/80"
    : "text-slate-600";


  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-500
        ${
          headerVisible
            ? "translate-y-0"
            : "-translate-y-full"
        }
      `}
    >

      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">


        {/* NAVBAR */}

        <div
          className="
            flex h-16 items-center justify-between
            rounded-full
            border border-white/30
            bg-white/20
            px-4
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            backdrop-blur-2xl
            backdrop-saturate-150
            sm:px-6
          "
        >


          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
           <Logo variant={isHeroPage ? "light" : "dark"} />
          </Link>



          {/* DESKTOP MENU */}

          <nav
            className={`
              hidden lg:flex
              items-center
              gap-8
              text-sm
              font-medium
              ${textColor}
            `}
          >

            <Link
              to="/"
              className="transition hover:text-secondary"
            >
              Home
            </Link>


            <Link
              to="/about"
              className="transition hover:text-secondary"
            >
              About
            </Link>



            {/* SERVICES */}

            <div
              className="relative"
              ref={servicesRef}
            >

              <button
                onClick={() =>
                  setShowServices(!showServices)
                }
                className="
                  flex items-center gap-2
                  transition
                  hover:text-secondary
                "
              >

                Services

                <FaChevronDown
                  className={`
                    transition-transform duration-300
                    ${
                      showServices
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>



              {showServices && (

                <div
                  className="
                    absolute
                    top-full
                    left-1/2
                    mt-4
                    w-72
                    -translate-x-1/2
                    rounded-3xl
                    border border-white/30
                    bg-white/40
                    p-3
                    shadow-2xl
                    backdrop-blur-2xl
                  "
                >

                  {services.map((service)=>(
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() =>
                        setShowServices(false)
                      }
                      className="
                        block
                        rounded-2xl
                        px-4
                        py-3
                        text-[#203040]
                        transition
                        hover:bg-white/50
                        hover:text-secondary
                      "
                    >
                      {service.title}
                    </Link>
                  ))}

                </div>

              )}

            </div>



            <Link
              to="/gallery"
              className="transition hover:text-secondary"
            >
              Gallery
            </Link>


            <Link
              to="/contact"
              className="transition hover:text-secondary"
            >
              Contact
            </Link>


          </nav>




          {/* DESKTOP BUTTON */}

          <div className="hidden lg:flex">

            <a
              href="tel:+919891073008"
              className={`
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-white/30
                bg-white/30
                px-5
                py-2.5
                text-sm
                font-semibold
                backdrop-blur-xl
                shadow-sm
                transition
                hover:bg-secondary

                hover:shadow-lg
                ${textColor}
              `}
            >

              <FaPhoneAlt />

              Book Visit

            </a>

          </div>




          {/* MOBILE ICON */}

          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className={`
              rounded-full
              border border-white/30
              bg-white/30
              p-3
              backdrop-blur-xl
              lg:hidden
              ${textColor}
            `}
          >

            {
              mobileOpen
                ? <HiX size={24}/>
                : <HiMenuAlt3 size={24}/>
            }

          </button>


        </div>





        {/* MOBILE MENU */}

        {mobileOpen && (

          <div
            className={`
              mt-3
              rounded-3xl
              border
              p-5
              shadow-2xl
              backdrop-blur-2xl
              lg:hidden
              ${mobileMenuShellColor}
            `}
          >

            <div
              className={`
                flex
                flex-col
                gap-5
                text-sm
                font-medium
                ${mobileMenuLinkColor}
              `}
            >

              <Link
                to="/"
                onClick={closeMobileMenu}
              >
                Home
              </Link>


              <Link
                to="/about"
                onClick={closeMobileMenu}
              >
                About
              </Link>



              <button
                onClick={() =>
                  setMobileServices(!mobileServices)
                }
                className="
                  flex
                  justify-between
                "
              >

                Services

                <FaChevronDown
                  className={
                    mobileServices
                      ? "rotate-180"
                      : ""
                  }
                />

              </button>



              {mobileServices && (

                <div
                  className="
                    ml-3
                    flex
                    flex-col
                    gap-2
                    border-l
                    border-slate-300/40
                    pl-4
                  "
                >

                  {services.map((service)=>( 
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={closeMobileMenu}
                      className={mobileMenuSubLinkColor}
                    >
                      {service.title}
                    </Link>
                  ))}

                </div>

              )}



              <Link
                to="/gallery"
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>


              <Link
                to="/contact"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>



              <a
                href="tel:+919891073008"
                className="
                  rounded-full
                  bg-secondary
                  px-5
                  py-3
                  text-center
                  font-semibold
                  text-white
                "
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
