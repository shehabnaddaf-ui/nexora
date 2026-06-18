import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import HeroBackground from './HeroBackground'
import HeroEmblem from './HeroEmblem'
import Particles from './Particles'

function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const { t, isRtl } = useLanguage()
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />
      <Particles />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto text-center">
          <HeroEmblem />

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-6 mt-2 max-w-4xl text-[2.625rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white md:text-[3.75rem] lg:text-[4.5rem] xl:text-[5.25rem]"
          >
            <span className="bg-gradient-to-b from-white via-white to-white/75 bg-clip-text text-transparent">
              {t.hero.headline}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg md:leading-8"
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              type="button"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#00AEEF] px-9 py-4 text-sm font-semibold text-[#050505] shadow-[0_0_50px_rgba(0,174,239,0.45),0_0_100px_rgba(0,174,239,0.15)] transition-shadow duration-300 hover:bg-[#2ec5f5] hover:shadow-[0_0_60px_rgba(0,174,239,0.6),0_0_120px_rgba(0,174,239,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00AEEF] sm:w-auto sm:text-base"
            >
              {t.hero.primaryCta}
              <ArrowRight
                className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`}
                aria-hidden="true"
              />
            </motion.button>

            <motion.button
              type="button"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-9 py-4 text-sm font-semibold text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-[#00AEEF]/50 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_32px_rgba(0,174,239,0.18),inset_0_1px_0_rgba(255,255,255,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00AEEF] sm:w-auto sm:text-base"
            >
              {t.hero.secondaryCta}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
