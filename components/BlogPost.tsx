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
    <div className="bg-zinc-950 min-h-screen text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">

        {/* Back Link */}
        <Link
          to="/blog"
          className="text-emerald-500 hover:underline"
        >
          ← Back to Blog
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black mt-6 mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Content */}
        <div
  className="text-zinc-300 leading-relaxed space-y-6"
  dangerouslySetInnerHTML={{
    __html: post.content
      .split("\n\n")
      .map(paragraph => `<p>${paragraph.trim()}</p>`)
      .join("")
  }}
/>
<a
  href="https://wa.me/919686407061"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="white"
  >
    <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.6 2.2 8L.2 31.8l8-2.1c2.3 1.3 5 2 7.8 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5c-1.3-2.1-2-4.5-2-6.9C3 8.5 8.5 3 16 3s13 5.5 13 13-5.5 13-13 13zm7.3-9.7c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.3 1.4-.2.2-.5.2-.9 0-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.2 1.3 3.4c.2.2 2.2 3.4 5.4 4.8.8.3 1.4.5 1.9.6.8.2 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z"/>
  </svg>
</a>
      </div>
    </div>
  );
};

export default BlogPost;