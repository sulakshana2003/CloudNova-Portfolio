import type { IconType } from "react-icons";
import { FiCloud, FiCode, FiGlobe, FiPenTool } from "react-icons/fi";
import { ClipboardList, Code2, LifeBuoy, Palette, Rocket, Search } from "lucide-react";

export const HIDE_AFTER = 1000;
export const FADE_MS = 500;

// Brand color used elsewhere (Threads): rgb(153,0,0)
export const BRAND = "rgb(254,64,54)";

export type Service = {
  title: string;
  description: string;
  icon: IconType;
};

export const services: Service[] = [
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
];

export type TechLogo = { src: string; alt: string; href: string };

export const techLogosRow1: TechLogo[] = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", href: "https://react.dev" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", href: "https://nextjs.org" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", href: "https://www.typescriptlang.org" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS", href: "https://tailwindcss.com" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js", href: "https://nodejs.org" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express", href: "https://expressjs.com" },
];

export const techLogosRow2: TechLogo[] = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", alt: "Vite", href: "https://vitejs.dev" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker", href: "https://www.docker.com" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", href: "https://www.postgresql.org" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", href: "https://www.mongodb.com" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", alt: "Firebase", href: "https://firebase.google.com" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub", href: "https://github.com" },
];

export type ApproachStep = {
  title: string;
  desc: string;
  Icon: React.ElementType;
};

export const approachSteps: ApproachStep[] = [
  { title: "Discover", desc: "We begin by understanding your business needs, challenges, and opportunities through in-depth discussions and requirement analysis.", Icon: Search },
  { title: "Plan", desc: "Our experts create a clear roadmap, outlining strategies, timelines, and resources to ensure smooth project execution.", Icon: ClipboardList },
  { title: "Design", desc: "We craft user-focused designs that balance functionality, aesthetics, and intuitive experiences to meet your business goals.", Icon: Palette },
  { title: "Develop", desc: "Our team builds secure, scalable, and future-ready solutions using modern technologies tailored to your business requirements.", Icon: Code2 },
  { title: "Implement", desc: "We ensure seamless deployment, integration, and testing so your solution runs efficiently from day one.", Icon: Rocket },
  { title: "Support & Evolve", desc: "With ongoing support, updates, and improvements, we help your business stay ahead in a fast-changing digital world.", Icon: LifeBuoy },
];
