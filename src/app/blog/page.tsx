import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, BookOpen, ChevronRight } from "lucide-react";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Health Tips & Water Science Blog — AlkalineSeva",
  description:
    "Explore clinical research, antioxidant ORP science, molecular hydrogen benefits, and Ayurvedic Tamra Jal guides written by certified wellness experts.",
};

export default function BlogIndexPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      {/* Banner */}
      <div className="bg-gradient-to-r from-brand-darkest via-brand-dark to-brand-darkest text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-4">
            <Link href="/" className="hover:text-vitality transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-slate-400" />
            <span className="text-vitality font-bold">Health Blog</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-vitality/20 text-vitality border border-vitality/30 mb-3">
            <BookOpen size={14} />
            <span>Science-Backed Wellness</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Alkaline Hydration & Wellness Tips
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
            Discover peer-reviewed insights on pH balance, antioxidant potential, cellular absorption, and ancestral Ayurvedic wisdom.
          </p>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-2 bg-slate-50 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-brand-darkest/80 text-vitality backdrop-blur-xs">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <Link href={`/blog/${post.slug}`} className="group-hover:text-ocean-700 transition-colors">
                  <h2 className="font-bold text-slate-900 text-base sm:text-lg leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium truncate max-w-[170px]">
                    By {post.author.split(",")[0]}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-vitality-dark hover:text-vitality flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Read More</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
