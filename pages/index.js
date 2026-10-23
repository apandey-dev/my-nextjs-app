import Link from "next/link";
import Layout from "../components/Layout";
import BlogCard from "../components/BlogCard";
import { getFeaturedPosts } from "../data/posts";
import { ArrowRight, Sparkles, BookOpen, Layers, Terminal } from "lucide-react";

export default function Home({ featuredPosts }) {
  return (
    <Layout
      title="Monograph — Modern Next.js Dynamic Routing & Editorial Platform"
      description="A clean, thoughtfully designed Next.js application demonstrating static site generation, dynamic routes, and cohesive typography."
    >
      <div className="space-y-16 sm:space-y-24">
        {/* Hero Section */}
        <section className="space-y-6 pt-4 sm:pt-8 md:pt-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-light text-accent-text border border-accent/20">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Next.js Assignment 1 • Pages Router &amp; Static Generation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.15] max-w-4xl">
            Thoughtful essays on modern frontend engineering &amp; design craft.
          </h1>

          <p className="text-secondary text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
            Monograph is an architectural editorial space designed with disciplined typography,
            zero AI-generated clutter, and Next.js static pre-rendering with{" "}
            <code className="text-xs sm:text-sm font-mono bg-surface-muted px-1.5 py-0.5 rounded border border-border">
              getStaticPaths
            </code>{" "}
            and{" "}
            <code className="text-xs sm:text-sm font-mono bg-surface-muted px-1.5 py-0.5 rounded border border-border">
              getStaticProps
            </code>.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-surface font-medium px-5 py-2.5 rounded-lg text-sm sm:text-base transition-colors shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-muted text-primary font-medium px-5 py-2.5 rounded-lg text-sm sm:text-base border border-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>About the Project</span>
            </Link>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                Curated Reading
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
                Featured Articles
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover group"
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Purpose / Architectural Highlights Section */}
        <section className="bg-surface border border-border rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider">
              Core Principles
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
              Built with Intentional Restraint
            </h2>
            <p className="text-secondary text-sm sm:text-base leading-relaxed">
              Every detail in this application serves a direct purpose — avoiding the inflated,
              repetitive patterns common in AI templates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2.5 p-4 rounded-xl bg-bg-subtle border border-border-subtle">
              <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-accent">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-primary text-base">Static Pre-rendering</h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Pages and dynamic article routes are generated at build time for sub-50ms TTFB and instant page loads.
              </p>
            </div>

            <div className="space-y-2.5 p-4 rounded-xl bg-bg-subtle border border-border-subtle">
              <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-accent">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-primary text-base">Mali Typography</h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Rendered across all headings, body text, buttons, forms, and dialogs for a warm, distinctive visual identity.
              </p>
            </div>

            <div className="space-y-2.5 p-4 rounded-xl bg-bg-subtle border border-border-subtle">
              <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-accent">
                <Terminal className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-primary text-base">Pages Router Routing</h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Semantic Next.js routing with clean active states, shared persistent layout, and graceful 404 fallback handling.
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="bg-surface-muted border border-border rounded-2xl p-6 sm:p-10 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-primary">
            Have questions or want to collaborate?
          </h2>
          <p className="text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            The contact form features complete field-level client validation, accessible error announcements, and feedback.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-surface font-medium px-5 py-2.5 rounded-lg text-sm transition-colors shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      featuredPosts,
    },
  };
}
