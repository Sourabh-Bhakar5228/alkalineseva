import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AlkalineSeva — Official Alkaline Water Ionizers & Wellness Store",
  description:
    "Official website of AlkalineSeva by AD HerbalNest Pvt. Ltd. High-grade Japanese multi-plate water ionizers, portable hydrogen bottles, Ayurvedic pure copper dispensers, and wellness essentials.",
  keywords:
    "alkaline water, hydrogen bottle, water ionizer India, copper dispenser, Tamra Jal, AlkalineSeva, AD HerbalNest",
  icons: {
    icon: "/images/logo/logo-icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/images/logo/logo-icon.jpeg" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col antialiased bg-white text-slate-800 selection:bg-vitality-light selection:text-brand-darkest"
      >
        {/* Global Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 w-full">{children}</main>

        {/* Global Footer (Section 11) */}
        <Footer />

        {/* Global Slide-out Cart Drawer */}
        <CartDrawer />

        {/* Floating WhatsApp Quick Action */}
        <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
          <a
            href="https://wa.me/918053203304?text=Hello%20AlkalineSeva%2C%20I%20need%20assistance%20with%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-elevated transition-all duration-300 hover:scale-105"
          >
            <MessageCircle size={20} className="fill-white" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-xs font-bold">
              Chat with Expert
            </span>
          </a>
        </aside>
      </body>
    </html>
  );
}
