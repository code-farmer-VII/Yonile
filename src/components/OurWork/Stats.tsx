export default function Stats() {
  const stats = [
    { value: '1M+', label: 'Tickets Delivered This Month' },
    { value: '53K+', label: 'Active Customers Rate' },
    { value: '98.29%', label: 'Customer Satisfaction Rate' },
  ];

  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
