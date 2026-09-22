"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function AdPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Show popup initially after 3 seconds
    timerRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // 3,000ms = 3 seconds

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    
    // Clear any existing timer just in case
    if (timerRef.current) clearTimeout(timerRef.current);
    
    // Start a 60-second countdown to trigger the popup again
    timerRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 60000); // 60,000ms = 60 seconds
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, x: 100, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 z-50 w-80 md:w-96 shadow-2xl rounded-2xl overflow-hidden border border-brand-800 bg-brand-950"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 z-10 p-1.5 text-white/70 hover:text-white bg-black/50 hover:bg-brand-accent rounded-full transition-colors"
            aria-label="Close ad"
          >
            <X className="w-4 h-4" />
          </button>
          
          {/* YouTube Iframe container keeping 16:9 aspect ratio */}
          <div className="relative w-full pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/dQln--XfyVo?autoplay=1"
              title="Advertisement"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
