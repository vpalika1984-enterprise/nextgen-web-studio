import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Article {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  href: string;
}

const ARTICLES: Article[] = [
  {
    title: "What Makes a Website Actually Convert in 2026",
    excerpt: "The design and technical decisions that turn visitors into customers.",
    category: "Strategy",
    readTime: "6 min read",
    href: "/blog/what-makes-a-website-convert",
  },
  {
    title: "AI Chatbots: What Small Businesses Should Know Before Building One",
    excerpt: "A practical guide to scoping your first AI assistant.",
    category: "AI",
    readTime: "8 min read",
    href: "/blog/ai-chatbots-small-business-guide",
  },
  {
    title: "Core Web Vitals in 2026: A Practical Checklist",
    excerpt: "The performance metrics that actually move the needle for SEO.",
    category: "Performance",
    readTime: "5 min read",
    href: "/blog/core-web-vitals-checklist",
  },
];

/**
 * BlogPreview
 *
 * Latest-articles teaser linking into the full blog. Copy is illustrative
 * until the CMS-backed blog (Phase 8) is wired up.
 */
export function BlogPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-primary">From the blog</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Insights on web strategy and engineering
            </h2>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Visit the blog
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-primary/10 via-fuchsia-500/10 to-cyan-400/10" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium text-primary">{article.category}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
