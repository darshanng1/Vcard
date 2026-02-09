
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-20 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="mb-12">
          <Link to="/" className="inline-flex items-center text-zinc-400 font-bold hover:text-emerald-600 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Specialist Profile
          </Link>
        </nav>

        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 leading-[1.1] mb-6 tracking-tight">Authority Engine.</h1>
          <p className="text-xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
            Technical insights, local Bengaluru pest alerts, and professional prevention strategies.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-zinc-50 rounded-[2.5rem] p-8 h-full border border-zinc-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-white text-zinc-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-zinc-100">
                    {post.category}
                  </span>
                  <span className="text-zinc-400 text-xs font-bold">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-4 leading-snug group-hover:text-emerald-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-xs font-black text-emerald-600 uppercase tracking-widest">
                  Read Analysis <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
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
