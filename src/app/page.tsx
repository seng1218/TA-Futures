import HeroSection from '@/components/HeroSection';
import BentoGrid from '@/components/BentoGrid';
import MarketIntelligence from '@/components/MarketIntelligence';
import WhyTAF from '@/components/WhyTAF';
import ProductsSection from '@/components/ProductsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* ===== HERO SECTION ===== */}
      <HeroSection />

      {/* ===== WHY TAF SECTION ===== */}
      <WhyTAF />

      {/* ===== PRODUCTS SECTION ===== */}
      <ProductsSection />

      {/* ===== TRADER UTILITIES SECTION ===== */}
      <BentoGrid />

      {/* ===== MARKET INTELLIGENCE SECTION ===== */}
      <MarketIntelligence />
    </main>
  );
}