"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag, Zap, MessageCircle } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";

interface StickyMobileCTAProps {
  product: Product;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ product }) => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls down 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const handleBuyNow = () => {
    addItem(product, 1);
    router.push("/checkout");
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 px-4 shadow-elevated flex items-center justify-between gap-3 animate-fade-in">
      <div className="min-w-0 flex flex-col">
        <span className="text-[11px] text-slate-500 font-semibold truncate">
          {product.name}
        </span>
        <div className="flex items-baseline gap-1.5">
          <span className="text-base font-black text-slate-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-slate-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => addItem(product, 1)}
          className="p-2.5 rounded-xl border-2 border-brand-dark text-brand-dark hover:bg-slate-50 font-bold text-xs"
          aria-label="Add to cart"
        >
          <ShoppingBag size={18} />
        </button>

        <button
          onClick={handleBuyNow}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-vitality text-brand-darkest text-xs font-extrabold shadow-sm active:scale-95"
        >
          <Zap size={14} className="fill-brand-darkest" />
          <span>Buy Now</span>
        </button>
      </div>
    </div>
  );
};
