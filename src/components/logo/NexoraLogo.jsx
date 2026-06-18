import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import LogoParticles from '../LogoParticles'
import NexoraEmblemImg from './NexoraEmblemImg'
import NexoraWordmark from './NexoraWordmark'

function EmblemFrame({ variant, showEffects, children }) {
  const isHero = variant === 'hero'

  const sizeClass = {
    compact: 'h-9 w-9 sm:h-10 sm:w-10',
    hero: 'h-[100px] w-[100px] md:h-[130px] md:w-[130px] lg:h-[160px] lg:w-[160px]',
    footer: 'h-14 w-14 sm:h-16 sm:w-16',
    full: 'h-16 w-16 sm:h-20 sm:w-20',
  }[variant]

  return (
    <div className={`relative flex shrink-0 items-center justify-center ${sizeClass}`}>
      {showEffects && (
        <>
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,174,239,0.38)_0%,rgba(0,174,239,0.12)_35%,transparent_68%)]"
            aria-hidden="true"
          />
          <LogoParticles size={isHero ? 200 : 130} />
        </>
      )}
      {children}
    </div>
  )
}

export default function NexoraLogo({
  variant = 'compact',
  className = '',
  animated = false,
  showEffects = false,
}) {
  const { t } = useLanguage()
  const isHero = variant === 'hero'
  const isCompact = variant === 'compact'
  const isFooter = variant === 'footer'
  const isFull = variant === 'full'

  const emblemImg = <NexoraEmblemImg className="relative z-10 h-full w-full" />

  const emblem = (
    <EmblemFrame variant={variant} showEffects={showEffects}>
      {animated && isHero ? (
        <motion.div
          className="flex h-full w-full items-center justify-center"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {emblemImg}
        </motion.div>
      ) : (
        emblemImg
      )}
    </EmblemFrame>
  )

  const wordmarkSize = isHero ? 'lg' : isCompact ? 'sm' : 'md'
  const wordmark = (
    <NexoraWordmark
      size={wordmarkSize}
      showTaglines={isFull || isFooter}
      showMotto={isFull}
    />
  )

  const inner = isCompact ? (
    <span className="inline-flex items-center gap-2" dir="ltr">
      {emblem}
      <NexoraWordmark size="sm" className="hidden sm:flex" />
    </span>
  ) : (
    <div className={`flex flex-col items-center ${isHero ? 'gap-0.5' : 'gap-1.5'}`} dir="ltr">
      {emblem}
      {wordmark}
    </div>
  )

  const labelled = (
    <div className={className} role="img" aria-label={t.nav.logoAlt}>
      {inner}
    </div>
  )

  if (!animated) return labelled

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {labelled}
    </motion.div>
  )
}
