import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({
  children,
  title = "Monograph — Next.js Dynamic Routing & Editorial Platform",
  description = "A responsive, modern Next.js editorial website demonstrating Pages Router dynamic routing, getStaticPaths, getStaticProps, and cohesive Mali typography.",
}) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-primary selection:bg-accent-light selection:text-accent-text">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow max-w-7xl xl:max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-8 sm:py-12 md:py-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}
