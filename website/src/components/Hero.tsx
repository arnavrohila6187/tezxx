"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with modern industrial-chic aesthetic */}
      <div className="absolute inset-0 bg-brand-900 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Subtle glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[128px] opacity-50 mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-600/30 rounded-full blur-[128px] opacity-50 mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark border-brand-accent/30 text-brand-accent text-sm font-medium mb-6"
          >
            <ShieldCheck size={16} />
            <span>Premium Construction Chemicals</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            The Ultimate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">
              Home Protection.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
            Advanced & Innovative Technology Based Paints, Adhesives, Grouts & Construction Chemicals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-brand-accent hover:bg-blue-600 text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 group">
              Explore Catalog
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-4 glass-dark hover:bg-white/10 text-white font-semibold rounded-lg transition-all flex items-center justify-center">
              View Projects
            </button>
          </div>
        </motion.div>

        {/* Right Column - Motion Graphics / Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="relative h-[500px] w-full hidden lg:block"
        >
          {/* Abstract Composition representing construction/protection */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-20"
            >
               <div className="relative w-64 h-80 rounded-2xl glass-dark border border-white/10 overflow-hidden shadow-2xl p-6">
                 <div className="w-full h-32 bg-gradient-to-br from-brand-600 to-brand-800 rounded-lg mb-4"></div>
                 <div className="w-3/4 h-4 bg-white/20 rounded mb-2"></div>
                 <div className="w-1/2 h-4 bg-white/10 rounded mb-6"></div>
                 <div className="flex gap-2">
                   <div className="w-10 h-10 rounded-full bg-brand-accent/50"></div>
                   <div className="w-10 h-10 rounded-full bg-blue-400/50"></div>
                 </div>
               </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute z-10 -right-4 top-10"
            >
               <div className="relative w-48 h-64 rounded-2xl bg-brand-800/80 backdrop-blur-md border border-brand-700 overflow-hidden shadow-2xl p-4">
                 <div className="w-full h-full border border-dashed border-white/20 rounded flex items-center justify-center">
                    <span className="text-white/20 font-mono text-sm">ISO 9001:2015</span>
                 </div>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
