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
    src: '/images/products/Whisk_7e0c460777598c9f0a5ef30e52100806dr.png',
    label: 'Artisan Decor',
    category: 'Artisan',
    description: 'Hand-turned wooden vessels and artistic ornaments.',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/images/products/Whisk_500eb0584b45508a8e32c86e082ef149dr.png',
    label: 'Office Precision',
    category: 'Office',
    description: 'Ergonomic office furniture for a productive workspace.',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    src: '/images/products/Whisk_8e46924c559868840d859ecf014f3b79dr.png',
    label: 'Lounge Luxury',
    category: 'Lounge',
    description: 'Plush armchairs for ultimate comfort.',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/images/products/Whisk_98d62650058ec48f869f0e214d058c49dr.png',
    label: 'Bedroom Serenity',
    category: 'Bedroom',
    description: 'Minimalist bedroom furniture for a restful sleep.',
    span: 'md:col-span-1 md:row-span-1',
  }
]

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')
  const [selectedImg, setSelectedImg] = useState(null)

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  return (
    <div className="min-h-screen pt-32 pb-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-charcoal-950 mb-6"
          >
            The Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-charcoal-600 max-w-2xl"
          >
            A curated collection of our finest handcrafted pieces, showcasing the marriage of traditional craftsmanship and modern design.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-charcoal-950 text-cream-50 border-charcoal-950 shadow-lg' 
                  : 'bg-white text-charcoal-600 border-charcoal-100 hover:border-charcoal-300'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`group relative overflow-hidden rounded-2xl bg-white cursor-pointer ${item.span}`}
                onClick={() => setSelectedImg(item)}
              >
                <div className="aspect-[4/5] md:aspect-auto h-full w-full">
                  <img 
                    src={item.src} 
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-2">{item.category}</span>
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-serif text-white">{item.label}</h3>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/95 p-6 backdrop-blur-xl"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={40} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12"
              onClick={e => e.stopPropagation()}
            >
              <div className="rounded-3xl overflow-hidden bg-white/5 p-4 backdrop-blur-md">
                <img 
                  src={selectedImg.src} 
                  alt={selectedImg.label}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <span className="text-gold-400 font-bold tracking-widest uppercase mb-4">{selectedImg.category}</span>
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">{selectedImg.label}</h2>
                <p className="text-lg text-white/60 mb-12 leading-relaxed">
                  {selectedImg.description}
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 py-6 border-y border-white/10">
                    <div className="w-12 h-12 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400">
                      <ArrowUpRight size={24} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Bespoke Options</p>
                      <p className="text-white/40 text-sm">Custom sizes & materials available</p>
                    </div>
                  </div>
                  <button className="bg-white text-charcoal-950 py-5 rounded-2xl font-bold hover:bg-gold-400 hover:text-white transition-all duration-300">
                    Inquire About This Piece
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
