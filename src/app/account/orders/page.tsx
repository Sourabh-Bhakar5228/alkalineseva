"use client";

import React from "react";
import Link from "next/link";
import { Package, ArrowLeft, ChevronRight, CheckCircle2, Truck, FileText } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function OrdersPage() {
  const orders = [
    {
      id: "AS-89421",
      date: "14 Sep 2026",
      total: 44999,
      status: "In Transit",
      items: [
        {
          name: "Smart Touch 7-Plate Alkaline Water Ionizer (Touch Screen)",
          price: 44999,
          qty: 1,
        },
      ],
      installationStatus: "Technician Assigned (Visiting 16 Sep)",
    },
    {
      id: "AS-72109",
      date: "28 Jul 2026",
      total: 1999,
      status: "Delivered",
      items: [
        {
          name: "AD HerbalNest Premium Hydrogen Alkaline Water Bottle",
          price: 1999,
          qty: 1,
        },
      ],
      installationStatus: "Self-Installed / Not Applicable",
    },
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/account"
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
          >
            <ArrowLeft size={16} />
          </Link>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Order History & Service Status
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Review your past purchases, courier details, and installation appointments.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {orders.map((ord) => (
            <div
              key={ord.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-dark text-vitality flex items-center justify-center">
                    <Package size={20} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">
                      Order #{ord.id}
                    </h3>
                    <p className="text-xs text-slate-400">Placed on {ord.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      ord.status === "Delivered"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-ocean-50 text-ocean-700"
                    }`}
                  >
                    {ord.status}
                  </span>
                  <Link
                    href={`/track-order?orderId=${ord.id}`}
                    className="px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
                  >
                    Track
                  </Link>
                </div>
              </div>

              {/* Items in this order */}
              <div className="space-y-2">
                {ord.items.map((it, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-800">
                      {it.name} (x{it.qty})
                    </span>
                    <span className="font-bold text-slate-900">
                      {formatPrice(it.price * it.qty)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Status footer */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="text-slate-500">
                  Installation Status:{" "}
                  <strong className="text-vitality-dark">
                    {ord.installationStatus}
                  </strong>
                </div>
                <div className="font-extrabold text-sm text-slate-900">
                  Total: {formatPrice(ord.total)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
