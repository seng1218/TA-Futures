import Link from 'next/link';

const products = [
  {
    emoji: '🌴',
    code: 'FCPO',
    name: 'Crude Palm Oil',
    desc: "Malaysia's benchmark CPO contract.",
    color: 'bg-green-50 dark:bg-green-950/40 border-green-100 dark:border-green-900 hover:border-green-300 dark:hover:border-green-700',
    accent: 'text-green-700 dark:text-green-400',
  },
  {
    emoji: '📈',
    code: 'FKLI',
    name: 'KLCI Futures',
    desc: 'Trade the Kuala Lumpur Composite Index with high leverage.',
    color: 'bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900 hover:border-blue-300 dark:hover:border-blue-700',
    accent: 'text-blue-700 dark:text-blue-400',
  },
  {
    emoji: '🥇',
    code: 'FGLD',
    name: 'Gold Futures',
    desc: 'Safe-haven commodity futures on Bursa Malaysia.',
    color: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-100 dark:border-yellow-900 hover:border-yellow-300 dark:hover:border-yellow-700/50',
    accent: 'text-yellow-700 dark:text-yellow-400',
  },
  {
    emoji: '🌿',
    code: 'FEPO',
    name: 'East Malaysia CPO',
    desc: 'FEPO — East Malaysia Crude Palm Oil futures contract.',
    color: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900 hover:border-emerald-300 dark:hover:border-emerald-700',
    accent: 'text-emerald-700 dark:text-emerald-400',
  },
  {
    emoji: '🫒',
    code: 'FSOY',
    name: 'Soybean Oil',
    desc: 'Track soybean oil futures for commodity diversification.',
    color: 'bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900 hover:border-orange-300 dark:hover:border-orange-700',
    accent: 'text-orange-700 dark:text-orange-400',
  },
  {
    emoji: '🌙',
    code: 'T+1',
    name: 'Night Trading',
    desc: 'Extended session from 9:00 PM – 11:00 PM (Mon–Thu).',
    color: 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900 hover:border-indigo-300 dark:hover:border-indigo-700',
    accent: 'text-indigo-700 dark:text-indigo-400',
  },
];

export default function ProductsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100 dark:border-slate-800">
      <div className="text-center mb-14">
        <span className="inline-block text-brand text-sm font-bold uppercase tracking-widest mb-3">Products Available</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Trade <span className="text-brand">BMD Derivatives</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
          Access a comprehensive range of derivatives contracts listed on Bursa Malaysia Derivatives Berhad — all from a single account.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {products.map(({ emoji, code, name, desc, color, accent }) => (
          <div
            key={code}
            className={`group relative border rounded-2xl p-7 transition-all duration-300 hover:shadow-lg ${color}`}
          >
            <div className="text-4xl mb-4">{emoji}</div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-white/70 dark:bg-slate-900/70 border ${accent} border-current/20`}>
                {code}
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white">{name}</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/markets"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand text-brand font-bold rounded-xl hover:bg-brand hover:text-white transition-all duration-300"
        >
          View All Contract Specs →
        </Link>
      </div>
    </section>
  );
}
