import ContractTable from '@/components/ContractTable';
import SpreadTable from '@/components/SpreadTable';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Markets & Contract Specs | TA Futures",
  description: "Explore contract specifications and margin requirements for BMD and CME futures.",
};

export default function MarketsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-10 pb-24 transition-colors">

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 transition-colors">
            Futures <span className="text-brand">Markets</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
            Direct access to the world&apos;s leading derivatives exchanges. Review our comprehensive contract specifications, live margin requirements, and tick sizes to plan your next trade.
          </p>
        </div>
      </section>

      {/* The Data Engine */}
      <section className="max-w-7xl mx-auto px-6">
        <ContractTable />
        <SpreadTable />
      </section>

    </main>
  );
}