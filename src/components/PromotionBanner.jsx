import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function PromotionBanner() {
  return (
    <div className="bg-charcoal-950 text-white py-3 relative overflow-hidden z-[60]">
      <div className="flex items-center justify-center gap-3">
        <Sparkles className="text-gold-400" size={14} />
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase">
          New Summer Collection <span className="text-gold-400 mx-2">—</span> Limited Edition Artisan Sets Available
        </p>
      </div>
      
      {/* Animated glow */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          left: ['-50%', '150%'] 
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-0 w-64 h-full bg-gradient-to-r from-transparent via-gold-400/20 to-transparent skew-x-12"
      />
    </div>
  )
}
