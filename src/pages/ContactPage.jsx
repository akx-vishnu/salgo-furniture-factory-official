import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Send, MessageCircle } from 'lucide-react'
import { Instagram, Youtube } from '../components/Icons'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
}

const contactCards = [
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 99954 54719'],
    action: 'tel:+919995454719',
    actionLabel: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['salgofurniturefactory2024@gmail.com'],
    action: 'mailto:salgofurniturefactory2024@gmail.com',
    actionLabel: 'Send Email',
  },
  {
    icon: MapPin,
    title: 'Location',
    lines: ['Salgo Furniture Factory', 'Chalakudy, Thrissur, Kerala'],
    action: 'https://maps.google.com/?q=Salgo+Furniture+Factory+Chalakudy',
    actionLabel: 'Get Directions',
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold-600 font-bold tracking-[0.3em] uppercase text-sm block mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif text-charcoal-950 mb-8"
          >
            Contact Salgo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-charcoal-600 max-w-2xl mx-auto"
          >
            Whether you're looking for a custom furniture piece or want to visit our factory, we're here to help you bring your vision to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {contactCards.map((card, idx) => (
            <motion.div
              key={card.title}
              {...fadeUp}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl p-10 border border-charcoal-100 hover:border-gold-400 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-cream-50 flex items-center justify-center text-charcoal-950 mb-8 group-hover:bg-gold-400 group-hover:text-white transition-colors duration-500">
                <card.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif text-charcoal-950 mb-4">{card.title}</h3>
              <div className="space-y-1 mb-8">
                {card.lines.map(line => (
                  <p key={line} className="text-charcoal-600">{line}</p>
                ))}
              </div>
              <a 
                href={card.action}
                target={card.action.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="flex items-center gap-2 text-charcoal-950 font-bold hover:text-gold-600 transition-colors"
              >
                {card.actionLabel}
                <ArrowUpRight size={20} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            {...fadeUp}
            className="bg-charcoal-950 rounded-[2.5rem] p-10 md:p-16 text-white overflow-hidden relative"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <h2 className="text-4xl font-serif mb-8 relative z-10">Send a Message</h2>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/40 font-medium">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold-400 transition-colors" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/40 font-medium">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold-400 transition-colors" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/40 font-medium">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold-400 transition-colors" placeholder="What are you interested in?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/40 font-medium">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold-400 transition-colors resize-none" placeholder="Tell us about your project..." />
              </div>
              <button className="w-full bg-gold-400 text-charcoal-950 font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white transition-all duration-300">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>

          <motion.div 
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-[2.5rem] p-10 border border-charcoal-100 shadow-sm">
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-charcoal-50">
                <div className="w-14 h-14 rounded-2xl bg-gold-400/10 flex items-center justify-center text-gold-600">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-charcoal-950">Factory Hours</h4>
                  <p className="text-charcoal-500">Visit us to see our craftsmanship</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-600">Monday - Saturday</span>
                  <span className="text-charcoal-950 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-600">Sunday</span>
                  <span className="text-charcoal-950 font-medium">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 border border-charcoal-100 shadow-sm">
              <h4 className="text-xl font-serif text-charcoal-950 mb-6">Quick Connect</h4>
              <div className="flex flex-col gap-4">
                <a href="https://wa.me/919995454719" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-green-50 rounded-2xl text-green-700 hover:bg-green-100 transition-colors group">
                  <div className="flex items-center gap-4">
                    <MessageCircle size={24} />
                    <span className="font-bold">WhatsApp Inquiry</span>
                  </div>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <div className="flex gap-4">
                  <a href="#" className="flex-1 flex items-center justify-center gap-3 p-5 bg-charcoal-50 rounded-2xl text-charcoal-950 hover:bg-charcoal-100 transition-colors">
                    <Instagram size={20} />
                    <span className="font-medium text-sm">Instagram</span>
                  </a>
                  <a href="#" className="flex-1 flex items-center justify-center gap-3 p-5 bg-charcoal-50 rounded-2xl text-charcoal-950 hover:bg-charcoal-100 transition-colors">
                    <Youtube size={20} />
                    <span className="font-medium text-sm">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
