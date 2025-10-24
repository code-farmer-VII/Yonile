export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-dark to-dark"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 border border-gray-700 rounded-full text-sm text-gray-300 backdrop-blur-sm">
              WHAT WE HAVE DONE
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Work That Speaks for Itself.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            From bold campaigns to unforgettable experiences, our projects show how creativity and strategy come together to make brands shine.
          </p>

          <button className="px-8 py-3 bg-dark-tertiary hover:bg-gray-700 border border-gray-700 rounded-lg font-medium transition-all">
            See Our Work
          </button>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
