import React, { useEffect, useMemo, useRef, useState } from "react";
import Threads from "../components/Threads";
import Navbar from "../components/ui/shadcn-io/icon-button/nav";
import CloudNovaText from "../assets/logo.png";
import { FiCode, FiGlobe, FiPenTool, FiCloud } from "react-icons/fi";
import LogoLoop from "../components/LogoLoop";
import { Search, ClipboardList, Palette, Code2, Rocket, LifeBuoy } from "lucide-react";
import AboutImg from '../assets/aboutus.jpg';
import Footer from "../components/Footer";



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
const BRAND = "rgb(254,64,54)";

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

const approachSteps = [
  {
    title: "Discover",
    desc: "We begin by understanding your business needs, challenges, and opportunities through in-depth discussions and requirement analysis.",
    Icon: Search,
  },
  {
    title: "Plan",
    desc: "Our experts create a clear roadmap, outlining strategies, timelines, and resources to ensure smooth project execution.",
    Icon: ClipboardList,
  },
  {
    title: "Design",
    desc: "We craft user-focused designs that balance functionality, aesthetics, and intuitive experiences to meet your business goals.",
    Icon: Palette,
  },
  {
    title: "Develop",
    desc: "Our team builds secure, scalable, and future-ready solutions using modern technologies tailored to your business requirements.",
    Icon: Code2,
  },
  {
    title: "Implement",
    desc: "We ensure seamless deployment, integration, and testing so your solution runs efficiently from day one.",
    Icon: Rocket,
  },
  {
    title: "Support & Evolve",
    desc: "With ongoing support, updates, and improvements, we help your business stay ahead in a fast-changing digital world.",
    Icon: LifeBuoy,
  },
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
      <div className="relative z-10 w-full flex-1 flex flex-col">
        <Navbar active="Home" />

        <main>
          {/* HERO */}
          <section className="relative min-h-screen  flex items-center">
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
          // responsive padding
          "p-6 sm:p-7 lg:p-8",
          "shadow-sm",
          // smoother hover
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

        {/* CONTENT */}
        <div className="relative flex h-full flex-col">
          {/* top */}
          <div>
            {/* icon badge */}
            <div className="mb-5 sm:mb-6">
              <div
                className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white"
                style={{ border: "2px solid rgb(254,64,54)" }}
              >
                <Icon size={20} className="sm:hidden" style={{ color: "rgb(254,64,54)" }} />
                <Icon size={22} className="hidden sm:block" style={{ color: "rgb(254,64,54)" }} />
              </div>
            </div>

            {/* title */}
            <h3 className="text-xl sm:text-2xl font-medium text-black">
              {service.title}
            </h3>

            {/* description */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* bottom space (keeps cards aligned nicely even if text differs) */}
          <div className="mt-6" />
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




<section id="approach" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header like screenshot: left title + right description on large screens */}
    <div className="flex flex-col items-center text-center">
    <h2 className="text-4xl font-semibold text-gray-900">Our Approach</h2>

    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
      We follow a clear six-step approach, guiding businesses from idea to execution
      with smart, reliable, and future-ready digital solutions.
    </p>
  </div>


    {/* Cards */}
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
              borderColor: "rgba(254,64,54,0,0.30)",
              backgroundColor: tinted ? "rgba(254,64,54,0.04)" : "#ffffff",
            }}
          >
            {/* soft glow on hover */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(700px circle at 20% 10%, rgba(254,64,54,0.10), transparent 55%)",
              }}
            />

            {/* icon badge (replaces number) */}
            <div className="relative mb-6">
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white"
                style={{ border: `2px solid ${BRAND}` }}
              >
                <Icon size={22} style={{ color: BRAND }} />
              </div>
            </div>

            <h3 className="relative text-2xl font-medium text-black">{title}</h3>

            <p className="relative mt-4 text-gray-700 leading-relaxed">
              {desc}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

  


          {/* About us (full width background, centered card) */}
          <section id="aboutpage" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      {/* LEFT: About card */}
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white
                       transition-all duration-700 ease-out hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: BRAND }}
          >
            About Us
            <span className="transition-transform duration-700 ease-out group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* RIGHT: Image card */}
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


          {/* FOOTER */}
          
          
          
          
        </main>
        <Footer/>
      </div>
    </div>
    

  );
};

export default Home;
