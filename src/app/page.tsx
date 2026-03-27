import LeadForm from '@/components/LeadForm';
import BentoGrid from '@/components/BentoGrid';
import MarketIntelligence from '@/components/MarketIntelligence';
import WhyTAF from '@/components/WhyTAF';
import ProductsSection from '@/components/ProductsSection';
import { ShieldCheck, Building2, Award } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-[#FAFAFA] dark:bg-slate-950">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand/5 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm mb-8">
                <ShieldCheck className="w-4 h-4 text-brand" />
                Licensed by Securities Commission Malaysia
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-6 leading-tight">
                Trade the Markets. <br />
                <span className="text-brand">Zero Friction.</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
                Direct market access to Bursa Malaysia Derivatives (BMD) Futures and Options. Execution speed and precision engineered for the modern retail trader.
              </p>

              {/* Trust signals strip */}
              <div className="flex flex-wrap gap-6 items-center text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand" />
                  <span>Established 1995</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand" />
                  <span>Bursa Malaysia Participant</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand" />
                  <span>SC Licensed Broker</span>
                </div>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

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