"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight, Tag } from "lucide-react";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.tagLine.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-100">
          <Search size={22} className="text-slate-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search alkaline purifiers, hydrogen bottles, copper..."
            className="w-full text-base sm:text-lg text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-slate-400 hover:text-slate-600 mr-1"
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
          >
            <span className="text-xs font-semibold uppercase">Esc</span>
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {query.trim() === "" ? (
            <div className="py-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Trending Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "7-Plate Alkaline Ionizer",
                  "Hydrogen Bottle",
                  "H2O Magnetic",
                  "Copper Dispenser",
                  "Acupressure Stick",
                  "RO Cartridge",
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-vitality-light hover:text-vitality-dark text-slate-700 transition-colors"
                  >
                    <Tag size={12} />
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Found {filteredProducts.length} Results
              </div>
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="relative w-14 h-14 rounded-lg bg-slate-100 overflow-hidden shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-slate-900 truncate group-hover:text-vitality transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-slate-500 truncate">
                      {product.category}
                    </p>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">
                      {formatPrice(product.price)}
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-slate-400 group-hover:text-vitality group-hover:translate-x-1 transition-all shrink-0"
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-slate-500">
              <p className="text-sm">No products found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for &quot;purifier&quot;, &quot;hydrogen&quot;, or &quot;copper&quot;
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
