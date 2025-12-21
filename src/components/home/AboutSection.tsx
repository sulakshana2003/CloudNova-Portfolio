/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AboutImg from "../../assets/aboutus.jpg";
//import { BRAND } from "./homeData";
import { LiquidButton } from "../../components/ui/shadcn-io/liquid-button";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div
            className="lg:col-span-8 rounded-[32px] p-3 sm:p-6 border text-left"
            style={{
              backgroundColor: "rgba(0,0,0,0.0)",
              borderColor: "rgba(254,64,54,0.18)",
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-tight">
              We build great digital products <br className="hidden sm:block" />
              and cloud solutions.
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl">
              CloudNova specializes in building modern web platforms, custom software,
              and scalable cloud-based solutions that help businesses grow. From idea
              to launch, we focus on clean design, secure development, and smooth
              deployment — so you can streamline operations, improve efficiency, and
              scale with confidence.
            </p>

            <div className="mt-8">
              <a href="#contact" className="inline-block">
                <LiquidButton variant="default"
                style={{ ["--liquid-button-color" as any]: "rgb(254,64,54)" }}>
                  About Us <span className="ml-2">→</span>
                </LiquidButton>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-[28px] overflow-hidden shadow-sm border border-gray-200">
              <img
                src={AboutImg}
                alt="About CloudNova"
                className="w-full h-[320px] sm:h-[360px] lg:h-[420px] object-cover"
                draggable={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
