"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/common/ProductCard";
import { Product } from "@/types";
import { QuickViewModal } from "@/components/common/QuickViewModal";

export const BestSellers: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Authentic products from alkalineseva.com
  const topProducts = products.slice(0, 6);

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 mb-2">
              <Flame size={13} className="text-amber-500 fill-amber-500" />
              <span>Customer Favorites</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Best Sellers
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Our highest-rated water ionizers, hydrogen generators, and copper essentials.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-dark hover:text-vitality transition-colors group"
          >
            <span>Explore All Products</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Top 6 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {topProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </section>
  );
};
