import { motion } from 'framer-motion'
import { Eye, Target, Heart } from 'lucide-react'

const companyGoals = [
  { 
    icon: Eye, 
    title: 'Precision Craft', 
    desc: 'Leveraging decades of expertise in Kerala’s wood-crafting traditions, combined with modern industrial precision.' 
  },
  { 
    icon: Target, 
    title: 'Custom Engineering', 
    desc: 'Every piece is engineered for the unique climate and lifestyle of our clients, ensuring longevity and comfort.' 
  },
  { 
    icon: Heart, 
    title: 'Artisan Soul', 
    desc: 'Each furniture piece is hand-finished by master artisans who pour their passion into every detail.' 
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-black/5 aspect-square lg:aspect-[4/5] shadow-2xl shadow-black/5 bg-white">
              <img 
                src="/images/products/Whisk_0c3811f19a4a1f99bbe4660dc6d9c1d4dr.png" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-[2s] hover:scale-105"
              />
            </div>
            {/* Abstract Decorative */}
            <div className="absolute -top-10 -left-10 w-64 h-64 border border-gold-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px]" />
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col gap-12">
            <div>
              <span className="text-gold-600 font-bold text-[10px] tracking-[0.5em] uppercase mb-8 block">
                The Heritage
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-charcoal-950 mb-6 leading-[0.9]">
                Manufactured <br />
                <span className="italic font-light text-gradient-gold">With Heart</span>
              </h2>
              <p className="text-charcoal-950 text-xl font-medium leading-relaxed">
                Salgo Furniture Factory is where craftsmanship meets innovation. With years of expertise, we bring your spaces to life with elegance and functionality.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 gap-10">
              {companyGoals.map((goal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="flex gap-8 items-start group"
                >
                  <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm group-hover:border-gold-500/30 transition-colors">
                    <goal.icon className="text-gold-500" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-charcoal-950 mb-3">{goal.title}</h4>
                    <p className="text-charcoal-950/80 text-sm font-medium leading-relaxed max-w-md">{goal.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://wa.me/919995454719?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Salgo%20Furniture%20Factory."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal-950 text-white px-10 py-4 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-gold-500 transition-all duration-500 shadow-xl shadow-black/5"
              >
                Talk to Us
              </a>
              <a
                href="https://www.instagram.com/salgo_tikka/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black/10 text-charcoal-950 px-10 py-4 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase hover:border-gold-500 hover:text-gold-500 transition-all duration-500"
              >
                Follow Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}