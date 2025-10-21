import React from 'react'
import { Button } from './ui/button';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'vi' ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  }
  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className="gap-2 hover:bg-green-300 transition-colors p-3"
      size={16}
    >
      <Globe className='h-4 w-4' />
      {i18n.language === 'vi' ? 'EN' : 'VI'}
    </Button>

  )
}
