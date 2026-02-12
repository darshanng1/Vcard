import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { GoogleGenAI } from "@google/genai";

interface Props {
  onClose?: () => void;
  isDark?: boolean;
}

const ChatModule: React.FC<Props> = ({ onClose, isDark }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { 
      role: 'model', 
      text: "Hi, this is Darshan. How can I assist with your structural pest control or bird netting needs today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 🎯 CHAT STYLE: SQUARE SHAPE (rounded-none)
  // Profile Light mode -> Chat is black
  // Profile Dark mode -> Chat is warm dark brown (#795548)
  const bgColor = isDark ? 'bg-[#795548]' : 'bg-black'; 
  const textColor = 'text-white';
  const inputBg = isDark ? 'bg-white/10' : 'bg-zinc-900';
  const msgModelBg = isDark ? 'bg-white/20' : 'bg-zinc-900';
  const msgUserBg = isDark ? 'bg-zinc-800' : 'bg-emerald-600';
  const msgModelText = 'text-white/90';

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText || loading) return;

    const userMessage = trimmedText;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `You are Darshan N G, Business Development Manager at Secure India Pest Control Pvt Ltd (SIPC India). 
          Location: SIG Building, Dooravani Nagar, Bengaluru.
          Core Services: Termite protection, Bird Netting, General Pest Control, and Snake Entry Management.
          Tone: Professional, expert, and helpful.
          Call to Action: Recommend a site inspection for accurate scoping.`,
        }
      });

      const modelText = response.text || "I'm currently on-site. Please WhatsApp me for immediate service.";
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Service temporarily delayed. Please use the WhatsApp button on my profile." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${bgColor} ${textColor} flex flex-col h-[520px] rounded-none`}>
      {/* HEADER */}
      <div className={`p-6 border-b border-white/10 flex items-center justify-between`}>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
            <img src="images/darshan.jpg" alt="Darshan" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-[14px] font-black uppercase tracking-widest leading-none mb-1">Darshan N G</p>
            <p className="text-[10px] opacity-60 uppercase font-bold tracking-widest">SIPC India Manager</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="w-12 h-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      {/* MESSAGES */}
      <div ref={scrollRef} className="flex-grow p-8 space-y-6 overflow-y-auto no-scrollbar">
        {messages.map((msg, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`p-5 rounded-xl max-w-[85%] text-[13px] leading-relaxed font-bold ${
              msg.role === 'user' 
                ? `${msgUserBg} text-white rounded-br-none` 
                : `${msgModelBg} ${msgModelText} rounded-bl-none shadow-sm`
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className={`${msgModelBg} p-5 rounded-xl rounded-bl-none`}>
              <span className="flex space-x-1.5">
                <span className="w-2 h-2 bg-current rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-current rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-current rounded-full animate-bounce delay-150"></span>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* INPUT */}
      <div className="p-8 border-t border-white/10 bg-black/10">
        <div className={`${inputBg} p-1 rounded-none flex items-center border border-white/10`}>
          <input 
            className="bg-transparent flex-grow outline-none text-current text-[14px] px-6 font-bold h-14" 
            placeholder="Type your query..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
            disabled={loading}
          />
          <button 
            onClick={() => handleSend(input)}
            disabled={loading || !input.trim()}
            className="w-12 h-12 bg-emerald-600 text-white flex items-center justify-center transition-transform active:scale-90 disabled:opacity-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModule;
