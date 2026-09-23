import React, { useState, useEffect } from 'react';
import InputPanel from './components/InputPanel';
import ResultsPanel from './components/ResultsPanel';
import MaterialTable from './components/MaterialTable';
import { runKNNPrediction, getFullDataset } from './ml/engine';

function App() {
  const [priorities, setPriorities] = useState({
    oxygen: 20,
    moisture: 80,
    strength: 50,
    transparency: 50
  });

  const [results, setResults] = useState([]);
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    // Load the full dataset (simulating a database fetch)
    const fullDataset = getFullDataset();
    setDataset(fullDataset);
  }, []);

  // Auto-generate recommendations using KNN when priorities change
  useEffect(() => {
    if (dataset.length === 0) return;
    
    // The ML engine returns the K nearest neighbors
    const kNearestNeighbors = runKNNPrediction(priorities);
    setResults(kNearestNeighbors);
  }, [priorities, dataset]);

  return (
    <div className="min-h-screen bg-brand-slate-900 text-brand-slate-50 font-sans selection:bg-brand-indigo-500/30">
      {/* Header */}
      <header className="px-8 py-6 flex justify-between items-center border-b border-brand-slate-800 bg-brand-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-indigo-500 rounded-xl text-white flex items-center justify-center font-bold font-heading text-xl shadow-[0_0_15px_rgba(37,99,235,0.5)]">M</div>
          <span className="text-2xl font-semibold tracking-tight text-brand-slate-50">MaterialAI</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-brand-slate-400">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="text-brand-indigo-400 hover:text-brand-indigo-500 transition-colors">Dashboard</a>
          <a href="#materials" className="hover:text-brand-slate-50 transition-colors">Materials</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-slate-50 transition-colors">Analytics</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-slate-50 transition-colors">Settings</a>
        </nav>
        <div className="w-10 h-10 bg-brand-slate-800 rounded-full flex items-center justify-center text-xs font-bold border border-brand-slate-700 cursor-pointer hover:bg-brand-slate-700 transition-colors">DS</div>
      </header>

      <main className="max-w-[1400px] mx-auto px-8 pt-16 pb-24">
        {/* Hero Section */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs tracking-widest text-brand-indigo-400 uppercase mb-4 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-indigo-400 animate-pulse"></span>
            Next-Gen Polymer Intelligence
          </div>
          <h1 className="text-5xl md:text-6xl leading-[1.1] mb-6 tracking-tight text-brand-slate-50 font-heading font-bold">
            Engineer the perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo-400 to-brand-emerald-400">polymer</span><br/>for your packaging.
          </h1>
          <p className="text-lg text-brand-slate-400 leading-relaxed">
            Leverage predictive Machine Learning models to balance barrier properties, mechanical strength, and sustainability metrics in real-time.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <InputPanel 
            priorities={priorities} 
            setPriorities={setPriorities} 
          />
          <ResultsPanel results={results} />
        </div>

        <div id="materials" className="pt-8">
          <MaterialTable materials={dataset} />
        </div>
      </main>
    </div>
  );
}

export default App;
