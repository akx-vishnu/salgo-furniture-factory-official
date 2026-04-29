import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TOTAL_FRAMES = 120 // Reduced for performance
const SCROLL_HEIGHT_MULTIPLIER = 4 // Reduced for tighter, more responsive feel

const textPhases = [
  {
    startFrame: 1,
    endFrame: 30,
    badge: 'Heritage of Excellence',
    heading: ['Uncompromising', 'Luxury'],
    accent: [1],
    description: 'Bespoke furniture crafted for those who demand nothing less than perfection.',
    position: 'top-left'
  },
  {
    startFrame: 40,
    endFrame: 70,
    badge: 'Precision Engineering',
    heading: ['Built To', 'Endure'],
    accent: [1],
    description: 'Every joint, every stitch, every curve is a testament to our master craftsmen.',
    position: 'top-left'
  },
  {
    startFrame: 80,
    endFrame: 110,
    badge: 'Custom Fit-outs',
    heading: ['Your Vision,', 'Our Reality'],
    accent: [0],
    description: 'Tailored interior solutions that transform spaces into experiences.',
    position: 'bottom-right'
  }
]

function getFramePath(index) {
  // We use every 2nd frame from the original 240
  const actualFrame = index * 2 - 1
  const num = String(actualFrame).padStart(3, '0')
  return `/images/herosection/ezgif-frame-${num}.png`
}

export default function Hero() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [activePhase, setActivePhase] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Preload logic
  useEffect(() => {
    let loaded = 0
    const images = []
    
    // Load first frame with priority
    const firstImg = new Image()
    firstImg.src = getFramePath(1)
    firstImg.onload = () => {
      images[1] = firstImg
      setIsLoaded(true)
    }

    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image()
      img.src = getFramePath(i)
      img.onload = () => {
        loaded++
      }
      images[i] = img
    }
    imagesRef.current = images
  }, [])

  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    
    let img = imagesRef.current[index]
    if (!img || !img.complete) {
      for (let i = index - 1; i >= 1; i--) {
        if (imagesRef.current[i]?.complete) {
          img = imagesRef.current[i]
          break
        }
      }
    }
    if (!img) return

    const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight)
    const x = (canvas.width - img.naturalWidth * scale) / 2
    const y = (canvas.height - img.naturalHeight * scale) / 2
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)))
      setScrollProgress(progress)
      
      const frameIndex = Math.min(TOTAL_FRAMES, Math.max(1, Math.ceil(progress * TOTAL_FRAMES)))
      drawFrame(frameIndex)

      // Update active phase
      const phaseIndex = textPhases.findIndex(p => frameIndex >= p.startFrame && frameIndex <= p.endFrame)
      if (phaseIndex !== -1) setActivePhase(phaseIndex)
      else if (frameIndex > textPhases[textPhases.length - 1].endFrame) setActivePhase(-1)
    }

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
        drawFrame(1)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [drawFrame])

  return (
    <section ref={sectionRef} className="relative bg-cream-50" style={{ height: `${SCROLL_HEIGHT_MULTIPLIER * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-cream-50">
        <canvas ref={canvasRef} className="w-full h-full object-cover opacity-70 mix-blend-multiply" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center p-12 md:p-32">
          <AnimatePresence mode="wait">
            {activePhase !== -1 && (
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`max-w-3xl w-full ${
                  textPhases[activePhase].position === 'top-left' ? 'mb-auto mr-auto text-left' :
                  textPhases[activePhase].position === 'bottom-right' ? 'mt-auto ml-auto text-right' :
                  'text-center'
                }`}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/40 border border-black/5 backdrop-blur-md text-gold-600 font-bold text-[10px] tracking-[0.4em] uppercase mb-8 shadow-sm">
                  {textPhases[activePhase].badge}
                </span>
                
                <h2 className="text-5xl md:text-8xl font-bold text-charcoal-950 mb-8 leading-[0.9]">
                  {textPhases[activePhase].heading.map((word, i) => (
                    <span key={i} className={textPhases[activePhase].accent.includes(i) ? 'text-gradient-gold block' : 'block'}>
                      {word}
                    </span>
                  ))}
                </h2>
                
                <p className="text-charcoal-950 text-lg md:text-xl font-medium max-w-xl mx-auto md:mx-0 leading-relaxed drop-shadow-sm">
                  {textPhases[activePhase].description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll Hint */}
        <motion.div 
          style={{ opacity: 1 - scrollProgress * 5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-gold-600 to-transparent" />
          <span className="text-gold-600 text-[10px] tracking-[0.5em] uppercase font-bold vertical-text">Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
