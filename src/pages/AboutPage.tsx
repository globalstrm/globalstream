import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Target, Eye, Heart, Award, Zap, Shield } from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To connect every home and business with reliable, affordable, ultra-fast internet that empowers people to do more."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "A world where everyone has access to the internet infrastructure they need to thrive in the digital age."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Transparency, reliability, and customer-first thinking guide every decision we make as a company."
    },
    {
      icon: Award,
      title: "Our Promise",
      description: "We deliver on our speed promises, provide honest pricing, and stand behind our service with a 30-day guarantee."
    }
  ]

  const milestones = [
    { year: "2015", event: "Global Stream founded in San Francisco" },
    { year: "2017", event: "Expanded to 10 cities, reached 50,000 customers" },
    { year: "2019", event: "Launched 1 Gbps residential plans nationwide" },
    { year: "2021", event: "Hit 250,000 customers, introduced business solutions" },
    { year: "2023", event: "Expanded to 150+ cities, launched 10 Gbps service" },
    { year: "2024", event: "Reached 500,000+ happy customers" }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-background" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 sm:mb-6 text-white drop-shadow-lg">
              About Global Stream
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed max-w-2xl drop-shadow-md">
              We started with a simple belief: everyone deserves fast, reliable internet 
              without the hassle of contracts, hidden fees, or poor customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Global Stream was founded to simplify the overwhelming process of finding internet 
                  and cable services. Our founders experienced firsthand how difficult it was to compare 
                  providers, understand complex pricing, and make informed decisions.
                </p>
                <p>
                  In 2025, we launched our independent service assistance platform to help customers 
                  navigate the complexity of choosing connectivity services. We built relationships 
                  with providers nationwide and developed expertise in understanding service options.
                </p>
                <p>
                  Today, we've helped over 50,000 customers find the right services for their needs. 
                  As an independent third-party platform, our mission is clear: provide honest guidance, 
                  transparent comparisons, and expert assistance without bias or affiliation.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Global Stream team at work"
                className="rounded-3xl elevated-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-foreground mb-4">What Drives Us</h2>
            <p className="text-muted-foreground text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-background clean-border rounded-2xl p-6 text-center elevated-shadow">
                  <div className="w-14 h-14 bg-accent-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">Key milestones in our growth</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center text-white font-black">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pt-4">
                  <p className="text-foreground text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground text-lg">Industry-leading excellence acknowledged by experts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card clean-border rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-black text-foreground mb-2">Trusted Platform</h3>
              <p className="text-muted-foreground text-sm">Independent assistance recognized for transparency</p>
            </div>
            
            <div className="bg-card clean-border rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-black text-foreground mb-2">High Satisfaction</h3>
              <p className="text-muted-foreground text-sm">4.8/5 rating from customers we've assisted</p>
            </div>
            
            <div className="bg-card clean-border rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-black text-foreground mb-2">Innovation Award</h3>
              <p className="text-muted-foreground text-sm">Tech Innovation Summit for fiber infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                alt="Fiber optic technology"
                className="rounded-3xl elevated-shadow"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-blue text-white p-6 rounded-2xl elevated-shadow">
                <div className="text-3xl font-black mb-1">99.9%</div>
                <div className="text-sm">Network Uptime</div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-black text-foreground mb-6">Built on Cutting-Edge Technology</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our network is powered by 100% fiber optic cables, delivering symmetrical gigabit speeds 
                with industry-leading reliability. We continuously invest in infrastructure upgrades to 
                stay ahead of the curve.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">100% Fiber Network</h4>
                    <p className="text-sm text-muted-foreground">Pure fiber from our data center to your home</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-emerald/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent-emerald" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Redundant Infrastructure</h4>
                    <p className="text-sm text-muted-foreground">Multiple failover systems ensure continuous service</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">24/7 Network Monitoring</h4>
                    <p className="text-sm text-muted-foreground">Real-time monitoring and proactive maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-foreground mb-4">Giving Back to Communities</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We believe in using our technology to make a positive impact in the communities we serve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-background clean-border rounded-2xl p-6">
              <h3 className="text-2xl font-black text-foreground mb-3">Digital Education</h3>
              <p className="text-muted-foreground mb-4">
                Free internet for 10,000+ students from low-income families to support remote learning
              </p>
              <div className="text-accent-blue font-bold">Since 2020</div>
            </div>
            
            <div className="bg-background clean-border rounded-2xl p-6">
              <h3 className="text-2xl font-black text-foreground mb-3">Small Business Support</h3>
              <p className="text-muted-foreground mb-4">
                Subsidized high-speed internet for local nonprofits and community organizations
              </p>
              <div className="text-accent-emerald font-bold">200+ Organizations</div>
            </div>
            
            <div className="bg-background clean-border rounded-2xl p-6">
              <h3 className="text-2xl font-black text-foreground mb-3">Environmental Commitment</h3>
              <p className="text-muted-foreground mb-4">
                Carbon-neutral operations and energy-efficient data centers powered by renewable energy
              </p>
              <div className="text-accent-purple font-bold">100% Renewable</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
