// Services.tsx
import { Link } from "react-router-dom";
import Navbar from "../components/ui/shadcn-io/icon-button/nav";

import video1 from "../assets/services/video1.mp4";
import video2 from "../assets/services/video2.mp4";
import video3 from "../assets/services/video3.mp4";
import video4 from "../assets/services/video4.mp4";

type ServiceItem = {
  title: string;
  description: string;
  videoSrc: string;
  cta: string;
  path: string;
};

const services: ServiceItem[] = [
  {
    title: "Software Development",
    description:
      "CloudNova provides tailor-made software development solutions designed to meet unique business needs. From enterprise applications to industry-specific platforms, our custom software enhances efficiency, scalability, and security. We deliver cutting-edge technology that streamlines processes, integrates seamlessly, and empowers businesses to achieve long-term digital transformation and competitive advantage.",
    videoSrc: video1,
    cta: "Learn More",
    path: "/services/software-development",
  },
  {
    title: "Web Design & Development",
    description:
      "At CloudNova, we specialize in professional web design and development that blends creativity with functionality. Our responsive, SEO-friendly websites are built to engage audiences.",
    videoSrc: video2,
    cta: "Learn More",
    path: "/services/web-development",
  },
  {
    title: "Creative Graphic Design & Branding",
    description:
      "Our creative team brings your brand to life with high-impact visual storytelling. From professional social media posts and digital banners to high-quality flyers and marketing collateral, we design assets that capture attention and drive engagement across all digital and print platforms.",
    videoSrc: video3,
    cta: "Learn More",
    path: "/services/digital-marketing",
  },
  {
    title: "SaaS & Cloud-Based Solutions",
    description:
      "Transform your business with CloudNova’s SaaS and cloud-based solutions. We design scalable, secure, and flexible cloud applications that improve collaboration and reduce infrastructure costs. From CRM platforms to enterprise cloud services, our solutions ensure seamless accessibility, data security, and high performance, enabling businesses to scale faster in digital markets.",
    videoSrc: video4,
    cta: "Learn More",
    path: "/services/saas-cloud-solutions",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-white via-orange-50/10 to-white">
      <Navbar active="Our Services" />

      {/* Hero */}
      <section className="pt-32 pb-14 px-6">
        <div className="max-w-6xl mx-auto">
          {/* ✅ no shadow, ✅ background color rgb(254,64,54) with opacity */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-[rgb(254,64,54)]/10 backdrop-blur">
            <div className="relative px-6 sm:px-10 md:px-14 py-12 md:py-16 text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
                Our Services
              </h1>

              <p className="mt-5 max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
                Innovative digital solutions that design, optimize, and transform
                businesses for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-6xl mx-auto px-6 pb-28 space-y-10 md:space-y-14">
        {services.map((service, index) => (
          <div
            key={service.path}
            className={`flex flex-col md:items-center gap-8 md:gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* VIDEO */}
            <div className="flex-1 flex justify-center">
              <div className="w-[320px] h-[250px] sm:w-[360px] sm:h-[280px] md:w-[420px] md:h-[320px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                >
                  <source src={service.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Text Card */}
            <div className="flex-1">
              {/* ✅ no shadow, ✅ background color rgb(254,64,54) with opacity */}
              <div className="relative rounded-3xl border border-slate-200/70 bg-[rgb(254,64,54)]/10 backdrop-blur p-7 md:p-10">
                <div className="space-y-5">
                  <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-base text-slate-700 leading-relaxed text-justify">
                    {service.description}
                  </p>

                  <Link
                    to={service.path}
                    className="
                      inline-flex items-center gap-3
                      px-[25px] py-[15px]
                      text-base leading-[16px] font-bold
                      rounded-full
                      bg-orange-600 text-white
                      transition-colors duration-200
                      hover:bg-orange-500
                      focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200/70
                    "
                  >
                    {service.cta}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
