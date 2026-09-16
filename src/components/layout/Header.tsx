"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  Phone,
  Droplets,
  Sparkles,
  ChevronDown,
  User,
  ShieldCheck,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { SearchModal } from "./SearchModal";
import { MobileNav } from "./MobileNav";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  const cartItemsCount = useCartStore((state) => state.getItemCount());
  const cartSubtotal = useCartStore((state) => state.getSubtotal());
  const toggleCart = useCartStore((state) => state.toggleCart);
  const wishlistCount = useWishlistStore((state) => state.items.length);

  const displayCartCount = mounted ? cartItemsCount : 0;
  const displayCartSubtotal = mounted ? cartSubtotal : 0;
  const displayWishlistCount = mounted ? wishlistCount : 0;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Top Notification Trust Strip */}
        <div className="bg-brand-darkest text-slate-200 text-xs py-2 px-4 border-b border-slate-700/50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-vitality font-medium">
                <ShieldCheck size={14} />
                <span>Pan-India Free Shipping on Orders ₹999+</span>
              </span>
              <span className="hidden md:inline text-slate-400">•</span>
              <span className="hidden md:inline text-slate-300">
                Official Alkaline Water & Ayurvedic Wellness Store
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <a
                href="https://wa.me/918053203304"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-200 hover:text-vitality transition-colors"
              >
                <Phone size={12} className="text-vitality" />
                <span>Helpline: +91 8053203304</span>
              </a>
              <span className="hidden sm:inline text-slate-500">|</span>
              <Link
                href="/track-order"
                className="hidden sm:inline hover:text-white transition-colors"
              >
                Track Order
              </Link>
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <div
          className={`bg-white transition-all duration-300 ${
            isScrolled
              ? "shadow-md py-3"
              : "border-b border-slate-100 py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden p-2 -ml-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              <Menu size={24} />
            </button>

            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-sm border border-slate-200">
                <Image
                  src="/images/logo/logo-icon.jpeg"
                  alt="AlkalineSeva Logo"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-brand-dark">
                    Alkaline<span className="text-vitality-dark">Seva</span>
                  </span>
                </div>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-500 -mt-1">
                  By AD HerbalNest
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
              <Link
                href="/"
                className={`transition-colors hover:text-vitality-dark ${
                  pathname === "/" ? "text-vitality-dark font-bold" : ""
                }`}
              >
                Home
              </Link>

              <Link
                href="/about-us"
                className={`transition-colors hover:text-vitality-dark ${
                  pathname === "/about-us" ? "text-vitality-dark font-bold" : ""
                }`}
              >
                About Us
              </Link>
              {/* Shop with Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShopDropdownOpen(true)}
                onMouseLeave={() => setShopDropdownOpen(false)}
              >
                <Link
                  href="/products"
                  className={`flex items-center gap-1 transition-colors hover:text-vitality-dark py-2 ${
                    pathname.startsWith("/products") ? "text-vitality-dark font-bold" : ""
                  }`}
                >
                  <span>Shop</span>
                  <ChevronDown size={15} className={`transition-transform ${shopDropdownOpen ? "rotate-180" : ""}`} />
                </Link>

                {shopDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-elevated border border-slate-100 py-3 z-50 animate-fade-in">
                    <Link
                      href="/products"
                      className="block px-4 py-2 text-xs font-bold text-vitality uppercase tracking-wider hover:bg-slate-50"
                    >
                      View All Products →
                    </Link>
                    <div className="my-1 border-t border-slate-100" />
                    <Link
                      href="/category/alkaline-water-device"
                      className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-vitality transition-colors"
                    >
                      Alkaline Water Device
                    </Link>
                    <Link
                      href="/category/hydrogen-water-bottle"
                      className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-vitality transition-colors"
                    >
                      Hydrogen Water Bottle
                    </Link>
                    <Link
                      href="/category/mineral-rich-water"
                      className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-vitality transition-colors"
                    >
                      Mineral Rich Water
                    </Link>
                    <Link
                      href="/category/liver-care"
                      className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-vitality transition-colors"
                    >
                      Liver Care
                    </Link>
                  </div>
                )}
              </div>

             
             
              <Link
                href="/contact-us"
                className={`transition-colors hover:text-vitality-dark ${
                  pathname === "/contact-us" ? "text-vitality-dark font-bold" : ""
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Live Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search products"
                className="p-2.5 rounded-full text-slate-600 hover:text-brand-dark hover:bg-slate-100 transition-colors"
              >
                <Search size={20} />
              </button>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                aria-label="View wishlist"
                className="relative p-2.5 rounded-full text-slate-600 hover:text-rose-500 hover:bg-slate-100 transition-colors"
              >
                <Heart size={20} />
                {displayWishlistCount > 0 && (
                  <span className="absolute 1 top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {displayWishlistCount}
                  </span>
                )}
              </Link>

              {/* Account Link */}
              <Link
                href="/account"
                aria-label="My Account"
                className="hidden sm:flex p-2.5 rounded-full text-slate-600 hover:text-brand-dark hover:bg-slate-100 transition-colors"
              >
                <User size={20} />
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                onClick={toggleCart}
                aria-label="View shopping cart"
                className="flex items-center gap-2.5 bg-brand-dark hover:bg-brand-muted text-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all duration-200 active:scale-95"
              >
                <div className="relative">
                  <ShoppingBag size={18} />
                  {displayCartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-vitality text-brand-darkest text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow">
                      {displayCartCount}
                    </span>
                  )}
                </div>
                <span className="hidden md:inline">
                  {displayCartSubtotal > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0,
                      }).format(displayCartSubtotal)
                    : "Cart"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Global Search Overlay Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  );
};
