import { useState, useMemo } from "react";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import BlogCard from "../../components/BlogCard";
import { getAllPosts } from "../../data/posts";
import { Search, SlidersHorizontal, BookOpen } from "lucide-react";

export default function BlogIndex({ posts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const list = ["All"];
    posts.forEach((p) => {
      if (p.category && !list.includes(p.category)) {
        list.push(p.category);
      }
    });
    return list;
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  return (
    <Layout
      title="Articles & Writing — Monograph"
      description="Explore technical essays and reflections on Next.js, static site generation, responsive layouts, and modern web development."
    >
      <div className="space-y-10">
        <PageHeader
          badge="Editorial Archive"
          title="Articles &amp; Perspectives"
          description="A collection of technical articles pre-rendered statically with Next.js getStaticPaths and getStaticProps."
        />

        {/* Filter and Search Bar */}
        <div className="bg-surface border border-border rounded-xl p-4 sm:p-5 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title or keyword..."
                className="w-full pl-10 pr-4 py-2 bg-bg text-primary text-sm rounded-lg border border-border hover:border-border-strong focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              />
            </div>

            {/* Results count */}
            <div className="text-xs text-secondary sm:text-right shrink-0 px-1">
              Showing <strong className="text-primary">{filteredPosts.length}</strong> of {posts.length} articles
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-border-subtle">
            <span className="text-xs font-semibold text-muted mr-1 inline-flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3" />
              <span>Category:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-accent text-surface shadow-subtle"
                    : "bg-surface-muted text-secondary hover:text-primary hover:bg-border/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid or Empty State */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-surface border border-dashed border-border rounded-2xl space-y-3">
            <div className="w-12 h-12 rounded-full bg-surface-muted mx-auto flex items-center justify-center text-muted">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-primary text-lg">No articles match your criteria</h3>
            <p className="text-secondary text-sm max-w-sm mx-auto">
              We couldn&apos;t find any posts matching &ldquo;{searchQuery}&rdquo;. Try adjusting your search keyword or selecting &ldquo;All&rdquo;.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-xs font-semibold text-accent hover:underline"
              >
                Reset filters
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
