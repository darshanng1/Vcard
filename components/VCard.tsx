import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, COMPANY_INFO } from '../constants';

const BackgroundExpertise: React.FC = () => {
  return (
    <div className="bg-layers overflow-hidden">
      <div className="mesh-gradient" />
      
      {/* 🪳 SCENE 1: COCKROACH BAITING SYSTEM (Bottom Layer) */}
      <div className="absolute bottom-[20%] left-[25%]">
        {/* The Bait Dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30 protection-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <motion.div 
          className="silhouette text-4xl"
          initial={{ x: -120, y: 10, opacity: 0, rotate: 10 }}
          animate={{ 
            x: [null, -40, -35], 
            opacity: [0, 0.15, 0],
            scale: [1, 1, 0.7]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            times: [0, 0.6, 1],
            ease: "linear",
            delay: 1
          }}
        >
          🪳
        </motion.div>
      </div>

      {/* 🐀 SCENE 2: RODENT STATION MONITORING (Mid Layer) */}
      <div className="absolute top-[35%] right-[15%]">
        {/* Rodent Station Outline */}
        <div className="w-16 h-10 border border-emerald-500/10 rounded-sm bg-emerald-500/5 relative">
          <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-4 bg-emerald-500/10 rounded-full" />
        </div>
        <motion.div 
          className="silhouette text-3xl absolute -right-20 top-2"
          initial={{ x: 0, opacity: 0 }}
          animate={{ 
            x: [0, -75, -75], 
            opacity: [0, 0.15, 0.05],
            rotate: [0, 0, -5]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            times: [0, 0.45, 1],
            ease: "easeInOut",
            delay: 5
          }}
        >
          🐀
        </motion.div>
      </div>

      {/* 🐦 SCENE 3: INVISIBLE BIRD NETTING (Upper Layer) */}
      <div className="absolute top-[12%] left-[10%] w-[45%] h-[20%]">
        <div className="w-full h-full bird-net-grid rounded-[2rem] border border-emerald-500/5" />
        <motion.div 
          className="silhouette text-5xl absolute -bottom-20 -left-20"
          initial={{ x: 0, y: 0, opacity: 0, rotate: -15 }}
          animate={{ 
            x: [0, 100, 80], 
            y: [0, -80, -60],
            opacity: [0, 0.15, 0],
            scale: [0.8, 1, 0.9]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeOut",
            delay: 3
          }}
        >
          🐦
        </motion.div>
      </div>

      {/* 🦟 SCENE 4: FLYING INSECT CONTROL (Deep Layer) */}
      <div className="absolute top-[65%] left-[60%]">
        <motion.div 
          className="silhouette text-xl"
          animate={{ 
            x: [0, 30, -30, 0], 
            y: [0, -40, 40, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          🦟
        </motion.div>
        {/* Neutralization Pulse */}
        <motion.div 
          className="w-24 h-24 rounded-full border border-emerald-500/10 absolute -left-10 -top-10"
          animate={{ scale: [0.5, 1.5], opacity: [0, 0.1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>
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
    { label: "Direct Call", icon: "📞", link: `tel:${CONTACT_INFO.phone}`, type: 'ext', color: "bg-emerald-600 shadow-emerald-500/20" },
    { label: "WhatsApp", icon: "💬", link: `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20Darshan,%20I'm%20inquiring%20about%20specialized%20hygiene%20infrastructure.`, type: 'ext', color: "bg-zinc-800 border-zinc-700/40" },
    { label: "Book Audit", icon: "📅", link: "/book", type: 'int', color: "bg-zinc-800 border-zinc-700/40" },
    { label: "Live Chat", icon: "🤖", link: "/chat", type: 'int', color: "bg-zinc-800 border-zinc-700/40" },
  ];

  const secondaryTools = [
    { label: "Rate Card", icon: "📄", link: "/rate-card" },
    { label: "Invoice", icon: "🧾", link: "/invoice" },
    { label: "Upload Site", icon: "📸", link: "/upload" },
    { label: "Web", icon: "🌐", link: `https://${COMPANY_INFO.website}` },
    { label: "Share", icon: "📤", action: handleShare },
  ];

  return (
    <div className="flex-grow flex flex-col relative overflow-hidden">
      <BackgroundExpertise />
      
      {/* IDENTITY HERO SECTION */}
      <section className="relative h-[44%] flex flex-col items-center justify-center px-8 pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full flex flex-col items-center"
        >
          {/* Executive Branding Header */}
          <div className="absolute top-0 left-0 p-6 flex items-center space-x-3 opacity-60">
            <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
               <span className="text-white text-[10px] font-black leading-none">SIPC</span>
            </div>
            <div className="h-4 w-[1px] bg-zinc-800" />
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-600">Established Excellence</span>
          </div>

          {/* Profile Focus with Gradient Aura */}
          <div className="relative group mb-8">
            <div className="absolute -inset-6 bg-emerald-500/10 rounded-[3.5rem] blur-3xl opacity-60 breathe-glow" />
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative w-36 h-36 rounded-[3rem] glass p-2 border-emerald-500/20 shadow-2xl overflow-hidden"
            >
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${CONTACT_INFO.name}&backgroundColor=059669`} 
                alt={CONTACT_INFO.name} 
                className="w-full h-full rounded-[2.6rem] object-cover grayscale brightness-110 contrast-125"
              />
            </motion.div>
          </div>

          {/* Authority Typography with Light Sweep */}
          <div className="text-center sweep-effect relative px-4">
            <h1 className="text-heading text-4xl font-black text-white tracking-tighter mb-2">
              {CONTACT_INFO.name}
            </h1>
            <div className="text-[10px] font-black uppercase tracking-[0.6em] text-emerald-500 mb-2 glow-text">
              {CONTACT_INFO.role}
            </div>
            <div className="text-[9px] font-bold text-zinc-700 uppercase tracking-[0.4em] leading-none max-w-[200px] mx-auto">
              Strategic Hygiene Infrastructure Oversight
            </div>
          </div>
        </motion.div>
      </section>

      {/* INTERACTIVE ACTION DASHBOARD */}
      <section className="flex-grow glass rounded-t-[4.5rem] p-8 pb-12 flex flex-col shadow-[0_-20px_100px_rgba(0,0,0,0.8)] border-t border-white/10">
        
        {/* Real-time Status Console */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-emerald-500/5 border border-emerald-500/10">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3 breathe-glow shadow-emerald-500/50 shadow-lg" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/80">Executive Line Secure</span>
          </div>
        </div>

        {/* Primary Command Grid */}
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

        {/* Extended Utility Toolbar */}
        <div className="mt-auto">
          <div className="flex justify-between items-center px-2">
            {secondaryTools.map((tool, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                {tool.action ? (
                  <button onClick={tool.action} className="w-12 h-12 glass rounded-2xl flex items-center justify-center active:bg-white/10 transition-all shadow-xl hover:border-emerald-500/20">
                    <span className="text-xl">{tool.icon}</span>
                  </button>
                ) : tool.link?.startsWith('http') ? (
                  <a href={tool.link} target="_blank" className="w-12 h-12 glass rounded-2xl flex items-center justify-center active:bg-white/10 transition-all shadow-xl hover:border-emerald-500/20">
                    <span className="text-xl">{tool.icon}</span>
                  </a>
                ) : (
                  <Link to={tool.link!} className="w-12 h-12 glass rounded-2xl flex items-center justify-center active:bg-white/10 transition-all shadow-xl hover:border-emerald-500/20">
                    <span className="text-xl">{tool.icon}</span>
                  </Link>
                )}
                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-zinc-600">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Credentials Registry */}
      <div className="bg-zinc-950 py-5 text-center border-t border-white/5">
        <button 
          onClick={() => {
            const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${CONTACT_INFO.name}\nORG:${COMPANY_INFO.name}\nTITLE:${CONTACT_INFO.role}\nTEL;TYPE=CELL:${CONTACT_INFO.phone}\nEMAIL:${CONTACT_INFO.email}\nADR;TYPE=WORK:;;Dooravani Nagar;Bengaluru;Karnataka;560016;India\nURL:https://${COMPANY_INFO.website}\nEND:VCARD`;
            const blob = new Blob([vcard], { type: 'text/vcard' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url; link.download = 'Darshan_SIPC_Executive.vcf'; link.click();
          }}
          className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-800 hover:text-emerald-500 transition-colors"
        >
          Verify Corporate Credentials
        </button>
      </div>

    </div>
  );
};

export default VCard;