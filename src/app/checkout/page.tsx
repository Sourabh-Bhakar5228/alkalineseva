"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Lock,
  Phone,
  CreditCard,
  QrCode,
  Banknote,
  ArrowRight,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getSubtotal, getDiscountAmount, getShippingFee, getTotal, clearCart } =
    useCartStore();

  const [formData, setFormData] = useState({
    fullName: "Rohit Sharma",
    phone: "9876543210",
    email: "rohit.sharma@example.com",
    address: "Flat 402, Green Meadows, Sector 45",
    city: "Gurugram",
    state: "Haryana",
    pincode: "122003",
  });

  const [paymentMethod, setPaymentMethod] = useState<"upi" | "cod" | "card">("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  const subtotal = getSubtotal();
  const discount = getDiscountAmount();
  const shipping = getShippingFee();
  const total = getTotal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const orderId = `AS-${Math.floor(100000 + Math.random() * 900000)}`;
      setIsProcessing(false);
      setOrderConfirmed(orderId);
      clearCart();
    }, 1200);
  };

  if (orderConfirmed) {
    return (
      <div className="bg-slate-50 min-h-screen py-16 flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-vitality-light text-vitality-dark flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-vitality-dark">
              Order Confirmed
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Thank You for Your Order!
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Your order ID is <strong className="font-mono text-slate-900">{orderConfirmed}</strong>. We have sent a confirmation WhatsApp & SMS to <strong className="text-slate-800">+91 {formData.phone}</strong>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left text-xs space-y-2 text-slate-600">
            <div className="flex justify-between">
              <span>Delivery To:</span>
              <span className="font-bold text-slate-900">{formData.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span>Destination:</span>
              <span className="font-bold text-slate-900">{formData.city}, {formData.pincode}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Delivery:</span>
              <span className="font-bold text-vitality-dark">Within 2–4 Business Days</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-slate-200">
              <span>Total Paid / Due:</span>
              <span className="font-extrabold text-slate-900">{formatPrice(total)}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href={`/track-order?orderId=${orderConfirmed}`}
              className="flex-1 py-3 rounded-xl bg-brand-dark hover:bg-brand-muted text-white text-xs font-bold transition-colors"
            >
              Track Order Live
            </Link>
            <Link
              href="/"
              className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="bg-slate-50 min-h-screen py-16 text-center px-4">
        <h2 className="text-xl font-bold text-slate-900 mb-2">No items to checkout</h2>
        <p className="text-xs text-slate-500 mb-6">Your cart is currently empty.</p>
        <Link href="/products" className="px-5 py-2.5 rounded-xl bg-brand-dark text-white text-xs font-bold">
          Browse Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Checkout Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-vitality-dark mb-1">
            <Lock size={14} />
            <span>Secure 256-Bit SSL Encrypted Checkout</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
            Complete Your Purchase
          </h1>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping & Payment Details Left */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Delivery Address */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft space-y-4">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-vitality-light text-vitality-dark flex items-center justify-center text-xs">
                  1
                </div>
                <span>Delivery & Contact Details</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Mobile Number (For Courier Tracking) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Email Address (For Invoice & Warranty Card) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Street Address & House / Flat No. <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    City <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    State <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold text-slate-700 mb-1">
                    PIN Code <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark max-w-xs"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Payment Method */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft space-y-4">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base pb-3 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-vitality-light text-vitality-dark flex items-center justify-center text-xs">
                  2
                </div>
                <span>Select Payment Method</span>
              </div>

              <div className="space-y-3">
                {/* UPI / QR */}
                <label
                  onClick={() => setPaymentMethod("upi")}
                  className={`flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === "upi"
                      ? "border-vitality bg-vitality-light/20 ring-1 ring-vitality"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                    className="mt-1 text-vitality focus:ring-vitality"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900 flex items-center gap-2">
                        <QrCode size={16} className="text-vitality-dark" />
                        <span>Instant UPI & QR (Google Pay, PhonePe, Paytm)</span>
                      </span>
                      <span className="text-[10px] font-bold bg-vitality text-brand-darkest px-2 py-0.5 rounded-md">
                        Fastest Dispatch
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Scan QR code on the next step or enter your UPI ID. Zero transaction charges.
                    </p>
                  </div>
                </label>

                {/* Cash on Delivery */}
                <label
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === "cod"
                      ? "border-vitality bg-vitality-light/20 ring-1 ring-vitality"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="mt-1 text-vitality focus:ring-vitality"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900 flex items-center gap-2">
                        <Banknote size={16} className="text-slate-600" />
                        <span>Cash on Delivery (COD)</span>
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Pay with cash or UPI to the delivery courier when your package arrives at your doorstep.
                    </p>
                  </div>
                </label>

                {/* Cards & NetBanking */}
                <label
                  onClick={() => setPaymentMethod("card")}
                  className={`flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === "card"
                      ? "border-vitality bg-vitality-light/20 ring-1 ring-vitality"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="mt-1 text-vitality focus:ring-vitality"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900 flex items-center gap-2">
                        <CreditCard size={16} className="text-slate-600" />
                        <span>Credit / Debit Cards & NetBanking</span>
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      All major RuPay, Visa, Mastercard, and 40+ Indian NetBanking portals supported.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary Right */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft space-y-5">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Items in Order ({items.length})
              </h2>

              <div className="max-h-60 overflow-y-auto divide-y divide-slate-100 pr-1">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="py-2.5 flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl bg-slate-50 overflow-hidden border border-slate-100 shrink-0">
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 truncate">
                        {product.name}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Qty: {quantity} x {formatPrice(product.price)}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-slate-900">
                      {formatPrice(product.price * quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Calculation */}
              <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-vitality font-bold">
                    <span>Discount</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-vitality-dark">
                    {shipping === 0 ? "FREE" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-slate-900 pt-3 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span className="text-brand-darkest text-lg">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Place Order CTA Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-vitality hover:bg-vitality-hover text-brand-darkest text-sm font-extrabold shadow-md shadow-vitality/20 transition-all active:scale-98 disabled:opacity-75"
              >
                {isProcessing ? (
                  <span>Securing Your Order...</span>
                ) : (
                  <>
                    <span>Confirm & Place Order</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              {/* Reassurances */}
              <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-vitality" />
                  <span>Free doorstep installation included for purifiers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={14} className="text-vitality" />
                  <span>Dispatched in 24 hours with SMS tracking</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
