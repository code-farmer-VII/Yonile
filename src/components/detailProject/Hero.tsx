import { ArrowRight, Circle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-dark via-dark-lighter to-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <Circle className="w-6 h-6 text-gray-400" fill="currentColor" />
              </div>
              <span className="text-gray-400 font-medium">Yonile</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              How we Helped Keza to increase Online Conversions By{' '}
              <span className="text-primary">125%</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed">
              Through full funnel strategy Lorem ipsum dolor sit amet, consectetur. Ut elit tellus
              luctus Lorem ipsum dolor sit amet.Lorem
            </p>

            <button className="group bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all hover:scale-105">
              Book A Free Consultancy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-800 to-dark-card rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-white text-sm">
                      <span>← Back</span>
                      <span className="bg-orange-500 px-3 py-1 rounded-full text-xs">New</span>
                    </div>
                    <h3 className="text-white text-2xl font-bold">
                      We Help You To<br />Grow Your Business
                    </h3>
                    <button className="bg-white text-teal-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow">
                      Get Started
                    </button>
                  </div>
                </div>
                <div className="bg-white p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-800">2.5k</div>
                      <div className="text-xs text-gray-600">Active Users</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-800">1.2k</div>
                      <div className="text-xs text-gray-600">Downloads</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white"></div>
                    </div>
                    <span className="text-xs text-gray-600">Join 10k+ users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
