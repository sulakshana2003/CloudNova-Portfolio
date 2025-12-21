import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Navbar from "../../components/ui/shadcn-io/icon-button/nav";
import Footer from "../../components/Footer";

const BRAND_RED = "rgb(254,64,54)";

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  date: string;
  image: string;
  category: string;
  author?: string;
}

export default function BlogLayout({ children, title, date, image, category, author = "CloudNova Intelligence" }: BlogLayoutProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Subtle parallax for the image
  const y = useTransform(scrollYProgress, [0, 0.4], ["0%", "15%"]);

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-black selection:text-white font-sans">
      {/* 1. Cinematic Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left"
        style={{ scaleX, backgroundColor: BRAND_RED }}
      />

      <Navbar active="Blog" />

      {/* 2. Refined Header: Smaller, sophisticated fluid typography */}
      <header className="relative pt-48 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-10" style={{ backgroundColor: BRAND_RED }} />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">
                {category} // {date}
              </span>
            </div>

            {/* FLUID FONT FIX: Using clamp for a perfect "Professional Large" size */}
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-[-0.04em] leading-[1.05] text-slate-900 mb-12 max-w-5xl">
              {title.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-[0.2em] last:mr-0">
                  {word === "Future" || word === "Mastering" ? (
                    <span style={{ color: BRAND_RED }}>{word}</span>
                  ) : word}
                </span>
              ))}
            </h1>
            
            <div className="flex items-center gap-4">
               <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 border border-slate-200">CN</div>
               <div>
                  <p className="text-sm font-bold text-slate-900">{author}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Lead Architect</p>
               </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 3. Immersive Featured Image with Parallax */}
      <section className="relative h-[65vh] w-full overflow-hidden bg-slate-900">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
            <img 
              src={image} 
              className="w-full h-[120%] object-cover opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-1000" 
              alt={title} 
            />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fafafa]" />
      </section>

      {/* 4. The Content Architecture */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 -mt-32 relative z-10 pb-40">
        
        {/* Left Sidebar */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-40 space-y-10">
            <Link to="/blog" className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-all">
              <span className="p-2 rounded-full border border-slate-600 group-hover:border-slate-900 group-hover:-translate-x-1 transition-all">←</span> 
              Index
            </Link>

            <div className="p-8 rounded-[40px] bg-white/70 backdrop-blur-2xl border border-white shadow-2xl shadow-slate-200/50">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Article Tools</p>
              <div className="space-y-4">
                {['Share Post', 'Copy Link', 'Save'].map(tool => (
                  <button key={tool} className="w-full text-left py-2 px-4 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    {tool}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Article Body: Enhanced Readability */}
        <main className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-10 md:p-20 rounded-[56px] shadow-[0_20px_80px_-15px_rgba(0,0,0,0.05)] border border-slate-50"
          >
            <article className="prose prose-slate prose-xl max-w-none 
              prose-p:text-[1.2rem] prose-p:leading-[1.7] prose-p:text-slate-600 prose-p:mb-8
              prose-headings:text-slate-950 prose-headings:font-black prose-headings:tracking-tighter
              prose-h2:text-4xl prose-h2:mt-16
              prose-strong:text-slate-950 prose-strong:font-bold
              prose-blockquote:border-l-4 prose-blockquote:border-red-500 prose-blockquote:bg-red-50/50 prose-blockquote:py-8 prose-blockquote:px-10 prose-blockquote:rounded-r-3xl prose-blockquote:not-italic prose-blockquote:text-2xl prose-blockquote:font-bold">
              {children}
            </article>
          </motion.div>
        </main>
      </div>

      <Footer />
    </div>
  );
}