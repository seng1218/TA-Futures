import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Platform Architecture | TA Futures Academy",
  description: "A complete user manual outlining Quick Screen Trading (QST) interface management and order entry.",
};

export default function PlatformArchitecturePage() {
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
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Module 4 • Software Mastery</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
          Architecting QST Desktop
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
          Quick Screen Trading (QST) is our institutional-grade execution layer. It is built strictly for high-frequency order routing, extreme customizability, and absolute stability. Master the architecture below to secure your execution edge.
        </p>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Video Tutorial Embed */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm dark:shadow-none transition-colors">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 px-2 transition-colors">QST Masterclass Video</h3>
          <div className="aspect-video w-full bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative shadow-inner dark:shadow-none transition-colors">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/videoseries?list=PLOGjoJXp0cmqUBXJDF8pdW1-JJFr1bA40"
              title="QST Platform Masterclass Playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Section 1 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">1. Frame Management & Workspaces</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            QST abandons standard cascading browser windows in favor of a hardcore "Frame & Workspace" architecture. This allows day traders to stretch perfectly synchronized layouts across 2, 4, or even 8 monitors simultaneously without software lag.
          </p>

          <div className="my-10 border-8 border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-none transition-colors">
            <Image
              src="/qst-desktop.png"
              alt="QST Desktop Workspace Map"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>

          <ul className="list-disc pl-6 space-y-4 text-slate-600 dark:text-slate-400 mb-6 transition-colors">
            <li><strong>The Core Workspace:</strong> Your primary grid. You can save infinite Workspace Profiles (e.g. "Morning FCPO Scope", "Afternoon US Equities") and swap between them instantly.</li>
            <li><strong>Frame Docking:</strong> Every individual widget (DOM, Chart, Quote Board) is an isolated Frame. You can securely snap, stack, or tab these frames anywhere inside your workspace.</li>
            <li><strong>Link Groups (Color Coding):</strong> A mandatory workflow optimization. By assigning a red color link to your "Quotes Monitor" and your "Order Ticket", clicking any asset instantly auto-fills the ticket, preventing gross execution errors.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">2. The Price Ladder (Depth of Market)</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            The standard Order Entry ticket is too slow for scalping. Professional traders live inside the "Price Ladder" (DOM) frame.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-4">
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 border-t-4 border-t-red-500 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">The Ask Column (Sellers)</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">The red column on the right displays all resting limit sell orders. Clicking inside this column establishes a pending limit order to immediately short the market.</p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 border-t-4 border-t-blue-500 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">The Bid Column (Buyers)</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">The blue column on the left displays all resting limit buy orders. Visually reading the thickness of these two columns dictates immediate short-term momentum.</p>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 border-l-4 border-brand p-6 rounded-r-xl transition-colors">
            <h4 className="font-bold text-slate-900 mb-2">Single-Click Execution</h4>
            <p className="text-sm text-slate-600">
              To drastically reduce drag, enabling single-click order routing inside the Price Ladder bypasses all confirmation dialogs. Your order goes direct-to-exchange natively.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">3. The Quotes Monitor</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Your centralized nervous system. The Quotes Monitor tracks your entire portfolio of monitored assets across one dense spreadsheet.
          </p>

          <div className="my-10 border-8 border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-none transition-colors">
            <Image
              src="/qst-web-lite.png"
              alt="QST Quotes Monitor Spread"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>

          <ul className="list-disc pl-6 space-y-4 text-slate-600 dark:text-slate-400 mb-6 transition-colors">
            <li><strong>Dynamic Sorting:</strong> Instantly sort by % Net Change to detect macroeconomic breakouts across different asset classes.</li>
            <li><strong>Spread Matrices:</strong> QST excels at natively displaying Intercommodity & Intracommodity spread pricing without requiring manual calculation overlays.</li>
            <li><strong>Custom Columns:</strong> Track highly specific institutional metrics like Daily Volume, Open Interest (OI) velocity, and Implied Volatility right on the front page.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">4. Position Tracking & Account Risk</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Unmonitored risk destroys capital. In QST, the <strong>Positions Window</strong> is absolutely mandatory, calculating your Mark-to-Market Realized and Unrealized Profit/Loss per tick linearly.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 transition-colors">
            Additionally, the <strong>Working Orders</strong> tab is separated distinctly from the <strong>Filled Orders</strong> window. <em>Never leave your desk without explicitly validating the Working Orders frame to ensure no unattended limit or stop orders remain active in a volatile market.</em>
          </p>
          <div className="bg-slate-900 text-white rounded-2xl p-8 text-center mt-8">
            <h3 className="text-2xl font-bold mb-3">Install Your Trading System</h3>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">Mastered the theory? Click below to install the QST Desktop Terminal directly onto your machine.</p>
            <Link href="/platforms" className="inline-block bg-brand hover:bg-brand-light text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-brand/20">
              Launch Download Portal
            </Link>
          </div>
        </div>

      </article>
    </main>
  );
}
