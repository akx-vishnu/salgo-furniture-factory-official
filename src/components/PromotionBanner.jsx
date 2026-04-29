import { motion } from 'framer-motion'
import { Truck, Star, Phone } from 'lucide-react'

export default function PromotionBanner() {
  return (
    <div className="fixed top-0 w-full z-[60] bg-charcoal-950 text-cream-50 py-3 overflow-hidden h-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-gold-400"
          >
            <Truck size={14} />
            All Kerala Free Delivery
          </motion.div>
          <div className="hidden md:block w-px h-4 bg-white/10" />
          <div className="hidden md:flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-white/60">
            <Star size={14} className="text-gold-500" />
            Premium Quality Guaranteed
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="tel:+919995454719" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase hover:text-gold-400 transition-colors">
            <Phone size={14} />
            +91 99954 54719
          </a>
          <div className="hidden md:block w-px h-4 bg-white/10" />
          <a
            href="https://wa.me/919995454719?text=Hello%2C%20I%20am%20interested%20in%20your%20furniture."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-gold-400 hover:text-white transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-32 h-full bg-gold-500/10 blur-xl" />
      <div className="absolute top-0 right-1/4 w-32 h-full bg-gold-500/10 blur-xl" />
    </div>
  )
}
