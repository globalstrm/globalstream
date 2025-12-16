'use client'

import { Link } from 'react-router-dom'
import { Disclosure } from './Disclosure'

export function Footer() {
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
                Your trusted partner in finding the right internet, cable, and streaming services. We provide independent assistance to help you compare options and make informed decisions.
              </p>
              {/* Contact Phone */}
              <div className="bg-background/10 rounded-2xl p-4 border border-background/20">
                <p className="text-background/70 text-sm mb-2">Get assistance now</p>
                <a href="tel:8556837625" className="text-background text-2xl font-black hover:text-background/80 transition-colors">
                  (855) 683-7625
                </a>
                <p className="text-background/60 text-xs mt-2">Expert Support Available</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="font-black text-lg text-background mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background gentle-animation">Internet Options</a></li>
              <li><a href="#" className="text-background/70 hover:text-background gentle-animation">Business Services</a></li>
              <li><a href="#" className="text-background/70 hover:text-background gentle-animation">TV & Streaming</a></li>
              <li><a href="#" className="text-background/70 hover:text-background gentle-animation">Phone Services</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h4 className="font-black text-lg text-background mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background gentle-animation">FAQ</a></li>
              <li><Link to="/contact" className="text-background/70 hover:text-background gentle-animation">Contact Us</Link></li>
              <li><Link to="/support" className="text-background/70 hover:text-background gentle-animation">Support Center</Link></li>
              <li><a href="#" className="text-background/70 hover:text-background gentle-animation">Service Areas</a></li>
            </ul>
          </div>

          {/* Disclosure Section */}
          <div className="col-span-12 md:col-span-4">
            <Disclosure variant="footer" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/70 text-center md:text-left">
              © 2025 Global Stream. Independent third-party service assistance platform. All trademarks belong to their respective owners.
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-background/70">
              <Link to="/privacy-policy" className="hover:text-background gentle-animation">Privacy Policy</Link>
              <Link to="/refund-policy" className="hover:text-background gentle-animation">Refund Policy</Link>
              <Link to="/terms-conditions" className="hover:text-background gentle-animation">Terms & Conditions</Link>
              <Link to="/disclaimer" className="hover:text-background gentle-animation">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
