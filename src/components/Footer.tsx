import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import CloudNovaText from "../assets/logo.png";

const BRAND = "rgb(254,64,54)";

const Footer: React.FC = () => {
  return (
    // ✅ Full-width background
    <footer className="w-full mt-16 " style={{ backgroundColor: "rgba(254,64,54,0.06)" }}>
      {/* ✅ Centered content only */}
      <div className="max-w-7xl mx-auto px-4 sm:px-20 lg:px-8">
        {/* TOP CTA */}
        <div className="py-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <h3 className="text-3xl sm:text-4xl font-semibold text-black leading-tight max-w-3xl">
            Ready To Transform Your Ideas <br className="hidden sm:block" />
            Into Impactful Digital Solutions?
          </h3>

          <div className="lg:text-right">
            {/* <p className="text-lg font-semibold" style={{ color: BRAND }}>
              Let’s build together.
            </p> */}

            {/* <a
              href="#contact"
              className="mt-3 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white
                         transition-all duration-700 ease-out hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: BRAND }}
            >
              Book a free consultation <ArrowRight size={18} />
            </a> */}
          </div>
        </div>

        {/* LINKS GRID */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-black/10">
          {/* Brand */}
          <div>
            <img
              src={CloudNovaText}
              alt="CloudNova"
              className="h-9 w-auto object-contain"
              draggable={false}
            />

            <p className="mt-5 text-sm text-gray-700 leading-relaxed max-w-xs">
              Your trusted partner in creating powerful digital solutions — from
              custom software and web apps to modern cloud-based platforms.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full flex items-center justify-center border bg-white
                           transition-all duration-700 ease-out hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "rgba(254,64,54,0.25)" }}
                aria-label="Facebook"
              >
                <span className="text-lg font-bold" style={{ color: BRAND }}>
                  f
                </span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full flex items-center justify-center border bg-white
                           transition-all duration-700 ease-out hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "rgba(254,64,54,0.25)" }}
                aria-label="LinkedIn"
              >
                <span className="text-sm font-bold" style={{ color: BRAND }}>
                  in
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold" style={{ color: BRAND }}>
              Quick Links
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              {[
                { label: "Home", href: "#" },
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Our Approach", href: "#approach" },
                { label: "Contact Us", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:underline underline-offset-4">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xl font-semibold" style={{ color: BRAND }}>
              Our Services
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              {[
                "Software Development",
                "Web / eCommerce Development",
                "Graphic Design & Branding",
                "SaaS & Cloud Solutions",
              ].map((s) => (
                <li key={s} className="leading-relaxed">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold" style={{ color: BRAND }}>
              Contact Us
            </h4>

            <div className="mt-4 space-y-3 text-sm text-gray-800">
              <div className="flex items-start gap-3">
                <MapPin size={18} style={{ color: BRAND }} className="mt-0.5" />
                <p>
                  Your Address Line 1 <br />
                  City, Country
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} style={{ color: BRAND }} />
                <a
                  href="tel:+94703121957"
                  className="hover:underline underline-offset-4"
                >
                  +94 70 312 1957
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} style={{ color: BRAND }} />
                <a
                  href="mailto:cloudnova.team@gmail.com"
                  className="hover:underline underline-offset-4"
                >
                  cloudnova.team@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 text-center text-sm text-gray-700 border-t border-black/10">
          © {new Date().getFullYear()} CloudNova. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
