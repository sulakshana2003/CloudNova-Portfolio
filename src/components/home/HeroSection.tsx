import React from "react";
import CloudNovaText from "../../assets/logo.png";
import TextType from "../TextType"; // <-- adjust path if needed

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="flex justify-center">
            <img
              src={CloudNovaText}
              alt="CloudNova"
              className="h-12 md:h-16 lg:h-20 w-auto object-contain"
              draggable={false}
            />
          </h1>

          <p className="mt-6 text-lg font-semibold text-gray-900 uppercase tracking-wide">
            Web based solutions
          </p>

          {/* Text typing effect */}
          <div className="mt-3 text-2xl md:text-4xl text-gray-600 leading-tight">
            <TextType
              text={["Transform Your Business with Cloud Technology"]}
              typingSpeed={75}
              pauseDuration={500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            
            <a
                    href="#services"
                    className="
                    group inline-flex items-center justify-center gap-2
                    px-8 py-4 rounded-2xl font-semibold
                    text-gray-900 bg-white/70
                    border border-gray-200
                    shadow-sm
                    backdrop-blur
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:shadow-lg
                    hover:border-gray-300 hover:bg-white
                    active:translate-y-0 active:scale-[0.99]
                    focus:outline-none focus-visible:ring-4 focus-visible:ring-black/10
                    "
                >
                    <span>View Services</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
