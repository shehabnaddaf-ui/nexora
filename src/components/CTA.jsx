import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import SocialLinks from './SocialLinks'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="relative py-24 sm:py-32" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-[#00AEEF]/30 bg-gradient-to-br from-[#00AEEF]/10 via-white/[0.03] to-transparent p-8 text-center shadow-[0_0_60px_rgba(0,174,239,0.15)] backdrop-blur-xl sm:p-12 md:p-16"
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              boxShadow: 'inset 0 0 60px rgba(0, 174, 239, 0.08)',
            }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute -top-24 start-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#00AEEF]/20 blur-[80px]" aria-hidden="true" />

          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
          >
            {t.cta.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto mb-10 max-w-xl text-base text-white/60 sm:text-lg"
          >
            {t.cta.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
