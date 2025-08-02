
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="text-2xl font-heading font-bold text-blue-dark">
          Einfach Sprechen
        </a>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-dark transition-colors">
              {t('nav.start')}
            </button>
            <button onClick={() => scrollToSection('audience')} className="text-gray-700 hover:text-blue-dark transition-colors">
              {t('nav.forWho')}
            </button>
            <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-blue-dark transition-colors">
              {t('nav.mission')}
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-blue-dark transition-colors">
              {t('nav.team')}
            </button>
            <button onClick={() => scrollToSection('club')} className="text-gray-700 hover:text-blue-dark transition-colors">
              {t('nav.languageClub')}
            </button>
            <button onClick={() => scrollToSection('feedback')} className="text-gray-700 hover:text-blue-dark transition-colors">
              {t('nav.experiences')}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-dark transition-colors">
              {t('nav.pricing')}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Language Switcher - DE | EN format */}
          <div className="flex items-center gap-1 text-xs bg-gray-100 rounded-md px-2 py-1.5 border border-gray-200">
            <button
              onClick={() => setLanguage('de')}
              className={`px-2 py-0.5 rounded transition-all duration-200 ${
                language === 'de' 
                  ? 'font-medium text-gray-700 bg-white shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              DE
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded transition-all duration-200 ${
                language === 'en' 
                  ? 'font-medium text-gray-700 bg-white shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md py-4 animate-fade-in">
          <div className="container flex flex-col space-y-4">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-dark transition-colors py-2">
              {t('nav.start')}
            </button>
            <button onClick={() => scrollToSection('audience')} className="text-gray-700 hover:text-blue-dark transition-colors py-2">
              {t('nav.forWho')}
            </button>
            <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-blue-dark transition-colors py-2">
              {t('nav.mission')}
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-blue-dark transition-colors py-2">
              {t('nav.team')}
            </button>
            <button onClick={() => scrollToSection('club')} className="text-gray-700 hover:text-blue-dark transition-colors py-2">
              {t('nav.languageClub')}
            </button>
            <button onClick={() => scrollToSection('feedback')} className="text-gray-700 hover:text-blue-dark transition-colors py-2">
              {t('nav.experiences')}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-dark transition-colors py-2">
              {t('nav.pricing')}
            </button>
            
            {/* Mobile Language Switcher */}
            <div className="pt-2">
              <div className="flex items-center gap-1 text-xs bg-gray-100 rounded-md px-2 py-1.5 border border-gray-200 w-fit">
                <button
                  onClick={() => setLanguage('de')}
                  className={`px-2 py-0.5 rounded transition-all duration-200 ${
                    language === 'de' 
                      ? 'font-medium text-gray-700 bg-white shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  DE
                </button>
                <span className="text-gray-400">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded transition-all duration-200 ${
                    language === 'en' 
                      ? 'font-medium text-gray-700 bg-white shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
