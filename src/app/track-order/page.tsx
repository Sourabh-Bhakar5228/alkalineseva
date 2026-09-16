"use client";

import React, { useState } from "react";
import {
  Search,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function TrackOrderPage() {
  const [query, setQuery] = useState("AS-89421");
  const [tracked, setTracked] = useState(true);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setTracked(true);
  };

  const steps = [
    {
      title: "Order Placed & Verified",
      time: "14 Sep 2026, 02:45 PM",
      location: "Central Warehouse, New Delhi",
      completed: true,
      current: false,
    },
    {
      title: "Laboratory Quality Checked & Packed",
      time: "14 Sep 2026, 06:15 PM",
      location: "AlkalineSeva Fulfillment Hub",
      completed: true,
      current: false,
    },
    {
      title: "In Transit via BlueDart Express",
      time: "15 Sep 2026, 09:30 AM",
      location: "Gurugram Sorting Facility",
      completed: true,
      current: true,
    },
    {
      title: "Out for Delivery",
      time: "Expected Tomorrow, by 05:00 PM",
      location: "Sector 45 Hub, Gurugram",
      completed: false,
      current: false,
    },
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-vitality">
            Real-Time Logistics
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-1">
            Track Your Order
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Enter your AlkalineSeva Order ID (e.g. AS-89421) or 10-digit registered mobile number.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-soft max-w-2xl mx-auto mb-10">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Order ID (AS-XXXXXX) or Mobile"
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold focus:outline-none focus:border-brand-dark"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-brand-dark hover:bg-brand-muted text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
            >
              Track Package
            </button>
          </form>
        </div>

        {/* Tracking Details Card */}
        {tracked && (
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-soft p-6 sm:p-8 space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-bold text-vitality-dark uppercase tracking-wider">
                  Shipment Status
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                  Order #{query.toUpperCase()}
                </h3>
                <p className="text-xs text-slate-500">
                  Carrier: <strong>BlueDart Air Express (AWB: 884920194)</strong>
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs text-slate-500 font-medium">
                  Estimated Delivery Date:
                </span>
                <div className="text-base sm:text-lg font-black text-vitality-dark">
                  Tomorrow by 5:00 PM
                </div>
              </div>
            </div>

            {/* Visual Timeline */}
            <div className="space-y-6 relative pl-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-4">
                  <div
                    className={`absolute -left-6 mt-1 w-5 h-5 rounded-full flex items-center justify-center ring-4 ring-white ${
                      step.completed
                        ? "bg-vitality text-white"
                        : "bg-slate-200 text-slate-400"
                    }`}
                  >
                    {step.completed ? <CheckCircle2 size={13} /> : <Clock size={11} />}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4
                        className={`text-sm font-bold ${
                          step.current
                            ? "text-vitality-dark"
                            : step.completed
                            ? "text-slate-900"
                            : "text-slate-400"
                        }`}
                      >
                        {step.title}
                        {step.current && (
                          <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-vitality-light text-vitality-dark">
                            Current Stage
                          </span>
                        )}
                      </h4>
                      <span className="text-xs text-slate-400 font-medium">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                      <MapPin size={12} className="text-slate-400" />
                      <span>{step.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Assistance Helpline */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-slate-600">
                Need to reschedule delivery or change address?
              </span>
              <a
                href="https://wa.me/918053203304?text=Hi%2C%20I%20need%20help%20with%20tracking%20my%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-vitality-dark hover:underline"
              >
                <Phone size={13} />
                <span>Contact Logistics on WhatsApp (+91 8053203304)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
