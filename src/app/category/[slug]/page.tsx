import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ProductCard } from "@/components/common/ProductCard";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} — AlkalineSeva`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (p) =>
      p.categorySlug === slug ||
      p.category.toLowerCase().includes(category.name.toLowerCase()) ||
      (slug === "mineral-rich-water" &&
        (p.categorySlug === "alkaline-water-device" ||
          p.categorySlug === "liver-care"))
  );

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      {/* Category Banner */}
      <div className="bg-gradient-to-r from-brand-darkest via-brand-dark to-brand-darkest text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-4">
            <Link href="/" className="hover:text-vitality transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-slate-400" />
            <Link href="/products" className="hover:text-vitality transition-colors">
              Categories
            </Link>
            <ChevronRight size={13} className="text-slate-400" />
            <span className="text-vitality font-bold">{category.name}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {category.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
            {category.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-semibold text-slate-500">
            Showing {categoryProducts.length} items in {category.name}
          </span>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark hover:text-vitality transition-colors"
          >
            <ArrowLeft size={14} />
            <span>All Categories</span>
          </Link>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
            <h3 className="text-base font-bold text-slate-800">
              No products found in this category currently
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              New shipments are arriving soon!
            </p>
            <Link
              href="/products"
              className="inline-flex px-5 py-2.5 rounded-xl bg-brand-dark text-white text-xs font-bold"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
