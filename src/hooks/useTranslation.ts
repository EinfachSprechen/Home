import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key; // Return key if translation not found
  };
  
  return { t, language };
};
