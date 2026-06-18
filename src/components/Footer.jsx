import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import NexoraLogo from './logo/NexoraLogo'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-[#030303] py-12" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <NexoraLogo variant="footer" />

          <p className="max-w-md text-sm text-white/50">{t.footer.tagline}</p>

          <SocialLinks size="sm" />

          <p className="text-sm text-white/40">
            &copy; {year} Nexora. {t.footer.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
