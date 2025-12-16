'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from './ui/button'

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Get Connected Today
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Ready to Experience</span>
            <span className="block">Blazing Fast Internet?</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Contact us today to check availability in your area and get started
          </p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-background clean-border rounded-3xl overflow-hidden elevated-shadow p-8">
              <h3 className="text-2xl font-black text-foreground mb-6">
                Check Availability
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Address
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    placeholder="123 Main St, City, State 12345"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Interested In
                  </label>
                  <select className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue">
                    <option>Home Internet</option>
                    <option>Business Internet</option>
                    <option>Bundle Package</option>
                    <option>Other Services</option>
                  </select>
                </div>
                
                <a href="tel:8556837625">
                  <Button className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white py-6 text-lg font-semibold">
                    Speak With Support
                  </Button>
                </a>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h4 className="font-black text-foreground mb-2">Call Us</h4>
                  <p className="text-muted-foreground text-sm mb-2">Sales & Support</p>
                  <a href="tel:1-800-555-0123" className="text-accent-blue font-semibold hover:underline">
                    1-800-555-0123
                  </a>
                </div>
                
                <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
                  <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-accent-emerald" />
                  </div>
                  <h4 className="font-black text-foreground mb-2">Email Us</h4>
                  <p className="text-muted-foreground text-sm mb-2">General Inquiries</p>
                  <a href="mailto:hello@globalinternet.com" className="text-accent-emerald font-semibold hover:underline">
                    hello@globalinternet.com
                  </a>
                </div>
                
                <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-accent-purple" />
                  </div>
                  <h4 className="font-black text-foreground mb-2">Support Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    24/7 Technical Support<br />
                    Sales: Mon-Sat 8am-9pm
                  </p>
                </div>
                
                <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h4 className="font-black text-foreground mb-2">Headquarters</h4>
                  <p className="text-muted-foreground text-sm">
                    500 Technology Drive<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
                <h4 className="font-black text-foreground mb-4">Why Choose Global Internet?</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-emerald rounded-full" />
                    <span className="text-sm text-muted-foreground">No Contracts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-emerald rounded-full" />
                    <span className="text-sm text-muted-foreground">Free Installation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-emerald rounded-full" />
                    <span className="text-sm text-muted-foreground">30-Day Guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-emerald rounded-full" />
                    <span className="text-sm text-muted-foreground">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
