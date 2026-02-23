import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "../constants";

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = post.title + " | Bird Netting Bangalore";

      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", post.excerpt);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="bg-zinc-950 min-h-screen text-white p-20">
        Post not found
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 min-h-screen text-white p-10">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-emerald-500 underline">
          ← Back to Blog
        </Link>

        <h1 className="text-4xl font-black mt-6 mb-6">
          {post.title}
        </h1>

        <div
          className="text-zinc-300 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{
            __html: post.content
              .split("\n\n")
              .map((p) => `<p>${p.trim()}</p>`)
              .join("")
          }}
        />

        <a
          href="https://wa.me/919686407061"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default BlogPost;