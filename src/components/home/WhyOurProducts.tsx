import React from "react";
import { ShieldCheck, Leaf, Cpu, Wrench, CheckCircle2, Award } from "lucide-react";

export const WhyOurProducts: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Premium Certified Quality",
      highlight: "Japanese Titanium & Platinum",
      description:
        "Every ionizer plate is manufactured with high-purity medical titanium baked with double platinum coating, certified for 15+ years of continuous electrolysis without chemical degradation.",
      points: [
        "ISO 9001 & CE European Safety Compliant",
        "100% Food-Grade & BPA-Free Plastics",
        "Heavy 99.4% Lab-Certified Virgin Copper",
      ],
      color: "border-sky-200 bg-sky-50/50 text-ocean-600",
    },
    {
      icon: Leaf,
      title: "100% Natural Ingredients",
      highlight: "Organic Ayurvedic Purity",
      description:
        "Our herbal decoctions, mineral ceramic balls, and organic health supplements are free from artificial flavors, chemical colors, synthetic stabilizers, and preservatives.",
      points: [
        "Traditional Sun-Dried & Stone-Ground",
        "Natural Maifan, Tourmaline & Calcite Stones",
        "Zero Heavy Metal Contamination",
      ],
      color: "border-emerald-200 bg-emerald-50/50 text-vitality-dark",
    },
    {
      icon: Cpu,
      title: "Advanced Technology",
      highlight: "SPE/PEM & DARC Electrolysis",
      description:
        "Equipped with Solid Polymer Electrolyte membranes and Dual Automatic Reverse Cleaning (DARC) chambers that eliminate limescale accumulation and vent hazardous ozone/chlorine gases.",
      points: [
        "1600+ PPB Dissolved Molecular Hydrogen",
        "Up to -450mV Negative Oxidation Reduction",
        "Interactive Digital Touch Screen Displays",
      ],
      color: "border-indigo-200 bg-indigo-50/50 text-indigo-600",
    },
    {
      icon: Wrench,
      title: "Easy DIY Maintenance",
      highlight: "Plug-and-Play Indian Fitment",
      description:
        "Universal 1/4-inch push-fit connectors that connect to any Kent, Aquaguard, or domestic RO system in 2 minutes. Automatic filter countdown meters take the guesswork out of maintenance.",
      points: [
        "Tool-Free Quick Connect Push Fittings",
        "Automated Beep Alerts for Filter Change",
        "Free Doorstep Annual Servicing Support",
      ],
      color: "border-amber-200 bg-amber-50/50 text-amber-600",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-vitality-light text-vitality-dark mb-2">
            <Award size={14} />
            <span>Built for Precision & Longevity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
            Why Our Products?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Engineered specifically for Indian water conditions without compromising on Japanese scientific standards.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-slate-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.color}`}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <span className="text-xs font-semibold text-vitality-dark">
                        {item.highlight}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 space-y-2">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 size={15} className="text-vitality-dark shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
