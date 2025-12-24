'use client'

import { useState, useEffect } from 'react'
import { Wifi, Building2, Shield, Tv, Phone, Cloud, CheckCircle } from 'lucide-react'

export function Services() {
  const [isVisible, setIsVisible] = useState(false)

  const services = [
    {
      id: 'home',
      title: "Home Internet Assistance",
      description: "We help you find high-speed internet options perfect for streaming, gaming, and remote work. Compare fiber, cable, and wireless providers in your area.",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&q=80",
      icon: Wifi,
      features: [
        "Compare speeds & plans",
        "Find unlimited data options",
        "Equipment guidance",
        "Contract comparisons"
      ]
    },
    {
      id: 'business',
      title: "Business Service Guidance", 
      description: "Find enterprise-grade connectivity solutions for your business. We guide you through options for dedicated lines, scalable bandwidth, and uptime guarantees.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      icon: Building2,
      features: [
        "Compare business plans",
        "Dedicated line options",
        "Support level guidance",
        "Static IP availability"
      ]
    },
    {
      id: 'security',
      title: "Security Service Options",
      description: "Learn about network security options available from providers. We help you understand protection features, parental controls, and secure browsing add-ons.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      icon: Shield,
      features: [
        "Compare security features",
        "Firewall options",
        "Parental control availability",
        "Protection add-ons"
      ]
    },
    {
      id: 'tv',
      title: "TV & Streaming Guidance",
      description: "Find the right TV and streaming options for your needs. Compare cable packages, streaming services, and bundle deals available in your area.",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
      icon: Tv,
      features: [
        "Compare channel lineups",
        "DVR options explained",
        "Streaming service guides",
        "Bundle comparisons"
      ]
    },
    {
      id: 'phone',
      title: "Phone Service Options",
      description: "Explore digital phone service options including VoIP and landline alternatives. We help you compare calling plans and features available through providers.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      icon: Phone,
      features: [
        "Compare calling plans",
        "International options",
        "Feature comparisons",
        "VoIP guidance"
      ]
    },
    {
      id: 'cloud',
      title: "Cloud Service Guidance",
      description: "Learn about cloud storage and backup options available through service providers. We guide you through storage plans, security features, and pricing.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      icon: Cloud,
      features: [
        "Compare storage plans",
        "Backup option guidance",
        "Security feature info",
        "Plan comparisons"
      ]
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="services" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-3 mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Complete Solutions
            </span>
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
          </div>
          
          <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            How We Help
          </h2>
          
          <p className={`text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Expert guidance to find the right connectivity solutions
          </p>
        </div>

        {/* Zigzag Services Layout */}
        <div className="space-y-32 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Image Side */}
                <div className={`relative ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="relative overflow-hidden rounded-3xl elevated-shadow group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-8 left-8 w-16 h-16 bg-accent-blue/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-accent-emerald flex-shrink-0 mt-1" />
                        <span className="text-lg text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a href="tel:8556837625">
                      <button className="bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                        Get Assistance (855) 683-7625
                        <span>→</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <div className="bg-gradient-to-r from-accent-blue to-accent-purple rounded-3xl p-12 elevated-shadow">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Bundle & Save Up To 30%
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Combine multiple services and enjoy significant savings on your monthly bill
            </p>
            <button className="bg-white hover:bg-white/90 text-accent-blue font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
              <a href="tel:8556837625" className="text-accent-blue">Call Now to Bundle & Save</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
