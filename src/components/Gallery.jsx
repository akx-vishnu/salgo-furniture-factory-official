import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: 'The Stockholm Collection',
    category: 'Lounge',
    image: '/images/products/Whisk_46c4b182a97ff749bbb4a36fb1c76fd0dr.png',
    size: 'large'
  },
  {
    id: 2,
    title: 'Minimalist Dining',
    category: 'Dining',
    image: '/images/products/Whisk_bc9df9fc3191949aa614a578bed6ed65dr.png',
    size: 'small'
  },
  {
    id: 3,
    title: 'Artisan Vases',
    category: 'Decor',
    image: '/images/products/Whisk_7e0c460777598c9f0a5ef30e52100806dr.png',
    size: 'small'
  }
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-gold-600 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-serif text-charcoal-950 leading-[1.1]">
              Curation Of <br />Modern Craft
            </h2>
          </div>
          <Link to="/gallery" className="group flex items-center gap-4 text-charcoal-950 font-bold tracking-widest uppercase text-xs pb-2 border-b-2 border-gold-500 hover:text-gold-600 transition-colors">
            View All Work
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-white ${
                project.size === 'large' ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-12">
                <span className="text-gold-400 font-bold tracking-widest uppercase text-xs mb-4">{project.category}</span>
                <h3 className="text-4xl font-serif text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
