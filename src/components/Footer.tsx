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
            <p className="text-gray-600 mb-4">
              Hast du Fragen zur Community?
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="https://wa.me/4367761769787" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors bg-green-50 hover:bg-green-100 px-4 py-2 rounded-lg w-fit"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
                <span>Schreib uns auf WhatsApp</span>
              </a>
              <a 
                href="https://t.me/hey_alyon_ka" 
                className="inline-flex items-center gap-2 text-blue-dark hover:text-blue transition-colors"
              >
                <Send size={16} />
                <span>Kontaktiere Aliona auf Telegram</span>
              </a>
            </div>
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
