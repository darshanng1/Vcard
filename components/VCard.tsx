import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, COMPANY_INFO } from '../constants';

const BackgroundExpertise: React.FC = () => {
  return (
    <div className="bg-layers overflow-hidden">
      {/* SECTION 1: THE BIRD/BALCONY CHALLENGE (Top) */}
      <div className="absolute top-0 left-0 w-full h-[40%] flex flex-col justify-start">
        <div className="texture-bird-net absolute inset-0 mask-image-[linear-gradient(to_bottom,black,transparent)]" />
        
        {/* Balcony Railing Silhouette */}
        <div className="mt-40 balcony-railing opacity-20 relative">
          <motion.div 
            className="silhouette text-5xl absolute -top-12 left-[15%]"
            animate={{ y: [0, -5, 0], opacity: [0.08, 0.12, 0.08] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            🐦
          </motion.div>
          <motion.div 
            className="silhouette text-5xl absolute -top-12 right-[20%]"
            animate={{ y: [0, -7, 0], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          >
            🐦
          </motion.div>
        </div>
      </div>

      {/* SECTION 2: THE TERMITE/STRUCTURAL THREAT (Mid) */}
      <div className="absolute top-[40%] left-0 w-full h-[30%] overflow-hidden">
        <div className="texture-termite absolute inset-0" />
        <motion.div 
          className="silhouette text-6xl absolute top-10 left-[40%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.08, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          🐜
        </motion.div>
        {/* Wood Grain Hint */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent opacity-30" />
      </div>

      {/* SECTION 3: THE STERILE PROTECTED RESULT (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-emerald-950/20 to-transparent">
        <div className="sterile-overlay" />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full border border-emerald-500/5 bg-emerald-500/5"
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="absolute bottom-40 left-10 text-[60px] opacity-10 grayscale brightness-200">🛡️</div>
      </div>

      {/* Subtle neutralization pulse */}
      <motion.div 
        className="absolute top-[60%] right-[30%] w-32 h-32 rounded-full border border-emerald-500/10"
        animate={{ scale: [1, 2], opacity: [0.1, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
};

const VCard: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: CONTACT_INFO.name,
          text: `${CONTACT_INFO.role} at ${COMPANY_INFO.name}`,
          url: window.location.href,
        });
      } catch (err) { console.log(err); }
    }
  };

  const primaryActions = [
    { label: "Executive Call", icon: "📞", link: `tel:${CONTACT_INFO.phone}`, type: 'ext', color: "bg-emerald-600 shadow-emerald-500/20" },
    { label: "WhatsApp", icon: "💬", link: `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20Darshan,%20I%20am%20inquiring%20about%20specialized%20pest%20and%20bird%20protection.`, type: 'ext', color: "bg-zinc-800 border-zinc-700/40" },
    { label: "Book Audit", icon: "📅", link: "/book", type: 'int', color: "bg-zinc-800 border-zinc-700/40" },
    { label: "Live Chat", icon: "🤖", link: "/chat", type: 'int', color: "bg-zinc-800 border-zinc-700/40" },
  ];

  const secondaryTools = [
    { label: "Rate Card", icon: "📄", link: "/rate-card" },
    { label: "Invoice", icon: "🧾", link: "/invoice" },
    { label: "Upload Site", icon: "📸", link: "/upload" },
    { label: "Portal", icon: "🌐", link: `https://${COMPANY_INFO.website}` },
    { label: "Share", icon: "📤", action: handleShare },
  ];

  return (
    <div className="flex-grow flex flex-col relative overflow-hidden">
      <BackgroundExpertise />
      
      {/* 👤 IDENTITY HERO SECTION */}
      <section className="relative h-[48%] flex flex-col items-center justify-center px-8 pt-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full flex flex-col items-center"
        >
          {/* Executive Corporate Badge */}
          <div className="absolute top-0 left-0 p-6 flex items-center space-x-3 opacity-60">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
               <span className="text-white text-[10px] font-black leading-none tracking-tighter">SIPC</span>
            </div>
            <div className="h-4 w-[1px] bg-zinc-800" />
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-600 italic">Established 2008</span>
          </div>

          {/* Darshan's Professional Portrait */}
          <div className="relative group mb-8">
            <div className="absolute -inset-12 bg-emerald-500/10 rounded-full blur-3xl opacity-60 breathe-glow" />
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="premium-frame"
            >
              <div className="w-44 h-44 rounded-[3.8rem] glass p-1.5 overflow-hidden border-emerald-500/20 relative">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=DarshanNG&backgroundColor=059669`} 
                  alt={CONTACT_INFO.name} 
                  className="w-full h-full rounded-[3.4rem] object-cover grayscale brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Identity & Industry Authority Text */}
          <div className="text-center sweep-effect relative px-4">
            <h1 className="text-heading text-4xl font-black text-white tracking-tighter mb-2">
              {CONTACT_INFO.name}
            </h1>
            <div className="text-[10px] font-black uppercase tracking-[0.6em] text-emerald-500 mb-2 glow-text">
              {CONTACT_INFO.role}
            </div>
            <div className="text-[9px] font-bold text-zinc-700 uppercase tracking-[0.4em] leading-relaxed max-w-[240px] mx-auto border-t border-white/5 pt-3">
              Termite • Bird • Cockroach • Rodent Control Authority
            </div>
          </div>
        </motion.div>
      </section>

      {/* 🚀 ACTION HUB DASHBOARD */}
      <section className="flex-grow glass rounded-t-[4.5rem] p-8 pb-12 flex flex