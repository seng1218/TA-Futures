import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Futures 101 | TA Futures Academy",
  description: "Learn the fundamentals of derivative contracts, margin, and leverage.",
};

export default function Futures101Page() {
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
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Module 1 • Beginner Level</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
          Futures 101: The Core Fundamentals
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
          Welcome to the derivatives market. Before executing your first trade, it is paramount that you understand the fundamental mechanics driving these highly liquid, leveraged instruments.
        </p>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Section 1 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">1. What is a Futures Contract?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            A futures contract is a legally binding agreement to buy or sell a specific underlying asset (such as Crude Palm Oil, Gold, or a Stock Index) at a predetermined price on a specified date in the future.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Unlike trading physical stocks, you don't instantly "own" the asset when you buy a futures contract. Instead, you are placing an obligation to own it later. However, the vast majority of traders never take physical delivery—they offset (close) their positions before the expiration date to simply capture the difference in price.
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/50 border-l-4 border-brand p-6 rounded-r-xl transition-colors">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Real-World Example</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">If you anticipate palm oil prices will rise due to supply constraints, you can "Buy" an FCPO contract today at RM 4,500. If the price jumps to RM 4,600 next week, you can sell your contract back to the market, locking in a RM 100 per tonne profit times the contract multiplier (25 tonnes).</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">2. The Power of Leverage & Margin</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Leverage is what makes futures trading so capital efficient. You do not need the full notional value of the contract to trade it. Instead, you deposit a fraction of the total value to prove you can cover potential losses. This deposit is known as <strong>Margin</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-4">
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Initial Margin</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">The exact minimum amount of capital required in your account to open a new position. Currently, to trade 1 lot of FCPO, the initial margin is roughly RM 9,000.</p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Maintenance Margin</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">The absolute minimum balance required to keep the position open dynamically during adverse price movement. If your balance dips below this, you face a <strong>Margin Call</strong>.</p>
            </div>
          </div>

          <p className="text-slate-600 dark:text-red-300 leading-relaxed bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 p-5 rounded-xl border border-red-100 dark:border-red-800/50 transition-colors">
            <strong>Warning:</strong> Leverage is a double-edged sword. While it exponentially magnifies your gains, it identically magnifies your losses. An improperly hedged position can result in losses exceeding your initial deposit.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">3. Going Long vs. Going Short</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            In traditional equity markets, you typically buy a stock and hope it goes up (Going Long). If the market collapses, you simply lose money. In the futures market, you can just as easily profit from a falling market by <strong>Going Short</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-4 text-slate-600 dark:text-slate-400 mb-6 transition-colors">
            <li><strong>Going Long (Buying):</strong> You believe the asset price will increase. You buy now, intending to sell later at a higher price.</li>
            <li><strong>Going Short (Selling):</strong> You believe the asset price will crash. You sell the contract immediately upfront, intending to buy it back later at a drastically lower price. The difference is your profit.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">4. Mark-to-Market Settlement</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Futures contracts employ a system called "Mark-to-Market", which settles your account dynamically at the end of every trading session.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 transition-colors">
            Unlike stocks where your profit/loss exists "on paper" until you sell, a futures exchange continuously credits or debits your cash balance based on the day's settlement price. If your position is wildly profitable, the cash is actually swept into your account overnight. If you are experiencing heavy losses, cash is drained from your account overnight.
          </p>
          <div className="bg-slate-900 text-white rounded-2xl p-8 text-center mt-8">
            <h3 className="text-2xl font-bold mb-3">Ready to Apply These Concepts?</h3>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">Now that you understand the mechanics, test your risk management on our live execution platforms.</p>
            <Link href="/platforms" className="inline-block bg-brand hover:bg-brand-light text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-brand/20">
              Download Pro Terminal
            </Link>
          </div>
        </div>

      </article>
    </main>
  );
}
