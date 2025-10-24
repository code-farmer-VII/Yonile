export default function TrustedBy() {
  const logos = [
    'JENBORO REAL ESTATE',
    'Invictare',
    'Khil',
    'CANAL+',
    'Invictare',
    'Khil',
    'CANAL+',
    'Safaricom',
    'DStv',
  ];

  return (
    <section className="py-16 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Trusted by 200+ companies
            </h2>
          </div>

          <div>
            <p className="text-gray-400 leading-relaxed mb-8">
              We have brands define their vision. And compelling stories, and captivate audiences. From branding and strategy to media production, social media marketing, and experiential campaigns, we turn ideas into unforgettable experiences.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 flex items-center justify-center h-16 transition-all hover:scale-105"
                >
                  <span className="text-xs sm:text-sm font-semibold text-center">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
