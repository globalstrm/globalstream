import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Target, Eye, Heart, Award, Zap, Shield } from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To help every customer make informed decisions about internet and cable services through honest guidance and transparent comparisons."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "A marketplace where finding connectivity services is simple, clear, and free from confusion or misleading claims."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Independence, transparency, and education-first assistance guide every interaction we have with customers."
    },
    {
      icon: Award,
      title: "Our Commitment",
      description: "We provide unbiased guidance, never claim affiliation with providers, and charge transparent service fees for our assistance."
    }
  ]

  const milestones = [
    { quarter: "Q1 2025", event: "Global Stream assistance platform launched" },
    { quarter: "Q2 2025", event: "Helped first 5,000 customers compare service options" },
    { quarter: "Q3 2025", event: "Expanded coverage database to nationwide providers" },
    { quarter: "Q4 2025", event: "Reached 50,000+ customers assisted milestone" }
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
              A new kind of service assistance platform, launched in 2025 to help customers 
              navigate the confusing world of internet and cable providers with honest, independent guidance.
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
                  Shopping for internet and cable services shouldn't feel like navigating a maze. 
                  Comparing providers, decoding pricing structures, and understanding what's actually 
                  available in your area is unnecessarily complex.
                </p>
                <p>
                  In early 2025, we launched Global Stream as an independent third-party assistance platform 
                  to solve this problem. We don't sell services or partner with providers—we simply help 
                  customers understand their options through education and comparison.
                </p>
                <p>
                  Since our launch, we've assisted over 50,000 customers in finding connectivity solutions 
                  that fit their needs. As a startup, our focus is on building trust through transparency, 
                  providing value through expertise, and maintaining complete independence from providers.
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
            <h2 className="text-4xl font-black text-foreground mb-4">Our Journey in 2025</h2>
            <p className="text-muted-foreground text-lg">Key milestones in our first year</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.quarter} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {milestone.quarter}
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
            <h2 className="text-4xl font-black text-foreground mb-4">Recognition & Trust</h2>
            <p className="text-muted-foreground text-lg">Building credibility as a new assistance platform</p>
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
              <h3 className="text-xl font-black text-foreground mb-2">Startup Recognition</h3>
              <p className="text-muted-foreground text-sm">Featured in 2025 Tech Innovation launches</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                alt="Service comparison platform"
                className="rounded-3xl elevated-shadow"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-blue text-white p-6 rounded-2xl elevated-shadow">
                <div className="text-3xl font-black mb-1">50K+</div>
                <div className="text-sm">Customers Assisted</div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-black text-foreground mb-6">How We Provide Assistance</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our platform connects customers with information about available internet, cable, and 
                streaming options. We educate, compare, and guide—but we never sell services directly 
                or claim to represent providers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Provider Database</h4>
                    <p className="text-sm text-muted-foreground">Access to nationwide provider coverage and plan information</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-emerald/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent-emerald" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Independent Guidance</h4>
                    <p className="text-sm text-muted-foreground">No provider partnerships or biased recommendations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Transparent Service Fees</h4>
                    <p className="text-sm text-muted-foreground">Clear pricing for our assistance, separate from provider charges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-foreground mb-4">Our Commitment to Customers</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              As a new startup, we're building our reputation on honesty, transparency, and education-first service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-background clean-border rounded-2xl p-6">
              <h3 className="text-2xl font-black text-foreground mb-3">Independent Platform</h3>
              <p className="text-muted-foreground mb-4">
                We maintain complete independence from all providers and never claim affiliation, endorsement, 
                or authorization to represent any company.
              </p>
              <div className="text-accent-blue font-bold">100% Independent</div>
            </div>
            
            <div className="bg-background clean-border rounded-2xl p-6">
              <h3 className="text-2xl font-black text-foreground mb-3">Transparent Fees</h3>
              <p className="text-muted-foreground mb-4">
                Our service fees are clearly disclosed upfront and are separate from provider charges. 
                We never hide costs or add surprise fees.
              </p>
              <div className="text-accent-emerald font-bold">Always Disclosed</div>
            </div>
            
            <div className="bg-background clean-border rounded-2xl p-6">
              <h3 className="text-2xl font-black text-foreground mb-3">Education Focus</h3>
              <p className="text-muted-foreground mb-4">
                We educate customers about their options, help them understand plans and pricing, 
                and guide them to make informed decisions.
              </p>
              <div className="text-accent-purple font-bold">Customer Empowerment</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
