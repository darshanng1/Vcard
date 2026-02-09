
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
    { label: "Direct Call", icon: "📞", link: `tel:${CONTACT_INFO.phone}`, type: 'ext', color: "bg-emerald-600 shadow-emerald-900/40" },
    { label: "WhatsApp", icon: "💬", link: `https://wa.me/${CONTACT_INFO.whatsapp}`, type: 'ext', color: "bg-zinc-800 border-zinc-700/50" },
    { label: "Schedule", icon: "📅", link: "/book", type: 'int', color: "bg-zinc-800 border-zinc-700/50" },
    { label: "Consult", icon: "🤖", link: "/chat", type: 'int', color: "bg-zinc-800 border-zinc-700/50" },
  ];

  const secondaryTools = [
    { label: "Rate Card", icon: "📄", link: "/rate-card" },
    { label: "Invoice", icon: "🧾", link: "/invoice" },
    { label: "Map", icon: "📍", link: "https://maps.google.com" },
    { label: "Web", icon: "🌐", link: `https://${COMPANY_INFO.website}` },
    { label: "Share", icon: "📤", action: handleShare },
  ];

  return (
    <div className="flex-grow flex flex-col relative overflow-hidden mesh-gradient">
      
      {/* LAYER 1: IMMERSIVE IDENTITY */}
      <section className="relative h-[45%] flex flex-col items-center justify-center px-8 pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full flex flex-col items-center"
        >
          {/* Company Badge */}
          <div className="absolute top-0 left-0 p-6 opacity-40">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-[10px] font-black">S</span>
            </div>
          </div>

          {/* Profile Parallax */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-emerald-500/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="relative w-28 h-28 rounded-[2.5rem] glass p-2 overflow-hidden border-emerald-500/30"
            >
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${CONTACT_INFO.name}&backgroundColor=059669`} 
                alt={CONTACT_INFO.name} 
                className="w-full h-full rounded-[2.2rem] object-cover grayscale brightness-110"
              />
            </motion.div>
          </div>

          {/* Typography Reveal */}
          <div className="mt-8 text-center sweep-effect relative">
            <h1 className="text-heading text-4xl font-black text-white tracking-tighter mb-1">
              {CONTACT_INFO.name}
            </h1>
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-2 glow-text">
              {CONTACT_INFO.role}
            </div>
            <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">
              {COMPANY_INFO.name}
            </div>
          </div>
        </motion.div>
      </section>

      {/* LAYER 2 & 3: ACTION HUB */}
      <section className="flex-grow glass rounded-t-[3.5rem] p-8 pb-12 flex flex-col">
        
        {/* Smart Status */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 breathe-glow shadow-emerald-500/50 shadow-lg"></div>
            <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">Available for consultation</span>
          </div>
        </div>

        {/* Primary Magnetic Grid */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {primaryActions.map((action, i) => (
            <div key={i}>
              {action.type === 'ext' ? (
                <a href={action.link} className={`w-full h-20 flex flex-col items-center justify-center rounded-3xl ${action.color} border border-white/5 magnetic-action shadow-2xl`}>
                  <span className="text-2xl mb-1">{action.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/80">{action.label}</span>
                </a>
              ) : (
                <Link to={action.link} className={`w-full h-20 flex flex-col items-center justify-center rounded-3xl ${action.color} border border-white/5 magnetic-action shadow-2xl`}>
                  <span className="text-2xl mb-1">{action.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/80">{action.label}</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Secondary Tool Dock */}
        <div className="mt-auto">
          <div className="flex justify-between items-center px-2">
            {secondaryTools.map((tool, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                {tool.action ? (
                  <button onClick={tool.action} className="w-12 h-12 glass rounded-2xl flex items-center justify-center active:bg-white/10 transition-colors">
                    <span className="text-lg">{tool.icon}</span>
                  </button>
                ) : tool.link?.startsWith('http') ? (
                  <a href={tool.link} target="_blank" className="w-12 h-12 glass rounded-2xl flex items-center justify-center active:bg-white/10 transition-colors">
                    <span className="text-lg">{tool.icon}</span>
                  </a>
                ) : (
                  <Link to={tool.link!} className="w-12 h-12 glass rounded-2xl flex items-center justify-center active:bg-white/10 transition-colors">
                    <span className="text-lg">{tool.icon}</span>
                  </Link>
                )}
                <span className="text-[7px] font-black uppercase tracking-widest text-zinc-600">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sync Bar */}
      <div className="absolute bottom-4 left-0 w-full text-center">
        <button 
          onClick={() => {
            const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${CONTACT_INFO.name}\nORG:${COMPANY_INFO.name}\nTITLE:${CONTACT_INFO.role}\nTEL;TYPE=CELL:${CONTACT_INFO.phone}\nEND:VCARD`;
            const blob = new Blob([vcard], { type: 'text/vcard' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url; link.download = 'Darshan_SIPC.vcf'; link.click();
          }}
          className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-700 hover:text-emerald-500 transition-colors"
        >
          Sync Protocol Registry
        </button>
      </div>

    </div>
  );
};

export default VCard;
