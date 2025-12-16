import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Disclosure } from '@/components/Disclosure'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-background" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 sm:mb-6 text-white drop-shadow-lg">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed drop-shadow-md">
              Questions about finding the right service? We're here to help guide you through your options.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 -mt-10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Disclosure */}
          <div className="max-w-6xl mx-auto mb-12">
            <Disclosure />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-card clean-border rounded-3xl overflow-hidden elevated-shadow p-8">
                <h2 className="text-3xl font-black text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Address *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      placeholder="123 Main St, City, State 12345"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      What are you interested in? *
                    </label>
                    <select 
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    >
                      <option value="">Select an option...</option>
                      <option>Home Internet</option>
                      <option>Business Internet</option>
                      <option>Bundle Package</option>
                      <option>Technical Support</option>
                      <option>Other Services</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue resize-none"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white py-6 text-lg font-semibold"
                  >
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-black text-foreground mb-4">
                    Contact Information
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    We're here to help! Reach out to us through any of these channels.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-card clean-border rounded-2xl p-6 subtle-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent-blue" />
                      </div>
                      <div>
                        <h4 className="font-black text-foreground mb-2">Call Us Now</h4>
                        <p className="text-muted-foreground text-sm mb-2">Sales & Support</p>
                        <a href="tel:8556837625" className="text-accent-blue font-semibold hover:underline text-2xl">
                          (855) 683-7625
                        </a>
                        <p className="text-xs text-muted-foreground mt-2">Available 24/7</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card clean-border rounded-2xl p-6 subtle-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-black text-foreground mb-2">Live Chat</h4>
                        <p className="text-muted-foreground text-sm mb-2">Instant Support</p>
                        <button className="text-accent-emerald font-semibold hover:underline">
                          Start Chat
                        </button>
                        <p className="text-xs text-muted-foreground mt-2">Average wait: 30 seconds</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card clean-border rounded-2xl p-6 subtle-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-black text-foreground mb-2">Quick Response</h4>
                        <p className="text-muted-foreground text-sm">
                          <strong>Call Back:</strong> Request a call<br />
                          <strong>SMS Support:</strong> Text us anytime<br />
                          <strong>Same-Day Service:</strong> Available
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card clean-border rounded-2xl p-6 subtle-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-black text-foreground mb-2">Self-Service</h4>
                        <p className="text-muted-foreground text-sm mb-2">Online Portal</p>
                        <a href="#" className="text-accent-blue font-semibold hover:underline">
                          Manage Account
                        </a>
                        <p className="text-xs text-muted-foreground mt-2">Pay bills, upgrade plans, track service</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 clean-border rounded-2xl p-6">
                  <h4 className="font-black text-foreground mb-4">Why Choose Us?</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-emerald rounded-full" />
                      <span className="text-sm text-foreground">No Contracts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-emerald rounded-full" />
                      <span className="text-sm text-foreground">Free Installation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-emerald rounded-full" />
                      <span className="text-sm text-foreground">30-Day Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-emerald rounded-full" />
                      <span className="text-sm text-foreground">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>







      <Footer />
    </div>
  )
}

export default ContactPage
