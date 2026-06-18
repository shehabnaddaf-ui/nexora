import { motion } from 'framer-motion'
import {
  Headphones,
  Rocket,
  Scale,
  Shield,
  Sparkles,
  Zap,
} from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const featureIcons = [Sparkles, Zap, Scale, Headphones, Shield, Rocket]

export default function WhyNexora() {
  const { t } = useLanguage()

  return (
    <section id="why" className="relative py-24 sm:py-32" aria-labelledby="why-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,174,239,0.06)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 id="why-heading" className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            {t.why.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/60 sm:text-lg">
            {t.why.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, index) => {
            const Icon = featureIcons[index]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#00AEEF]/30 hover:shadow-[0_0_30px_rgba(0,174,239,0.1)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] transition-all duration-300 group-hover:bg-[#00AEEF]/20 group-hover:shadow-[0_0_15px_rgba(0,174,239,0.3)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
