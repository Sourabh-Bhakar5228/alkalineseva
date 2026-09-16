"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";

export default function WishlistPage() {
  const { items, removeFromWishlist, clearWishlist } = useWishlistStore();
  const addItem = useCartStore((state) => state.addItem);

  const handleMoveToCart = (product: any) => {
    addItem(product, 1);
    removeFromWishlist(product.id);
  };

  if (items.length === 0) {
    return (
      <div className="bg-slate-50/50 min-h-screen py-16">
        <div className="max-w-md mx-auto px-4 text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-soft">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-400 flex items-center justify-center mx-auto mb-4">
            <Heart size={30} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Your Wishlist is Empty
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mb-8">
            Click the heart icon on any water ionizer, bottle, or copper dispenser to save your favorites here.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-dark text-white text-xs font-bold"
          >
            <span>Browse Products</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              My Saved Wishlist ({items.length})
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Keep track of items you plan to upgrade to your home.
            </p>
          </div>

          <button
            onClick={clearWishlist}
            className="text-xs font-semibold text-rose-500 hover:underline"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-square w-full bg-slate-50">
                <Link href={`/products/${product.slug}`} className="relative block w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </Link>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  aria-label="Remove from wishlist"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-rose-500 shadow-xs flex items-center justify-center hover:bg-rose-50"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400">
                    {product.category}
                  </span>
                  <Link
                    href={`/products/${product.slug}`}
                    className="block font-bold text-sm text-slate-900 hover:text-ocean-700 mt-0.5 line-clamp-1"
                  >
                    {product.name}
                  </Link>
                  <div className="text-sm font-black text-slate-900 mt-2">
                    {formatPrice(product.price)}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => handleMoveToCart(product)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-dark hover:bg-brand-muted text-white text-xs font-bold transition-colors"
                  >
                    <ShoppingBag size={14} />
                    <span>Move to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
