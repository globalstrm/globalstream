import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/plans', label: 'Plans' },
    { href: '/coverage', label: 'Coverage' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ]

  const isHomePage = location.pathname === '/'
  const textColor = isHomePage ? 'text-foreground' : 'text-white'

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div 
          className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ease-out ${
            isScrolled 
              ? isHomePage
                ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-lg'
                : 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
              : isHomePage 
                ? 'bg-background/80 backdrop-blur-md'
                : 'bg-black/30 backdrop-blur-md'
          }`}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link to="/" className="flex items-center cursor-pointer">
              <span className={`font-bagel ${textColor} text-xl tracking-wider`}>GLOBAL STREAM</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium gentle-animation hover:scale-105 ${
                    location.pathname === link.href 
                      ? 'text-accent-blue' 
                      : `${textColor} hover:text-accent-blue`
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="tel:8559450333"
                className="hidden sm:block bg-accent-blue text-white font-semibold px-6 py-3 rounded-md hover:bg-accent-blue/90 gentle-animation"
              >
                (855) 945-0333
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-3 rounded-full text-foreground hover:bg-muted gentle-animation cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[100]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-background border-l border-border z-[110]"
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 rounded-full hover:bg-muted"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-lg font-medium text-lg ${
                  location.pathname === link.href 
                    ? 'bg-accent-blue/10 text-accent-blue' 
                    : 'hover:bg-muted'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/plans"
            className="mt-8 bg-accent-blue text-white font-semibold px-6 py-3 rounded-lg text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </>
  )
}
