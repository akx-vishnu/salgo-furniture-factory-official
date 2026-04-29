import { motion } from 'framer-motion'
import { Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TrustBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative bg-cream-100/50 py-32 border-y border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="text-gold-600 font-bold text-[10px] tracking-[0.5em] uppercase mb-8 block">
              Logistics Excellence
            </span>
            <h3 className="font-serif text-5xl md:text-7xl font-bold text-charcoal-950 mb-6 leading-[0.9]">
              All Kerala <br />
              <span className="italic font-light text-gradient-gold">Free Delivery</span>
            </h3>
            
            <p className="text-charcoal-950 text-lg font-medium leading-relaxed max-w-xl">
              We take pride in our service. Enjoy complimentary professional shipping and white-glove handling across the entire state of Kerala. 
              Every piece is fully insured and delivered by our in-house specialists.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/contact"
                className="bg-charcoal-950 text-white px-8 py-4 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-gold-500 transition-all duration-500 shadow-xl shadow-black/5"
              >
                Get a Free Quote
              </Link>
              <a
                href="https://wa.me/919995454719?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20delivery%20options."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black/10 text-charcoal-950 px-8 py-4 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase hover:border-gold-500 hover:text-gold-500 transition-all duration-500"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          
          {/* Right: Service Areas */}
          <div className="lg:flex-1 w-full">
            <div className="premium-card !bg-white p-12 md:p-16 rounded-[3rem]">
              <div className="text-center mb-12">
                <span className="text-gold-500 font-bold text-[10px] tracking-[0.3em] uppercase">Service Network</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  'Ernakulam', 'Thrissur', 'Palakkad', 
                  'Coimbatore', 'Kochi', 'Chalakudy',
                  'Calicut', 'Alleppey', 'Kottayam',
                ].map((city, idx) => (
                  <div key={idx} className="text-center">
                    <span className="text-charcoal-950 font-semibold text-sm hover:text-gold-500 transition-colors cursor-default">
                      {city}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="w-full h-px bg-black/5 my-12" />
              
              <Link to="/contact" className="text-center text-charcoal-900/30 hover:text-gold-500 text-xs font-bold tracking-widest uppercase transition-colors">
                Contact us for other locations →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}