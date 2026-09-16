"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  Phone,
  Droplets,
  ChevronRight,
  Heart,
  ShoppingBag,
  User,
  ShieldCheck,
} from "lucide-react";
import { categories } from "@/data/categories";
import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = React.useState(false);
  const [activeTab, setActiveTab] = useState<"menu" | "categories">("categories");
  const wishlistCount = useWishlistStore((state) => state.items.length);
  const cartCount = useCartStore((state) => state.getItemCount());

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const displayWishlistCount = mounted ? wishlistCount : 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 animate-fade-in">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200">
              <Image
                src="/images/logo/logo-icon.jpeg"
                alt="AlkalineSeva Logo"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-extrabold text-lg text-brand-dark tracking-tight">
              Alkaline<span className="text-vitality-dark">Seva</span>
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Buttons (Menu vs Categories) */}
        <div className="grid grid-cols-2 border-b border-slate-200 text-center text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab("categories")}
            className={`py-3 transition-colors ${
              activeTab === "categories"
                ? "text-vitality-dark border-b-2 border-vitality-dark bg-vitality-light/60 font-black"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => setActiveTab("menu")}
            className={`py-3 transition-colors ${
              activeTab === "menu"
                ? "text-vitality-dark border-b-2 border-vitality-dark bg-vitality-light/60 font-black"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Menu
          </button>
        </div>

        {/* Drawer Body Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {activeTab === "categories" ? (
            <div className="space-y-1">
              <Link
                href="/products"
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl bg-vitality-light text-vitality-dark font-bold text-sm hover:bg-vitality-soft"
              >
                <span>All Products</span>
                <ChevronRight size={16} />
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm font-medium transition-colors"
                >
                  <span>{cat.name}</span>
                  <span className="text-xs text-slate-500 font-semibold">
                    {cat.productCount}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-1">
              <Link
                href="/"
                onClick={onClose}
                className="block p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm font-semibold"
              >
                Home
              </Link>
              <Link
                href="/products"
                onClick={onClose}
                className="block p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm font-semibold"
              >
                All Products
              </Link>
              <Link
                href="/blog"
                onClick={onClose}
                className="block p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm font-semibold"
              >
                Health Blog
              </Link>
              <Link
                href="/about-us"
                onClick={onClose}
                className="block p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm font-semibold"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                onClick={onClose}
                className="block p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm font-semibold"
              >
                Contact Us
              </Link>
              <Link
                href="/track-order"
                onClick={onClose}
                className="block p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-sm font-semibold"
              >
                Track My Order
              </Link>
            </div>
          )}
        </div>

        {/* Drawer Bottom Actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold">
            <Link
              href="/wishlist"
              onClick={onClose}
              className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-white border border-slate-200 text-slate-700"
            >
              <Heart size={15} className="text-rose-500" />
              <span>Wishlist ({displayWishlistCount})</span>
            </Link>
            <Link
              href="/account"
              onClick={onClose}
              className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-white border border-slate-200 text-slate-700"
            >
              <User size={15} />
              <span>Account</span>
            </Link>
          </div>

          <a
            href="https://wa.me/918053203304"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white text-xs font-bold transition-colors shadow-sm"
          >
            <Phone size={14} />
            <span>WhatsApp: +91 8053203304</span>
          </a>
        </div>
      </div>
    </div>
  );
};
