"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Droplets, Lock, Mail, ArrowRight } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email || "user@example.com", "Customer");
    router.push("/account");
  };

  return (
    <div className="bg-slate-50/50 min-h-screen py-16 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-soft">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-brand-dark text-vitality flex items-center justify-center mx-auto mb-3">
            <Droplets size={24} />
          </div>
          <h1 className="text-2xl font-extrabold text-brand-dark">
            Sign In to AlkalineSeva
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Access your registered warranties, orders, and delivery schedules.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Email or Phone Number
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark text-slate-900"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-semibold text-slate-700">Password</label>
              <a href="#" className="text-[11px] text-vitality-dark hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark text-slate-900"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-dark hover:bg-brand-muted text-white font-bold text-xs sm:text-sm transition-colors shadow-sm pt-3 mt-2"
          >
            <span>Sign In</span>
            <ArrowRight size={15} />
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-6 mt-6 border-t border-slate-100">
          <span>Don&apos;t have an account yet? </span>
          <Link href="/register" className="font-bold text-vitality-dark hover:underline">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}
