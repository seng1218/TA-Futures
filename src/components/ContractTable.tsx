'use client';

import { useState } from 'react';

// Mock database: In production, this data is fetched from your API/CMS
const contractData = [
  { id: 1, name: 'Crude Palm Oil', symbol: 'FCPO', category: 'Commodity', margin: 'MYR 9,000', tickSize: 'MYR 25.00', hours: '10:30-12:30, 14:30-18:00, 21:00-23:00 (T+1)' },
  { id: 2, name: 'East Malaysia CPO', symbol: 'FEPO', category: 'Commodity', margin: 'MYR 9,000', tickSize: 'MYR 25.00', hours: '09:00-12:30, 14:30-18:00, 21:00-23:00 (T+1)' },
  { id: 3, name: 'Crude Palm Kernel Oil', symbol: 'FPKO', category: 'Commodity', margin: 'MYR 9,000', tickSize: 'MYR 25.00', hours: '10:30-12:30, 14:30-18:00, 21:00-23:00 (T+1)' },
  { id: 4, name: 'FTSE Bursa Malaysia KLCI', symbol: 'FKLI', category: 'Equity', margin: 'MYR 5,000', tickSize: '0.5 pt (MYR 25)', hours: '08:45-12:45, 14:30-17:15, 21:00-02:30 (T+1)' },
  { id: 5, name: 'FBM Mid 70 Index', symbol: 'FM70', category: 'Equity', margin: 'MYR 6,500', tickSize: '5 pts (MYR 20)', hours: '08:45-12:45, 14:30-17:15, 21:00-02:30 (T+1)' },
  { id: 6, name: 'Gold Futures', symbol: 'FGLD', category: 'Commodity', margin: 'MYR 15,000', tickSize: 'USD 0.10 (MYR 4)', hours: '09:00-12:30, 14:30-17:30, 21:00-02:30 (T+1)' },
  { id: 7, name: 'Soybean Oil Futures', symbol: 'FSOY', category: 'Commodity', margin: 'USD 2,500', tickSize: 'USD 0.25 (USD 6.25)', hours: '09:00-12:30, 13:30-18:00, 21:00-23:00 (T+1)' },
  { id: 8, name: 'Options on FCPO', symbol: 'OCPO', category: 'Options', margin: 'Risk-based', tickSize: 'MYR 12.50', hours: '10:30-12:30, 14:30-18:00, 21:00-23:00 (T+1)' },
  { id: 9, name: 'Options on FKLI', symbol: 'OKLI', category: 'Options', margin: 'Risk-based', tickSize: '0.1 pt (MYR 5.00)', hours: '08:45-12:45, 14:30-17:15, 21:00-02:30 (T+1)' },
];

export default function ContractTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'ALL' | 'Commodity' | 'Equity' | 'Options'>('ALL');

  // Filter logic
  const filteredData = contractData.filter((contract) => {
    const matchesSearch = contract.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filter === 'ALL' || contract.category === filter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full">
      {/* Control Panel: Search & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

        {/* Search Bar */}
        <div className="w-full md:w-1/3 relative">
          <input
            type="text"
            placeholder="Search contracts (e.g., FCPO, Gold)..."
            className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl py-3 px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Toggle Tabs */}
        <div className="flex bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-1 w-full md:w-auto overflow-x-auto">
          {['ALL', 'Commodity', 'Equity', 'Options'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab as 'ALL' | 'Commodity' | 'Equity' | 'Options')}
              className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all ${filter === tab
                ? 'bg-brand text-white shadow-md'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* The Data Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-xl shadow-slate-200 dark:shadow-none">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <th className="py-4 px-6 text-xs font-bold text-brand uppercase tracking-wider">Product</th>
                <th className="py-4 px-6 text-xs font-bold text-brand uppercase tracking-wider">Symbol</th>
                <th className="py-4 px-6 text-xs font-bold text-brand uppercase tracking-wider">Asset Class</th>
                <th className="py-4 px-6 text-xs font-bold text-brand uppercase tracking-wider">Initial Margin</th>
                <th className="py-4 px-6 text-xs font-bold text-brand uppercase tracking-wider">Tick Size</th>
                <th className="py-4 px-6 text-xs font-bold text-brand uppercase tracking-wider">Trading Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredData.length > 0 ? (
                filteredData.map((contract) => (
                  <tr key={contract.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group">
                    <td className="py-4 px-6 text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-brand transition-colors">{contract.name}</td>
                    <td className="py-4 px-6 text-sm font-mono text-slate-500 dark:text-slate-400">{contract.symbol}</td>
                    <td className="py-4 px-6">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
                        {contract.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm font-mono text-slate-700 dark:text-slate-300">{contract.margin}</td>
                    <td className="py-4 px-6 text-sm font-mono text-slate-700 dark:text-slate-300">{contract.tickSize}</td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">{contract.hours}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-500 dark:text-slate-400">
                    No contracts found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
