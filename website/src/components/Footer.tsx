import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-900 border-t border-brand-800 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/comapny logo/Firefly.png"
                  alt="TEZXX Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                TEZXX
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Advanced & Innovative Technology Based Paints, Adhesives, Grouts & Construction Chemicals.
              The Ultimate Home Protection.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/#about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Products</Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-white transition-colors text-sm">Projects Portfolio</Link>
              </li>
              <li>
                <Link href="/#about" className="text-slate-400 hover:text-white transition-colors text-sm">Certifications</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Categories</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Waterproofing</Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Adhesives</Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Grouts</Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Paints & Enamels</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin size={18} className="text-brand-accent shrink-0 mt-0.5" />
                <span>Kurukshetra, Haryana, India</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={18} className="text-brand-accent shrink-0" />
                <span>+91 82228 22220</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={18} className="text-brand-accent shrink-0" />
                <span>anshulochemdealer@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} TEZXX Construction Chemicals & Paints. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
