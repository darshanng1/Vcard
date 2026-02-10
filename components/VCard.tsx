import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, COMPANY_INFO } from '../constants';

const BackgroundExpertise: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transitions for industry-specific storytelling
  const birdY = useTransform(scrollYProgress, [0, 0.4], [0, -150]);
  const termiteOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0.3, 0]);
  const protectionScale = useTransform(scrollYProgress, [0.7, 1], [0.85, 1.1]);
  const protectionOpacity = useTransform(scrollYProgress, [0.7, 1], [0.1, 0.25]);

  return (
    <div ref={containerRef} className="bg-layers overflow-hidden">
      {/* LAYER 1: BIRD/BALCONY CHALLENGE (Top) */}
      <motion.div 
        style={{ y: birdY }}
        className="absolute top-0 left-0 w-full h-[50dvh] flex flex-col pointer-events-none"
      >
        <div className="texture-bird-net absolute inset-0 opacity-20" />
        <div className="mt-56 balcony-railing opacity-25 relative">
          <motion.div 
            className="silhouette text-5xl absolute -top-12 left-[12%]"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            🐦
          </motion.div>
          <motion.div 
            className="silhouette text-4xl absolute -top-10 right-[20%]"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            🐦
          </motion.div>
        </div>
      </motion.div>

      {/* LAYER 2: TERMITE/WOOD THREAT (Middle) */}
      <motion.div 
        style={{ opacity: termiteOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="texture-termite absolute inset-0 scale-150" />
        <div className="text-[140px] opacity-10 grayscale brightness-150 select-none">🐜</div>
      </motion.div>

      {/* LAYER 3: CLEAN PROTECTION/SHIELD (Bottom) */}
      <motion.div 
        style={{ scale: protectionScale, opacity: protectionOpacity }}
        className="absolute bottom-0 left-0 w-full h-[40dvh] flex items-center justify-center pointer-events-none"
      >
        <div className="w-[90%] h-[90%] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute text-[200px] grayscale brightness-200 opacity-20">🛡️</div>
      </motion.div>

      {/* Sterile Protective Overlay */}
      <div className="sterile-overlay pointer-events-none" />
    </div>
  );
};

const VCard: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: CONTACT_INFO.name,
          text: `${CONTACT_INFO.role} at ${COMPANY_INFO.name}`,
          url: window.location.href,
        });
      } catch (err) { console.error(err); }
    }
  };

  const primaryActions = [
    { 
      label: "Direct Call", 
      icon: "📞", 
      link: `tel:${CONTACT_INFO.phone}`, 
      type: 'ext', 
      color: "bg-emerald-600 shadow-emerald-500/20" 
    },
    { 
      label: "WhatsApp", 
      icon: "💬", 
      link: `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20Darshan,%20I%20need%20expert%20pest/bird%20protection%20services.`, 
      type: 'ext', 
      color: "bg-zinc-800 border-zinc-700/40" 
    },
    { 
      label: "Book Audit", 
      icon: "📅", 
      link: "/book", 
      type: 'int', 
      color: "bg-zinc-800 border-zinc-700/40" 
    },
    { 
      label: "Expert Chat", 
      icon: "🤖", 
      link: "/chat", 
      type: 'int', 
      color: "bg-zinc-800 border-zinc-700/40" 
    },
  ];

  const secondaryTools = [
    { label: "Rate Card", icon: "📄", link: "/rate-card" },
    { label: "Invoice", icon: "🧾", link: "/invoice" },
    { label: "Upload", icon: "📸", link: "/upload" },
    { label: "Portal", icon: "🌐", link: `https://${COMPANY_INFO.website}` },
    { label: "Share", icon: "📤", action: handleShare },
  ];

  return (
    <div ref={scrollRef} className="flex-grow flex flex-col relative overflow-y-auto no-scrollbar scroll-smooth">
      <BackgroundExpertise />
      
      {/* 👤 IDENTITY HERO SECTION */}
      <section className="relative min-h-[52dvh] flex flex-col items-center justify-center px-8 pt-16 pb-10 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          {/* Executive Corporate Badge */}
          <div className="absolute top-0 left-0 p-8 flex items-center space-x-3 opacity-60">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/40">
               <span className="text-white text-[10px] font-black leading-none tracking-tighter">SIPC</span>
            </div>
            <div className="h-4 w-[1px] bg-zinc-800" />
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-600 italic">Established 2008</span>
          </div>

          {/* Darshan's Premium Authority Portrait */}
          <div className="relative mb-8 mt-4">
            <div className="absolute -inset-16 bg-emerald-500/10 rounded-full blur-[80px] breathe-glow" />
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="premium-frame"
            >
              <div className="w-44 h-44 rounded-[4rem] glass p-1.5 overflow-hidden border-emerald-500/20 relative group">
                {/* Standardized professional placeholder representation */}
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Darshan&backgroundColor=059669&mood=serious`} 
                  alt={CONTACT_INFO.name} 
                  className="w-full h-full rounded-[3.6rem] object-cover grayscale brightness-105 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3.6rem]" />
              </div>
            </motion.div>
          </div>

          {/* Identity & Industry Authority Text */}
          <div className="text-center sweep-effect relative px-4">
            <h1 className="text-heading text-4xl font-black text-white tracking-tighter mb-2">
              {CONTACT_INFO.name}
            </h1>
            <div className="text-[10px] font-black uppercase tracking-[0.6em] text-emerald-500 mb-4 glow-text">
              {CONTACT_INFO.role}
            </div>
            <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.35em] leading-relaxed max-w-[280px] mx-auto border-t border-white/5 pt-5">
              Structural Integrity & Specialized <br/> Pest Mitigation Protocols
            </div>
          </div>
        </motion.div>
      </section>

      {/* 🚀 ACTION HUB DASHBOARD */}
      <section className="flex-grow glass rounded-t-[4.5rem] p-8 pb-14 flex flex-col shadow-[0_-40px_100px_rgba(0,0,0,1)] border-t border-white/10 relative z-20">
        
        {/* Operational Status */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500/5 border border-emerald-500/15">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3 breathe-glow shadow-emerald-500/50" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/90">Authorized Field Dispatch Active</span>
          </div>
        </div>

        {/* Primary Functional Grid */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {primaryActions.map((action, i) => (
            <div key={i}>
              {action.type === 'ext' ? (
                <a href={action.link} className={`w-full h-24 flex flex-col items-center justify-center rounded-[2.8rem] ${action.color} border border-white/5 magnetic-action shadow-2xl transition-all hover:brightness-110`}>
                  <span className="text-2xl mb-1.5">{action.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/90">{action.label}</span>
                </a>
              ) : (
                <Link to={action.link} className={`w-full h-24 flex flex-col items-center justify-center rounded-[2.8rem] ${action.color} border border-white/5 magnetic-action shadow-2xl transition-all hover:brightness-110`}>
                  <span className="text-2xl mb-1.5">{action.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/90">{action.label}</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Secondary Navigation Ribbon */}
        <div className="mt-auto pt-8">
          <div className="flex justify-between items-center px-2">
            {secondaryTools.map((tool, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                {tool.action ? (
                  <button onClick={tool.action} className="w-14 h-14 glass rounded-2xl flex items-center justify-center active:bg-white/10 transition-all shadow-xl hover:border-emerald-500/30">
                    <span className="text-xl">{tool.icon}</span>
                  </button>
                ) : (
                  <Link to={tool.link!} target={tool.link?.startsWith('http') ? "_blank" : "_self"} className="w-14 h-14 glass rounded-2xl flex items-center justify-center active:bg-white/10 transition-all shadow-xl hover:border-emerald-500/30">
                    <span className="text-xl">{tool.icon}</span>
                  </Link>
                )}
                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-zinc-700">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Identity Footer */}
      <div className="bg-zinc-950 py-8 text-center border-t border-white/5 relative z-30">
        <button 
          onClick={() => {
            const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${CONTACT_INFO.name}\nORG:${COMPANY_INFO.name}\nTITLE:${CONTACT_INFO.role}\nTEL;TYPE=CELL:${CONTACT_INFO.phone}\nEMAIL:${CONTACT_INFO.email}\nURL:https://${COMPANY_INFO.website}\nEND:VCARD`;
            const blob = new Blob([vcard], { type: 'text/vcard' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Darshan_NG_SIPC_Protocol.vcf';
            link.click();
          }}
          className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-800 hover:text-emerald-500 transition-colors"
        >
          Verify Corporate Authority
        </button>
      </div>

    </div>
  );
};

export default VCard;