'use client'

import { useState, useEffect } from 'react'
import { Wifi, Building2, Shield, Tv, Phone, Cloud, CheckCircle } from 'lucide-react'

export function Services() {
  const [isVisible, setIsVisible] = useState(false)

  const services = [
    {
      id: 'home',
      title: "Home Internet",
      description: "Experience lightning-fast fiber internet designed for modern households. Perfect for streaming 4K content, competitive gaming, and working from home.",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&q=80",
      icon: Wifi,
      features: [
        "Speeds up to 10 Gbps",
        "Unlimited data usage",
        "Free WiFi 6E router",
        "No contracts required"
      ]
    },
    {
      id: 'business',
      title: "Business Solutions", 
      description: "Enterprise-grade connectivity with dedicated support, guaranteed uptime SLAs, and scalable bandwidth to grow with your business.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      icon: Building2,
      features: [
        "Dedicated fiber lines",
        "99.99% uptime guarantee",
        "24/7 priority support",
        "Static IP addresses"
      ]
    },
    {
      id: 'security',
      title: "Network Security",
      description: "Comprehensive protection for your home or business network with advanced threat detection, parental controls, and secure browsing.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      icon: Shield,
      features: [
        "Real-time threat protection",
        "Advanced firewall",
        "Parental controls",
        "Malware blocking"
      ]
    },
    {
      id: 'tv',
      title: "Streaming TV",
      description: "Premium TV packages with hundreds of channels, cloud DVR storage, and unlimited on-demand content from top streaming platforms.",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
      icon: Tv,
      features: [
        "500+ HD channels",
        "Cloud DVR included",
        "Multi-device streaming",
        "Premium add-ons available"
      ]
    },
    {
      id: 'phone',
      title: "Digital Phone",
      description: "Crystal-clear VoIP service with unlimited calling across the US and Canada, plus advanced features like call forwarding and voicemail-to-email.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      icon: Phone,
      features: [
        "Unlimited calling",
        "International plans",
        "Advanced voicemail",
        "Call forwarding"
      ]
    },
    {
      id: 'cloud',
      title: "Cloud Backup",
      description: "Automatic backup for all your devices with military-grade encryption, ensuring your important files are always safe and accessible.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      icon: Cloud,
      features: [
        "Unlimited storage",
        "Automatic backups",
        "256-bit encryption",
        "Version history"
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
            Our Services
          </h2>
          
          <p className={`text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Everything you need for a connected lifestyle
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
                        Call (855) 683-7625
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
              Build Your Bundle
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
