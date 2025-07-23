import { motion } from 'framer-motion';
import ContactButtons from './ContactButtons';
import heroImage from '/images/hero-image.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-24 pb-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-pastel-lila rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-pastel-orange rounded-full filter blur-3xl opacity-20 translate-y-1/3 -translate-x-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-1 lg:order-1 text-center lg:text-left space-y-6"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pastel-lila text-lila-dark font-medium text-sm md:text-base">
                Community für Deutschlernende
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-tight">
                Einfach <span className="text-orange">Sprechen</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Gemeinsam wachsen.<br />
                Mutig sprechen.<br />
                Spannende Gespräche führen.<br />
                Mit muttersprachlicher Begleitung.
              </h2>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                className="btn-primary flex items-center justify-center gap-2 text-sm md:text-base"
                onClick={() => {
                  const contact = document.getElementById("contact");
                  if (contact) {
                    contact.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span>Jetzt beitreten</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="btn-secondary text-sm md:text-base"
                onClick={() => {
                  const mission = document.getElementById("mission");
                  if (mission) {
                    mission.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Mehr erfahren
              </button>
            </motion.div>
            
            {/* Contact Buttons - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden lg:block pt-4"
            >
              <ContactButtons />
            </motion.div>
          </motion.div>
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="order-2 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <div className="relative max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              {/* Main Image Container */}
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Deutschlernende Community" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 -right-4 md:top-8 md:-right-8 w-8 h-8 md:w-12 md:h-12 bg-pastel-orange rounded-lg rotate-45 animate-float"></div>
              <div className="absolute -bottom-4 left-4 md:-bottom-8 md:left-8 w-10 h-10 md:w-16 md:h-16 bg-pastel-lila rounded-lg rotate-12 animate-float"></div>
              <div className="absolute top-1/4 -left-4 md:-left-8 w-6 h-6 md:w-8 md:h-8 bg-orange-light/50 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-1/4 -right-2 md:-right-4 w-4 h-4 md:w-6 md:h-6 bg-lila/30 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Contact Buttons - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="lg:hidden mt-8 pt-8 border-t border-gray-200"
        >
          <ContactButtons className="justify-center" />
          
          {/* Scroll Indicator - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
            className="flex justify-center mt-8"
          >
            <svg
              className="w-8 h-8 text-orange-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Desktop */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="hidden lg:block absolute left-1/2 bottom-6 transform -translate-x-1/2 z-20"
      >
        <svg
          className="w-8 h-8 md:w-10 md:h-10 text-orange-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
