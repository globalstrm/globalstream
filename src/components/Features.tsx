'use client'

import { Zap, Shield, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react'

export function Features() {
  const features = [
    {
      id: 'speed',
      title: "Find High-Speed Options",
      description: "We help you discover internet options with speeds up to 10 Gbps from providers in your area. Compare fiber, cable, and wireless services for streaming, gaming, and work.",
      image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80",
      icon: Zap,
      color: "accent-blue",
      benefits: [
        "Compare speed tiers available",
        "Multi-device streaming guidance",
        "Gaming service recommendations",
        "Upload speed comparisons"
      ]
    },
    {
      id: 'security',
      title: "Security Feature Guidance",
      description: "Learn about security features offered by providers including threat detection, malware protection, and parental controls to keep your network safe.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
      icon: Shield,
      color: "accent-emerald",
      benefits: [
        "Compare security add-ons",
        "Parental control options",
        "Protection feature guidance",
        "Encryption options explained"
      ]
    },
    {
      id: 'support',
      title: "Expert Assistance Available",
      description: "Our knowledgeable team is here to help you understand service options, compare providers, and make informed decisions about your connectivity needs.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
      icon: Clock,
      color: "accent-purple",
      benefits: [
        "Quick response assistance",
        "Service comparison help",
        "Setup guidance provided",
        "Ongoing support included"
      ]
    },
    {
      id: 'reliability',
      title: "Reliable Service Options",
      description: "We guide you to providers with strong uptime records and redundant networks, helping you find reliable connectivity for your home or business.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      icon: Award,
      color: "accent-blue",
      benefits: [
        "Uptime record comparisons",
        "Network reliability info",
        "Service area coverage",
        "Satisfaction guarantee options"
      ]
    }
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Why Choose Us
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground">
            <span className="block mb-2">How We Assist</span>
            <span className="block bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Crystal Clear
            </span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience internet the way it should be—fast, secure, and reliable
          </p>
        </div>

        {/* Features Grid Layout - 2x2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <div
                key={feature.id}
                className="group relative bg-card clean-border rounded-3xl overflow-hidden elevated-shadow hover:scale-[1.02] transition-all duration-500"
              >
                {/* Image Background */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b from-${feature.color}/90 via-${feature.color}/70 to-card`} />
                  
                  {/* Icon */}
                  <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <span className="text-white font-black text-lg">0{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-black text-foreground mb-4 group-hover:text-accent-blue transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3 mb-6">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 text-${feature.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <a href="tel:8556837625" className={`text-${feature.color} font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all`}>
                    Get Assistance
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-${feature.color}/10 rounded-tl-full`} />
              </div>
            )
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div className="bg-gradient-to-r from-accent-blue to-accent-purple rounded-3xl p-8 elevated-shadow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-2">10 Gbps</div>
              <div className="text-white/80 text-sm">Maximum Speed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-2">99.9%</div>
              <div className="text-white/80 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-2">500K+</div>
              <div className="text-white/80 text-sm">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
