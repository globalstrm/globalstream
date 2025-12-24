'use client'

import { Home, Briefcase, Gamepad2, Video, ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Lifestyle() {
  const [activeTab, setActiveTab] = useState('remote-work')

  const useCases = [
    {
      id: 'remote-work',
      title: "Perfect for Remote Work",
      shortTitle: "Remote Work",
      description: "Stay productive with ultra-reliable internet built for video calls, cloud applications, and seamless collaboration. Never miss a deadline or important meeting again.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      icon: Briefcase,
      color: "accent-blue",
      highlights: [
        "Crystal-clear HD video calls",
        "Lightning-fast file uploads/downloads",
        "Connect unlimited devices",
        "VPN-friendly network"
      ],
      stats: [
        { label: "Upload Speed", value: "1 Gbps" },
        { label: "Devices", value: "Unlimited" },
        { label: "Latency", value: "<5ms" }
      ]
    },
    {
      id: 'gaming',
      title: "Built for Gamers",
      shortTitle: "Gaming",
      description: "Dominate the competition with ultra-low latency, symmetric speeds, and advanced QoS prioritization. Experience gaming the way it was meant to be played.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      icon: Gamepad2,
      color: "accent-emerald",
      highlights: [
        "1ms ultra-low latency",
        "Zero lag, zero throttling",
        "Gaming traffic priority",
        "DDoS protection included"
      ],
      stats: [
        { label: "Latency", value: "1ms" },
        { label: "Priority QoS", value: "Yes" },
        { label: "Protection", value: "DDoS" }
      ]
    },
    {
      id: 'streaming',
      title: "Stream Everything",
      shortTitle: "Streaming",
      description: "Binge-watch in 4K, stream music on every device, and enjoy buffer-free entertainment. Our unlimited data means you never have to worry about overages.",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80",
      icon: Video,
      color: "accent-purple",
      highlights: [
        "4K/8K streaming capable",
        "Multiple device support",
        "Unlimited data options",
        "Smooth streaming experience"
      ],
      stats: [
        { label: "Quality", value: "8K" },
        { label: "Data Cap", value: "Unlimited" },
        { label: "Buffering", value: "Zero" }
      ]
    },
    {
      id: 'smart-home',
      title: "Smart Home Ready",
      shortTitle: "Smart Home",
      description: "Connect all your smart devices seamlessly. From security cameras to voice assistants, our network handles everything with ease and reliability.",
      image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&q=80",
      icon: Home,
      color: "accent-blue",
      highlights: [
        "Support 100+ devices",
        "Dedicated IoT network",
        "Smart home optimization",
        "Enhanced security protocols"
      ],
      stats: [
        { label: "Devices", value: "100+" },
        { label: "IoT Network", value: "Yes" },
        { label: "Security", value: "Advanced" }
      ]
    }
  ]

  const activeCase = useCases.find(uc => uc.id === activeTab) || useCases[0]
  const Icon = activeCase.icon

  return (
    <section className="relative py-32 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Your Connected Life
            </span>
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground">
            <span className="block mb-2">Internet That</span>
            <span className="block bg-gradient-to-r from-accent-blue via-accent-emerald to-accent-purple bg-clip-text text-transparent">
              Adapts to You
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose your lifestyle and see how we power your digital world
          </p>
        </div>

        {/* Unique Tab Navigation */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((useCase) => {
              const TabIcon = useCase.icon
              return (
                <button
                  key={useCase.id}
                  onClick={() => setActiveTab(useCase.id)}
                  className={`relative p-6 rounded-2xl transition-all duration-300 ${
                    activeTab === useCase.id
                      ? `bg-${useCase.color} text-white elevated-shadow scale-105`
                      : 'bg-card hover:bg-muted border border-border'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeTab === useCase.id ? 'bg-white/20' : 'bg-muted'
                    }`}>
                      <TabIcon className={`w-6 h-6 ${
                        activeTab === useCase.id ? 'text-white' : 'text-foreground'
                      }`} />
                    </div>
                    <span className={`font-bold text-sm ${
                      activeTab === useCase.id ? 'text-white' : 'text-foreground'
                    }`}>
                      {useCase.shortTitle}
                    </span>
                  </div>
                  {activeTab === useCase.id && (
                    <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-${useCase.color}`} />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content Display - Single Active Card */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-card clean-border rounded-3xl overflow-hidden elevated-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Image Side */}
              <div className="relative h-[400px] lg:h-auto">
                <img
                  src={activeCase.image}
                  alt={activeCase.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Floating Icon */}
                <div className={`absolute top-8 left-8 w-16 h-16 bg-${activeCase.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="grid grid-cols-3 gap-3">
                    {activeCase.stats.map((stat, idx) => (
                      <div key={idx} className="bg-white/95 backdrop-blur-sm rounded-xl p-3 text-center">
                        <div className={`text-xl font-black text-${activeCase.color} mb-1`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground font-semibold">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className={`inline-flex items-center gap-2 bg-${activeCase.color}/10 px-4 py-2 rounded-full mb-6 w-fit`}>
                  <Icon className={`w-5 h-5 text-${activeCase.color}`} />
                  <span className={`text-sm font-bold text-${activeCase.color}`}>
                    {activeCase.shortTitle}
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
                  {activeCase.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {activeCase.description}
                </p>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {activeCase.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full bg-${activeCase.color}/10 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className={`w-4 h-4 text-${activeCase.color}`} />
                      </div>
                      <span className="text-sm text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a href="tel:8556837625">
                  <button className={`bg-${activeCase.color} hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 w-fit`}>
                    Call Now (855) 683-7625
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-blue via-accent-emerald to-accent-purple p-[2px]">
            <div className="bg-background rounded-3xl p-12 text-center">
              <h3 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
                Ready to Transform Your Digital Life?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Experience internet that truly works for you—no compromises, no limits
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:8556837625">
                  <button className="bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                    Call Now
                  </button>
                </a>
                <a href="tel:8556837625">
                  <button className="bg-card hover:bg-muted border border-border text-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                    Call for Coverage
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
