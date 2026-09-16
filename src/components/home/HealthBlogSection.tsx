import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { blogs } from "@/data/blogs";

export const HealthBlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-vitality-light text-vitality-dark mb-2">
              <BookOpen size={14} />
              <span>Evidence-Based Hydration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Health Tips & Research
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Deepen your understanding of cellular bio-availability, molecular hydrogen, and Ayurvedic water therapy.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-dark hover:text-vitality-dark transition-colors group"
          >
            <span>View All Health Blogs</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* 3 Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {blogs.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-card hover:border-slate-300 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-2 bg-slate-50 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-brand-darkest/80 text-vitality backdrop-blur-xs shadow-xs">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-slate-600 mb-2.5">
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <Link href={`/blog/${post.slug}`} className="group-hover:text-ocean-700 transition-colors">
                  <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium truncate max-w-[170px]">
                    By {post.author.split(",")[0]}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-vitality-dark hover:text-emerald-700 group-hover:translate-x-0.5 transition-all flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
