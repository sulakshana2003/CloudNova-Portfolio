import React from "react";
import LogoLoop from "../LogoLoop";
import { BRAND, techLogosRow1, techLogosRow2 } from "./homeData";

const TechStackSection: React.FC = () => {
  return (
    <section id="tech" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-900">Our Tech Stack</h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            We build with modern, reliable tools to deliver fast, secure, and scalable digital products.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <div className="relative h-[90px]">
            <LogoLoop
              logos={techLogosRow1}
              speed={80}
              direction="left"
              logoHeight={52}
              gap={56}
              hoverSpeed={18}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="CloudNova tech stack row 1"
            />
          </div>

          <div className="relative h-[90px]">
            <LogoLoop
              logos={techLogosRow2}
              speed={75}
              direction="right"
              logoHeight={52}
              gap={56}
              hoverSpeed={18}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="CloudNova tech stack row 2"
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div
            className="h-[2px] w-24 rounded-full"
            style={{ backgroundColor: BRAND, opacity: 0.18 }}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
