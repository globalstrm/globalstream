import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FAQ } from '@/components/FAQ'
import { Phone, Mail, MessageCircle, FileText, Wifi, Shield, Settings, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SupportPage = () => {
  const supportOptions = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with a support agent",
      action: "1-800-555-0123",
      available: "24/7 Available"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us online",
      action: "Start Chat",
      available: "24/7 Available"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a message",
      action: "support@globalinternet.com",
      available: "Response within 2 hours"
    }
  ]

  const quickLinks = [
    { icon: Wifi, title: "WiFi Troubleshooting", description: "Fix common WiFi issues" },
    { icon: Settings, title: "Router Setup", description: "Configure your equipment" },
    { icon: Shield, title: "Security Settings", description: "Protect your network" },
    { icon: FileText, title: "Billing & Payments", description: "Manage your account" },
    { icon: HelpCircle, title: "Speed Issues", description: "Optimize your connection" },
    { icon: Wifi, title: "Connection Problems", description: "Get back online" }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">
              How Can We Help?
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Our award-winning support team is here for you 24/7
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-blue"
                />
                <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent-blue hover:bg-accent-blue/90">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 -mt-10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportOptions.map((option) => {
              const Icon = option.icon
              return (
                <div key={option.title} className="bg-card clean-border rounded-2xl p-8 text-center elevated-shadow hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <p className="text-accent-blue font-semibold mb-2">{option.action}</p>
                  <p className="text-xs text-muted-foreground">{option.available}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-foreground mb-4">Popular Help Topics</h2>
            <p className="text-muted-foreground text-lg">Quick solutions to common issues</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quickLinks.map((link) => {
              const Icon = link.icon
              return (
                <div key={link.title} className="bg-background clean-border rounded-xl p-6 flex items-start gap-4 hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-accent-emerald/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-emerald" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Speed Test Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div 
              className="relative rounded-3xl overflow-hidden"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/90 to-accent-purple/90" />
              <div className="relative z-10 p-12 text-center">
                <h2 className="text-4xl font-black text-white mb-4">Test Your Speed</h2>
                <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                  Check if you are getting the speeds you are paying for with our free speed test tool.
                </p>
                <Button className="bg-white text-accent-blue hover:bg-white/90 font-semibold px-8 py-6 text-lg">
                  Run Speed Test
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  )
}

export default SupportPage
