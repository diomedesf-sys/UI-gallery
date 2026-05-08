import React from 'react';
import { WireHeading, WireTextLine, WireImage, WireButton } from '../components/Wireframes';

const _properRaw = [
  {
      id: "Org_Nav_Minimal", category: "Page Blocks", name: "The 'Bleed Point' Navigation",
      why: "Prevents user distraction; essential links only.", warning: "Don't put links in the nav unless absolutely necessary.",
      spec: "Flex_Container: [Logo] + [Links] + [CTA]. Link_List_Count <= 5.",
      component: () => (
          <div className="w-full bg-white border-b flex items-center justify-between px-8 py-4 sticky top-0 z-50 shadow-sm">
              <div className="text-xl font-black tracking-tighter uppercase border-2 border-black px-2 py-1">LOGO</div>
              <div className="flex gap-8">
                  <div className="text-sm font-semibold text-gray-500 hover:text-black cursor-pointer">About</div>
                  <div className="text-sm font-semibold text-gray-500 hover:text-black cursor-pointer">Services</div>
                  <div className="text-sm font-semibold text-gray-500 hover:text-black cursor-pointer">Pricing</div>
                  <div className="text-sm font-semibold text-gray-500 hover:text-black cursor-pointer">Contact</div>
              </div>
              <WireButton className="h-10 px-6 rounded-full" />
          </div>
      )
  },
  {
      id: "Org_Hero_Conversion", category: "Page Blocks", name: "The Optimized Hero",
      why: "Determines if a user bounces or scrolls; must instantly communicate value.", warning: "Don't be vague in the header.",
      spec: "Stack_Order: 1. Header (What/Who), 2. CTA, 3. Social Proof, 4. Visual Media.",
      component: () => (
          <div className="w-full min-h-[500px] p-12 bg-gray-50 border flex flex-col items-center justify-center text-center">
              <WireHeading width="w-3/4" className="mb-4 h-12" />
              <WireTextLine width="w-1/2" className="mb-8" />
              <WireButton className="mb-12 h-14 px-10 text-lg rounded-xl" />
              
              <div className="flex flex-col items-center mb-12">
                  <div className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Trusted By 1000+ Companies</div>
                  <div className="flex gap-6 opacity-50">
                      <div className="w-20 h-6 bg-gray-300 rounded"></div>
                      <div className="w-20 h-6 bg-gray-300 rounded"></div>
                      <div className="w-20 h-6 bg-gray-300 rounded"></div>
                      <div className="w-20 h-6 bg-gray-300 rounded"></div>
                  </div>
              </div>

              <WireImage className="w-4/5 h-64 shadow-2xl rounded-2xl border-4 border-white" text="Product Demo Video" />
          </div>
      )
  },
  {
      id: "Org_Body_CTA", category: "Page Blocks", name: "The Body CTA",
      why: "Users are warmer and more educated here; conversion chance is higher.", warning: "Don't forget a dedicated CTA section inside the body.",
      spec: "Container: Full Width. Content: H2_Action_Title + Primary_Button_Huge.",
      component: () => (
          <div className="w-full p-20 bg-blue-600 text-white border flex flex-col items-center text-center">
              <WireHeading width="w-2/3" className="bg-white mb-6 h-12 opacity-90" />
              <WireTextLine width="w-1/2" className="bg-blue-300 mb-10" />
              <div className="w-64 h-16 bg-black text-white font-bold rounded-xl flex items-center justify-center shadow-2xl cursor-pointer hover:bg-gray-800 transition-colors">
                  START YOUR FREE TRIAL
              </div>
          </div>
      )
  },
  {
      id: "Org_Footer_SEO", category: "Page Blocks", name: "The Functional Footer",
      why: "Helps search engines crawl the site and catches users.", warning: "Focus on utility and SEO structure.",
      spec: "Grid_4_Col: [Brand_Info] + [Nav_Links_All] + [Social_Icons] + [Newsletter_Form].",
      component: () => (
          <div className="w-full bg-gray-900 text-gray-400 p-16 grid grid-cols-4 gap-12 text-sm border-t-8 border-black">
              <div className="space-y-6">
                  <div className="text-xl font-black tracking-tighter text-white uppercase border-2 border-white px-2 py-1 inline-block">LOGO</div>
                  <WireTextLine className="bg-gray-700" />
                  <WireTextLine className="bg-gray-700" />
                  <div className="flex gap-4 mt-6">
                      <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                  </div>
              </div>

              <div>
                  <div className="font-bold text-white mb-6 uppercase tracking-wider">Product</div>
                  <div className="space-y-3">
                      <div>Features</div><div>Pricing</div><div>Integrations</div><div>Changelog</div>
                  </div>
              </div>

              <div>
                  <div className="font-bold text-white mb-6 uppercase tracking-wider">Company</div>
                  <div className="space-y-3">
                      <div>About Us</div><div>Careers</div><div>Blog</div><div>Contact</div>
                  </div>
              </div>

              <div>
                  <div className="font-bold text-white mb-6 uppercase tracking-wider">Subscribe</div>
                  <div className="space-y-4">
                      <div className="text-xs leading-relaxed">Get the latest updates and news directly to your inbox.</div>
                      <div className="flex">
                          <input type="text" className="w-full bg-gray-800 border-none rounded-l-md px-4 py-2 outline-none" placeholder="Enter email" readOnly />
                          <div className="bg-blue-600 text-white px-4 py-2 rounded-r-md font-bold cursor-pointer">{"->"}</div>
                      </div>
                  </div>
              </div>
          </div>
      )
  }
];

const VIDEO_PROPER = 'How to Properly Layout a Website (in 8 Minutes)';
export const properLayouts = _properRaw.map(l => ({ ...l, video: VIDEO_PROPER }));
