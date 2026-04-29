import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="/images/products/Whisk_0c3811f19a4a1f99bbe4660dc6d9c1d4dr.png" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative backgrounds */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-charcoal-900/5 rounded-full blur-3xl" />
            
            {/* Stats Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 border border-charcoal-100 hidden md:block"
            >
              <div className="text-4xl font-serif text-charcoal-950 font-bold mb-1">20+</div>
              <div className="text-sm text-gold-600 font-bold tracking-widest uppercase">Years of mastery</div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold-600 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Manufactured With Heart</span>
            <h2 className="text-5xl md:text-7xl font-serif text-charcoal-950 mb-10 leading-[1.1]">
              Crafting <span className="italic">Heritage</span> <br />For Modern Living
            </h2>
            
            <div className="space-y-8 mb-12">
              <p className="text-xl text-charcoal-600 leading-relaxed">
                At Salgo Furniture Factory, we don't just manufacture furniture; we engineer experiences. Our commitment to Scandinavian principles ensures that every piece is as functional as it is beautiful.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Sustainably sourced wood',
                  'Traditional joinery techniques',
                  'Custom finish options',
                  'Ergonomic precision'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold-500" size={20} />
                    <span className="text-charcoal-950 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 bg-charcoal-950 text-white px-10 py-5 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-gold-500 transition-all duration-300 shadow-xl"
            >
              Learn Our Story
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
