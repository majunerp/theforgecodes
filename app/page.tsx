import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Forge Codes - Free Roblox Rewards December 2025",
  description: "Here is the updated list of active The Forge codes for December 2025. Use them to unlock free Gems, Totems, and Race Rerolls. We have removed all expired codes.",
  openGraph: {
    title: "The Forge Codes - Free Roblox Rewards December 2025",
    description: "Get the latest the forge codes for free race rerolls and exclusive rewards",
  },
};

export default function Home() {
  const latestCodes = [
    {
      code: "300K!",
      reward: "5x Race Rerolls, 1x Luck Totem",
      description: "Latest milestone celebration code. Grants 5 race rerolls and a luck totem to boost your mining luck.",
    },
    {
      code: "200K!",
      reward: "5 Race Rerolls",
      description: "Milestone celebration code. Grants 5 free race rerolls.",
    },
    {
      code: "100KLIKES",
      reward: "10x Race Rerolls",
      description: "Major milestone reward. Grants 10 race rerolls for better chances at getting rare races.",
    },
    {
      code: "100K!",
      reward: "3 Race Rerolls",
      description: "Celebration code for 100k likes. Grants free race rerolls.",
    },
    {
      code: "40KLIKES",
      reward: "5 Race Rerolls",
      description: "Major milestone reward. Best code for new players.",
    },
    {
      code: "20KLIKES",
      reward: "2 Race Rerolls",
      description: "Grants additional chances to get a Legendary race.",
    },
    {
      code: "15KLIKES",
      reward: "2 Race Rerolls",
      description: "Milestone reward for race rerolls.",
    },
    {
      code: "10KLIKES",
      reward: "2 Race Rerolls + 1 Luck Totem",
      description: "Boost your luck for mining and crafting.",
    },
    {
      code: "5KLIKES",
      reward: "2 Race Rerolls + 1 Miner Totem",
      description: "Increases mining speed.",
    },
  ];

  const expiredCodes = ["RELEASE", "BETARELEASE!", "POSTRELEASEQNA"];

  return (
    <main className="min-h-screen bg-black flex justify-center relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.35) 0%, rgba(12,10,8,0.25) 40%, rgba(0,0,0,0.45) 100%), url(/forge-hero.png)',
          backgroundSize: '520px auto',
          backgroundPosition: 'top left',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-20 px-6 py-16 md:gap-24 md:px-10 md:py-20 lg:gap-28 lg:px-16 relative z-10">

        {/* Hero Section */}
        <section className="w-full flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              The Forge Codes (December 2025)
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            Looking for the latest <span className="font-semibold text-white">The Forge codes</span> to get free{" "}
            <span className="font-semibold text-amber-400">Race Rerolls</span> and{" "}
            <span className="font-semibold text-blue-400">Gems</span>? You are in the right place.
            We update this page daily to ensure you never miss a reward for this popular Roblox RPG.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/50 bg-green-950/50 px-5 py-2">
            <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-green-500">
              Last verified: <span className="font-bold text-orange-400">December 4, 2025</span>
            </span>
          </div>
        </section>


        {/* Active Codes Section */}
        <section className="w-full">
          <div className="mb-8 flex flex-col items-center gap-3 text-center">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-white md:text-3xl">
              <span className="h-3 w-3 rounded-full bg-amber-500 animate-pulse"></span>
              Active Codes
            </h2>
            <span className="rounded-full border border-amber-500/40 bg-amber-600/20 px-4 py-2 text-sm font-semibold text-amber-400">
              {latestCodes.length} Working
            </span>
          </div>

          <div className="mx-auto grid w-full max-w-5xl gap-8 md:grid-cols-2">
            {latestCodes.map((item, index) => (
              <div
                key={index}
                className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-800/70 bg-zinc-900/80 p-7 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:shadow-amber-600/10 md:p-8"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-xl font-bold tracking-wide text-white md:text-2xl">
                    {item.code}
                  </span>
                  <div className="flex flex-shrink-0 items-center gap-3">
                    <button
                      className="rounded-lg bg-zinc-800 p-2 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white"
                      title="Copy code"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <span className="rounded-full border border-green-500/50 bg-green-900/40 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-green-400">
                      Active
                    </span>
                  </div>
                </div>

                <p className="flex items-center gap-2 text-base font-semibold text-amber-400 md:text-lg">
                  <span>🎁</span> {item.reward}
                </p>
                <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Get More Free Rerolls */}
        <section className="w-full">
          <div className="mx-auto max-w-5xl space-y-10 rounded-3xl border border-zinc-800 bg-zinc-900/60 px-8 py-10 md:px-12 md:py-12">
            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                How to Get More Free Rerolls in The Forge
              </h2>
              <div className="mx-auto space-y-4 text-base text-zinc-300 md:max-w-3xl md:text-lg text-center">
                <p className="leading-relaxed">
                  Besides using the codes listed above, players can earn free race rerolls by completing daily quests and finding hidden chests in the <strong className="text-white">Volcanic Depths</strong>. If you are looking to get a Legendary race like the <strong className="text-white">Dragonborn</strong> or <strong className="text-white">Angel</strong>, make sure to save up your Gems.
                </p>
                <p className="leading-relaxed">
                  Don't forget to check our <span className="font-semibold text-amber-400">Race Tier List</span> to see which race you should aim for before using your rerolls! You can also visit our <span className="font-semibold text-amber-400">Races Guide</span> for detailed stats.
                </p>
              </div>
            </div>

            <div className="space-y-6 border-t border-zinc-700 pt-8">
              <h3 className="flex items-center justify-center gap-2 text-xl font-bold text-white">
                <svg className="h-5 w-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Troubleshooting: Why Codes Might Not Work
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-zinc-800/50 p-5 text-center">
                  <strong className="mb-2 block text-white">Case Sensitivity</strong>
                  <p className="text-sm text-zinc-400">Roblox codes are often case-sensitive. Make sure 'BETA' is capitalized.</p>
                </div>
                <div className="rounded-xl bg-zinc-800/50 p-5 text-center">
                  <strong className="mb-2 block text-white">Expired</strong>
                  <p className="text-sm text-zinc-400">Codes like 'RELEASE' have expired as of December 2025.</p>
                </div>
                <div className="rounded-xl bg-zinc-800/50 p-5 text-center">
                  <strong className="mb-2 block text-white">Typo</strong>
                  <p className="text-sm text-zinc-400">Ensure there are no spaces before or after the code.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expired Codes */}
        <section className="w-full">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-zinc-200 md:text-2xl">
              Expired Codes (Archive)
            </h2>
            <p className="text-sm text-zinc-500 md:text-base">For reference only — these rewards can no longer be claimed.</p>
          </div>
          <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-5 md:grid-cols-3">
            {expiredCodes.map((code, index) => (
              <div key={index} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
                <span className="font-mono font-medium text-zinc-500 line-through">
                  {code}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* How to Redeem Codes */}
        <section className="w-full border-t border-zinc-800 pt-16">
          <div className="mb-10 text-center space-y-2">
            <h2 className="text-2xl font-bold text-white md:text-4xl">
              How to Use <span className="text-amber-500">The Forge Codes</span>
            </h2>
          </div>

          {/* Screenshot */}
          <div className="mb-12 mx-auto max-w-3xl">
            <img
              src="https://assets-prd.ignimgs.com/2025/11/27/theforgecodes-2-1764262579991.png"
              alt="How to redeem codes in The Forge"
              className="w-full rounded-2xl border border-zinc-800 shadow-2xl"
            />
          </div>

          {/* Image #1 reference from IGN */}
          <div className="mx-auto mb-10 max-w-3xl overflow-hidden rounded-2xl border border-amber-500/50 bg-black/50 shadow-2xl shadow-amber-500/10 backdrop-blur">
            <img
              src="/theforgecodes-1.png"
              alt="In-game code entry screen (Image #1)"
              className="w-full object-cover"
            />
            <div className="flex items-center justify-between px-4 py-3 text-sm text-amber-200/90">
              <span className="font-semibold">Image #1</span>
              <span className="text-amber-300">In-game Codes menu preview</span>
            </div>
          </div>

          <p className="text-center text-lg text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to redeem the codes above? Here's what you need to do:
          </p>

          <div className="mx-auto max-w-3xl space-y-8">
            {[
              { step: 1, title: "Load up The Forge on Roblox" },
              { step: 2, title: "Open the Settings menu in the top left corner of the screen." },
              { step: 3, title: "Scroll down to the bottom of Settings to find the Codes bar" },
              { step: 4, title: "Copy the code from this article" },
              { step: 5, title: "Enter the code into the \"Type Here\" bar" },
              { step: 6, title: "Press claim" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-xl font-bold text-white shadow-lg">
                  {item.step}
                </div>
                <div className="pt-2">
                  <p className="text-lg md:text-xl text-white leading-relaxed">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Dominate <span className="text-amber-500">The Forge</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            Start your journey to becoming a legendary forge master. Redeem the forge codes, unlock powerful races, and conquer every island.
          </p>
        </section>

      </div>
    </main>
  );
}
