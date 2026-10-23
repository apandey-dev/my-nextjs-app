import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X, BookOpen } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => setMobileMenuOpen(false);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const isActive = (href) => {
    if (href === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-border/80 transition-colors">
      <div className="max-w-7xl xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1"
            aria-label="Monograph Home"
          >
            <span className="w-8 h-8 rounded-lg bg-accent text-surface flex items-center justify-center font-bold text-base shadow-subtle group-hover:bg-accent-hover transition-colors">
              M
            </span>
            <span className="text-xl font-bold tracking-tight text-primary">
              Monograph<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-all duration-150 ${
                    active
                      ? "bg-accent-light text-accent-text font-semibold shadow-subtle"
                      : "text-secondary hover:text-primary hover:bg-surface-muted"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Quick Action */}
          <div className="hidden md:flex items-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-accent-hover bg-accent-light hover:bg-accent/15 px-3 py-1.5 rounded-full border border-accent/20 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Articles</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-surface-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-primary" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface px-4 pt-3 pb-5 space-y-1 shadow-card animate-fadeIn">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  active
                    ? "bg-accent-light text-accent-text font-semibold"
                    : "text-secondary hover:text-primary hover:bg-surface-muted"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-border-subtle">
            <Link
              href="/contact"
              className="block w-full text-center bg-accent text-surface hover:bg-accent-hover font-medium px-4 py-2.5 rounded-lg text-sm transition-colors shadow-subtle"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
