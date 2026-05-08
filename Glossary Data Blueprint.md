# **Glossary Data Architecture: The 4 Buckets**

This document outlines the exact JSON structure we will use. Each term is placed into one of the four main "Designer Workflow" buckets (Primary Category) and assigned highly searchable attributes (Tags).

## **1\. The "Why" (Theory & Psychology)**

*Concepts that explain how users think and perceive interfaces.*

* **Preattentive Processing**  
  * *Tags:* \#Psychology, \#Perception, \#Visuals  
* **Gestalt Grouping (Similarity & Proximity)**  
  * *Tags:* \#Psychology, \#Spacing, \#UI\_Logic  
* **Cognitive Load**  
  * *Tags:* \#Psychology, \#UX, \#Minimalism  
* **Visual Hierarchy**  
  * *Tags:* \#UX, \#Typography, \#Contrast  
* **Analysis Paralysis**  
  * *Tags:* \#Psychology, \#Conversion, \#UX  
* **The Squint Test**  
  * *Tags:* \#Workflow, \#Testing, \#Accessibility  
* **The F-Pattern (and why it's bogus)**  
  * *Tags:* \#UX\_Myth, \#Eye\_Tracking

## **2\. The "How" (Rules, Constraints & Systems)**

*The mathematical rules and methodologies used to build the UI.*

* **The 4-8-16 Spacing Rule**  
  * *Tags:* \#CSS, \#Spacing, \#Systems  
* **The Reduction Spacing Method**  
  * *Tags:* \#Workflow, \#Spacing, \#Testing  
* **Text Chunking (50-75 Characters)**  
  * *Tags:* \#Typography, \#Readability, \#Copywriting  
* **Visual Compression**  
  * *Tags:* \#Workflow, \#Minimalism, \#Aesthetics  
* **Atomic Design: Atoms**  
  * *Tags:* \#Systems, \#Architecture, \#Components  
* **Atomic Design: Molecules**  
  * *Tags:* \#Systems, \#Architecture, \#Components  
* **The Engagement Line (The Fold)**  
  * *Tags:* \#Conversion, \#Layout, \#UX

## **3\. The "What" (Layouts & UI Structures)**

*The actual wireframes and code-level structural concepts.*

* **The Essential 2-Column**  
  * *Tags:* \#Layout, \#Flexbox, \#Standard  
* **The Bento Grid / Mosaic**  
  * *Tags:* \#Layout, \#CSS\_Grid, \#Modern  
* **The Peek-a-boo Slider**  
  * *Tags:* \#Layout, \#Overflow, \#Mobile\_Friendly  
* **The Product Orbit**  
  * *Tags:* \#Layout, \#Absolute\_Positioning, \#Immersive  
* **Recursive Nesting (The Stripe)**  
  * *Tags:* \#Layout, \#Flexbox, \#Complex  
* **Flex Row-Reverse**  
  * *Tags:* \#CSS, \#Flexbox, \#Code  
* **CSS Grid Auto-fit**  
  * *Tags:* \#CSS, \#Grid, \#Code

## **4\. The "Future" (Trends & Aesthetics)**

*Emerging styles and visual treatments.*

* **Anti-design / Brutalism**  
  * *Tags:* \#Aesthetics, \#Trend, \#Rule\_Breaking  
* **Glassmorphism**  
  * *Tags:* \#Aesthetics, \#Trend, \#CSS\_Effects  
* **Macro-animations**  
  * *Tags:* \#Interaction, \#Animation, \#Engagement  
* **Modular Grid Design**  
  * *Tags:* \#Aesthetics, \#Layout, \#Modern  
* **Playful 3D / WebGL**  
  * *Tags:* \#Interaction, \#Trend, \#Immersive

### **Proposed JSON Structure Example (For Anti-gravity)**

When we export this, it will look like this:

{  
  "id": "gestalt-grouping",  
  "category": "The Why",  
  "term": "Gestalt Grouping",  
  "definition": "Psychological principles explaining how humans naturally perceive objects...",  
  "tags": \["\#Psychology", "\#Spacing", "\#UI\_Logic"\],  
  "rendererId": "GestaltExampleComponent"  
}  
