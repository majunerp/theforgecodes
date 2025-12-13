import type { Metadata } from "next";
import CopyButton from "@/components/CopyButton";

const lastUpdated = "December 12, 2025";

const activeCodes = [
  {
    code: "FREESPINS",
    reward: "+8 Race Rerolls, +1 Luck Totem",
    status: "New",
    note: "Fresh drop after the latest reroll event.",
    added: "December 12, 2025",
  },
  {
    code: "SORRYFORSHUTDOWN",
    reward: "+5 Race Rerolls",
    status: "Active",
    note: "Compensation for the recent downtime.",
    added: "December 10, 2025",
  },
];

const expiredCodes = [
  { code: "PEAK!", reward: "+10 Rerolls" },
  { code: "400K!", reward: "+8 Rerolls" },
  { code: "300K!", reward: "+5 Rerolls, +1 Luck Totem" },
  { code: "100KLIKES", reward: "+10 Rerolls" },
  { code: "200K!", reward: "+5 Rerolls" },
  { code: "100K!", reward: "+3 Rerolls" },
  { code: "40KLIKES", reward: "+5 Rerolls" },
  { code: "20KLIKES", reward: "+2 Rerolls" },
  { code: "15KLIKES", reward: "+2 Rerolls" },
  { code: "10KLIKES", reward: "+2 Rerolls, +1 Luck Totem" },
  { code: "5KLIKES", reward: "+2 Rerolls, +1 Miner Totem" },
  { code: "BETARELEASE!", reward: "+2 Rerolls" },
  { code: "POSTRELEASEQNA", reward: "+1 Reroll" },
];

const redeemSteps = [
  { title: "Open Settings", detail: "Tap the gear icon in the top-left corner after loading The Forge." },
  { title: "Scroll to Codes", detail: "Inside Settings, scroll to the bottom until you see the Codes field." },
  { title: "Enter the code exactly", detail: "Type or paste the code from this page. Keep the caps and do not include brackets." },
  { title: "Press Claim", detail: "Hit Claim and check your reroll and totem inventory before leaving the menu." },
];

const rerollTips = [
  { title: "Save rerolls for legendary races", detail: "Stack codes before chasing Dragonborn or Angel and reroll during double luck boosts." },
  { title: "Pair rerolls with Luck Totems", detail: "Activate the totem before rerolling or mining in the Volcanic Depths to stretch gains." },
  { title: "Farm crystals while codes last", detail: "Combine active codes with daily quests and chest routes so you always have rerolls ready." },
];

const troubleshooting = [
  { title: "Case sensitivity", detail: "Enter the codes in caps and without spaces. Avoid adding the square brackets you see in screenshots." },
  { title: "Expired milestones", detail: "Older milestones like 300K!, 100KLIKES, and 5KLIKES are now archived and will not redeem." },
  { title: "Outdated server", detail: "If Claim does nothing, rejoin a fresh server or reboot Roblox after an update." },
];

const updateLog = [
  { date: "December 12, 2025", detail: "Added FREESPINS (+8 rerolls, +1 Luck Totem) from the new reroll event." },
  { date: "December 10, 2025", detail: "SORRYFORSHUTDOWN remains active as compensation for downtime." },
  { date: "December 3, 2025", detail: "Moved milestone codes such as 300K! and 100KLIKES into the expired archive." },
];

const faqEntries = [
  {
    question: "What is the newest The Forge code?",
    answer: "FREESPINS is the latest code and was verified on December 12, 2025. It grants 8 rerolls and a Luck Totem.",
  },
  {
    question: "Can I still use SORRYFORSHUTDOWN?",
    answer: "Yes. It is still active and delivers 5 free race rerolls as compensation for the recent shutdown.",
  },
  {
    question: "How do I get more codes?",
    answer: "Follow the developer on social channels, check the in-game announcements, and bookmark this page. We track new drops the day they appear.",
  },
];

export const metadata: Metadata = {
  title: "The Forge Codes - Free Rerolls and Totems (December 2025)",
  description: "Updated with the newest The Forge codes including FREESPINS and SORRYFORSHUTDOWN. Redeem instructions, code archive, and tips to maximize rerolls.",
  openGraph: {
    title: "The Forge Codes - Free Rerolls and Totems (December 2025)",
    description: "Use the latest The Forge codes for rerolls, Luck Totems, and quick redemption tips.",
  },
};

export default function Home() {
  const statusStyles: Record<string, string> = {
    New: "bg-emerald-500/10 text-emerald-200 border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.2)]",
    Active: "bg-blue-500/10 text-blue-100 border-blue-400/40 shadow-[0_0_10px_rgba(59,130,246,0.2)]",
  };

  return (
    <div className="relative min-h-screen bg-black text-zinc-100 selection:bg-amber-500/30 selection:text-amber-100 flex flex-col items-center">
      <div
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(20,10,5,0.6) 40%, rgba(0,0,0,0.8) 100%), url(/forge-hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] opacity-80" />

      <div className="relative z-10 w-full max-w-6xl flex flex-col gap-12 px-6 py-12 md:gap-16 md:px-10 lg:px-16">
        <section className="w-full flex flex-col items-center text-center space-y-6 pt-4 pb-2">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              The Forge Codes (December 2025)
            </span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            Looking for the latest <span className="font-semibold text-white">The Forge codes</span> to get free{" "}
            <span className="font-semibold text-amber-400">Race Rerolls</span> and{" "}
            <span className="font-semibold text-blue-400">Gems</span>? You are in the right place. We update this page daily to ensure you never miss a reward for this popular Roblox RPG.
          </p>
          <div className="inline-flex items-center gap-3 rounded-full border border-green-500/50 bg-green-950/50 px-6 py-2.5 mt-2">
            <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="text-base font-medium text-green-500">
              Last verified: <span className="font-bold text-orange-400">December 4, 2025</span>
            </span>
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-zinc-800/60 bg-zinc-950/40 backdrop-blur-md p-6 text-center shadow-2xl shadow-black/50 md:grid-cols-3">
          <div className="group flex flex-col items-center gap-3 rounded-2xl border border-zinc-700/30 bg-zinc-900/20 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-amber-500/5">
            <span className="text-xs font-semibold text-amber-200/80 group-hover:text-amber-200 tracking-wide">Working Codes</span>
            <span className="text-4xl font-bold text-white group-hover:text-amber-400 group-hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-all">{activeCodes.length}</span>
            <p className="text-xs text-zinc-500 group-hover:text-zinc-400">Verified & Tested</p>
          </div>
          <div className="group flex flex-col items-center gap-3 rounded-2xl border border-zinc-700/30 bg-zinc-900/20 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-emerald-500/5">
            <span className="text-xs font-semibold text-emerald-200/80 group-hover:text-emerald-200 tracking-wide">Best Reward</span>
            <span className="text-4xl font-bold text-white group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.5)] transition-all">+8 Rerolls</span>
            <p className="text-xs text-zinc-500 group-hover:text-zinc-400">Includes Luck Totem</p>
          </div>
          <div className="group flex flex-col items-center gap-3 rounded-2xl border border-zinc-700/30 bg-zinc-900/20 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/5">
            <span className="text-xs font-semibold text-blue-200/80 group-hover:text-blue-100 tracking-wide">Archived</span>
            <span className="text-4xl font-bold text-white group-hover:text-blue-400 group-hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.5)] transition-all">{expiredCodes.length}</span>
            <p className="text-xs text-zinc-500 group-hover:text-zinc-400">Retired & Tracked</p>
          </div>
        </section>

        <section id="active-codes" className="space-y-6">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl text-glow tracking-tight">Active The Forge Codes</h2>
            <p className="mx-auto w-full max-w-2xl text-center text-sm text-zinc-400 md:text-base leading-relaxed whitespace-nowrap">
              Copied directly from the live list <span className="text-amber-500 font-mono font-medium">(FREESPINS, SORRYFORSHUTDOWN)</span> and tested on {lastUpdated}.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm shadow-2xl shadow-black/40">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-800/50 text-center">
                <thead className="bg-gradient-to-r from-amber-900/20 via-orange-900/20 to-amber-900/20">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-amber-500/80">Code</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-amber-500/80">Reward</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-amber-500/80">Status</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-amber-500/80">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50">
                  {activeCodes.map((item) => (
                    <tr key={item.code} className="group hover:bg-amber-500/5 transition-colors duration-200">
                      <td className="px-6 py-5">
                        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
                          <span className="font-mono text-lg font-bold text-white group-hover:text-amber-400 transition-colors tracking-wide">{item.code}</span>
                          <CopyButton value={item.code} />
                        </div>
                        <p className="mt-1.5 text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Added {item.added}</p>
                      </td>
                      <td className="px-6 py-5 text-sm font-medium text-amber-100 group-hover:text-white transition-colors">{item.reward}</td>
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wide backdrop-blur-md ${statusStyles[item.status] ?? ""}`}
                        >
                          <span className="relative flex h-2.5 w-2.5">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${item.status === 'New' ? 'bg-emerald-400' : 'bg-blue-400'}`}></span>
                            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${item.status === 'New' ? 'bg-emerald-500' : 'bg-blue-500'}`}></span>
                          </span>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="redeem" className="grid gap-6 rounded-3xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-md p-6 shadow-xl shadow-black/30 md:grid-cols-[1.1fr_0.9fr] md:items-start overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />
          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white md:text-3xl text-glow">How to Redeem</h2>
              <p className="text-xs text-zinc-400 md:text-sm">
                Follow these exact steps to claim your rewards in The Forge.
              </p>
            </div>
            <div className="space-y-4">
              {redeemSteps.map((step, index) => (
                <div key={step.title} className="group flex gap-4 items-start">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-base font-bold text-amber-500 shadow-lg group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-400 transition-all duration-300">
                    {index + 1}
                  </div>
                  <div className="space-y-0.5 pt-0.5">
                    <p className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">{step.title}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-black/60 shadow-2xl transition-all hover:border-amber-500/50 hover:shadow-amber-500/10">
              <div className="overflow-hidden">
                <img src="/codes-step-1.jpg" alt="Step one: open Settings and find the Codes bar" className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="border-t border-zinc-800 bg-zinc-900/80 px-3 py-2 text-xs font-medium text-zinc-300 group-hover:text-amber-100 transition-colors">Step 1: Open Settings</div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-black/60 shadow-2xl transition-all hover:border-amber-500/50 hover:shadow-amber-500/10">
              <div className="overflow-hidden">
                <img src="/codes-step-2.jpg" alt="Step two: enter the code and press Claim" className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="border-t border-zinc-800 bg-zinc-900/80 px-3 py-2 text-xs font-medium text-zinc-300 group-hover:text-amber-100 transition-colors">Step 2: Enter code & Claim</div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-md p-6 text-center shadow-lg shadow-black/30 hover:border-zinc-700 transition-colors">
            <h3 className="text-xl font-bold text-white text-glow">Reroll Strategy</h3>
            <div className="grid gap-3">
              {rerollTips.map((tip) => (
                <div key={tip.title} className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 text-left transition-all hover:bg-zinc-800/60 hover:border-amber-500/30">
                  <p className="text-sm font-bold text-amber-200 group-hover:text-amber-100 mb-1">{tip.title}</p>
                  <p className="text-xs text-zinc-400 group-hover:text-zinc-300">{tip.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-md p-6 text-center shadow-lg shadow-black/30 hover:border-zinc-700 transition-colors">
            <h3 className="text-xl font-bold text-white text-glow">Troubleshooting</h3>
            <div className="grid gap-3">
              {troubleshooting.map((issue) => (
                <div key={issue.title} className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 text-left transition-all hover:bg-zinc-800/60 hover:border-red-500/30">
                  <p className="text-sm font-bold text-red-200 group-hover:text-red-100 mb-1">{issue.title}</p>
                  <p className="text-xs text-zinc-400 group-hover:text-zinc-300">{issue.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl font-bold text-white md:text-3xl text-glow">Expired Archive</h2>
            <p className="text-xs text-zinc-400 md:text-sm">Retired codes tracking to help you identify obsolete rewards.</p>
          </div>
          <div className="grid gap-3 rounded-3xl border border-zinc-800/60 bg-zinc-950/40 backdrop-blur-md p-6 text-center shadow-lg shadow-black/30 md:grid-cols-2 lg:grid-cols-3">
            {expiredCodes.map((item) => (
              <div key={item.code} className="flex flex-col items-center gap-1.5 rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-3 text-center transition-all hover:border-zinc-700 hover:bg-zinc-900/60">
                <div className="w-full text-center">
                  <p className="font-mono text-base font-bold text-zinc-500 line-through">{item.code}</p>
                  <p className="text-[10px] text-zinc-600">{item.reward}</p>
                </div>
                <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                  Expired
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-zinc-800/60 bg-zinc-950/60 backdrop-blur-md p-6 text-center shadow-lg shadow-black/30 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white text-glow">Update Log</h3>
            <div className="relative border-l border-zinc-800 ml-3 space-y-4 py-1">
              {updateLog.map((entry) => (
                <div key={entry.date} className="relative pl-5 text-left">
                  <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-amber-600 ring-4 ring-zinc-950" />
                  <p className="text-[10px] font-bold uppercase tracking-wider text-amber-500 mb-0.5">{entry.date}</p>
                  <p className="text-xs text-zinc-300 leading-relaxed">{entry.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white text-glow">FAQ</h3>
            <div className="space-y-3">
              {faqEntries.map((item) => (
                <div key={item.question} className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 text-left transition-colors hover:bg-zinc-900/50">
                  <p className="text-xs font-bold text-white mb-1.5">{item.question}</p>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden space-y-3 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-900/40 via-red-900/20 to-black p-8 text-center shadow-2xl shadow-amber-900/20">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-amber-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-32 w-32 rounded-full bg-red-500/20 blur-3xl animate-pulse delay-700" />

          <h2 className="relative text-2xl font-bold text-white md:text-4xl text-glow text-center">Stay Ahead in The Forge</h2>
          <p className="mx-auto w-full max-w-2xl text-center text-sm text-zinc-400 md:text-base leading-relaxed whitespace-nowrap">
            Bookmark this hub to grab new codes the moment they drop, and pair them with the redeem steps above so you never miss free rerolls or totems.
          </p>
          <div className="relative pt-2 flex justify-center">
            <a
              href="#active-codes"
              className="rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-amber-900/40 transition-all hover:scale-105 hover:shadow-amber-600/60"
            >
              View working codes
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
