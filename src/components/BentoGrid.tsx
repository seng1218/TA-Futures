'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock margin data (In production, this comes from your backend)
const marginData = {
  FCPO: { name: 'Crude Palm Oil (FCPO)', margin: 9000, currency: 'MYR' },
  FEPO: { name: 'East Malaysia CPO (FEPO)', margin: 9000, currency: 'MYR' },
  FPKO: { name: 'Crude Palm Kernel Oil (FPKO)', margin: 9000, currency: 'MYR' },
  FKLI: { name: 'KLCI Futures (FKLI)', margin: 5000, currency: 'MYR' },
  FM70: { name: 'FBM Mid 70 Index (FM70)', margin: 6500, currency: 'MYR' },
  FGLD: { name: 'Gold Futures (FGLD)', margin: 15000, currency: 'MYR' },
  FSOY: { name: 'Soybean Oil Futures (FSOY)', margin: 2500, currency: 'USD' },
};

export default function BentoGrid() {
  const [contract, setContract] = useState<keyof typeof marginData>('FCPO');
  const [lots, setLots] = useState<number>(1);

  const selectedData = marginData[contract];
  const totalMargin = selectedData.margin * lots;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="mb-10">
         <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">Trader Utilities</h2>
         <p className="text-slate-600 dark:text-slate-400 text-lg">Calculate risk and execute trades with zero friction.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

        {/* Tile 1: Interactive Margin Calculator (Spans 2 columns) */}
        <div className="col-span-1 lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-brand/40 transition-all duration-300 shadow-xl shadow-slate-200 dark:shadow-none">
           <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
             <span className="bg-brand/10 text-brand p-2.5 rounded-xl mr-4 border border-brand/20">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
             </span>
             Margin Calculator
           </h3>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
             <div>
               <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Select Contract</label>
               <select
                 className="w-full bg-gray-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all appearance-none cursor-pointer"
                 value={contract}
                 onChange={(e) => setContract(e.target.value as keyof typeof marginData)}
               >
                 {Object.entries(marginData).map(([key, data]) => (
                   <option key={key} value={key}>{data.name}</option>
                 ))}
               </select>
             </div>
             <div>
               <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Number of Lots</label>
               <input
                 type="number"
                 min="1"
                 className="w-full bg-gray-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all"
                 value={lots}
                 onChange={(e) => setLots(Math.max(1, parseInt(e.target.value) || 1))}
               />
             </div>
           </div>

           <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
             <div>
               <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Total Margin Required</p>
               <p className="text-4xl font-mono font-bold text-brand">
                 {selectedData.currency} {totalMargin.toLocaleString()}
               </p>
             </div>
             <Link href="/markets" className="text-sm text-brand hover:text-brand-light font-bold underline underline-offset-4 transition-colors">
               View Full Specs
             </Link>
           </div>
        </div>

        {/* Tile 2: Platform Access */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col hover:border-brand/40 transition-all duration-300 shadow-xl shadow-slate-200 dark:shadow-none">
           <div>
             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">TAF Mobile</h3>
             <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Trade FCPO and all BMD futures on the go. Scan to instantly download the TAF Mobile app.</p>
             
             <div className="flex gap-4 justify-between w-full">
               {/* App Store QR Box */}
               <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6 transition-all hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600">
                 <Image src="/qr-ios.jpg" alt="iOS QR Code" width={96} height={96} className="mb-4 rounded-md" unoptimized />
                 <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">App Store</span>
                 <span className="text-[10px] text-slate-500 dark:text-slate-500 mt-1 uppercase">iOS</span>
               </div>
               
               {/* Play Store QR Box */}
               <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-6 transition-all hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600">
                 <Image src="/qr-android.jpg" alt="Android QR Code" width={96} height={96} className="mb-4 rounded-md" unoptimized />
                 <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest">Google Play</span>
                 <span className="text-[10px] text-slate-500 dark:text-slate-500 mt-1 uppercase">Android</span>
               </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}