import React from 'react';

export default function InputPanel({ priorities, setPriorities }) {
  const handleChange = (e, field) => {
    setPriorities(prev => ({
      ...prev,
      [field]: parseInt(e.target.value)
    }));
  };

  const WeightSelector = ({ label, value, field }) => (
    <div className="mb-5">
      <label className="flex justify-between items-center text-sm font-medium text-brand-slate-50 mb-2">
        {label}
        <span className="text-xs font-mono text-brand-indigo-400 bg-brand-indigo-500/10 px-2 py-1 rounded border border-brand-indigo-500/20">{value}%</span>
      </label>
      <select 
        value={value} 
        onChange={(e) => handleChange(e, field)}
        className="w-full p-2.5 rounded-lg border border-brand-slate-700 bg-brand-slate-900 text-brand-slate-300 text-sm focus:ring-2 focus:ring-brand-indigo-500 focus:border-brand-indigo-500 outline-none transition-all appearance-none cursor-pointer"
      >
        <option value={0}>Ignored (0%)</option>
        <option value={20}>Low Priority (20%)</option>
        <option value={50}>Medium Priority (50%)</option>
        <option value={80}>High Priority (80%)</option>
        <option value={100}>Critical (100%)</option>
      </select>
    </div>
  );

  return (
    <div className="bg-brand-slate-800/50 backdrop-blur-sm border border-brand-slate-700/50 p-8 rounded-2xl shadow-2xl">
      <div className="flex justify-between items-center border-b border-brand-slate-700/50 pb-5 mb-8">
        <span className="text-xs tracking-widest text-brand-slate-400 font-semibold uppercase">01 / Define Constraints</span>
        <span className="bg-brand-indigo-500/10 text-brand-indigo-400 px-3 py-1 text-xs font-bold rounded-full border border-brand-indigo-500/20 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-brand-indigo-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
          SYSTEM READY
        </span>
      </div>
      
      <h3 className="text-2xl font-heading font-semibold text-brand-slate-50 mb-6">Packaging Parameters</h3>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <div>
          <label className="block text-xs font-medium text-brand-slate-400 mb-2 uppercase tracking-wide">Target Product</label>
          <select className="w-full p-3 rounded-lg border border-brand-slate-700 bg-brand-slate-900 text-brand-slate-300 text-sm focus:ring-2 focus:ring-brand-indigo-500 focus:border-brand-indigo-500 outline-none transition-all appearance-none cursor-pointer">
            <option>Milk & dairy</option>
            <option>Meat & poultry</option>
            <option>Dry snacks</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-brand-slate-400 mb-2 uppercase tracking-wide">Form Factor</label>
          <select className="w-full p-3 rounded-lg border border-brand-slate-700 bg-brand-slate-900 text-brand-slate-300 text-sm focus:ring-2 focus:ring-brand-indigo-500 focus:border-brand-indigo-500 outline-none transition-all appearance-none cursor-pointer">
            <option>Rigid Container</option>
            <option>Flexible Film</option>
            <option>Thermoformed Tray</option>
          </select>
        </div>
      </div>

      <h4 className="text-sm font-medium text-brand-slate-400 uppercase tracking-widest mb-6 border-b border-brand-slate-700/50 pb-2">Optimization Weights</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
        <WeightSelector label="O₂ Transmission Barrier" value={priorities.oxygen} field="oxygen" />
        <WeightSelector label="Moisture Vapor Barrier" value={priorities.moisture} field="moisture" />
        <WeightSelector label="Tensile Strength" value={priorities.strength} field="strength" />
        <WeightSelector label="Optical Clarity" value={priorities.transparency} field="transparency" />
      </div>

      <div className="mt-8 pt-6 border-t border-brand-slate-700/50 flex items-center justify-center gap-3 text-brand-indigo-400 text-sm font-medium">
        <svg className="w-4 h-4 animate-spin text-brand-indigo-500" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Continuous evaluation active
      </div>
    </div>
  );
}
