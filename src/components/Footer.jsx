import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-charcoal-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <img src="/logo.png" alt="Salgo Logo" className="h-10 w-auto object-contain" />
              <span className="font-serif text-2xl font-bold tracking-tighter text-charcoal-950">
                SALGO<span className="text-gold-500">.</span>
              </span>
            </Link>
            <p className="text-charcoal-600 leading-relaxed mb-8 pr-4">
              Crafting premium Scandinavian-inspired furniture with a focus on longevity, aesthetics, and sustainability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-charcoal-950 font-bold tracking-widest uppercase text-xs mb-8">Collection</h4>
            <ul className="space-y-4">
              <li><Link to="/gallery" className="text-charcoal-700/80 hover:text-gold-600 transition-colors">Lounge Seating</Link></li>
              <li><Link to="/gallery" className="text-charcoal-700/80 hover:text-gold-600 transition-colors">Dining Series</Link></li>
              <li><Link to="/gallery" className="text-charcoal-700/80 hover:text-gold-600 transition-colors">Office Solutions</Link></li>
              <li><Link to="/gallery" className="text-charcoal-700/80 hover:text-gold-600 transition-colors">Artisan Decor</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-charcoal-950 font-bold tracking-widest uppercase text-xs mb-8">Connect</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-charcoal-700/80 hover:text-gold-600 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-charcoal-700/80 hover:text-gold-600 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-charcoal-700/80 hover:text-gold-600 transition-colors">YouTube</a></li>
              <li><a href="#" className="text-charcoal-700/80 hover:text-gold-600 transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-charcoal-950 font-bold tracking-widest uppercase text-xs mb-8">Factory</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-gold-500 shrink-0" size={20} />
                <span className="text-charcoal-700/80 text-sm">Chalakudy, Thrissur<br />Kerala, India</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-gold-500 shrink-0" size={20} />
                <span className="text-charcoal-700/80 text-sm">+91 99954 54719</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-gold-500 shrink-0" size={20} />
                <span className="text-charcoal-700/80 text-sm break-all">salgofurniturefactory2024@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-charcoal-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-charcoal-500/70 text-xs tracking-widest uppercase">
            © 2026 Salgo Furniture Factory. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-charcoal-950 font-bold text-xs tracking-[0.2em] uppercase"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-charcoal-200 flex items-center justify-center group-hover:bg-charcoal-950 group-hover:text-white transition-all duration-300">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
