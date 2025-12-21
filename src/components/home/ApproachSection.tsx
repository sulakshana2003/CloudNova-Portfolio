import React from "react";
import { approachSteps, BRAND } from "./homeData";

const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-semibold text-gray-900">Our Approach</h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We follow a clear six-step approach, guiding businesses from idea to execution
            with smart, reliable, and future-ready digital solutions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {approachSteps.map(({ title, desc, Icon }, idx) => {
            const tinted = idx % 2 === 1;

            return (
              <div
                key={title}
                className={[
                  "group relative overflow-hidden rounded-[28px] border",
                  "p-7 sm:p-8 bg-white",
                  "shadow-sm transition-all duration-700 ease-out",
                  "hover:-translate-y-1 hover:shadow-xl",
                ].join(" ")}
                style={{
                  borderColor: "rgba(254,64,54,0.30)",
                  backgroundColor: tinted ? "rgba(254,64,54,0.04)" : "#ffffff",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(700px circle at 20% 10%, rgba(254,64,54,0.10), transparent 55%)",
                  }}
                />

                <div className="relative mb-6">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white"
                    style={{ border: `2px solid ${BRAND}` }}
                  >
                    <Icon size={22} style={{ color: BRAND }} />
                  </div>
                </div>

                <h3 className="relative text-2xl font-medium text-black">{title}</h3>

                <p className="relative mt-4 text-gray-700 leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
