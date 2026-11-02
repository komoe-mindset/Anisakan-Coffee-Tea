import React, { createContext, useContext, useState, useEffect } from 'react';
import translationsData from './translations.json';
import { Language } from '../types';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, string[]> = translationsData as unknown as Record<string, string[]>;

const I18nContext = createContext<I18nContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    if (language === 'en') return key;
    const entry = translations[key];
    if (!entry) return key;
    return language === 'my' ? entry[0] : entry[1];
  };

  useEffect(() => {
    const langCode = language === 'my' ? 'my' : language === 'zh' ? 'zh-Hans' : 'en';
    document.documentElement.lang = langCode;
    document.title = t('Anisakan | A Highland Sanctuary');
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => useContext(I18nContext);
