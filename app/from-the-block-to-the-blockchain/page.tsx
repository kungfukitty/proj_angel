export default function FromTheBlockToTheBlockchainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-amber-400/10 to-yellow-500/10 backdrop-blur-sm border border-amber-500/20 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4">
              From the Block to the Blockchain
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto">
              Crypto culture, luxury, and legacy—built by us, for us.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#podcast"
              className="px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold rounded-2xl hover:scale-105 transition-transform"
            >
              🎧 Listen to the Podcast
            </a>
            <a
              href="#blog"
              className="px-8 py-4 bg-zinc-800/50 backdrop-blur-sm border border-amber-500/30 text-amber-400 font-semibold rounded-2xl hover:bg-zinc-700/50 transition-colors"
            >
              📰 Read the Latest Blog
            </a>
            <a
              href="#join"
              className="px-8 py-4 bg-zinc-800/50 backdrop-blur-sm border border-amber-500/30 text-amber-400 font-semibold rounded-2xl hover:bg-zinc-700/50 transition-colors"
            >
              📝 Join the Movement
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-amber-400 mb-6">About the Movement</h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              From candy sales to crypto wallets—our stories matter. We teach, inspire, and build wealth through
              blockchain, one real-life lesson at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="blog" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-400 text-center mb-12">Featured Content</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* The Foundation */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-6 hover:border-amber-500/40 transition-colors">
              <div className="text-amber-400 font-semibold mb-2">The Foundation</div>
              <h3 className="text-xl font-bold text-white mb-4">From the Trap to Transparency: DeFi Explained</h3>
              <p className="text-zinc-400 mb-6">
                On the block, everybody knows the middleman eats the most. You hustle all week, move product, flip
                packs, and...
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-amber-500 text-black rounded-xl font-semibold hover:bg-amber-400 transition-colors">
                  Read Post →
                </button>
                <button className="px-4 py-2 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/10 transition-colors">
                  Listen →
                </button>
              </div>
            </div>

            {/* Future Forward */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-6 hover:border-amber-500/40 transition-colors">
              <div className="text-amber-400 font-semibold mb-2">Future Forward</div>
              <h3 className="text-xl font-bold text-white mb-4">Your Kid's Fundraiser Needs Bitcoin</h3>
              <p className="text-zinc-400 mb-6">
                Your kid come home with that same old fundraiser packet. You know the one. Candy bars nobody want, stale
                popcorn tins...
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-amber-500 text-black rounded-xl font-semibold hover:bg-amber-400 transition-colors">
                  Read Post →
                </button>
                <button className="px-4 py-2 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/10 transition-colors">
                  Listen →
                </button>
              </div>
            </div>

            {/* The Hustle */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-6 hover:border-amber-500/40 transition-colors">
              <div className="text-amber-400 font-semibold mb-2">The Hustle</div>
              <h3 className="text-xl font-bold text-white mb-4">💸 Would You Share a Wallet with Your Bae?🥶</h3>
              <p className="text-zinc-400 mb-6">
                Money been breaking couples up since Adam & Eve bought that first apple on Klarna. Now add crypto into
                the mix...
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-amber-500 text-black rounded-xl font-semibold hover:bg-amber-400 transition-colors">
                  Read Post →
                </button>
                <button className="px-4 py-2 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500/10 transition-colors">
                  Listen →
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold rounded-2xl hover:scale-105 transition-transform">
              Browse all blog posts →
            </button>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-amber-400 mb-4">🎙️ Podcast Preview</h2>
            <p className="text-lg text-zinc-300 mb-6">Upcoming Guests: Black crypto founders, Youth NFT creators</p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold rounded-2xl hover:scale-105 transition-transform">
              Open podcast page →
            </button>
          </div>
        </div>
      </section>

      {/* NFT Drop Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-amber-400/10 to-yellow-500/10 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-amber-400 mb-4">📦 NFT Drop: "Mint Your Hustle"</h2>
            <p className="text-lg text-zinc-300 mb-6">Access private content, vote on topics, and get IRL invites.</p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold rounded-2xl hover:scale-105 transition-transform">
              Mint Now
            </button>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-amber-400 text-center mb-6">Join the Hustle</h2>
            <p className="text-lg text-zinc-300 text-center mb-8">Join 10,000+ Hustlers Learning Web3</p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-zinc-800/50 border border-amber-500/30 rounded-xl text-white placeholder-zinc-400 focus:border-amber-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-zinc-800/50 border border-amber-500/30 rounded-xl text-white placeholder-zinc-400 focus:border-amber-500 focus:outline-none"
              />
              <textarea
                placeholder="What's your crypto story?"
                rows={4}
                className="w-full px-4 py-3 bg-zinc-800/50 border border-amber-500/30 rounded-xl text-white placeholder-zinc-400 focus:border-amber-500 focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold rounded-2xl hover:scale-105 transition-transform"
              >
                Join Now
              </button>
            </form>

            <p className="text-sm text-zinc-400 text-center mt-4">
              By joining, you agree to our Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
