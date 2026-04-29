import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, ZoomIn } from 'lucide-react'

const categories = ['All', 'Lounge', 'Dining', 'Office', 'Bedroom', 'Artisan']

const galleryItems = [
  {
    src: '/images/products/Whisk_46c4b182a97ff749bbb4a36fb1c76fd0dr.png',
    label: 'Bespoke Seating',
    category: 'Lounge',
    description: 'Handcrafted lounge seating with premium upholstery. Custom dimensions available.',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/products/Whisk_bc9df9fc3191949aa614a578bed6ed65dr.png',
    label: 'Dining Experience',
    category: 'Dining',
    description: 'Elegantly crafted dining sets for modern homes.',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/images/products/Whisk_0c3811f19a4a1f99bbe4660dc6d9c1d4dr.png',
    label: 'Executive Suites',
    category: 'Office',
    description: 'Commanding executive furniture for professional spaces.',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/images/products/Whisk_07b7f273b6c05b18f654fdf5a987cfe1dr.png',
    label: 'Artisanal Craft',
    category: 'Artisan',
    description: 'A glimpse into our workshop where every piece takes shape.',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    src: '/images/products/Whisk_3e8b868864a3b548ef74f74fb1910b10dr.png',
    label: 'Modern Living',
    category: 'Lounge',
    description: 'Contemporary living room solutions blending form and function.',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/images/products/Whisk_5c881aaa2785a46b18845b7432792d27dr.png',
    label: 'Premium Finish',
    category: 'Artisan',
    description: 'Precision finishing techniques applied to every surface.',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/images/products/Whisk_908f9508dfd7366929e4f9138635c6c7dr.png',
    label: 'Classic Design',
    category: 'Dining',
    description: 'Timeless dining pieces built to last generations.',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/images/products/Whisk_46ea7dd269057e4aa6b487102824d754dr.png',
    label: 'Masterpiece Collection',
    category: 'Lounge',
    description: 'Our flagship lounge collection — the pinnacle of comfort.',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/images/products/Whisk_46c4b182a97ff749bbb4a36fb1c76fd0dr.png',
    label: 'Luxury Comfort',
    category: 'Lounge',
    description: 'Sumptuously comfortable pieces designed for relaxation.',
    span: 'md:col-span-1 md:row-span-1',
  },
]

function LightboxModal({ item, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-charcoal-950 hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-lg"
          >
            <X size={20} />
          </button>

          <div className="grid md:grid-cols-2">
            <div className="relative h-72 md:h-auto min-h-[400px]">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center gap-8">
              <div>
                <span className="text-gold-600 font-bold text-[10px] tracking-[0.5em] uppercase mb-4 block">
                  {item.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-950 mb-4 leading-tight">
                  {item.label}
                </h2>
                <p className="text-charcoal-950/80 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href={`https://wa.me/919995454719?text=Hello%2C%20I%20am%20interested%20in%20the%20%22${encodeURIComponent(item.label)}%22%20piece.%20Could%20you%20share%20more%20details%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-charcoal-950 text-white py-4 rounded-xl text-[10px] font-bold tracking-widest uppercase hover:bg-gold-500 transition-all duration-500"
                >
                  Enquire About This Piece
                </a>
                <a
                  href="tel:+919995454719"
                  className="flex items-center justify-center gap-3 border border-black/10 text-charcoal-950 py-4 rounded-xl text-[10px] font-bold tracking-widest uppercase hover:border-gold-500 hover:text-gold-500 transition-all duration-500"
                >
                  Call Us Directly
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-20 bg-cream-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold-600 font-bold text-[10px] tracking-[0.6em] uppercase mb-8"
          >
            Our Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-6xl md:text-9xl font-bold text-charcoal-950 leading-[0.85] mb-8"
          >
            The Art of <br />
            <span className="italic font-light text-gradient-gold">Curation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-charcoal-950 text-xl font-medium max-w-2xl leading-relaxed"
          >
            A curated selection of our finest craftsmanship. From bespoke residential pieces to comprehensive executive office fit-outs — discover the intersection of form, function, and unparalleled quality.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-24 z-40 bg-cream-50/90 backdrop-blur-md border-b border-black/5 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-charcoal-950 text-white shadow-lg'
                    : 'bg-white border border-black/10 text-charcoal-950 hover:border-gold-500 hover:text-gold-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 auto-rows-[280px] lg:auto-rows-[360px]">
            {filtered.map((item, i) => (
              <div
                key={item.label}
                onClick={() => setSelectedItem(item)}
                className={`group relative overflow-hidden rounded-[2rem] bg-white border border-black/5 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 ${item.span}`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Zoom icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <ZoomIn size={16} />
                </div>

                {/* Info */}
                <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="text-gold-400 text-[10px] font-bold tracking-[0.3em] uppercase block mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        {item.category}
                      </span>
                      <h3 className="text-white text-xl md:text-2xl font-serif font-bold opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                        {item.label}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-charcoal-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all delay-300 scale-50 group-hover:scale-100 shadow-xl shrink-0">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-32 text-charcoal-900/30 font-serif text-2xl">
              No items in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-cream-100/50 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-600 font-bold text-[10px] tracking-[0.6em] uppercase mb-8 block">
              Commission a Piece
            </span>
            <h2 className="text-5xl md:text-8xl font-bold text-charcoal-950 mb-8 leading-[0.85]">
              Don't See What <br />
              <span className="italic font-light text-gradient-gold">You're Looking For?</span>
            </h2>
            <p className="text-charcoal-950 text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-12">
              Every piece we make is custom. Share your vision and we'll bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/919995454719?text=Hello%2C%20I%20have%20a%20custom%20furniture%20idea%20I%20would%20like%20to%20discuss."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal-950 text-white px-12 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gold-500 transition-all duration-500 shadow-xl shadow-black/10"
              >
                Start Custom Order
              </a>
              <a
                href="tel:+919995454719"
                className="border border-black/15 text-charcoal-950 px-12 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:border-gold-500 hover:text-gold-500 transition-all duration-500"
              >
                Call Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  )
}
