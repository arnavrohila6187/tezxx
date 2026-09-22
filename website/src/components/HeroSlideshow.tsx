"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const slides = [
  { id: 1, image: "/product image/tezprime.png", name: "Tez Prime" },
  { id: 2, image: "/product image/tezcrete.png", name: "Tezcrete" },
  { id: 3, image: "/product image/wheather ultra exterior emulsion.png", name: "Weather Ultra" },
  { id: 4, image: "/product image/eco plus- tile adhesive.png", name: "Eco Plus Tile Adhesive" }
];

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-brand-900 cursor-pointer" onClick={() => router.push("/products")}>
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center pt-20"
        >
          {/* Subtle vignette/gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/40 to-brand-900/80 z-10"></div>
          
          <div className="relative w-full h-full flex items-center justify-center p-12">
            <Image
              src={slides[current].image}
              alt={slides[current].name}
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.15)] z-0"
              priority
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Persistent Text Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-7xl md:text-[10rem] font-black text-white/90 tracking-tighter mix-blend-overlay drop-shadow-2xl uppercase"
        >
          TEZXX
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex items-center gap-3 text-white/70 font-medium tracking-widest uppercase text-sm glass-dark px-6 py-3 rounded-full pointer-events-auto hover:bg-white/10 hover:text-white transition-colors"
        >
          <span>Explore Catalog</span>
          <ArrowRight size={16} />
        </motion.div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3 pointer-events-auto">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === current ? "w-12 bg-brand-accent" : "w-6 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
