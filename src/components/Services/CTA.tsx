export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-dark-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interested in collaboration with us?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              We will help you reach your business goal
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Contact Us
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border-4 border-cyan-500 rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800">
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-white -rotate-3 hover:rotate-0 transition-transform duration-300 mt-12">
                <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800">
                  <img
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Team work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
