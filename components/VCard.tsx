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

  // Parallax transitions
  const birdY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);
  const termiteOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7], [0, 0.2, 0]);
  const shieldScale = useTransform(scrollYProgress, [0.6, 1], [0.8, 1.2]);
  const shieldOpacity = useTransform(scrollYProgress, [0.6, 1], [0.1, 0.3]);

  return (
    <div ref={containerRef} className="bg-layers overflow-hidden">
      {/* SECTION 1: THE BIRD/BALCONY CHALLENGE (Top) */}
      <motion.div 
        style={{ y: birdY }}
        className="absolute top-0 left-0 w-full h-[50%] flex flex-col justify-start pointer-events-none"
      >
        <div className="texture-bird-net absolute inset-0 opacity-20" />
        
        {/* Balcony Railing Silhouette */}
        <div className="mt-48 balcony-railing opacity-30 relative">
          <motion.div 
            className="silhouette text-5xl absolute -top-12 left-[10%]"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            🐦
          </motion.div>
          <motion.div 
            className="silhouette text-4xl absolute -top-10 right-[15%]"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            🐦
          </motion.div>
        </div>
      </motion.div>

      {/* SECTION 2: THE TERMITE/STRUCTURAL THREAT (Mid) */}
      <motion.div 
        style={{ opacity: termiteOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="texture-termite absolute inset-0" />
        <div className="text-[120px] opacity-10 grayscale brightness-150 select-none">🐜</div>
      </motion.div>

      {/* SECTION 3: THE STERILE PROTECTED RESULT (Bottom) */}
      <motion.div 
        style={{ scale: shieldScale, opacity: shieldOpacity }}
        className="absolute bottom-0 left-0 w-full h-[40%] flex items-center justify-center pointer-events-none"
      >
        <div className="w-[80%] h-[80%] rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="absolute text-[180px] grayscale brightness-200 opacity-20">🛡️</div>
      </motion.div>

      {/* Sterile Shine Overlay */}
      <div className="sterile-overlay pointer-events-none" />
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
      link: `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20Darshan,%20I%20am%20inquiring%20about%20SIPC%20pest%20and%20bird%20protection.`, 
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
    <div className="flex-grow flex flex-col relative overflow-y-auto no-scrollbar scroll-smooth">
      <BackgroundExpertise />
      
      {/* 👤 IDENTITY HERO SECTION */}
      <section className="relative min-h-[50dvh] flex flex-col items-center justify-center px-8 pt-12 pb-8 z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          {/* Executive Corporate Badge */}
          <div className="absolute top-0 left-0 p-8 flex items-center space-x-3 opacity-60">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
               <span className="text-white text-[10px] font-black leading-none tracking-tighter">SIPC</span>
            </div>
            <div className="h-4 w-[1px] bg-zinc-800" />
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-600 italic">Est. 2008</span>
          </div>

          {/* Darshan's Premium Portrait */}
          <div className="relative mb-8 mt-12">
            <div className="absolute -inset-14 bg-emerald-500/10 rounded-full blur-3xl breathe-glow" />
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="premium-frame"
            >
              <div className="w-44 h-44 rounded-[4rem] glass p-1.5 overflow-hidden border-emerald-500/20 relative">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=DarshanNG&backgroundColor=059669`} 
                  alt={CONTACT_INFO.name} 
                  className="w-full h-full rounded-[3.6rem] object-cover grayscale brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Identity & Industry Authority Text */}
          <div className="text-center sweep-effect relative px-4">
            <h1 className="text-heading text-4xl font-black text-white tracking-tighter mb-2">
              {CONTACT_INFO.name}
            </h1>
            <div className="text-[10px] font-black uppercase tracking-[0.6em] text-emerald-500 mb-3 glow-text">
              {CONTACT_INFO.role}
            </div>
            <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.35em] leading-relaxed max-w-[260px] mx-auto border-t border-white/5 pt-4">
              Termite • Bird • Cockroach • Rodent Control Authority
            </div>
          </div>
        </motion.div>
      </section>

      {/* 🚀 ACTION HUB DASHBOARD */}
      <section className="flex-grow glass rounded-t-[4.5rem] p-8 pb-12 flex flex-col shadow-[0_-30px_100px_rgba(0,0,0,1)] border-t border-white/10 relative z-20">
        
        {/* Operational Status */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-emerald-500/5 border border-emerald-500/10">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3 breathe-glow shadow-emerald-500/50" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/80">Site Audit Protocol Active</span>
          </div>
        </div>

        {/* Primary Functional Grid */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {primaryActions.map((action, i) => (
            <div key={i}>
              {action.type === 'ext' ? (
                <a href={action.link} className={`w-full h-24 flex flex-col items-center justify-center rounded-[2.8rem] ${action.color} border border-white/5 magnetic-action shadow-2xl`}>
                  <span className="text-2xl mb-1.5">{action.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/90">{action.label}</span>
                </a>
              ) : (
                <Link to={action.link} className={`w-full h-24 flex flex-col items-center justify-center rounded-[2.8rem] ${action.color} border border-white/5 magnetic-action shadow-2xl`}>
                  <span className="text-2xl mb-1.5">{action.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/90">{action.label}</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Secondary Navigation Ribbon */}
        <div className="mt-auto pt-6">
          <div className="flex justify-between items-center px-2">
            {secondaryTools.map((tool, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                {tool.action ? (
                  <button onClick={tool.action} className="w-13 h-13 glass rounded-2xl flex items-center justify-center active:bg-white/10 transition-all shadow-xl hover:border-emerald-500/20">
                    <span className="text-xl">{tool.icon}</span>
                  </button>
                ) : (
                  <Link to={tool.link!} target={tool.link?.startsWith('http') ? "_blank" : "_self"} className="w-13 h-13 glass rounded-2xl flex items-center justify-center active:bg-white/10 transition-all shadow-xl hover:border-emerald-500/20">
                    <span className="text-xl">{tool.icon}</span>
                  </Link>
                )}
                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-zinc-600">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Identity Footer */}
      <div className="bg-zinc-950 py-6 text-center border-t border-white/5 relative z-30">
        <button 
          onClick={() => {
            const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${CONTACT_INFO.name}\nORG:${COMPANY_INFO.name}\nTITLE:${CONTACT_INFO.role}\nTEL;TYPE=CELL:${CONTACT_INFO.phone}\nEMAIL:${CONTACT_INFO.email}\nURL:https://${COMPANY_INFO.website}\nEND:VCARD`;
            const blob = new Blob([vcard], { type: 'text/vcard' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Darshan_NG_SIPC.vcf';
            link.click();
          }}
          className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-800 hover:text-emerald-500 transition-colors"
        >
          Verify Corporate Credential
        </button>
      </div>

    </div>
  );
};

export default VCard;
