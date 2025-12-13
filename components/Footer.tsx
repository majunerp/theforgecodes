import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-amber-600/20 bg-zinc-950/80 backdrop-blur-sm relative z-10">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl px-6 py-10 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-zinc-900 rounded-lg border-2 border-amber-600/50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-500">
                    <path d="M14 10.5v.5a1 1 0 0 0 1 1h.5"></path>
                    <path d="M3 7v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 0 1-1v-1"></path>
                    <path d="M11 7v4.586a1 1 0 0 1-.293 .707l-2.293 2.293a1 1 0 0 0-.293 .707V21"></path>
                    <path d="M16 3l2.5 2.5-1.5 1.5L19 9l2-2-1.5-1.5L22 3z"></path>
                  </svg>
                </div>
                <span className="text-lg font-bold tracking-wider bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">THE FORGE</span>
              </div>
              <p className="text-sm text-zinc-400 max-w-md">Your ultimate source for the forge codes, guides, and strategies. Master the art of forging and become legendary.</p>
              <p className="text-sm font-semibold text-amber-600 italic">Power. Craftsmanship. Strength.</p>
            </div>
            <div className="flex flex-col space-y-3 md:items-end">
              <h3 className="text-base font-semibold text-zinc-300">Legal</h3>
              <Link className="text-sm text-zinc-500 hover:text-amber-500 transition-colors" href="/privacy">Privacy Policy</Link>
              <Link className="text-sm text-zinc-500 hover:text-amber-500 transition-colors" href="/terms">Terms of Service</Link>
              <p className="text-sm text-zinc-500">
                Contacts: <a href="mailto:support@theforgecodes.org" className="hover:text-amber-500 transition-colors">support@theforgecodes.org</a>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
            <p className="text-sm text-zinc-500">2025 The Forge Codes. All rights reserved.</p>
            <p className="mt-3 text-xs text-zinc-600">The Forge is not affiliated with or endorsed by Roblox Corporation. All game assets, names, and properties are trademarks of their respective owners.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
