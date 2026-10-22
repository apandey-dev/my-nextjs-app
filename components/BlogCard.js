import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogCard({ post, featured = false }) {
  return (
    <article
      className={`group flex flex-col justify-between bg-surface border border-border rounded-xl transition-all duration-200 hover:border-accent/40 hover:shadow-card ${
        featured ? "p-6 sm:p-8" : "p-5 sm:p-6"
      }`}
    >
      <div className="space-y-3.5">
        {/* Metadata pill row */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium bg-accent-light text-accent-text border border-accent/20">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </span>
          <span className="text-border-strong">•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </span>
        </div>

        {/* Post Title */}
        <h3
          className={`font-semibold tracking-tight text-primary group-hover:text-accent transition-colors ${
            featured ? "text-xl sm:text-2xl leading-snug" : "text-lg sm:text-xl leading-snug"
          }`}
        >
          <Link href={`/blog/${post.id}`} className="focus:outline-none">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-secondary text-sm sm:text-base leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      {/* Card Footer: Author + Read Link */}
      <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-surface-muted border border-border flex items-center justify-center text-xs font-semibold text-secondary">
            {post.author.initials}
          </div>
          <div className="text-xs">
            <p className="font-medium text-primary">{post.author.name}</p>
            <p className="text-muted">{post.author.role}</p>
          </div>
        </div>

        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:text-accent-hover group-hover:translate-x-0.5 transition-all"
          aria-label={`Read full post: ${post.title}`}
        >
          <span>Read</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
