"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useState, FormEvent } from "react";

const productsList = [
  "Tez Prime",
  "Plaster Guard",
  "DPC Guard",
  "Zedblock-2K",
  "Fast Bond",
  "Tezcrete",
  "Roof Guard",
  "Weather Ultra",
  "Tez Crete Grout",
  "Eco Plus Tile Adhesive",
  "Other"
];

export default function EnquiryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (!accessKey) {
        toast.error("Form configuration error: Web3Forms access key is missing.");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
          subject: `New Enquiry from ${formData.name} - ${formData.product || 'General'}`
        }),
      });

      const json = await response.json();

      if (response.status === 200) {
        toast.success("Enquiry sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          product: "",
          message: ""
        });
      } else {
        toast.error(json.message || "Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-brand-900 min-h-screen pt-32 pb-24 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-accent/20 blur-[120px]"></div>
          <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] rounded-full bg-brand-800/80 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Get in <span className="text-brand-accent">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-300 max-w-2xl mx-auto text-lg"
            >
              Have a question about our products or need a bulk quotation? Fill out the form below and our experts will get back to you promptly.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/3 flex flex-col gap-8"
            >
              <div className="glass-dark p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Info</h3>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-800/80 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-brand-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Our Location</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        123 Industrial Area, Sector 45,<br />Gurgaon, Haryana, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-800/80 border border-white/10 flex items-center justify-center shrink-0">
                      <Phone className="text-brand-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Call Us</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        +91 98765 43210<br />+91 12345 67890
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-800/80 border border-white/10 flex items-center justify-center shrink-0">
                      <Mail className="text-brand-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email Us</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        info@tezxx.com<br />sales@tezxx.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enquiry Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full lg:w-2/3"
            >
              <div className="glass p-10 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent/20 via-brand-accent to-brand-accent/20"></div>
                
                <h3 className="text-3xl font-bold text-white mb-8">Send an Enquiry</h3>
                
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full bg-brand-800/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-300 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full bg-brand-800/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full bg-brand-800/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="product" className="text-sm font-medium text-slate-300 ml-1">Select Product</label>
                      <select 
                        id="product" 
                        className="w-full bg-brand-800/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all appearance-none"
                        required
                        value={formData.product}
                        onChange={(e) => setFormData({...formData, product: e.target.value})}
                        disabled={isSubmitting}
                      >
                        <option value="" disabled>Choose a product...</option>
                        {productsList.map(product => (
                          <option key={product} value={product} className="bg-brand-900">{product}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full bg-brand-800/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-bold rounded-xl text-brand-900 bg-white hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-6">
                      <Send className={`h-5 w-5 text-brand-900 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:scale-110'}`} />
                    </span>
                    {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
