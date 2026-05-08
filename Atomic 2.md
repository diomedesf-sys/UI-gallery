import React, { useState, useMemo } from 'react';

// --- DATA: GLOSSARY TERMS & MINI-RENDERERS ---
const glossaryData = [
  // --- THE WHY ---
  {
    id: "preattentive-processing",
    category: "The Why",
    term: "Preattentive Processing",
    definition: "The subconscious accumulation of information from the environment. In web design, this means users process visual hierarchy (size, color, contrast) in milliseconds before they consciously read a single word.",
    tags: ["#Psychology", "#Perception", "#Visuals"],
    example: () => (
      <div className="flex flex-col items-center justify-center h-full w-full bg-slate-50 p-6 space-y-8">
        <p className="text-sm text-slate-500 text-center max-w-sm">Notice how your eye is instantly drawn to the red circle before you even process the gray squares.</p>
        <div className="flex items-center gap-8">
          <div className="w-12 h-12 bg-slate-300 rounded-md"></div>
          <div className="w-12 h-12 bg-slate-300 rounded-md"></div>
          <div className="w-24 h-24 bg-red-500 rounded-full shadow-lg shadow-red-500/50 animate-pulse"></div>
          <div className="w-12 h-12 bg-slate-300 rounded-md"></div>
        </div>
      </div>
    )
  },
  {
    id: "gestalt-grouping",
    category: "The Why",
    term: "Gestalt Grouping",
    definition: "Psychological principles explaining how humans naturally perceive objects as organized patterns. The 'Law of Proximity' states that objects near each other are perceived as a related group.",
    tags: ["#Psychology", "#Spacing", "#UI_Logic"],
    example: () => (
      <div className="flex flex-col items-center justify-center h-full w-full bg-slate-50 p-6">
        <div className="flex gap-16">
          {/* Group 1 */}
          <div className="grid grid-cols-2 gap-2 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="w-8 h-8 bg-indigo-400 rounded-full"></div>
            <div className="w-8 h-8 bg-indigo-400 rounded-full"></div>
            <div className="w-8 h-8 bg-indigo-400 rounded-full"></div>
            <div className="w-8 h-8 bg-indigo-400 rounded-full"></div>
            <span className="col-span-2 text-center text-xs font-bold text-indigo-800 mt-2">Group A</span>
          </div>
          {/* Group 2 */}
          <div className="grid grid-cols-2 gap-2 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="w-8 h-8 bg-teal-400 rounded-md"></div>
            <div className="w-8 h-8 bg-teal-400 rounded-md"></div>
            <div className="w-8 h-8 bg-teal-400 rounded-md"></div>
            <div className="w-8 h-8 bg-teal-400 rounded-md"></div>
            <span className="col-span-2 text-center text-xs font-bold text-teal-800 mt-2">Group B</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "squint-test",
    category: "The Why",
    term: "The Squint Test",
    definition: "A visual testing method where you literally squint your eyes (or blur the screen) to see what structural elements stand out. If the primary CTA or heading gets lost in the blur, the visual hierarchy is failing.",
    tags: ["#Workflow", "#Testing", "#Accessibility"],
    example: () => {
      const [blurAmount, setBlurAmount] = useState(0);
      return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-slate-100 p-8 space-y-6 relative">
           <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-sm border border-slate-200 z-10 w-48">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Squint Intensity</label>
              <input type="range" min="0" max="10" value={blurAmount} onChange={(e) => setBlurAmount(e.target.value)} className="w-full accent-blue-600" />
           </div>
           
           <div 
             className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md border border-slate-200 transition-all duration-300"
             style={{ filter: `blur(${blurAmount}px)` }}
           >
              <div className="w-16 h-16 bg-slate-200 rounded-full mb-4"></div>
              <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight">Can you see this when blurred?</h3>
              <p className="text-slate-500 text-sm mb-6">This paragraph text should fade into a gray block, but the header and button should remain distinctly visible.</p>
              <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg">Primary Action</button>
           </div>
        </div>
      )
    }
  },

  // --- THE HOW ---
  {
    id: "spacing-rule",
    category: "The How",
    term: "The 4-8-16 Spacing Rule",
    definition: "A strict mathematical system where all padding, margins, and gaps must be multiples of 4 (e.g., 4px, 8px, 16px, 24px, 32px). This creates a subconscious sense of rhythm and eliminates amateur 'random' spacing.",
    tags: ["#CSS", "#Spacing", "#Systems"],
    example: () => (
      <div className="flex flex-col items-center justify-center h-full w-full bg-slate-50 p-6 space-y-12">
         {/* 8px Spacing */}
         <div className="flex items-center gap-4">
            <span className="font-mono text-sm font-bold text-slate-400 w-24 text-right">Gap: 8px</span>
            <div className="flex bg-blue-100 border border-blue-200 p-1 rounded">
               <div className="w-12 h-12 bg-blue-500 rounded-sm"></div>
               <div className="w-2 bg-blue-200"></div> {/* Visualizer */}
               <div className="w-12 h-12 bg-blue-500 rounded-sm"></div>
            </div>
         </div>
         {/* 16px Spacing */}
         <div className="flex items-center gap-4">
            <span className="font-mono text-sm font-bold text-slate-400 w-24 text-right">Gap: 16px</span>
            <div className="flex bg-emerald-100 border border-emerald-200 p-1 rounded">
               <div className="w-12 h-12 bg-emerald-500 rounded-sm"></div>
               <div className="w-4 bg-emerald-200"></div> {/* Visualizer */}
               <div className="w-12 h-12 bg-emerald-500 rounded-sm"></div>
               <div className="w-4 bg-emerald-200"></div> {/* Visualizer */}
               <div className="w-12 h-12 bg-emerald-500 rounded-sm"></div>
            </div>
         </div>
         {/* 32px Padding */}
         <div className="flex items-center gap-4">
            <span className="font-mono text-sm font-bold text-slate-400 w-24 text-right">Pad: 32px</span>
            <div className="bg-purple-200 p-8 rounded-lg relative">
               <span className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[10px] text-purple-600 font-bold">32px</span>
               <div className="w-32 h-16 bg-purple-600 rounded shadow-sm flex items-center justify-center text-white font-bold text-xs">Content</div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: "text-chunking",
    category: "The How",
    term: "Text Chunking (50-75 Characters)",
    definition: "Nielsen Norman group found that users check out when they see massive blocks of text. The optimal line length for readability is between 50 and 75 characters (approx 600px wide).",
    tags: ["#Typography", "#Readability", "#Copywriting"],
    example: () => (
      <div className="flex flex-col items-center justify-center h-full w-full bg-slate-100 p-6 gap-8">
        <div className="w-full bg-white p-6 rounded-lg shadow-sm border border-red-200">
          <div className="text-xs text-red-500 font-bold mb-2 uppercase tracking-wider">Too Wide (Unreadable)</div>
          <p className="text-slate-400 text-sm w-full leading-relaxed">
            This line goes on forever and ever and ever and makes the eye travel incredibly far across the screen to read it. When the user reaches the end of this line, it is physically difficult for their eye to track all the way back to the left side of the screen to find the start of the next line, causing fatigue.
          </p>
        </div>
        
        <div className="w-full bg-white p-6 rounded-lg shadow-sm border border-green-400 flex flex-col items-center">
          <div className="w-full max-w-[600px]">
            <div className="text-xs text-green-600 font-bold mb-2 uppercase tracking-wider">Chunked (Max-W-Prose)</div>
            <p className="text-slate-700 text-sm leading-relaxed border-l-4 border-green-400 pl-4">
              This line is artificially constrained using a max-width wrapper. It holds between 50 and 75 characters. When the user finishes reading this line, the eye travels a very short, comfortable distance to find the start of the next line.
            </p>
          </div>
        </div>
      </div>
    )
  },

  // --- ATOMIC DESIGN CORE (From Upload 1) ---
  {
    id: "atomic-atom",
    category: "The How",
    term: "Atom (Atomic Design)",
    definition: "The most basic building blocks of an interface. They are the smallest UI elements that cannot be broken down further without losing their function (e.g., buttons, fonts, search fields).",
    tags: ["#Atomic_Design", "#Systems", "#Components"],
    example: () => (
      <div className="flex flex-col items-center justify-center h-full w-full bg-slate-50 p-6 space-y-6">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Individual Atoms</div>
        <div className="flex gap-6 items-center bg-white p-8 rounded-xl shadow-sm border border-slate-200">
           {/* Atom 1: Button */}
           <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded shadow hover:bg-blue-700">Button</button>
           
           {/* Atom 2: Input */}
           <input type="text" placeholder="Input Field" className="px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" readOnly />
           
           {/* Atom 3: Icon */}
           <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
           </div>
        </div>
      </div>
    )
  },
  {
    id: "atomic-molecule",
    category: "The How",
    term: "Molecule (Atomic Design)",
    definition: "When atoms come together, they form molecules. These are simple, portable, and reusable components that have a specific function, like combining an input atom and a button atom to create a Search form.",
    tags: ["#Atomic_Design", "#Systems", "#Components"],
    example: () => (
      <div className="flex flex-col items-center justify-center h-full w-full bg-slate-50 p-6 space-y-6">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Molecule (Atoms Combined)</div>
        <div className="flex items-center p-2 bg-white rounded-xl shadow-md border border-slate-200 w-full max-w-sm">
          <div className="pl-3 text-slate-400 shrink-0">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="text" placeholder="Search..." className="w-full py-2 px-3 focus:outline-none text-slate-700 bg-transparent" readOnly />
          <button className="px-4 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 shrink-0">
            Search
          </button>
        </div>
      </div>
    )
  },
  {
    id: "atomic-organism",
    category: "The What",
    term: "Organism (Atomic Design)",
    definition: "Complex sections created by combining molecules with other molecules or atoms. They make the website engaging and easier to use (e.g., a complete Header containing a logo atom, a navigation molecule, and a search molecule).",
    tags: ["#Atomic_Design", "#Layout", "#Components"],
    example: () => (
      <div className="flex flex-col items-center justify-center h-full w-full bg-slate-50 p-6">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Organism (Header Section)</div>
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-xl shadow-sm p-4 flex items-center justify-between">
            {/* Logo Atom */}
            <div className="font-black text-xl text-indigo-600 tracking-tighter">BRAND.</div>
            
            {/* Nav Links Molecule */}
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
               <span className="hover:text-slate-900 cursor-pointer">Home</span>
               <span className="hover:text-slate-900 cursor-pointer">Products</span>
               <span className="hover:text-slate-900 cursor-pointer">About</span>
            </div>

            {/* Search/CTA Molecule */}
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div>
               <button className="px-4 py-2 bg-slate-900 text-white text-sm rounded-lg font-medium">Sign Up</button>
            </div>
        </div>
      </div>
    )
  },
  {
    id: "atomic-template",
    category: "The What",
    term: "Template (Atomic Design)",
    definition: "Templates act as the 'glue' that holds organisms together. They provide a home for organisms, allowing designers to see how components look and function within a layout without using real content (e.g., Wireframes).",
    tags: ["#Atomic_Design", "#Layout", "#Wireframe"],
    example: () => (
      <div className="flex flex-col items-center justify-center h-full w-full bg-slate-100 p-6">
         <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Template (Wireframe layout)</div>
         <div className="w-full max-w-md bg-white border-2 border-dashed border-slate-300 rounded-xl p-4 flex flex-col gap-4 opacity-70">
            {/* Header Organism Wireframe */}
            <div className="w-full h-10 bg-slate-200 rounded flex justify-between items-center px-2">
               <div className="w-16 h-4 bg-slate-300 rounded"></div>
               <div className="w-8 h-6 bg-slate-300 rounded"></div>
            </div>
            {/* Hero Organism Wireframe */}
            <div className="w-full h-32 bg-slate-200 rounded flex flex-col items-center justify-center gap-2">
               <div className="w-3/4 h-6 bg-slate-300 rounded"></div>
               <div className="w-1/2 h-3 bg-slate-300 rounded"></div>
            </div>
            {/* Grid Organism Wireframe */}
            <div className="grid grid-cols-2 gap-2">
               <div className="h-16 bg-slate-200 rounded"></div>
               <div className="h-16 bg-slate-200 rounded"></div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: "atomic-page",
    category: "The What",
    term: "Page (Atomic Design)",
    definition: "The final stage where real content is applied to the templates. Pages represent the concrete interface that users actually see and experience, used to test if the design works with actual data.",
    tags: ["#Atomic_Design", "#Final_UI", "#Testing"],
    example: () => (
      <div className="flex flex-col items-center justify-center h-full w-full bg-slate-100 p-6">
         <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Page (Real Content Applied)</div>
         <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-4 shadow-xl">
            {/* Header Organism */}
            <div className="w-full flex justify-between items-center px-2">
               <div className="font-black text-indigo-600">NEXUS</div>
               <button className="px-3 py-1 bg-slate-900 text-white text-xs rounded">Login</button>
            </div>
            {/* Hero Organism */}
            <div className="w-full bg-indigo-50 rounded-lg p-6 flex flex-col items-center text-center gap-2 border border-indigo-100">
               <h2 className="text-xl font-bold text-slate-900">Build faster today.</h2>
               <p className="text-xs text-slate-500">The tools you need to succeed.</p>
            </div>
            {/* Grid Organism */}
            <div className="grid grid-cols-2 gap-3">
               <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex flex-col items-center">
                  <span className="text-xl mb-1">⚡</span>
                  <span className="text-xs font-bold">Fast</span>
               </div>
               <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex flex-col items-center">
                  <span className="text-xl mb-1">🛡️</span>
                  <span className="text-xs font-bold">Secure</span>
               </div>
            </div>
         </div>
      </div>
    )
  },

  // --- THE WHAT ---
  {
    id: "flex-row-reverse",
    category: "The What",
    term: "Flex Row-Reverse",
    definition: "A CSS Flexbox property that lays out flex items horizontally, but in the opposite order of how they appear in the HTML DOM structure. Critical for building alternating 'Z-Pattern' layouts without changing HTML.",
    tags: ["#CSS", "#Flexbox", "#Code"],
    example: () => (
      <div className="flex flex-col items-center justify-center h-full w-full bg-slate-100 p-6 space-y-8">
        <div className="w-full max-w-lg">
          <div className="text-xs font-mono text-slate-500 mb-2">DOM Order: Text, then Image | CSS: flex-row</div>
          <div className="flex flex-row gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
             <div className="flex-1 bg-slate-100 p-4 rounded text-xs font-bold text-slate-400 flex items-center justify-center">1. Text Block</div>
             <div className="w-24 h-24 bg-blue-100 border-2 border-blue-400 text-blue-700 font-bold rounded flex items-center justify-center">2. Img</div>
          </div>
        </div>

        <div className="w-full max-w-lg">
          <div className="text-xs font-mono text-pink-500 mb-2 font-bold">DOM Order: Text, then Image | CSS: flex-row-reverse</div>
          <div className="flex flex-row-reverse gap-4 p-4 bg-pink-50 rounded-xl shadow-sm border border-pink-200">
             <div className="flex-1 bg-white p-4 rounded text-xs font-bold text-slate-400 flex items-center justify-center shadow-sm">1. Text Block</div>
             <div className="w-24 h-24 bg-pink-100 border-2 border-pink-400 text-pink-700 font-bold rounded flex items-center justify-center">2. Img</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "bento-grid",
    category: "The What",
    term: "The Bento Grid",
    definition: "A UI layout trend inspired by Japanese bento boxes. It uses strict CSS grids where internal elements are segmented into distinct, rounded rectangular cells of varying sizes (spanning multiple columns or rows).",
    tags: ["#Layout", "#CSS_Grid", "#Modern"],
    example: () => (
      <div className="flex flex-col items-center justify-center h-full w-full bg-slate-200 p-8">
        <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full max-w-lg h-64">
           {/* Big Highlight Card */}
           <div className="col-span-2 row-span-2 bg-white rounded-2xl shadow-sm p-4 flex flex-col justify-end border border-slate-100 hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="w-1/2 h-4 bg-slate-800 rounded mb-2"></div>
              <div className="w-3/4 h-2 bg-slate-300 rounded"></div>
           </div>
           {/* Wide Card */}
           <div className="col-span-2 bg-white rounded-2xl shadow-sm p-4 border border-slate-100 hover:scale-[1.02] transition-transform cursor-pointer flex flex-col justify-center">
              <div className="w-1/3 h-3 bg-slate-400 rounded mb-2"></div>
              <div className="w-2/3 h-2 bg-slate-200 rounded"></div>
           </div>
           {/* Small Cards */}
           <div className="bg-white rounded-2xl shadow-sm p-4 border border-slate-100 flex items-center justify-center hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-blue-100"></div>
           </div>
           <div className="bg-white rounded-2xl shadow-sm p-4 border border-slate-100 flex items-center justify-center hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-teal-100"></div>
           </div>
        </div>
      </div>
    )
  },

  // --- THE FUTURE ---
  {
    id: "anti-design",
    category: "The Future",
    term: "Anti-design / Brutalism",
    definition: "A digital design approach that intentionally breaks traditional rules of usability and aesthetics. It features clashing colors, overlapping elements, brutalist typography, and raw, unfinished aesthetics.",
    tags: ["#Aesthetics", "#Trend", "#Rule_Breaking"],
    example: () => (
      <div className="flex items-center justify-center h-full w-full bg-[#E5FF00] p-6 relative overflow-hidden font-mono">
        <div className="absolute top-10 left-10 text-[80px] font-black text-[#FF0055] opacity-50 leading-none tracking-tighter mix-blend-multiply">
          CHAOS
        </div>
        <div className="relative z-10 w-full max-w-sm border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
           <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-2 mb-4 break-words">Rules R Dead.</h2>
           <p className="font-bold text-lg leading-tight mb-6">Embrace the ugly. Make them uncomfortable. Break the grid intentionally.</p>
           <button className="w-full py-4 bg-blue-600 hover:bg-[#FF0055] text-white text-xl font-black border-4 border-black transition-colors uppercase marquee-container overflow-hidden">
             <span className="inline-block hover:animate-ping">Click Me If You Dare</span>
           </button>
        </div>
      </div>
    )
  },
  {
    id: "glassmorphism",
    category: "The Future",
    term: "Glassmorphism",
    definition: "A UI design trend that mimics the appearance of frosted glass. It heavily relies on CSS backdrop-filter (blur), semi-transparent backgrounds, and vivid background shapes to show through the glass.",
    tags: ["#Aesthetics", "#Trend", "#CSS_Effects"],
    example: () => (
      <div className="flex items-center justify-center h-full w-full bg-slate-900 p-6 relative overflow-hidden">
        {/* Colorful Abstract Background Elements */}
        <div className="absolute w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-[40px] opacity-70 top-10 left-10 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-pink-600 rounded-full mix-blend-screen filter blur-[40px] opacity-70 bottom-10 right-10"></div>
        <div className="absolute w-48 h-48 bg-blue-500 rounded-full mix-blend-screen filter blur-[40px] opacity-70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* The Glass Card */}
        <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
          <div className="relative z-20">
             <h3 className="text-2xl font-bold text-white mb-2">Frosted UI</h3>
             <p className="text-white/80 mb-6 text-sm">This card utilizes backdrop-filter to blur the vibrant background gradients, creating a premium glass effect.</p>
             <button className="px-6 py-3 bg-white/20 hover:bg-white/30 transition-colors border border-white/30 text-white rounded-full font-medium w-full shadow-lg">
               Explore Design
             </button>
          </div>
        </div>
      </div>
    )
  }
];

// --- ICONS ---
const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);
const TagIcon = () => (
  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
);

export default function AtomicGlossaryApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTag, setActiveTag] = useState(null); // null means no tag selected
  const [selectedTermId, setSelectedTermId] = useState(glossaryData[0].id);

  const categories = ['All', 'The Why', 'The How', 'The What', 'The Future'];
  
  // Extract unique tags dynamically from the data
  const allTags = useMemo(() => {
    const tags = new Set();
    glossaryData.forEach(item => item.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  // Complex Filtering Logic (Search + Category + Tag)
  const filteredData = useMemo(() => {
    return glossaryData.filter(item => {
      const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesTag = activeTag === null || item.tags.includes(activeTag);
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchTerm, activeCategory, activeTag]);

  const activeTermData = useMemo(() => {
    return glossaryData.find(item => item.id === selectedTermId) || glossaryData[0];
  }, [selectedTermId]);

  // Color mapping helper for UI consistency
  const getCategoryColor = (cat) => {
      switch(cat) {
          case 'The Why': return 'amber';
          case 'The How': return 'emerald';
          case 'The What': return 'blue';
          case 'The Future': return 'pink';
          default: return 'slate';
      }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-900">
      
      {/* --- SIDEBAR / DICTIONARY INDEX --- */}
      <aside className="w-full md:w-80 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0 z-20 shrink-0 shadow-sm">
        
        {/* Branding & Search */}
        <div className="p-5 border-b border-slate-200 bg-white">
          <h1 className="text-lg font-extrabold tracking-tight text-slate-900 flex items-center mb-1">
             Atomic Glossary<span className="text-blue-600">.</span>
          </h1>
          <p className="text-[10px] text-slate-500 mb-4 font-bold uppercase tracking-wider">The Designer's Lexicon</p>
          
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search terms..."
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => {
               const cColor = getCategoryColor(cat);
               return (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setActiveTag(null); }} // Reset tag when changing category
                  className={`px-3 py-1 text-[11px] font-bold rounded-full whitespace-nowrap transition-all ${
                    activeCategory === cat 
                    ? `bg-${cColor}-600 text-white shadow-sm` 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
               )
            })}
          </div>
        </div>

        {/* Tag Filters (Scrollable Row) */}
        <div className="px-5 py-3 border-b border-slate-100 bg-slate-50 overflow-x-auto flex gap-2 no-scrollbar shadow-inner">
           <button 
             onClick={() => setActiveTag(null)}
             className={`shrink-0 px-2.5 py-1 text-[10px] font-bold rounded flex items-center ${activeTag === null ? 'bg-slate-800 text-white' : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-100'}`}
           >
             All Tags
           </button>
           {allTags.map(tag => (
             <button
               key={tag}
               onClick={() => setActiveTag(tag)}
               className={`shrink-0 px-2.5 py-1 text-[10px] font-bold rounded flex items-center transition-colors ${
                 activeTag === tag ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-100'
               }`}
             >
               <TagIcon /> {tag.replace('#', '')}
             </button>
           ))}
        </div>

        {/* Term List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {filteredData.length === 0 ? (
            <div className="text-center p-8 text-sm text-slate-500">No terms match your filters.</div>
          ) : (
            filteredData.map((item) => {
              const bColor = getCategoryColor(item.category);
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedTermId(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                    selectedTermId === item.id 
                    ? `bg-${bColor}-50 text-${bColor}-900 ring-1 ring-${bColor}-200 shadow-sm` 
                    : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold text-sm mb-1">{item.term}</div>
                  <div className="flex items-center justify-between mt-2">
                      <div className={`text-[9px] font-bold uppercase tracking-wider text-${bColor}-600`}>
                          {item.category}
                      </div>
                      <div className="flex gap-1">
                         {item.tags.slice(0,2).map(t => (
                             <span key={t} className="text-[9px] text-slate-400 font-mono">{t}</span>
                         ))}
                      </div>
                  </div>
                </button>
              )
            })
          )}
        </div>
      </aside>

      {/* --- MAIN CONTENT / DEFINITION AREA --- */}
      <main className="flex-1 h-screen overflow-y-auto bg-slate-50 flex flex-col items-center justify-start p-6 md:p-10">
         <div className="w-full max-w-4xl">
            
            {/* Header Data */}
            <div className="mb-10 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
               <div className={`absolute top-0 left-0 w-2 h-full bg-${getCategoryColor(activeTermData.category)}-500`}></div>
               
               <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded text-${getCategoryColor(activeTermData.category)}-700 bg-${getCategoryColor(activeTermData.category)}-100`}>
                    {activeTermData.category}
                  </span>
                  {activeTermData.tags.map(tag => (
                     <span key={tag} className="px-2 py-1 text-[10px] font-mono font-semibold rounded bg-slate-100 text-slate-500 border border-slate-200">
                         {tag}
                     </span>
                  ))}
               </div>
               
               <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-4">{activeTermData.term}</h2>
               <p className="text-lg text-slate-600 leading-relaxed">
                 {activeTermData.definition}
               </p>
            </div>

            {/* Interactive Render Canvas */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
               {/* Browser/Canvas Chrome */}
               <div className="h-12 border-b border-slate-100 bg-slate-50 flex items-center justify-between px-4 shrink-0">
                  <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  </div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 flex items-center gap-2 uppercase tracking-widest">
                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                     Live Concept Render
                  </div>
               </div>

               {/* Render Area */}
               <div className="w-full h-[500px] relative bg-slate-100 overflow-hidden">
                  {activeTermData.example()}
               </div>
            </div>

         </div>
      </main>

    </div>
  );
}