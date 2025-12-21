import { useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

type NavItem = { label: string; href: string };

type NavbarProps = {
  logoSrc?: string;
  active?: string;
  items?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
};

const isHash = (href: string) => href.startsWith("#");
const toFromHref = (href: string) => (isHash(href) ? `/${href}` : href); // "#about" -> "/#about"

export default function Navbar({
  logoSrc = "/logo.png",
  active,
  items,
  ctaLabel = "Contact Us",
  ctaHref = "#contact",
}: NavbarProps) {
  const navItems = useMemo<NavItem[]>(
    () =>
      items ?? [
        { label: "Home", href: "/" },
        { label: "About Us", href: "#about" },
        { label: "Our Services", href: "#services" },
        { label: "Blog", href: "#blog" },
        { label: "Projects", href: "/projects" },
      ],
    [items]
  );

  const [open, setOpen] = useState(false);
  const location = useLocation();

  const NAV_OFFSET = 96; // adjust if needed (height of fixed navbar area)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToHash = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleSameLinkScroll = (e: React.MouseEvent, href: string) => {
    setOpen(false);

    // Hash link (/#about style)
    if (isHash(href)) {
      // If you're already on that same hash, React Router won't change URL → manually scroll
      if (location.pathname === "/" && location.hash === href) {
        e.preventDefault();
        scrollToHash(href);
      }
      return;
    }

    // Route link (/, /projects etc)
    // If you're already on that same route, manually scroll to top
    if (location.pathname === href && !location.hash) {
      e.preventDefault();
      scrollToTop();
    }
  };

  const isActiveItem = (it: NavItem) => {
    if (active && active.trim()) {
      const a = active.toLowerCase();
      return a === it.label.toLowerCase() || a === it.href.toLowerCase();
    }

    if (it.href === "/") return location.pathname === "/" && !location.hash;
    if (isHash(it.href)) return location.pathname === "/" && location.hash === it.href;
    return location.pathname === it.href;
  };

  const linkBase = "text-md font-medium transition-colors";
  const activeCls = "text-orange-600";
  const inactiveCls = "text-slate-900 hover:text-orange-600";

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
              {/* Logo */}
              <Link
                to="/"
                className="flex items-center gap-3"
                onClick={(e) => handleSameLinkScroll(e, "/")}
              >
                <img
                  src={logoSrc}
                  alt="Logo"
                  className="h-10 w-auto select-none"
                  draggable={false}
                />
              </Link>

              {/* Desktop nav */}
              <ul className="hidden items-center gap-7 md:flex">
                {navItems.map((it) => {
                  const activeLink = isActiveItem(it);

                  return (
                    <li key={it.label} className="relative">
                      {isHash(it.href) ? (
                        <Link
                          to={toFromHref(it.href)}
                          onClick={(e) => handleSameLinkScroll(e, it.href)}
                          className={[linkBase, activeLink ? activeCls : inactiveCls].join(" ")}
                        >
                          {it.label}
                        </Link>
                      ) : (
                        <NavLink
                          to={it.href}
                          onClick={(e) => handleSameLinkScroll(e, it.href)}
                          className={({ isActive }) =>
                            [linkBase, isActive ? activeCls : inactiveCls].join(" ")
                          }
                          end={it.href === "/"}
                        >
                          {it.label}
                        </NavLink>
                      )}

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

              {/* Right side */}
              <div className="flex items-center gap-2">
                {/* CTA */}
                <Link
                  to={toFromHref(ctaHref)}
                  onClick={(e) => handleSameLinkScroll(e, ctaHref)}
                  className="
                    hidden items-center gap-2 rounded-full
                    bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white hover:text-white
                    shadow-sm transition hover:bg-orange-500
                    md:flex
                  "
                >
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {/* Mobile menu button */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full p-2 text-slate-900 hover:bg-white md:hidden"
                  aria-label="Open menu"
                  onClick={() => setOpen((v) => !v)}
                >
                  <Hamburger className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Mobile dropdown */}
            {open && (
              <div className="absolute left-3 right-3 top-[calc(100%+10px)] rounded-2xl bg-white p-3 backdrop-blur-xl backdrop-saturate-150 shadow-[0_18px_50px_rgba(0,0,0,0.18)] ring-1 ring-white/20 md:hidden">
                <ul className="flex flex-col">
                  {navItems.map((it) => {
                    const activeLink = isActiveItem(it);

                    return (
                      <li key={it.label}>
                        <Link
                          to={toFromHref(it.href)}
                          onClick={(e) => handleSameLinkScroll(e, it.href)}
                          className={[
                            "flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium",
                            activeLink
                              ? "bg-orange-500/10 text-orange-700"
                              : "text-slate-900 hover:bg-white/10 hover:text-orange-700",
                          ].join(" ")}
                        >
                          {it.label}
                          {activeLink && <span className="h-2 w-2 rounded-full bg-orange-500" />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <Link
                  to={toFromHref(ctaHref)}
                  onClick={(e) => handleSameLinkScroll(e, ctaHref)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-700"
                >
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>

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
