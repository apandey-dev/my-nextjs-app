import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPosts, getPostById } from "../../data/posts";
import { ArrowLeft, ArrowRight, Calendar, Clock, Bookmark, Share2 } from "lucide-react";
import { useState } from "react";

export default function BlogPost({ post, prevPost, nextPost }) {
  const [copied, setCopied] = useState(false);

  if (!post) {
    return null;
  }

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Layout
      title={`${post.title} — Monograph`}
      description={post.excerpt}
    >
      <article className="max-w-4xl xl:max-w-5xl mx-auto space-y-12">
        {/* Navigation back */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to all articles</span>
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs text-secondary hover:text-primary bg-surface border border-border px-3 py-1.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Share this article"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? "Link Copied!" : "Share"}</span>
          </button>
        </div>

        {/* Article Header */}
        <header className="space-y-4 pb-8 border-b border-border">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium bg-accent-light text-accent-text border border-accent/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </span>
            <span className="text-border-strong">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary leading-tight">
            {post.title}
          </h1>

          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Strip */}
          <div className="pt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent text-surface flex items-center justify-center font-bold text-xs shadow-subtle">
              {post.author.initials}
            </div>
            <div>
              <p className="font-semibold text-sm text-primary">{post.author.name}</p>
              <p className="text-xs text-muted">{post.author.role}</p>
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <div className="space-y-6 text-primary text-base sm:text-lg leading-relaxed">
          {post.content.map((block, idx) => {
            if (block.type === "paragraph") {
              return (
                <p key={idx} className="text-secondary leading-relaxed">
                  {block.text}
                </p>
              );
            }
            if (block.type === "heading") {
              return (
                <h2
                  key={idx}
                  className="text-xl sm:text-2xl font-bold text-primary tracking-tight pt-4 pb-1"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "code") {
              return (
                <div key={idx} className="rounded-xl overflow-hidden border border-border bg-[#1E232A] text-gray-100 p-4 sm:p-5 text-xs sm:text-sm font-mono overflow-x-auto shadow-card my-4">
                  <div className="text-[10px] text-gray-400 font-sans uppercase tracking-wider mb-2 border-b border-gray-700 pb-1 flex items-center justify-between">
                    <span>Next.js Dynamic Route Handler</span>
                    <span>getStaticPaths</span>
                  </div>
                  <pre>
                    <code>{block.code}</code>
                  </pre>
                </div>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={idx}
                  className="border-l-4 border-accent pl-4 sm:pl-6 py-2 my-6 italic text-primary bg-surface-muted rounded-r-xl text-base sm:text-lg"
                >
                  &ldquo;{block.text}&rdquo;
                </blockquote>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={idx} className="space-y-2.5 my-4 pl-4 list-disc text-secondary text-sm sm:text-base">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>



        {/* Previous and Next Navigation */}
        <nav
          className="pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4"
          aria-label="Article pagination"
        >
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.id}`}
              className="p-4 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all group flex flex-col justify-between"
            >
              <span className="text-xs text-muted flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                <span>Previous Article</span>
              </span>
              <span className="font-semibold text-sm text-primary group-hover:text-accent line-clamp-1">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextPost && (
            <Link
              href={`/blog/${nextPost.id}`}
              className="p-4 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all group flex flex-col justify-between sm:text-right"
            >
              <span className="text-xs text-muted flex items-center sm:justify-end gap-1 mb-1">
                <span>Next Article</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="font-semibold text-sm text-primary group-hover:text-accent line-clamp-1">
                {nextPost.title}
              </span>
            </Link>
          )}
        </nav>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const allPosts = getAllPosts();

  const paths = allPosts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false, // Return 404 for any unregistered ID
  };
}

export async function getStaticProps({ params }) {
  const post = getPostById(params.id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.id === post.id);

  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return {
    props: {
      post,
      prevPost: prevPost ? { id: prevPost.id, title: prevPost.title } : null,
      nextPost: nextPost ? { id: nextPost.id, title: nextPost.title } : null,
    },
  };
}
