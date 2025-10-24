import React from 'react';
import InverseSmoothSlider from './InverseClinets';

const Clients: React.FC = () => {
  // const clients = [
  //   {
  //     name: 'Jenboro',
  //     logo: 'https://via.placeholder.com/200x100/1a2332/FFD700?text=JENBORO',
  //     bgColor: 'bg-slate-900'
  //   },
  //   {
  //     name: 'Flintstone Homes',
  //     logo: 'https://via.placeholder.com/200x100/ffffff/FF6B35?text=Flintstone+Homes',
  //     bgColor: 'bg-white'
  //   },
  //   {
  //     name: 'Shoprite',
  //     logo: 'https://via.placeholder.com/200x100/ffffff/E31937?text=SHOPRITE',
  //     bgColor: 'bg-white'
  //   },
  //   {
  //     name: 'Knix',
  //     logo: 'https://via.placeholder.com/200x100/000000/ffffff?text=Knix',
  //     bgColor: 'bg-black'
  //   },
  //   {
  //     name: 'Canal+',
  //     logo: 'https://via.placeholder.com/200x100/000000/ffffff?text=CANAL%2B',
  //     bgColor: 'bg-black'
  //   },
  //   {
  //     name: 'Nickelodeon',
  //     logo: 'https://via.placeholder.com/200x100/1a2332/FF6600?text=Nickelodeon',
  //     bgColor: 'bg-slate-900'
  //   },
  //   {
  //     name: 'Daily Delivery',
  //     logo: 'https://via.placeholder.com/200x100/ffffff/FF6B00?text=Daily+Delivery',
  //     bgColor: 'bg-white'
  //   }
  // ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Clients
          </h2>
        </div>

        {/* Clients Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`${client.bgColor} rounded-2xl p-8 flex items-center justify-center aspect-video border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105`}>
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div> */}
        <InverseSmoothSlider />
      </div>
    </section>
  );
};

export default Clients;
