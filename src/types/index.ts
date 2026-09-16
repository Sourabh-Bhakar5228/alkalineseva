export interface Product {
  id: string;
  slug: string;
  name: string;
  tagLine: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  featured: boolean;
  bestSeller: boolean;
  isNew?: boolean;
  image: string;
  gallery: string[];
  shortDesc: string;
  description: string;
  benefits: string[];
  specifications: Record<string, string>;
  whatsInBox: string[];
  warrantyYears: number;
  badges?: string[];
  aliases?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  icon?: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  productName: string;
  avatar?: string;
  videoThumbnail?: string;
  videoDuration?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  totalAmount: number;
  discount: number;
  shipping: number;
  status: "Placed" | "Processing" | "Shipped" | "Out for Delivery" | "Delivered";
  trackingNumber: string;
  estimatedDelivery: string;
  shippingAddress: ShippingAddress;
  paymentMethod: string;
}
