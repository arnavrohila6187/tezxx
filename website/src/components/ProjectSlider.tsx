"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Building2 } from "lucide-react";

export function ProjectSlider({ images, altText }: { images: string[], altText: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-brand-900/80 flex items-center justify-center text-brand-accent">
        <Building2 size={48} className="opacity-50" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 overflow-hidden bg-brand-900/50">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${altText} - image ${currentIndex + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Progress Dots if multiple images */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-4 bg-brand-accent" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
