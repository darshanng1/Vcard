
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const ChatModule: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-zinc-950">
      <nav className="p-6 border-b border-white/5 flex items-center justify-between bg-black/20 backdrop-blur-xl">
        <Link to="/" className="text-zinc-500 font-black text-[10px] uppercase tracking-widest">Exit</Link>
        <span className="text-white font-black text-xs uppercase tracking-[0.2em]">Consultation Chat</span>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${CONTACT_INFO.name}`} className="w-full h-full object-cover grayscale" />
        </div>
      </nav>

      <div className="flex-grow p-6 flex flex-col justify-end space-y-4">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 border border-white/5 p-4 rounded-2xl rounded-bl-none max-w-[80%]">
          <p className="text-zinc-400 text-xs font-medium leading-relaxed">
            Hello, this is Darshan's executive channel. How can I facilitate your request today?
          </p>
        </motion.div>
        
        <div className="space-y-2">
          {["Request Quotation", "Emergency Service", "Technical Details"].map((opt, i) => (
            <button key={i} className="block w-full text-left bg-emerald-600/10 border border-emerald-500/20 text-emerald-500 p-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all">
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 pb-12">
        <div className="bg-white/5 border border-white/5 p-4 rounded-full flex items-center">
          <input className="bg-transparent flex-grow outline-none text-white text-xs px-4" placeholder="Type message..." />
          <button className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModule;
