import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'

export default function Process() {
  const { t, isRtl } = useLanguage()

  return (
    <section id="process" className="relative py-24 sm:py-32" aria-labelledby="process-heading">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 id="process-heading" className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            {t.process.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/60 sm:text-lg">
            {t.process.subtitle}
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div
            className={`absolute top-0 bottom-0 hidden w-px bg-gradient-to-b from-[#00AEEF]/60 via-[#00AEEF]/30 to-transparent md:block ${
              isRtl ? 'right-6' : 'left-6'
            }`}
            aria-hidden="true"
          />

          <ol className="space-y-8 md:space-y-12">
            {t.process.steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative flex gap-6 md:gap-8"
              >
                <div className="relative z-10 flex shrink-0 flex-col items-center">
                  <motion.div
                    whileInView={{ scale: [0.8, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#00AEEF] bg-[#050505] text-sm font-bold text-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.3)]"
                  >
                    {index + 1}
                  </motion.div>
                </div>

                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00AEEF]/30 hover:shadow-[0_0_30px_rgba(0,174,239,0.1)]">
                  <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
