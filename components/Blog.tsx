import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen text-white pt-24 pb-40 overflow-y-auto no-scrollbar">
      <div className="max-w-4xl mx-auto px-8">
        <nav className="mb-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center text-zinc-500 font-black text-[10px] uppercase tracking-[0.4em] hover:text-emerald-500 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7"></path></svg>
            Specialist Profile
          </Link>
          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-800">Authority Channel</span>
        </nav>

        <header className="mb-24">
          <h1 className="text-heading text-6xl md:text-8xl font-black text-white leading-tight mb-10 tracking-tighter">Authority Engine.</h1>
          <p className="text-xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
            Technical analysis, structural risk alerts, and prevention strategies for Bengaluru properties.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12">
          {BLOG_POSTS.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass rounded-[3.5rem] p-10 border border-white/5 hover:border-emerald-500/30 hover:bg-zinc-900/50 transition-all duration-500">
                <div className="flex items-center justify-between mb-8">
                  <span className="bg-emerald-600/10 text-emerald-500 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/10">
                    {post.category}
                  </span>
                  <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">{post.date}</span>
                </div>
                <h2 className="text-heading text-3xl font-black text-white mb-6 leading-tight group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-500 text-md leading-relaxed mb-10">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-[10px] font-black text-emerald-600 uppercase tracking-[0.4em]">
                  Read Full Analysis <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;