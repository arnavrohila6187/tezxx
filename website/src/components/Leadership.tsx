"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export function Leadership() {
  return (
    <section className="py-24 bg-brand-900 border-t border-white/5 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[30%] h-[30%] rounded-full bg-brand-800/50 blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-brand-accent/10 blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our <span className="text-brand-accent">Leadership</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Guided by vision, dedication, and an uncompromising commitment to excellence.
          </motion.p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          
          {/* Founder Section - Photo Left, Text Right */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-brand-accent/20 rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
              <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden glass-dark border border-white/10">
                <Image 
                  src="/vikas nawal/1517488636923.jpg" 
                  alt="Late. Shri. Vikas Nawal" 
                  fill 
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <Quote className="text-brand-accent/40 w-16 h-16 mb-6" />
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic">
                "Building a legacy requires more than just materials; it requires an unwavering dedication to quality and a vision to protect what people build."
              </p>
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">Late. Shri. Vikas Nawal</h3>
                <p className="text-brand-accent font-medium tracking-wide uppercase text-sm">Founder (1980-2018)</p>
              </div>
            </div>
          </motion.div>

          {/* President Section - Text Left, Photo Right */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-1 lg:order-1 flex flex-col justify-center lg:text-right lg:items-end">
              <Quote className="text-brand-accent/40 w-16 h-16 mb-6 transform lg:scale-x-[-1]" />
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic">
                "Our mission is to innovate continuously and deliver advanced technology-based solutions that define the future of construction chemicals."
              </p>
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">Anshul Rohilla</h3>
                <p className="text-brand-accent font-medium tracking-wide uppercase text-sm">President</p>
              </div>
            </div>
            <div className="order-2 lg:order-2 relative group">
              <div className="absolute inset-0 bg-brand-accent/20 rounded-3xl -translate-x-4 translate-y-4 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
              <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden glass-dark border border-white/10 bg-brand-800">
                <Image 
                  src="/Anshul Rohilla/Screenshot 2026-09-22 151905.png" 
                  alt="Anshul Rohilla" 
                  fill 
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Vice President Section - Photo Left, Text Right */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-brand-accent/20 rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
              <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden glass-dark border border-white/10 bg-brand-800 flex items-center justify-center">
                {/* Fallback styling in case image is missing */}
                <Image 
                  src="/Anjali Nawal/profile.jpg" 
                  alt="Anjali Nawal" 
                  fill 
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 opacity-0 transition-opacity"
                  onLoadingComplete={(image) => image.classList.remove('opacity-0')}
                />
                <div className="text-slate-500 text-sm absolute">Photo pending</div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <Quote className="text-brand-accent/40 w-16 h-16 mb-6" />
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic">
                "We believe in fostering trust through transparency, consistency, and a relentless focus on customer satisfaction."
              </p>
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">Anjali Nawal</h3>
                <p className="text-brand-accent font-medium tracking-wide uppercase text-sm">Vice President</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
