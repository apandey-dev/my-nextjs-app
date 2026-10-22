import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PageHeader({
  badge,
  title,
  description,
  backHref,
  backLabel = "Back",
}) {
  return (
    <div className="mb-10 md:mb-14 space-y-3">
      {backHref && (
        <div className="mb-4">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary hover:text-accent transition-colors py-1 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>{backLabel}</span>
          </Link>
        </div>
      )}

      {badge && (
        <div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-light text-accent-text border border-accent/20">
            {badge}
          </span>
        </div>
      )}

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary leading-tight">
        {title}
      </h1>

      {description && (
        <p className="text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
