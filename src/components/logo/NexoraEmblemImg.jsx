import emblem from '../../assets/logo-emblem-transparent.png'

export default function NexoraEmblemImg({ className = 'h-full w-full object-contain' }) {
  return (
    <img
      src={emblem}
      alt=""
      draggable={false}
      className={`nexora-emblem block max-h-full max-w-full bg-transparent ${className}`}
    />
  )
}
