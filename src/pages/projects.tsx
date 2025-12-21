import { useEffect, useState } from "react";
import Navbar from "../components/ui/shadcn-io/icon-button/nav";



type Status = "Live" | "Case Study" | "In Progress";
type Category = "E-commerce" | "POS" | "Website" | "Dashboard" | "Mobile";

type Project = {
    id: string;
    name: string;
    tagline: string;
    description: string;
    category: Category;
    status: Status;
    year: string;
    duration: string;
    tech: string[];
    highlights: string[];
    href: string;
    images: string[];
};

const PROJECTS: Project[] = [
    {
        id: "p1",
        name: "BuyNest",
        tagline: "E-Commerce & Inventory Management System for Mihisara Grocery",
        description:
            "A complete supermarket digitalization platform with online shopping, real-time stock visibility, inventory control, low-stock alerts, order tracking, and sales analytics dashboards.",
        category: "E-commerce",
        status: "Live",
        year: "2025",
        duration: "Full-stack system",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
        highlights: [
            "Real-time stock availability",
            "Inventory auto-updates on purchase",
            "Low-stock admin alerts",
            "Order tracking & history",
            "Sales dashboard insights",
            "Responsive UI",
        ],
        href: "#buynest",
        images: [
            "/projects/buynest-1.png",
            "/projects/buynest-2.png",
            "/projects/buynest-3.png",
        ],
    },
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-white text-neutral-900">
            <Navbar active="Projects" />

            {/* Header */}
            <section className="mx-auto max-w-7xl px-6 pt-0 md:pt-14 mt-10">
                <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-10">
                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl">
                            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-semibold text-neutral-700">
                                <span className="h-2 w-2 rounded-full bg-orange-500" />
                                OUR WORK
                            </p>

                            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                                Projects we’ve built at{" "}
                                <span className="text-orange-500">CloudNova</span>
                                <span className="text-orange-500">.</span>
                            </h1>

                            <p className="mt-4 text-neutral-600">
                                A selection of products and client work — e-commerce, POS systems, dashboards,
                                and modern websites built with clean UI and scalable code.
                            </p>
                        </div>

                        {/* Mini stats */}
                        <div className="grid w-full gap-3 md:max-w-sm">
                            <StatCard label="Delivered" value="1" hint="Real project shipped" />
                            <StatCard label="Focus" value="E-commerce" hint="Inventory + online shopping" />
                            <StatCard label="Stack" value="Full-stack" hint="React + Node + MongoDB" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="mx-auto max-w-7xl px-6 pb-16 pt-10">
                <div className="mb-6 flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-semibold tracking-tight">Featured Project</h2>
                        <p className="mt-1 text-sm text-neutral-600">
                            A quick look at what we’ve built recently.
                        </p>
                    </div>

                    <div className="hidden text-sm text-neutral-500 md:block">
                        {PROJECTS.length} project
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {PROJECTS.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </section>
        </div>
    );
}

/* ---------------- Components ---------------- */

function StatCard({ label, value, hint }: { label: string; value: string; hint: string }) {
    return (
        <div className="group rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md">
            <p className="text-xs font-semibold text-neutral-500">{label}</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
            <p className="mt-1 text-sm text-neutral-600">{hint}</p>
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const [hovered, setHovered] = useState(false);
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        if (!hovered) return;
        if (!project.images || project.images.length <= 1) return;

        const t = setInterval(() => {
            setIdx((prev) => (prev + 1) % project.images.length);
        }, 1200);

        return () => clearInterval(t);
    }, [hovered, project.images]);

    return (
        <a
            href={project.href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false);
                setIdx(0);
            }}
            className={[
                "group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm",
                "transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
            ].join(" ")}
        >
            <div className="grid grid-cols-11">
                {/* LEFT: Image (4/11) */}
                <div className="col-span-11 md:col-span-4">
                    <div className="relative h-56 overflow-hidden md:h-full md:min-h-[340px] md:rounded-l-3xl">
                        {/* Sliding track */}
                        <div
                            className="absolute inset-0 flex transition-transform duration-700 ease-out"
                            style={{ transform: `translateX(-${idx * 100}%)` }}
                        >
                            {project.images.map((src, i) => (
                                <img
                                    key={src + i}
                                    src={src}
                                    alt={`${project.name} preview ${i + 1}`}
                                    className={[
                                        "h-full w-full shrink-0 object-cover",
                                        "transition duration-500",
                                        hovered ? "scale-[1.04]" : "scale-100",
                                    ].join(" ")}
                                    loading="lazy"
                                />
                            ))}
                        </div>

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-black/0" />

                        {/* Top-left chips */}
                        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm backdrop-blur">
                {project.category}
              </span>
                            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm backdrop-blur">
                {project.year}
              </span>
                        </div>

                        {/* Status chip */}
                        <div className="absolute right-4 top-4">
                            <StatusPill status={project.status} />
                        </div>

                        {/* Dots indicator */}
                        {project.images.length > 1 && (
                            <div className="absolute bottom-4 left-4 flex gap-2">
                                {project.images.map((_, i) => (
                                    <span
                                        key={i}
                                        className={[
                                            "h-1.5 w-5 rounded-full transition",
                                            i === idx ? "bg-white/90" : "bg-white/40",
                                        ].join(" ")}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT: Content (7/11) */}
                <div className="col-span-11 md:col-span-7">
                    <div className="relative p-6 md:p-8">
                        <div className="pointer-events-none absolute -inset-16 opacity-0 transition duration-300 group-hover:opacity-100">
                            <div className="h-full w-full bg-[radial-gradient(circle_at_35%_20%,rgba(255,106,43,0.12),transparent_60%)]" />
                        </div>

                        <div className="relative">
                            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                                {project.name}
                            </h3>
                            <p className="mt-1 text-sm font-semibold text-orange-600 md:text-base">
                                {project.tagline}
                            </p>

                            <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-[15px]">
                                {project.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700">
                  {project.duration}
                </span>
                                {project.highlights.slice(0, 3).map((h) => (
                                    <span
                                        key={h}
                                        className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700 transition group-hover:border-neutral-300"
                                    >
                    {h}
                  </span>
                                ))}
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white transition group-hover:-translate-y-0.5"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <div className="text-xs font-semibold text-neutral-500">
                                    Hover card to preview slides
                                </div>
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 bg-white transition group-hover:-rotate-6 group-hover:border-neutral-300 group-hover:bg-neutral-50">
                                    <span className="text-neutral-900">→</span>
                                </div>
                            </div>
                        </div>

                        <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                    </div>
                </div>
            </div>
        </a>
    );
}

function StatusPill({ status }: { status: Status }) {
    const styles =
        status === "Live"
            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
            : status === "In Progress"
                ? "border-blue-200 bg-blue-50 text-blue-700"
                : "border-orange-200 bg-orange-50 text-orange-700";

    return (
        <span
            className={[
                "rounded-full border px-3 py-1 text-xs font-semibold shadow-sm",
                styles,
            ].join(" ")}
        >
      {status}
    </span>
    );
}
