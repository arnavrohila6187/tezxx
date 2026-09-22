"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Waterproofing", "Paints", "Grouts", "Adhesives", "Chemicals"];

const products = [
  { 
    id: 1, name: "Tez Prime", category: "Waterproofing", image: "/product image/tezprime.png", 
    specs: "Excellent coverage, deep penetration into substrates.", 
    coverage: "10-12 sq.m/L", area: "Exterior & Interior Walls",
    description: "A premium quality, deep penetrating, water-based acrylic primer that provides excellent adhesion and seals porous surfaces effectively."
  },
  { 
    id: 2, name: "Plaster Guard", category: "Chemicals", image: "/product image/plaster guard.png", 
    specs: "Prevents cracks, enhances strength.", 
    coverage: "200 ml per 50kg cement", area: "Plastering Mortar",
    description: "An advanced integral liquid waterproofing compound for plaster and concrete, designed to minimize shrinkage cracks and improve workability."
  },
  { 
    id: 3, name: "DPC Guard", category: "Chemicals", image: "/product image/dpc guard.png", 
    specs: "Damp-proof course, highly impermeable.", 
    coverage: "Depends on thickness", area: "Foundations & Basements",
    description: "A specialized damp-proof course chemical that forms an impermeable barrier against rising dampness in brickwork and foundations."
  },
  { 
    id: 4, name: "Zedblock-2K", category: "Waterproofing", image: "/product image/zedblock-2k.png", 
    specs: "Two-component flexible coating.", 
    coverage: "1.5 kg/sq.m for 2 coats", area: "Bathrooms, Sunken Slabs",
    description: "A high-performance, two-component acrylic modified cementitious waterproofing coating. It provides a seamless, flexible barrier against water ingress."
  },
  { 
    id: 5, name: "Fast Bond", category: "Adhesives", image: "/product image/fast bond.png", 
    specs: "Instant grab, high tensile strength.", 
    coverage: "Varies by application", area: "Wood, Metal, Concrete",
    description: "A premium multipurpose construction adhesive with instant grab technology, eliminating the need for nails and screws in many applications."
  },
  { 
    id: 6, name: "Tezcrete", category: "Waterproofing", image: "/product image/tezcrete.png", 
    specs: "Flexible acrylic polymer based.", 
    coverage: "1.5 kg/sq.m", area: "Roofs & Terraces",
    description: "An elastomeric, liquid-applied waterproofing membrane. It cures to form a tough, flexible, and UV resistant coating."
  },
  { 
    id: 7, name: "Roof Guard", category: "Waterproofing", image: "/product image/roof guard.png", 
    specs: "UV resistant, high elongation.", 
    coverage: "2 sq.m/L", area: "Flat Roofs",
    description: "A specialized roof coating that provides excellent waterproofing and reflects heat, keeping the building interior cooler."
  },
  { 
    id: 8, name: "Weather Ultra", category: "Paints", image: "/product image/wheather ultra exterior emulsion.png", 
    specs: "10-year warranty, anti-algae.", 
    coverage: "14-16 sq.m/L", area: "Exterior",
    description: "A 100% acrylic exterior emulsion paint offering extreme weather resistance, anti-algal properties, and long-lasting color retention."
  },
  { 
    id: 9, name: "Tez Crete Grout", category: "Grouts", image: "/product image/tez crete grout admixture.png", 
    specs: "High strength, non-shrink.", 
    coverage: "Depends on gap width", area: "Tiles & Stones",
    description: "A high-quality, polymer-modified cementitious tile grout designed for filling joints between ceramic tiles, natural stone, and mosaics."
  },
  { 
    id: 10, name: "Eco Plus Tile Adhesive", category: "Adhesives", image: "/product image/eco plus- tile adhesive.png", 
    specs: "High grab, polymer modified.", 
    coverage: "4-5 kg/sq.m", area: "Floors & Walls",
    description: "A polymer-modified, cement-based tile adhesive suitable for fixing ceramic tiles and small natural stones on interior and exterior surfaces."
  }
];

export function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-brand-900 min-h-screen pt-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Premium <span className="text-brand-accent">Catalog</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Explore our high-performance range of construction chemicals, designed for longevity and superior protection across all your building needs.</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === cat 
                ? "bg-brand-accent text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]" 
                : "glass text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-dark rounded-2xl overflow-hidden group hover:border-brand-accent/50 transition-colors flex flex-col h-full"
              >
                <div className="relative h-72 w-full bg-white/5 p-8 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-900/80 z-10"></div>
                  <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700 z-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-brand-accent/90 text-white rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3 text-sm text-slate-300 bg-black/20 p-4 rounded-xl border border-white/5">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-500 font-medium">Specifications</span>
                      <span className="text-right w-48 truncate" title={product.specs}>{product.specs}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-500 font-medium">Coverage</span>
                      <span className="text-right font-medium text-brand-accent">{product.coverage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Application</span>
                      <span className="text-right">{product.area}</span>
                    </div>
                  </div>
                  
                  <Link href="/enquiry" className="mt-6 w-full py-3 bg-brand-accent hover:bg-white hover:text-brand-900 text-white rounded-lg transition-colors font-semibold border border-transparent flex items-center justify-center">
                    Buy Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
