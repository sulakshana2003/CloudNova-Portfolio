import React, { useMemo, useState } from "react";

type NavItem = { label: string; href: string };

type NavbarProps = {
  /** Path/URL to your logo image (e.g. "/logo.png") */
  logoSrc?: string;
  /** Used to highlight the active link (match by label or href) */
  active?: string;
  /** Override nav items if you want */
  items?: NavItem[];
  /** CTA button */
  ctaLabel?: string;
  ctaHref?: string;
};

export default function Navbar({
  logoSrc = "/logo.png",
  active = "Home",
  items,
  ctaLabel = "Contact Us",
  ctaHref = "#contact",
}: NavbarProps) {
  const navItems = useMemo<NavItem[]>(
    () =>
      items ?? [
        { label: "Home", href: "#home" },
        { label: "About Us", href: "#about" },
        { label: "Our Services", href: "#services" },
        { label: "Blog", href: "#blog" },
        { label: "Careers", href: "#careers" },
      ],
    [items]
  );

  const [open, setOpen] = useState(false);

  const isActive = (it: NavItem) =>
    active.toLowerCase() === it.label.toLowerCase() ||
    active.toLowerCase() === it.href.toLowerCase();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-4">
          <nav
            className="
              relative flex items-center justify-between
              rounded-[28px] px-4 py-3
              bg-white/10
              backdrop-blur-xl backdrop-saturate-150
              border border-white/20
              shadow-[0_18px_50px_rgba(0,0,0,0.18)]
            "
          >
          
            <span className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/25 to-white/5" />

           
            <div className="relative flex w-full items-center justify-between">
             
              <a href="#home" className="flex items-center gap-3">
                <img
                  src={logoSrc}
                  alt="Logo"
                  className="h-10 w-auto select-none"
                  draggable={false}
                />
              </a>

              <ul className="hidden items-center gap-7 md:flex">
                {navItems.map((it) => {
                  const activeLink = isActive(it);
                  return (
                    <li key={it.label} className="relative">
                      <a
                        href={it.href}
                        className={[
                          "text-sm font-medium transition-colors",
                          activeLink
                            ? "text-orange-600"
                            : "text-slate-900 hover:text-orange-600",
                        ].join(" ")}
                      >
                        {it.label}
                      </a>

                      {/* Active underline */}
                      <span
                        className={[
                          "pointer-events-none absolute -bottom-3 left-0 h-[2px] w-full rounded-full transition-opacity",
                          "bg-orange-500",
                          activeLink ? "opacity-100" : "opacity-0",
                        ].join(" ")}
                      />
                    </li>
                  );
                })}
              </ul>

              {/* Right side (CTA + mobile button) */}
              <div className="flex items-center gap-2">
                <a
                  href={ctaHref}
                  className="
                    hidden items-center gap-2 rounded-full
                    bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white
                    shadow-sm transition hover:bg-orange-700
                    md:flex
                  "
                >
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>

                {/* Mobile menu button */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full p-2 text-slate-900 hover:bg-white/10 md:hidden"
                  aria-label="Open menu"
                  onClick={() => setOpen((v) => !v)}
                >
                  <Hamburger className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Mobile dropdown */}
            {open && (
              <div className="absolute left-3 right-3 top-[calc(100%+10px)] rounded-2xl bg-white/15 p-3 backdrop-blur-xl backdrop-saturate-150 shadow-[0_18px_50px_rgba(0,0,0,0.18)] ring-1 ring-white/20 md:hidden">
                <ul className="flex flex-col">
                  {navItems.map((it) => {
                    const activeLink = isActive(it);
                    return (
                      <li key={it.label}>
                        <a
                          href={it.href}
                          onClick={() => setOpen(false)}
                          className={[
                            "flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium",
                            activeLink
                              ? "bg-orange-500/10 text-orange-700"
                              : "text-slate-900 hover:bg-white/10 hover:text-orange-700",
                          ].join(" ")}
                        >
                          {it.label}
                          {activeLink && (
                            <span className="h-2 w-2 rounded-full bg-orange-500" />
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href={ctaHref}
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-700"
                >
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* space so content doesn't hide behind fixed navbar */}
      <div className="h-20 md:h-24" />
    </header>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 12h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Hamburger({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
