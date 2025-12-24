import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { MapPin, Check, Clock, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const CoveragePage = () => {
  const [address, setAddress] = useState('')

  const coveredStates = [
    { name: "California", cities: 28 },
    { name: "Texas", cities: 22 },
    { name: "Florida", cities: 18 },
    { name: "New York", cities: 15 },
    { name: "Illinois", cities: 12 },
    { name: "Washington", cities: 10 },
    { name: "Colorado", cities: 9 },
    { name: "Arizona", cities: 8 },
    { name: "Georgia", cities: 7 },
    { name: "Massachusetts", cities: 6 },
    { name: "Oregon", cities: 5 },
    { name: "Nevada", cities: 4 }
  ]

  const comingSoon = [
    "Ohio", "Pennsylvania", "Michigan", "North Carolina", "New Jersey", "Virginia"
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section with Address Check */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 lg:pb-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-background" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 sm:mb-6 text-white drop-shadow-lg">
              Check Your Coverage
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed mb-8 sm:mb-12 drop-shadow-md">
              Enter your address to see available plans and speeds in your area
            </p>
            
            {/* Address Input */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your street address, city, state, ZIP"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    />
                  </div>
                  <a href="tel:8556837625">
                    <Button className="bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold px-8 py-4">
                      Get Assistance
                    </Button>
                  </a>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 mt-6 text-white/70 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent-emerald" />
                    <span>Free installation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent-emerald" />
                    <span>Same-day setup available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent-emerald" />
                    <span>No contracts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map Visual */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=800&q=80"
                alt="US Coverage Map"
                className="rounded-3xl elevated-shadow w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-accent-emerald rounded-full" />
                    <span className="text-white text-sm">Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-accent-blue rounded-full" />
                    <span className="text-white text-sm">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Coverage Stats */}
            <div>
              <h2 className="text-4xl font-black text-foreground mb-6">Currently Available In</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {coveredStates.map((state) => (
                  <div key={state.name} className="bg-card clean-border rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent-emerald" />
                      <span className="font-medium text-foreground">{state.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{state.cities} cities</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">Expanding Soon</h3>
              <div className="flex flex-wrap gap-2">
                {comingSoon.map((state) => (
                  <span key={state} className="bg-accent-blue/10 text-accent-blue px-4 py-2 rounded-full text-sm font-medium">
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-black text-accent-blue mb-2">150+</div>
              <p className="text-muted-foreground">Cities Covered</p>
            </div>
            <div>
              <div className="text-5xl font-black text-accent-emerald mb-2">35</div>
              <p className="text-muted-foreground">States</p>
            </div>
            <div>
              <div className="text-5xl font-black text-accent-purple mb-2">2M+</div>
              <p className="text-muted-foreground">Miles of Fiber</p>
            </div>
            <div>
              <div className="text-5xl font-black text-accent-blue mb-2">500K+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4">How We Get You Connected</h2>
            <p className="text-muted-foreground text-lg">Simple, fast installation process</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-blue text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Check Availability</h3>
              <p className="text-muted-foreground text-sm">Enter your address to see if we're in your area</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-emerald text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Choose Your Plan</h3>
              <p className="text-muted-foreground text-sm">Select the speed and features that fit your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-purple text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Schedule Install</h3>
              <p className="text-muted-foreground text-sm">Pick a convenient time for our technicians to visit</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-blue text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Get Connected</h3>
              <p className="text-muted-foreground text-sm">Professional installation in 2-3 hours, same-day available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Network Infrastructure Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black text-foreground mb-6">Our Network Infrastructure</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We've invested over $2 billion in building the most advanced fiber optic network in the country. 
                  Our infrastructure is designed for the future, with capacity to handle speeds up to 100 Gbps.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-background rounded-xl p-4">
                    <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-accent-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Fiber to the Home (FTTH)</h4>
                      <p className="text-sm text-muted-foreground">Pure fiber connection from our network to your home</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-background rounded-xl p-4">
                    <div className="w-12 h-12 bg-accent-emerald/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-accent-emerald" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Redundant Pathways</h4>
                      <p className="text-sm text-muted-foreground">Multiple routes ensure uninterrupted service</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-background rounded-xl p-4">
                    <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent-purple" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Regional Data Centers</h4>
                      <p className="text-sm text-muted-foreground">Low latency with distributed infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                  alt="Network infrastructure"
                  className="rounded-3xl elevated-shadow"
                />
                <div className="absolute -bottom-6 -left-6 bg-card clean-border p-6 rounded-2xl elevated-shadow">
                  <div className="text-3xl font-black text-accent-blue mb-1">2M+</div>
                  <div className="text-sm text-muted-foreground">Miles of Fiber</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4">Our Expansion Roadmap</h2>
            <p className="text-muted-foreground text-lg">See where we're heading next</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-card clean-border rounded-2xl p-8 flex items-start gap-6">
                <div className="w-24 h-24 bg-accent-emerald/10 rounded-2xl flex flex-col items-center justify-center flex-shrink-0">
                  <div className="text-2xl font-black text-accent-emerald">Q1</div>
                  <div className="text-sm text-muted-foreground">2025</div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground mb-2">Current Quarter</h3>
                  <p className="text-muted-foreground mb-3">Launching in Philadelphia, Pittsburgh, and Columbus</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent-emerald/10 text-accent-emerald px-3 py-1 rounded-full text-sm font-medium">
                      Pennsylvania
                    </span>
                    <span className="bg-accent-emerald/10 text-accent-emerald px-3 py-1 rounded-full text-sm font-medium">
                      Ohio
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card clean-border rounded-2xl p-8 flex items-start gap-6">
                <div className="w-24 h-24 bg-accent-blue/10 rounded-2xl flex flex-col items-center justify-center flex-shrink-0">
                  <div className="text-2xl font-black text-accent-blue">Q2</div>
                  <div className="text-sm text-muted-foreground">2025</div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground mb-2">Next Quarter</h3>
                  <p className="text-muted-foreground mb-3">Expansion to Detroit, Charlotte, and Richmond</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-full text-sm font-medium">
                      Michigan
                    </span>
                    <span className="bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-full text-sm font-medium">
                      North Carolina
                    </span>
                    <span className="bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-full text-sm font-medium">
                      Virginia
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card clean-border rounded-2xl p-8 flex items-start gap-6">
                <div className="w-24 h-24 bg-accent-purple/10 rounded-2xl flex flex-col items-center justify-center flex-shrink-0">
                  <div className="text-2xl font-black text-accent-purple">Q3</div>
                  <div className="text-sm text-muted-foreground">2025</div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground mb-2">Later This Year</h3>
                  <p className="text-muted-foreground mb-3">Planning for Newark, Jersey City, and Baltimore</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent-purple/10 text-accent-purple px-3 py-1 rounded-full text-sm font-medium">
                      New Jersey
                    </span>
                    <span className="bg-accent-purple/10 text-accent-purple px-3 py-1 rounded-full text-sm font-medium">
                      Maryland
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 bg-gradient-to-r from-accent-blue to-accent-purple">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Not in Your Area Yet?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join our waitlist and be the first to know when Global Stream arrives in your neighborhood. 
            Plus, get exclusive early-bird pricing when we launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white hover:bg-white/90 text-accent-blue font-semibold px-8">
              <a href="tel:8556837625" className="text-accent-blue">Call Now</a>
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-4">Over 50,000 people already on the waitlist</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CoveragePage
