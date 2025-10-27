import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Temesgen gonfa',
      role: 'CEO, Tech Innovations',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with this agency transformed our online presence. Their strategic approach and attention to detail resulted in measurable growth. Their approach is both creative and data-driven, which has significantly improved our market positioning and forward to continuing with them again.'
    },
    {
      name: 'Selemon Desta',
      role: 'Marketing Director, Global Corp',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The team exceeded our expectations. From initial strategy to final execution, they demonstrated exceptional creativity and strategic thinking. They delivered beyond our expectations. They brought fresh ideas that helped us stand out in a crowded market. Highly recommended for businesses.'
    },
    {
      name: 'Kemal Ahmed',
      role: 'Founder, Startup Ventures',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Their comprehensive approach to digital marketing has been invaluable. They understand our brand and consistently deliver campaigns that resonate with our target audience. It\'s rare to find such a strategic mindset combined with creative flair. They\'ve been instrumental in our growth.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-900/20 to-transparent p-8 rounded-2xl border border-blue-bright/20 hover:border-blue-bright/40 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-bright/30"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/60 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <p className="text-white/70 leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
