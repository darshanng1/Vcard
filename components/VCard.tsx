import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, COMPANY_INFO, SERVICES } from '../constants';
import logoImg from "../assets/images/SIPCLogo.jpg";
import profileImg from "../assets/images/Darshan.jpeg";
import bird1 from "../assets/images/blog/bird1.jpg";
import bird2 from "../assets/images/blog/bird2.jpg";
import bird3 from "../assets/images/blog/bird3.jpg";
import bird4 from "../assets/images/blog/bird4.jpg";

const FloatingChat: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const whatsappNumber = "8618764541";
  const bgColor = isDark ? 'bg-[#795548]' : 'bg-black';

  return (
    <div className="fixed bottom-10 right-10 z-[999]">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp Chat"
        className={`w-16 h-16 flex items-center justify-center text-white rounded-none shadow-2xl transition-transform active:scale-90 hover:scale-105 ${bgColor}`}
      >
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

const BackgroundAtmosphere: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 transition-colors duration-500">
      <div className={`absolute inset-0 ${isDark ? 'bg-slate-950' : 'bg-[#e2e8f0]'}`} />
      <div className={`absolute inset-0 texture-structural ${isDark ? 'opacity-20' : 'opacity-10'}`} />
      <div className={`absolute inset-0 texture-netting ${isDark ? 'opacity-30' : 'opacity-10'}`} />
      <motion.div style={{ y }} className="absolute inset-0 texture-grain opacity-10" />
      <div className={`absolute top-0 w-full h-96 bg-gradient-to-b ${isDark ? 'from-emerald-950/20' : 'from-slate-300/20'} to-transparent`} />
      <div className={`absolute bottom-0 w-full h-96 bg-gradient-to-t ${isDark ? 'from-slate-950' : 'from-[#e2e8f0]'} to-transparent`} />
    </div>
  );
};

const PestMotionRibbon: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <div className={`w-full overflow-hidden py-8 border-y mb-12 backdrop-blur-sm transition-colors duration-500 ${isDark ? 'bg-slate-900/30 border-white/5' : 'bg-slate-200/50 border-slate-300'}`}>
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -2200] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex space-x-12 px-8 items-center"
        >
          {[...SERVICES, ...SERVICES, ...SERVICES].map((p, i) => (
            <Link key={i} to={`/service/${p.slug}`} className="block">
              <motion.div
                initial={{ opacity: 0.6, scale: 1 }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.15, 1],
                  filter: [
                    "drop-shadow(0 0 0px rgba(16, 185, 129, 0))",
                    "drop-shadow(0 0 10px rgba(16, 185, 129, 0.6))",
                    "drop-shadow(0 0 0px rgba(16, 185, 129, 0))"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: (i % SERVICES.length) * 0.25,
                  ease: "easeInOut"
                }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110 mb-2">
                  {p.icon}
                </span>
                <div className="text-center">
                   <p className={`text-[10px] font-black uppercase tracking-widest transition-colors ${isDark ? 'text-white group-hover:text-emerald-400' : 'text-slate-800 group-hover:text-emerald-600'}`}>{p.title}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const AnimatedServiceCard: React.FC<{ service: any; isDark: boolean }> = ({ service, isDark }) => {
  return (
    <Link
      to={`/service/${service.slug}`}
      className="block no-underline"
    >
      <motion.div
        initial={{ opacity: 0.9, scale: 1 }}
        whileInView={{
          opacity: 1,
          scale: [1, 1.04, 1],
          boxShadow: [
            "0 0 0px rgba(16, 185, 129, 0)",
            "0 0 20px rgba(16, 185, 129, 0.35)",
            "0 0 0px rgba(16, 185, 129, 0)"
          ]
        }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`p-6 rounded-2xl flex items-center space-x-6 transition-all group border shadow-sm ${
          isDark ? 'bg-slate-900/40 border-white/5 hover:bg-slate-900' : 'bg-white border-slate-200 hover:border-emerald-500'
        }`}
      >
        <motion.span
          whileInView={{ scale: [1, 1.25, 1] }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-5xl grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110"
        >
          {service.icon}
        </motion.span>
        <div className="flex-1">
          <p className={`text-[14px] font-black tracking-tight group-hover:text-emerald-600 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {service.title}
          </p>
          <p className={`text-[9px] uppercase tracking-widest font-bold ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            Professional Services
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

const VCard: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const handleShare = () => {
    const text = `Darshan N G | SIPC India. ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className={`flex-grow flex flex-col relative overflow-y-auto no-scrollbar scroll-smooth transition-colors duration-500 ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-[#e2e8f0] text-slate-800'}`}>
      <BackgroundAtmosphere isDark={isDark} />

      {/* 🧭 Header */}
      <nav className="relative z-[100] py-10">
        <div className="max-w-[500px] mx-auto px-10 flex justify-between items-center">
          <div className="w-24 h-24 p-2 rounded-full bg-white flex items-center justify-center shadow-xl">
            <img src={logoImg} alt="SIPC Logo" className="w-[85%] h-[85%] object-contain" />
          </div>
          <div className="flex space-x-3">
             <button
              onClick={() => setIsDark(!isDark)}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90 ${isDark ? 'bg-slate-900 text-yellow-400' : 'bg-slate-200 text-slate-600'}`}
            >
              {isDark ? '🌙' : '☀️'}
            </button>
            <button
              onClick={handleShare}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90 ${isDark ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 100-2.684 3 3 0 000 2.684zm0 12.684a3 3 0 100-2.684 3 3 0 000 2.684z"></path></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* 👤 Identity Section */}
      <section className="relative pb-12 px-10 flex flex-col items-center z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-10"
        >
          <div className={`absolute -inset-10 rounded-full blur-3xl ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-200/20'}`} />
          <div className={`relative w-40 h-40 rounded-full overflow-hidden border-2 shadow-2xl transition-colors duration-500 ${isDark ? 'border-white/10 bg-slate-900' : 'border-white bg-slate-100'}`}>
           <img src={profileImg} alt={CONTACT_INFO.name} className="w-full h-full object-cover" />

   </div>
        </motion.div>

        <h1 className={`text-heading text-4xl font-black tracking-tighter mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{CONTACT_INFO.name}</h1>
        <p className="text-[14px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-2">{CONTACT_INFO.role}</p>
        <p className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{COMPANY_INFO.name}</p>
      </section>

      {/* 🎯 Pest Motion Ribbon */}
      <PestMotionRibbon isDark={isDark} />

      {/* ⚙️ Action Buttons */}
      <section className="px-10 mb-10 z-10 flex flex-col items-center">
        <div className="grid grid-cols-2 gap-3 w-full max-w-[400px] mb-4">
          <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center justify-center py-3.5 bg-emerald-600 rounded-xl font-black text-[11px] uppercase tracking-widest active:scale-95 transition-all text-white shadow-xl shadow-emerald-900/20">
            Call
          </a>
          <a href="https://wa.me/9686407061" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center py-3.5 border rounded-xl font-black text-[11px] uppercase tracking-widest active:scale-95 transition-all text-emerald-600 ${isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-slate-200'}`}>
            WhatsApp
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className={`flex items-center justify-center py-3.5 border rounded-xl font-black text-[11px] uppercase tracking-widest active:scale-95 transition-all ${isDark ? 'bg-slate-900 border-white/5 text-white' : 'bg-white border-slate-200 text-slate-800'}`}>
            Email
          </a>
          <Link to="/book" className={`flex items-center justify-center py-3.5 border rounded-xl font-black text-[11px] uppercase tracking-widest active:scale-95 transition-all ${isDark ? 'bg-slate-900 border-white/5 text-white' : 'bg-white border-slate-200 text-slate-800'}`}>
            Book Inspection
          </Link>
        </div>

        <a
          href={COMPANY_INFO.fullUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full max-w-[400px] flex items-center justify-center py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] active:scale-95 transition-all shadow-xl border-2 ${isDark ? 'bg-white text-slate-950 border-white' : 'bg-slate-900 text-white border-slate-900'}`}
        >
          🌐 Company Website
        </a>
      </section>

      {/* 🏢 Information List */}
      <section className="px-10 mb-10 z-10">
        <div className={`p-8 rounded-3xl border shadow-xl transition-colors duration-500 ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white/80 border-slate-200'}`}>
          <ul className="space-y-4">
            {COMPANY_INFO.about.map((item, i) => (
              <li key={i} className="flex items-start space-x-4">
                <span className="text-emerald-500 mt-1 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </span>
                <p className={`text-[11px] font-bold leading-relaxed uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

            {/* 🪳 Services List */}
      <section className="px-10 mb-0 z-10 space-y-4">
        <h3
          className={`text-[11px] font-black uppercase tracking-[0.5em] mb-6 opacity-60 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Pest & Bird Netting Services
        </h3>

        {SERVICES.map(service => (
          <AnimatedServiceCard
            key={service.id}
            service={service}
            isDark={isDark}
          />
        ))}
      </section>
      {/* 🖼 Bird Net Installation Gallery */}
<section className="px-10 py-12 z-10">
  <h3 className="text-[11px] font-black uppercase tracking-[0.5em] mb-6 opacity-60 text-center">
    Recent Bird Net Installations
  </h3>

  <div className="grid grid-cols-1 gap-6 max-w-[400px] mx-auto">

    <img
      src={bird1}
      alt="Balcony Bird Net Installation Bangalore"
      className="rounded-2xl shadow-2xl w-full object-cover"
    />

    <img
      src={bird2}
      alt="Pigeon Net Installation Bangalore"
      className="rounded-2xl shadow-2xl w-full object-cover"
    />

    <img
      src={bird3}
      alt="Apartment Bird Net Service Bangalore"
      className="rounded-2xl shadow-2xl w-full object-cover"
    />

    <img
      src={bird4}
      alt="Residential Bird Net Bangalore"
      className="rounded-2xl shadow-2xl w-full object-cover"
    />

  </div>
</section>
{/* 📰 Blog Section */}
<section className="px-10 py-10 z-10 flex flex-col items-center">

  <h3 className="text-[11px] font-black uppercase tracking-[0.5em] mb-6 opacity-60">
    Latest Blog
  </h3>

  <button
  onClick={() => {
    window.location.href = "/blog/";
  }}
  className="w-full max-w-[400px] flex items-center justify-center py-4 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-xl border-2 bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 transition"
>
  View All Blog Articles
</button>

{/* 📞 Contact Us Section */}
<section className="px-10 py-12 z-10 flex flex-col items-center">

  <h2 className={`text-2xl font-black uppercase tracking-[0.4em] mb-10 text-center ${
    isDark ? 'text-white' : 'text-slate-900'
  }`}>
    CONTACT US
  </h2>

  <div className={`w-full h-64 rounded-3xl overflow-hidden shadow-2xl mb-10 border ${
    isDark ? 'border-white/5' : 'border-slate-300'
  }`}>
    <iframe
      src={COMPANY_INFO.mapUrl}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

  <Link
    to="/rate-card"
    className={`w-full max-w-[320px] flex items-center justify-center py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] active:scale-95 transition-all shadow-lg border-2 mb-10 ${
      isDark
        ? 'bg-slate-900 text-white border-white/10'
        : 'bg-slate-200 text-slate-800 border-slate-300'
    }`}
  >
    📄 Company Profile
  </Link>

</section>


{/* Address & Footer */}
<footer className={`py-16 text-center relative z-10 transition-colors duration-500 ${
  isDark
    ? 'bg-slate-950/80 border-t border-white/5'
    : 'bg-slate-200/80 border-t border-slate-300'
}`}>

  <p className={`text-[10px] font-black uppercase tracking-[0.4em] px-14 mb-10 leading-relaxed ${
    isDark ? 'text-slate-700' : 'text-slate-500'
  }`}>
    {COMPANY_INFO.address}
  </p>

  <div className="mb-4">
    <a
      href="https://sipc.in/"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-sm font-black tracking-[0.2em] underline decoration-2 underline-offset-8 ${
        isDark ? 'text-emerald-500' : 'text-slate-800'
      }`}
    >
      HTTPS://SIPC.IN/
    </a>
  </div>

</footer>


{/* Scroll To Top */}
<button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="fixed right-4 bottom-24 z-40 bg-slate-800 text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center"
>
  ↑
</button>


{/* WhatsApp Floating Button */}
<FloatingChat isDark={isDark} />


</div>
);
};

export default VCard;