import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export const FeaturedCollections: React.FC = () => {
  const collections = [
    {
      id: "col-1",
      title: "Alkaline Water Device",
      tagline: "Japanese Multi-Plate & H2 Tech",
      description: "Bioavailable alkaline purifiers, continuous electrolysis ionizers, and in-line magnetic vortex conditioners.",
      link: "/category/alkaline-water-device",
      image: "/images/banners/hero-banner-1.png",
      badge: "Flagship Technology",
    },
    {
      id: "col-2",
      title: "Hydrogen Water Bottle",
      tagline: "Active Molecular H2 On The Go",
      description: "Borosilicate glass bottles for instant mineral and antioxidant water charging anywhere you travel.",
      link: "/category/hydrogen-water-bottle",
      image: "/images/products/hydrogen-bottle-1.png",
      badge: "Portable Hydration",
    },
    {
      id: "col-3",
      title: "Mineral Rich Water",
      tagline: "Natural Trace Minerals (Ca, Mg, K)",
      description: "Multi-stage gravity dispensers providing alkaline re-mineralization and smooth antioxidant hydration.",
      link: "/category/mineral-rich-water",
      image: "/images/banners/hero-banner-3.png",
      badge: "Natural Gravity",
    },
    {
      id: "col-4",
      title: "Liver Care",
      tagline: "Ayurvedic Tamra Jal & Gentle Detox",
      description: "Handcrafted pure hammered copper dispensers and gravity purifiers optimized for natural bodily detox.",
      link: "/category/liver-care",
      image: "/images/products/dispenser-10ltr-1.png",
      badge: "Holistic Wellness",
    },
  ];

  return (
    <section className="py-16 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-vitality-dark">
            Lifestyle Categories
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-1">
            Featured Collections
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Explore carefully curated wellness ecosystems built around hydration, natural therapy, and elemental living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col) => (
            <Link
              key={col.id}
              href={col.link}
              className="group relative flex flex-col justify-end h-[380px] rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 border border-slate-200/80"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 brightness-[0.65] group-hover:brightness-[0.55]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest via-brand-darkest/60 to-transparent" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 p-6 flex flex-col">
                <span className="inline-block self-start px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-vitality text-brand-darkest mb-3">
                  {col.badge}
                </span>

                <h3 className="text-xl font-bold text-white leading-tight">
                  {col.title}
                </h3>
                <span className="text-xs font-semibold text-vitality mt-0.5">
                  {col.tagline}
                </span>

                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {col.description}
                </p>

                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white group-hover:text-vitality transition-colors">
                  <span>Explore Collection</span>
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1.5 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
