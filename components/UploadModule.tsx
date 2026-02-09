
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const UploadModule: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success'>('idle');

  const handleUpload = () => {
    setStatus('uploading');
    setTimeout(() => {
      setStatus('success');
      // In a real app, you'd send to an S3 bucket or similar
    }, 2000);
  };

  return (
    <div className="h-full flex flex-col bg-zinc-950 text-white p-8">
      <nav className="mb-12 flex justify-between items-center">
        <Link to="/" className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Cancel</Link>
        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">Site Media Node</span>
      </nav>

      <div className="flex-grow flex flex-col items-center justify-center text-center">
        {status === 'success' ? (
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
            <div className="w-20 h-20 bg-emerald-500 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h1 className="text-2xl font-black mb-4">Transmission Complete.</h1>
            <p className="text-zinc-500 text-sm mb-12">Darshan can now view your site conditions. Follow up via WhatsApp for analysis.</p>
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Darshan,%20I've%20uploaded%20site%20media%20for%20your%20review.`} className="bg-emerald-600 px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest">Notify Darshan</a>
          </motion.div>
        ) : (
          <>
            <div className="w-24 h-24 bg-white/5 border border-white/5 rounded-[2.5rem] flex items-center justify-center mb-10">
              <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <h1 className="text-3xl font-black mb-4 tracking-tight">Project Evidence.</h1>
            <p className="text-zinc-500 text-sm mb-12 max-w-[280px]">Upload site photos or video clips for precision service scoping.</p>
            
            <label className="w-full glass p-10 rounded-[2.5rem] border-dashed border-white/10 flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-all mb-8">
              <input type="file" className="hidden" onChange={e => setFile(e.target.files?.[0] || null)} />
              <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
                {file ? file.name : "Select Media File"}
              </span>
            </label>

            <button 
              disabled={!file || status === 'uploading'}
              onClick={handleUpload}
              className={`w-full py-6 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl ${status === 'uploading' ? 'bg-zinc-800 text-zinc-500' : 'bg-white text-black'}`}
            >
              {status === 'uploading' ? "Encrypting & Sending..." : "Transmit Evidence"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadModule;
