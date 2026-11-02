import Link from 'next/link';

/**
 * Redesigned Minimal Editorial Footer
 * Offers clear visual hierarchy, multi-column layout, architectural indicator badges,
 * and clean responsive structure.
 */
export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          {/* Section 1: Brand & Project Statement */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-xs tracking-wider">
                ND
              </div>
              <span className="font-bold text-slate-900 tracking-tight text-base">
                NextData
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-slate-100">
                Assignment 2
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              A production-quality educational showcase demonstrating Next.js Pages Router
              data fetching paradigms: Static Site Generation (SSG), Server-Side Rendering (SSR),
              Client-Side Rendering (CSR with SWR), and Custom API routes.
            </p>
          </div>

          {/* Section 2: Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-slate-900">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link href="/" className="hover:text-slate-900 transition-colors">
                  &rarr; Homepage Overview
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-slate-900 transition-colors">
                  &rarr; Products Catalog (SSG)
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-slate-900 transition-colors">
                  &rarr; Live Feed Dashboard (CSR)
                </Link>
              </li>
              <li>
                <a
                  href="/api/hello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 transition-colors font-mono"
                >
                  &rarr; /api/hello (JSON)
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Data Fetching Patterns */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-slate-900">
              Rendering Strategies
            </h3>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="p-2 rounded bg-emerald-50/70 border border-emerald-200 text-emerald-800">
                <span className="font-bold block uppercase text-[10px]">SSG · getStaticProps</span>
                <span className="text-emerald-600">/products</span>
              </div>
              <div className="p-2 rounded bg-blue-50/70 border border-blue-200 text-blue-800">
                <span className="font-bold block uppercase text-[10px]">SSR · getServerSideProps</span>
                <span className="text-blue-600">/products/[id]</span>
              </div>
              <div className="p-2 rounded bg-purple-50/70 border border-purple-200 text-purple-800">
                <span className="font-bold block uppercase text-[10px]">CSR · useSWR (10s)</span>
                <span className="text-purple-600">/dashboard</span>
              </div>
              <div className="p-2 rounded bg-amber-50/70 border border-amber-200 text-amber-800">
                <span className="font-bold block uppercase text-[10px]">API · Serverless Route</span>
                <span className="text-amber-600">/api/hello</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} NextData. Built with Next.js Pages Router &amp; Tailwind CSS.
          </p>
          <div className="flex items-center space-x-4 text-slate-500">
            <span>Font: Mali (Google Fonts)</span>
            <span>&bull;</span>
            <span>Minimal Editorial Design</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
