import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, COMPANY_INFO } from '../constants';

const BackgroundExpertise: React.FC = () => {
  return (
    <div className="bg-layers overflow-hidden">
      <div className="mesh-gradient" />
      
      {/* 🛡️ Subtle Industry Textures */}
      <div className="absolute inset-0 termite-veins" />
      <div className="absolute top-0 left-0 w-full h-[30%] bird-net-grid opacity-30" />

      {/* 🪳 SCENE 1: COCKROACH RISK AREA (Subtle Hint) */}
      <div className="absolute bottom-[25%] left-[10%]">
        <motion.div 
          className="silhouette text-5xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0, 0.1, 0.05, 0],
            scale: [0.8, 1, 1.1, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🪳
        </motion.div>
      </div>

      {/* 🐀 SCENE 2: RODENT ENTRY POINT (Strategic Pulse) */}
      <div className="absolute top-[40%] right-[10%]">
        <div className="w-16 h-10 border border-emerald-500/10 rounded-lg bg-emerald-500/5 relative">
          <motion.div 
            className="absolute -inset-1 border border-emerald-500/20 rounded-lg"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
        <motion.div 
          className="silhouette text-3xl absolute -right-8 -top-4"
          animate={{ 
            x: [0, -10, 0],
            opacity: [0, 0.08, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          🐀
        </motion.div>
      </div>

      {/* 🐦 SCENE 3: BIRD PROTECTION OVERLAY (Top Section) */}
      <div className="absolute top-[10%] left-[15%] w-[40%] h-[15%] border border-emerald-500/5 rounded-3xl bg-emerald-500/5 backdrop-blur-[2px]">
        <motion.div 
          className="silhouette text-6xl absolute -bottom-12 -left-12"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0, 0.12, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          🐦
        </motion.div>
      </div>

      {/* 🧪 SCENE 4: STERILE PROTECTION PULSE (General Background) */}
      <div className="absolute bottom-[10%] right-[20%]">
        <motion.div 
          className="w-32 h-32 rounded-full border border-emerald-500/5 bg-emerald-500/5"
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 6, repeat: Infinity }}
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
    { label: "WhatsApp", icon: "💬", link: `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20Darshan,%20I'm%20inquiring%20about%20strategic%20hygiene%20infrastructure.`, type: 'ext', color: "bg-zinc-800 border-zinc-700/40" },
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
      
      {/* IDENTITY HERO SECTION (Option B: Darshan's Professional Portrait) */}
      <section className="relative h-[48%] flex flex-col items-center justify-center px-8 pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full flex flex-col items-center"
        >
          {/* Executive Branding Header */}
          <div className="absolute top-0 left-0 p-6 flex items-center space-x-3 opacity-60">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
               <span className="text-white text-[10px] font-black leading-none">SIPC</span>
            </div>
            <div className="h-4 w-[1px] bg-zinc-800" />
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-600">Enterprise Grade</span>
          </div>

          {/* Premium Framed Professional Portrait */}
          <div className="relative group mb-8">
            <div className="absolute -inset-10 bg-emerald-500/10 rounded-full blur-3xl opacity-60 breathe-glow" />
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="premium-frame shadow-2xl"
            >
              <div className="w-40 h-40 rounded-[3.2rem] glass p-1.5 overflow-hidden border-emerald-500/20">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Darshan&backgroundColor=059669`} 
                  alt={CONTACT_INFO.name} 
                  className="w-full h-full rounded-[2.8rem] object-cover grayscale brightness-110 contrast-125"
                />
                {/* Subtle Overlay to imply "Executive" look if it were a real photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent pointer-events-none" />
              </div>
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
            <div className="text-[9px] font-bold text-zinc-700 uppercase tracking-[0.4em] leading-none max-w-[220px] mx-auto">
              Strategic Oversight: Termite, Bird, Cockroach & Rodent Mitigation
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
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/80">Corporate Line Authenticated</span>
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