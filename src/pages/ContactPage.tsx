import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
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
              Ready to experience lightning-fast internet? Contact us today and we'll get you connected.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 -mt-10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
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
                        <a href="tel:8559450333" className="text-accent-blue font-semibold hover:underline text-2xl">
                          (855) 945-0333
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

      {/* Live Chat Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-accent-blue to-accent-purple rounded-3xl p-12 text-center text-white">
              <h2 className="text-4xl font-black mb-4">Need Help Right Now?</h2>
              <p className="text-white/90 text-lg mb-8">
                Our live chat support is available 24/7 to answer your questions instantly
              </p>
              <Button className="bg-white hover:bg-white/90 text-accent-blue font-semibold px-8 py-6 text-lg">
                Start Live Chat
              </Button>
              <p className="text-white/70 text-sm mt-4">Average response time: Under 60 seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-foreground mb-4">Common Questions</h2>
            <p className="text-muted-foreground text-lg">Quick answers to help you get started</p>
          </div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background clean-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-2">What's your response time?</h3>
              <p className="text-muted-foreground text-sm">We respond to all inquiries within 2 hours during business hours, and within 4 hours outside business hours.</p>
            </div>
            
            <div className="bg-background clean-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-2">Can I schedule a callback?</h3>
              <p className="text-muted-foreground text-sm">Yes! Just include your preferred time in the message, and we'll call you back at your convenience.</p>
            </div>
            
            <div className="bg-background clean-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-2">Do you offer in-person consultations?</h3>
              <p className="text-muted-foreground text-sm">Absolutely! We can arrange a free in-home consultation to assess your needs and recommend the best plan.</p>
            </div>
            
            <div className="bg-background clean-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-2">Is technical support free?</h3>
              <p className="text-muted-foreground text-sm">Yes, 24/7 technical support is included with all plans at no additional cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-black text-foreground mb-4">Connect With Us</h2>
          <p className="text-muted-foreground text-lg mb-8">Follow us on social media for updates, tips, and special offers</p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="w-14 h-14 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
            
            <button className="w-14 h-14 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </button>
            
            <button className="w-14 h-14 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </button>
            
            <button className="w-14 h-14 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
