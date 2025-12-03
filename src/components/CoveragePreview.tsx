'use client'

import { MapPin, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CoveragePreview() {
  const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "San Francisco", "Seattle", "Denver", "Austin", "Miami",
    "Boston", "Atlanta", "Dallas", "Portland", "San Diego"
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-white/70">
                Nationwide Coverage
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-black leading-tight mb-6 text-white">
              Available in 150+ Cities
            </h2>
            
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Our fiber network is expanding rapidly across the nation. Check if high-speed 
              internet is available at your address.
            </p>

            {/* City Grid */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {cities.map((city) => (
                <div key={city} className="flex items-center gap-2 text-white/70">
                  <Check className="w-4 h-4 text-accent-emerald" />
                  <span className="text-sm">{city}</span>
                </div>
              ))}
            </div>

            <Link
              to="/coverage"
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <MapPin className="w-5 h-5" />
              Check Your Address
            </Link>
          </div>

          {/* Right - Image/Map Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden elevated-shadow">
              <img
                src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=800&q=80"
                alt="Network coverage map visualization"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-white">150+</div>
                    <div className="text-xs text-white/70">Cities</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-white">35</div>
                    <div className="text-xs text-white/70">States</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-white">500K+</div>
                    <div className="text-xs text-white/70">Homes</div>
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
