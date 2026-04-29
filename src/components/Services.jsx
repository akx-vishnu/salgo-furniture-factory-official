import { motion } from 'framer-motion'
import { PenTool, Box, ShieldCheck, Truck } from 'lucide-react'

const serviceItems = [
  {
    icon: PenTool,
    title: 'Custom Design',
    desc: 'Work with our design team to create a piece that fits your space and soul perfectly.'
  },
  {
    icon: Box,
    title: 'Factory Direct',
    desc: 'No middlemen. You get premium quality at factory prices with full transparency.'
  },
  {
    icon: ShieldCheck,
    title: 'Heritage Quality',
    desc: 'Materials selected for their durability and beauty, built to last generations.'
  },
  {
    icon: Truck,
    title: 'Secure Delivery',
    desc: 'White-glove delivery service ensuring your furniture arrives in pristine condition.'
  }
]

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {serviceItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-cream-50 flex items-center justify-center text-charcoal-950 mb-6 group-hover:bg-charcoal-950 group-hover:text-white transition-all duration-500">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-serif text-charcoal-950 mb-3">{item.title}</h3>
              <p className="text-charcoal-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
