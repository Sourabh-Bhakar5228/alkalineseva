"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  CheckCircle,
  Play,
  X,
  ThumbsUp,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { customerReviews } from "@/data/reviews";
import { StarRating } from "@/components/common/StarRating";
import { CustomerReview } from "@/types";

export const CustomerReviews: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<CustomerReview | null>(null);

  return (
    <section className="py-16 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Aggregate Rating */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-vitality-light text-vitality-dark mb-2">
              <ShieldCheck size={14} />
              <span>Verified Buyer Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              What Our Customers Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Read real stories from families and professionals who upgraded their daily water.
            </p>
          </div>

          {/* Trust Score Box */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft self-start">
            <div className="text-center pr-4 border-r border-slate-200">
              <div className="text-3xl font-black text-slate-900">4.8</div>
              <div className="text-[11px] font-semibold text-slate-600">out of 5</div>
            </div>
            <div>
              <div className="flex text-amber-500 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-500" />
                ))}
              </div>
              <div className="text-xs font-bold text-slate-800">
                2,400+ Happy Families
              </div>
              <div className="text-[11px] text-slate-600">
                98.4% Recommended
              </div>
            </div>
          </div>
        </div>

        {/* Video Testimonials Highlight Row */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span>Video Stories from Real Customers</span>
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {customerReviews
              .filter((r) => r.videoThumbnail)
              .map((videoReview) => (
                <div
                  key={videoReview.id}
                  onClick={() => setSelectedVideo(videoReview)}
                  className="group relative h-56 rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-card transition-all duration-300 border border-slate-200"
                >
                  <Image
                    src={videoReview.videoThumbnail!}
                    alt={videoReview.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-brand-dark group-hover:scale-110 group-hover:bg-vitality group-hover:text-white flex items-center justify-center shadow-lg transition-all duration-300">
                      <Play size={22} className="ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold">{videoReview.name}</span>
                      <span className="px-2 py-0.5 rounded-full bg-black/60 text-[10px] font-mono">
                        {videoReview.videoDuration}
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 line-clamp-1">
                      &ldquo;{videoReview.title}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Written Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <StarRating rating={review.rating} />
                  <span className="text-[11px] text-slate-600 font-medium">
                    {review.date}
                  </span>
                </div>

                <h4 className="font-bold text-slate-900 text-sm mb-2 leading-snug">
                  &ldquo;{review.title}&rdquo;
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {review.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-vitality-light text-vitality-dark font-bold text-xs flex items-center justify-center">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      {review.name}
                    </div>
                    <div className="text-[11px] text-slate-600">
                      {review.location}
                    </div>
                  </div>
                </div>

                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-vitality-dark bg-vitality-light px-2 py-0.5 rounded-md">
                    <CheckCircle size={12} />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Testimonial Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
          <div
            className="relative w-full max-w-2xl bg-brand-darkest rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video testimonial"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90"
            >
              <X size={20} />
            </button>

            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <Image
                src={selectedVideo.videoThumbnail || ""}
                alt={selectedVideo.title}
                fill
                className="object-cover opacity-70"
              />
              <div className="relative z-10 text-center p-6 max-w-md">
                <div className="w-16 h-16 rounded-full bg-vitality text-brand-darkest flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Play size={26} className="ml-1 fill-current" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  Customer Experience: {selectedVideo.name}
                </h4>
                <p className="text-xs text-slate-300">
                  {selectedVideo.title}
                </p>
                <div className="mt-3 text-[11px] text-vitality font-semibold">
                  [Interactive Video Demo — Duration: {selectedVideo.videoDuration}]
                </div>
              </div>
            </div>

            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400">Purchased:</span>
                <span className="text-xs font-bold text-slate-200 ml-1.5">
                  {selectedVideo.productName}
                </span>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="px-4 py-1.5 rounded-lg bg-vitality text-brand-darkest text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
