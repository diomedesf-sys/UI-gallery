import React, { useState } from 'react';


import { unique11Layouts } from './data/unique11';
import { hero18Layouts } from './data/hero18';
import { grid33Layouts } from './data/grid33';
import { properLayouts } from './data/properLayout';
import { designerGuideData } from './data/designerGuide';

// --- DATA: THE LAYOUT ORGANISMS ---
const layoutData = [
    ...unique11Layouts,
    ...hero18Layouts,
    ...grid33Layouts,
    ...properLayouts
];

export default function App() {
  const [viewMode, setViewMode] = useState('layouts'); // 'layouts' or 'guide'
  const [activeIndex, setActiveIndex] = useState(0);
  const [guideIndex, setGuideIndex] = useState(0);
  const [showSpec, setShowSpec] = useState(false);

  const activeLayout = layoutData[activeIndex];
  const activeGuide = designerGuideData[guideIndex];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex overflow-hidden">
      
      {/* Sidebar Navigation */}
      <aside className="w-80 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0 overflow-y-auto shrink-0 shadow-xl z-20 transition-all duration-500">
        
        {/* Branding & Mode Switcher */}
        <div className="p-6 border-b border-gray-100 space-y-6">
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-gray-900">Atomic System<span className="text-blue-600">.</span></h1>
            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-black">Automation Engine v2.0</p>
          </div>

          <div className="flex bg-gray-100 p-1 rounded-xl border border-gray-200">
            <button 
              onClick={() => setViewMode('layouts')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${viewMode === 'layouts' ? 'bg-white shadow-md text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Wireframes
            </button>
            <button 
              onClick={() => setViewMode('guide')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${viewMode === 'guide' ? 'bg-indigo-600 shadow-md text-white' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Designer Guide
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {viewMode === 'layouts' ? (
            ['11 Unique Sections', 'Hero Sections', 'Standard Grids', 'Page Blocks'].map(category => (
               <div key={category} className="mb-8">
                  <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 px-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {category}
                  </h2>
                  <nav className="space-y-1">
                    {layoutData.map((layout, idx) => {
                      const itemCategory = layout.category || '11 Unique Sections';
                      if (itemCategory !== category) return null;
                      return (
                        <button
                          key={layout.id}
                          onClick={() => {
                              setActiveIndex(idx);
                              setShowSpec(false);
                          }}
                          className={`group w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 relative overflow-hidden ${
                            activeIndex === idx 
                            ? 'bg-gray-900 text-white shadow-lg scale-[1.02]' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          <span className="font-bold block relative z-10">{layout.name}</span>
                          {layout.subtitle && (
                            <span className={`text-[10px] font-black uppercase tracking-widest mt-1 block relative z-10 ${
                              activeIndex === idx ? 'text-gray-400' : 'text-blue-500'
                            }`}>{layout.subtitle}</span>
                          )}
                          {activeIndex === idx && (
                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                          )}
                        </button>
                      )
                    })}
                  </nav>
               </div>
            ))
          ) : (
            ['The Why', 'The How', 'The What', 'The Proof', 'The Future'].map(category => (
              <div key={category} className="mb-8">
                <h2 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-4 px-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  {category}
                </h2>
                <nav className="space-y-1">
                  {designerGuideData.map((item, idx) => {
                    if (item.category !== category) return null;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setGuideIndex(idx)}
                        className={`group w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 relative overflow-hidden ${
                          guideIndex === idx 
                          ? 'bg-indigo-600 text-white shadow-lg scale-[1.02]' 
                          : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-900'
                        }`}
                      >
                        <span className="font-bold block relative z-10">{item.title}</span>
                        <span className={`text-[10px] font-black uppercase tracking-widest mt-1 block relative z-10 ${
                          guideIndex === idx ? 'text-indigo-200' : 'text-gray-400'
                        }`}>{item.subtitle}</span>
                        {guideIndex === idx && (
                           <div className="absolute top-0 left-0 w-1 h-full bg-white/50"></div>
                        )}
                      </button>
                    )
                  })}
                </nav>
              </div>
            ))
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
        
        {viewMode === 'layouts' ? (
          <>
            {/* Layout Gallery Header */}
            <header className="min-h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10 py-4 shrink-0 z-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-black text-gray-900 tracking-tight">{activeLayout.name}</h2>
                      {activeLayout.subtitle && (
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{activeLayout.subtitle}</span>
                      )}
                    </div>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-2">
                      <span className="text-gray-300">SOURCE:</span> {activeLayout.video}
                    </p>
                </div>
                <div className="flex gap-2 bg-gray-50 p-1.5 rounded-2xl border border-gray-200 shadow-inner">
                    <button 
                        onClick={() => setShowSpec(false)}
                        className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${!showSpec ? 'bg-white text-gray-900 shadow-md ring-1 ring-gray-200' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        Wireframe
                    </button>
                    <button 
                        onClick={() => setShowSpec(true)}
                        className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${showSpec ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        Atomic Spec
                    </button>
                </div>
            </header>

            {/* Layout Content */}
            <div className="flex-1 overflow-y-auto p-10 bg-gray-50/50 flex flex-col items-center custom-scrollbar">
                <div className="w-full max-w-6xl flex flex-col mb-12">
                    <div className="w-full transition-all duration-500 ease-in-out transform">
                        {showSpec ? (
                            <div className="w-full bg-slate-900 rounded-3xl p-10 text-left font-mono shadow-2xl border border-slate-800 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                  <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                                </div>
                                <div className="text-indigo-500 mb-8 text-[10px] font-black uppercase tracking-[0.3em] border-b border-slate-800 pb-4">Internal System Specification // {activeLayout.id}</div>
                                <div className="space-y-8 text-base">
                                    <div className="flex gap-4">
                                        <span className="text-slate-500 shrink-0 font-bold">TYPE:</span> 
                                        <span className="text-amber-400 font-black">ORGANISM</span>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <span className="text-slate-500 font-bold">STRICT_LOGIC:</span> 
                                        <div className="text-slate-200 pl-8 border-l-2 border-indigo-900 py-2 leading-relaxed bg-slate-800/30 rounded-r-xl p-6 italic">
                                            {activeLayout.spec}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="shadow-2xl rounded-3xl overflow-hidden bg-white ring-1 ring-gray-200 transform transition-transform hover:scale-[1.01] duration-500">
                                <div className="h-12 border-b border-gray-100 bg-gray-50/50 flex items-center px-6 gap-2">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                    </div>
                                    <div className="mx-auto text-[10px] font-black text-gray-300 tracking-widest uppercase">Canvas Preview</div>
                                </div>
                                <div className="p-1">
                                  {activeLayout.component()}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Context Cards */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                          <span className="p-1.5 bg-blue-50 rounded-lg">💡</span>
                          The "Why" (Theory)
                        </h3>
                        <p className="text-gray-600 font-bold leading-relaxed text-lg">{activeLayout.why}</p>
                    </div>
                    
                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                        <div className="absolute top-0 left-0 w-2 h-full bg-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        <h3 className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <span className="p-1.5 bg-red-100 rounded-lg">⚠️</span>
                            Critical Warning
                        </h3>
                        <p className="text-gray-800 font-bold leading-relaxed text-lg">{activeLayout.warning}</p>
                    </div>
                </div>
            </div>
          </>
        ) : (
          <>
            {/* Designer Guide Header */}
            <header className="min-h-20 bg-indigo-600 flex items-center justify-between px-10 py-4 shrink-0 z-10 shadow-lg">
                <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-black text-white tracking-tight">{activeGuide.title}</h2>
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-100 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">{activeGuide.subtitle}</span>
                    </div>
                    <p className="text-[11px] text-indigo-200 font-bold uppercase tracking-wider flex items-center gap-2">
                      <span className="text-indigo-300/50">MODULE:</span> {activeGuide.category}
                    </p>
                </div>
                <div className="text-white/40 font-black text-[10px] uppercase tracking-widest border border-white/20 px-4 py-2 rounded-xl">
                  Curriculum Guide
                </div>
            </header>

            {/* Guide Content */}
            <div className="flex-1 overflow-y-auto p-10 bg-slate-50 flex flex-col items-center custom-scrollbar">
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10">
                  
                  {/* Left Column: Documentation */}
                  <div className="lg:col-span-5 space-y-8">
                    <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>
                      <h3 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-4">Description</h3>
                      <p className="text-slate-700 font-bold text-xl leading-snug">{activeGuide.description}</p>
                    </section>

                    <div className="grid grid-cols-1 gap-6">
                      <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                        <h4 className="text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-2">Actionable Workflow</h4>
                        <p className="text-emerald-900 text-sm font-bold leading-relaxed">{activeGuide.action}</p>
                      </div>

                      <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500"></div>
                        <h4 className="text-[9px] font-black text-amber-600 uppercase tracking-widest mb-2">The "Why" (Science)</h4>
                        <p className="text-amber-900 text-sm font-bold leading-relaxed">{activeGuide.why}</p>
                      </div>

                      <div className="bg-red-50 p-6 rounded-3xl border border-red-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500"></div>
                        <h4 className="text-[9px] font-black text-red-600 uppercase tracking-widest mb-2">Critical Warning</h4>
                        <p className="text-red-900 text-sm font-bold leading-relaxed">{activeGuide.warning}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Source: {activeGuide.source}</span>
                    </div>
                  </div>

                  {/* Right Column: Interactive Visualizer */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden min-h-[500px] flex flex-col transition-all duration-500 hover:shadow-indigo-100">
                       <div className="h-14 border-b border-slate-100 bg-slate-50 flex items-center justify-between px-8 shrink-0">
                          <div className="flex gap-2">
                             <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                             <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                             <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">Live Interactive Demo</span>
                          </div>
                       </div>
                       <div className="flex-1 relative bg-slate-100 flex items-center justify-center overflow-hidden">
                          {activeGuide.component()}
                       </div>
                    </div>
                    
                    <div className="bg-slate-900 p-6 rounded-2xl flex items-center justify-between shadow-xl">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-black text-xs border border-indigo-500/30">
                            v2
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-0.5">Integration Node</p>
                            <p className="text-xs text-white/60 font-bold">This concept feeds directly into the Atomic Spec generator.</p>
                          </div>
                        </div>
                    </div>
                  </div>

                </div>
            </div>
          </>
        )}

        {/* Footer Navigation Bar */}
        <footer className="h-12 bg-white border-t border-gray-100 flex items-center justify-between px-10 shrink-0 text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] z-10">
          <div>© 2026 Web2Story Automation</div>
          <div className="flex gap-8">
            <span className="text-gray-400">Status: Operational</span>
            <span className="text-gray-400">Mode: {viewMode === 'layouts' ? 'Component Gallery' : 'Curriculum Engine'}</span>
          </div>
        </footer>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}} />
    </div>
  );
}