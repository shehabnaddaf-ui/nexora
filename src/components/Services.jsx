import { motion } from 'framer-motion'
import {
  Bot,
  Code2,
  Cog,
  Layers,
  Smartphone,
  Workflow,
} from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const serviceIcons = [Code2, Smartphone, Layers, Bot, Workflow, Cog]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="relative py-24 sm:py-32" aria-labelledby="services-heading">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2
            id="services-heading"
            className="mb-4 text-3xl font-bold text-white sm:text-4xl"
          >
            {t.services.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/60 sm:text-lg">
            {t.services.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.services.items.map((item, index) => {
            const Icon = serviceIcons[index]
            return (
              <motion.article
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00AEEF]/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(0,174,239,0.12)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-5 inline-flex rounded-xl border border-[#00AEEF]/20 bg-[#00AEEF]/10 p-3 text-[#00AEEF] transition-all duration-300 group-hover:border-[#00AEEF]/50 group-hover:shadow-[0_0_20px_rgba(0,174,239,0.3)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
