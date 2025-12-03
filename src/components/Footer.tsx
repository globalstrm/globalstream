'use client'

import { Link } from 'react-router-dom'

export function Footer() {
  const technologies = [
    'Fiber Optic',
    'WiFi 6E',
    'DOCSIS 4.0',
    '5G Fixed Wireless',
    'Mesh Networks',
    'SDN Technology',
    'Cloud Infrastructure',
    'DDoS Protection'
  ]

  return (
    <footer className="relative py-20 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-4">
            <div>
              <div className="font-bagel text-background text-3xl tracking-wider mb-4">
                GLOBAL STREAM
              </div>
              <p className="text-background/70 leading-relaxed mb-6">
                Connecting homes and businesses with ultra-fast, reliable fiber internet. 
                Experience the future of connectivity today.
              </p>
              {/* Contact Phone */}
              <div className="bg-background/10 rounded-2xl p-4 border border-background/20">
                <p className="text-background/70 text-sm mb-2">Call us now</p>
                <a href="tel:8559450333" className="text-background text-2xl font-black hover:text-background/80 transition-colors">
                  (855) 945-0333
                </a>
                <p className="text-background/60 text-xs mt-2">24/7 Support Available</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="font-black text-lg text-background mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background gentle-animation">Home Internet</a></li>
              <li><a href="#" className="text-background/70 hover:text-background gentle-animation">Business</a></li>
              <li><a href="#" className="text-background/70 hover:text-background gentle-animation">Streaming TV</a></li>
              <li><a href="#" className="text-background/70 hover:text-background gentle-animation">Phone</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h4 className="font-black text-lg text-background mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background gentle-animation">Help Center</a></li>
              <li><Link to="/contact" className="text-background/70 hover:text-background gentle-animation">Contact Us</Link></li>
              <li><a href="#" className="text-background/70 hover:text-background gentle-animation">Service Status</a></li>
              <li><a href="#" className="text-background/70 hover:text-background gentle-animation">Speed Test</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="col-span-12 md:col-span-4">
            <h4 className="font-black text-lg text-background mb-4">Our Technology</h4>
            <p className="text-background/70 text-sm mb-4 leading-relaxed">
              We use cutting-edge technology to deliver the fastest, most reliable internet experience.
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-background/70 text-xs px-3 py-1 bg-background/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-background/70 mb-4 md:mb-0">
              © 2025 Global Stream. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-background/70">
              <Link to="/privacy-policy" className="hover:text-background gentle-animation">Privacy Policy</Link>
              <Link to="/refund-policy" className="hover:text-background gentle-animation">Refund Policy</Link>
              <Link to="/terms-conditions" className="hover:text-background gentle-animation">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
