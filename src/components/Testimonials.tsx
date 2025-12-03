'use client'

import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Work From Home Professional",
      content: "Switching to Global Stream was the best decision for my remote work. Video calls are crystal clear, and I never experience lag during important meetings.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Chen",
      role: "Gaming Enthusiast",
      content: "Finally, an ISP that delivers on their speed promises! My ping is consistently low, and downloads are lightning fast. Perfect for competitive gaming.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Family of 5",
      content: "With 3 kids streaming, gaming, and doing homework simultaneously, we needed reliable internet. Global Stream handles it all without breaking a sweat!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Thompson",
      role: "Small Business Owner",
      content: "The business plan has been rock solid for our team. Their customer support is exceptional - they resolved our setup questions within minutes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Park",
      role: "Content Creator",
      content: "Uploading 4K videos used to take hours. Now with the 1Gbps upload speeds, I can focus on creating instead of waiting. Game changer!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      role: "Smart Home Enthusiast",
      content: "My entire home is connected - security cameras, smart devices, everything. Global Stream keeps it all running smoothly 24/7.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Customer Stories
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            What Our Customers Say
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Join thousands of satisfied customers enjoying blazing fast internet
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card clean-border rounded-2xl p-8 transition-all duration-300 hover:scale-105 elevated-shadow"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent-blue/20 absolute top-6 right-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
