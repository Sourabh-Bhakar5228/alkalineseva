"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Droplets,
  ArrowRight,
  Phone,
} from "lucide-react";

const heroSlides = [
  {
    id: 1,
    badge: "Flagship Japanese Platinum Electrolysis",
    title: "Upgrade Your Everyday Water with AlkalineSeva",
    highlight: "Real pH 8.5–9.5 & Negative ORP",
    subtitle:
      "Transform ordinary tap water into micro-clustered, bio-available antioxidant hydration with 7 titanium-platinum plates. Experience better gut health and cellular energy.",
    primaryCta: {
      text: "Shop Now",
      href: "/products/smart-touch-7-plate-alkaline-water-ionizer",
    },
    secondaryCta: {
      text: "Book Free In-Home Demo",
      href: "https://wa.me/918053203304?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20the%20AlkalineSeva%20Ionizer",
      isExternal: true,
    },
    image: "/images/banners/hero-banner-1.png",
    metric: "4.9/5 Rating from 380+ Indian Homes",
  },
  {
    id: 2,
    badge: "SPE/PEM Medical Membrane Technology",
    title: "Pure Active Molecular Hydrogen On The Go",
    highlight: "1600+ PPB Dissolved H2 in 3 Minutes",
    subtitle:
      "Combat daily oxidative fatigue wherever you travel. Exhausts ozone and chlorine through bottom vents, infusing pristine therapeutic hydrogen water with negative ORP -400mV.",
    primaryCta: {
      text: "Explore Hydrogen Bottle",
      href: "/products/hydrogen-water-bottle",
    },
    secondaryCta: {
      text: "View Water Bottles",
      href: "/category/hydrogen-water-bottle",
      isExternal: false,
    },
    image: "/images/banners/hero-banner-2.png",
    metric: "1400mAh Battery • USB-C Fast Charge",
  },
  {
    id: 3,
    badge: "Ancient Ayurvedic Science Meets Modern Elegance",
    title: "100% Solid Hammered Copper Dispensers",
    highlight: "Natural Microbial Neutralization (Tamra Jal)",
    subtitle:
      "Handcrafted heavy-gauge diamond-hammered pure copper vessels with solid brass dispensing taps. Charges overnight water with trace minerals for healthy digestion and glowing skin.",
    primaryCta: {
      text: "Explore Copper Dispenser",
      href: "/products/alkaline-water-dispenser-3",
    },
    secondaryCta: {
      text: "View Liver Care",
      href: "/category/liver-care",
      isExternal: false,
    },
    image: "/images/banners/hero-banner-3.png",
    metric: "99.4% Lab-Certified Virgin Copper",
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-900 text-white min-h-[520px] lg:min-h-[580px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      {heroSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Dark Vignette & Brand Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center brightness-[0.38] scale-105 transition-transform duration-7000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-darkest/95 via-brand-dark/85 to-transparent" />
            </div>

            {/* Slide Content */}
            <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center py-16 sm:py-20">
              <div className="max-w-2xl space-y-5 sm:space-y-6 animate-fade-in">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-vitality/20 text-vitality border border-vitality/30 backdrop-blur-md">
                  <Zap size={14} className="text-vitality" />
                  <span>{slide.badge}</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {slide.title}
                  <span className="block text-vitality mt-1">
                    {slide.highlight}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  {slide.subtitle}
                </p>

                {/* Metric Strip */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <ShieldCheck size={16} className="text-vitality" />
                  <span>{slide.metric}</span>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={slide.primaryCta.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-vitality hover:bg-vitality-hover text-brand-darkest text-sm font-extrabold shadow-lg shadow-vitality/20 transition-all duration-200 active:scale-95"
                  >
                    <span>{slide.primaryCta.text}</span>
                    <ArrowRight size={16} />
                  </Link>

                  {slide.secondaryCta.isExternal ? (
                    <a
                      href={slide.secondaryCta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 backdrop-blur-sm transition-all"
                    >
                      <Phone size={15} className="text-vitality" />
                      <span>{slide.secondaryCta.text}</span>
                    </a>
                  ) : (
                    <Link
                      href={slide.secondaryCta.href}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 backdrop-blur-sm transition-all"
                    >
                      <span>{slide.secondaryCta.text}</span>
                      <ArrowRight size={15} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slider Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center border border-white/10 backdrop-blur-sm transition-all"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center border border-white/10 backdrop-blur-sm transition-all"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? "w-8 bg-vitality"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
