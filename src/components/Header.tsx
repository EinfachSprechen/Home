
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-blue-dark transition-colors">
            Mission
          </button>
          <button onClick={() => scrollToSection('audience')} className="text-gray-700 hover:text-blue-dark transition-colors">
            Für wen
          </button>
          <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-blue-dark transition-colors">
            Team
          </button>
          <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-dark transition-colors">
            Ablauf
          </button>
          <button onClick={() => scrollToSection('club')} className="text-gray-700 hover:text-blue-dark transition-colors">
            Sprachklub
          </button>
          <button onClick={() => scrollToSection('values')} className="text-gray-700 hover:text-blue-dark transition-colors">
            Werte
          </button>
          <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-dark transition-colors">
            Preise
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md py-4 animate-fade-in">
          <div className="container flex flex-col space-y-4">
            <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-blue-dark transition-colors py-2">
              Mission
            </button>
            <button onClick={() => scrollToSection('audience')} className="text-gray-700 hover:text-blue-dark transition-colors py-2">
              Für wen
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-blue-dark transition-colors py-2">
              Team
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-dark transition-colors py-2">
              Ablauf
            </button>
            <button onClick={() => scrollToSection('club')} className="text-gray-700 hover:text-blue-dark transition-colors py-2">
              Sprachklub
            </button>
            <button onClick={() => scrollToSection('values')} className="text-gray-700 hover:text-blue-dark transition-colors py-2">
              Werte
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-dark transition-colors py-2">
              Preise
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
