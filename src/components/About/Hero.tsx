export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-accent/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 50% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)',
      }}></div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <button className="mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-all">
          WHO WE ARE
        </button>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Crafting Experiences That Connect
        </h1>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          We strategize creative narratives to bring brands to life. From captivating visuals to meaningful storytelling, we ignite emotions and build lasting connections.
        </p>
      </div>
    </section>
  );
}
