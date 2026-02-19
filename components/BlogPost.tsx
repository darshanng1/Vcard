import React from "react";
import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "../constants";

const BlogPost: React.FC = () => {
  const { slug } = useParams();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

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
        <Link to="/blog" className="text-emerald-500">
          ← Back to Blog
        </Link>

        <h1 className="text-4xl font-black mt-6 mb-6">
          {post.title}
        </h1>

        <p className="text-zinc-400 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
