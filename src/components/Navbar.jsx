import { motion } from 'framer-motion'
import { Globe, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import BrandLogo from './BrandLogo'

const navItems = [
  { id: 'services', key: 'services' },
  { id: 'why', key: 'whyUs' },
  { id: 'process', key: 'process' },
  { id: 'contact', key: 'contact' },
]

function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Navbar() {
  const { t, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#050505]/75 shadow-[0_8px_32px_rgba(0,174,239,0.08)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="group flex items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00AEEF]"
          aria-label={t.nav.logoAlt}
        >
          <BrandLogo className="transition-transform duration-300 group-hover:scale-105" />
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map(({ id, key }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleNavClick(id)}
                className="text-sm font-medium text-white/70 transition-colors hover:text-[#00AEEF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00AEEF]"
              >
                {t.nav[key]}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition-all hover:border-[#00AEEF]/40 hover:text-[#00AEEF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00AEEF]"
            aria-label={`Switch language to ${t.nav.language}`}
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            <span>{t.nav.language}</span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00AEEF]"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <motion.div
        initial={false}
        animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl md:hidden"
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navItems.map(({ id, key }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleNavClick(id)}
                className="w-full rounded-lg px-3 py-3 text-start text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-[#00AEEF]"
              >
                {t.nav[key]}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  )
}
