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
      {/* Top Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 text-left sm:px-6 md:grid-cols-2 md:py-16 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Logo size="sm" showText={true} variant="dark" />
          </div>

          <p className="text-xs leading-relaxed text-slate-400">
            Leading advanced dental clinic delivering ISO-standard clinical
            hygiene protocols, painless root canal treatments, dental implants,
            smile makeovers, and invisible aligners in Noida.
          </p>

          <a
            href="https://wa.me/919891073008?text=Hello!%20I'd%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-logo-orange-500 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-logo-orange-600 hover:shadow-lg"
          >
            <MessageSquareText className="h-4 w-4" />
            <span>WhatsApp Consultation</span>
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 border-b border-slate-800 pb-2 font-mono text-xs font-bold uppercase tracking-widest text-white">
            Quick Navigation
          </h4>

          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="block py-1 text-xs font-medium text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 border-b border-slate-800 pb-2 font-mono text-xs font-bold uppercase tracking-widest text-white">
            Our Key Treatments
          </h4>

          <ul className="space-y-2">
            {servicesLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="block py-1 text-xs font-medium text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4 text-xs text-slate-400">
          <h4 className="border-b border-slate-800 pb-2 font-mono text-xs font-bold uppercase tracking-widest text-white">
            Contact Directory
          </h4>

          <div className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-logo-orange-500" />
            <span>
              H-42, Block H, Sector 53, Noida, Uttar Pradesh 201301
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <Phone className="h-4 w-4 shrink-0 text-logo-blue-500" />
            <a
              href="tel:+919891073008"
              className="transition-colors hover:text-white"
            >
              +91 98910 73008
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <Mail className="h-4 w-4 shrink-0 text-logo-blue-500" />
            <a
              href="mailto:info@demystifyingsmiles.com"
              className="transition-colors hover:text-white"
            >
              info@demystifyingsmiles.com
            </a>
          </div>

          <div className="flex justify-between border-t border-slate-800 pt-2 font-mono text-[9px] font-bold uppercase tracking-wide text-slate-500">
            <span>ISO 9001 REGISTERED</span>
            <span>WHO HYGIENE PROTOCOL</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800 bg-slate-950 px-4 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-xs font-medium text-slate-500 md:flex-row">
          <div>
            © {currentYear} Demystifying Smiles Dental Clinic. All Rights
            Reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-slate-300"
            >
              Privacy Policy
            </Link>

            <span>•</span>

            <Link
              to="/terms"
              className="transition-colors hover:text-slate-300"
            >
              Terms of Care
            </Link>

            <span>•</span>

            <a
              href="https://maps.google.com/?q=Demystifying+Smiles+Sector+53+Noida"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-slate-300"
            >
              <span>Find Clinic</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
