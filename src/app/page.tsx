import { HeroSlider } from "@/components/home/HeroSlider";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { BestSellers } from "@/components/home/BestSellers";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { WhyOurProducts } from "@/components/home/WhyOurProducts";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { HealthBlogSection } from "@/components/home/HealthBlogSection";
import { FAQSection } from "@/components/home/FAQSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export const metadata = {
  title: "AlkalineSeva — Official Alkaline Water Ionizers & Ayurvedic Wellness",
  description:
    "Upgrade your everyday water with AlkalineSeva by AD HerbalNest. Japanese titanium electrolysis, molecular hydrogen bottles, and 100% pure Ayurvedic copper dispensers.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner Slider */}
      <HeroSlider />

      {/* 2. Why Choose AlkalineSeva / AD HerbalNest */}
      <WhyChooseUs />

      {/* 3. Shop by Category */}
      <CategoryGrid />

      {/* 4. Best Sellers (Top 6 Products) */}
      <BestSellers />

      {/* 5. Featured Collections */}
      <FeaturedCollections />

      {/* 6. Why Our Products? */}
      <WhyOurProducts />

      {/* 7. Customer Reviews & Video Testimonials */}
      <CustomerReviews />

      {/* 8. Health Tips / Blog */}
      <HealthBlogSection />

      {/* 9. FAQ Section */}
      <FAQSection />

      {/* 10. Newsletter */}
      <NewsletterSection />
    </div>
  );
}
