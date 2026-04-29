import { motion } from 'framer-motion'
import { ShieldCheck, Truck, Clock, ArrowRight } from 'lucide-react'

export default function ProductDetails() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="details" className="py-24 lg:py-32 bg-cream-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-16">
          {/* Left: Interactive Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <span className="inline-block text-gold-500 font-bold text-[10px] tracking-[0.4em] uppercase mb-6">
              The Anatomy of Luxury
            </span>
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-charcoal-950 mb-8 leading-tight">
              Bespoke <br />
              <span className="italic font-light text-gradient-gold">Engineering</span>
            </h2>
            <div className="section-divider !mx-0 mb-10" />
            <p className="text-charcoal-950 text-lg font-medium leading-relaxed mb-12 max-w-lg">
              Every piece we create is a masterpiece of precision. We combine 
              heritage craftsmanship with modern engineering to deliver 
              unparalleled comfort and durability.
            </p>

            <div className="grid gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Lifetime Integrity',
                  desc: 'Reinforced solid wood frames with precision-welded steel joints.',
                },
                {
                  icon: Clock,
                  title: 'Timeless Finish',
                  desc: '12-step hand-rubbed finishing process for enduring beauty.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="premium-card p-8 group flex items-start gap-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-black/[0.02] border border-black/5 flex items-center justify-center group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-all duration-500">
                    <item.icon className="text-gold-500" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-charcoal-950 mb-2 group-hover:text-gold-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-charcoal-950/80 text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Pricing & CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="premium-card p-12 lg:p-16 relative z-10 overflow-hidden !bg-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl" />
              
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-gold-500" />
                <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-[10px]">
                  Direct from Factory
                </span>
              </div>

              <h3 className="font-serif text-4xl font-bold text-charcoal-950 mb-6">
                Premium Sofa Systems
              </h3>
              <div className="flex items-baseline gap-4 mb-10">
                <span className="text-charcoal-900/40 text-lg font-light line-through">₹45,000</span>
                <span className="text-5xl md:text-6xl font-serif font-bold text-charcoal-950">
                  ₹28,500
                </span>
                <span className="text-gold-500 text-sm font-bold uppercase tracking-widest">
                  Starting
                </span>
              </div>

              <div className="space-y-6 mb-12">
                {[
                  'Bespoke customization available',
                  'Premium Italian fabric options',
                  'All Kerala Free Delivery',
                  '10-year structural warranty',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 text-charcoal-950 font-medium text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                    {text}
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/919995454719?text=Hello%2C%20I%20am%20interested%20in%20your%20Premium%20Sofa%20Systems.%20Could%20you%20please%20share%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-4 bg-charcoal-950 text-white py-6 rounded-full font-bold tracking-[0.2em] uppercase text-xs hover:bg-gold-500 transition-all duration-500 group shadow-2xl shadow-black/10"
              >
                Inquire Now
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-gold-500/10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}