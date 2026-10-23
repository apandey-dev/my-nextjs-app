import Link from "next/link";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import { ArrowRight, Code, Compass, Heart, Sparkles, BookOpen } from "lucide-react";

export default function About() {
  return (
    <Layout
      title="About — Monograph"
      description="Learn about the design philosophy, architectural choices, and principles guiding Monograph."
    >
      <div className="max-w-5xl xl:max-w-6xl mx-auto space-y-14">
        <PageHeader
          badge="About Monograph"
          title="Designed for clarity, built for performance."
          description="A personal editorial and technical journal exploring frontend architecture, deliberate design systems, and web performance."
        />

        {/* Editorial Profile Section */}
        <section className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-accent text-surface flex items-center justify-center font-bold text-2xl shadow-subtle shrink-0">
              M
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-primary">The Monograph Project</h2>
              <p className="text-sm text-secondary">
                Curated by Alex Morgan • Frontend Engineer &amp; Digital Typographer
              </p>
              <div className="flex items-center gap-2 pt-1 text-xs text-muted">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Independent Editorial Publication</span>
              </div>
            </div>
          </div>

          <div className="border-t border-border-subtle pt-5 space-y-4 text-secondary text-sm sm:text-base leading-relaxed">
            <p>
              Monograph is an editorial initiative focused on modern web engineering, clean design systems,
              and thoughtful typography. Every page and component is built from scratch with an emphasis on
              performance, accessible semantic markup, and humanistic visual identity.
            </p>
            <p>
              Web development often falls into traps of visual over-decoration: animated glow circles,
              distracting gradients, and superficial dashboard cards. Monograph takes the opposite path — 
              relying on honest whitespace, consistent vertical rhythms, and deliberate typographic contrast.
            </p>
          </div>
        </section>

        {/* Core Values / Focus Areas */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-primary">
            Guiding Technical Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-surface border border-border space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent-light text-accent flex items-center justify-center">
                <Code className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-primary text-base">Static Pre-generation</h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Using <code className="font-mono text-xs bg-surface-muted px-1 py-0.5 rounded">getStaticPaths</code> and{" "}
                <code className="font-mono text-xs bg-surface-muted px-1 py-0.5 rounded">getStaticProps</code> to deliver HTML pre-built at deployment time.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface border border-border space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent-light text-accent flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-primary text-base">Predictable Navigation</h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Active link indicators, intuitive breadcrumbs, responsive drawer navigation, and accessible keyboard focus outlines.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface border border-border space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent-light text-accent flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-primary text-base">Disciplined Mali Font</h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Universal typographic identity scaled carefully across mobile and desktop without whimsical distortion.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface border border-border space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent-light text-accent flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-primary text-base">Honest Interactions</h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Validated forms with clear announcements, meaningful error states, and transparent client-side feedback.
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTAs */}
        <section className="bg-surface-muted border border-border rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-bold text-primary text-lg">Ready to explore?</h3>
            <p className="text-sm text-secondary">
              Read our technical articles or send an inquiry via the contact form.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-surface text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg transition-colors shadow-subtle flex-1 sm:flex-none"
            >
              <span>Explore Blog</span>
              <BookOpen className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-muted text-primary text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg border border-border transition-colors flex-1 sm:flex-none"
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
