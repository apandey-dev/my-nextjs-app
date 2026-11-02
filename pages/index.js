import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

/**
 * Task 5 — Homepage (Data Fetching Overview & Dynamic API Showcase)
 *
 * This page serves as the project hub:
 * 1. Introduces the application and its architectural concepts.
 * 2. Fetches and displays data dynamically from our custom API route (/api/hello).
 * 3. Provides clean navigation to the SSG Products page and CSR Dashboard.
 */
export default function HomePage() {
  const [apiData, setApiData] = useState(null);
  const [apiLoading, setApiLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  // Client-side fetch to /api/hello demonstrating custom API Route integration
  useEffect(() => {
    let isMounted = true;

    async function fetchApiMessage() {
      try {
        setApiLoading(true);
        setApiError(null);

        const res = await fetch('/api/hello');
        if (!res.ok) {
          throw new Error(`API responded with status: ${res.status}`);
        }
        const data = await res.json();

        if (isMounted) {
          setApiData(data);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Failed to fetch from /api/hello:', err);
          setApiError(err.message || 'Unable to communicate with API route');
        }
      } finally {
        if (isMounted) {
          setApiLoading(false);
        }
      }
    }

    fetchApiMessage();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Head>
        <title>NextData | Next.js Data Fetching Masterclass</title>
        <meta
          name="description"
          content="Production-ready demonstration of Next.js Pages Router data fetching: SSG, SSR, CSR with SWR, and API Routes."
        />
      </Head>

      <div className="space-y-12">
        {/* Hero Section - Scaled for Wide Displays */}
        <section className="text-center max-w-4xl mx-auto pt-6 pb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Next.js Pages Router Architecture
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Data Fetching & API Routes in Next.js
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            A comprehensive, production-grade implementation highlighting Static Site Generation
            (<span className="font-semibold text-slate-800">SSG</span>), Server-Side Rendering
            (<span className="font-semibold text-slate-800">SSR</span>), Client-Side Rendering with SWR
            (<span className="font-semibold text-slate-800">CSR</span>), and internal Next.js API Routes.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 shadow-sm transition-colors"
            >
              Explore Products (SSG) &rarr;
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Live Dashboard (CSR) &rarr;
            </Link>
          </div>
        </section>

        {/* Custom API Route Showcase (Task 4 & 5 Requirement) */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 xl:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                Custom API Route Demo
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-2">
                Live Response from <code className="text-base font-mono text-slate-700">/api/hello</code>
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              pages/api/hello.js
            </span>
          </div>

          <p className="mt-3 text-sm text-slate-600">
            The message below is dynamically queried by the browser on mount via a client-side
            HTTP fetch to our serverless endpoint:
          </p>

          {/* Dynamic Payload Container */}
          <div className="mt-4 p-5 rounded-lg bg-slate-900 text-slate-100 font-mono text-sm relative">
            {apiLoading && (
              <div className="flex items-center space-x-3 text-slate-400 py-1" data-testid="api-loading">
                <svg className="animate-spin h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <span>Fetching message from /api/hello...</span>
              </div>
            )}

            {apiError && (
              <div className="text-rose-400 py-1" data-testid="api-error">
                <span>Error: {apiError}</span>
              </div>
            )}

            {!apiLoading && !apiError && apiData && (
              <div className="space-y-1" data-testid="api-response">
                <div className="text-xs text-slate-400">// 200 OK — JSON payload</div>
                <div className="text-emerald-400 font-medium">
                  {JSON.stringify(apiData, null, 2)}
                </div>
                <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
                  Extracted message: <span className="text-white font-semibold">&ldquo;{apiData.message}&rdquo;</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Architectural Overview Grid */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            Implemented Rendering Strategies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: SSG */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wider">
                  Static Site Gen (SSG)
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Product Catalog
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Pre-rendered during build with <code className="font-mono text-slate-800">getStaticProps</code>.
                  Serves fast, static HTML for optimal SEO and instant page loading from edge CDNs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/products"
                  className="text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  Visit /products &rarr;
                </Link>
              </div>
            </div>

            {/* Card 2: SSR */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
                  Server-Side Render (SSR)
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Product Details
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Calculated dynamically on every incoming HTTP request using{' '}
                  <code className="font-mono text-slate-800">getServerSideProps</code>.
                  Always provides live data and request-specific validation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/products/1"
                  className="text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  Inspect Product #1 &rarr;
                </Link>
              </div>
            </div>

            {/* Card 3: CSR */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 uppercase tracking-wider">
                  Client-Side (CSR + SWR)
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Real-Time Feed
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Fetched directly in the client browser using the <code className="font-mono text-slate-800">useSWR</code> hook.
                  Auto-polls every 10 seconds with background revalidation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/dashboard"
                  className="text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  Open /dashboard &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Note on ISR */}
        <section className="bg-slate-100/70 rounded-lg border border-slate-200 p-6">
          <div className="flex items-start gap-3">
            <span className="text-base font-bold text-slate-500 mt-0.5">ℹ</span>
            <div className="text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-800 block text-sm mb-1">
                Note on Incremental Static Regeneration (ISR)
              </span>
              Incremental Static Regeneration allows static pages to be updated in the background
              after build time by adding a <code className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200 text-slate-800">revalidate</code> key to <code className="font-mono bg-white px-1 py-0.5 rounded border border-slate-200 text-slate-800">getStaticProps</code>.
              In this assignment, SSG, SSR, and CSR are implemented across dedicated, distinct routes
              to cleanly highlight each core paradigm without blurring the distinction between build-time generation and server-side execution.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
