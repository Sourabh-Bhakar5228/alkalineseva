"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ShoppingBag,
  Zap,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Wrench,
  Check,
  MessageCircle,
} from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { StarRating } from "@/components/common/StarRating";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addItem = useCartStore((state) => state.addItem);
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(product.id);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );
  const savings = product.originalPrice - product.price;

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    router.push("/checkout");
  };

  const whatsappMessage = encodeURIComponent(
    `Hello AlkalineSeva, I am interested in ordering the "${product.name}" priced at ${formatPrice(product.price)}. Please assist me.`
  );

  return (
    <div className="flex flex-col space-y-6">
      {/* Category & Stock */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-vitality-dark bg-vitality-light px-3 py-1 rounded-full">
          {product.category}
        </span>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>In Stock — Dispatches in 24h</span>
        </div>
      </div>

      {/* Title & Tagline */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
          {product.name}
        </h1>
        <p className="text-xs sm:text-sm font-medium text-slate-600 mt-2">
          {product.tagLine}
        </p>
      </div>

      {/* Ratings */}
      <div className="flex items-center gap-3">
        <StarRating
          rating={product.rating}
          reviewsCount={product.reviewsCount}
          showNumber
          size={16}
        />
        <span className="text-xs text-slate-300">|</span>
        <span className="text-xs font-semibold text-vitality-dark">
          100% Verified Reviews
        </span>
      </div>

      {/* Pricing Block */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-black text-brand-darkest">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-base text-slate-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {discountPercent > 0 && (
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-600 text-white">
              {discountPercent}% OFF
            </span>
            <span className="text-xs font-semibold text-emerald-700">
              You Save {formatPrice(savings)}
            </span>
          </div>
        )}
      </div>

      {/* Quantity & CTAs */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-3">
          {/* Quantity Stepper */}
          <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              aria-label="Decrease quantity"
              className="px-3.5 py-2.5 text-slate-600 hover:bg-slate-100 font-bold transition-colors"
            >
              -
            </button>
            <span className="px-4 text-sm font-bold text-slate-800">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Increase quantity"
              className="px-3.5 py-2.5 text-slate-600 hover:bg-slate-100 font-bold transition-colors"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            aria-label={added ? "Added to Cart" : "Add to Cart"}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold shadow-sm transition-all duration-200 ${
              added
                ? "bg-vitality-dark text-white"
                : "bg-white border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white active:scale-98"
            }`}
          >
            {added ? (
              <>
                <Check size={18} />
                <span>Added to Cart!</span>
              </>
            ) : (
              <>
                <ShoppingBag size={18} />
                <span>Add to Cart</span>
              </>
            )}
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => toggleWishlist(product)}
            className={`p-3 rounded-xl border transition-colors ${
              isWishlisted
                ? "border-rose-300 bg-rose-50 text-rose-500"
                : "border-slate-200 text-slate-500 hover:text-rose-500 hover:bg-slate-50"
            }`}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart size={20} className={isWishlisted ? "fill-rose-500" : ""} />
          </button>
        </div>

        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-vitality hover:bg-vitality-hover text-brand-darkest text-sm sm:text-base font-extrabold shadow-md shadow-vitality/20 transition-all active:scale-98"
        >
          <Zap size={18} className="fill-brand-darkest" />
          <span>Buy Now — Instant Checkout</span>
        </button>

        {/* WhatsApp Consult Button */}
        <a
          href={`https://wa.me/918053203304?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 transition-colors"
        >
          <MessageCircle size={16} className="text-[#25D366]" />
          <span>Talk to a Water Specialist on WhatsApp</span>
        </a>
      </div>

      {/* Trust Guarantee Badges */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
          <Truck size={16} className="text-vitality-dark shrink-0" />
          <span className="font-semibold">Free Pan-India Delivery</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
          <Wrench size={16} className="text-ocean-600 shrink-0" />
          <span className="font-semibold">Free On-Site Installation</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
          <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
          <span className="font-semibold">{product.warrantyYears} Year Official Warranty</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
          <RotateCcw size={16} className="text-amber-600 shrink-0" />
          <span className="font-semibold">7-Day Free Replacement</span>
        </div>
      </div>
    </div>
  );
};
