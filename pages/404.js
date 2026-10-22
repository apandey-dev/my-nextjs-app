import Link from "next/link";
import Layout from "../components/Layout";
import { ArrowLeft, Home, BookOpen } from "lucide-react";

export default function Custom404() {
  return (
    <Layout
      title="404 — Page Not Found | Monograph"
      description="The requested page or article could not be found."
    >
      <div className="max-w-md mx-auto text-center py-16 sm:py-24 space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-light text-accent font-bold text-2xl border border-accent/20">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            Page not found
          </h1>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            The route or article ID you requested does not exist or has been relocated.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-surface text-sm font-medium px-4 py-2.5 rounded-lg transition-colors shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-surface hover:bg-surface-muted text-primary text-sm font-medium px-4 py-2.5 rounded-lg border border-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <BookOpen className="w-4 h-4" />
            <span>Browse Articles</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
