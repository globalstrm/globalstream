import { ImageWithFallback } from './figma/ImageWithFallback'
import marcusPhoto from '../assets/team-member-1.png'
import sofiaPhoto from '../assets/team-member-2.png'
import jakePhoto from '../assets/team-member-3.png'
import mayaPhoto from '../assets/team-member-4.png'
import connorPhoto from '../assets/team-member-5.png'
import zaraPhoto from '../assets/team-member-6.png'
import leoPhoto from '../assets/team-member-7.png'

export function Team() {
  const teamMembers = [
    {
      name: "Marcus Chen",
      role: "Chief Technology Officer",
      description: "15+ years building network infrastructure. Previously led engineering at major telecom companies.",
      image: marcusPhoto
    },
    {
      name: "Sofia Rodriguez",
      role: "VP of Customer Success",
      description: "Passionate about creating exceptional customer experiences and building lasting relationships.",
      image: sofiaPhoto
    },
    {
      name: "Jake Thompson",
      role: "Network Operations Director",
      description: "Expert in fiber optic systems and ensuring 99.9% uptime across our entire network.",
      image: jakePhoto
    },
    {
      name: "Maya Patel",
      role: "Lead Security Engineer",
      description: "Cybersecurity specialist protecting our customers from digital threats 24/7.",
      image: mayaPhoto
    },
    {
      name: "Connor Williams",
      role: "Field Operations Manager",
      description: "Leads our installation teams to deliver professional service every time.",
      image: connorPhoto
    },
    {
      name: "Zara Ahmed",
      role: "Product Manager",
      description: "Designing internet solutions that truly meet customer needs and expectations.",
      image: zaraPhoto
    },
    {
      name: "Leo Martinez",
      role: "Technical Support Lead",
      description: "Building and training our award-winning 24/7 support team.",
      image: leoPhoto
    }
  ]

  return (
    <div className="relative py-32 bg-background w-full" style={{ 
      overflow: 'visible', 
      height: 'auto', 
      minHeight: '0', 
      maxHeight: 'none' 
    }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12" style={{ 
        overflow: 'visible', 
        height: 'auto', 
        minHeight: '0', 
        maxHeight: 'none' 
      }}>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              The Experts Behind Your Connection
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground">
            <span className="block mb-2">Meet Our</span>
            <span className="block text-foreground">Team</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Dedicated professionals committed to keeping you connected
          </p>
        </div>

        {/* Team Grid */}
        <div className="max-w-7xl mx-auto">
          {/* First row - 4 members */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div
                key={member.name}
                className="group bg-card clean-border rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 elevated-shadow"
              >
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent-blue font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row - 3 members centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.slice(4, 7).map((member, index) => (
              <div
                key={member.name}
                className="group bg-card clean-border rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 elevated-shadow"
              >
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent-blue font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
