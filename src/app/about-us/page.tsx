import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Droplets,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "About Us — AlkalineSeva by AD HerbalNest Pvt. Ltd.",
  description:
    "Learn about AlkalineSeva's mission to bring authentic Japanese titanium electrolysis, active molecular hydrogen, and Ayurvedic pure copper wellness to homes across India.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-brand-darkest via-brand-dark to-brand-darkest text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-vitality/20 text-vitality border border-vitality/30">
            <Droplets size={14} />
            <span>Pioneering Bio-Hydration in India</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            About AlkalineSeva
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Operated by <strong>AD HerbalNest Pvt. Ltd.</strong>, we bridge state-of-the-art Japanese continuous electrolysis with ancient Ayurvedic wisdom to deliver cellular-level wellness directly to your glass.
          </p>
        </div>
      </div>

      {/* Main Narrative */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-vitality">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Why We Founded AlkalineSeva
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              For over a decade, Indian households celebrated reverse osmosis (RO) systems for eliminating biological contaminants. However, conventional RO water is demineralized, acidic (pH 5.8 to 6.4), and oxidatively dead.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              AlkalineSeva was created with a clear imperative: <em>clean water is only half the equation; bioavailable, antioxidant, alkaline water is the true foundation of vitality.</em>
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-slate-200">
            <Image
              src="/images/banners/hero-banner-1.png"
              alt="Alkaline Water Technology"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 3 Pillars of Authenticity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-vitality-light text-vitality-dark flex items-center justify-center font-bold">
              <Award size={22} />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Japanese Technology
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We engineer our ionizers with certified medical-grade titanium platinum plates, yielding genuine negative ORP up to -450mV.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-ocean-50 text-ocean-600 flex items-center justify-center font-bold">
              <ShieldCheck size={22} />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Pan-India Service
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Trained engineers provide free doorstep installation, calibration, and live pH color testing across 1,200+ cities in India.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Users size={22} />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              20,000+ Families
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Proudly trusted by families, doctors, fitness enthusiasts, and wellness resorts nationwide.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-3xl bg-brand-dark text-white text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Have Questions About What System Fits Your Home?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Our water engineers are available for phone and WhatsApp consultations.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="https://wa.me/918053203304"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-vitality hover:bg-vitality-hover text-brand-darkest text-xs font-bold transition-all shadow-sm"
            >
              <Phone size={15} />
              <span>WhatsApp: +91 8053203304</span>
            </a>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all"
            >
              <span>Explore Catalog</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
