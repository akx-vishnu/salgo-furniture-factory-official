import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-white/80 backdrop-blur-xl shadow-lg border-b border-charcoal-100' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-charcoal-950 shadow-xl overflow-hidden"
          >
            <img src="/logo.png" alt="Salgo" className="w-8 h-8 object-contain" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-serif text-3xl font-bold tracking-tighter text-charcoal-950 leading-none">
              SALGO<span className="text-gold-500">.</span>
            </span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-charcoal-400 font-bold">Factory</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors relative group py-2 ${
                  location.pathname === link.path ? 'text-charcoal-950' : 'text-charcoal-600 hover:text-charcoal-950'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-gold-400 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          <Link to="/contact">
            <button className="bg-charcoal-950 text-white px-8 py-3.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-gold-500 hover:shadow-lg hover:shadow-gold-500/20 transition-all duration-300 flex items-center gap-3">
              Request Catalog
              <ArrowRight size={14} />
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-12 h-12 flex items-center justify-center text-charcoal-950"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-charcoal-100 overflow-hidden"
          >
            <div className="px-6 py-12 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-2xl font-serif text-charcoal-950"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact">
                <button className="w-full bg-charcoal-950 text-white py-5 rounded-2xl font-bold tracking-widest uppercase text-xs">
                  Request Catalog
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
