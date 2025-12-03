import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Wifi, Check, Zap, Shield, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const PlansPage = () => {
  const plans = [
    {
      name: "Basic",
      speed: "100 Mbps",
      price: "$29",
      period: "/month",
      description: "Perfect for light browsing and streaming",
      features: [
        "100 Mbps Download Speed",
        "50 Mbps Upload Speed",
        "Unlimited Data",
        "Free WiFi Router",
        "24/7 Support",
        "No Contracts"
      ],
      popular: false,
      color: "accent-emerald"
    },
    {
      name: "Pro",
      speed: "500 Mbps",
      price: "$49",
      period: "/month",
      description: "Ideal for families and remote workers",
      features: [
        "500 Mbps Download Speed",
        "250 Mbps Upload Speed",
        "Unlimited Data",
        "Premium WiFi 6 Router",
        "Priority Support",
        "Free Installation",
        "Whole-Home WiFi"
      ],
      popular: true,
      color: "accent-blue"
    },
    {
      name: "Ultimate",
      speed: "1 Gbps",
      price: "$79",
      period: "/month",
      description: "Maximum power for power users",
      features: [
        "1 Gbps Download Speed",
        "1 Gbps Upload Speed",
        "Unlimited Data",
        "WiFi 6E Mesh System",
        "Dedicated Support Line",
        "Free Installation",
        "Static IP Address",
        "Advanced Security Suite"
      ],
      popular: false,
      color: "accent-purple"
    },
    {
      name: "Business",
      speed: "10 Gbps",
      price: "$199",
      period: "/month",
      description: "Enterprise-grade for businesses",
      features: [
        "Up to 10 Gbps Speeds",
        "Symmetric Upload/Download",
        "99.99% Uptime SLA",
        "Dedicated Account Manager",
        "4-Hour Response Guarantee",
        "Multiple Static IPs",
        "Enterprise Security",
        "Priority Network Access"
      ],
      popular: false,
      color: "accent-blue"
    }
  ]

  const addons = [
    {
      icon: Shield,
      name: "Security Plus",
      price: "$9.99/mo",
      description: "Advanced threat protection, parental controls, and ad blocking"
    },
    {
      icon: Wifi,
      name: "Mesh WiFi Extender",
      price: "$5.99/mo",
      description: "Extend your WiFi coverage to every corner of your home"
    },
    {
      icon: Users,
      name: "Whole Home WiFi",
      price: "$14.99/mo",
      description: "Complete mesh system for homes up to 5,000 sq ft"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-background" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 sm:mb-6 text-white drop-shadow-lg">
              Simple, Transparent Pricing
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed drop-shadow-md">
              No hidden fees. No contracts. Just blazing fast internet at honest prices.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 -mt-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative bg-card clean-border rounded-3xl overflow-hidden elevated-shadow transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-accent-blue lg:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-accent-blue text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-6 ${plan.popular ? 'pt-12' : ''}`}>
                  <div className={`w-14 h-14 bg-${plan.color}/10 rounded-2xl flex items-center justify-center mb-4`}>
                    <Zap className={`w-7 h-7 text-${plan.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-black text-foreground mb-1">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-2">
                    <span className="text-4xl font-black text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-accent-blue font-semibold mb-6">{plan.speed}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-accent-emerald flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="tel:8559450333">
                    <Button 
                      className={`w-full py-5 font-semibold ${
                        plan.popular 
                          ? 'bg-accent-blue hover:bg-accent-blue/90 text-white' 
                          : 'bg-foreground hover:bg-foreground/90 text-background'
                      }`}
                    >
                      Get Started
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-foreground mb-4">Enhance Your Experience</h2>
            <p className="text-muted-foreground text-lg">Optional add-ons to customize your service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {addons.map((addon) => {
              const Icon = addon.icon
              return (
                <div key={addon.name} className="bg-background clean-border rounded-2xl p-6 text-center elevated-shadow">
                  <div className="w-14 h-14 bg-accent-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{addon.name}</h3>
                  <p className="text-accent-blue font-semibold mb-3">{addon.price}</p>
                  <p className="text-muted-foreground text-sm">{addon.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-foreground mb-4">Plan Comparison</h2>
            <p className="text-muted-foreground text-lg">See what's included in each plan</p>
          </div>
          
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-4 font-black text-foreground">Features</th>
                  <th className="text-center p-4 font-black text-foreground">Basic</th>
                  <th className="text-center p-4 font-black text-foreground bg-accent-blue/10">Pro</th>
                  <th className="text-center p-4 font-black text-foreground">Ultimate</th>
                  <th className="text-center p-4 font-black text-foreground">Business</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                <tr className="border-b border-border">
                  <td className="p-4 text-foreground">Download Speed</td>
                  <td className="p-4 text-center">100 Mbps</td>
                  <td className="p-4 text-center bg-accent-blue/5">500 Mbps</td>
                  <td className="p-4 text-center">1 Gbps</td>
                  <td className="p-4 text-center">10 Gbps</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-foreground">Upload Speed</td>
                  <td className="p-4 text-center">50 Mbps</td>
                  <td className="p-4 text-center bg-accent-blue/5">250 Mbps</td>
                  <td className="p-4 text-center">1 Gbps</td>
                  <td className="p-4 text-center">10 Gbps</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-foreground">Data Cap</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-accent-emerald mx-auto" /></td>
                  <td className="p-4 text-center bg-accent-blue/5"><Check className="w-5 h-5 text-accent-emerald mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-accent-emerald mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-accent-emerald mx-auto" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-foreground">WiFi 6 Router</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center bg-accent-blue/5"><Check className="w-5 h-5 text-accent-emerald mx-auto" /></td>
                  <td className="p-4 text-center">WiFi 6E</td>
                  <td className="p-4 text-center">Enterprise</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-foreground">Installation</td>
                  <td className="p-4 text-center">$99</td>
                  <td className="p-4 text-center bg-accent-blue/5"><Check className="w-5 h-5 text-accent-emerald mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-accent-emerald mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-accent-emerald mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 text-foreground">Support Level</td>
                  <td className="p-4 text-center">24/7</td>
                  <td className="p-4 text-center bg-accent-blue/5">Priority</td>
                  <td className="p-4 text-center">Dedicated</td>
                  <td className="p-4 text-center">Enterprise</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about our plans</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card clean-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">Yes! You can change your plan at any time with no fees or penalties. Changes take effect at the start of your next billing cycle.</p>
            </div>
            
            <div className="bg-card clean-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Are there any hidden fees?</h3>
              <p className="text-muted-foreground">No hidden fees, ever. The price you see is the price you pay. No equipment rental fees, no surprise charges.</p>
            </div>
            
            <div className="bg-card clean-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">What's your cancellation policy?</h3>
              <p className="text-muted-foreground">Cancel anytime with no early termination fees. We're so confident in our service, we don't lock you into contracts.</p>
            </div>
            
            <div className="bg-card clean-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Do you offer a money-back guarantee?</h3>
              <p className="text-muted-foreground">Yes! Try our service risk-free for 30 days. If you're not completely satisfied, we'll refund your money, no questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Plans Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-accent-blue to-accent-purple rounded-3xl p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-black mb-6">Custom Business Solutions</h2>
                  <p className="text-white/90 text-lg mb-8">
                    Need more than our standard business plan? We offer custom enterprise solutions with dedicated fiber lines, multiple static IPs, and SLA guarantees.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <Check className="w-6 h-6 flex-shrink-0" />
                      <span>Dedicated account management</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-6 h-6 flex-shrink-0" />
                      <span>Custom bandwidth allocation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-6 h-6 flex-shrink-0" />
                      <span>99.99% uptime SLA</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-6 h-6 flex-shrink-0" />
                      <span>Priority 24/7 support</span>
                    </li>
                  </ul>
                  <button className="bg-white hover:bg-white/90 text-accent-blue font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                    Contact Sales Team
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-3xl font-black mb-2">100+</div>
                    <div className="text-sm text-white/80">Enterprise Clients</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-3xl font-black mb-2">99.99%</div>
                    <div className="text-sm text-white/80">Uptime SLA</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-3xl font-black mb-2">&lt;2hr</div>
                    <div className="text-sm text-white/80">Response Time</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-3xl font-black mb-2">24/7</div>
                    <div className="text-sm text-white/80">Expert Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-black text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Check if fiber is available at your address and sign up in minutes.
          </p>
          <a
            href="tel:8559450333"
            className="inline-block bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Call (855) 945-0333
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PlansPage
