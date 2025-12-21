/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import Navbar from "../components/ui/shadcn-io/icon-button/nav";
import Footer from "../components/Footer";

const BRAND_RED = "rgb(254,64,54)";

export const BLOG_POSTS = [
  {
    id: "future-web-2025",
    category: "Insights",
    title: "The Future of Web Development in 2025",
    excerpt: "Exploring how AI and edge computing are reshaping the way we build modern web applications.",
    date: "Dec 20, 2025",
    author: "Jane Doe",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mastering-react-node",
    category: "Tutorial",
    title: "Mastering React and Node.js Integration",
    excerpt: "A deep dive into creating seamless communication between your frontend and backend services.",
    date: "Dec 15, 2025",
    author: "John Smith",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "company-milestones",
    category: "News",
    title: "Our Company Reach New Milestones",
    excerpt: "We are proud to announce that our services have helped over 500 businesses scale globally.",
    date: "Dec 10, 2025",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar active="Blog" />

      <div className="fixed top-0 left-0 -z-10 h-full w-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-orange-100/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-red-100/30 blur-[120px]" />
      </div>

      <main className="flex-1 pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: BRAND_RED }}>Our Blog</h2>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold  tracking-tighter text-slate-900">
              Latest Stories & <span style={{ color: BRAND_RED }}>Insights.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
              Expert advice, industry trends, and company updates from our world-class team.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="group relative flex flex-col overflow-hidden rounded-[32px] border border-white bg-white/70 backdrop-blur-xl transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="relative h-64 w-full overflow-hidden font-semibold">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t font-semibold from-slate-900/40 to-transparent" />
                  <span 
                    className="absolute bottom-5 left-5 rounded-full px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md border border-white/20"
                    style={{ backgroundColor: BRAND_RED }}
                  >
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-400 mb-4">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span>{post.author}</span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-red-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="mt-4 line-clamp-3 text-slate-600 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-8">
                    {/* Fixed Link path */}
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-all hover:gap-4"
                      style={{ color: BRAND_RED }}
                    >
                      Read Full Story
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-32 rounded-[40px] bg-slate-950 p-10 md:p-20 text-center relative overflow-hidden">
            <div 
                className="absolute top-0 right-0 h-full w-full opacity-20" 
                style={{ background: `radial-gradient(circle at top right, ${BRAND_RED}, transparent)` }} 
            />
            <h2 className="relative text-4xl font-semibold text-white sm:text-5xl tracking-tight">
                Join our <span style={{ color: BRAND_RED }}>inner circle.</span>
            </h2>
            <p className="relative mt-6 text-slate-400 max-w-xl mx-auto text-lg">
                High-level architectural insights and design systems sent once a month. No spam, ever.
            </p>
            <form className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder-slate-500 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-red-500 sm:w-96 transition-all"
              />
              <button 
                className="w-full sm:w-auto rounded-2xl px-10 py-4 font-semibold text-white transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-red-500/20"
                style={{ backgroundColor: BRAND_RED }}
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}