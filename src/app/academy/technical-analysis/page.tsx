import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Technical Analysis | TA Futures Academy",
  description: "Advanced charting setups, price action, and order flow analysis.",
};

export default function TechnicalAnalysisPage() {
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
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Module 3 • Advanced Level</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Systematic Technical Analysis
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          While fundamentals determine the macro-trend over months, technical analysis dictates your entries and exits over hours and minutes. Master price action to pinpoint edge in highly liquid derivative assets.
        </p>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* Section 1 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">1. The Supremacy of Price Action</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Most retail traders crowd their screens with lagging, complex algorithmic indicators. Professional day traders rely primarily on naked "Price Action"—the raw, unfiltered historical movement of price across candlestick charts.
          </p>
          <ul className="list-disc pl-6 space-y-4 text-slate-600 mb-6">
            <li><strong>Support & Resistance:</strong> Invisible psychological boundaries where immense institutional order flow sits. Support halts falling markets; Resistance halts rising markets.</li>
            <li><strong>Trend Structure:</strong> Identifying Higher Highs and Higher Lows (Uptrend) vs Lower Highs and Lower Lows (Downtrend). </li>
            <li><strong>Breakouts vs Fakeouts:</strong> A true breakout through heavy resistance must be backed by massive volume. A fakeout is a rapid sweep of liquidity before the price reverts into its previous range.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">2. Volume & Open Interest (Derivatives Only)</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            In futures trading, you possess a massive advantage over spot markets: absolute data transparency. Every single futures exchange reports two critical metrics that act as lie-detectors for market moves.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-4">
            <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-2">Traded Volume</h4>
              <p className="text-sm text-slate-600">The total number of contracts matching buyers and sellers during a specific timeframe. A massive price spike without accompanying volume is often a short-term anomaly.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-2">Open Interest (OI)</h4>
              <p className="text-sm text-slate-600">The total number of absolute active contracts that remain unsettled. If price is rising and OI is rising rapidly, new institutional money is entering the market, confirming the trend.</p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">3. Moving Averages & Momentum</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            While price action is paramount, moving averages (MAs) are widely respected by institutional algorithms, making them self-fulfilling prophecies.
          </p>
          <div className="bg-slate-50 border-l-4 border-brand p-6 rounded-r-xl">
            <h4 className="font-bold text-slate-900 mb-2">The Exponential Moving Average (EMA)</h4>
            <p className="text-sm text-slate-600">
              Unlike Simple Moving Averages, the EMA places heavy mathematical weight on recent price action. Day traders extensively map the 9-EMA and 21-EMA across the 15-minute chart to gauge intraday momentum shifts and establish strict trailing stop-loss thresholds.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">4. The Depth of Market (DOM)</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Technical analysis on a chart shows you the past. The DOM (often referred to as Level 2 order flow) shows you the immediate future. Accessing a live DOM allows you to visually see resting limit orders queued by other traders.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            If an aggressive seller dumps 600 FCPO contracts into the market, peering at the DOM allows you to instantly see if there is enough resting bid liquidity to absorb the shock, or if the price is guaranteed to crash sequentially through thin layers.
          </p>
          <div className="bg-slate-900 text-white rounded-2xl p-8 text-center mt-8">
             <h3 className="text-2xl font-bold mb-3">Initialize the DOM Layer</h3>
             <p className="text-slate-400 mb-6 max-w-lg mx-auto">Open the QST Pro Terminal to overlay real-time Level 2 Market Depth directly against your charting workspace.</p>
             <Link href="/platforms" className="inline-block bg-brand hover:bg-brand-light text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-brand/20">
               Configure Software
             </Link>
          </div>
        </div>

      </article>
    </main>
  );
}
