import React from "react";
import { BRAND, services } from "./homeData";

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-semibold text-gray-900">Our Services</h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            At CloudNova, we don’t just build digital products — we build solutions that solve real business problems. Every project is planned with performance, security, and future growth in mind, so your website, software, or cloud platform stays reliable as your business scales.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={[
                  "group relative overflow-hidden rounded-[28px] border bg-white",
                  "p-6 sm:p-7 lg:p-8",
                  "shadow-sm",
                  "transition-all duration-700 ease-out",
                  "hover:-translate-y-1 hover:shadow-xl",
                ].join(" ")}
                style={{ borderColor: "rgba(153,0,0,0.22)" }}
              >
                {/* glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(700px circle at 20% 10%, rgba(153,0,0,0.10), transparent 55%)",
                  }}
                />

                <div className="relative flex h-full flex-col">
                  <div>
                    <div className="mb-5 sm:mb-6">
                      <div
                        className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white"
                        style={{ border: `2px solid ${BRAND}` }}
                      >
                        <Icon size={20} className="sm:hidden" style={{ color: BRAND }} />
                        <Icon size={22} className="hidden sm:block" style={{ color: BRAND }} />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-medium text-black">
                      {service.title}
                    </h3>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
