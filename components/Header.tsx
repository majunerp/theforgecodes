"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-600/20 bg-zinc-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/60 shadow-lg shadow-amber-900/20 transition-all duration-300">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="flex h-20 items-center justify-start">
            <Link className="flex items-center space-x-3 group" href="/">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative flex items-center justify-center w-12 h-12 bg-zinc-900 rounded-lg border-2 border-amber-600/50 group-hover:border-amber-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-amber-500 group-hover:text-amber-400 transition-colors">
                    <path d="M14 10.5v.5a1 1 0 0 0 1 1h.5"></path>
                    <path d="M3 7v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 0 1-1v-1"></path>
                    <path d="M11 7v4.586a1 1 0 0 1-.293.707l-2.293 2.293a1 1 0 0 0-.293.707V21"></path>
                    <path d="M16 3l2.5 2.5-1.5 1.5L19 9l2-2-1.5-1.5L22 3z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">THE FORGE</span>
                <span className="text-[10px] text-amber-600/80 tracking-widest font-semibold">CODES &amp; GUIDES</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
