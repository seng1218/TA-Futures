import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "FCPO Mastery | TA Futures Academy",
  description: "Learn the supply and demand fundamentals that drive the Crude Palm Oil futures market.",
};

export default function FcpoMasteryPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-10 pb-24 transition-colors">
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link href="/academy" className="text-sm font-bold text-brand hover:text-brand-light transition-colors flex items-center">
          <span className="mr-2">←</span> Back to Academy
        </Link>
      </div>

      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Module 2 • Intermediate Level</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
          FCPO: Trading the Global Benchmark
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
          Bursa Malaysia's Crude Palm Oil Futures (FCPO) is the undeniable global benchmark for the pricing of palm oil. To trade it profitably, you must understand the intertwined macroeconomic and agricultural forces driving its volatility.
        </p>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* Section 1 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">1. The Supply Side: Weather & Yield Cycles</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Malaysia and Indonesia collectively account for over 85% of global palm oil production. Because of this massive concentration, any local agricultural disruption instantly shocks the FCPO market.
          </p>
          <ul className="list-disc pl-6 space-y-4 text-slate-600 dark:text-slate-400 mb-6 transition-colors">
            <li><strong>El Niño / La Niña:</strong> Severe weather patterns that bring prolonged droughts or excessive flooding directly damage fresh fruit bunch (FFB) yields, predictably driving FCPO prices higher due to supply scarcity.</li>
            <li><strong>Labor Shortages:</strong> Palm oil harvesting is famously labor-intensive. Shortages in foreign labor (common during geopolitical policy changes) bottleneck production output.</li>
            <li><strong>Biological Tree Cycles:</strong> Production naturally peaks between August and October, normally exerting seasonal downward pressure on prices during these months.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">2. The Demand Side: Exports & Geopolitics</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            While supply is highly concentrated, demand is massively dispersed. India, China, and the European Union are the largest importers, meaning their domestic policies heavily dictate FCPO movement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-4">
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Import Tariffs</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">When India lowers import duties on edible oils to combat domestic inflation, it usually triggers a surge in bulk buying, rocketing FCPO demand.</p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Festive Seasons</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">Demand reliably spikes in the weeks preceding major festivals like Ramadan and Diwali, as global bulk buyers prepare for immense jumps in food consumption.</p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">3. The Substitution Effect: Soybean Oil (CBOT)</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Palm oil does not trade in a vacuum. It aggressively competes with other edible oils, primarily Soybean Oil traded on the Chicago Board of Trade (CBOT:ZL).
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/50 border-l-4 border-brand p-6 rounded-r-xl transition-colors">
            <h4 className="font-bold text-slate-900 mb-2">Market Correlation</h4>
            <p className="text-sm text-slate-600">
              Palm oil is traditionally traded at a structural discount to soybean oil. If soybean oil prices spike due to a poor US harvest, global buyers instantly switch their procurement to the cheaper alternative (Palm Oil), driving FCPO up sequentially. Professional traders always keep CBOT Soy Oil open on their secondary platforms to anticipate FCPO momentum.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">4. Biodiesel Mandates</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            A massive portion of raw palm oil is refined into biofuel. Governments in Indonesia (B35 mandate) and Malaysia legally enforce the blending of palm-based biodiesel into traditional fossil fuels.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 transition-colors">
            When crude oil (NYMEX:CL) prices are high, producing biodiesel from palm oil becomes extremely economically viable, directly pushing FCPO prices higher. Therefore, maintaining a macro-awareness of global energy prices is vital for advanced FCPO traders.
          </p>
          <div className="bg-slate-900 text-white rounded-2xl p-8 text-center mt-8">
             <h3 className="text-2xl font-bold mb-3">Track Real-Time Deliveries</h3>
             <p className="text-slate-400 mb-6 max-w-lg mx-auto">Access MPOB (Malaysian Palm Oil Board) reports and live charting arrays directly inside your Pro Terminal.</p>
             <Link href="/platforms" className="inline-block bg-brand hover:bg-brand-light text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-brand/20">
               Launch Desktop Terminal
             </Link>
          </div>
        </div>

      </article>
    </main>
  );
}
