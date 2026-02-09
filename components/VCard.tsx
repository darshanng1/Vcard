
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, COMPANY_INFO } from '../constants';

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
    { label: "Call Now", icon: "📞", link: `tel:${CONTACT_INFO.phone}`, type: 'ext', color: "bg-emerald-600 shadow-emerald-500/20" },
    { label: "WhatsApp", icon: "💬", link: `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Darshan,%20I'm%20interested%20in%20professional%20pest%20control%20services.`, type: 'ext', color: "bg-zinc-800 border-zinc-700/30" },
    { label: "Book Audit", icon: "📅", link: "/book", type: 'int', color: "bg-zinc-800 border-zinc-700/30" },
    { label: "Live Chat", icon: "🤖", link: "/chat", type: 'int', color: "bg-zinc-800 border-zinc-700/30" },
  ];

  const secondaryTools = [
    { label: "Rate Card", icon: "📄", link: "/rate-card" },
    { label: "Invoice", icon: "🧾", link: "/invoice" },
    { label: "Upload Site", icon: "📸", link: "/upload" },
    { label: "Map", icon: "📍", link: "https://www.google.com/maps/dir/?api=1&destination=Secure+India+Pest+Control+Pvt+Ltd+Bengaluru" },
    { label: "Share", icon: "📤", action: handleShare },
  ];

  return (
    <div className="flex-grow flex flex-col relative overflow-hidden">
      {/* Background Silhouettes Layer */}
      <div className="pest-bg">
        <span className="pest-icon pest-1">🐀</span>
        <span className="pest-icon pest-2">🦟</span>
        <span className="pest-icon pest-3">🐦</span>
      </div>
      <div className="mesh-gradient"></div>
      
      {/* LAYER 1: IMMERSIVE IDENTITY */}
      <section className="relative h-[42%] flex flex-col items-center justify-center px-8 pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full flex flex-col items-center"
        >
          {/* Top Logo Badge */}
          <div className="absolute top-0 left-0 p-6 opacity-30">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center overflow-hidden">
               <span className="text-white text-[10px] font-black tracking-tighter">SIPC</span>
            </div>
          </div>

          {/* Profile Header */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-500/15 rounded-[3rem] blur-2xl opacity-60 breathe-glow"></div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative w-32 h-32 rounded-[2.8rem] glass p-2 overflow-hidden border-emerald-500/20 shadow-2xl"
            >
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${CONTACT_INFO.name}&backgroundColor=059669`} 
                alt={CONTACT_INFO.name} 
                className="w-full h-full rounded-[2.4rem] object-cover grayscale brightness-110"
              />
            </motion.div>
          </div>

          {/* Identity Text */}
          <div className="mt-8 text-center sweep-effect relative px-4">
            <h1 className="text-heading text-4xl font-black text-white tracking-tighter mb-1">
              {CONTACT_INFO.name}
            </h1>
            <div className="text-[10px] font-black uppercase tracking-[0.6em] text-emerald-500 mb-2 glow-text">
              {CONTACT_INFO.role}
            </div>
            <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
              {COMPANY_INFO.name}
            </div>
          </div>
        </motion.div>
      </section>

      {/* LAYER 2: ACTION HUB */}
      <section className="flex-grow glass rounded-t-[4rem] p-8 pb-10 flex flex-col shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Availability Status */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-emerald-500/5 border border-emerald-500/10">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2.5 breathe-glow"></div>
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-500/80">Corporate Line Active</span>
          </div>
        </div>

        {/* Primary Large Actions */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {primaryActions.map((action, i) => (
            <div key={i}>
              {action.type === 'ext' ? (
                <a href={action.link} className={`w-full h-24 flex flex-col items-center justify-center rounded-[2.5rem] ${action.color} border border-white/5 magnetic-action shadow-2xl`}>
                  <span className="text-2xl mb-1.5">{action.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/90">{action.label}</span>
                </a>
              ) : (
                <Link to={action.link} className={`w-full h-24 flex flex-col items-center justify-center rounded-[2.5rem] ${action.color} border border-white/5 magnetic-action shadow-2xl`}>
                  <span className="text-2xl mb-1.5">{action.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/90">{action.label}</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Secondary Tool Navigation */}
        <div className="mt-auto px-2">
           <div className="flex justify-between items-center">
            {secondaryTools.map((tool, i) => (
              <div key={i} className="flex flex-col items-center space-y-2.5">
                {tool.action ? (
                  <button onClick={tool.action} className="w-12 h-12 glass rounded-2xl flex items-center justify-center active:bg-white/10 transition-colors shadow-lg">
                    <span className="text-lg">{tool.icon}</span>
                  </button>
                ) : tool.link?.startsWith('http') ? (
                  <a href={tool.link} target="_blank" className="w-12 h-12 glass rounded-2xl flex items-center justify-center active:bg-white/10 transition-colors shadow-lg">
                    <span className="text-lg">{tool.icon}</span>
                  </a>
                ) : (
                  <Link to={tool.link!} className="w-12 h-12 glass rounded-2xl flex items-center justify-center active:bg-white/10 transition-colors shadow-lg">
                    <span className="text-lg">{tool.icon}</span>
                  </Link>
                )}
                <span className="text-[7px] font-black uppercase tracking-[0.15em] text-zinc-500">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Registry Bar */}
      <div className="bg-zinc-950 py-4 text-center border-t border-white/5">
        <button 
          onClick={() => {
            const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${CONTACT_INFO.name}\nORG:${COMPANY_INFO.name}\nTITLE:${CONTACT_INFO.role}\nTEL;TYPE=CELL:${CONTACT_INFO.phone}\nEMAIL:${CONTACT_INFO.email}\nEND:VCARD`;
            const blob = new Blob([vcard], { type: 'text/vcard' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url; link.download = 'Darshan_NG_SIPC.vcf'; link.click();
          }}
          className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-700 hover:text-emerald-500 transition-colors"
        >
          Sync Official Protocol
        </button>
      </div>

    </div>
  );
};

export default VCard;
