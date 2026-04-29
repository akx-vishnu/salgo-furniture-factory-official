import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Instagram, Youtube } from './Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white pt-12 pb-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-4 mb-8">
              <img src="/logo.png" alt="Salgo Logo" className="h-10 w-auto object-contain" />
              <h2 className="text-3xl font-serif font-bold text-charcoal-950 tracking-tighter">
                SALGO<span className="text-gold-500">.</span>
              </h2>
            </Link>
            <p className="text-charcoal-950 text-sm font-medium leading-relaxed mb-10 max-w-xs">
              Welcome to Salgo Furniture Factory, where craftsmanship meets innovation. We bring your spaces to life with elegance and functionality.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/salgo_tikka/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-charcoal-950 hover:border-gold-500 hover:text-gold-500 transition-all duration-500 shadow-sm"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.youtube.com/@salgotikka"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-charcoal-950 hover:border-gold-500 hover:text-gold-500 transition-all duration-500 shadow-sm"
              >
                <Youtube size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-charcoal-950 font-bold text-xs tracking-widest uppercase mb-10">Company</h4>
            <ul className="space-y-6">
              <li><Link to="/" className="text-charcoal-950 hover:text-gold-500 text-sm font-medium transition-colors">Home</Link></li>
              <li><Link to="/gallery" className="text-charcoal-950 hover:text-gold-500 text-sm font-medium transition-colors">Gallery</Link></li>
              <li><a href="/#services" className="text-charcoal-950 hover:text-gold-500 text-sm font-medium transition-colors">Services</a></li>
              <li><a href="/#about" className="text-charcoal-950 hover:text-gold-500 text-sm font-medium transition-colors">About Us</a></li>
              <li><Link to="/contact" className="text-charcoal-950 hover:text-gold-500 text-sm font-medium transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-charcoal-950 font-bold text-xs tracking-widest uppercase mb-10">Contact</h4>
            <ul className="space-y-8">
              <li className="flex gap-4 items-start">
                <MapPin className="text-gold-500 shrink-0" size={18} strokeWidth={1.5} />
                <span className="text-charcoal-950 text-sm font-medium leading-relaxed">
                  Salgo Furniture Factory, <br />
                  Chalakudy, Thrissur, Kerala
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-gold-500 shrink-0" size={18} strokeWidth={1.5} />
                <a href="tel:+919995454719" className="text-charcoal-950 text-sm font-medium hover:text-gold-500 transition-colors">
                  +91 99954 54719
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-gold-500 shrink-0" size={18} strokeWidth={1.5} />
                <a href="mailto:salgofurniturefactory2024@gmail.com" className="text-charcoal-950 text-sm font-medium hover:text-gold-500 transition-colors break-all">
                  salgofurniturefactory2024@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-cream-50 p-10 rounded-[2rem] border border-black/5">
            <h4 className="text-charcoal-950 font-bold text-xs tracking-widest uppercase mb-6">Start a Project</h4>
            <p className="text-charcoal-950 text-xs font-medium leading-relaxed mb-8">
              Discuss your furniture requirements with our specialists.
            </p>
            <a
              href="https://wa.me/919995454719?text=Hello%2C%20I%20would%20like%20to%20start%20a%20project.%20Can%20we%20discuss%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center bg-charcoal-950 text-white py-4 rounded-xl text-xs font-bold tracking-widest uppercase hover:bg-gold-500 transition-all duration-500 shadow-xl shadow-black/5"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:salgofurniturefactory2024@gmail.com"
              className="w-full inline-flex items-center justify-center mt-3 border border-black/10 text-charcoal-950 py-4 rounded-xl text-xs font-bold tracking-widest uppercase hover:border-gold-500 hover:text-gold-500 transition-all duration-500"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-charcoal-900/60 text-[10px] font-bold tracking-widest uppercase">
            © 2026 Salgo Furniture Factory. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-bold tracking-widest uppercase">
            <Link to="/contact" className="text-charcoal-900/70 hover:text-gold-500 transition-colors">Contact</Link>
            <Link to="/gallery" className="text-charcoal-900/70 hover:text-gold-500 transition-colors">Gallery</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-charcoal-900/70 hover:text-gold-500 transition-all"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase">Back to Top</span>
            <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:border-gold-500 transition-all">
              <ArrowUp size={18} strokeWidth={1.5} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}