import React from 'react';
import { WireHeading, WireTextLine, WireImage, WireButton } from '../components/Wireframes';

const _grid33Raw = [
  // --- 1-COL LAYOUTS (8) ---
  {
      id: "1Col_01_Org_CenterStack", category: "Standard Grids", name: "The Center Stack",
      why: "Direct and focused; ideal for high-conversion hero sections.", warning: "Remove sidebars to keep focus 100% on the CTA.",
      spec: "Align: Center. Max-Width: 800px. Margin-Top(Image) > 60px.",
      component: () => (
          <div className="w-full h-[400px] p-8 bg-white border flex flex-col items-center overflow-auto">
              <WireHeading width="w-2/3" className="mb-4 text-center" />
              <WireTextLine width="w-1/2" className="mb-2" />
              <WireTextLine width="w-1/3" className="mb-6" />
              <WireButton className="mb-10" />
              <WireImage className="w-3/4 h-48" text="Centered Image" />
          </div>
      )
  },
  {
      id: "1Col_02_Org_LeftStack", category: "Standard Grids", name: "Left Aligned Stack",
      why: "Better legibility for longer headlines.", warning: "Keep CTA tight to the text block.",
      spec: "Align: Left. Text-Box width < 60ch.",
      component: () => (
          <div className="w-full h-[400px] p-12 bg-white border flex flex-col items-start">
              <div className="max-w-xl w-full">
                  <WireHeading width="w-full" className="mb-4" />
                  <WireTextLine width="w-3/4" className="mb-2 bg-gray-300" />
                  <WireTextLine width="w-2/3" className="mb-6 bg-gray-300" />
                  <WireButton />
              </div>
          </div>
      )
  },
  {
      id: "1Col_03_Org_BoldOverlay", category: "Standard Grids", name: "Text Over Image (Bold)",
      why: "High visual impact for creative agencies.", warning: "Ensure text is readable against busy backgrounds.",
      spec: "Bg-Image: High_Contrast. Font-Weight > 700.",
      component: () => (
          <div className="w-full h-[400px] bg-gray-900 border relative flex items-center justify-center p-12 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-30"><span className="text-gray-500 text-6xl font-bold uppercase tracking-widest">BOLD IMAGE</span></div>
              <WireHeading width="w-full" className="h-20 bg-white mix-blend-difference relative z-10" />
          </div>
      )
  },
  {
      id: "1Col_04_Org_SubtleOverlay", category: "Standard Grids", name: "Text Over Image (Subtle)",
      why: "Creates mood using soft backgrounds.", warning: "Don't use small text without a dark scrim.",
      spec: "Bg-Image: Low_Contrast. Text: White. Overlay: Black_20%.",
      component: () => (
          <div className="w-full h-[400px] bg-gray-200 border relative flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 w-full flex flex-col items-center">
                  <WireHeading width="w-3/4" className="bg-white mb-4" />
                  <WireTextLine width="w-1/2" className="bg-white/80" />
              </div>
          </div>
      )
  },
  {
      id: "1Col_05_Org_Funnel", category: "Standard Grids", name: "The Visual Funnel",
      why: "Geometry physically points the user to the scroll area.", warning: "Everything should point down.",
      spec: "Element_Widths: 100% -> 60% -> 10%.",
      component: () => (
          <div className="w-full h-[400px] p-8 bg-white border flex flex-col items-center space-y-6">
              <WireHeading width="w-full" className="h-16" />
              <WireImage className="w-3/5 h-32" text="Image" />
              <div className="w-10 h-10 border-b-4 border-r-4 border-gray-800 transform rotate-45 mt-4"></div>
          </div>
      )
  },
  {
      id: "1Col_06_Org_TextHero", category: "Standard Grids", name: "The 'Only Text' Hero",
      why: "Bold typography can replace imagery if copy is strong.", warning: "The typography is the image.",
      spec: "Font-Size: Display_XL. Line-Height: 0.9. Tight letter-spacing.",
      component: () => (
          <div className="w-full h-[400px] p-12 bg-white border flex flex-col justify-center items-center">
              <div className="w-full h-24 bg-black rounded mb-2"></div>
              <div className="w-5/6 h-24 bg-black rounded"></div>
          </div>
      )
  },
  {
      id: "1Col_07_Page_PopIn", category: "Standard Grids", name: "Scroll Pop-ins",
      why: "Adds delight and signals 'this site is alive.'", warning: "Animation should support the story, not block text.",
      spec: "Pop images into center column on scroll.",
      component: () => (
          <div className="w-full h-[400px] p-8 bg-white border flex flex-col items-center space-y-8 overflow-y-auto relative">
              <WireHeading width="w-1/2" />
              <div className="w-1/3 h-32 bg-gray-100 border-2 border-blue-400 border-dashed rounded-xl transform scale-90 opacity-70 flex items-center justify-center">Pop In</div>
              <WireTextLine width="w-1/2" />
          </div>
      )
  },
  {
      id: "1Col_08_Org_Seed", category: "Standard Grids", name: "The Seed Stack",
      why: "Varies line height and contrast to create hierarchy in one column.", warning: "Line-height is the main separator.",
      spec: "H1: Bright/Big. Sub: Dark/Small. Gap: Large.",
      component: () => (
          <div className="w-full h-[400px] p-12 bg-white border flex flex-col items-center">
              <WireHeading width="w-2/3" className="h-16 mb-2 bg-blue-600" />
              <WireTextLine width="w-1/3" className="bg-gray-800 mb-16" />
              <WireImage className="w-full h-32" text="Content" />
          </div>
      )
  },

  // --- 2-COL LAYOUTS (10) ---
  {
      id: "2Col_01_Org_Standard", category: "Standard Grids", name: "Standard Split",
      why: "The familiar 'Bread and Butter' layout.", warning: "Don't repeat it 5x.",
      spec: "Grid: 1fr 1fr. Col_1: Text. Col_2: Image.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border flex items-center gap-10">
              <div className="w-1/2 space-y-4"><WireHeading /><WireTextLine /><WireButton /></div>
              <WireImage className="w-1/2 h-full" />
          </div>
      )
  },
  {
      id: "2Col_02_Org_CardSplit", category: "Standard Grids", name: "The Card Split",
      why: "Groups content neatly; feels like a 'package.'", warning: "Give card a border or shadow.",
      spec: "Col_1: Card_Molecule. Col_2: Image_Atom.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-gray-50 border flex items-center gap-10">
              <div className="w-1/2 bg-white p-8 rounded-xl shadow-md border space-y-4">
                  <WireHeading /><WireTextLine /><WireTextLine width="w-3/4" /><WireButton />
              </div>
              <WireImage className="w-1/2 h-full bg-white shadow-md border-0" />
          </div>
      )
  },
  {
      id: "2Col_03_Org_Editorial", category: "Standard Grids", name: "Creative White Space",
      why: "Creates a high-end 'Editorial' feel.", warning: "Don't fill the gap; the emptiness is the design element.",
      spec: "Grid: 2-Col. Img_A: Top-Left. Img_B: Bottom-Right. Gap: Min 100px.",
      component: () => (
          <div className="w-full h-[400px] p-8 bg-white border grid grid-cols-2 gap-8">
              <div className="flex items-start"><WireImage className="w-3/4 h-48" text="Image A" /></div>
              <div className="flex items-end justify-end"><WireImage className="w-3/4 h-48" text="Image B" /></div>
          </div>
      )
  },
  {
      id: "2Col_04_Org_ImgStack", category: "Standard Grids", name: "Image-Under-Image",
      why: "Adds depth by layering visuals in one column.", warning: "Ensure breathing room between stacked images.",
      spec: "Img_A: Margin-Bottom 20px. Img_B: Margin-Left 40px. Img_B Z-Index > Img_A.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border flex gap-10">
              <div className="w-1/2 space-y-4 pt-10"><WireHeading /><WireTextLine /></div>
              <div className="w-1/2 relative">
                  <div className="absolute top-0 right-10 w-2/3 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl z-0"></div>
                  <div className="absolute top-24 left-10 w-2/3 h-48 bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl z-10 shadow-lg"></div>
              </div>
          </div>
      )
  },
  {
      id: "2Col_05_Org_FakeGrid", category: "Standard Grids", name: "The 'Fake' 2-Column",
      why: "Complex grid alignment that looks simple.", warning: "Use 40/60 split, not 50/50.",
      spec: "Grid: 5-Col. Text: Span 2. Image: Span 3.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border grid grid-cols-5 gap-6 items-center">
              <div className="col-span-2 space-y-4"><WireHeading width="w-full" /><WireTextLine /></div>
              <div className="col-span-3 h-full"><WireImage className="w-full h-full" /></div>
          </div>
      )
  },
  {
      id: "2Col_06_Org_BentoVideo", category: "Standard Grids", name: "Bento A (Video Focus)",
      why: "Highlights media while keeping text accessible.", warning: "Make the most important element the biggest.",
      spec: "Grid: 2fr 1fr. Area_1: Video. Area_2: Text_Card.",
      component: () => (
          <div className="w-full h-[400px] p-8 bg-white border flex gap-4">
              <div className="w-2/3 bg-gray-900 rounded-2xl flex items-center justify-center text-gray-500 font-bold tracking-widest">VIDEO</div>
              <div className="w-1/3 bg-gray-100 rounded-2xl border flex flex-col justify-end p-6 space-y-4">
                  <WireHeading width="w-full" className="h-6" /><WireTextLine />
              </div>
          </div>
      )
  },
  {
      id: "2Col_07_Org_BentoText", category: "Standard Grids", name: "Bento B (Text Focus)",
      why: "Flips priority for reading-heavy sections.", warning: "Don't use Bento without high-quality visuals to fill the boxes.",
      spec: "Grid: 1fr 2fr. Area_1: Image. Area_2: Text_Context.",
      component: () => (
          <div className="w-full h-[400px] p-8 bg-white border flex gap-4">
              <div className="w-1/3 bg-gray-200 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-xs font-bold text-gray-400">IMAGE</div>
              <div className="w-2/3 bg-gray-50 rounded-2xl border flex flex-col p-8 space-y-4 justify-center">
                  <WireHeading width="w-3/4" /><WireTextLine /><WireTextLine width="w-5/6" /><WireButton />
              </div>
          </div>
      )
  },
  {
      id: "2Col_08_Org_ListSplit", category: "Standard Grids", name: "The Icon Divider",
      why: "Makes dense text digestible.", warning: "Break text visually with lines/icons.",
      spec: "Col_2: List_Molecule with Icons and Bottom Borders.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border flex gap-12">
              <div className="w-1/2"><WireHeading /></div>
              <div className="w-1/2 flex flex-col gap-4">
                  {[1,2,3].map(i => (
                      <div key={i} className="border-b border-gray-200 pb-4 flex gap-4">
                          <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                          <div className="w-full space-y-2"><WireHeading width="w-1/2" className="h-4"/><WireTextLine/></div>
                      </div>
                  ))}
              </div>
          </div>
      )
  },
  {
      id: "2Col_09_Org_StepStack", category: "Standard Grids", name: "Header/Card Variation",
      why: "Breaks monotony of standard text columns.", warning: "Vary the vertical rhythm.",
      spec: "Col_1: Flex-Col with varying gap.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border flex gap-10">
              <div className="w-1/2 flex flex-col justify-between">
                  <WireHeading />
                  <WireImage className="h-32 my-4 border-none bg-gray-100" text="" />
                  <div className="bg-gray-800 text-white p-4 rounded-xl flex justify-between"><div className="w-1/2 h-4 bg-gray-600 rounded"></div><div className="w-8 h-4 bg-gray-500 rounded"></div></div>
              </div>
              <WireImage className="w-1/2 h-full" />
          </div>
      )
  },
  {
      id: "2Col_10_Org_Offset", category: "Standard Grids", name: "Mixed Alignment",
      why: "Uses offset columns to create a 'step' effect.", warning: "Align to the edges of the parent container.",
      spec: "Col_1: Width 30%. Col_2: Width 70%. Align: Offset-Top.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border flex gap-6">
              <div className="w-1/3 h-48 bg-gray-100 rounded-xl mt-32 border"></div>
              <div className="w-2/3 h-64 bg-gray-800 rounded-xl mb-10 flex flex-col justify-end p-6"><WireHeading width="w-1/2" className="h-6 bg-gray-600"/></div>
          </div>
      )
  },

  // --- 3-COL LAYOUTS (9) ---
  {
      id: "3Col_01_Org_Diagonal", category: "Standard Grids", name: "The Diagonal Balance",
      why: "Guides eye to the center 'Main Character.'", warning: "Center is the hero.",
      spec: "Col_2: Scale 1.1. Z-Index: Center > Sides.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border flex justify-center items-center gap-6">
              <div className="w-1/4 h-48 bg-gray-100 rounded-xl transform translate-y-8"></div>
              <div className="w-1/3 h-64 bg-gray-800 rounded-xl shadow-xl z-10"></div>
              <div className="w-1/4 h-48 bg-gray-100 rounded-xl transform -translate-y-8"></div>
          </div>
      )
  },
  {
      id: "3Col_02_Org_Team", category: "Standard Grids", name: "Symmetrical Team Cards",
      why: "High contrast makes 'boring' info scannable.", warning: "Keep strict rhythm.",
      spec: "Repeater: 3x. Card: [Img] + [Initial] + [Bio].",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border grid grid-cols-3 gap-6">
              {[1,2,3].map(i => (
                  <div key={i} className="flex flex-col items-center space-y-4 border p-6 rounded-xl relative overflow-hidden">
                      <div className="absolute top-2 right-4 text-6xl font-black text-gray-100">A</div>
                      <div className="w-20 h-20 bg-gray-300 rounded-full z-10"></div>
                      <WireHeading width="w-2/3" className="h-4 z-10"/><WireTextLine className="z-10"/>
                  </div>
              ))}
          </div>
      )
  },
  {
      id: "3Col_03_Org_Rotate", category: "Standard Grids", name: "Rotated Card Row",
      why: "Breaks grid to feel playful.", warning: "Don't force scroll; use swipe on mobile.",
      spec: "Card: Rotate(5deg). Hover: Rotate(0deg).",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-gray-50 border flex justify-center items-center gap-4">
              <div className="w-1/3 h-64 bg-white border shadow-sm rounded-xl transform -rotate-6 p-4"><WireImage className="h-1/2 mb-4 border-none bg-gray-100"/><WireHeading className="h-4"/></div>
              <div className="w-1/3 h-64 bg-white border shadow-md rounded-xl transform rotate-3 p-4 z-10"><WireImage className="h-1/2 mb-4 border-none bg-gray-100"/><WireHeading className="h-4"/></div>
              <div className="w-1/3 h-64 bg-white border shadow-sm rounded-xl transform -rotate-2 p-4"><WireImage className="h-1/2 mb-4 border-none bg-gray-100"/><WireHeading className="h-4"/></div>
          </div>
      )
  },
  {
      id: "3Col_04_Org_MixedBento", category: "Standard Grids", name: "The Mixed Bento",
      why: "Varying spacing keeps engagement.", warning: "Highlight primary entry point.",
      spec: "Row_1: Gap 16. Row_2: Gap 32. Focus: Brand_Color.",
      component: () => (
          <div className="w-full h-[400px] p-8 bg-white border flex flex-col gap-8">
              <div className="flex gap-4 h-1/2">
                  <div className="flex-1 bg-gray-100 rounded-xl"></div>
                  <div className="flex-1 bg-blue-600 rounded-xl shadow-lg flex items-center justify-center text-white font-bold">FOCUS</div>
                  <div className="flex-1 bg-gray-100 rounded-xl"></div>
              </div>
              <div className="flex gap-8 h-1/2">
                  <div className="flex-1 bg-gray-50 border rounded-xl"></div>
                  <div className="flex-1 bg-gray-50 border rounded-xl"></div>
                  <div className="flex-1 bg-gray-50 border rounded-xl"></div>
              </div>
          </div>
      )
  },
  {
      id: "3Col_05_Org_Inverted", category: "Standard Grids", name: "The Inverted Card",
      why: "Shows versatility without code changes.", warning: "Swapping atom positions creates variety.",
      spec: "Card_A: Img-Top. Card_B: Img-Bottom. Pattern: A - B - A.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border grid grid-cols-3 gap-6">
              <div className="flex flex-col border rounded-xl p-4 gap-4"><div className="h-32 bg-gray-200 rounded-lg"></div><WireHeading className="h-4"/><WireTextLine/></div>
              <div className="flex flex-col border rounded-xl p-4 gap-4"><WireHeading className="h-4"/><WireTextLine/><div className="h-32 bg-gray-200 rounded-lg"></div></div>
              <div className="flex flex-col border rounded-xl p-4 gap-4"><div className="h-32 bg-gray-200 rounded-lg"></div><WireHeading className="h-4"/><WireTextLine/></div>
          </div>
      )
  },
  {
      id: "3Col_06_Org_Sparse", category: "Standard Grids", name: "Asymmetrical White Space",
      why: "Reduces intimidation for dense content.", warning: "Leave random cells empty.",
      spec: "Grid: 3-Col. Empty_Cells: Random.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border grid grid-cols-3 grid-rows-2 gap-8">
              <div><WireHeading className="h-6"/><WireTextLine className="mt-2"/></div>
              <div></div>
              <div><WireHeading className="h-6"/><WireTextLine className="mt-2"/></div>
              <div></div>
              <div><WireHeading className="h-6"/><WireTextLine className="mt-2"/></div>
              <div className="flex items-end justify-end"><WireButton className="h-10 w-full"/></div>
          </div>
      )
  },
  {
      id: "3Col_07_Org_Anchor", category: "Standard Grids", name: "The 'No Obligation' Anchor",
      why: "Draws attention to guarantee/objection.", warning: "Only objection-handler gets focus.",
      spec: "Header: Span 3. Card_2: Inverted_Colors & Scale 1.05x.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border flex flex-col items-center gap-8">
              <WireHeading width="w-1/3" className="h-8" />
              <div className="grid grid-cols-3 gap-6 w-full px-4">
                  <div className="border rounded-xl p-6 bg-gray-50 flex flex-col items-center"><div className="w-10 h-10 bg-gray-200 rounded-full mb-4"></div><WireTextLine/></div>
                  <div className="border border-gray-900 rounded-xl p-6 bg-gray-900 shadow-xl transform scale-110 flex flex-col items-center z-10"><div className="w-10 h-10 bg-gray-700 rounded-full mb-4"></div><WireTextLine className="bg-gray-600"/></div>
                  <div className="border rounded-xl p-6 bg-gray-50 flex flex-col items-center"><div className="w-10 h-10 bg-gray-200 rounded-full mb-4"></div><WireTextLine/></div>
              </div>
          </div>
      )
  },
  {
      id: "3Col_08_Org_Compare", category: "Standard Grids", name: "Before & After Grid",
      why: "Instantly communicates value prop.", warning: "Before must look disabled.",
      spec: "Col_1: Grayscale. Col_2/3: Brand_Color.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border grid grid-cols-3 gap-6">
              <div className="col-span-1 bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col opacity-60">
                  <div className="text-gray-400 font-bold mb-4">OLD WAY</div>
                  <div className="space-y-4"><WireTextLine/><WireTextLine/></div>
              </div>
              <div className="col-span-2 bg-blue-50 border-2 border-blue-200 rounded-xl p-6 flex flex-col relative overflow-hidden">
                  <div className="text-blue-600 font-bold mb-4">NEW WAY</div>
                  <div className="grid grid-cols-2 gap-4"><WireTextLine className="bg-blue-200"/><WireTextLine className="bg-blue-200"/></div>
              </div>
          </div>
      )
  },
  {
      id: "3Col_09_Org_Gaze", category: "Standard Grids", name: "The Gaze Bookend",
      why: "Controls user eye path.", warning: "Subjects must look at text.",
      spec: "Col_1_Img: Mirror_X. Eye_Vector -> Center.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border grid grid-cols-3 gap-6 items-center">
              <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-end pr-4 text-2xl">→</div>
              <div className="flex flex-col items-center space-y-4 text-center"><WireHeading/><WireTextLine/><WireTextLine width="w-3/4"/></div>
              <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-start pl-4 text-2xl">←</div>
          </div>
      )
  },

  // --- 4-COL LAYOUTS (6) ---
  {
      id: "4Col_01_Org_Breather", category: "Standard Grids", name: "The 'Breather' Grid",
      why: "White space as a luxury element.", warning: "Emptiness is premium.",
      spec: "Content: Headings_Only. Padding: XL. Text-Align: Center.",
      component: () => (
          <div className="w-full h-[400px] p-16 bg-white border grid grid-cols-4 gap-12 items-center">
              {[1,2,3,4].map(i => <div key={i} className="flex justify-center"><WireHeading width="w-full" className="h-6"/></div>)}
          </div>
      )
  },
  {
      id: "4Col_02_Org_Number", category: "Standard Grids", name: "Numbered Step Cards",
      why: "Numbers are eye magnets for process.", warning: "Number + headline tells the story.",
      spec: "Atom: Number_Display. Size: 3em. Color: Brand_Primary.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border grid grid-cols-4 gap-6">
              {[1,2,3,4].map(i => (
                  <div key={i} className="flex flex-col space-y-4">
                      <div className="text-5xl font-black text-blue-600 font-serif border-b-2 border-gray-100 pb-2">0{i}</div>
                      <WireHeading width="w-5/6" className="h-4"/>
                      <WireTextLine/>
                  </div>
              ))}
          </div>
      )
  },
  {
      id: "4Col_03_Org_Swipe", category: "Standard Grids", name: "Interactive Swipe Stack",
      why: "Allows deep dives without clutter.", warning: "Use only for 'extra' details.",
      spec: "Layout: Flex-Row. Overflow: Hidden. Interaction: Touch_Drag.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border flex gap-4 overflow-hidden relative">
              {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="w-1/3 flex-none bg-gray-50 border rounded-xl p-6 space-y-4 shadow-sm">
                      <div className="h-24 bg-gray-200 rounded-lg"></div>
                      <WireHeading width="w-2/3" className="h-4"/>
                  </div>
              ))}
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
      )
  },
  {
      id: "4Col_04_Org_Matrix", category: "Standard Grids", name: "The Event Matrix",
      why: "Organizes complex data vertically.", warning: "Hierarchy must be identical.",
      spec: "Header: Bg_Color. Border: Left_Solid. Btn_Align: Bottom.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border grid grid-cols-4 gap-0">
              {['bg-gray-100','bg-gray-200','bg-gray-300','bg-gray-800'].map((bg, idx) => (
                  <div key={idx} className={`flex flex-col border-r border-gray-200 last:border-0 ${idx === 3 ? 'text-white' : ''}`}>
                      <div className={`${bg} h-12 flex items-center justify-center font-bold text-xs uppercase ${idx===3 ? 'text-white':'text-gray-600'}`}>Header</div>
                      <div className="p-4 space-y-4 flex-1 flex flex-col">
                          <WireTextLine className={idx===3?'bg-gray-600':''}/>
                          <WireTextLine className={idx===3?'bg-gray-600':''}/>
                          <div className="mt-auto"><WireButton className={`w-full h-8 ${idx===3?'bg-blue-500':'bg-gray-200'}`}/></div>
                      </div>
                  </div>
              ))}
          </div>
      )
  },
  {
      id: "4Col_05_Org_WorstCase", category: "Standard Grids", name: "The 'Worst Case' Grid",
      why: "Ensures survival with dynamic content.", warning: "Design for real data (long text).",
      spec: "Min-Height: Calc(Max_Text + 40px). Overflow: Visible.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border grid grid-cols-4 gap-4 items-start">
              <div className="bg-gray-50 border rounded-lg p-4 space-y-2"><WireHeading className="h-4"/><WireTextLine/></div>
              <div className="bg-gray-50 border rounded-lg p-4 space-y-2"><WireHeading className="h-4"/><WireTextLine/><WireTextLine/><WireTextLine/></div>
              <div className="bg-gray-50 border rounded-lg p-4 space-y-2"><WireHeading className="h-4"/><WireTextLine/><WireTextLine/></div>
              <div className="bg-gray-50 border rounded-lg p-4 space-y-2"><WireHeading className="h-4"/><WireTextLine/></div>
          </div>
      )
  },
  {
      id: "4Col_06_Org_Pitch", category: "Standard Grids", name: "The Pitch & Proof",
      why: "Separates Claim from Evidence.", warning: "Image grid is visual texture only.",
      spec: "Col_1: Big Text. Cols_2-4: Img_Mosaic.",
      component: () => (
          <div className="w-full h-[400px] p-10 bg-white border grid grid-cols-4 gap-8">
              <div className="col-span-1 space-y-4 flex flex-col justify-center">
                  <WireHeading width="w-full" className="h-10"/>
                  <WireTextLine/><WireTextLine/>
              </div>
              <div className="col-span-3 grid grid-cols-3 grid-rows-2 gap-4">
                  <div className="col-span-2 row-span-2 bg-gray-200 rounded-xl"></div>
                  <div className="bg-gray-100 rounded-xl"></div>
                  <div className="bg-gray-100 rounded-xl"></div>
              </div>
          </div>
      )
  }
];

const VIDEO_GRID33 = '33 UNIQUE Website Layouts';
const COL_SUBTITLES = { '1': '1 Column', '2': '2 Columns', '3': '3 Columns', '4': '4 Columns', '5': '5 Columns' };
export const grid33Layouts = _grid33Raw.map(l => {
  const colMatch = l.id.match(/^(\d)Col_/);
  const subtitle = colMatch ? COL_SUBTITLES[colMatch[1]] : undefined;
  return { ...l, video: VIDEO_GRID33, subtitle };
});
