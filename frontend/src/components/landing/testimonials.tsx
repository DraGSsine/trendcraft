import Image from "next/image";

import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      name: "Sarah Johnson",
      role: "Content Creator",
      quote:
        "This platform has revolutionized how I create content. The AI suggestions are spot-on!",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      name: "Mark Thompson",
      role: "Digital Marketer",
      quote:
        "The trend analysis features have helped us stay ahead of the curve consistently.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      name: "Emily Chen",
      role: "Social Media Manager",
      quote:
        "A game-changer for our agency's content strategy and client management.",
    },
  ];

  return (
    <section id="testimonials" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r bg-indigo-500">
              Content Creators
            </span>
          </h2>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Join thousands of satisfied creators who've transformed their
            content strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full ring-2 ring-purple-500"
                />
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80 text-lg">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
