import React, { useState } from 'react';

export const designerGuideData = [
  // --- BUCKET 1: THE WHY (Theory & Psychology) ---
  {
    id: "preattentive-processing",
    category: "The Why",
    title: "Preattentive Processing",
    subtitle: "Evolutionary Psychology",
    description: "The brain scans for 'Danger, Food, or Friends' instantly. If a layout is confusing, the brain ignores it to save energy. Pass the brain's instant 'filtering' test by using familiar patterns.",
    why: "Evolutionary survival mechanism. Clarity = Safety.",
    action: "Ensure the primary focus is obvious within milliseconds. Use standard UI patterns for critical elements.",
    warning: "Don't create confusion; if the brain can't group the content instantly, the user leaves.",
    source: "Master Website Layouts",
    component: () => (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-xl space-y-6">
        <p className="text-sm text-slate-500 text-center max-w-sm italic">Notice how your eye is instantly drawn to the red circle before you even process the gray squares.</p>
        <div className="flex items-center gap-8">
          <div className="w-12 h-12 bg-slate-200 rounded-md"></div>
          <div className="w-12 h-12 bg-slate-200 rounded-md"></div>
          <div className="w-20 h-20 bg-red-500 rounded-full shadow-lg shadow-red-500/30 animate-pulse"></div>
          <div className="w-12 h-12 bg-slate-200 rounded-md"></div>
        </div>
      </div>
    )
  },
  {
    id: "story-variation",
    category: "The Why",
    title: "The 'Story' Variation",
    subtitle: "Cognitive Engagement",
    description: "If a layout repeats, the brain assumes it knows what comes next and stops processing. Surprise the user to keep them engaged.",
    why: "Predictability equals boredom. Variation signals new, important information.",
    action: "Vary your layouts as you scroll. Start familiar, then take an unexpected turn (e.g., switch from 1-column to 3-column).",
    warning: "Don't repeat the same layout over and over. Avoid 'template fatigue'.",
    source: "Master Website Layouts",
    component: () => (
      <div className="flex flex-col gap-4 p-6 bg-slate-50 rounded-xl w-full max-w-md">
        <div className="h-10 bg-slate-200 rounded flex justify-between items-center px-4">
           <div className="w-12 h-3 bg-slate-300 rounded"></div>
           <div className="w-12 h-3 bg-slate-300 rounded"></div>
        </div>
        <div className="h-32 bg-indigo-100 rounded-lg flex items-center justify-center border-2 border-dashed border-indigo-200">
           <span className="text-[10px] font-bold text-indigo-400 uppercase">Section 1: 1-Column Hero</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
           <div className="h-20 bg-emerald-100 rounded-lg border-2 border-dashed border-emerald-200 flex items-center justify-center">
              <span className="text-[8px] font-bold text-emerald-400 uppercase">3-Col</span>
           </div>
           <div className="h-20 bg-emerald-100 rounded-lg border-2 border-dashed border-emerald-200 flex items-center justify-center">
              <span className="text-[8px] font-bold text-emerald-400 uppercase">3-Col</span>
           </div>
           <div className="h-20 bg-emerald-100 rounded-lg border-2 border-dashed border-emerald-200 flex items-center justify-center">
              <span className="text-[8px] font-bold text-emerald-400 uppercase">3-Col</span>
           </div>
        </div>
        <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">Rhythm through variation</p>
      </div>
    )
  },
  {
    id: "gestalt-grouping",
    category: "The Why",
    title: "Gestalt Grouping",
    subtitle: "Visual Psychology",
    description: "The brain naturally groups items that are close together (Proximity) or look similar (Similarity). Use this to create a clean, intuitive structure without needing boxes or borders.",
    why: "Humans search for patterns to reduce cognitive effort. Proper grouping signals related functions.",
    action: "Group related text and buttons with smaller gaps (e.g., 8px). Separate distinct sections with much larger gaps (e.g., 64px).",
    warning: "Don't use equal spacing everywhere. It creates 'visual soup' where nothing stands out.",
    source: "Glossary Blueprint",
    component: () => (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-slate-200 shadow-sm space-y-10">
        <div className="flex flex-col items-center gap-2">
           <div className="flex gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
           </div>
           <div className="flex gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
           </div>
           <span className="text-[10px] font-bold text-slate-400 uppercase">Proximity = One Group</span>
        </div>
        <div className="flex gap-12">
           <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
              <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
           </div>
           <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 bg-slate-200 rounded"></div>
              <div className="w-8 h-8 bg-slate-200 rounded"></div>
           </div>
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase">Similarity = Functional Groups</span>
      </div>
    )
  },
  {
    id: "cognitive-load",
    category: "The Why",
    title: "Cognitive Load",
    subtitle: "Memory Management",
    description: "Every decision a user has to make drains their energy. Reduce the number of choices and visual noise to keep them focused on the primary goal.",
    why: "The 'Working Memory' can only hold 5-9 items at once. Overload causes abandonment.",
    action: "Remove non-essential links. Hide secondary features behind menus or 'Show More' buttons. Focus on ONE primary action per section.",
    warning: "Avoid 'Analysis Paralysis'. Don't give 10 pricing options when 3 will do.",
    source: "Glossary Blueprint",
    component: () => (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-xl space-y-6">
        <div className="flex gap-4">
           <div className="w-32 h-40 bg-white border-2 border-red-200 rounded-xl p-4 flex flex-col gap-2 opacity-50">
              <div className="h-2 w-full bg-slate-100 rounded"></div>
              <div className="h-2 w-full bg-slate-100 rounded"></div>
              <div className="h-2 w-full bg-slate-100 rounded"></div>
              <div className="h-2 w-full bg-slate-100 rounded"></div>
              <div className="h-2 w-full bg-slate-100 rounded"></div>
              <div className="h-2 w-full bg-slate-100 rounded"></div>
              <span className="text-[8px] text-red-500 font-bold uppercase text-center mt-2">Too Much Noise</span>
           </div>
           <div className="w-32 h-40 bg-white border-2 border-emerald-500 rounded-xl p-4 flex flex-col items-center justify-center gap-4 shadow-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">✓</div>
              <div className="h-2 w-full bg-slate-100 rounded"></div>
              <div className="h-6 w-full bg-emerald-600 rounded"></div>
              <span className="text-[8px] text-emerald-600 font-bold uppercase text-center">Clear Focus</span>
           </div>
        </div>
      </div>
    )
  },
  {
    id: "atomic-theory",
      category: "The Why",
      title: "Atomic Design Theory",
      subtitle: "Systems Thinking",
      description: "Build interfaces from the smallest atoms up to templates to avoid creating a 'Frankenstein' website. Consistency is the byproduct of systemization.",
      why: "Ensures scalability and maintenance. If you change an atom, the whole organism updates.",
      action: "Define buttons, fonts, and colors globally first. Never design a unique section in isolation.",
      warning: "Avoid designing pages first. If you don't have a system, you have a mess.",
      source: "Atomic Design Principles",
      component: () => (
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                  <div className="h-0.5 w-8 bg-slate-200"></div>
                  <div className="flex gap-1 p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="w-8 h-4 bg-slate-300 rounded"></div>
                  </div>
                  <div className="h-0.5 w-8 bg-slate-200"></div>
                  <div className="w-32 h-20 bg-slate-900 rounded-lg p-2 flex flex-col gap-2 shadow-lg">
                      <div className="w-10 h-2 bg-slate-700 rounded"></div>
                      <div className="flex gap-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-full h-2 bg-slate-700 rounded"></div>
                      </div>
                      <div className="w-1/2 h-2 bg-slate-800 rounded"></div>
                  </div>
              </div>
              <div className="flex gap-8 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-tighter">
                  <span>Atom</span>
                  <span>Molecule</span>
                  <span>Organism</span>
              </div>
          </div>
      )
  },

  // --- BUCKET 2: THE HOW (Rules & Systems) ---
  {
    id: "spacing-rule",
    category: "The How",
    title: "The 4-8-16 Spacing Rule",
    subtitle: "Mathematical Rhythm",
    description: "A strict mathematical system where all padding, margins, and gaps must be multiples of 4 or 8. This creates a subconscious sense of rhythm and eliminates amateur 'random' spacing.",
    why: "Removes decision fatigue. 8px is the standard unit of the digital grid.",
    action: "Use 4px for fine details, 8px for small gaps, 16px for standard elements, and 32px+ for section spacing.",
    warning: "Don't use random numbers (e.g., 7px, 13px). It breaks the optical rhythm.",
    source: "20 Design Tips / 9 Hacks",
    component: () => (
      <div className="flex flex-col items-center justify-center p-10 bg-slate-900 rounded-xl space-y-10">
        <div className="flex items-center gap-4">
           <span className="font-mono text-xs text-slate-500 w-20 text-right">8px Gap</span>
           <div className="flex gap-2 p-1 bg-slate-800 rounded border border-slate-700">
              <div className="w-10 h-10 bg-indigo-500 rounded-sm"></div>
              <div className="w-10 h-10 bg-indigo-500 rounded-sm"></div>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <span className="font-mono text-xs text-slate-500 w-20 text-right">16px Gap</span>
           <div className="flex gap-4 p-1 bg-slate-800 rounded border border-slate-700">
              <div className="w-10 h-10 bg-emerald-500 rounded-sm"></div>
              <div className="w-10 h-10 bg-emerald-500 rounded-sm"></div>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <span className="font-mono text-xs text-slate-500 w-20 text-right">32px Gap</span>
           <div className="flex gap-8 p-1 bg-slate-800 rounded border border-slate-700">
              <div className="w-10 h-10 bg-pink-500 rounded-sm"></div>
              <div className="w-10 h-10 bg-pink-500 rounded-sm"></div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: "squint-test",
    category: "The How",
    title: "The Squint Test",
    subtitle: "Hierarchy Validation",
    description: "Step back and squint until the design blurs. What stands out? If the Call to Action (CTA) disappears into the blob, you must increase its contrast immediately.",
    why: "Validates visual hierarchy without getting distracted by small details.",
    action: "Squint your eyes or apply a 10px blur filter. The primary heading and CTA should remain the most prominent blobs.",
    warning: "If everything blurs into a uniform gray, your contrast is too low.",
    source: "9 Web Design Hacks",
    component: () => {
      const [blur, setBlur] = useState(0);
      return (
        <div className="flex flex-col items-center justify-center p-8 bg-slate-100 rounded-xl space-y-6 relative overflow-hidden">
           <div className="absolute top-2 right-2 flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Squint Intensity</label>
              <input type="range" min="0" max="10" value={blur} onChange={(e) => setBlur(e.target.value)} className="accent-indigo-600" />
           </div>
           <div className="w-64 bg-white p-6 rounded-xl shadow-lg border border-slate-200 transition-all duration-300" style={{ filter: `blur(${blur}px)` }}>
              <div className="w-10 h-10 bg-indigo-100 rounded-full mb-4"></div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Can you see this?</h3>
              <p className="text-xs text-slate-400 mb-4">This text should blur away, but the button below should stay visible.</p>
              <button className="w-full py-2.5 bg-indigo-600 text-white font-bold rounded-lg shadow-lg">Action Button</button>
           </div>
        </div>
      );
    }
  },
  {
      id: "text-chunking",
      category: "The How",
      title: "The 'Chunking' Rule",
      subtitle: "Readability Optimization",
      description: "Limit text width to 600-700 pixels (50-75 characters). Add a line break every 2-3 sentences.",
      why: "Prevents users from 'checking out' when facing walls of text. Reduces eye fatigue.",
      action: "Use max-width: 65ch; or similar constraints. Break long paragraphs into smaller, digestible chunks.",
      warning: "Never allow text to span the full width of a large desktop screen.",
      source: "9 Web Design Hacks",
      component: () => (
          <div className="flex flex-col gap-6 p-6 bg-white border border-slate-200 rounded-xl">
              <div className="space-y-2 opacity-30">
                  <div className="h-2 w-full bg-slate-200 rounded"></div>
                  <div className="h-2 w-full bg-slate-200 rounded"></div>
                  <div className="h-2 w-full bg-slate-200 rounded"></div>
                  <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2/3 space-y-2 p-4 bg-emerald-50 border-x-2 border-emerald-200 relative">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold text-emerald-600 uppercase bg-white px-2">Optimal Chunk (60ch)</span>
                    <div className="h-2 w-full bg-emerald-200 rounded"></div>
                    <div className="h-2 w-full bg-emerald-200 rounded"></div>
                    <div className="h-2 w-1/2 bg-emerald-200 rounded"></div>
                </div>
              </div>
          </div>
      )
  },
  {
    id: "responsive-system",
    category: "The How",
    title: "The 12-8-4 System",
    subtitle: "Responsive Columns",
    description: "Rebalance layouts for different devices rather than just shrinking them. Desktop uses 12 columns, Tablet uses 8, and Mobile uses 4.",
    why: "Maintain readability and clickability across all screen sizes. Columns provide the structural 'skeleton'.",
    action: "Do not simply scale elements down. Rearrange them to fit the new column count (e.g., 3-col on desktop becomes 1-col on mobile).",
    warning: "Don't try to force 12 columns onto a mobile phone. It makes content unreadable.",
    source: "Master Website Layouts",
    component: () => (
      <div className="flex flex-col gap-6 p-8 bg-slate-900 rounded-xl w-full max-w-md">
        <div className="space-y-2">
           <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-500">DESKTOP (12)</span><div className="h-1 w-32 bg-indigo-500 rounded-full"></div></div>
           <div className="grid grid-cols-12 gap-1 h-4">
              {[...Array(12)].map((_, i) => <div key={i} className="bg-slate-800 rounded-sm"></div>)}
           </div>
        </div>
        <div className="space-y-2">
           <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-500">TABLET (8)</span><div className="h-1 w-20 bg-emerald-500 rounded-full"></div></div>
           <div className="grid grid-cols-8 gap-1 h-4 max-w-[280px]">
              {[...Array(8)].map((_, i) => <div key={i} className="bg-slate-800 rounded-sm"></div>)}
           </div>
        </div>
        <div className="space-y-2">
           <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-500">MOBILE (4)</span><div className="h-1 w-10 bg-pink-500 rounded-full"></div></div>
           <div className="grid grid-cols-4 gap-1 h-4 max-w-[140px]">
              {[...Array(4)].map((_, i) => <div key={i} className="bg-slate-800 rounded-sm"></div>)}
           </div>
        </div>
      </div>
    )
  },
  {
    id: "color-rule",
    category: "The How",
    title: "The 60-30-10 Rule",
    subtitle: "Color Distribution",
    description: "A classic interior design rule applied to UI. 60% neutral background, 30% brand/secondary color, and 10% accent color for calls to action.",
    why: "Prevents 'color fatigue' and ensures the important elements (buttons) naturally pop against a neutral canvas.",
    action: "Use white or off-white for 60%, a dark brand color for headings/text (30%), and a vibrant accent for primary buttons (10%).",
    warning: "Don't use your accent color for everything. If everything is bright, nothing is important.",
    source: "7-Minute Skills",
    component: () => (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div className="w-full h-12 flex rounded-lg overflow-hidden border border-slate-200 shadow-inner">
           <div className="w-[60%] bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-400">60% NEUTRAL</div>
           <div className="w-[30%] bg-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-500">30% BRAND</div>
           <div className="w-[10%] bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">10%</div>
        </div>
        <div className="w-full bg-slate-50 p-6 rounded-xl space-y-4">
           <div className="h-4 w-32 bg-slate-900 rounded"></div>
           <div className="space-y-2">
              <div className="h-2 w-full bg-slate-200 rounded"></div>
              <div className="h-2 w-full bg-slate-200 rounded"></div>
              <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
           </div>
           <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold">Accent Button</button>
        </div>
      </div>
    )
  },
  {
    id: "atoms",
    category: "The How",
    title: "Atoms",
    subtitle: "The Smallest Units",
    description: "The fundamental building blocks of UI: buttons, inputs, labels, and icons. They cannot be broken down further without losing their functionality.",
    why: "Consistency starts at the atomic level. If every button is different, the system fails.",
    action: "Design your atoms in isolation first. Define every state (hover, active, disabled).",
    warning: "Don't add layout properties (like margins) to atoms. They should be layout-agnostic.",
    source: "Atomic Design Principles",
    component: () => (
      <div className="flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-50 rounded-xl">
         <button className="px-4 py-2 bg-indigo-600 text-white rounded text-xs font-bold">Button</button>
         <input type="text" placeholder="Input..." className="px-3 py-2 border border-slate-200 rounded text-xs w-32" readOnly />
         <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">★</div>
      </div>
    )
  },
  {
    id: "molecules",
    category: "The How",
    title: "Molecules",
    subtitle: "Functional Assemblies",
    description: "Groups of atoms bonded together to perform a single function. Example: A search bar (Label + Input + Button).",
    why: "Molecules represent the first level of reusable functionality.",
    action: "Combine atoms that naturally work together. Test them as a single unit.",
    warning: "If a molecule does too much, it's probably an organism.",
    source: "Atomic Design Principles",
    component: () => (
      <div className="flex items-center justify-center p-8 bg-white border border-slate-200 rounded-xl">
         <div className="flex border-2 border-indigo-100 rounded-lg overflow-hidden max-w-xs">
            <input type="text" placeholder="Search..." className="px-4 py-2 text-xs w-40 outline-none" readOnly />
            <button className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold">GO</button>
         </div>
      </div>
    )
  },
  {
    id: "8-point-grid",
    category: "The How",
    title: "The 8-Point Grid",
    subtitle: "Systemic Spacing",
    description: "Every spacing value, margin, and padding must be a multiple of 8 (8, 16, 24, 32...). This ensures a consistent 'visual weight' across the entire interface.",
    why: "8 is the magic number for digital screens (divisible by 2, 4, 8). It eliminates 'random' spacing decisions.",
    action: "Set your base unit to 8px. Use 16px for standard gaps and 32-64px for section separations.",
    warning: "Don't use odd numbers or random values like 10px or 15px. It breaks the mathematical rhythm.",
    source: "9 Web Design Hacks",
    component: () => (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-xl space-y-6">
        <div className="grid grid-cols-4 gap-4 p-4 bg-white border-2 border-dashed border-slate-200 rounded-lg">
           {[...Array(8)].map((_, i) => <div key={i} className="w-10 h-10 bg-indigo-100 rounded-sm flex items-center justify-center text-[8px] font-bold text-indigo-400">8px</div>)}
        </div>
        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">The Grid Skeleton</p>
      </div>
    )
  },
  {
    id: "font-families",
    category: "The How",
    title: "Font Super Families",
    subtitle: "Typography Pairing",
    description: "Use a single font family that includes both Serif and Sans-Serif variations. They are mathematically designed to match perfectly.",
    why: "Eliminates the risk of clashing fonts. Ensures structural harmony in typography.",
    action: "Use the Serif version for large headers to add personality, and the Sans version for body text for readability.",
    warning: "Avoid pairing two complex serif fonts together. It creates visual conflict.",
    source: "9 Web Design Hacks",
    component: () => (
      <div className="flex flex-col items-center justify-center p-10 bg-white rounded-xl border border-slate-200 shadow-sm space-y-8">
        <div className="text-center space-y-4">
           <h3 className="text-3xl font-serif text-slate-900 leading-tight">The Elegant Header</h3>
           <p className="text-sm font-sans text-slate-500 max-w-xs mx-auto">This body text uses the sans-serif version of the same family, ensuring perfect mathematical alignment with the header above.</p>
        </div>
        <div className="flex gap-4 border-t border-slate-100 pt-6 w-full justify-center">
           <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded">Family: Merriweather + Sans</span>
        </div>
      </div>
    )
  },

  // --- BUCKET 3: THE WHAT (Layouts & Structures) ---
  {
    id: "engagement-line",
    category: "The What",
    title: "The Engagement Line",
    subtitle: "Visual Real Estate",
    description: "100% of visitors see the Hero; very few see the footer. Prioritize content based on user behavior.",
    why: "Value proposition must hit immediately. Social proof should follow closely.",
    action: "Place your most critical information within the first 1-2 viewport heights (Above the Fold).",
    warning: "Don't waste the top of your page on filler content or large, non-essential graphics.",
    source: "Proper Website Layout (8 Minutes)",
    component: () => (
      <div className="relative w-full max-w-sm h-64 bg-slate-200 rounded-xl overflow-hidden border-2 border-slate-300 shadow-inner">
         <div className="absolute top-0 w-full h-1/2 bg-indigo-50 border-b-2 border-dashed border-indigo-400 z-10 flex flex-col items-center justify-center p-4">
            <span className="absolute top-2 right-2 text-[8px] font-black text-indigo-500 uppercase bg-white px-1 border border-indigo-200">100% Visibility</span>
            <div className="w-2/3 h-4 bg-indigo-200 rounded mb-2"></div>
            <div className="w-1/2 h-8 bg-indigo-600 rounded"></div>
         </div>
         <div className="absolute top-1/2 w-full h-1/2 bg-white flex flex-col items-center justify-center p-4">
            <span className="absolute bottom-2 right-2 text-[8px] font-black text-slate-400 uppercase">20% Visibility</span>
            <div className="w-full h-2 bg-slate-100 rounded mb-1"></div>
            <div className="w-full h-2 bg-slate-100 rounded mb-1"></div>
            <div className="w-full h-2 bg-slate-100 rounded"></div>
         </div>
         <div className="absolute top-[50%] left-0 w-full h-[2px] bg-red-500 z-20 flex items-center justify-center">
            <span className="bg-red-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full shadow-sm">THE FOLD</span>
         </div>
      </div>
    )
  },
  {
      id: "bento-grid",
      category: "The What",
      title: "The Bento Grid",
      subtitle: "Modern Structure",
      description: "A UI layout trend inspired by Japanese bento boxes. It uses strict CSS grids where internal elements are segmented into distinct cells of varying sizes.",
      why: "Creates a structured but flexible look. High information density without chaos.",
      action: "Use CSS Grid with grid-column and grid-row spanning. Keep corners rounded (16-24px) for the 'bento' feel.",
      warning: "Avoid over-complicating. If it has too many cells, it becomes a cluttered mess.",
      source: "33 UNIQUE Website Layouts",
      component: () => (
          <div className="grid grid-cols-4 grid-rows-3 gap-2 w-full max-w-md h-48 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="col-span-2 row-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex flex-col justify-end">
                  <div className="w-1/2 h-2 bg-slate-200 rounded"></div>
              </div>
              <div className="col-span-2 bg-indigo-100 rounded-xl border border-indigo-200 p-3">
                  <div className="w-1/3 h-2 bg-indigo-300 rounded"></div>
              </div>
              <div className="bg-emerald-100 rounded-xl border border-emerald-200"></div>
              <div className="bg-pink-100 rounded-xl border border-pink-200"></div>
          </div>
      )
  },
  {
    id: "diagonal-balance",
    category: "The What",
    title: "Diagonal Balance",
    subtitle: "3-Column Composition",
    description: "A technique for 3-column layouts where the center element is the focal point, and the side elements are offset vertically to create a 'diagonal' flow.",
    why: "Breaks the rigidity of a standard grid. Guides the eye through the content in a dynamic path.",
    action: "Place your primary image in the center. Offset the left image higher and the right image lower.",
    warning: "Ensure the diagonal doesn't become so extreme that it feels like the layout is falling apart.",
    source: "33 UNIQUE Layouts",
    component: () => (
      <div className="flex items-center justify-center gap-4 p-8 w-full max-w-lg h-64 bg-slate-50 rounded-2xl">
         <div className="w-1/4 h-32 bg-slate-200 rounded-xl -translate-y-8 border-2 border-dashed border-slate-300"></div>
         <div className="w-1/3 h-48 bg-indigo-600 rounded-2xl shadow-xl z-10 flex items-center justify-center text-white font-black">FOCUS</div>
         <div className="w-1/4 h-32 bg-slate-200 rounded-xl translate-y-8 border-2 border-dashed border-slate-300"></div>
      </div>
    )
  },
  {
    id: "breather-grid",
    category: "The What",
    title: "The Breather Grid",
    subtitle: "4-Column White Space",
    description: "A 4-column grid where content is kept minimal to maximize negative space (white space). Use this for premium, high-end designs.",
    why: "White space is a luxury element. It signals that the content is important enough to have its own 'breathing room'.",
    action: "Limit each column to a single heading or icon. Do not feel compelled to fill every pixel with text.",
    warning: "Don't over-clutter. If you add too much, it just becomes a standard, boring grid.",
    source: "33 UNIQUE Layouts",
    component: () => (
      <div className="grid grid-cols-4 gap-6 p-8 bg-white border border-slate-200 rounded-xl w-full">
         {[...Array(4)].map((_, i) => (
           <div key={i} className="flex flex-col gap-4">
              <div className="w-8 h-8 bg-indigo-50 rounded-full"></div>
              <div className="h-2 w-full bg-slate-200 rounded"></div>
              <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
           </div>
         ))}
      </div>
    )
  },
  {
    id: "structural-footer",
    category: "The What",
    title: "Structural Footer",
    subtitle: "5-Column Organization",
    description: "A high-density organization method for complex footers. Uses 5 verticals separated by visible grid lines to guide the eye.",
    why: "Prevents 'link soup'. The visible lines act as rails for the eye during scanning.",
    action: "Group links by strict category. Use visible borders (1px) between columns to define the verticals clearly.",
    warning: "Avoid uneven column heights. Try to balance the number of links in each category.",
    source: "33 UNIQUE Layouts",
    component: () => (
      <div className="w-full max-w-lg bg-slate-900 p-8 rounded-xl flex border-x border-slate-800">
         {[...Array(5)].map((_, i) => (
           <div key={i} className="flex-1 flex flex-col gap-3 px-4 border-r last:border-0 border-slate-800">
              <div className="h-2 w-full bg-slate-700 rounded mb-2"></div>
              <div className="h-1.5 w-2/3 bg-slate-800 rounded"></div>
              <div className="h-1.5 w-1/2 bg-slate-800 rounded"></div>
              <div className="h-1.5 w-3/4 bg-slate-800 rounded"></div>
           </div>
         ))}
      </div>
    )
  },
  {
    id: "recursive-nesting",
    category: "The What",
    title: "Recursive Nesting",
    subtitle: "The 'Stripe' Method",
    description: "Creating complex layouts by nesting alignment axes. Mix horizontal and vertical flows to create a 'premium' custom look.",
    why: "Standard templates use only one axis. Mixing them signals high-end, custom engineering.",
    action: "Nest a vertical layout inside a horizontal one, then a horizontal one inside that. (H -> V -> H).",
    warning: "Don't go deeper than 3 levels of nesting or the layout becomes too difficult to manage.",
    source: "11 Section Layouts",
    component: () => (
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border-2 border-indigo-100 w-full max-w-md">
         <div className="w-24 h-40 bg-indigo-600 rounded-lg"></div>
         <div className="flex-1 flex flex-col gap-4">
            <div className="h-16 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-4">
               <div className="flex gap-2 w-full">
                  <div className="w-8 h-8 bg-emerald-100 rounded"></div>
                  <div className="flex-1 space-y-2">
                     <div className="h-2 bg-slate-100 rounded"></div>
                     <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
                  </div>
               </div>
            </div>
            <div className="h-20 bg-white rounded-lg border border-slate-200"></div>
         </div>
      </div>
    )
  },

  // --- BUCKET 4: THE PROOF (Critiques & Case Studies) ---
  {
    id: "business-redesign",
    category: "The Proof",
    title: "Business Site Redesign",
    subtitle: "Before & After Case Study",
    description: "Moving from 'flat and outdated' to 'future-facing' by removing scroll-jacking and adding contextual trust elements.",
    why: "Conversion happens when friction is removed. User needs answers before they click buy.",
    action: "Remove parallax effects. Add FAQ accordions before final CTAs. Use multi-channel contact layouts.",
    warning: "Don't let 'cool' effects (like parallax) get in the way of actual readability and speed.",
    source: "Fixing This Business' Website",
    component: () => {
      const [step, setStep] = useState('before');
      return (
        <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl space-y-6 w-full">
           <div className="flex bg-slate-200 p-1 rounded-lg">
              <button onClick={() => setStep('before')} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${step === 'before' ? 'bg-white shadow-sm text-red-500' : 'text-slate-500'}`}>BEFORE</button>
              <button onClick={() => setStep('after')} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${step === 'after' ? 'bg-indigo-600 shadow-sm text-white' : 'text-slate-50'}`}>AFTER</button>
           </div>
           
           <div className="w-full max-w-xs bg-white border border-slate-200 rounded-xl p-4 shadow-xl overflow-hidden min-h-[200px]">
              {step === 'before' ? (
                <div className="space-y-4 opacity-50 grayscale animate-pulse">
                   <div className="h-8 bg-slate-200 rounded w-full"></div>
                   <div className="h-32 bg-slate-100 rounded flex flex-col items-center justify-center text-[10px] font-bold text-slate-300 uppercase">Janky Parallax Section</div>
                   <div className="h-10 bg-slate-200 rounded w-1/2 mx-auto"></div>
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                   <div className="flex justify-between items-center">
                      <div className="w-12 h-4 bg-indigo-600 rounded"></div>
                      <div className="w-8 h-4 bg-slate-100 rounded"></div>
                   </div>
                   <div className="h-20 bg-gradient-to-br from-indigo-50 to-white rounded-lg border border-indigo-100 p-3">
                      <div className="w-full h-2 bg-indigo-200 rounded mb-2"></div>
                      <div className="w-2/3 h-2 bg-indigo-100 rounded"></div>
                   </div>
                   <div className="space-y-1">
                      <div className="h-6 bg-slate-50 rounded border border-slate-100 flex items-center px-2 text-[8px] font-bold text-slate-400 italic">FAQ: Why choose us?</div>
                      <div className="h-6 bg-slate-50 rounded border border-slate-100 flex items-center px-2 text-[8px] font-bold text-slate-400 italic">FAQ: How fast is it?</div>
                   </div>
                   <button className="w-full py-2 bg-indigo-600 text-white text-[10px] font-bold rounded shadow-lg shadow-indigo-100">Contact Now</button>
                </div>
              )}
           </div>
        </div>
      );
    }
  },

  // --- BUCKET 5: THE FUTURE (Trends & Aesthetics) ---
  {
    id: "modular-grid",
    category: "The Future",
    title: "Modular Grid Design",
    subtitle: "2026 Trends",
    description: "Moving away from static templates toward immersive, interactive, and expressive modular experiences using CSS Grid auto-placement.",
    why: "Creates structured but flexible layouts that adapt to any content type perfectly.",
    action: "Use CSS Grid 'grid-column' and 'grid-row' spans to let items occupy variable space while maintaining a core grid rhythm.",
    warning: "Don't break the grid entirely. The 'modules' must still align to a base unit.",
    source: "Top 2026 Trends",
    component: () => (
      <div className="grid grid-cols-6 grid-rows-4 gap-2 w-full max-w-sm h-64 p-4 bg-slate-100 rounded-2xl">
         <div className="col-span-4 row-span-2 bg-indigo-600 rounded-xl shadow-lg"></div>
         <div className="col-span-2 bg-emerald-500 rounded-xl"></div>
         <div className="col-span-2 row-span-3 bg-slate-900 rounded-xl"></div>
         <div className="col-span-4 bg-white rounded-xl border border-slate-200"></div>
         <div className="col-span-2 bg-pink-500 rounded-xl"></div>
         <div className="col-span-2 bg-slate-300 rounded-xl"></div>
      </div>
    )
  },
  {
    id: "playful-interactions",
    category: "The Future",
    title: "Playful Interactions",
    subtitle: "Active Engagement",
    description: "Transforming passive viewing into active engagement by mapping user inputs (mouse, scroll) to visual element transformations.",
    why: "Increases time-on-site and creates a 'wow' factor that makes the brand memorable.",
    action: "Use Framer Motion or GSAP to link scroll progress to 3D rotations or opacity shifts of key assets.",
    warning: "Don't overdo it. If too many things move at once, it causes motion sickness (vestibular issues).",
    source: "Top 2026 Trends",
    component: () => {
      const [pos, setPos] = useState({ x: 0, y: 0 });
      return (
        <div 
          className="relative w-full h-64 bg-slate-900 rounded-3xl overflow-hidden cursor-crosshair flex items-center justify-center"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setPos({ x: (e.clientX - rect.left - rect.width/2)/10, y: (e.clientY - rect.top - rect.height/2)/10 });
          }}
        >
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div 
            className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl transition-transform duration-100 ease-out flex items-center justify-center"
            style={{ transform: `perspective(1000px) rotateY(${pos.x}deg) rotateX(${-pos.y}deg)` }}
          >
             <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full"></div>
          </div>
          <div className="absolute bottom-4 text-[8px] font-black text-indigo-400 uppercase tracking-widest">Move mouse to interact</div>
        </div>
      );
    }
  },
  {
    id: "anti-design",
    category: "The Future",
    title: "Anti-Design / Brutalism",
    subtitle: "Visual Disruption",
    description: "Disrupting standard mental models to create a unique, often intentionally 'ugly' or 'raw' experience that stands out from corporate polish.",
    why: "Best for portfolios or art sites where memorability is more important than standard utility.",
    action: "Use high-contrast outlines, raw system fonts (e.g., Arial, Courier), and overlapping elements that 'break' the grid.",
    warning: "Not suitable for corporate or SaaS sites where trust and utility are paramount.",
    source: "Top 2026 Trends",
    component: () => (
      <div className="w-full h-64 bg-yellow-400 border-[6px] border-black p-8 flex flex-col justify-between relative overflow-hidden font-mono">
         <h3 className="text-5xl font-black italic -rotate-2 bg-black text-white px-2 w-fit">NO GRID</h3>
         <div className="absolute top-10 right-10 w-24 h-24 bg-white border-4 border-black flex items-center justify-center font-black text-4xl rotate-12">?</div>
         <div className="flex justify-between items-end">
            <button className="px-6 py-2 bg-white border-4 border-black font-black hover:bg-black hover:text-white transition-colors">BUTTON.EXE</button>
            <span className="text-[10px] font-black">STAY RAW // 2026</span>
         </div>
      </div>
    )
  }
];
