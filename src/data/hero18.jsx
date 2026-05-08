import React from 'react';
import { WireHeading, WireTextLine, WireImage, WireButton } from '../components/Wireframes';

const _hero18Raw = [
  {
      id: "Hero_01_Classic",
      category: "Hero Sections",
      name: "Classic Left/Right Hero",
      why: "The most reliable conversion layout. Humans naturally read left to right.",
      warning: "Don't flip it (Image Left / Text Right) for the hero, as it breaks the natural reading pattern.",
      spec: "Flex Row. Left: [H1 + Subtext + CTA] (50%). Right: [Hero_Image] (50%).",
      component: () => (
          <div className="w-full h-[400px] flex items-center p-12 bg-white rounded-xl border border-gray-200">
              <div className="w-1/2 pr-8 space-y-4">
                  <WireHeading width="w-3/4" className="h-12" />
                  <div className="space-y-2 pt-2 pb-4">
                    <WireTextLine width="w-full" />
                    <WireTextLine width="w-[85%]" />
                  </div>
                  <WireButton />
              </div>
              <WireImage className="w-1/2 h-full" text="Hero Asset" />
          </div>
      )
  },
  {
      id: "Hero_02_FullViewport",
      category: "Hero Sections",
      name: "Right Image Edge-Bleed",
      why: "Creates a more custom, immersive feel than a standard boxed image.",
      warning: "Ensure the text column has enough max-width so it doesn't get squeezed on tablets.",
      spec: "Grid 2-Col. Col 1: Standard Padding. Col 2: Padding 0, Image Object-Fit Cover, stretches to viewport edge.",
      component: () => (
          <div className="w-full h-[400px] flex items-center bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="w-1/2 p-12 space-y-4">
                  <WireHeading width="w-full" className="h-12" />
                  <WireTextLine width="w-3/4" />
                  <WireButton className="mt-6" />
              </div>
              <WireImage className="w-1/2 h-full rounded-none border-t-0 border-b-0 border-r-0" text="Edge-Bleed Asset" />
          </div>
      )
  },
  {
      id: "Hero_03_Flipped",
      category: "Hero Sections",
      name: "Flipped (Image Left / Text Right)",
      why: "Used to shake things up, but goes against standard Western reading patterns.",
      warning: "Rarely recommended for primary conversion pages. User expects text on left.",
      spec: "Flex Row-Reverse. Right: [H1 + Subtext + CTA] (50%). Left: [Hero_Image] (50%).",
      component: () => (
          <div className="w-full h-[400px] flex flex-row-reverse items-center p-12 bg-white rounded-xl border border-gray-200">
              <div className="w-1/2 pl-8 space-y-4">
                  <WireHeading width="w-full" className="h-12" />
                  <div className="space-y-2 pt-2 pb-4">
                    <WireTextLine width="w-[90%]" />
                    <WireTextLine width="w-[75%]" />
                  </div>
                  <WireButton />
              </div>
              <WireImage className="w-1/2 h-full" text="Hero Asset" />
          </div>
      )
  },
  {
      id: "Hero_04_InlineImages",
      category: "Hero Sections",
      name: "Imagery Within the Header",
      why: "Expresses more within the main H1. Highly trendy and quirky (e.g., Creative Agency style).",
      warning: "Requires very short, punchy copy. Do not use for long technical headlines.",
      spec: "Flex Column Centered. H1 contains inline-block <img> elements replacing specific words.",
      component: () => (
          <div className="w-full h-[400px] flex flex-col items-center justify-center p-10 bg-white rounded-xl border border-gray-200">
             <div className="flex flex-col items-center gap-4 w-full">
                 <div className="flex items-center gap-4">
                     <WireHeading width="w-64" className="h-16" />
                     <div className="w-32 h-16 bg-gray-100 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center"><span className="text-[10px] text-gray-400 font-bold uppercase">Image</span></div>
                     <WireHeading width="w-48" className="h-16" />
                 </div>
                 <div className="flex items-center gap-4">
                     <div className="w-40 h-16 bg-gray-100 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center"><span className="text-[10px] text-gray-400 font-bold uppercase">Image</span></div>
                     <WireHeading width="w-72" className="h-16" />
                 </div>
                 <WireTextLine width="w-96" className="mt-6" />
             </div>
          </div>
      )
  },
  {
      id: "Hero_05_Centered",
      category: "Hero Sections",
      name: "The Centered Immersive Hero",
      why: "Forces absolute focus on the primary value proposition without any visual distractions.",
      warning: "Don't use left-aligned text inside a center-aligned container; it breaks the symmetry.",
      spec: "Flex Column Centered. Max-width constraint on text container (e.g., max-w-3xl) for readable line lengths.",
      component: () => (
          <div className="w-full h-[400px] flex flex-col items-center justify-center p-12 bg-white rounded-xl border border-gray-200 text-center">
              <WireHeading width="w-2/3" className="h-16 mb-6" />
              <div className="space-y-3 w-1/2 mb-8 flex flex-col items-center">
                  <WireTextLine width="w-full" />
                  <WireTextLine width="w-4/5" />
              </div>
              <div className="flex gap-4">
                  <WireButton className="w-40 rounded-full" />
                  <div className="h-10 w-40 bg-gray-100 border border-gray-300 rounded-full"></div>
              </div>
          </div>
      )
  },
  {
      id: "Hero_06_Background",
      category: "Hero Sections",
      name: "Full Background/Video Hero",
      why: "Highly immersive, sets an immediate emotional tone before the user reads a single word.",
      warning: "Contrast issues are the #1 killer here. Always use a heavy dark overlay between the image and text.",
      spec: "Container Position: Relative. Background Asset: Absolute inset-0 + Overlay layer. Content: Relative z-10.",
      component: () => (
          <div className="w-full h-[400px] flex items-center p-12 bg-gray-900 rounded-xl border border-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-700 font-bold tracking-[0.2em] text-4xl uppercase opacity-50">Background Asset</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
              <div className="relative z-10 w-1/2 space-y-4">
                  <div className="w-3/4 h-14 bg-gray-100 rounded-md"></div>
                  <div className="space-y-2 pt-2 pb-4">
                    <div className="w-full h-3 bg-gray-400 rounded"></div>
                    <div className="w-[85%] h-3 bg-gray-400 rounded"></div>
                  </div>
                  <div className="h-10 w-32 bg-white rounded-md"></div>
              </div>
          </div>
      )
  },
  {
      id: "Hero_07_SplitScreen",
      category: "Hero Sections",
      name: "The Split-Screen Hero (50/50 Contrast)",
      why: "Creates high contrast and visual interest without needing heavy photography.",
      warning: "Ensure both sides have equal visual weight, or the layout will feel lopsided.",
      spec: "Grid 2-Col (1fr 1fr). Left Col: bg-white. Right Col: bg-dark. Text must invert depending on the column.",
      component: () => (
          <div className="w-full h-[400px] flex rounded-xl border border-gray-200 overflow-hidden">
              <div className="w-1/2 h-full bg-white p-12 flex flex-col justify-center">
                  <WireHeading width="w-[90%]" className="h-12 mb-4" />
                  <WireTextLine width="w-[80%]" className="mb-2" />
                  <WireTextLine width="w-[60%]" className="mb-8" />
                  <WireButton />
              </div>
              <div className="w-1/2 h-full bg-gray-900 p-12 flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-gray-800 opacity-50 grid grid-cols-4 grid-rows-4 gap-4 p-8">
                     {[...Array(16)].map((_, i) => <div key={i} className="bg-gray-700 rounded-sm opacity-20"></div>)}
                 </div>
                 <WireImage className="w-3/4 h-3/4 relative z-10 bg-gray-800 border-gray-700" text="Graphic" />
              </div>
          </div>
      )
  },
  {
      id: "Hero_08_Dashboard",
      category: "Hero Sections",
      name: "The Dashboard / Product UI Hero",
      why: "Shows the user exactly what they are buying immediately. Best for SaaS.",
      warning: "Don't use a cluttered screenshot. Recreate a simplified, 'dummy' version of your UI.",
      spec: "Flex Column Centered. Top: Text Stack. Bottom: Negative margin top to pull the UI screenshot up.",
      component: () => (
          <div className="w-full h-[450px] flex flex-col items-center pt-12 px-12 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden relative">
              <div className="w-full max-w-2xl text-center z-10 relative space-y-4">
                  <WireHeading width="w-4/5" className="h-14 mx-auto" />
                  <div className="space-y-2 flex flex-col items-center pb-4">
                      <WireTextLine width="w-2/3" />
                      <WireTextLine width="w-1/2" />
                  </div>
              </div>
              <div className="w-[90%] h-[300px] bg-white rounded-t-xl border border-gray-200 shadow-xl mt-4 flex flex-col overflow-hidden relative z-20">
                  <div className="h-8 border-b border-gray-100 flex items-center px-4 gap-1.5 bg-gray-50/50">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div><div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div><div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="flex-1 flex p-4 gap-4">
                      <div className="w-1/4 h-full bg-gray-100 rounded-lg"></div>
                      <div className="w-3/4 h-full flex flex-col gap-4">
                           <div className="h-1/3 bg-gray-100 rounded-lg"></div>
                           <div className="h-2/3 bg-gray-100 rounded-lg"></div>
                      </div>
                  </div>
              </div>
          </div>
      )
  },
  {
      id: "Hero_09_Typography",
      category: "Hero Sections",
      name: "The Typography-Led Hero",
      why: "Bold, modern, and confident. Relies purely on the copy to do the heavy lifting.",
      warning: "Your typography skills must be top-tier. Tracking, leading, and font choice are the only design elements.",
      spec: "Flex Column. Enormous font-size (clamp function). Minimal imagery, maximum whitespace.",
      component: () => (
          <div className="w-full h-[400px] flex flex-col justify-center p-12 bg-white rounded-xl border border-gray-200">
              <div className="space-y-4 mb-10">
                  <div className="w-[90%] h-24 bg-gray-900 rounded-sm"></div>
                  <div className="w-[70%] h-24 bg-gray-900 rounded-sm"></div>
              </div>
              <div className="flex justify-between items-end">
                  <div className="w-1/3 space-y-2">
                      <WireTextLine />
                      <WireTextLine width="w-4/5" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center">↓</div>
              </div>
          </div>
      )
  },
  {
      id: "Hero_10_VideoModal",
      category: "Hero Sections",
      name: "The Video Modal Hero",
      why: "Perfect for complex products that require an explainer video to be understood.",
      warning: "Don't auto-play video with sound. Use a static thumbnail with a massive, obvious play button.",
      spec: "Layout 2-Col. Right Col: [Thumbnail_Image] with absolute centered [Play_Button_Icon].",
      component: () => (
          <div className="w-full h-[400px] flex items-center p-12 bg-gray-900 rounded-xl border border-gray-800 text-white">
              <div className="w-1/2 pr-10 space-y-5">
                  <div className="w-16 h-1 bg-blue-500 rounded"></div>
                  <WireHeading width="w-[90%]" className="h-12 bg-gray-100" />
                  <div className="space-y-2 pt-2">
                      <div className="w-full h-3 bg-gray-600 rounded"></div>
                      <div className="w-3/4 h-3 bg-gray-600 rounded"></div>
                  </div>
                  <div className="flex items-center gap-6 pt-4">
                      <div className="h-12 w-36 bg-blue-600 rounded-md"></div>
                      <span className="text-sm font-bold text-gray-400">Read Docs</span>
                  </div>
              </div>
              <div className="w-1/2 h-full bg-gray-800 rounded-2xl border border-gray-700 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gray-700 opacity-30"></div>
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 z-10 cursor-pointer">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
              </div>
          </div>
      )
  },
  {
      id: "Hero_11_GiantVisual",
      category: "Hero Sections",
      name: "The Giant Visual",
      why: "Purely informational; establishes mood over action.",
      warning: "Don't use if you need a CTA; this layout often lacks a clear call to action.",
      spec: "Massive Hero Image Top. Header & Subheader Below. No explicit CTA.",
      component: () => (
          <div className="w-full h-[500px] flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden">
              <WireImage className="w-full h-2/3 rounded-none border-t-0 border-r-0 border-l-0" text="Giant Hero Asset" />
              <div className="w-full h-1/3 p-8 flex flex-col justify-center items-center text-center">
                  <WireHeading width="w-1/2" className="h-10 mb-4" />
                  <div className="w-1/3 space-y-2">
                      <WireTextLine width="w-full" />
                      <WireTextLine width="w-4/5 mx-auto" />
                  </div>
              </div>
          </div>
      )
  },
  {
      id: "Hero_12_QuirkyOverlay",
      category: "Hero Sections",
      name: "The Quirky Overlay",
      why: "A fun variation for non-corporate brands.",
      warning: "Don't use low contrast images; requires strict contrast management.",
      spec: "Background Image. Header Overlay. Subheader pushed to bottom-right corner.",
      component: () => (
          <div className="w-full h-[400px] bg-gray-900 rounded-xl border border-gray-800 relative overflow-hidden flex p-12">
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <span className="text-gray-500 font-bold tracking-[0.2em] text-4xl uppercase">Background Asset</span>
              </div>
              <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
              
              <div className="relative z-20 w-full flex flex-col justify-between">
                  <div className="w-2/3 space-y-4">
                      <div className="w-full h-16 bg-gray-100 rounded-md"></div>
                      <div className="w-4/5 h-16 bg-gray-100 rounded-md"></div>
                  </div>
                  <div className="self-end w-1/3 space-y-2 text-right flex flex-col items-end">
                      <div className="w-full h-3 bg-gray-300 rounded"></div>
                      <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
                  </div>
              </div>
          </div>
      )
  },
  {
      id: "Hero_13_Burger",
      category: "Hero Sections",
      name: "The 'Burger' Layout",
      why: "Balances visual weight with clear hierarchy.",
      warning: "Don't leave the left side empty; balance the Bottom Right text with a visual anchor.",
      spec: "Header Centered Top. Image Centered Middle. Subtext/CTA Bottom Right.",
      component: () => (
          <div className="w-full h-[500px] flex flex-col items-center p-8 bg-white rounded-xl border border-gray-200 relative">
              <WireHeading width="w-2/3" className="h-12 mb-6" />
              <WireImage className="w-3/4 h-64 z-10" text="Main Anchor Graphic" />
              <div className="absolute bottom-8 right-8 w-1/3 space-y-4 flex flex-col items-end z-20 bg-white/80 p-4 rounded-xl backdrop-blur-sm">
                  <div className="space-y-2 w-full flex flex-col items-end">
                      <WireTextLine width="w-full" />
                      <WireTextLine width="w-[85%]" />
                  </div>
                  <WireButton />
              </div>
          </div>
      )
  },
  {
      id: "Hero_14_Trend3Col",
      category: "Hero Sections",
      name: "The 'Trend' Three-Column",
      why: "High information density without feeling crowded.",
      warning: "Don't overwhelm the user; ensure the Left column remains the primary focal point.",
      spec: "Grid: 3 Col (1fr 1.5fr 1fr). Col_1: [Info]. Col_2: [Image]. Col_3: [Interactive_Widget].",
      component: () => (
          <div className="w-full h-[400px] grid grid-cols-12 gap-6 p-8 bg-white rounded-xl border border-gray-200">
              <div className="col-span-3 flex flex-col justify-center space-y-6">
                  <WireHeading width="w-full" className="h-8" />
                  <div className="space-y-2">
                      <WireTextLine width="w-full" />
                      <WireTextLine width="w-[90%]" />
                  </div>
                  <WireButton className="w-24 h-8" />
              </div>
              <div className="col-span-6 h-full border border-gray-200 rounded-xl bg-gray-50 flex items-center justify-center">
                  <span className="text-gray-400 font-bold uppercase text-xs">Hero Image</span>
              </div>
              <div className="col-span-3 flex flex-col justify-center space-y-4 border border-gray-100 bg-gray-50 p-4 rounded-xl">
                  <div className="h-16 w-full bg-white border border-gray-200 rounded-lg flex items-center px-4"><div className="w-6 h-6 rounded-full bg-gray-200"></div></div>
                  <div className="h-16 w-full bg-white border border-gray-200 rounded-lg flex items-center px-4"><div className="w-6 h-6 rounded-full bg-gray-200"></div></div>
                  <div className="h-16 w-full bg-white border border-gray-200 rounded-lg flex items-center px-4"><div className="w-6 h-6 rounded-full bg-gray-200"></div></div>
              </div>
          </div>
      )
  },
  {
      id: "Hero_15_Slant",
      category: "Hero Sections",
      name: "The Slant Layout",
      why: "Creates motion and visual interest.",
      warning: "Don't use standard buttons if the layout is non-standard; a Search Bar works well here.",
      spec: "Images Left. Text/Search Bar slanting from center to right.",
      component: () => (
          <div className="w-full h-[400px] flex items-center p-12 bg-white rounded-xl border border-gray-200 overflow-hidden relative">
              <div className="w-1/2 h-[120%] -ml-12 -mt-12 bg-gray-100 border-r-4 border-white transform -skew-x-12 relative z-10 flex items-center justify-center">
                  <span className="text-gray-400 font-bold uppercase transform skew-x-12">Dynamic Images</span>
              </div>
              <div className="w-1/2 pl-16 z-20 flex flex-col items-end text-right space-y-6">
                  <WireHeading width="w-full" className="h-14" />
                  <div className="space-y-2 flex flex-col items-end w-full">
                      <WireTextLine width="w-[90%]" />
                      <WireTextLine width="w-[70%]" />
                  </div>
                  {/* Search Bar */}
                  <div className="w-full h-12 bg-gray-50 border-2 border-gray-800 rounded-full flex items-center justify-between px-2">
                      <div className="w-1/2 h-3 bg-gray-200 ml-4 rounded"></div>
                      <div className="w-24 h-8 bg-gray-800 rounded-full"></div>
                  </div>
              </div>
          </div>
      )
  },
  {
      id: "Hero_16_Puzzle",
      category: "Hero Sections",
      name: "The 'Puzzle' Center",
      why: "Fun, bright, and strictly branded.",
      warning: "Don't use generic stock photos; images must be distinct and on-brand.",
      spec: "Subtext/CTA Center. Images Floating Left & Right.",
      component: () => (
          <div className="w-full h-[400px] flex items-center justify-center p-12 bg-gray-50 rounded-xl border border-gray-200 relative overflow-hidden">
              <div className="w-[200px] h-[250px] bg-gray-200 rounded-2xl absolute left-12 top-10 transform -rotate-6 border-4 border-white shadow-lg"></div>
              <div className="w-[150px] h-[150px] bg-gray-300 rounded-full absolute left-48 bottom-12 border-4 border-white shadow-lg"></div>
              
              <div className="w-[180px] h-[200px] bg-gray-200 rounded-2xl absolute right-12 bottom-16 transform rotate-12 border-4 border-white shadow-lg"></div>
              <div className="w-[120px] h-[120px] bg-gray-300 rounded-xl absolute right-40 top-16 transform -rotate-12 border-4 border-white shadow-lg"></div>

              <div className="w-full max-w-md z-20 bg-white/80 p-8 rounded-2xl backdrop-blur-md border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-6">
                  <WireHeading width="w-full" className="h-10" />
                  <div className="space-y-2 w-full flex flex-col items-center">
                      <WireTextLine width="w-full" />
                      <WireTextLine width="w-3/4" />
                  </div>
                  <WireButton className="w-48 rounded-xl" />
              </div>
          </div>
      )
  },
  {
      id: "Hero_17_BottomHeavy",
      category: "Hero Sections",
      name: "The Bottom-Heavy Split",
      why: "Very unique, but risks confusion. Eye tracking is zigzag.",
      warning: "Don't use if clarity is priority.",
      spec: "Header Bottom Left. Images Center (Slanted). Subtext Top Right.",
      component: () => (
          <div className="w-full h-[500px] bg-white rounded-xl border border-gray-200 relative overflow-hidden p-8">
              <div className="absolute top-8 right-8 w-1/4 space-y-2 text-right flex flex-col items-end z-20">
                  <WireTextLine width="w-full" />
                  <WireTextLine width="w-[80%]" />
                  <WireTextLine width="w-[60%]" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-[60%] h-[300px] bg-gray-100 border border-gray-200 transform -rotate-6 rounded-3xl flex items-center justify-center shadow-sm">
                      <span className="font-bold text-gray-400 uppercase text-xs">Slanted Visual</span>
                  </div>
              </div>

              <div className="absolute bottom-8 left-8 w-1/3 z-20 space-y-6">
                  <WireHeading width="w-full" className="h-16" />
                  <WireButton />
              </div>
          </div>
      )
  },
  {
      id: "Hero_18_TextMask",
      category: "Hero Sections",
      name: "Image-In-Text Mask",
      why: "'A picture is worth a thousand words' inside the H1.",
      warning: "Don't use detailed images; they won't be legible inside the letters. Use textures/colors.",
      spec: "H1_Style: background-clip: text; color: transparent. Font-Weight MUST be 900.",
      component: () => (
          <div className="w-full h-[400px] flex flex-col items-center justify-center bg-white rounded-xl border border-gray-200">
              <div className="relative text-[120px] font-black uppercase leading-none tracking-tighter w-full text-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-500 to-gray-200 mix-blend-multiply opacity-80"></div>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400 relative z-10">MASK</span>
              </div>
              <div className="w-1/3 mt-8 space-y-3 flex flex-col items-center">
                  <WireTextLine width="w-full" />
                  <WireTextLine width="w-3/4" />
                  <WireButton className="mt-6 rounded-full" />
              </div>
          </div>
      )
  }
];

const VIDEO_HERO18 = '18 Hero Section Designs You Can Steal';
export const hero18Layouts = _hero18Raw.map(l => ({ ...l, video: VIDEO_HERO18 }));
