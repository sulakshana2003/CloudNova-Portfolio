// SaaSCloudSolutions.tsx
import Navbar from "../../components/ui/shadcn-io/icon-button/nav";
import { ArrowLeft } from "lucide-react";

export default function SaaSCloudSolutions() {
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
                  SaaS &amp; Cloud-Based Solutions
                </span>
              </nav>

              {/* Title */}
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                SaaS &amp; Cloud-Based Solutions
              </h1>
            </div>
          </div>
        </section>

        {/* Content (same width as hero padding) */}
        <section className="mt-10 space-y-12 px-6 sm:px-10">
          <div>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Scalable Cloud Applications
            </h2>
            <p className="mt-3 leading-7 text-[#374151]">
              Microweb Global designs SaaS and cloud-based applications that
              empower businesses with flexibility and efficiency. Our solutions
              are scalable, cost-effective, and accessible anytime, anywhere.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Secure and Reliable Systems
            </h2>
            <p className="mt-3 leading-7 text-[#374151]">
              We implement robust security protocols, ensuring your data remains
              safe in the cloud. With regular updates, uptime monitoring, and
              performance optimization, our SaaS platforms deliver reliability
              businesses can trust.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Accelerating Digital Growth
            </h2>
            <p className="mt-3 leading-7 text-[#374151]">
              By moving to SaaS and cloud environments, businesses reduce
              infrastructure costs, improve collaboration, and accelerate
              innovation. We help companies harness the full potential of the
              cloud to stay ahead of the competition.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
