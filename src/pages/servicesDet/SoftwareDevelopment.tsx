// SoftwareDevelopment.tsx
import Navbar from "../../components/ui/shadcn-io/icon-button/nav";
import { ArrowLeft } from "lucide-react";

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* If Navbar is fixed, this padding prevents overlap */}
      <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        {/* Hero / Breadcrumb Card */}
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
    <button
      type="button"
      onClick={() => window.history.back()}
      className="
        mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full
        bg-orange-600 text-white shadow-sm
        transition-all duration-200
        hover:bg-orange-700 hover:shadow-md hover:-translate-y-0.5
        active:translate-y-0
        focus:outline-none focus:ring-2 focus:ring-orange-600/40
      "
      aria-label="Go back"
    >
      <ArrowLeft className="h-5 w-5" />
    </button>

    <div className="min-w-0">
      <nav className="text-sm text-black/70">
        <a
          href="/"
          className="text-orange-600 transition-colors duration-200 hover:text-orange-700 hover:underline"
        >
          Home
        </a>
        <span className="mx-2 text-black/40">/</span>

        <a
          href="/our-services"
          className="text-orange-600 transition-colors duration-200 hover:text-orange-700 hover:underline"
        >
          Our Services
        </a>
        <span className="mx-2 text-black/40">/</span>

        <span className="text-black/70">Software Development</span>
      </nav>

      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
        Software Development
      </h1>
    </div>
  </div>
</section>


        {/* Content - same width as container */}
        <section className="mt-10 space-y-12 px-6 sm:px-10">
          <div>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Tailored to Business Needs
            </h2>
            <p className="mt-3 leading-7 text-[#374151]">
              Microweb Global develops custom software solutions designed to fit
              your unique workflows and challenges. Whether you need enterprise
              software, industry-specific applications, or internal tools, our
              development process ensures a perfect match for your business.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Scalable and Secure Solutions
            </h2>
            <p className="mt-3 leading-7 text-[#374151]">
              Our custom software is built with scalability and security in
              mind. From cloud integration to multi-user platforms, we ensure
              your system can grow with your business while maintaining data
              protection and reliability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#111827]">
              Enhancing Efficiency and Innovation
            </h2>
            <p className="mt-3 leading-7 text-[#374151]">
              By automating processes and integrating smart functionalities, we
              help organizations streamline operations and foster innovation. Our
              software solutions improve productivity, reduce costs, and enable
              businesses to achieve a competitive edge.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
