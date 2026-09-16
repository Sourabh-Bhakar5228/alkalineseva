import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Box,
  Wrench,
  Sparkles,
  HelpCircle,
  Clock,
  Truck,
  RotateCcw,
} from "lucide-react";
import { products } from "@/data/products";
import { customerReviews } from "@/data/reviews";
import { faqs } from "@/data/faqs";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { StickyMobileCTA } from "@/components/product/StickyMobileCTA";
import { ProductCard } from "@/components/common/ProductCard";
import { StarRating } from "@/components/common/StarRating";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find(
    (p) => p.slug === slug || p.aliases?.includes(slug)
  );
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} — AlkalineSeva`,
    description: product.shortDesc,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find(
    (p) => p.slug === slug || p.aliases?.includes(slug)
  );

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, 3);

  // If less than 3 in same category, pad with bestsellers
  const displayRelated =
    relatedProducts.length >= 2
      ? relatedProducts
      : products.filter((p) => p.id !== product.id).slice(0, 3);

  const reviewsForProduct = customerReviews.filter(
    (r) => r.productName === product.name || product.bestSeller
  );

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-vitality transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <Link href="/products" className="hover:text-vitality transition-colors">
              Products
            </Link>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <Link
              href={`/category/${product.categorySlug}`}
              className="hover:text-vitality transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <span className="text-slate-900 font-bold truncate max-w-xs">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Hero (Gallery + Purchasing Actions) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <ProductGallery
            images={product.gallery}
            productName={product.name}
            badge={product.bestSeller ? "Best Seller" : undefined}
          />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Decision-Support Section: Benefits & Specifications */}
      <div className="bg-slate-50/70 border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section: Product Benefits */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-vitality">
                Evidence-Based Benefits
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-1">
                Why This Product Elevates Your Health
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-vitality-light text-vitality-dark flex items-center justify-center shrink-0 font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {benefit.split(":")[0]}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {benefit.includes(":")
                        ? benefit.split(":").slice(1).join(":")
                        : benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Technical Specifications Table */}
          <div>
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-vitality">
                Lab-Tested Specs
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-1">
                Technical Specifications
              </h2>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden">
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody>
                  {Object.entries(product.specifications).map(([key, val], i) => (
                    <tr
                      key={key}
                      className={
                        i % 2 === 0
                          ? "bg-slate-50/60 border-b border-slate-100"
                          : "bg-white border-b border-slate-100"
                      }
                    >
                      <th className="py-3.5 px-5 font-semibold text-slate-700 w-1/3 border-r border-slate-100">
                        {key}
                      </th>
                      <td className="py-3.5 px-5 text-slate-900 font-medium">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: What's in the Box */}
          <div>
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-vitality">
                Complete Kit
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-1">
                What&apos;s Included in the Box
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Everything required for immediate installation and operation.
              </p>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {product.whatsInBox.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs"
                >
                  <Box size={18} className="text-vitality shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Installation & Warranty Assurance */}
          <div className="p-8 rounded-3xl bg-brand-darkest text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-2xl bg-vitality/20 text-vitality flex items-center justify-center mx-auto md:mx-0">
                  <Wrench size={24} />
                </div>
                <h3 className="text-base font-bold text-white">
                  Free In-Home Installation
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our certified technician visits your location within 24–48 hours of delivery to mount, connect, and calibrate the device.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-2xl bg-ocean-500/20 text-ocean-400 flex items-center justify-center mx-auto md:mx-0">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-base font-bold text-white">
                  {product.warrantyYears} Year Comprehensive Warranty
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Covers titanium electrolysis plates, internal electronics, and solenoids. Doorstep replacement and warranty support via WhatsApp.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto md:mx-0">
                  <RotateCcw size={24} />
                </div>
                <h3 className="text-base font-bold text-white">
                  7-Day Hassle-Free Replacement
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  In the rare event of transit damage or manufacturing defect, we provide immediate door-step reverse pickup and replacement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews for this Product */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-vitality">
              Real User Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-1">
              Customer Reviews ({product.reviewsCount})
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <StarRating rating={product.rating} showNumber size={16} />
            <span className="text-xs font-bold text-slate-700">Overall Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsForProduct.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <StarRating rating={rev.rating} />
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">
                  &ldquo;{rev.title}&rdquo;
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {rev.comment}
                </p>
              </div>
              <div className="flex items-center gap-2 pt-3 border-t border-slate-200/60 text-xs">
                <span className="font-bold text-slate-800">{rev.name}</span>
                <span className="text-slate-400">• {rev.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product FAQ */}
      <div className="bg-slate-50/70 border-t border-slate-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-brand-dark">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Answers regarding compatibility, maintenance, and filter life.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.slice(0, 4).map((faq) => (
              <div
                key={faq.id}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs"
              >
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark mb-8">
          Customers Also Bought
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayRelated.map((relProduct) => (
            <ProductCard key={relProduct.id} product={relProduct} />
          ))}
        </div>
      </div>

      {/* Sticky Mobile Purchase CTA */}
      <StickyMobileCTA product={product} />
    </div>
  );
}
