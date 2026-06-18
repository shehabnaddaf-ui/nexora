const sizeMap = {
  sm: {
    title: 'text-[0.62rem] tracking-[0.28em]',
    tagline: 'text-[0.42rem] tracking-[0.24em]',
    motto: 'text-[0.36rem] tracking-[0.3em]',
    line: 'w-5',
    gap: 'gap-1.5',
    stack: 'gap-1',
  },
  md: {
    title: 'text-sm tracking-[0.3em] sm:text-[0.95rem]',
    tagline: 'text-[0.5rem] tracking-[0.26em] sm:text-[0.55rem]',
    motto: 'text-[0.42rem] tracking-[0.3em] sm:text-[0.48rem]',
    line: 'w-6 sm:w-8',
    gap: 'gap-2',
    stack: 'gap-1.5',
  },
  lg: {
    title: 'text-[1.35rem] tracking-[0.32em] sm:text-[1.65rem]',
    tagline: 'text-[0.6rem] tracking-[0.3em] sm:text-[0.65rem]',
    motto: 'text-[0.5rem] tracking-[0.34em] sm:text-[0.55rem]',
    line: 'w-9 sm:w-11',
    gap: 'gap-2.5',
    stack: 'gap-1.5',
  },
}

function MetallicLetter({ children }) {
  return (
    <span className="bg-gradient-to-b from-white via-[#D8E2EA] to-[#8FA0AE] bg-clip-text text-transparent">
      {children}
    </span>
  )
}

export default function NexoraWordmark({
  size = 'md',
  showTaglines = false,
  showMotto = false,
  className = '',
}) {
  const s = sizeMap[size]

  return (
    <div className={`flex flex-col items-center ${s.stack} ${className}`}>
      <p className={`font-logo font-semibold leading-none ${s.title}`}>
        <MetallicLetter>NE</MetallicLetter>
        <span
          className="text-[#00AEEF]"
          style={{ textShadow: '0 0 18px rgba(0,174,239,0.85), 0 0 36px rgba(0,174,239,0.35)' }}
        >
          X
        </span>
        <MetallicLetter>ORA</MetallicLetter>
      </p>

      {showTaglines && (
        <div className={`flex items-center ${s.gap}`}>
          <span
            className={`h-px ${s.line} bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-[#00AEEF]/80`}
            aria-hidden="true"
          />
          <span className={`font-logo font-medium uppercase text-white/50 ${s.tagline}`}>
            Software Solutions
          </span>
          <span
            className={`h-px ${s.line} bg-gradient-to-l from-transparent via-[#00AEEF]/50 to-[#00AEEF]/80`}
            aria-hidden="true"
          />
        </div>
      )}

      {showMotto && (
        <p className={`font-logo uppercase text-white/35 ${s.motto}`}>We Build • You Grow</p>
      )}
    </div>
  )
}
