// DigitalMarketing.tsx
import Navbar from "../../components/ui/shadcn-io/icon-button/nav";
import { ArrowLeft } from "lucide-react";

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* If Navbar is fixed/sticky, this prevents overlap */}
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
                  Digital Marketing &amp; Strategic Growth
                </span>
              </nav>

              {/* Title */}
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                Digital Marketing &amp; Strategic Growth
              </h1>
            </div>
          </div>
        </section>

        {/* Content (same width as hero padding) */}
        <section className="mt-10 space-y-12 px-6 sm:px-10">

          <div>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Building Strong Brand Presence
            </h2>
            <p className="mt-3 leading-7 text-[#374151]">
              Our team helps businesses build strong brand visibility across
              multiple platforms. With engaging content, social media
              strategies, and targeted advertising, we position your brand for
              success.
            </p>

            {/* Added content to match your site */}
            <p className="mt-4 leading-7 text-[#374151]">
              Our creative team brings your brand to life with high-impact
              visual storytelling. From professional social media posts and
              digital banners to high-quality flyers and marketing collateral,
              we design assets that capture attention and drive engagement
              across all digital and print platforms.
            </p>
          </div>

        </section>
      </main>
    </div>
  );
}
