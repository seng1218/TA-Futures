export default function SpreadTable() {
  const headers = ['2', '3', '4', '5', '6 - 7', '8 - 9', '10 - 15', '16 - 24'];
  
  const rows = [
    { label: '2', cells: [null, null, null, null, null, null, null, null] },
    { label: '3', cells: ['600', null, null, null, null, null, null, null] },
    { label: '4', cells: ['1,000', '500', null, null, null, null, null, null] },
    { label: '5', cells: ['1,500', '1,000', '700', null, null, null, null, null] },
    { label: '6 - 7', cells: ['1,800', '1,600', '1,500', '1,000', '500', null, null, null] },
    { label: '8 - 9', cells: ['2,500', '2,200', '2,000', '1,600', '1,200', '500', null, null] },
    { label: '10 - 15', cells: ['3,900', '3,800', '3,500', '3,200', '2,900', '2,100', '1,600', null] },
    { label: '16 - 24', cells: ['4,400', '4,000', '3,700', '3,400', '3,100', '2,400', '1,900', '1,200'] },
  ];

  return (
    <div className="w-full mt-16">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">CPO Intracommodity Spread Charge</h2>
        <p className="text-slate-600 mt-1">Matrix for calculating margin spread charges across different contract months.</p>
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl shadow-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-slate-200">
                <th className="py-4 px-6 text-xs font-bold text-brand uppercase tracking-wider text-left">
                  Contract Month
                </th>
                {headers.map((h, i) => (
                  <th key={i} className="py-4 px-4 text-xs font-bold text-brand uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-50 transition-colors group">
                  <td className="py-4 px-6 text-sm font-bold text-slate-900 text-left group-hover:text-brand transition-colors">
                    {row.label}
                  </td>
                  {row.cells.map((cell, cIdx) => (
                    <td key={cIdx} className={`py-4 px-4 text-sm font-medium ${cell ? 'text-slate-700' : 'bg-slate-50/50 text-slate-300'}`}>
                      {cell ? cell : '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
