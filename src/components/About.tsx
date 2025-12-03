'use client'

import { useEffect, useState } from 'react'

export function About() {
  const [activeFrame, setActiveFrame] = useState(-1)
  const [animationStarted, setAnimationStarted] = useState(false)

  const processSteps = [
    {
      number: "01",
      title: "Check Availability",
      description: "Enter your address to see available plans in your area",
      color: "accent-blue"
    },
    {
      number: "02", 
      title: "Choose Your Plan",
      description: "Select the perfect speed and features for your needs",
      color: "accent-emerald"
    },
    {
      number: "03",
      title: "Schedule Installation",
      description: "Pick a convenient time for our expert technicians",
      color: "accent-purple"
    },
    {
      number: "04",
      title: "Professional Setup",
      description: "We handle all equipment and network configuration",
      color: "accent-blue"
    },
    {
      number: "05",
      title: "Get Connected",
      description: "Enjoy blazing fast internet from day one",
      color: "accent-purple"
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      setAnimationStarted(true)
      processSteps.forEach((_, index) => {
        setTimeout(() => {
          setActiveFrame(index)
        }, index * 2000 + 1000)
      })
    }, 3000)
  }, [])

  return (
    <section id="about" className="relative py-20 bg-background overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.8) 1px, transparent 0)`,
          backgroundSize: '3px 3px'
        }} />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Simple Process
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            How It Works
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Get connected in just 5 simple steps
          </p>
        </div>

        {/* Process Strip Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Strip Background */}
          <div className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 rounded-xl overflow-hidden"
               style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.05)' }}>
            
            {/* Top Decoration */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-black z-20 overflow-hidden">
              <div className={`flex items-center justify-between px-12 h-full ${
                animationStarted ? 'perforations-scroll-animation' : ''
              }`} style={{ width: '200%' }}>
                {[...Array(20)].map((_, i) => (
                  <div key={`top-${i}`} className="w-4 h-3 bg-accent-blue/30 rounded-sm flex-shrink-0" />
                ))}
                {[...Array(20)].map((_, i) => (
                  <div key={`top-dup-${i}`} className="w-4 h-3 bg-accent-blue/30 rounded-sm flex-shrink-0" />
                ))}
              </div>
            </div>
            
            {/* Bottom Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-black z-20 overflow-hidden">
              <div className={`flex items-center justify-between px-12 h-full ${
                animationStarted ? 'perforations-scroll-animation' : ''
              }`} style={{ width: '200%' }}>
                {[...Array(20)].map((_, i) => (
                  <div key={`bottom-${i}`} className="w-4 h-3 bg-accent-blue/30 rounded-sm flex-shrink-0" />
                ))}
                {[...Array(20)].map((_, i) => (
                  <div key={`bottom-dup-${i}`} className="w-4 h-3 bg-accent-blue/30 rounded-sm flex-shrink-0" />
                ))}
              </div>
            </div>

            {/* Steps Container */}
            <div className="relative py-6 px-8 overflow-hidden h-64 max-w-full">
              <div className={`flex transition-transform duration-1000 ease-in-out ${
                animationStarted ? 'film-scroll-animation' : ''
              }`} style={{ width: 'max-content', gap: '32px' }}>
                
                {/* Start */}
                <div className="flex-shrink-0 w-80 h-52 bg-gray-800 rounded-lg border-2 border-gray-700 opacity-60 flex items-center justify-center" 
                     style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)' }}>
                  <div className="text-gray-400 font-mono tracking-wider">● START</div>
                </div>
                
                {/* Process Steps */}
                {processSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`flex-shrink-0 w-80 h-52 bg-background rounded-lg border-4 ${
                      activeFrame >= index 
                        ? `border-${step.color}` 
                        : 'border-gray-600'
                    }`}
                    style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}
                  >
                    <div className="relative h-full p-6 flex flex-col justify-between">
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-black z-10 border-3 border-white text-lg"
                           style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.4)' }}>
                        {step.number}
                      </div>
                      
                      <div className="opacity-100">
                        <h3 className="font-black text-xl leading-tight mb-4 text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                      <div className="absolute left-1 top-1 bottom-1 w-px bg-gray-300/20" />
                      <div className="absolute right-1 top-1 bottom-1 w-px bg-gray-300/20" />
                      <div className="absolute top-1 left-1 right-1 h-px bg-gray-300/20" />
                      <div className="absolute bottom-1 left-1 right-1 h-px bg-gray-300/20" />
                    </div>
                  </div>
                ))}
                
                {/* End */}
                <div className="flex-shrink-0 w-80 h-52 bg-gray-800 rounded-lg border-2 border-gray-700 opacity-60 flex items-center justify-center"
                     style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)' }}>
                  <div className="text-gray-400 font-mono tracking-wider">● CONNECTED</div>
                </div>
                
                {/* Duplicate for loop */}
                <div className="flex-shrink-0 w-80 h-52 bg-gray-800 rounded-lg border-2 border-gray-700 opacity-60 flex items-center justify-center" 
                     style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)' }}>
                  <div className="text-gray-400 font-mono tracking-wider">● START</div>
                </div>
                
                {processSteps.map((step, index) => (
                  <div
                    key={`duplicate-${step.number}`}
                    className={`flex-shrink-0 w-80 h-52 bg-background rounded-lg border-4 ${
                      activeFrame >= index 
                        ? `border-${step.color}` 
                        : 'border-gray-600'
                    }`}
                    style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}
                  >
                    <div className="relative h-full p-6 flex flex-col justify-between">
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-black z-10 border-3 border-white text-lg"
                           style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.4)' }}>
                        {step.number}
                      </div>
                      
                      <div className="opacity-100">
                        <h3 className="font-black text-xl leading-tight mb-4 text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                      <div className="absolute left-1 top-1 bottom-1 w-px bg-gray-300/20" />
                      <div className="absolute right-1 top-1 bottom-1 w-px bg-gray-300/20" />
                      <div className="absolute top-1 left-1 right-1 h-px bg-gray-300/20" />
                      <div className="absolute bottom-1 left-1 right-1 h-px bg-gray-300/20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info Bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 bg-card/80 backdrop-blur-sm clean-border rounded-2xl px-8 py-4 subtle-shadow">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-foreground">Same-Day Setup</span>
            </div>
            
            <div className="w-px h-6 bg-border" />
            
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
              <span className="text-sm font-semibold text-foreground">Free Installation</span>
            </div>
            
            <div className="w-px h-6 bg-border" />
            
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              <span className="text-sm font-semibold text-foreground">No Contracts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
