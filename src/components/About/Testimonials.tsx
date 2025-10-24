import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Imangaliso Akon',
    role: 'Marketing Manager',
    company: 'Company',
    rating: 5,
    text: "Working with Yonile Communications was an absolute game-changer for our brand. Their creative approach, attention to detail, and results-driven. The final output wasn't just on-brand - it was beyond. We're thrilled and already looking forward to collaborating with them again.",
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Michael Tobisson',
    role: 'Creative Director',
    company: 'Agency',
    rating: 5,
    text: "The video content produced by Yonile Communications was just impressive. They captured our vision perfectly, and the final video had a strong impact on our audience.",
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Nadia Mkombozi',
    role: 'Brand Manager',
    company: 'Corporation',
    rating: 5,
    text: "Yonile Communications helped us out in our campaigns and social strategy, and the results were truly positive. Their team was easy to work with, and they delivered exactly what we envisioned and more. We're thrilled with the impact. We're happy to recommend them.",
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-card border border-white/10 rounded-2xl p-6 hover:border-cyan-accent/50 transition-all hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
