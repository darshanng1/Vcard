import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "SIPC Pest Control Blog",
    "description": "Expert pest control articles from SIPC India Bangalore covering bird net installation, termite treatment, pigeon control and pest management solutions.",
    "url": "https://darshanngsipcvcard.pages.dev/blog/",
    "publisher": {
      "@type": "Organization",
      "name": "SIPC India Pest Control",
      "url": "https://sipc.in"
    }
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-white pt-24 pb-40 overflow-y-auto no-scrollbar">

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="max-w-4xl mx-auto px-8">

        <nav className="mb-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center text-zinc-500 font-black text-[10px] uppercase tracking-[0.4em] hover:text-emerald-500 transition-colors"
          >
            ← Specialist Profile
          </Link>

          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-800">
            Authority Channel
          </span>
        </nav>

        <header className="mb-24">
          <h1 className="text-heading text-6xl md:text-8xl font-black text-white mb-10">
            Authority Engine.
          </h1>

          <p className="text-xl text-zinc-500 max-w-2xl">
            Technical analysis and prevention strategies for Bengaluru properties.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12">
          {BLOG_POSTS.map((post) => (
            <motion.div
              key={post.id}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="glass rounded-[3rem] p-10 border border-white/5">

                <h2 className="text-3xl font-black text-white mb-4">
                  {post.title}
                </h2>

                <p className="text-zinc-500 mb-8">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="text-emerald-500 uppercase text-sm font-bold hover:text-emerald-400"
                >
                  Read Full Analysis →
                </Link>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;