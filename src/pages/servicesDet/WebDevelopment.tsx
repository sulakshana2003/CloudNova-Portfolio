// WebDevelopment.tsx
import Navbar from "../../components/ui/shadcn-io/icon-button/nav";
import { ArrowLeft } from "lucide-react";

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* If your Navbar is fixed/sticky, this prevents overlap */}
      <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        {/* Hero / Breadcrumb Card */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 px-6 py-10 shadow-sm sm:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "radial-gradient(rgba(194, 65, 12, 0.10) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              backgroundPosition: "0 0",
            }}
          />

          <div className="relative flex items-start gap-4">
            {/* Back button */}
            <button
              type="button"
              onClick={() => window.history.back()}
              className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600/40"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <div className="min-w-0">
              {/* Breadcrumbs */}
              <nav className="text-sm text-black/70">
                <a
                  href="/"
                  className="text-orange-600 hover:text-orange-700 hover:underline"
                >
                  Home
                </a>
                <span className="mx-2 text-black/40">/</span>
                <a
                  href="/our-services"
                  className="text-orange-600 hover:text-orange-700 hover:underline"
                >
                  Our Services
                </a>
                <span className="mx-2 text-black/40">/</span>
                <span className="text-black/70">
                  Web Design &amp; Development
                </span>
              </nav>

              {/* Title */}
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                Web Design &amp; Development
              </h1>
            </div>
          </div>
        </section>

        {/* Content (same width as hero padding) */}
        <section className="mt-10 space-y-12 px-6 sm:px-10">
          <div>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Creative and Responsive Web Design
            </h2>
            <p className="mt-3 leading-7 text-[#374151]">
              At Microweb Global, we build responsive websites that adapt
              seamlessly to desktops, tablets, and mobile devices. Our web
              design focuses on user experience (UX), modern layouts, and
              interactive features that engage visitors. By blending creativity
              with functionality, we ensure your brand stands out online.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Custom Web Development Solutions
            </h2>
            <p className="mt-3 leading-7 text-[#374151]">
              We specialize in custom web development tailored to your business
              needs. From e-commerce platforms to corporate websites, we
              integrate secure payment gateways, advanced functionality, and
              SEO-friendly structures. Our developers use the latest
              technologies to create scalable websites that grow alongside your
              business.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Optimized for Search and Conversions
            </h2>
            <p className="mt-3 leading-7 text-[#374151]">
              A great website isn’t just about looks—it’s about performance.
              That’s why we optimize every site for speed, SEO, and conversions.
              With strategic keyword placement, clean coding, and analytics
              integration, we help businesses rank higher on search engines and
              attract qualified leads.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
