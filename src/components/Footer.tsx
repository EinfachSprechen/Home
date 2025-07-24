import { Heart, Send, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Einfach Sprechen</h3>
            <p className="text-gray-600 mb-4">
              Eine Community für Deutschlernende, die ihre Sprachfähigkeiten in einem unterstützenden Umfeld verbessern möchten.
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/hey_alyon_ka" className="text-gray-500 hover:text-blue-dark transition-colors">
                <Send size={20} />
              </a>
              <a href="https://www.instagram.com/hey_alyon_ka/?hl=en" className="text-gray-500 hover:text-blue-dark transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#mission" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 hover:text-blue-dark transition-colors cursor-pointer"
                >
                  Mission
                </a>
              </li>
              <li>
                <a 
                  href="#audience" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('audience')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 hover:text-blue-dark transition-colors cursor-pointer"
                >
                  Für wen
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 hover:text-blue-dark transition-colors cursor-pointer"
                >
                  Team
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 hover:text-blue-dark transition-colors cursor-pointer"
                >
                  Ablauf
                </a>
              </li>
              <li>
                <a 
                  href="#club" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('club')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 hover:text-blue-dark transition-colors cursor-pointer"
                >
                  Sprachklub
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 hover:text-blue-dark transition-colors cursor-pointer"
                >
                  Preise
                </a>
              </li>
            </ul>
          </div>
          
          <div id="contact">
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-600 mb-2">
              Hast du Fragen zur Community?
            </p>
            <a 
              href="https://t.me/hey_alyon_ka" 
              className="inline-flex items-center gap-2 text-blue-dark hover:text-blue transition-colors"
            >
              <Send size={16} />
              <span>Kontaktiere Aliona auf Telegram</span>
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-1">
            Mit <Heart size={16} className="text-pink-500" /> erstellt für die deutschlernende Community
          </p>
          <p className="mt-2">
            © {currentYear} Einfach Sprechen. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
