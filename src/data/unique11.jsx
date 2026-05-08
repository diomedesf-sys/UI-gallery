import React from 'react';
import { WireHeading, WireTextLine, WireImage, WireButton } from '../components/Wireframes';

const _unique11Raw = [
  {
    id: "Layout_01_Org_2Col",
    category: "11 Unique Sections",
    name: "The Essential 2-Column",
    why: "The 'bread and butter' of web design; users instinctively know how to read it.",
    warning: "Don't use it for every single section; it becomes exhausting and looks 'basic.'",
    spec: "Flex_Container: Row. Children: [Text_Molecule] (50%) + [Image_Atom] (50%). Flex_Direction MUST alternate (Row vs Row-Reverse).",
    component: () => (
      <div className="w-full h-[400px] flex flex-col md:flex-row items-center p-10 gap-12 bg-white rounded-xl border border-gray-200">
        <div className="w-full md:w-1/2 space-y-4">
          <WireHeading width="w-5/6" />
          <div className="space-y-2 pt-2">
              <WireTextLine width="w-full" />
              <WireTextLine width="w-[90%]" />
              <WireTextLine width="w-4/5" />
          </div>
          <WireButton className="mt-4" />
        </div>
        <WireImage className="w-full md:w-1/2 h-full" text="Image / Video" />
      </div>
    )
  },
  {
    id: "Layout_02_Org_FeatureGrid",
    category: "11 Unique Sections",
    name: "The Feature Grid (3-4 Col)",
    why: "Perfect for highlighting essential points or features high up on the page.",
    warning: "Don't exceed a 3x3 grid (9 items); personally, even 6 is pushing the limit of cognitive load.",
    spec: "Grid_Template: Repeat(3, 1fr). Cell_Content: [Icon_Atom] + [H3_Atom] + [Body_Text_Atom]. Item_Count MUST be <= 9.",
    component: () => (
      <div className="w-full h-full p-10 bg-white rounded-xl border border-gray-200 flex flex-col items-center">
         <div className="w-1/2 flex flex-col items-center space-y-4 mb-12">
            <WireHeading width="w-2/3" className="h-8" />
            <WireTextLine width="w-full" />
            <WireTextLine width="w-3/4" />
         </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="flex flex-col items-start space-y-3">
              <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
              <WireHeading width="w-2/3" className="h-5" />
              <div className="space-y-2 w-full">
                  <WireTextLine width="w-full" />
                  <WireTextLine width="w-4/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "Layout_03_Org_Centered",
    category: "11 Unique Sections",
    name: "The Vertical Center",
    why: "Focuses attention entirely on one message; standard for Sales/Landing pages.",
    warning: "Don't use complex background patterns that fight with the centered text readability.",
    spec: "Flex_Direction: Column. Align_Items: Center. Text_Align: Center. Max_Width of Text Container MUST be < 600px.",
    component: () => (
      <div className="w-full h-[400px] flex flex-col items-center justify-center p-10 bg-white rounded-xl border border-gray-200">
        <div className="w-full max-w-lg flex flex-col items-center space-y-6">
            <div className="w-24 h-3 bg-gray-300 rounded-full"></div>
            <WireHeading width="w-full" className="h-14" />
            <div className="space-y-2 w-full flex flex-col items-center">
                <WireTextLine width="w-full" />
                <WireTextLine width="w-[85%]" />
            </div>
            <div className="flex gap-4 pt-4">
                <WireButton className="w-32 rounded-full" />
                <div className="h-10 w-32 bg-white border-2 border-gray-200 rounded-full"></div>
            </div>
        </div>
      </div>
    )
  },
  {
    id: "Layout_04_Org_PeekSlider",
    category: "11 Unique Sections",
    name: "The Peek-a-boo Slider",
    why: "Allows high content density in a small vertical space.",
    warning: "Don't forget interaction cues; if there is no arrow, users won't know to drag unless the layout implies it visually.",
    spec: "Grid: 2-Col (Fixed Left, Auto Right). Right_Col: Overflow-x: scroll. Child_Width: 80%. Right_Col padding-right MUST show 20% of next slide.",
    component: () => (
      <div className="w-full h-[400px] flex flex-col md:flex-row items-center p-8 bg-white rounded-xl border border-gray-200 overflow-hidden relative">
        <div className="w-full md:w-1/3 pr-8 flex flex-col justify-center space-y-4">
          <WireHeading width="w-full" className="h-8" />
          <div className="space-y-2">
              <WireTextLine width="w-full" />
              <WireTextLine width="w-4/5" />
          </div>
          <div className="flex gap-2 pt-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-300"></div>
              <div className="w-10 h-10 rounded-full bg-gray-800"></div>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex gap-4 overflow-hidden border-l border-gray-100 pl-4">
           {[1, 2, 3].map((item) => (
             <div key={item} className={`flex-none h-[300px] bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col ${item === 3 ? 'w-16 opacity-50' : 'w-64'}`}>
                 <WireImage className="w-full h-3/5 mb-4 border-none bg-gray-200" text="" />
                 <WireHeading width="w-1/2" className="h-4 mb-2" />
                 <WireTextLine width="w-full" />
             </div>
           ))}
        </div>
      </div>
    )
  },
  {
    id: "Layout_05_Org_ProductOrbit",
    category: "11 Unique Sections",
    name: "The Product Orbit",
    why: "Creates an immersive 'Experience' rather than a standard list.",
    warning: "Don't worry if alignment feels 'loose'; the lack of strict grid alignment is what makes it feel custom.",
    spec: "Position: Relative. Center: [Product_Image_Atom]. Satellites: Absolute position [Feature_Molecule] at varying (top/left) % coords.",
    component: () => (
      <div className="w-full h-[500px] flex items-center justify-center bg-white rounded-xl border border-gray-200 relative overflow-hidden">
         <div className="w-48 h-48 rounded-full bg-gray-100 border-4 border-white shadow-xl flex items-center justify-center z-10 relative">
            <span className="font-bold text-gray-400 uppercase text-xs tracking-widest">Product</span>
         </div>
         {/* Orbiting wireframe blocks */}
         <div className="absolute top-[15%] left-[20%] w-24 space-y-2"><WireHeading width="w-full" className="h-3 ml-auto" /><WireTextLine width="w-3/4 ml-auto" /></div>
         <div className="absolute top-[20%] right-[20%] w-24 space-y-2"><WireHeading width="w-full" className="h-3" /><WireTextLine width="w-3/4" /></div>
         <div className="absolute bottom-[20%] left-[15%] w-24 space-y-2"><WireHeading width="w-full" className="h-3 ml-auto" /><WireTextLine width="w-3/4 ml-auto" /></div>
         <div className="absolute bottom-[25%] right-[15%] w-24 space-y-2"><WireHeading width="w-full" className="h-3" /><WireTextLine width="w-3/4" /></div>
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-[300px] h-[300px] rounded-full border border-dashed border-gray-200"></div>
             <div className="absolute w-[450px] h-[450px] rounded-full border border-dashed border-gray-200"></div>
         </div>
      </div>
    )
  },
  {
      id: "Layout_06_Org_ActiveTab",
      category: "11 Unique Sections",
      name: "The Interactive Tab Slider",
      why: "Engages users by requiring clicks to reveal visual information.",
      warning: "Don't use static bullets; the active bullet must change color/opacity to show it is selected.",
      spec: "State_Logic: IF Bullet_N is Clicked, THEN Image_Container = Asset_N.",
      component: () => (
          <div className="w-full h-[400px] flex flex-col md:flex-row p-8 bg-white rounded-xl border border-gray-200 gap-8">
              <WireImage className="w-full md:w-3/5 h-full" text="Active Asset" />
              <div className="w-full md:w-2/5 flex flex-col justify-center space-y-4">
                  {[1, 2, 3].map((tab, idx) => (
                      <div key={tab} className={`p-4 rounded-lg border-l-4 space-y-2 ${idx === 0 ? 'bg-gray-50 border-gray-800' : 'border-transparent opacity-40'}`}>
                          <WireHeading width="w-1/2" className="h-4" />
                          <WireTextLine width="w-[90%]" />
                      </div>
                  ))}
              </div>
          </div>
      )
  },
  {
    id: "Layout_07_Org_SplitGrid",
    category: "11 Unique Sections",
    name: "The Grid Split",
    why: "Compresses a lot of visual data (like icons) alongside a main message.",
    warning: "Don't put content on the right too often; Western eyes read left-to-right, so prioritizing text on the left is usually safer.",
    spec: "Parent: Grid 2-Col (1fr 1fr). Col_1: [Text_Molecule]. Col_2: Grid_2x2 containing [Feature_Icons].",
    component: () => (
      <div className="w-full h-[400px] flex flex-col md:flex-row p-10 bg-white rounded-xl border border-gray-200 gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6">
              <WireHeading width="w-full" className="h-12" />
              <div className="space-y-2">
                  <WireTextLine width="w-full" />
                  <WireTextLine width="w-full" />
                  <WireTextLine width="w-3/4" />
              </div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-6 h-full">
              {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-gray-50 border border-gray-100 p-6 rounded-xl flex flex-col items-center justify-center space-y-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <WireHeading width="w-1/2" className="h-3" />
                  </div>
              ))}
          </div>
      </div>
    )
  },
  {
      id: "Layout_11_Org_Bento",
      category: "11 Unique Sections",
      name: "The Bento/Mosaic Grid",
      why: "Shows priority by size; breaks the 'template' feel.",
      warning: "Don't fill every cell evenly; the uniqueness comes from the variable sizes of the grid items.",
      spec: "CSS_Grid: Auto-fit minmax(250px). Priority_Item: grid-column: span 2 OR grid-row: span 2.",
      component: () => (
        <div className="w-full h-[400px] p-8 bg-white rounded-xl border border-gray-200">
            <div className="grid grid-cols-4 grid-rows-3 gap-4 h-full">
                <div className="col-span-2 row-span-2 bg-gray-800 rounded-2xl p-6 flex flex-col justify-end">
                    <WireHeading width="w-1/2" className="h-6 mb-2 bg-gray-600" />
                    <WireTextLine width="w-3/4" className="bg-gray-600" />
                </div>
                <div className="col-span-2 bg-gray-100 rounded-2xl p-6 flex flex-col justify-center border border-gray-200">
                    <WireHeading width="w-1/3" className="h-4 mb-2" />
                    <WireTextLine width="w-1/2" />
                </div>
                <div className="bg-gray-100 rounded-2xl p-4 border border-gray-200 flex items-center justify-center"><div className="w-8 h-8 rounded bg-gray-300"></div></div>
                <div className="bg-gray-100 rounded-2xl p-4 border border-gray-200 flex items-center justify-center"><div className="w-8 h-8 rounded bg-gray-300"></div></div>
                <div className="col-span-4 bg-gray-100 rounded-2xl p-4 flex justify-between items-center border border-gray-200">
                    <WireHeading width="w-1/4" className="h-4" />
                    <div className="w-20 h-6 bg-gray-800 rounded-full"></div>
                </div>
            </div>
        </div>
      )
  },
  {
      id: "Layout_08_Org_Nested",
      category: "11 Unique Sections",
      name: "The Recursive Nesting (The 'Stripe')",
      why: "Looks highly technical and high-end by mixing alignment axes.",
      warning: "Don't stick to just horizontal or vertical; the key is alternating them (Vert -> Horiz -> Vert).",
      spec: "Recursive_Structure: Row -> Col -> Row -> Col. DO NOT nest > 3 levels deep.",
      component: () => (
        <div className="w-full h-[400px] p-8 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
            {/* L1: Row */}
            <div className="flex w-full max-w-4xl gap-8 border-2 border-dashed border-gray-300 p-6 rounded-2xl relative">
                <div className="w-1/3 space-y-4 pt-4">
                    <WireHeading width="w-full" className="h-6" />
                    <WireTextLine width="w-[90%]" />
                    <WireTextLine width="w-3/4" />
                </div>
                {/* L2: Col */}
                <div className="w-2/3 flex flex-col gap-4 border-2 border-dashed border-gray-200 p-4 rounded-xl">
                    <div className="bg-gray-100 h-10 rounded w-full flex items-center px-4"><div className="w-1/4 h-3 bg-gray-300 rounded"></div></div>
                    {/* L3: Row */}
                    <div className="flex gap-4 border border-dashed border-gray-200 p-4 rounded-lg">
                         <div className="flex-1 bg-gray-50 h-20 rounded border border-gray-100 flex items-center justify-center"><div className="w-1/2 h-3 bg-gray-300 rounded"></div></div>
                         <div className="flex-1 bg-gray-50 h-20 rounded border border-gray-100 flex items-center justify-center"><div className="w-1/2 h-3 bg-gray-300 rounded"></div></div>
                    </div>
                </div>
            </div>
        </div>
      )
  },
  {
      id: "Layout_09_Org_Img_List",
      category: "11 Unique Sections",
      name: "The Visual List",
      why: "A variation of nesting that highlights a visual anchor.",
      warning: "Don't clutter the small columns; keep the text inside the 4-column section very brief.",
      spec: "Layout: Flex Row. Left: [Image_Atom] (40%). Right: Flex_Col ([Header] + [Grid_4_Col_Features]).",
      component: () => (
          <div className="w-full h-[400px] flex p-8 gap-10 bg-white rounded-xl border border-gray-200">
              <WireImage className="w-2/5 h-full" text="Anchor Image" />
              <div className="w-3/5 flex flex-col justify-center">
                  <div className="mb-8 space-y-3">
                      <WireHeading width="w-3/4" className="h-10" />
                      <WireTextLine width="w-full" />
                      <WireTextLine width="w-[80%]" />
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      {[1, 2, 3, 4].map((item) => (
                          <div key={item} className="flex gap-4 items-start">
                              <div className="w-8 h-8 rounded bg-gray-200 shrink-0"></div>
                              <div className="space-y-2 w-full pt-1">
                                  <WireHeading width="w-1/2" className="h-3" />
                                  <WireTextLine width="w-[90%]" />
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      )
  },
  {
      id: "Layout_10_Org_Staggered",
      category: "11 Unique Sections",
      name: "The Staggered Flow",
      why: "Breaks the grid rigidity to create a sense of movement.",
      warning: "Don't let it look broken; the staggering must be intentional enough to look like 'flow.'",
      spec: "List_Container: Flex Column. Row_1: Padding-left: 40px. Row_2: Padding-left: 0. Row_3: Padding-left: 40px.",
      component: () => (
          <div className="w-full h-[500px] p-8 bg-white rounded-xl border border-gray-200 relative overflow-hidden flex justify-center">
              <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-200 -translate-x-1/2 z-0"></div>
              <div className="flex flex-col justify-between relative z-10 w-full max-w-2xl py-4 h-full">
                  <div className="flex items-center gap-6 pl-24">
                      <div className="w-12 h-12 rounded-lg bg-gray-800 shrink-0"></div>
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex-1 space-y-2">
                          <WireHeading width="w-1/2" className="h-4" /><WireTextLine width="w-full" />
                      </div>
                  </div>
                  <div className="flex items-center gap-6 pr-24 flex-row-reverse">
                      <div className="w-12 h-12 rounded-lg bg-gray-800 shrink-0"></div>
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex-1 space-y-2 flex flex-col items-end">
                          <WireHeading width="w-1/2" className="h-4" /><WireTextLine width="w-full" />
                      </div>
                  </div>
                  <div className="flex items-center gap-6 pl-24">
                      <div className="w-12 h-12 rounded-lg bg-gray-800 shrink-0"></div>
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex-1 space-y-2">
                          <WireHeading width="w-1/2" className="h-4" /><WireTextLine width="w-full" />
                      </div>
                  </div>
              </div>
          </div>
      )
  }
];

const VIDEO_UNIQUE11 = '11 Section Layouts to Make Your Website Ultra UNIQUE';
export const unique11Layouts = _unique11Raw.map(l => ({ ...l, video: VIDEO_UNIQUE11 }));
