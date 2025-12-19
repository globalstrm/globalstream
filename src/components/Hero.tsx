import { motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Disclosure } from './Disclosure'

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0
      videoRef.current.muted = true
      videoRef.current.defaultMuted = true
      
      videoRef.current.addEventListener('play', () => {
        if (videoRef.current) {
          videoRef.current.muted = true
          videoRef.current.volume = 0
        }
      })
      
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => console.error('Video autoplay failed:', error))
      }
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.volume = 0
    }
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

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    if (isMobileMenuOpen) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '/plans', label: 'Plans' },
    { href: '/coverage', label: 'Coverage' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div className="relative min-h-screen h-[110vh] w-full overflow-hidden bg-black pt-8">
      {/* Spacer for Navbar */}
      <div className="h-20 w-full" />

      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
        }}
      />

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

      {/* Full-Width Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div 
          className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ease-out ${
            isScrolled 
              ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link to="/" className="flex items-center cursor-pointer">
              <span className="font-bagel text-white text-xl tracking-wider">GLOBAL STREAM</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  to={link.href} 
                  className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3 relative">
              <a
                href="tel:8556837625"
                className="hidden sm:block bg-accent-blue backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-md hover:bg-accent-blue/90 gentle-animation ml-4"
              >
                (855) 683-7625
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer z-[120] relative"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80] cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-black/90 backdrop-blur-xl border-l border-white/10 z-[90] mobile-menu-panel pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col px-6 pb-6 h-full">
            <div className="flex flex-col space-y-4 text-white">
              <Link to="/" className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  to={link.href} 
                  className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href="tel:8556837625"
              className="bg-accent-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-blue/90 active:bg-accent-blue/80 gentle-animation mt-8 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Assistance (855) 683-7625
            </a>
          </div>
        </div>
      </motion.div>

      {/* Hero Content - Asymmetric Split Layout */}
      <div className="absolute inset-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full pt-28 sm:pt-32 lg:pt-24">
            
            {/* Left Side - Main Content (60%) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="lg:col-span-7 space-y-8"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1]"
              >
                <span className="block text-white mb-3">
                  Find the Perfect
                </span>
                <span className="block bg-gradient-to-r from-accent-blue via-accent-emerald to-accent-purple bg-clip-text text-transparent">
                  Internet Service
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="text-white/90 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl"
              >
                We help you compare and find available internet, cable, and streaming services in your area. Get expert assistance today.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
              >
                <a
                  href="tel:8556837625"
                  className="group bg-accent-blue hover:bg-accent-blue/90 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-accent-blue/50 text-center flex items-center justify-center gap-2"
                >
                  Get Assistance (855) 683-7625
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <Link
                  to="/coverage"
                  className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 text-center"
                >
                  Check Your Area
                </Link>
              </motion.div>

              {/* Disclosure - Above the Fold */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="pt-6"
              >
                <Disclosure variant="compact" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="flex flex-wrap gap-6 pt-2"
              >
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5 text-accent-emerald" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5 text-accent-emerald" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Compare Options</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5 text-accent-emerald" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Expert Guidance</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Floating Stats Cards (40%) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative h-[500px]">
                {/* Speed Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="absolute top-0 right-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl w-64"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-purple rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-white text-sm font-medium mb-1">Service Options</h3>
                  <p className="text-white text-4xl font-black">1000+</p>
                  <p className="text-white/60 text-xs mt-2">Plans to compare</p>
                </motion.div>

                {/* Customer Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.7 }}
                  className="absolute top-40 left-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl w-56"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-emerald to-accent-blue rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-sm font-medium mb-1">Customers Helped</h3>
                  <p className="text-white text-3xl font-black">50K+</p>
                  <p className="text-white/60 text-xs mt-2">Find the right service</p>
                </motion.div>

                {/* Rating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.9 }}
                  className="absolute bottom-0 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl w-52"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-emerald rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-sm font-medium mb-1">Customer Satisfaction</h3>
                  <p className="text-white text-3xl font-black">4.8/5</p>
                  <p className="text-white/60 text-xs mt-2">Trusted assistance</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 right-8 z-40"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
