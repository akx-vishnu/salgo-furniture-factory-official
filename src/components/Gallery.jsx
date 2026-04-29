import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
const galleryItems = [
  { src: '/images/products/Whisk_46c4b182a97ff749bbb4a36fb1c76fd0dr.png', label: 'Bespoke Seating', category: 'Lounge', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/products/Whisk_bc9df9fc3191949aa614a578bed6ed65dr.png', label: 'Dining Experience', category: 'Dining', span: 'md:col-span-2 md:row-span-1' },
  { src: '/images/products/Whisk_0c3811f19a4a1f99bbe4660dc6d9c1d4dr.png', label: 'Executive Suites', category: 'Office', span: 'md:col-span-1 md:row-span-1' },
  { src: '/images/products/Whisk_07b7f273b6c05b18f654fdf5a987cfe1dr.png', label: 'Artisanal Craft', category: 'Workshop', span: 'md:col-span-1 md:row-span-1' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-gold-600 font-bold text-[10px] tracking-[0.6em] uppercase mb-8">
            Curated Portfolio
          </span>
          <h2 className="text-5xl md:text-8xl font-bold text-charcoal-950 mb-12">
            The Art of <br />
            <span className="italic font-light text-gradient-gold">Curation</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-10 auto-rows-[300px] lg:auto-rows-[400px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-white border border-black/5 ${item.span} shadow-sm hover:shadow-2xl transition-all duration-700`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-10 left-10 right-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <span className="text-gold-400 text-[10px] font-bold tracking-[0.3em] uppercase block mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      {item.category}
                    </span>
                    <h3 className="text-white text-2xl font-serif font-bold opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                      {item.label}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white text-charcoal-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all delay-300 scale-50 group-hover:scale-100 shadow-xl">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center mt-16">
          <Link
            to="/gallery"
            className="group flex items-center gap-4 bg-charcoal-950 text-white px-12 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gold-500 transition-all duration-500 shadow-xl shadow-black/5"
          >
            View Full Gallery
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}