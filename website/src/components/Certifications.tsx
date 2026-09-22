"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Certifications() {
  return (
    <section id="about" className="py-24 bg-brand-800 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Recognized for <span className="text-brand-accent">Excellence.</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              At TEZXX, we pride ourselves on delivering the highest quality construction chemicals and paints. 
              Our commitment to innovation and quality is recognized at the national level.
            </p>
            
            <ul className="space-y-4">
              {[
                "Government Recognized Startup",
                "ISO 9001:2015 Certified Manufacturing",
                "Advanced R&D Facilities",
                "Eco-Friendly Formulations"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
                  <Image
                    src="/certificate/certificate of recognition.png"
                    alt="Startup India Certificate of Recognition"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
