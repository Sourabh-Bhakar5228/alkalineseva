"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Eye, ZoomIn } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  badge?: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
  badge,
}) => {
  const [activeImage, setActiveImage] = useState(images[0] || "");
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Hero Image */}
      <div
        className="relative aspect-square w-full rounded-3xl bg-slate-50 border border-slate-200/80 overflow-hidden shadow-soft cursor-zoom-in"
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <Image
          src={activeImage}
          alt={productName}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-contain p-4 transition-transform duration-300 ${
            isZoomed ? "scale-125" : "scale-100 hover:scale-105"
          }`}
        />

        {badge && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-brand-darkest text-white shadow-sm">
            {badge}
          </span>
        )}

        <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-white/80 backdrop-blur-sm text-slate-600 shadow-xs text-xs flex items-center gap-1">
          <ZoomIn size={14} />
          <span className="text-[11px] font-medium hidden sm:inline">Click to Zoom</span>
        </div>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(img)}
              aria-label={`View ${productName} image ${idx + 1}`}
              className={`relative aspect-square rounded-2xl overflow-hidden border-2 bg-slate-50 transition-all ${
                activeImage === img
                  ? "border-vitality shadow-sm ring-2 ring-vitality/20"
                  : "border-slate-200/80 hover:border-slate-400 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 20vw, 10vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
