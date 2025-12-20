import React, { useEffect, useMemo, useRef, useState } from "react";
import Threads from "../components/Threads";
import Navbar from "../components/ui/shadcn-io/icon-button/nav";
import CloudNovaText from "../assets/logo.png";
import { FiCode, FiGlobe, FiPenTool, FiCloud } from "react-icons/fi";
import LogoLoop from "../components/LogoLoop";



const Home: React.FC = () => {
  const HIDE_AFTER = 1000;
  const FADE_MS = 500;

  const [showThreads, setShowThreads] = useState(true);
  const [renderThreads, setRenderThreads] = useState(true);

  const hideTimer = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  const services = useMemo(
  () => [
    {
      title: "Software Development",
      description:
        "CloudNova provides tailor-made software development solutions designed to meet unique business needs. From enterprise applications to industry-specific platforms, our custom software enhances efficiency, scalability, and security. We deliver cutting-edge technology that streamlines processes, integrates seamlessly, and empowers businesses to achieve long-term digital transformation and competitive advantage.",
      icon: FiCode,
    },
    {
      title: "Web / eCommerce Design & Development",
      description:
        "At CloudNova, we specialize in professional web design and development that blends creativity with functionality. Our responsive, SEO-friendly websites are built to engage audiences.",
      icon: FiGlobe,
    },
    {
      title: "Creative Graphic Design & Branding",
      description:
        "Our creative team brings your brand to life with high-impact visual storytelling. From professional social media posts and digital banners to high-quality flyers and marketing collateral, we design assets that capture attention and drive engagement across all digital and print platforms.",
      icon: FiPenTool,
    },
    {
      title: "SaaS & Cloud-Based Solutions",
      description:
        "Transform your business with CloudNova’s SaaS and cloud-based solutions. We design scalable, secure, and flexible cloud applications that improve collaboration and reduce infrastructure costs. From CRM platforms to enterprise cloud services, our solutions ensure seamless accessibility, data security, and high performance, enabling businesses to scale faster in digital markets.",
      icon: FiCloud,
    },
  ],
  []
);

// Brand color used elsewhere (Threads): rgb(153,0,0)
const BRAND = "rgb(153,0,0)";

const techLogosRow1 = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", href: "https://react.dev" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", href: "https://nextjs.org" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", href: "https://www.typescriptlang.org" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS", href: "https://tailwindcss.com" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js", href: "https://nodejs.org" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express", href: "https://expressjs.com" },
];

const techLogosRow2 = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", alt: "Vite", href: "https://vitejs.dev" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker", href: "https://www.docker.com" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", href: "https://www.postgresql.org" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", href: "https://www.mongodb.com" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", alt: "Firebase", href: "https://firebase.google.com" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub", href: "https://github.com" },
];




  useEffect(() => {
    const onScroll = () => {
      const shouldBeVisible = window.scrollY < HIDE_AFTER;
      if (shouldBeVisible === isVisibleRef.current) return;
      isVisibleRef.current = shouldBeVisible;

      if (shouldBeVisible) {
        if (hideTimer.current) {
          window.clearTimeout(hideTimer.current);
          hideTimer.current = null;
        }
        setRenderThreads(true);
        requestAnimationFrame(() => setShowThreads(true));
      } else {
        setShowThreads(false);
        hideTimer.current = window.setTimeout(() => {
          setRenderThreads(false);
        }, FADE_MS);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Threads background: always full viewport */}
      {renderThreads && (
        <div
          className={`inset-0 z-0 transition-opacity duration-500 ${
            showThreads ? "opacity-100" : "opacity-0"
          } pointer-events-none`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 opacity-80">
            <Threads
              color={/* [0, 0, 0] */[153,0,0]}
              amplitude={3}
              distance={0}
              enableMouseInteraction={false}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <Navbar active="Home" />

        <main>
          {/* HERO */}
          <section className="relative min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
              <div className="ax-w-3xl text-center mx-auto">
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

                <p className="mt-3 text-2xl md:text-4xl text-gray-600 leading-tight">
                  Transform Your Business with Cloud Technology
                </p>

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

          {/* SERVICES (full width background, centered content) */}
            <section id="services" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col items-center text-center">
    <h2 className="text-4xl font-semibold text-gray-900">Our Services</h2>

    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
      We follow a clear approach, guiding businesses from idea to execution
      with smart, reliable, and future-ready digital solutions.
    </p>
  </div>


    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
  {services.map((service) => {
    const Icon = service.icon;

    return (
      <div
        key={service.title}
        className={[
          "group relative overflow-hidden rounded-[28px] border bg-white",
          "p-8 shadow-sm",
          "transition-all duration-700 ease-out",
          "hover:-translate-y-1.5 hover:shadow-xl",
        ].join(" ")}
        style={{ borderColor: "rgba(153,0,0,0.22)" }}
      >
        {/* smooth hover glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(800px circle at 20% 10%, rgba(153,0,0,0.10), transparent 55%)",
          }}
        />

        {/* CONTENT: justify-between makes it "justified" vertically */}
        <div className="relative h-full min-h-[240px] flex flex-col justify-between">
          {/* Top */}
          <div>
            {/* Icon badge (outline) */}
            <div className="mb-6">
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white"
                style={{ border: "2px solid rgb(153,0,0)" }}
              >
                <Icon size={22} style={{ color: "rgb(153,0,0)" }} />
              </div>
            </div>

            {/* Title (black, not bold) */}
            <h3 className="text-2xl font-medium text-black">
              {service.title}
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Bottom (optional: add button/link later)
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "rgb(153,0,0)" }}
          >
            Learn More <span className="transition-transform duration-700 ease-out group-hover:translate-x-1.5">→</span>
          </a>
          */}
        </div>
      </div>
    );
  })}
</div>

  </div>
</section>

          <section id="tech" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title + subtitle (like your Clients section) */}
    <div className="text-center">
      <h2 className="text-4xl font-semibold text-gray-900">Our Tech Stack</h2>
      <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
        We build with modern, reliable tools to deliver fast, secure, and scalable digital products.
      </p>
    </div>

    {/* Two logo rows (smooth + clean like the screenshot) */}
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

    {/* Optional thin accent line like a “section separator” */}
    <div className="mt-10 flex justify-center">
      <div className="h-[2px] w-24 rounded-full" style={{ backgroundColor: BRAND, opacity: 0.18 }} />
    </div>
  </div>
</section>

  


          {/* CONTACT (full width background, centered card) */}
          <section id="contact" className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">
                  Get in touch
                </h2>
                <p className="mt-2 text-gray-600">
                  Tell us what you need — we’ll recommend the best solution.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-6 text-gray-800">
                  <div className="rounded-xl border border-gray-200 p-5">
                    <div className="font-semibold text-gray-900">
                      Sulakshana
                    </div>
                    <div className="mt-1">+94 70 312 1957</div>
                  </div>
                  <div className="rounded-xl border border-gray-200 p-5">
                    <div className="font-semibold text-gray-900">Jeevesh</div>
                    <div className="mt-1">+94 75 381 2801</div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-gray-200 p-5">
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="mt-1">cloudnova.team@gmail.com</div>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="py-10 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex flex-wrap gap-3 justify-between">
              <span>© {new Date().getFullYear()} CloudNova</span>
              <span>cloudnova.team@gmail.com</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Home;
