"use client";

import React from "react";
import Link from "next/link";
import { User, Package, MapPin, Heart, LogOut, ChevronRight, ShieldCheck } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export default function AccountDashboard() {
  const { user, logout } = useAuthStore();

  return (
    <div className="bg-slate-50/50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-brand-dark text-vitality flex items-center justify-center font-black text-2xl">
              {user?.name?.charAt(0) || "U"}
            </div>
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-vitality-dark bg-vitality-light px-2.5 py-0.5 rounded-full mb-1">
                <ShieldCheck size={12} />
                <span>Verified Alkaline Member</span>
              </div>
              <h1 className="text-2xl font-extrabold text-slate-900">
                Welcome back, {user?.name || "Customer"}!
              </h1>
              <p className="text-xs text-slate-500">{user?.email || "user@example.com"}</p>
            </div>
          </div>

          <button
            onClick={logout}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors"
          >
            <LogOut size={14} />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/account/orders"
            className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-card hover:border-vitality/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-vitality-light text-vitality-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Package size={22} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">My Orders & Installations</h3>
            <p className="text-xs text-slate-500 mt-1">
              Check past orders, download warranty certificates, and track live deliveries.
            </p>
            <div className="mt-4 flex items-center gap-1 text-xs font-bold text-vitality-dark">
              <span>View Orders</span>
              <ChevronRight size={14} />
            </div>
          </Link>

          <Link
            href="/account/profile"
            className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-card hover:border-vitality/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-ocean-50 text-ocean-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <User size={22} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Profile & Contact Info</h3>
            <p className="text-xs text-slate-500 mt-1">
              Update your registered phone number, email address, and notification preferences.
            </p>
            <div className="mt-4 flex items-center gap-1 text-xs font-bold text-ocean-600">
              <span>Edit Profile</span>
              <ChevronRight size={14} />
            </div>
          </Link>

          <Link
            href="/wishlist"
            className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-card hover:border-vitality/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart size={22} />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Saved Wishlist</h3>
            <p className="text-xs text-slate-500 mt-1">
              Quickly access the devices, bottles, and accessories you have bookmarked.
            </p>
            <div className="mt-4 flex items-center gap-1 text-xs font-bold text-rose-600">
              <span>View Wishlist</span>
              <ChevronRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
