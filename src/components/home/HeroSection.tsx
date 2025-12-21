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
            <button className="px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors shadow-lg">
              Get Started
            </button>
            <a
              href="#services"
              className="px-8 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
