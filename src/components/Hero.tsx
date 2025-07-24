import { motion } from 'framer-motion';
import ContactButtons from './ContactButtons';
import heroImage from '/images/hero-image.png';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-48 pb-0 overflow-hidden"
      style={{ marginTop: "-20%" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pastel-lila rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pastel-orange rounded-full filter blur-3xl opacity-20 translate-y-1/3 -translate-x-1/4"></div>
      </div>
      
      <div className="container" style={{ marginBottom: '-3%' }}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center md:text-left"
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-pastel-lila text-lila-dark font-medium text-base sm:text-lg" style={{ transform: "scale(0.9)", transformOrigin: "left" }}>
              Community für Deutschlernende
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
              Einfach <span className="text-orange">Sprechen</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Gemeinsam wachsen.<br />
              Mutig sprechen.<br />
              Spannende Gespräche führen.<br />
              Mit muttersprachlicher Begleitung.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <button
                className="btn-primary flex items-center justify-center gap-2"
                onClick={() => {
                  const contact = document.getElementById("contact");
                  if (contact) {
                    contact.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span>Jetzt beitreten</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="btn-secondary"
                onClick={() => {
                  const mission = document.getElementById("mission");
                  if (mission) {
                    mission.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Mehr erfahren
              </button>
            </div>
            
            <div className="hidden md:block">
              <ContactButtons />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <motion.div
              className="relative z-10 rounded-2xl overflow-visible flex items-center"
              style={{ justifyContent: "flex-start", marginLeft: "-30%" }} // <-- adjust marginLeft as needed
              initial={{ rotate: 0 }}
              animate={{ 
                rotate: [0, 10, -10, 10]
              }}
              transition={{
                duration: 15, // 15 seconds for pendulum motion
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src={heroImage} 
                alt="Deutschlernende Community" 
                className="w-full h-auto object-cover bg-transparent border-none shadow-none scale-[0.6] transition-transform duration-300"
              />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-pastel-orange rounded-lg rotate-45 animate-float"></div>
            <div className="absolute -bottom-6 left-1/4 transform w-16 h-16 bg-pastel-lila rounded-lg rotate-12 animate-float"></div>
            <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 w-24 h-24 bg-orange-light/50 rounded-full opacity-60"></div>
          </motion.div>
        </div>
        
        <div className="md:hidden mt-12">
          <ContactButtons className="justify-center" />
        </div>
      </div>
      {/* Pulsing down arrow at the bottom */}
      <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 z-20">
        <svg
          className="w-12 h-12 text-orange-400 animate-bounce" // 50% bigger than w-8 h-8
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
