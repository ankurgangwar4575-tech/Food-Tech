import React from 'react';

export default function MaterialTable({ materials }) {
  const getDotColor = (value) => {
    if (value > 7) return 'bg-brand-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]';
    if (value > 4) return 'bg-brand-indigo-400';
    return 'bg-brand-slate-600'; 
  };

  return (
    <div className="mt-32 mb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <div className="text-xs tracking-widest text-brand-indigo-400 font-semibold uppercase mb-3 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
            Material Database
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-slate-50 tracking-tight">Material evidence, kept in context.</h2>
        </div>
        <div className="flex items-center gap-3 bg-brand-slate-800/50 px-4 py-2 rounded-xl border border-brand-slate-700/50">
          <span className="text-4xl font-heading font-bold text-brand-indigo-400 leading-none">{materials.length}</span>
          <span className="text-[10px] text-brand-slate-400 font-semibold uppercase tracking-widest leading-tight">Curated<br/>Materials</span>
        </div>
      </div>

      <div className="w-full border border-brand-slate-700/50 rounded-2xl bg-brand-slate-800/30 overflow-hidden backdrop-blur-sm shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="bg-brand-slate-800/80 text-brand-slate-400 text-xs uppercase tracking-wider font-semibold border-b border-brand-slate-700/50">
                <th className="px-6 py-5">Material Profile</th>
                <th className="px-6 py-5">Primary Application</th>
                <th className="px-6 py-5">O₂ Barrier</th>
                <th className="px-6 py-5">Moisture Barrier</th>
                <th className="px-6 py-5">End-of-Life</th>
                <th className="px-6 py-5">Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-slate-700/50">
              {materials.map((m) => (
                <tr key={m.id} className="hover:bg-brand-slate-800/50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="font-bold text-brand-slate-50 text-base mb-0.5">{m.name}</div>
                    <div className="text-xs text-brand-slate-400 font-medium">{m.fullName}</div>
                  </td>
                  <td className="px-6 py-5 text-brand-slate-300">{m.primaryUse}</td>
                  <td className="px-6 py-5 text-brand-slate-300">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${getDotColor(m.scores.oxygenBarrier)}`}></span>
                      <span className="font-medium">{m.scores.oxygenBarrier > 7 ? 'High' : (m.scores.oxygenBarrier < 4 ? 'Low' : 'Medium')}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-brand-slate-300">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${getDotColor(m.scores.moistureBarrier)}`}></span>
                      <span className="font-medium">{m.scores.moistureBarrier > 7 ? 'High' : (m.scores.moistureBarrier < 4 ? 'Low' : 'Medium')}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-brand-slate-300">
                    <span className="bg-brand-slate-700/50 px-2.5 py-1 rounded text-xs font-medium border border-brand-slate-600/50">
                      {m.recycling}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-brand-slate-200">{m.evidence.level}</span>
                      <span className="text-brand-slate-500">—</span>
                      <a href="#" onClick={(e) => e.preventDefault()} className="text-brand-indigo-500 hover:text-brand-indigo-600 cursor-pointer transition-colors text-xs font-medium flex items-center gap-1">
                        {m.evidence.source}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
