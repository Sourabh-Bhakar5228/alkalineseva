"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Eye, Check, ShieldCheck, Zap } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { StarRating } from "./StarRating";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
}) => {
  const [mounted, setMounted] = useState(false);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const isWishlisted = mounted ? isInWishlist(product.id) : false;

useEffect(() => {
    setMounted(true);
  }, []);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-card hover:border-slate-300 transition-all duration-300 overflow-hidden">
      {/* Product Image Box */}
      <div className="relative aspect-square w-full bg-slate-50 overflow-hidden">
        <Link href={`/products/${product.slug}`} className="relative block w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {discountPercent > 0 && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-rose-600 text-white shadow-sm">
              -{discountPercent}%
            </span>
          )}
          {product.bestSeller && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-brand-dark text-white shadow-sm">
              <Zap size={11} className="text-vitality fill-vitality" />
              Best Seller
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
            isWishlisted
              ? "bg-rose-50 text-rose-500 border border-rose-200"
              : "bg-white/90 text-slate-600 hover:bg-white hover:text-rose-500 backdrop-blur-sm"
          }`}
        >
          <Heart
            size={18}
            className={isWishlisted ? "fill-rose-500" : "transition-colors"}
          />
        </button>

        {/* Quick View Button */}
        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            aria-label={`Quick view ${product.name}`}
            className="hidden sm:flex absolute bottom-3 left-1/2 -translate-x-1/2 items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-dark hover:text-white"
          >
            <Eye size={14} />
            Quick View
          </button>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">
            {product.category}
          </span>
          {product.warrantyYears > 0 && (
            <span className="inline-flex items-center gap-1 text-[11px] text-brand-muted font-medium bg-slate-100 px-2 py-0.5 rounded-md">
              <ShieldCheck size={12} className="text-vitality-dark" />
              {product.warrantyYears}Y Warranty
            </span>
          )}
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="group-hover:text-ocean-700 transition-colors"
        >
          <h3 className="font-semibold text-slate-900 text-sm sm:text-base line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </Link>

        {/* Star Rating */}
        <div className="mt-2 mb-3">
          <StarRating
            rating={product.rating}
            reviewsCount={product.reviewsCount}
            showNumber
          />
        </div>

        {/* Pricing & CTA */}
        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
              {formatPrice(product.price)}
            </div>
            {product.originalPrice > product.price && (
              <div className="text-xs text-slate-500 line-through">
                {formatPrice(product.originalPrice)}
              </div>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            aria-label={added ? `Added ${product.name} to cart` : `Add ${product.name} to cart`}
            className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              added
                ? "bg-vitality-dark text-white"
                : "bg-brand-dark hover:bg-brand-muted text-white shadow-sm active:scale-95"
            }`}
          >
            {added ? (
              <>
                <Check size={15} />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag size={15} />
                <span className="hidden xs:inline">Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
