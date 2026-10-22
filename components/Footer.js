import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-bold text-primary"
            >
              <span className="w-6 h-6 rounded-md bg-accent text-surface flex items-center justify-center font-bold text-xs">
                M
              </span>
              <span>Monograph<span className="text-accent">.</span></span>
            </Link>
            <p className="text-sm text-secondary max-w-sm leading-relaxed">
              An architectural showcase demonstrating Next.js Pages Router static site generation (SSG), dynamic routes, clean Mali typography, and thoughtful UI design.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-muted">
              <span className="inline-block w-2 h-2 rounded-full bg-accent/70 animate-pulse" />
              <span>Assignment 1: Getting Started &amp; Routing</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-secondary">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Articles &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider">
              Architecture
            </p>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="flex items-center gap-1.5">
                <span>Next.js 14 (Pages)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>getStaticPaths &amp; Props</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>Tailwind CSS v3</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>Mali Typography</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {currentYear} Monograph. Built for Next.js Assignment 1.</p>
          <p className="flex items-center gap-1.5">
            Designed with thoughtful typography &amp; zero generic clutter
          </p>
        </div>
      </div>
    </footer>
  );
}
