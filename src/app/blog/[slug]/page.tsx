import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, Share2, Sparkles, Droplets } from "lucide-react";
import { blogs } from "@/data/blogs";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return { title: "Blog Not Found" };

  return {
    title: `${post.title} — AlkalineSeva Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedBlogs = blogs.filter((b) => b.id !== post.id).slice(0, 2);

  return (
    <article className="bg-white min-h-screen pb-20">
      {/* Blog Article Header */}
      <div className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-dark mb-6"
          >
            <ArrowLeft size={14} />
            <span>Back to All Health Blogs</span>
          </Link>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-vitality-light text-vitality-dark mb-3">
            {post.category}
          </span>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-4 pt-4 border-t border-slate-200/60">
            <span className="font-semibold text-slate-700">By {post.author}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {post.readTime}
            </span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-card border border-slate-200">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-contain p-4 bg-slate-50"
          />
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-5">
          {post.content.split("\n\n").map((paragraph, idx) => {
            const trimmed = paragraph.trim();
            if (trimmed.startsWith("###")) {
              return (
                <h3 key={idx} className="text-xl font-bold text-slate-900 mt-6 mb-2">
                  {trimmed.replace("###", "").trim()}
                </h3>
              );
            }
            if (trimmed.startsWith("- ")) {
              const bullets = trimmed.split("\n").map((b) => b.replace("- ", ""));
              return (
                <ul key={idx} className="list-disc pl-5 space-y-1.5 my-3">
                  {bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              );
            }
            if (trimmed.startsWith("1.")) {
              const numbered = trimmed.split("\n");
              return (
                <ol key={idx} className="list-decimal pl-5 space-y-1.5 my-3">
                  {numbered.map((item, nIdx) => (
                    <li key={nIdx}>{item.replace(/^\d+\.\s*/, "")}</li>
                  ))}
                </ol>
              );
            }
            return <p key={idx}>{trimmed}</p>;
          })}
        </div>

        {/* Upgrade Water CTA Card Inside Blog */}
        <div className="my-12 p-6 sm:p-8 rounded-3xl bg-brand-darkest text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-vitality">
              Experience the Difference
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Ready to Upgrade Your Daily Drinking Water?
            </h3>
            <p className="text-xs text-slate-300 max-w-md">
              Book a free in-home demonstration or explore our Japanese titanium plate ionizers.
            </p>
          </div>

          <Link
            href="/products/smart-touch-7-plate-alkaline-water-ionizer"
            className="px-6 py-3 rounded-xl bg-vitality hover:bg-vitality-hover text-brand-darkest text-xs font-bold whitespace-nowrap shadow-sm shrink-0"
          >
            Explore 7-Plate Ionizer
          </Link>
        </div>

        {/* Related Articles */}
        <div className="pt-8 border-t border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-6">
            Related Wellness Research
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedBlogs.map((b) => (
              <Link
                key={b.id}
                href={`/blog/${b.slug}`}
                className="p-4 rounded-2xl border border-slate-200 hover:border-vitality/50 transition-colors group"
              >
                <span className="text-[10px] font-bold text-vitality-dark uppercase">
                  {b.category}
                </span>
                <h4 className="font-bold text-sm text-slate-900 group-hover:text-ocean-700 mt-1 line-clamp-2">
                  {b.title}
                </h4>
                <p className="text-xs text-slate-400 mt-2">{b.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
