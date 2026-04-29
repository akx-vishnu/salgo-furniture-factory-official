import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Instagram, Youtube } from './Icons'

const LINKS = [
  { label: 'Home', to: '/', type: 'route' },
  { label: 'Gallery', to: '/gallery', type: 'route' },
  { label: 'Services', to: '#services', type: 'hash' },
  { label: 'About', to: '#about', type: 'hash' },
  { label: 'Contact', to: '/contact', type: 'route' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const isActive = (to) => location.pathname === to

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav py-4 shadow-sm top-0' : 'py-8 top-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Salgo Logo" className="h-10 md:h-12 w-auto object-contain" />
            <span className="text-2xl font-serif font-bold tracking-tighter text-charcoal-950">
              SALGO<span className="text-gold-500">.</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {LINKS.map((item) => (
            item.type === 'route' ? (
              <Link
                key={item.label}
                to={item.to}
                className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors ${
                  isActive(item.to)
                    ? 'text-gold-500'
                    : 'text-charcoal-900/80 hover:text-gold-500'
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={location.pathname === '/' ? item.to : `/${item.to}`}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-charcoal-900/80 hover:text-gold-500 transition-colors"
              >
                {item.label}
              </a>
            )
          ))}

          <div className="h-4 w-[1px] bg-black/10" />

          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/salgo_tikka/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-charcoal-900/60 hover:text-gold-500 transition-colors"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.youtube.com/@salgotikka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-charcoal-900/60 hover:text-gold-500 transition-colors"
            >
              <Youtube size={18} strokeWidth={1.5} />
            </a>
          </div>

          <a
            href="https://wa.me/919995454719?text=Hello%2C%20I%20am%20interested%20in%20your%20furniture.%20Could%20you%20please%20share%20more%20details%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal-950 text-white px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-gold-500 transition-all duration-500 shadow-xl shadow-black/5"
          >
            Inquire
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-charcoal-950"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-cream-50 border-b border-black/5 p-8 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {LINKS.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`text-lg font-serif font-bold ${
                    isActive(item.to) ? 'text-gold-500' : 'text-charcoal-950'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={location.pathname === '/' ? item.to : `/${item.to}`}
                  className="text-lg font-serif font-bold text-charcoal-950"
                >
                  {item.label}
                </a>
              )
            ))}

            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://www.instagram.com/salgo_tikka/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-900/60 hover:text-gold-500 transition-colors"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.youtube.com/@salgotikka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-900/60 hover:text-gold-500 transition-colors"
              >
                <Youtube size={20} strokeWidth={1.5} />
              </a>
            </div>

            <a
              href="https://wa.me/919995454719?text=Hello%2C%20I%20am%20interested%20in%20your%20furniture.%20Could%20you%20please%20share%20more%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-charcoal-950 text-center py-4 rounded-xl font-bold uppercase tracking-widest text-xs"
            >
              WhatsApp Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}