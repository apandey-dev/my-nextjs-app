import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="max-w-7xl xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-border-subtle">
          {/* Brand */}
          <div className="space-y-2 max-w-md">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-bold text-primary"
            >
              <span className="w-6 h-6 rounded-md bg-accent text-surface flex items-center justify-center font-bold text-xs">
                M
              </span>
              <span>Monograph<span className="text-accent">.</span></span>
            </Link>
            <p className="text-sm text-secondary leading-relaxed">
              An independent editorial publication dedicated to modern frontend engineering, purposeful design systems, and thoughtful typography.
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap items-center gap-6 text-sm font-medium text-secondary">
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
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {currentYear} Monograph. All rights reserved.</p>
          <p>Crafted with Mali typography &amp; clean web standards.</p>
        </div>
      </div>
    </footer>
  );
}
