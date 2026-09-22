"use client";

import { motion } from "framer-motion";
import { Pickaxe, Building2 } from "lucide-react";
import Image from "next/image";
import { ProjectSlider } from "./ProjectSlider";

type ProjectType = {
  name: string;
  images: string[];
};

export function DynamicProjectsGrid({ projects }: { projects: ProjectType[] }) {
  return (
    <section className="py-24 bg-brand-800 min-h-screen pt-32">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our <span className="text-brand-accent">Projects</span></h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">Trusted by the biggest names in the industry to protect and build their infrastructure.</p>
        </div>

        {/* 50/50 Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Large Scale Projects */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-[2px] bg-brand-accent"></div>
              <h2 className="text-3xl font-bold text-white">Large Scale Projects</h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass rounded-2xl overflow-hidden flex flex-col group hover:bg-brand-700 transition-colors border border-white/5 hover:border-brand-accent/30"
                >
                  <ProjectSlider images={project.images} altText={project.name} />
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white leading-snug">{project.name}</h3>
                    <div className="mt-4 pt-4 border-t border-white/10 text-brand-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details &rarr;
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Small Scale Projects (YouTube Videos) */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-[2px] bg-brand-accent"></div>
              <h2 className="text-3xl font-bold text-white">Small Scale Projects</h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  url: "https://www.youtube.com/embed/RR787a_7EC8",
                  title: "Waterproofing at Dhillon Nagar, Barnala",
                  product: "Zedcrete"
                },
                {
                  url: "https://www.youtube.com/embed/poi0KS_s2fg",
                  title: "Plaster Guard Coding at Cheema Village",
                  product: "Plaster Guard"
                },
                {
                  url: "https://www.youtube.com/embed/KYlOXJsNF-U",
                  title: "Repair Work - Royal Immigration Office, Barnala",
                  product: "DPC Guard"
                },
                {
                  url: "https://www.youtube.com/embed/IpiG3Wf_Ej8",
                  title: "Satisfied Customer",
                  product: "Fast Bond"
                },
                {
                  url: "https://www.youtube.com/embed/GLoy3oFNsto",
                  title: "Waterproofing Repair at Bathinda",
                  product: "Roof Guard"
                }
              ].map((video, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl overflow-hidden flex flex-col group border border-brand-800 hover:border-brand-accent/30 transition-colors"
                >
                  <div className="relative w-full aspect-video bg-black">
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="absolute top-0 left-0 w-full h-full border-0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                  <div className="p-6 bg-brand-950/80">
                    <h3 className="text-lg md:text-xl font-bold text-white leading-snug">{video.title}</h3>
                    <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-brand-accent text-sm font-medium">{video.product}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
