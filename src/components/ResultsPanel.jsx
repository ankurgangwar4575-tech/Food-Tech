import React from 'react';

export default function ResultsPanel({ results }) {
  const Bar = ({ label, value, lowLabel="Low", highLabel="High" }) => (
    <div className="flex-1">
      <div className="text-xs font-medium text-brand-slate-400 mb-2 uppercase tracking-wide">{label}</div>
      <div className="w-full h-1.5 bg-brand-slate-700 rounded-full mb-2 overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ 
            width: `${value * 10}%`,
            backgroundColor: value > 7 ? 'var(--color-accent)' : 'var(--color-primary)'
          }}
        ></div>
      </div>
      <div className={`text-xs font-semibold ${value > 7 ? 'text-brand-emerald-400' : 'text-brand-slate-300'}`}>
        {value > 7 ? highLabel : (value < 4 ? lowLabel : "Medium")}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center border-b border-brand-slate-800 pb-5 mb-8">
        <span className="text-xs tracking-widest text-brand-slate-400 font-semibold uppercase">02 / Evaluated Candidates</span>
        <a href="#" onClick={(e) => e.preventDefault()} className="text-xs font-medium text-brand-indigo-500 hover:text-brand-indigo-600 cursor-pointer transition-colors flex items-center gap-1">
          Export Analysis 
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </a>
      </div>
      
      <h3 className="text-2xl font-heading font-semibold text-brand-slate-50 mb-6">Optimal Materials</h3>

      <div className="bg-brand-indigo-500/10 border border-brand-indigo-500/20 p-4 rounded-xl mb-8 text-sm flex items-start gap-3">
        <span className="text-brand-indigo-400 mt-0.5">✦</span>
        <span className="text-brand-slate-300 leading-relaxed">
          Targeting <strong className="text-brand-slate-50 font-medium">milk & dairy</strong> at <strong className="text-brand-slate-50 font-medium">4°C</strong>. KNN Algorithm prediction calculates the Euclidean distance to find the absolute closest material matches to your constraints.
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {results.map((material, idx) => (
          <div 
            key={material.id} 
            className={`p-6 rounded-2xl transition-all duration-300 ${
              idx === 0 
                ? 'bg-brand-slate-800 border-2 border-brand-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.15)] relative overflow-hidden' 
                : 'bg-brand-slate-900/50 border border-brand-slate-700/50 hover:border-brand-slate-600'
            }`}
          >
            {idx === 0 && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            )}
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="flex items-center gap-5">
                <span className="text-sm font-heading font-bold text-brand-slate-500 bg-brand-slate-900 w-8 h-8 rounded-full flex items-center justify-center border border-brand-slate-700">
                  {idx + 1}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl font-heading font-bold text-brand-slate-50 tracking-tight">{material.name}</span>
                    {idx === 0 && (
                      <span className="bg-brand-emerald-400/20 text-brand-emerald-400 border border-brand-emerald-400/30 px-2.5 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider">
                        Top Match
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-brand-slate-400 font-medium">{material.fullName}</div>
                </div>
              </div>
              
              <div className="text-right flex flex-col items-end">
                <div className={`text-4xl font-bold font-heading leading-none mb-1 ${idx === 0 ? 'text-brand-emerald-400' : 'text-brand-slate-50'}`}>
                  {material.matchScore}
                </div>
                <div className="text-[10px] text-brand-slate-500 uppercase tracking-widest font-semibold text-right max-w-[90px]">KNN Match Score</div>
              </div>
            </div>

            <div className="flex gap-6 mb-8 relative z-10">
              <Bar label="O₂ Barrier" value={material.scores.oxygenBarrier} highLabel="High" />
              <Bar label="Moisture" value={material.scores.moistureBarrier} highLabel="Very high" />
              <Bar label="Strength" value={material.scores.strength} highLabel="High" />
            </div>

            <div className="text-sm text-brand-slate-300 leading-relaxed mb-6 relative z-10 bg-brand-slate-900/50 p-4 rounded-lg border border-brand-slate-800/50">
              {material.description}
            </div>

            <div className="flex justify-between items-center text-xs text-brand-slate-400 font-medium relative z-10">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-brand-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                  {material.recycling}
                </span>
                <span className="w-1 h-1 rounded-full bg-brand-slate-600"></span>
                <span>Requires Verification</span>
              </div>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-brand-indigo-500 hover:text-brand-indigo-600 cursor-pointer transition-colors flex items-center gap-1">
                {material.evidence.source} 
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-xs text-brand-slate-500 text-center">
        KNN Match Score is a machine learning calculation based on Euclidean distance, not a substitute for experimental validation or regulatory compliance.
      </div>
    </div>
  );
}
