
import { Video, Calendar, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import languageClubImage from '/images/language-club.png';

const LanguageClub = () => {
  const activities = [
    {
      title: "Thematische Diskussionen",
      description: "Jede Woche ein neues, interessantes Thema für gemeinsame Gespräche"
    },
    {
      title: "Sprachspiele",
      description: "Unterhaltsame Aktivitäten, die spielerisch deine Sprachkompetenz fördern"
    },
    {
      title: "Rollenspiele",
      description: "Praktische Übungen für Alltagssituationen auf Deutsch"
    },
    {
      title: "Feedback & Korrektur",
      description: "Konstruktives Feedback von Muttersprachlern zur Verbesserung"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="club" className="section bg-pastel-lila/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-light to-orange opacity-20 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-lila to-lila-light opacity-30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Sprachklub & Wochenaktivitäten</h2>
          <p className="section-subtitle">
            Praktiziere dein Deutsch in einem unterhaltsamen und interaktiven Umfeld mit Gleichgesinnten.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={languageClubImage} 
                  alt="Deutscher Sprachklub" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange/10 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-lila/30 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="inline-block p-3 rounded-full bg-pastel-lila text-lila-dark mb-6">
                <Video size={24} />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Wöchentlicher Sprachklub</h3>
              
              <p className="text-gray-600 mb-6">
                Unsere wöchentlichen Sprachklubs bieten dir die perfekte Gelegenheit, dein Deutsch in einem entspannten 
                und unterstützenden Umfeld zu üben. Moderiert von Muttersprachlern, konzentrieren wir uns auf die 
                praktische Anwendung und den natürlichen Gesprächsfluss.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <Calendar size={20} className="text-orange mr-2" />
                  <span>Jeden Mittwoch</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock size={20} className="text-orange mr-2" />
                  <span>19:00 - 20:30 Uhr</span>
                </div>
              </div>
              
              <h4 className="text-lg font-medium mb-4">Sprachklub-Aktivitäten:</h4>
              
              <div className="space-y-4 mb-8">
                {activities.map((activity, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pastel-lila flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-lila-dark"></div>
                    </div>
                    <div>
                      <h5 className="font-medium">{activity.title}</h5>
                      <p className="text-gray-600 text-sm">{activity.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <a 
                href="https://zoom.us/j/123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <ExternalLink size={20} />
                <span>Zum Zoom-Meeting beitreten</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LanguageClub;
