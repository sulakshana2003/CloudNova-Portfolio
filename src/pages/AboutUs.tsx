import Navbar from "../components/ui/shadcn-io/icon-button/nav";
import Footer from "../components/Footer";
import "./AboutUs.css";
import type { ReactNode } from "react";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="au-icon">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
      />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="au-icon">
      <path
        fill="currentColor"
        d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2.2.7 3.4.7.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.4 22.2 1.8 13.6 1.8 3.2 1.8 2.5 2.3 2 3 2h3.3c.7 0 1.2.5 1.2 1.2 0 1.2.2 2.4.7 3.4.1.4.1.9-.2 1.2l-2.2 2.2Z"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="au-icon">
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
      />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="au-arrow">
      <path
        fill="currentColor"
        d="M13 5h-2v12.2l-5.1-5.1-1.4 1.4 7.5 7.5 7.5-7.5-1.4-1.4-5.1 5.1V5Z"
        transform="rotate(-90 12 12)"
      />
    </svg>
  );
}

/** Process icons (simple, clean, consistent) */
function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="au-stepIconSvg">
      <path
        fill="currentColor"
        d="M10 2a8 8 0 1 0 4.9 14.3l4 4 1.4-1.4-4-4A8 8 0 0 0 10 2Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"
      />
    </svg>
  );
}
function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="au-stepIconSvg">
      <path
        fill="currentColor"
        d="M9 2h6a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2Zm6 2H9v2h6V4Zm4 4H5v12h14V8Z"
      />
    </svg>
  );
}
function PaletteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="au-stepIconSvg">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0 0 20h1.5a2.5 2.5 0 0 0 0-5H12a3 3 0 0 1 0-6h5a5 5 0 0 0 0-10h-5Zm-4 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
      />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="au-stepIconSvg">
      <path
        fill="currentColor"
        d="M8.7 16.6 3.8 12l4.9-4.6L7.3 6 1 12l6.3 6 1.4-1.4Zm6.6 0 1.4 1.4 6.3-6-6.3-6-1.4 1.4 4.9 4.6-4.9 4.6ZM10.7 20 13.9 4h-2.1L8.6 20h2.1Z"
      />
    </svg>
  );
}
function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="au-stepIconSvg">
      <path
        fill="currentColor"
        d="M14 4c-3.6 1-6.4 3.8-7.4 7.4L4 14l2.6 2.6C10.2 15.6 13 12.8 14 9.2V4Zm2-2v7.2c0 4.3-2.7 8.2-6.7 9.7L7 20l-3-3 1.1-2.3C6.6 10.7 10.5 8 14.8 8H22V2h-6ZM5 22l2-2-1-1-2 2 1 1Zm8-11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </svg>
  );
}
function LifeRingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="au-stepIconSvg">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 0 1 5.7 2.3L15.5 8.5A4 4 0 0 0 12 8a4 4 0 0 0-3.5.5L6.3 6.3A8 8 0 0 1 12 4Zm-2 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-6 0c0-1.6.5-3.1 1.3-4.3l2.2 2.2A4 4 0 0 0 8 12c0 1.2.5 2.3 1.2 3.1l-2.2 2.2A7.9 7.9 0 0 1 4 12Zm8 8a8 8 0 0 1-5.7-2.3l2.2-2.2A4 4 0 0 0 12 16a4 4 0 0 0 3.5-.5l2.2 2.2A8 8 0 0 1 12 20Zm4.8-4.9A4 4 0 0 0 16 12c0-1.2-.5-2.3-1.2-3.1l2.2-2.2A8 8 0 0 1 20 12a8 8 0 0 1-1.3 4.3l-2.2-2.2Z"
      />
    </svg>
  );
}

type Step = {
  title: string;
  desc: string;
  icon: ReactNode;
};

const steps: Step[] = [
  {
    title: "Discover",
    desc: "We begin by understanding your business needs, challenges, and opportunities through in-depth discussions and requirement analysis.",
    icon: <SearchIcon />,
  },
  {
    title: "Plan",
    desc: "Our experts create a clear roadmap, outlining strategies, timelines, and resources to ensure smooth project execution.",
    icon: <ClipboardIcon />,
  },
  {
    title: "Design",
    desc: "We craft user-focused designs that balance functionality, aesthetics, and intuitive experiences to meet your business goals.",
    icon: <PaletteIcon />,
  },
  {
    title: "Develop",
    desc: "Our team builds secure, scalable, and future-ready solutions using modern technologies tailored to your requirements.",
    icon: <CodeIcon />,
  },
  {
    title: "Implement",
    desc: "We ensure seamless deployment, integration, and testing so your solution runs efficiently from day one.",
    icon: <RocketIcon />,
  },
  {
    title: "Support & Evolve",
    desc: "With ongoing support, updates, and improvements, we help your business stay ahead in a fast-changing digital world.",
    icon: <LifeRingIcon />,
  },
];

export default function AboutUs() {
  return (
    <div className="au-page">
        <Navbar/>
      <header className="au-top">
        <div className="au-container">
          <div className="au-heroPill">
            <h1 className="au-heroTitle">
              Learn More About Us, Our Values <br />
              &amp; How We Build Great Software.
            </h1>
            <p className="au-heroSub">
              We turn ideas into real products with a simple, proven process.
            </p>
          </div>
        </div>
      </header>

      <main className="au-main">
        <div className="au-container">
          {/* About */}
          <section className="au-card" aria-label="About us section">
            <h2 className="au-sectionTitle">About Us</h2>

            <p className="au-paragraph">
              At <strong>CloudNova.</strong>, we’re a{" "}
              <strong>360 Digital Powerhouse</strong> committed to delivering a
              full range of services that help businesses of every size grow and
              succeed. From high-performing web development, SEO, and software
              engineering to AI solutions and targeted digital marketing, we
              tailor each solution to your unique goals. Backed by a skilled
              team and a drive to innovate, we aim to go beyond expectations and
              elevate your digital presence to the next level.
            </p>

            <p className="au-paragraph">
              We prioritise full regulatory compliance and implement the highest
              standards of security in all our solutions. We work in close
              collaboration with your company to deliver a robust, highly
              reputable digital platform, complemented by long-term maintenance
              and strategic SEO enhancements to maximise reach and performance.
            </p>
          </section>

          {/* Process / Steps (like your screenshot) */}
          <section className="au-steps" aria-label="How we work">
            <h2 className="au-sectionTitle au-sectionTitleAlt">
              How We Work
            </h2>

            <div className="au-stepGrid">
              {steps.map((s) => (
                <article key={s.title} className="au-stepCard">
                  <div className="au-stepIcon" aria-hidden="true">
                    {s.icon}
                  </div>

                  <h3 className="au-stepTitle">{s.title}</h3>
                  <p className="au-stepDesc">{s.desc}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

    <Footer/>
    </div>
  );
}