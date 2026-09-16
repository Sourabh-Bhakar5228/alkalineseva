# 💧 AlkalineSeva

> **Premium Alkaline Water Ionizers, Active Molecular Hydrogen & Ayurvedic Wellness Store**  
> Operated by **AD HerbalNest Pvt. Ltd.** | Live Website: [alkalineseva.com](https://alkalineseva.com/)

[![Next.js](https://img.shields.io/badge/Next.js-14%2B-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/State-Zustand-orange?style=for-the-badge)](https://github.com/pmndrs/zustand)

---

## 📖 Overview

**AlkalineSeva** is a high-performance modern eCommerce web application tailored for India's leading alkaline water ionization and wellness brand. The platform seamlessly bridges Japanese continuous platinum electrolysis technology with ancient Ayurvedic mineral water science.

---

## 🌟 Key Features

### 🛍️ Authentic Product Catalog & Store
* **Japanese Titanium-Platinum Electrolysis Ionizers**: 7-plate continuous electrolysis with interactive digital touch displays, negative ORP (-450mV), and DARC self-cleaning chambers.
* **SPE/PEM Hydrogen Water Bottles**: High-borosilicate portable bottles exhausting toxic chlorine and ozone gases for clean therapeutic dissolved H2 (1600+ PPB).
* **In-Line Magnetic Vortex Conditioners**: 12,000 Gauss neodymium hydro-magnetic conditioners with pure copper chambers requiring zero electricity.
* **Natural Gravity Mineral Dispensers**: Multi-stage mineral ceramic filtration (10L & 5L floral editions) promoting gentle liver care.
* **100% Hammered Pure Copper Dispensers**: Handcrafted heavy-gauge vessels for overnight Ayurvedic *Tamra Jal* charging.

### ⚡ User Experience & Shopping Flow
* **Interactive Hero Slider**: High-resolution banners with direct CTA links and WhatsApp In-Home Demo booking.
* **Persistent Cart & Wishlist**: Powered by Zustand with `localStorage` state persistence for instant additions.
* **Quick View Modal & Gallery**: Full zoomable product previews with multi-angle photography without leaving the page.
* **Smart Search Modal**: Instant real-time search across names, categories, and tags.
* **Responsive Mobile Navigation**: Side-drawer navigation designed with touch-first ergonomics.
* **Direct WhatsApp Integration**: Floating instant support to connect with certified water engineers (+91 8053203304).

---

## 📂 Core Product Categories

1. **Alkaline Water Device** (`/category/alkaline-water-device`) — Multi-plate ionizers & in-line magnetic conditioners.
2. **Hydrogen Water Bottle** (`/category/hydrogen-water-bottle`) — Portable molecular hydrogen infusion bottles.
3. **Mineral Rich Water** (`/category/mineral-rich-water`) — Trace mineral ceramic gravity purification.
4. **Liver Care** (`/category/liver-care`) — Detoxifying dispensers and pure copper *Tamra Jal* vessels.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components & Client Hydration)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing for robust e-commerce contracts)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom HSL color palette, typography & animations)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (Cart drawer, wishlist, authentication state)
- **Icons**: [Lucide React](https://lucide.dev/) (Clean, consistent iconography)
- **Assets**: 100% original, high-resolution media synchronized from [alkalineseva.com](https://alkalineseva.com/)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (version 18.17 or higher) and npm installed:
```bash
node -v
npm -v
```

### 1. Clone the repository
```bash
git clone https://github.com/Sourabh-Bhakar5228/alkalineseva.git
cd alkalineseva
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 4. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
AlkalineSeva/
├── public/
│   └── images/
│       ├── banners/       # Hero slides, health guides & promo banners
│       ├── categories/    # Official category badges
│       ├── logo/          # High-resolution brand logo and favicon
│       ├── products/      # 6 core products with multi-angle galleries
│       └── reviews/       # Verified WhatsApp proof screenshots
├── src/
│   ├── app/               # Next.js App Router (pages & layouts)
│   │   ├── about-us/      # Company heritage & technology vision
│   │   ├── blog/          # Health tips & bio-hydration research
│   │   ├── category/      # Category-filtered product listings
│   │   ├── products/      # Product catalog & single product details
│   │   └── ...            # Cart, checkout, account & track-order
│   ├── components/
│   │   ├── common/        # ProductCard, StarRating, QuickViewModal
│   │   ├── home/          # HeroSlider, BestSellers, CategoryGrid, Reviews
│   │   ├── layout/        # Header, Footer, MobileNav, CartDrawer
│   │   └── product/       # ProductGallery, ProductInfo, StickyCTA
│   ├── data/              # Typed datasets (products, categories, blogs, faqs)
│   ├── store/             # Zustand stores (cartStore, wishlistStore, authStore)
│   └── types/             # TypeScript data contracts & models
├── tailwind.config.js     # Custom theme tokens (vitality, brand-dark)
└── next.config.mjs        # Next.js image domain configuration
```

---

## 📄 License & Attribution

All product designs, trademarks, and media assets are the property of **AD HerbalNest Pvt. Ltd.** / [alkalineseva.com](https://alkalineseva.com/).
All rights reserved.
