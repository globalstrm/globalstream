'use client'

import { Users, Clock, Wifi, Award, MapPin, Headphones } from 'lucide-react'

export function Awards() {
  const stats = [
    {
      icon: Users,
      value: "500K+",
      label: "Happy Customers",
      description: "Households and businesses connected",
      color: "accent-blue"
    },
    {
      icon: Clock,
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable connection you can count on",
      color: "accent-emerald"
    },
    {
      icon: Wifi,
      value: "10 Gbps",
      label: "Max Speed",
      description: "Blazing fast fiber optic speeds",
      color: "accent-purple"
    },
    {
      icon: Award,
      value: "#1",
      label: "Rated ISP",
      description: "Best customer satisfaction 2024",
      color: "accent-blue"
    },
    {
      icon: MapPin,
      value: "150+",
      label: "Cities Covered",
      description: "Expanding network nationwide",
      color: "accent-emerald"
    },
    {
      icon: Headphones,
      value: "24/7",
      label: "Support",
      description: "Always here when you need us",
      color: "accent-purple"
    }
  ]

  return (
    <section id="awards" className="relative py-20 bg-background overflow-hidden">
      
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Why Choose Us
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Trusted by Millions
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Industry-leading performance and customer satisfaction
          </p>
        </div>

        {/* Stats Grid */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className={`relative p-8 rounded-2xl border shadow-md transition-all duration-500 hover:scale-105 bg-background border-border`}
                       style={{ 
                         boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
                       }}>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-${stat.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <Icon className={`w-8 h-8 text-${stat.color}`} />
                    </div>
                    
                    {/* Value */}
                    <div className="text-5xl font-black text-foreground mb-2">
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {stat.label}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
