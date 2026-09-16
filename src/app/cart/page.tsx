"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  Tag,
  Check,
  ArrowLeft,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    appliedCoupon,
    discountPercent,
    applyCoupon,
    removeCoupon,
    getSubtotal,
    getDiscountAmount,
    getShippingFee,
    getTotal,
    getItemCount,
  } = useCartStore();

  const [couponInput, setCouponInput] = useState("");
  const [couponFeedback, setCouponFeedback] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const subtotal = getSubtotal();
  const discount = getDiscountAmount();
  const shipping = getShippingFee();
  const total = getTotal();
  const totalCount = getItemCount();

  const freeShippingThreshold = 999;
  const progressPercent = Math.min(
    100,
    Math.round((subtotal / freeShippingThreshold) * 100)
  );
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput) return;
    const res = applyCoupon(couponInput);
    setCouponFeedback(res);
    if (res.success) setCouponInput("");
  };

  if (items.length === 0) {
    return (
      <div className="bg-slate-50/50 min-h-screen py-16">
        <div className="max-w-xl mx-auto px-4 text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-soft">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-4">
            <ShoppingBag size={32} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Your Cart is Empty
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mb-8 max-w-sm mx-auto">
            Upgrade your drinking water today with our Japanese titanium-plate ionizers, hydrogen bottles, and Ayurvedic copper dispensers.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-dark hover:bg-brand-muted text-white text-sm font-bold shadow-md transition-all"
          >
            <span>Explore Products</span>
            <ArrowRight size={16} />
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
              Shopping Cart ({totalCount} items)
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Review your selected wellness items before checkout.
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-xs text-rose-500 hover:text-rose-700 font-semibold hover:underline"
          >
            Clear Cart
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="p-4 rounded-2xl bg-ocean-50 border border-ocean-200/80 mb-8 max-w-4xl">
          <div className="flex items-center justify-between text-xs mb-2">
            {amountToFreeShipping > 0 ? (
              <span className="text-ocean-900 font-medium">
                Add <strong className="text-slate-900">{formatPrice(amountToFreeShipping)}</strong> more to get <strong className="text-vitality-dark">FREE Shipping!</strong>
              </span>
            ) : (
              <span className="text-vitality-dark font-bold flex items-center gap-1.5">
                <Check size={14} />
                Congratulations! You have unlocked FREE Pan-India Shipping.
              </span>
            )}
            <span className="font-bold text-ocean-900">{progressPercent}%</span>
          </div>
          <div className="w-full bg-ocean-200/70 h-2.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-vitality rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Table & Order Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items Table Left */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-soft overflow-hidden divide-y divide-slate-100">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-50 overflow-hidden border border-slate-100 shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-vitality-dark uppercase tracking-wider">
                        {product.category}
                      </span>
                      <Link
                        href={`/products/${product.slug}`}
                        className="block text-sm sm:text-base font-bold text-slate-900 hover:text-ocean-700 transition-colors line-clamp-1 mt-0.5"
                      >
                        {product.name}
                      </Link>
                      <div className="text-xs text-slate-500 mt-1">
                        Unit Price: <span className="font-semibold text-slate-800">{formatPrice(product.price)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto gap-6 self-end sm:self-center">
                    {/* Stepper */}
                    <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="p-2 text-slate-600 hover:bg-slate-200 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-xs font-bold text-slate-800">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="p-2 text-slate-600 hover:bg-slate-200 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Total */}
                    <div className="text-right min-w-[90px]">
                      <div className="text-sm sm:text-base font-black text-slate-900">
                        {formatPrice(product.price * quantity)}
                      </div>
                      {product.originalPrice > product.price && (
                        <div className="text-[11px] text-slate-400 line-through">
                          {formatPrice(product.originalPrice * quantity)}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => removeItem(product.id)}
                      className="p-2 text-slate-400 hover:text-rose-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-vitality transition-colors pt-2"
            >
              <ArrowLeft size={14} />
              <span>Continue Shopping</span>
            </Link>
          </div>

          {/* Order Summary Right */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-soft space-y-5">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Order Summary
              </h2>

              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="space-y-2">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag
                      size={14}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Coupon Code (ALKALINE10)"
                      className="w-full pl-9 pr-3 py-2.5 text-xs uppercase rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark bg-slate-50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 text-xs font-bold rounded-xl bg-brand-dark hover:bg-brand-muted text-white transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {appliedCoupon && (
                  <div className="flex items-center justify-between text-xs text-vitality font-semibold px-1">
                    <span>Coupon &apos;{appliedCoupon}&apos; (-{discountPercent}%)</span>
                    <button
                      type="button"
                      onClick={removeCoupon}
                      className="text-slate-400 hover:text-rose-500 underline text-[11px]"
                    >
                      Remove
                    </button>
                  </div>
                )}
                {couponFeedback && !appliedCoupon && (
                  <p className="text-[11px] text-rose-500 px-1">
                    {couponFeedback.message}
                  </p>
                )}
              </form>

              {/* Calculation */}
              <div className="space-y-2.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex justify-between">
                  <span>Cart Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-vitality font-bold">
                    <span>Special Discount</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping Charges</span>
                  <span className="font-semibold text-slate-900">
                    {shipping === 0 ? (
                      <span className="text-vitality font-bold">FREE</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-slate-900 pt-3 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span className="text-brand-darkest text-lg">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              {/* Proceed to Checkout CTA */}
              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-vitality hover:bg-vitality-hover text-brand-darkest text-sm font-extrabold shadow-md shadow-vitality/20 transition-all active:scale-98"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} />
              </Link>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-2 font-medium">
                <ShieldCheck size={15} className="text-vitality" />
                <span>Safe 256-Bit SSL Encrypted Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
