import img from "../../assets/banner.png"
export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-dark-secondary to-dark-tertiary rounded-2xl border border-gray-800 overflow-hidden">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Interested in collaboration with us?
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                We will help you reach your business goal
              </p>
              <button className="px-8 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-all">
                Contact Us
              </button>
            </div>

            <div className="md:w-1/2 p-8 md:p-0">
              <div className="aspect-square md:aspect-auto md:h-full bg-gradient-to-br rounded-xl md:rounded-none overflow-hidden flex items-center justify-center">
               <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
