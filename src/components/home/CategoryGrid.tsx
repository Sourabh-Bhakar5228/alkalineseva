import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { categories } from "@/data/categories";

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-vitality-dark">
              Curated Wellness
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-1">
              Shop by Category
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Explore our laboratory-verified water technology and Ayurvedic lifestyle solutions.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-dark hover:text-vitality-dark transition-colors group"
          >
            <span>View All Categories</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-card hover:border-vitality/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square w-full bg-slate-50 overflow-hidden flex items-center justify-center p-3">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 text-slate-800 backdrop-blur-xs shadow-xs">
                  {cat.productCount} Products
                </span>
              </div>

              {/* Title & Info */}
              <div className="p-3.5 flex flex-col items-center text-center">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-vitality-dark transition-colors leading-snug line-clamp-2">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
