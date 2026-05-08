import React, { useState } from 'react';

const atomicStages = [
  {
    level: 1,
    name: "Atoms",
    tagline: "The Basic Building Blocks",
    description: "The most basic, indivisible UI elements. They cannot be broken down further without losing their function. On their own, they 'don't do much,' but they are foundational.",
    examples: "Buttons, Input Fields, Icons, Fonts, Color Swatches.",
    render: () => (
      <div className="flex flex-col items-center justify-center w-full h-full space-y-8 animate-fadeIn">
        <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Isolated Elements</p>
        <div className="flex gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
           {/* Atom 1: Button */}
           <div className="flex flex-col items-center gap-2">
             <button className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg shadow hover:bg-indigo-700 pointer-events-none">Button</button>
             <span className="text-[10px] font-mono text-slate-400">Button Atom</span>
           </div>
           
           {/* Atom 2: Input */}
           <div className="flex flex-col items-center gap-2">
             <input type="text" placeholder="Input Field" className="px-4 py-2 border border-slate-300 rounded-lg bg-slate-50 w-32 pointer-events-none" readOnly />
             <span className="text-[10px] font-mono text-slate-400">Input Atom</span>
           </div>
           
           {/* Atom 3: Icon */}
           <div className="flex flex-col items-center gap-2">
             <div className="w-10 h-10 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center border border-indigo-100">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
             </div>
             <span className="text-[10px] font-mono text-slate-400">Icon Atom</span>
           </div>
        </div>
      </div>
    )
  },
  {
    level: 2,
    name: "Molecules",
    tagline: "Simple Combinations",
    description: "When atoms come together, they form molecules. These are simple, portable, and reusable components that have a specific function.",
    examples: "Search Forms (Input + Button + Icon), Profile Cards, Alert Banners.",
    render: () => (
      <div className="flex flex-col items-center justify-center w-full h-full space-y-8 animate-fadeIn">
         <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Atoms Combined for Function</p>
         <div className="flex flex-col items-center">
            <div className="flex items-center p-2 bg-white rounded-xl shadow-lg border border-slate-200 w-full max-w-md relative">
              
              {/* Overlay labels showing the atoms */}
              <div className="absolute -top-8 left-4 text-[10px] font-mono text-indigo-500 bg-indigo-50 px-2 py-1 rounded border border-indigo-100">Icon Atom</div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">Input Atom</div>
              <div className="absolute -top-8 right-2 text-[10px] font-mono text-pink-500 bg-pink-50 px-2 py-1 rounded border border-pink-100">Button Atom</div>

              <div className="pl-3 text-slate-400 shrink-0 border-2 border-indigo-200 border-dashed rounded-lg p-1">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <div className="flex-1 border-2 border-emerald-200 border-dashed rounded-lg mx-2">
                  <input type="text" placeholder="Search for products..." className="w-full py-2 px-3 focus:outline-none text-slate-700 bg-transparent pointer-events-none" readOnly />
              </div>
              <div className="border-2 border-pink-200 border-dashed rounded-lg p-0.5">
                  <button className="px-5 py-2 bg-slate-900 text-white rounded-lg font-medium pointer-events-none">
                    Search
                  </button>
              </div>
            </div>
            <div className="mt-12 text-sm font-bold text-slate-800 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
               = The "Search" Molecule
            </div>
         </div>
      </div>
    )
  },
  {
    level: 3,
    name: "Organisms",
    tagline: "Complex UI Sections",
    description: "Complex sections created by combining molecules with other molecules or atoms. They make the website engaging and represent distinct sections of an interface.",
    examples: "Headers, Footers, Product Grids, Pricing Tables.",
    render: () => (
      <div className="flex flex-col items-center justify-center w-full h-full space-y-6 animate-fadeIn">
        <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-4">Molecules + Atoms Combined</p>
        <div className="w-full max-w-3xl bg-white border-2 border-slate-800 rounded-xl shadow-xl p-4 flex flex-col md:flex-row items-center justify-between relative">
            <div className="absolute -top-3 left-4 bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider">
               Header Organism
            </div>
            
            {/* Logo Atom */}
            <div className="font-black text-2xl text-indigo-600 tracking-tighter border-2 border-dashed border-indigo-200 p-2 rounded relative">
               <span className="absolute -bottom-6 left-0 text-[9px] font-mono text-indigo-500 whitespace-nowrap">Logo Atom</span>
               NEXUS.
            </div>
            
            {/* Nav Links Molecule */}
            <div className="flex gap-6 text-sm font-bold text-slate-500 border-2 border-dashed border-emerald-200 p-3 rounded-lg relative mt-4 md:mt-0">
               <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-emerald-600 whitespace-nowrap">Navigation Molecule</span>
               <span className="cursor-pointer">Home</span>
               <span className="cursor-pointer">Features</span>
               <span className="cursor-pointer">Pricing</span>
            </div>

            {/* CTA Molecule */}
            <div className="flex items-center gap-3 border-2 border-dashed border-pink-200 p-2 rounded-lg relative mt-4 md:mt-0">
               <span className="absolute -bottom-6 right-0 text-[9px] font-mono text-pink-500 whitespace-nowrap">Action Molecule</span>
               <span className="text-sm font-bold text-slate-600">Login</span>
               <button className="px-5 py-2 bg-indigo-600 text-white text-sm rounded-lg font-bold">Start Free</button>
            </div>
        </div>
      </div>
    )
  },
  {
    level: 4,
    name: "Templates",
    tagline: "The Structural Glue",
    description: "Templates act as the 'glue' that holds organisms together. They provide a home for organisms, allowing designers to see how components look and function within a layout without using real content (Wireframes).",
    examples: "Homepage Wireframe, Blog Post Layout, Dashboard Skeleton.",
    render: () => (
      <div className="flex flex-col items-center justify-center w-full h-full animate-fadeIn py-8 overflow-y-auto">
         <div className="w-full max-w-2xl bg-white border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col gap-6 opacity-80 shadow-sm relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-200 text-slate-600 text-[10px] px-3 py-1 rounded-full font-mono font-bold uppercase tracking-widest">
               Page Template (Wireframe)
            </div>
            
            {/* Header Organism Placeholder */}
            <div className="w-full h-16 bg-slate-100 rounded-lg flex justify-between items-center px-6 border border-slate-200 relative">
               <div className="absolute top-1 left-2 text-[8px] text-slate-400 font-mono uppercase">Header Organism</div>
               <div className="w-24 h-6 bg-slate-300 rounded"></div>
               <div className="flex gap-4"><div className="w-12 h-4 bg-slate-200 rounded"></div><div className="w-12 h-4 bg-slate-200 rounded"></div></div>
            </div>

            {/* Hero Organism Placeholder */}
            <div className="w-full h-48 bg-slate-100 rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-4 relative">
               <div className="absolute top-2 left-2 text-[8px] text-slate-400 font-mono uppercase">Hero Organism</div>
               <div className="w-3/4 h-8 bg-slate-300 rounded-md"></div>
               <div className="w-1/2 h-4 bg-slate-200 rounded"></div>
               <div className="w-32 h-10 bg-slate-300 rounded-lg mt-2"></div>
            </div>

            {/* Grid Organism Placeholder */}
            <div className="grid grid-cols-3 gap-4 relative pt-4">
               <div className="absolute top-0 left-2 text-[8px] text-slate-400 font-mono uppercase">Feature Grid Organism</div>
               <div className="h-32 bg-slate-100 rounded-lg border border-slate-200"></div>
               <div className="h-32 bg-slate-100 rounded-lg border border-slate-200"></div>
               <div className="h-32 bg-slate-100 rounded-lg border border-slate-200"></div>
            </div>
         </div>
      </div>
    )
  },
  {
    level: 5,
    name: "Pages",
    tagline: "The Final Experience",
    description: "The final stage where real content is applied to the templates. Pages represent the concrete interface that users actually see and experience, used to test if the design works with actual data.",
    examples: "The Live Website, The Final High-Fidelity Prototype.",
    render: () => (
      <div className="flex flex-col items-center justify-center w-full h-full animate-fadeIn py-8 overflow-y-auto">
         <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] px-3 py-1 rounded-full font-mono font-bold uppercase tracking-widest z-10 shadow-md">
               Final Page (Real Content)
            </div>
            
            {/* Header Organism */}
            <div className="w-full flex justify-between items-center pb-4 border-b border-slate-100 mt-2">
               <div className="font-black text-2xl text-slate-900 tracking-tighter flex items-center gap-2">
                  <div className="w-6 h-6 bg-indigo-600 rounded-md"></div> NEXUS
               </div>
               <div className="hidden sm:flex gap-6 text-sm font-bold text-slate-500">
                  <span className="text-slate-900">Platform</span>
                  <span>Solutions</span>
                  <span>Pricing</span>
               </div>
               <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-bold rounded-lg transition-colors">Sign In</button>
            </div>

            {/* Hero Organism */}
            <div className="w-full bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-10 flex flex-col items-center text-center gap-4 border border-indigo-100">
               <span className="bg-indigo-100 text-indigo-700 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest">Version 2.0 is Live</span>
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">Design smarter,<br/>not harder.</h2>
               <p className="text-slate-600 max-w-md mt-2">NEXUS is the premier atomic design framework that scales with your growing team.</p>
               <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 mt-4 transition-transform hover:scale-105">Get Started for Free</button>
            </div>

            {/* Grid Organism */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2 group hover:border-indigo-300 transition-colors">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">⚡</div>
                  <h3 className="font-bold text-slate-900">Lightning Fast</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Built on edge architecture for zero latency loading.</p>
               </div>
               <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2 group hover:border-emerald-300 transition-colors">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">🛡️</div>
                  <h3 className="font-bold text-slate-900">Enterprise Secure</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Bank-grade encryption protecting your data 24/7.</p>
               </div>
               <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2 group hover:border-pink-300 transition-colors">
                  <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">✨</div>
                  <h3 className="font-bold text-slate-900">Pixel Perfect</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Flawless rendering across every modern device.</p>
               </div>
            </div>
         </div>
      </div>
    )
  }
];

export default function AtomicMethodologyApp() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = atomicStages[activeStageIndex];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col">
      
      {/* HEADER */}
      <header className="px-8 py-6 border-b border-slate-800 shrink-0">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-white mb-2">Atomic Design Methodology</h1>
              <p className="text-slate-400 max-w-2xl text-sm">A system for creating web interfaces that are flexible, consistent, and adaptable. Breaking UI down into 5 distinct hierarchical levels.</p>
            </div>
            
            {/* Progress Stepper */}
            <div className="flex items-center gap-1 bg-slate-800 p-1.5 rounded-xl border border-slate-700">
               {atomicStages.map((stage, idx) => (
                  <button 
                     key={stage.level}
                     onClick={() => setActiveStageIndex(idx)}
                     className={`relative flex items-center justify-center px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        activeStageIndex === idx 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : activeStageIndex > idx 
                           ? 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                           : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                     }`}
                  >
                     <span className="hidden sm:inline mr-1.5 opacity-50">0{stage.level}</span>
                     {stage.name}
                  </button>
               ))}
            </div>
         </div>
      </header>

      {/* MAIN CONTENT SPLIT */}
      <main className="flex-1 max-w-6xl w-full mx-auto flex flex-col lg:flex-row overflow-hidden">
         
         {/* Left Side: Context / Theory */}
         <div className="w-full lg:w-1/3 p-8 lg:border-r border-slate-800 flex flex-col justify-center bg-slate-900/50 relative overflow-y-auto shrink-0">
            {/* Animated background accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 transition-all duration-500"></div>
            
            <div className="space-y-6">
               <div>
                  <span className="text-indigo-400 font-mono text-sm font-bold tracking-widest mb-2 block">Level 0{activeStage.level}</span>
                  <h2 className="text-4xl font-black text-white leading-tight mb-2">{activeStage.name}</h2>
                  <p className="text-lg font-medium text-indigo-300">{activeStage.tagline}</p>
               </div>
               
               <div className="p-5 bg-slate-800/50 rounded-xl border border-slate-700/50 shadow-inner">
                  <p className="text-slate-300 leading-relaxed text-sm">
                     {activeStage.description}
                  </p>
               </div>

               <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Common Examples</h4>
                  <p className="text-slate-200 font-mono text-sm bg-slate-800 px-4 py-3 rounded-lg border border-slate-700">
                     {activeStage.examples}
                  </p>
               </div>

               {/* Navigation Controls */}
               <div className="flex gap-3 pt-6 border-t border-slate-800 mt-8">
                  <button 
                     disabled={activeStageIndex === 0}
                     onClick={() => setActiveStageIndex(prev => prev - 1)}
                     className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-bold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                     ← Prev
                  </button>
                  <button 
                     disabled={activeStageIndex === atomicStages.length - 1}
                     onClick={() => setActiveStageIndex(prev => prev + 1)}
                     className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-bold transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-1 text-center"
                  >
                     Next Level →
                  </button>
               </div>
            </div>
         </div>

         {/* Right Side: Interactive Visualizer Canvas */}
         <div className="flex-1 bg-slate-100 relative overflow-hidden p-4 md:p-8 flex items-center justify-center">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="w-full h-full max-h-[600px] bg-slate-200/50 rounded-3xl border border-white shadow-inner relative overflow-hidden flex flex-col">
               {/* Browser Top Bar for the visualizer */}
               <div className="h-10 bg-slate-300/50 border-b border-slate-300/80 flex items-center px-4 gap-2 shrink-0 backdrop-blur-sm z-10">
                  <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
                  </div>
                  <div className="mx-auto text-[10px] font-mono text-slate-500 bg-white/50 px-3 py-1 rounded-md">
                     Previewing: {activeStage.name}
                  </div>
               </div>

               {/* Stage Render Area */}
               <div className="flex-1 overflow-hidden relative">
                  {/* We call the render function for the currently active stage */}
                  {activeStage.render()}
               </div>
            </div>
         </div>

      </main>
    </div>
  );
}