'use client';
import { useState } from "react";

export default function Navbar() {
  const [cartCount] = useState(3);

  return (
    <div className="flex items-center gap-1">
      <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>
      <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 bg-blue-500 text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
            {cartCount}
          </span>
        )}
      </button>
      <div className="h-8 w-px bg-gray-200 mx-2" />
      <div className="flex items-center gap-3 cursor-pointer pr-2">
        <div className="w-9 h-9 rounded-full bg-amber-100 overflow-hidden flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-gray-800 leading-none">Admin User</p>
          <p className="text-xs text-gray-400 mt-0.5">KSHRD</p>
        </div>
      </div>
    </div>
  );
}