"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Check,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { StarRating } from "./StarRating";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
}) => {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addItem = useCartStore((state) => state.addItem);
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(product.id);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
        >
          <X size={18} />
        </button>

        {/* Gallery / Image Left */}
        <div className="md:w-1/2 p-6 bg-slate-50 flex flex-col justify-between">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs mb-4">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover"
            />
            {discountPercent > 0 && (
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-600 text-white">
                -{discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.gallery.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                    selectedImage === img
                      ? "border-vitality shadow-xs"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details Right */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
            {product.category}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 leading-snug">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="my-2.5">
            <StarRating
              rating={product.rating}
              reviewsCount={product.reviewsCount}
              showNumber
            />
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 my-3">
            <span className="text-2xl font-black text-slate-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-slate-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-xs font-bold text-vitality-dark bg-vitality-light px-2 py-0.5 rounded-md">
              Save {formatPrice(product.originalPrice - product.price)}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
            {product.shortDesc}
          </p>

          {/* Key Bullet Benefits */}
          <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
            {product.benefits.slice(0, 3).map((ben, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check size={14} className="text-vitality-dark shrink-0 mt-0.5" />
                <span>{ben}</span>
              </li>
            ))}
          </ul>

          {/* Quantity & Actions */}
          <div className="mt-auto space-y-3 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                  className="px-3 py-2 text-slate-600 hover:bg-slate-200 text-sm font-bold"
                >
                  -
                </button>
                <span className="px-3 text-xs font-bold text-slate-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                  className="px-3 py-2 text-slate-600 hover:bg-slate-200 text-sm font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                aria-label={added ? "Added to cart" : `Add ${product.name} to cart`}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  added
                    ? "bg-vitality-dark text-white"
                    : "bg-brand-dark hover:bg-brand-muted text-white shadow-md active:scale-98"
                }`}
              >
                {added ? (
                  <>
                    <Check size={16} />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`p-2.5 rounded-xl border transition-colors ${
                  isWishlisted
                    ? "border-rose-300 bg-rose-50 text-rose-500"
                    : "border-slate-200 text-slate-500 hover:text-rose-500"
                }`}
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart size={18} className={isWishlisted ? "fill-rose-500" : ""} />
              </button>
            </div>

            <Link
              href={`/products/${product.slug}`}
              onClick={onClose}
              className="flex items-center justify-center gap-1.5 text-xs font-semibold text-ocean-700 hover:underline pt-1"
            >
              <span>View Complete Specs & Benefits</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
