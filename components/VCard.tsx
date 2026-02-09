
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, COMPANY_INFO } from '../constants';

const VCard: React.FC = () => {
  const [isSaving, setIsSaving] = useState(false);

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

  const dashboardItems = [
    { label: "Call", icon: "📞", link: `tel:${CONTACT_INFO.phone}`, external: true, color: "bg-emerald-600" },
    { label: "WhatsApp", icon: "💬", link: `https://wa.me/${CONTACT_INFO.whatsapp}`, external: true, color: "bg-zinc-800" },
    { label: "Book Meeting", icon: "📅", link: "/book", external: false, color: "bg-zinc-800" },
    { label: "Live Chat", icon: "🤖", link: "/chat", external: false, color: "bg-zinc-800" },
    { label: "Rate Card", icon: "📄", link: "/rate-card", external: false, color: "bg-zinc-800" },
    { label: "Invoice/PDF", icon: "🧾", link: "/invoice", external: false, color: "bg-zinc-800" },
    { label: "Share Card", icon: "📤", action: handleShare, color: "bg-zinc-800" },
    { label: "Website", icon: "🌐", link: `https://${COMPANY_INFO.website}`, external: true, color: "bg-zinc-800" },
    { label: "Map", icon: "📍", link: "https://www.google.com/maps/search/?api=1&query=Dooravani+Nagar+Bengaluru", external: true, color: "bg-zinc-800" },
  ];

  return (
    <div className="min-h-full flex flex-col mesh-gradient">
      {/* 🎬 HEADER AREA (Parallax Style) */}
      <section className="relative px-8 pt-12 pb-8 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-full flex flex-col items-center"
        >
          {/* Logo & Profile Layer */}
          <div className="relative mb-6">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-24 h-24 rounded-[2rem] glass p-1.5 border-emerald-500/20 shadow-2xl"
            >
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${CONTACT_INFO.name}&backgroundColor=059669`} 
                alt={CONTACT_INFO.name} 
                className="w-full h-full rounded-[1.8rem] object-cover grayscale brightness-110"
              />
            </motion.div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg border border-zinc-100">
               <div className="w-6 h-6 bg-emerald-600 rounded-md"></div>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-heading text-3xl font-black text-white tracking-tighter mb-1">
              {CONTACT_INFO.name}
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-2">{CONTACT_INFO.role}</p>
            <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{COMPANY_INFO.name}</p>
          </div>
        </motion.div>
      </section>

      {/* 📱 PRIMARY ACTION GRID (3x3) */}
      <section className="px-6 flex-grow">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {dashboardItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {item.action ? (
                <button 
                  onClick={item.action}
                  className={`w-full aspect-square rounded-[2rem] ${item.color} flex flex-col items-center justify-center dashboard-card border border-white/5 shadow-xl`}
                >
                  <span className="text-2xl mb-1">{item.icon}</span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/80">{item.label}</span>
                </button>
              ) : item.external ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`w-full aspect-square rounded-[2rem] ${item.color} flex flex-col items-center justify-center dashboard-card border border-white/5 shadow-xl`}
                >
                  <span className="text-2xl mb-1">{item.icon}</span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/80">{item.label}</span>
                </a>
              ) : (
                <Link 
                  to={item.link!}
                  className={`w-full aspect-square rounded-[2rem] ${item.color} flex flex-col items-center justify-center dashboard-card border border-white/5 shadow-xl`}
                >
                  <span className="text-2xl mb-1">{item.icon}</span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/80">{item.label}</span>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* 🛠 SECONDARY TOOLS DOCK (Scrollable Row) */}
        <div className="mb-10">
          <h2 className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-4 px-2">Project Tools</h2>
          <div className="flex space-x-3 overflow-x-auto no-scrollbar px-2 pb-4">
            {[
              { label: "Site Photo", icon: "📸" },
              { label: "Site Video", icon: "📹" },
              { label: "Inspection", icon: "🛡️" },
              { label: "Callback", icon: "🤙" }
            ].map((tool, i) => (
              <button 
                key={i}
                className="flex-shrink-0 flex items-center space-x-3 bg-white/5 border border-white/5 px-6 py-4 rounded-2xl active:scale-95 transition-transform"
              >
                <span className="text-xl">{tool.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 whitespace-nowrap">{tool.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 🔐 CORPORATE FOOTER (Fixed-ish) */}
      <footer className="mt-auto px-8 py-8 border-t border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="flex items-center justify-between text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600">
          <span>&copy; SIPC India Executive</span>
          <button 
            onClick={() => {
              const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${CONTACT_INFO.name}\nORG:${COMPANY_INFO.name}\nTITLE:${CONTACT_INFO.role}\nTEL;TYPE=CELL:${CONTACT_INFO.phone}\nEND:VCARD`;
              const blob = new Blob([vcard], { type: 'text/vcard' });
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', `Darshan_NG_SIPC.vcf`);
              link.click();
            }}
            className="text-emerald-500"
          >
            Sync Contacts
          </button>
        </div>
      </footer>
    </div>
  );
};

export default VCard;
