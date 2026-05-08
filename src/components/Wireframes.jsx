import React from 'react';

export const WireHeading = ({ width = "w-3/4", className = "" }) => <div className={`h-10 bg-gray-800 rounded-md ${width} ${className}`}></div>;
export const WireTextLine = ({ width = "w-full", className = "" }) => <div className={`h-3 bg-gray-200 rounded ${width} ${className}`}></div>;
export const WireImage = ({ text = "Asset", className = "" }) => (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-xl ${className}`}>
        <span className="text-gray-400 font-bold text-sm tracking-widest uppercase">{text}</span>
    </div>
);
export const WireButton = ({ className = "" }) => <div className={`h-10 w-32 bg-gray-800 rounded-md ${className}`}></div>;
