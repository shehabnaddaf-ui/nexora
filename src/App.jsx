import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { LanguageProvider } from './context/LanguageProvider'

const Services = lazy(() => import('./components/Services'))
const WhyNexora = lazy(() => import('./components/WhyNexora'))
const Process = lazy(() => import('./components/Process'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return <div className="min-h-[200px]" aria-hidden="true" />
}

function App() {
  return (
    <LanguageProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-[#050505] text-white antialiased"
      >
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#00AEEF] focus:px-4 focus:py-2 focus:text-[#050505]"
        >
          Skip to content
        </a>

        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <Services />
            <WhyNexora />
            <Process />
            <CTA />
            <Footer />
          </Suspense>
        </main>
      </motion.div>
    </LanguageProvider>
  )
}

export default App
