
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SERVICES, TRUST_POINTS, PROCESS_STEPS } from '../constants';

const VCard: React.FC = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const handleSaveContact = () => {
    setIsSaving(true);
    setTimeout(() => {
      const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${CONTACT_INFO.name}
TITLE:${CONTACT_INFO.role}
TEL;TYPE=CELL:${CONTACT_INFO.phone}
EMAIL:${CONTACT_INFO.email}
ADR;TYPE=WORK:;;Bengaluru;Karnataka;;India
END:VCARD`;
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${CONTACT_INFO.name.replace(/\s+/g, '_')}.vcf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsSaving(false);
    }, 800);
  };

  const handleShare = async () => {
    setIsSharing(true);
    if (navigator.share) {
      try {
        await navigator.share({
          title: CONTACT_INFO.name,
          text: `Contact ${CONTACT_INFO.name} - ${CONTACT_INFO.role} in Bengaluru`,
          url: window.location.href,
        });
      } catch (err) { console.error(err); }
      finally { setIsSharing(false); }
    } else {
      setIsSharing(false);
      alert('Sharing not supported. Please copy the link.');
    }
  };

  const Spinner = () => (
    <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  return (
    <div className="hero-gradient min-h-screen">
      {/* Hero / Profile Section */}
      <section className="pt-16 pb-12 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto glass rounded-[3rem] p-8 md:p-12 premium-shadow relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>

          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-[2.5rem] border-4 border-white shadow-xl overflow-hidden bg-zinc-100 rotate-3 transition-transform hover:rotate-0">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${CONTACT_INFO.name}&backgroundColor=b6e3f4,c0aede,d1d4f9`} 
                  alt={CONTACT_INFO.name}
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-xl shadow-lg border-2 border-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </div>
            </div>

            <h1 className="text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              {CONTACT_INFO.name}
            </h1>
            <p className="text-emerald-600 font-bold mt-2 uppercase text-xs tracking-[0.2em]">
              {CONTACT_INFO.role}
            </p>
            
            <div className="flex items-center mt-3 text-zinc-400 text-sm font-medium">
              <svg className="w-4 h-4 mr-1 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
              {CONTACT_INFO.location}
            </div>

            <p className="mt-8 text-zinc-600 text-lg leading-relaxed max-w-sm">
              {CONTACT_INFO.bio}
            </p>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 gap-4 w-full mt-10">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="group flex flex-col items-center justify-center bg-zinc-900 text-white p-6 rounded-[2rem] hover:bg-black transition-all active:scale-95 shadow-xl shadow-zinc-200"
              >
                <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-zinc-700 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span className="font-bold text-sm">Call Direct</span>
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center bg-emerald-500 text-white p-6 rounded-[2rem] hover:bg-emerald-600 transition-all active:scale-95 shadow-xl shadow-emerald-100"
              >
                <div className="w-12 h-12 bg-emerald-400 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-emerald-300/50 transition-colors">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <span className="font-bold text-sm">WhatsApp</span>
              </a>
            </div>

            <div className="flex space-x-3 w-full mt-4">
              <button 
                onClick={handleSaveContact}
                disabled={isSaving}
                className="flex-1 bg-white border border-zinc-100 text-zinc-800 py-4 rounded-3xl font-bold flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-sm"
              >
                {isSaving ? <Spinner /> : <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg><span>Save Contact</span></>}
              </button>
              <button 
                onClick={handleShare}
                disabled={isSharing}
                className="flex-1 bg-white border border-zinc-100 text-zinc-800 py-4 rounded-3xl font-bold flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-sm"
              >
                {isSharing ? <Spinner /> : <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 100-2.684 3 3 0 000 2.684zm0 12.684a3 3 0 100-2.684 3 3 0 000 2.684z"></path></svg><span>Share</span></>}
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Points Snapshot */}
      <section className="max-w-xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 gap-6">
          {TRUST_POINTS.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start p-6 bg-white rounded-3xl premium-shadow"
            >
              <div className="text-2xl mr-4">{point.icon}</div>
              <div>
                <h3 className="font-bold text-zinc-900">{point.label}</h3>
                <p className="text-sm text-zinc-500 mt-1 leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Hub */}
      <section className="max-w-2xl mx-auto px-6 mb-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-extrabold text-zinc-900">Expert Solutions</h2>
          <p className="text-zinc-500 text-sm mt-1">Surgical elimination for every pest type.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {SERVICES.map((service, i) => (
            <Link 
              key={service.id} 
              to={`/service/${service.slug}`}
              className="group bg-white p-6 rounded-[2.5rem] border border-zinc-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-300 premium-shadow"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="font-bold text-zinc-900 leading-tight mb-2">{service.title}</h3>
              <div className="flex items-center text-xs font-bold text-emerald-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Execution Process */}
      <section className="bg-zinc-900 py-24 px-6 rounded-t-[4rem]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">3-Step Success</h2>
            <p className="text-zinc-500">The professional way to clear your property.</p>
          </div>
          <div className="space-y-12 relative">
            {/* Connection line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-zinc-800 hidden md:block"></div>
            {PROCESS_STEPS.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <div className="w-12 h-12 bg-emerald-500 text-white flex items-center justify-center rounded-2xl font-bold text-xl relative z-10 shadow-lg shadow-emerald-500/20">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 flex items-center">
                    {step.title} <span className="ml-2 text-lg">{step.icon}</span>
                  </h3>
                  <p className="text-zinc-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VCard;
