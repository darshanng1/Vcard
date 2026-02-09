
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const ChatModule: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-zinc-950 text-white">
      <nav className="p-8 flex items-center justify-between glass border-b border-white/5">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-2xl overflow-hidden border border-emerald-500/20">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${CONTACT_INFO.name}`} className="w-full h-full object-cover grayscale" />
          </div>
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest">SIPC Executive Console</div>
            <div className="flex items-center mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 breathe-glow"></div>
              <span className="text-[7px] font-black uppercase tracking-widest text-emerald-500/60">Live Channel</span>
            </div>
          </div>
        </div>
        <Link to="/" className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Exit</Link>
      </nav>

      <div className="flex-grow p-8 flex flex-col justify-end space-y-6">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="glass p-6 rounded-[2rem] rounded-bl-none max-w-[85%]">
          <p className="text-zinc-400 text-xs font-medium leading-relaxed">
            Welcome to Secure India Group. I am managing Darshan's business inquiries today. How can I facilitate your requirement?
          </p>
        </motion.div>
        
        <div className="space-y-3">
          {["Technical Quote", "Audit Scheduling", "Compliance Help"].map((opt, i) => (
            <motion.button 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="block w-full text-left glass border-emerald-500/10 text-emerald-500 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all shadow-xl"
            >
              {opt}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="p-8 pb-12">
        <div className="glass border-white/10 p-2 rounded-full flex items-center shadow-2xl">
          <input className="bg-transparent flex-grow outline-none text-white text-xs px-6" placeholder="Direct message..." />
          <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModule;
