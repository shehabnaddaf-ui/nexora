import { FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL } from '../constants/links'
import { useLanguage } from '../hooks/useLanguage'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons'

const socialConfig = [
  {
    key: 'whatsapp',
    href: WHATSAPP_URL,
    icon: WhatsAppIcon,
    labelKey: 'whatsapp',
    className:
      'border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] hover:border-[#25D366]/60 hover:shadow-[0_0_30px_rgba(37,211,102,0.25)]',
  },
  {
    key: 'instagram',
    href: INSTAGRAM_URL,
    icon: InstagramIcon,
    labelKey: 'instagram',
    className:
      'border-[#E1306C]/30 bg-[#E1306C]/10 text-[#E1306C] hover:border-[#E1306C]/60 hover:shadow-[0_0_30px_rgba(225,48,108,0.25)]',
  },
  {
    key: 'facebook',
    href: FACEBOOK_URL,
    icon: FacebookIcon,
    labelKey: 'facebook',
    className:
      'border-[#1877F2]/30 bg-[#1877F2]/10 text-[#1877F2] hover:border-[#1877F2]/60 hover:shadow-[0_0_30px_rgba(24,119,242,0.25)]',
  },
]

export default function SocialLinks({ labels, size = 'md' }) {
  const { t } = useLanguage()
  const labelSource = labels ?? t.cta

  const sizeClasses =
    size === 'sm'
      ? 'h-10 w-10'
      : 'h-12 min-w-[3rem] px-4 sm:min-w-[8.5rem]'

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {socialConfig.map(({ key, href, icon: Icon, labelKey, className }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.footer.social[key]}
          className={`group inline-flex items-center justify-center gap-2 rounded-xl border backdrop-blur-sm transition-all duration-300 ${sizeClasses} ${className}`}
        >
          <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span className={`font-medium ${size === 'sm' ? 'sr-only' : 'hidden sm:inline'}`}>
            {labelSource[labelKey]}
          </span>
        </a>
      ))}
    </div>
  )
}
