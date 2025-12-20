// Services.tsx
import Navbar from "../components/ui/shadcn-io/icon-button/nav";

// Import your videos (include .mp4)
import video1 from "../assets/services/video1.mp4";
import video2 from "../assets/services/video2.mp4";
import video3 from "../assets/services/video3.mp4";
import video4 from "../assets/services/video4.mp4";

const services = [
  {
    title: "Software Development",
    description:
      "CloudNova provides tailor-made software development solutions designed to meet unique business needs. From enterprise applications to industry-specific platforms, our custom software enhances efficiency, scalability, and security. We deliver cutting-edge technology that streamlines processes, integrates seamlessly, and empowers businesses to achieve long-term digital transformation and competitive advantage.",
    videoSrc: video1,
    cta: "Learn More",
  },
  {
    title: "Web / eCommerce Design & Development",
    description:
      "At CloudNova, we specialize in professional web design and development that blends creativity with functionality. Our responsive, SEO-friendly websites are built to engage audiences.",
    videoSrc: video2,
    cta: "Learn More",
  },
  {
    title: "Creative Graphic Design & Branding",
    description:
      "Our creative team brings your brand to life with high-impact visual storytelling. From professional social media posts and digital banners to high-quality flyers and marketing collateral, we design assets that capture attention and drive engagement across all digital and print platforms.",
    videoSrc: video3,
    cta: "Learn More",
  },
  {
    title: "SaaS & Cloud-Based Solutions",
    description:
      "Transform your business with CloudNova’s SaaS and cloud-based solutions. We design scalable, secure, and flexible cloud applications that improve collaboration and reduce infrastructure costs. From CRM platforms to enterprise cloud services, our solutions ensure seamless accessibility, data security, and high performance, enabling businesses to scale faster in digital markets.",
    videoSrc: video4,
    cta: "Learn More",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-white via-orange-50/10 to-white">
      {/* Navbar */}
      <Navbar active="Our Services" />

      {/* Hero (same style as other containers) */}
      <section className="pt-32 pb-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
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
      <section className="max-w-7xl mx-auto px-6 pb-28 space-y-16 md:space-y-24">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-3xl border border-slate-200/70 bg-white/70 backdrop-blur shadow-[0_10px_30px_rgba(15,23,42,0.05)] overflow-hidden"
          >
            <div
              className={`relative p-8 md:p-12 flex flex-col md:items-center gap-10 md:gap-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Text */}
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                  {service.title}
                </h2>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify">
                  {service.description}
                </p>

                {/* Button (no motion) */}
                <button
                  className="
                    inline-flex items-center gap-3 px-8 py-4
                    bg-orange-600 text-white rounded-full font-bold text-lg
                    hover:bg-orange-500
                    focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200/70
                  "
                >
                  {service.cta}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>

              {/* Video */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-[0_18px_50px_rgba(2,6,23,0.14)]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-auto block"
                  >
                    <source src={service.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
