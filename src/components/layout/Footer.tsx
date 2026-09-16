import React from "react";
import Link from "next/link";
import {
  Droplets,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CreditCard,
  Truck,
  RotateCcw,
  Sparkles,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darkest text-slate-300 pt-14 pb-8 border-t border-slate-800">
      {/* Trust Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-slate-800/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <div className="w-11 h-11 rounded-lg bg-vitality/10 text-vitality flex items-center justify-center shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Japanese Technology</div>
              <div className="text-xs text-slate-400">Medical-Grade Titanium Plates</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <div className="w-11 h-11 rounded-lg bg-ocean-500/10 text-ocean-400 flex items-center justify-center shrink-0">
              <Truck size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Free Pan-India Delivery</div>
              <div className="text-xs text-slate-400">Dispatched within 24 Hours</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <div className="w-11 h-11 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <RotateCcw size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">7-Day Replacement</div>
              <div className="text-xs text-slate-400">Doorstep Return & Inspection</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <div className="w-11 h-11 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <CreditCard size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Secure Encrypted Pay</div>
              <div className="text-xs text-slate-400">UPI, COD, NetBanking & Cards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-vitality shadow-sm">
                <Droplets size={22} />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  Alkaline<span className="text-vitality">Seva</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 -mt-1">
                  By AD HerbalNest Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              AlkalineSeva is committed to upgrading India&apos;s daily drinking water through certified Japanese titanium electrolysis, molecular hydrogen therapy, and authentic Ayurvedic copper science. Experience optimal bio-cellular hydration every day.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-800/80 text-vitality border border-slate-700">
                <Sparkles size={12} />
                <span>20,000+ Satisfied Families Across India</span>
              </span>
            </div>
          </div>

          {/* Col 2: Shop Categories */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/category/alkaline-water-purifiers" className="hover:text-vitality transition-colors">
                  Alkaline Water Purifiers
                </Link>
              </li>
              <li>
                <Link href="/category/water-bottles" className="hover:text-vitality transition-colors">
                  Hydrogen Water Bottles
                </Link>
              </li>
              <li>
                <Link href="/category/copper-products" className="hover:text-vitality transition-colors">
                  Copper Vessels & Dispensers
                </Link>
              </li>
              <li>
                <Link href="/category/herbal-products" className="hover:text-vitality transition-colors">
                  Herbal Wellness Products
                </Link>
              </li>
              <li>
                <Link href="/category/health-care" className="hover:text-vitality transition-colors">
                  Acupressure & Health Care
                </Link>
              </li>
              <li>
                <Link href="/category/accessories" className="hover:text-vitality transition-colors">
                  Replacement Filter Cartridges
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Policies */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/track-order" className="hover:text-vitality transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-vitality transition-colors">
                  About AlkalineSeva
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-vitality transition-colors">
                  Book Free In-Home Demo
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-vitality transition-colors">
                  Warranty & Installation
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-vitality transition-colors">
                  Shipping & Return Policy
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-vitality transition-colors">
                  Become a Distributor
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contact & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Official Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="text-vitality mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:+918053203304"
                    className="text-white hover:text-vitality font-semibold transition-colors"
                  >
                    +91 8053203304
                  </a>
                  <p className="text-[11px] text-slate-400">Call & WhatsApp Support</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-vitality mt-0.5 shrink-0" />
                <div>
                  <span className="text-white">support@alkalineseva.com</span>
                  <p className="text-[11px] text-slate-400">24/7 Ticket Assistance</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock size={15} className="text-vitality mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-300">Mon – Sat: 9:30 AM – 7:00 PM</span>
                  <p className="text-[11px] text-slate-400">Fast Sunday response via WhatsApp</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-vitality mt-0.5 shrink-0" />
                <span className="text-slate-300">
                  New Delhi & Haryana Regional Logistics Centers, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Payment icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} AlkalineSeva by AD HerbalNest Pvt. Ltd. All Rights Reserved.
        </p>
        <div className="flex items-center gap-3">
          <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-[10px] font-semibold">
            UPI / GPay / PhonePe
          </span>
          <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-[10px] font-semibold">
            RuPay
          </span>
          <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-[10px] font-semibold">
            Visa / Mastercard
          </span>
          <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-[10px] font-semibold">
            NetBanking & COD
          </span>
        </div>
      </div>
    </footer>
  );
};
