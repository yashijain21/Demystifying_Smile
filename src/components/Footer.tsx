import React from "react";
import { Link } from "react-router-dom";

import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  MessageSquareText,
} from "lucide-react";

import Logo from "./Logo";


export default function Footer() {

  const currentYear = new Date().getFullYear();


  const servicesLinks = [
    {
      label: "Dental Implants",
      path: "/services/dental-implants",
    },
    {
      label: "Smile Makeover",
      path: "/services/smile-makeover",
    },
    {
      label: "Root Canal Treatment",
      path: "/services/root-canal-treatment",
    },
    {
      label: "Teeth Whitening",
      path: "/services/teeth-whitening",
    },
    {
      label: "Clear Aligners",
      path: "/services/clear-aligners",
    },
  ];


  const quickLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Our Services",
      path: "/services",
    },
    {
      label: "Contact Us",
      path: "/contact",
    },
    {
      label: "Book Appointment",
      path: "/contact",
    },
  ];



  return (

    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">


      {/* Main Footer */}

      <div
        className="
        mx-auto
        grid
        max-w-7xl
        grid-cols-2
        gap-x-5
        gap-y-8
        px-5
        py-8
        sm:px-6
        md:grid-cols-2
        md:gap-10
        md:py-16
        lg:grid-cols-4
        "
      >



        {/* Brand */}

        <div className="space-y-3">

          <Logo
            size="sm"
            showText={true}
            variant="light"
          />


          <p
            className="
            max-w-[150px]
            text-xs
            leading-relaxed
            text-slate-400
            "
          >
            Advanced dental care with modern treatments,
            painless procedures and personalized smile solutions
            in Noida.
          </p>



          <a
            href="https://wa.me/919891073008?text=Hello!%20I'd%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            gap-1.5
            rounded-lg
            bg-logo-orange-500
            px-3
            py-2
            text-xs
            font-bold
            text-white
            hover:bg-logo-orange-600
            "
          >

            <MessageSquareText className="h-3.5 w-3.5"/>

            WhatsApp

          </a>


        </div>





        {/* Quick Links */}

        <div>


          <h4
            className="
            mb-3
            border-b
            border-slate-800
            pb-2
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-white
            "
          >
            Quick Links
          </h4>



          <ul className="space-y-1">


            {
              quickLinks.map((link)=>(

                <li key={link.path}>

                  <Link
                    to={link.path}
                    className="
                    block
                    text-xs
                    text-slate-400
                    hover:text-white
                    "
                  >
                    {link.label}
                  </Link>

                </li>

              ))
            }


          </ul>


        </div>





        {/* Services */}

        <div>


          <h4
            className="
            mb-3
            border-b
            border-slate-800
            pb-2
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-white
            "
          >
            Treatments
          </h4>



          <ul className="space-y-1">


            {
              servicesLinks.map((link)=>(

                <li key={link.path}>

                  <Link
                    to={link.path}
                    className="
                    block
                    text-xs
                    text-slate-400
                    hover:text-white
                    "
                  >
                    {link.label}
                  </Link>

                </li>

              ))
            }


          </ul>


        </div>







        {/* Contact */}

        <div>


          <h4
            className="
            mb-3
            border-b
            border-slate-800
            pb-2
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-white
            "
          >
            Contact
          </h4>



          <div
            className="
            space-y-3
            text-xs
            text-slate-400
            "
          >


            <div className="flex items-start gap-2">


              <MapPin
                className="
                h-3.5
                w-3.5
                shrink-0
                text-logo-orange-500
                "
              />


              <span>
                H-42, Block H,
                Sector 53,
                Noida
              </span>


            </div>




            <div className="flex items-center gap-2">


              <Phone
                className="
                h-3.5
                w-3.5
                text-logo-blue-500
                "
              />


              <a
                href="tel:+919891073008"
                className="hover:text-white"
              >
                +91 98910 73008
              </a>


            </div>




            <div className="flex items-center gap-2">


              <Mail
                className="
                h-3.5
                w-3.5
                text-logo-blue-500
                "
              />


              <a
                href="mailto:info@demystifyingsmiles.com"
                className="hover:text-white"
              >
                Email
              </a>


            </div>


          </div>


        </div>



      </div>






      {/* Bottom Footer */}

      <div
        className="
        border-t
        border-slate-800
        bg-slate-950
        px-5
        py-4
        "
      >


        <div
          className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-3
          text-center
          text-xs
          text-slate-500
          md:flex-row
          "
        >


          <span>
            © {currentYear} Demystifying Smiles Dental Clinic.
          </span>



          <div
            className="
            flex
            items-center
            gap-3
            "
          >

            <Link
              to="/privacy-policy"
              className="hover:text-white"
            >
              Privacy
            </Link>


            <span>•</span>


            <Link
              to="/terms"
              className="hover:text-white"
            >
              Terms
            </Link>


            <span>•</span>


            <a
              href="https://maps.google.com/?q=Demystifying+Smiles+Sector+53+Noida"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              items-center
              gap-1
              hover:text-white
              "
            >

              Find Clinic

              <ExternalLink className="h-3 w-3"/>

            </a>


          </div>


        </div>


      </div>


    </footer>

  );

}
