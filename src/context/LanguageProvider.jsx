import { useCallback, useEffect, useMemo, useState } from 'react'
import ar from '../locales/ar'
import en from '../locales/en'
import { LanguageContext } from './languageContext'

const STORAGE_KEY = 'nexora-lang'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'ar' || saved === 'en' ? saved : 'ar'
  })

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'))
  }, [])

  const t = useMemo(() => (language === 'ar' ? ar : en), [language])
  const dir = language === 'ar' ? 'rtl' : 'ltr'
  const isRtl = language === 'ar'

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
    document.documentElement.dir = dir
    document.title = t.meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', t.meta.description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', t.meta.title)

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', t.meta.description)

    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) ogLocale.setAttribute('content', t.meta.ogLocale)
  }, [language, dir, t])

  const value = useMemo(
    () => ({ language, toggleLanguage, t, dir, isRtl }),
    [language, toggleLanguage, t, dir, isRtl],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
