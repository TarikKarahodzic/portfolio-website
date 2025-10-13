'use client';

import React from 'react';
import GradualBlur from '../../components/GradualBlur';

export default function TestPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Content */}
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Page with Bottom Blur</h1>
        
        {/* Some content to make the page scrollable */}
        {Array(30).fill(0).map((_, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Section {i + 1}</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        ))}
      </div>

      {/* Page-level blur effect */}
      <GradualBlur
        target="page"
        position="bottom"
        height="12rem"
        strength={3}
        divCount={8}
        curve="bezier"
        exponential={true}
        opacity={1}
        zIndex={1000}
      />
    </main>
  );
}