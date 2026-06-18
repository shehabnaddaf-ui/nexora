import { motion } from 'framer-motion'

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_28%,rgba(0,174,239,0.14)_0%,transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_32%,rgba(0,174,239,0.08)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_100%,rgba(0,174,239,0.05)_0%,transparent_50%)]" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,174,239,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.9) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 65% at 50% 35%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 35%, black 20%, transparent 75%)',
        }}
      />

      <motion.div
        className="absolute left-1/2 top-[22%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#00AEEF]/10 blur-[120px]"
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute left-[18%] top-[30%] h-56 w-56 rounded-full bg-[#00AEEF]/6 blur-[100px]"
        animate={{ x: [0, 24, 0], y: [0, -18, 0], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute right-[14%] top-[38%] h-64 w-64 rounded-full bg-[#00AEEF]/5 blur-[110px]"
        animate={{ x: [0, -20, 0], y: [0, 14, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
    </div>
  )
}
