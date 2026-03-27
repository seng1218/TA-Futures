import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "FCPO Mastery | TA Futures Academy",
  description: "Learn the supply and demand fundamentals that drive the Crude Palm Oil futures market.",
};

export default function FcpoMasteryPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-10 pb-24">
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link href="/academy" className="text-sm font-bold text-brand hover:text-brand-light transition-colors flex items-center">
          <span className="mr-2">←</span> Back to Academy
        </Link>
      </div>

      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Module 2 • Intermediate Level</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          FCPO: Trading the Global Benchmark
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Bursa Malaysia's Crude Palm Oil Futures (FCPO) is the undeniable global benchmark for the pricing of palm oil. To trade it profitably, you must understand the intertwined macroeconomic and agricultural forces driving its volatility.
        </p>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* Section 1 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">1. The Supply Side: Weather & Yield Cycles</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Malaysia and Indonesia collectively account for over 85% of global palm oil production. Because of this massive concentration, any local agricultural disruption instantly shocks the FCPO market.
          </p>
          <ul className="list-disc pl-6 space-y-4 text-slate-600 mb-6">
            <li><strong>El Niño / La Niña:</strong> Severe weather patterns that bring prolonged droughts or excessive flooding directly damage fresh fruit bunch (FFB) yields, predictably driving FCPO prices higher due to supply scarcity.</li>
            <li><strong>Labor Shortages:</strong> Palm oil harvesting is famously labor-intensive. Shortages in foreign labor (common during geopolitical policy changes) bottleneck production output.</li>
            <li><strong>Biological Tree Cycles:</strong> Production naturally peaks between August and October, normally exerting seasonal downward pressure on prices during these months.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">2. The Demand Side: Exports & Geopolitics</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            While supply is highly concentrated, demand is massively dispersed. India, China, and the European Union are the largest importers, meaning their domestic policies heavily dictate FCPO movement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-4">
            <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-2">Import Tariffs</h4>
              <p className="text-sm text-slate-600">When India lowers import duties on edible oils to combat domestic inflation, it usually triggers a surge in bulk buying, rocketing FCPO demand.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-2">Festive Seasons</h4>
              <p className="text-sm text-slate-600">Demand reliably spikes in the weeks preceding major festivals like Ramadan and Diwali, as global bulk buyers prepare for immense jumps in food consumption.</p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">3. The Substitution Effect: Soybean Oil (CBOT)</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Palm oil does not trade in a vacuum. It aggressively competes with other edible oils, primarily Soybean Oil traded on the Chicago Board of Trade (CBOT:ZL).
          </p>
          <div className="bg-slate-50 border-l-4 border-brand p-6 rounded-r-xl">
            <h4 className="font-bold text-slate-900 mb-2">Market Correlation</h4>
            <p className="text-sm text-slate-600">
              Palm oil is traditionally traded at a structural discount to soybean oil. If soybean oil prices spike due to a poor US harvest, global buyers instantly switch their procurement to the cheaper alternative (Palm Oil), driving FCPO up sequentially. Professional traders always keep CBOT Soy Oil open on their secondary platforms to anticipate FCPO momentum.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">4. Biodiesel Mandates</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            A massive portion of raw palm oil is refined into biofuel. Governments in Indonesia (B35 mandate) and Malaysia legally enforce the blending of palm-based biodiesel into traditional fossil fuels.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
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
