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
    action: 'https://maps.google.com/?q=Chalakudy,Thrissur,Kerala',
    actionLabel: 'Get Directions',
    external: true,
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Monday – Saturday', '9:00 AM – 6:00 PM'],
    action: null,
    actionLabel: null,
  },
]

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value.trim()
    const phone = form.phone.value.trim()
    const message = form.message.value.trim()

    const text = encodeURIComponent(
      `Hello! I'm ${name}.\n\nPhone: ${phone}\n\n${message}`
    )
    window.open(`https://wa.me/919995454719?text=${text}`, '_blank')
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-48 pb-24 bg-cream-50 relative overflow-hidden">
        {/* Abstract decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.span
            {...fadeUp}
            className="inline-block text-gold-600 font-bold text-[10px] tracking-[0.6em] uppercase mb-8"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-6xl md:text-9xl font-bold text-charcoal-950 leading-[0.85] mb-8"
          >
            Let's Build
            <br />
            <span className="italic font-light text-gradient-gold">Something</span>
            <br />
            Beautiful
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-charcoal-950 text-xl font-medium max-w-xl leading-relaxed"
          >
            Whether you have a question, need a custom design consultation, or want to visit our factory showroom — our team is ready to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-cream-100/50 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="premium-card !bg-white p-8 rounded-3xl flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <card.icon className="text-gold-500" size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif font-bold text-lg text-charcoal-950">{card.title}</h3>
                <div className="flex-1">
                  {card.lines.map((line, j) => (
                    <p key={j} className="text-charcoal-950/80 text-sm font-medium leading-relaxed break-words">{line}</p>
                  ))}
                </div>
                {card.action && (
                  <a
                    href={card.action}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-gold-600 text-[10px] font-bold tracking-widest uppercase group mt-2"
                  >
                    {card.actionLabel}
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section: Form + Social */}
      <section className="py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Inquiry Form → opens WhatsApp */}
            <motion.div {...fadeUp}>
              <span className="text-gold-600 font-bold text-[10px] tracking-[0.5em] uppercase mb-8 block">
                Send an Inquiry
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-charcoal-950 mb-6 leading-[0.9]">
                Tell Us About <br />
                <span className="italic font-light text-gradient-gold">Your Project</span>
              </h2>
              <p className="text-charcoal-950/80 text-base font-medium leading-relaxed mb-12 max-w-lg">
                Fill in your details below and your message will be sent directly via WhatsApp to our team for the fastest response.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="text-charcoal-950 text-[10px] font-bold tracking-widest uppercase">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="bg-white border border-black/10 rounded-xl px-5 py-4 text-sm text-charcoal-950 font-medium focus:outline-none focus:border-gold-500 transition-colors placeholder:text-charcoal-900/30"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-phone" className="text-charcoal-950 text-[10px] font-bold tracking-widest uppercase">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-white border border-black/10 rounded-xl px-5 py-4 text-sm text-charcoal-950 font-medium focus:outline-none focus:border-gold-500 transition-colors placeholder:text-charcoal-900/30"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-service" className="text-charcoal-950 text-[10px] font-bold tracking-widest uppercase">
                    Service Interested In
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    className="bg-white border border-black/10 rounded-xl px-5 py-4 text-sm text-charcoal-950 font-medium focus:outline-none focus:border-gold-500 transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option>Residential Furniture</option>
                    <option>Office &amp; Commercial</option>
                    <option>Custom Furniture Design</option>
                    <option>Interior Fit-Outs</option>
                    <option>Repair &amp; Restoration</option>
                    <option>On-Site Consultation</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-charcoal-950 text-[10px] font-bold tracking-widest uppercase">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project, dimensions, style preferences, budget..."
                    className="bg-white border border-black/10 rounded-xl px-5 py-4 text-sm text-charcoal-950 font-medium focus:outline-none focus:border-gold-500 transition-colors placeholder:text-charcoal-900/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 bg-charcoal-950 text-white py-5 rounded-xl text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-gold-500 transition-all duration-500 shadow-xl shadow-black/5 group"
                >
                  <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                  Send via WhatsApp
                </button>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-black/5" />
                  <span className="text-charcoal-900/30 text-[10px] font-bold tracking-widest uppercase">or reach us directly</span>
                  <div className="flex-1 h-px bg-black/5" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href="tel:+919995454719"
                    className="flex items-center justify-center gap-3 border border-black/10 text-charcoal-950 py-4 rounded-xl text-[10px] font-bold tracking-[0.2em] uppercase hover:border-gold-500 hover:text-gold-500 transition-all duration-500"
                  >
                    <Phone size={14} />
                    Call Us
                  </a>
                  <a
                    href="mailto:salgofurniturefactory2024@gmail.com"
                    className="flex items-center justify-center gap-3 border border-black/10 text-charcoal-950 py-4 rounded-xl text-[10px] font-bold tracking-[0.2em] uppercase hover:border-gold-500 hover:text-gold-500 transition-all duration-500"
                  >
                    <Send size={14} />
                    Email Us
                  </a>
                </div>
              </form>
            </motion.div>

            {/* Right: Social + Map embed */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-10"
            >
              {/* Social Connect */}
              <div className="premium-card !bg-white p-10 rounded-3xl">
                <span className="text-gold-600 font-bold text-[10px] tracking-[0.5em] uppercase mb-8 block">
                  Connect Digitally
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal-950 mb-8">Follow Our Work</h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://www.instagram.com/salgo_tikka/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-5 rounded-2xl border border-black/5 hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-500 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                      <Instagram size={22} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-charcoal-950 text-sm">@salgo_tikka</p>
                      <p className="text-charcoal-950/50 text-xs font-medium">instagram.com/salgo_tikka</p>
                    </div>
                    <ArrowUpRight size={18} className="text-charcoal-900/30 group-hover:text-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>

                  <a
                    href="https://www.youtube.com/@salgotikka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-5 rounded-2xl border border-black/5 hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-500 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white">
                      <Youtube size={22} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-charcoal-950 text-sm">@salgotikka</p>
                      <p className="text-charcoal-950/50 text-xs font-medium">youtube.com/@salgotikka</p>
                    </div>
                    <ArrowUpRight size={18} className="text-charcoal-900/30 group-hover:text-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="premium-card !bg-white rounded-3xl overflow-hidden border border-black/5">
                <div className="p-8 border-b border-black/5">
                  <span className="text-gold-600 font-bold text-[10px] tracking-[0.5em] uppercase mb-2 block">
                    Visit Us
                  </span>
                  <h3 className="font-serif text-xl font-bold text-charcoal-950">Chalakudy, Thrissur, Kerala</h3>
                </div>
                <div className="relative h-72">
                  <iframe
                    title="Salgo Furniture Factory Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.7!2d76.3346!3d10.2996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080a1a1b1a1a1b%3A0x1a1a1a1a1a1a1a1a!2sChalakudy%2C%20Thrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <a
                    href="https://maps.google.com/?q=Chalakudy,Thrissur,Kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-charcoal-950 text-white px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-gold-500 transition-all duration-500 shadow-xl flex items-center gap-2"
                  >
                    Open Maps <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* Quick WhatsApp CTA */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919995454719?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20furniture."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 bg-[#25D366] text-white py-6 rounded-2xl font-bold tracking-wider text-sm shadow-2xl shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-500"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.857L.057 23.926a.5.5 0 0 0 .617.617l6.121-1.48A11.934 11.934 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.938 0-3.74-.527-5.285-1.443l-.378-.224-3.927.949.966-3.846-.247-.396A9.797 9.797 0 0 1 2.182 12C2.182 6.568 6.568 2.182 12 2.182S21.818 6.568 21.818 12 17.432 21.818 12 21.818z" />
                </svg>
                Chat on WhatsApp Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
