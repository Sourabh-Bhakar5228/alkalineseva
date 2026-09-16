"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, Sparkles } from "lucide-react";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-darkest via-brand-dark to-brand-darkest text-white p-8 sm:p-12 overflow-hidden shadow-card border border-slate-700/50">
          {/* Subtle Ambient Circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-vitality/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-ocean-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-vitality/20 text-vitality border border-vitality/30">
              <Sparkles size={14} />
              <span>Get 10% OFF Your First Order</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Get Exclusive Offers & Weekly Health Tips
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
              Join 20,000+ health-conscious individuals. Receive science-backed hydration research, alkaline maintenance guides, and VIP discount alerts.
            </p>

            {submitted ? (
              <div className="p-4 rounded-2xl bg-vitality/20 border border-vitality/40 text-vitality text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 max-w-md mx-auto animate-fade-in">
                <CheckCircle2 size={18} />
                <span>
                  Welcome aboard! Use coupon code <strong className="underline text-white font-mono">ALKALINE10</strong> at checkout for 10% off.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2"
              >
                <div className="relative flex-1">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    aria-label="Email address for newsletter"
                    required
                    className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-vitality transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-vitality hover:bg-vitality-hover text-brand-darkest text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 shrink-0"
                >
                  <span>Subscribe</span>
                  <Send size={14} />
                </button>
              </form>
            )}

            <p className="text-[11px] text-slate-300">
              Zero spam guaranteed. Unsubscribe anytime with 1-click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
