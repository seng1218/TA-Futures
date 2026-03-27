import { ShieldCheck, TrendingUp, Headphones, Building2 } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Regulated',
    desc: 'Fully regulated by the Securities Commission Malaysia (SC) and a licensed Futures Broker of Bursa Malaysia Derivatives.',
  },
  {
    icon: Building2,
    title: 'Established Since 1995',
    desc: 'A subsidiary of TA Enterprise Berhad with over 29 years of experience serving retail and professional traders.',
  },
  {
    icon: TrendingUp,
    title: 'Direct Bursa BMD Access',
    desc: 'Direct market access to FCPO, FKLI, Gold Futures, and all BMD-listed derivatives with fast execution.',
  },
  {
    icon: Headphones,
    title: 'Professional Dealing Desk',
    desc: 'Our dedicated dealing desk is available during all trading hours — day and night sessions included.',
  },
];

export default function WhyTAF() {
  return (
    <section className="relative bg-slate-900 py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-brand text-sm font-bold uppercase tracking-widest mb-3">Why Choose TAF</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Your Trusted Partner in <span className="text-brand">Futures Trading</span>
          </h2>
          <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            TA Futures combines decades of institutional experience with modern trading infrastructure to give you the edge.
          </p>
        </div>

        {/* 4-Col Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-brand/10 border border-brand/20 rounded-xl mb-6 group-hover:bg-brand/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
