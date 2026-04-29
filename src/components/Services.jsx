import { motion } from 'framer-motion'
import {
  PenTool,
  Home,
  Building2,
  Wrench,
  ArrowUpRight
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Custom Residential Seating',
    description: 'Bespoke sofas and lounge chairs designed for ultimate comfort and durability, using premium materials tailored to your home’s aesthetic.',
    tag: 'Living Space'
  },
  {
    icon: Building2,
    title: 'Executive Office Suites',
    description: 'Commanding office furniture from ergonomic executive chairs to expansive conference tables, designed for professional impact.',
    tag: 'Commercial'
  },
  {
    icon: PenTool,
    title: 'Bespoke Design Service',
    description: 'Collaborate with our master designers to create unique, one-of-a-kind pieces that perfectly reflect your individual style and space.',
    tag: 'Design'
  },
  {
    icon: ArrowUpRight,
    title: 'Premium Interior Fit-Outs',
    description: 'Complete turnkey solutions for homes and offices across Kerala, ensuring seamless integration of furniture and spatial design.',
    tag: 'Turnkey'
  },
  {
    icon: Wrench,
    title: 'Heritage Restoration',
    description: 'Expertly restoring your valued furniture to its original glory using traditional polishing and structural reinforcement techniques.',
    tag: 'Restoration'
  },
  {
    icon: PenTool,
    title: 'Personalized Consultation',
    description: 'Our specialists visit your site for precise measurements and professional layout advice to ensure a perfect fit every time.',
    tag: 'Consultation'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <span className="text-gold-600 font-bold text-[10px] tracking-[0.5em] uppercase mb-8 block">
              Our Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-charcoal-950 mb-0 leading-[0.9]">
              Crafting The <br />
              <span className="italic font-light text-gradient-gold">Extraordinary</span>
            </h2>
          </div>
          <p className="text-charcoal-950 text-lg font-medium max-w-sm leading-relaxed">
            From initial concept to final installation, we manufacture every component in-house to guarantee uncompromising quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="premium-card p-10 group !bg-white"
            >
              <div className="mb-10 flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-black/[0.02] border border-black/5 flex items-center justify-center group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-all duration-700">
                  <service.icon className="text-gold-500" size={28} strokeWidth={1.2} />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-charcoal-950/60 group-hover:text-gold-600 transition-colors">
                  {service.tag}
                </span>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-charcoal-950 mb-4 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-charcoal-950/80 font-medium leading-relaxed mb-8 text-sm">
                {service.description}
              </p>

              <a
                href={`https://wa.me/919995454719?text=Hello%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.%20Could%20you%20please%20share%20more%20details%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gold-600 text-[10px] font-bold tracking-widest uppercase group/btn"
              >
                Learn More
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}