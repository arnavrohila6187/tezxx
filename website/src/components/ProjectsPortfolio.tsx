"use client";

import { motion } from "framer-motion";
import { Building2, HardHat, Pickaxe } from "lucide-react";

const largeProjects = [
  "Jindal Steel & Power Ltd. Angul (Orissa)",
  "Strengthening of bridges - Northern Railways (Roopnagar, Shahjahanpur, Muradabad)",
  "Ansal Group (New Delhi)",
  "Bata India Ltd. (Gurgaon)",
  "Food Corporation of India (FC.), (Rajendra Place, New Delhi)",
  "Haryana State Warehousing Corporation",
  "Residential Complexes, CPWD, New Delhi",
  "Waterproofing and rehabilitation of Railway Station Buildings Northern Railways",
  "Jaat Dharamshala (Asia's largest Dharamshala), Kurukshetra",
  "Beri Udyog Pvt. Ltd (Karnal)",
  "Bindal Steel (Paonta Sahib H.P)",
  "Jagdev Industries, Lalru (Punjab)",
  "The Supreem Industries, Lalru (Punjab) Industrial Epoxy Flooring",
  "Yamuna Group of Institution"
];

export function ProjectsPortfolio() {
  return (
    <section id="projects" className="py-24 bg-brand-800 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-brand-accent"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Featured <span className="text-brand-accent">Projects</span></h2>
        </div>
        <p className="text-slate-300 max-w-2xl">Trusted by the biggest names in the industry to protect and build their infrastructure.</p>
      </div>

      {/* Large Scale Projects - Infinite Marquee */}
      <div className="relative w-full overflow-hidden flex bg-brand-900/50 py-12 mb-24 border-y border-white/5">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-800 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-800 to-transparent z-10"></div>
        
        <motion.div
          animate={{ x: [0, -1920] }} // Arbitrary large scroll distance
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed
          }}
          className="flex gap-8 px-4 whitespace-nowrap"
        >
          {/* We duplicate the array to create a seamless infinite loop effect */}
          {[...largeProjects, ...largeProjects].map((project, i) => (
            <div 
              key={i} 
              className="glass px-8 py-6 rounded-xl flex items-center gap-4 hover:bg-brand-700 transition-colors cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                <Building2 size={20} />
              </div>
              <span className="text-white font-medium text-lg">{project}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Small Scale Projects Placeholder */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="glass-dark rounded-3xl p-12 text-center relative overflow-hidden border border-brand-accent/20">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50"></div>
          
          <div className="inline-flex justify-center items-center w-20 h-20 rounded-2xl bg-brand-900/80 mb-6 border border-white/10 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
             <Pickaxe size={32} className="text-brand-accent" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Small Scale Projects Portfolio</h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">We are currently curating our gallery of residential and small commercial projects. A stunning portfolio is being built.</p>
          
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 font-medium text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
            </span>
            Updating Portfolio...
          </div>
        </div>
      </div>
    </section>
  );
}
