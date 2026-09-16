import React from "react";
import { Users, Star, ShieldCheck, Truck } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Users,
      value: "20,000+",
      label: "Happy Customers",
      desc: "Delivering healthy alkaline hydration to households across 28 Indian states.",
      color: "bg-vitality-light text-vitality-dark",
    },
    {
      icon: Star,
      value: "4.8 / 5",
      label: "Premium Quality",
      desc: "Japanese certified titanium-platinum plates and lab-tested 99.4% virgin copper.",
      color: "bg-amber-50 text-amber-600",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Secure Payment",
      desc: "256-Bit bank-grade encrypted checkout with UPI, Cards, NetBanking, and COD.",
      color: "bg-emerald-50 text-emerald-700",
    },
    {
      icon: Truck,
      value: "Fast",
      label: "Pan-India Delivery",
      desc: "Orders dispatched within 24 hours with dedicated doorstep tracking support.",
      color: "bg-ocean-50 text-ocean-700",
    },
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-vitality-dark">
            Trust & Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-1">
            Why Choose AlkalineSeva
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Backed by AD HerbalNest Pvt. Ltd. — Committed to uncompromised purity and verified science.
          </p>
        </div>

        {/* 4 Feature Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200/80 bg-white hover:border-vitality/50 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-6 ${item.color}`}
                >
                  <Icon size={26} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                    {item.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-700 mt-0.5">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-slate-600 mt-1 line-clamp-2">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
