'use client'

import { Wifi, Zap, Shield, Check } from 'lucide-react'
import { Button } from './ui/button'

export function Portfolio() {
  const plans = [
    {
      name: "Basic",
      speed: "100 Mbps",
      price: "$29",
      period: "/month",
      features: [
        "100 Mbps Download Speed",
        "50 Mbps Upload Speed",
        "Unlimited Data",
        "Free WiFi Router",
        "24/7 Support"
      ],
      popular: false,
      color: "accent-emerald"
    },
    {
      name: "Pro",
      speed: "500 Mbps",
      price: "$49",
      period: "/month",
      features: [
        "500 Mbps Download Speed",
        "250 Mbps Upload Speed",
        "Unlimited Data",
        "Premium WiFi 6 Router",
        "Priority Support",
        "Free Installation"
      ],
      popular: true,
      color: "accent-blue"
    },
    {
      name: "Ultimate",
      speed: "1 Gbps",
      price: "$79",
      period: "/month",
      features: [
        "1 Gbps Download Speed",
        "1 Gbps Upload Speed",
        "Unlimited Data",
        "WiFi 6E Mesh System",
        "Dedicated Support Line",
        "Free Installation",
        "Static IP Address"
      ],
      popular: false,
      color: "accent-purple"
    }
  ]

  return (
    <section id="portfolio" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Internet Plans
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Choose Your Speed</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Lightning-fast fiber internet plans designed for every need - from casual browsing to power users.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative bg-card clean-border rounded-3xl overflow-hidden elevated-shadow transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-2 ring-accent-blue' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-accent-blue text-white text-center py-2 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                {/* Plan Icon */}
                <div className={`w-16 h-16 bg-${plan.color}/10 rounded-2xl flex items-center justify-center mb-6`}>
                  <Wifi className={`w-8 h-8 text-${plan.color}`} />
                </div>
                
                {/* Plan Name & Speed */}
                <h3 className="text-2xl font-black text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.speed}</p>
                
                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-black text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                
                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent-emerald flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Button 
                  className={`w-full py-3 font-semibold ${
                    plan.popular 
                      ? 'bg-accent-blue hover:bg-accent-blue/90 text-white' 
                      : 'bg-foreground hover:bg-foreground/90 text-background'
                  }`}
                >
                  <a href="tel:8556837625" className={plan.popular ? 'text-white' : 'text-background'}>Call Now (855) 683-7625</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include no contracts, no hidden fees, and a 30-day money-back guarantee.
          </p>
        </div>
      </div>
    </section>
  )
}
