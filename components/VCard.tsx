
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const VCard: React.FC = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const handleSaveContact = () => {
    setIsSaving(true);
    
    // Artificial delay to provide visual feedback for the processing state
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
      } catch (err) {
        console.error('Error sharing:', err);
      } finally {
        setIsSharing(false);
      }
    } else {
      setIsSharing(false);
      alert('Sharing not supported on this browser. You can copy the URL.');
    }
  };

  const Spinner = () => (
    <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-[85vh]">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden relative border border-gray-100">
        {/* Profile Section */}
        <div className="pt-12 pb-8 px-8 text-center bg-gradient-to-b from-blue-50 to-white">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
            <img 
              src={`https://picsum.photos/seed/${CONTACT_INFO.name}/200`} 
              alt={CONTACT_INFO.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{CONTACT_INFO.name}</h1>
          <p className="text-blue-600 font-semibold mt-1 tracking-wide uppercase text-xs">{CONTACT_INFO.role}</p>
          <div className="flex items-center justify-center mt-3 text-gray-500">
            <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
            <span className="text-sm font-medium">{CONTACT_INFO.location}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-8 pb-10 space-y-4">
          <p className="text-gray-600 text-center text-sm mb-6 leading-relaxed italic px-4">
            "{CONTACT_INFO.bio}"
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex flex-col items-center justify-center bg-blue-600 text-white p-4 rounded-3xl hover:bg-blue-700 transition-all transform active:scale-95 shadow-md"
            >
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span className="font-bold text-sm">Call Now</span>
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-green-500 text-white p-4 rounded-3xl hover:bg-green-600 transition-all transform active:scale-95 shadow-md"
            >
              <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span className="font-bold text-sm">WhatsApp</span>
            </a>
          </div>

          <button 
            onClick={handleSaveContact}
            disabled={isSaving}
            className={`w-full bg-gray-900 text-white py-4 rounded-3xl font-bold transition-all flex items-center justify-center space-x-2 shadow-lg ${isSaving ? 'opacity-80 cursor-not-allowed' : 'hover:bg-black active:scale-[0.98]'}`}
          >
            {isSaving ? (
              <Spinner />
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
                <span>Save Contact</span>
              </>
            )}
          </button>

          <button 
            onClick={handleShare}
            disabled={isSharing}
            className={`w-full bg-white text-gray-800 border-2 border-gray-100 py-4 rounded-3xl font-bold transition-all flex items-center justify-center space-x-2 ${isSharing ? 'opacity-60 cursor-not-allowed' : 'hover:bg-gray-50 active:scale-[0.98]'}`}
          >
            {isSharing ? (
              <Spinner />
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 100-2.684 3 3 0 000 2.684zm0 12.684a3 3 0 100-2.684 3 3 0 000 2.684z"></path></svg>
                <span>Share Profile</span>
              </>
            )}
          </button>
        </div>

        {/* Small SEO Tagline */}
        <div className="bg-gray-50 border-t border-gray-100 px-8 py-4 text-center">
          <p className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.2em]">Pest & Bird Control Solutions Bengaluru</p>
        </div>
      </div>
      
      {/* Quick Service Icons - Visual Hints */}
      <div className="mt-8 flex space-x-6 text-2xl opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <span>🐜</span>
        <span>🐦</span>
        <span>🪳</span>
        <span>🐀</span>
      </div>
    </div>
  );
};

export default VCard;
