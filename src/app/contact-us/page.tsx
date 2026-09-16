"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    inquiryType: "demo",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-darkest via-brand-dark to-brand-darkest text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-vitality">
            Official Support & Demonstrations
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Contact AlkalineSeva
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Need advice on water TDS, want to book a complimentary in-home pH test, or need warranty service? We&apos;re here for you.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details Left */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Official Channels
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-vitality-light text-vitality-dark flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Phone & WhatsApp Support:</span>
                    <a
                      href="tel:+918053203304"
                      className="text-sm font-extrabold text-slate-900 hover:text-vitality transition-colors"
                    >
                      +91 8053203304
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Fast response on WhatsApp for unboxings & demos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-ocean-50 text-ocean-600 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Email Support:</span>
                    <span className="text-sm font-bold text-slate-900">
                      support@alkalineseva.com
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Average response time: under 3 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Working Hours:</span>
                    <span className="text-xs font-bold text-slate-800">
                      Monday to Saturday: 9:30 AM – 7:00 PM
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Sunday on-call for emergency leak assistance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Parent Entity:</span>
                    <span className="text-xs font-bold text-slate-800">
                      AD HerbalNest Pvt. Ltd.
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      National Fulfillment & Service Hub, New Delhi & Haryana
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/918053203304?text=Hi%20AlkalineSeva%2C%20I%20would%20like%20to%20connect%20with%20support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <MessageCircle size={17} />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact & Free Demo Booking Form Right */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
              <h2 className="text-xl font-extrabold text-slate-900 mb-1">
                Book a Free Demo or Send an Inquiry
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Our certified engineer will bring liquid pH reagents and water test vials to your home.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-vitality-light/40 border border-vitality/30 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-vitality text-brand-darkest flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Thank You! Inquiry Received
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Our technical coordinator will call or WhatsApp you within 2 hours to confirm your time slot or answer your questions.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anjali Sharma"
                        className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        City / Location <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Delhi NCR / Bangalore"
                        className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark bg-white font-medium"
                    >
                      <option value="demo">Book Free In-Home Demo & pH Test</option>
                      <option value="ionizer">Inquire about 7-Plate Ionizer</option>
                      <option value="hydrogen">Inquire about Hydrogen Bottle</option>
                      <option value="distributor">Become a Regional Distributor</option>
                      <option value="warranty">Warranty & Installation Service</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your source water (tap/RO/borewell) or preferred demo schedule..."
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-dark"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-dark hover:bg-brand-muted text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-98"
                  >
                    <span>Submit Inquiry</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
