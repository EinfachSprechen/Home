
import { Users, Calendar, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const LanguageClub = () => {
  const [showPlatformDetails, setShowPlatformDetails] = useState(false);

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

        <div className="space-y-6 max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="inline-block p-3 rounded-full bg-pastel-lila text-lila-dark mb-6">
                <Users size={24} />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Wie funktioniert Einfach Sprechen?</h3>
              
              <p className="text-gray-600 mb-6">
                Wir konzentrieren uns auf das, was beim Sprachenlernen am meisten zählt: echter Sprachgebrauch im Alltag. Keine trockenen Kursbücher, keine endlosen Grammatikübungen – sondern authentische Materialien, moderne Themen und echte Kommunikation.
                Wir hören zu, lesen, sprechen – und zwar regelmäßig. Denn nur so wird Deutsch ein natürlicher Teil deines Alltags.
              </p>
              
              <p className="text-gray-600 mb-6">
                Eine Woche – ein Thema. Jeden Tag ein kleiner Impuls.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Was du jede Woche machst */}
                <div>
                  <h4 className="text-lg font-medium mb-4">📅 Was du jede Woche machst:</h4>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pastel-lila flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-lila-dark"></div>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">du erhältst spannende Impulse zu aktuellen, echten Themen</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pastel-lila flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-lila-dark"></div>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">du liest, hörst, reflektierst, diskutierst</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pastel-lila flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-lila-dark"></div>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">du übst neue Wörter im Kontext</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pastel-lila flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-lila-dark"></div>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">du nimmst Audio- oder Videonachrichten auf (wenn du möchtest!)</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pastel-lila flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-lila-dark"></div>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">du bekommst jeden Freitag ein Quizlet-Wörterset mit nützlichen Vokabeln</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pastel-lila flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-lila-dark"></div>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">du sprichst am Samstag live im Sprachklub mit einer Muttersprachlerin</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Was bringt dir das? */}
                <div>
                  <h4 className="text-lg font-medium mb-4">🎯 Was bringt dir das?</h4>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pastel-lila flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-lila-dark"></div>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Du sprichst sicherer und natürlicher.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pastel-lila flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-lila-dark"></div>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Du bleibst motiviert, weil du Fortschritte spürst.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pastel-lila flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-lila-dark"></div>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Du wirst Teil einer Community, die dich wirklich versteht.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Expandable Platform Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setShowPlatformDetails(!showPlatformDetails)}
                >
                  <h4 className="text-lg font-medium">📱 Die Plattform</h4>
                  <div className={`transform transition-transform duration-200 ${showPlatformDetails ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {showPlatformDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <div className="space-y-4">
                      <p className="text-gray-600 text-sm">
                        Alle Aufgaben und Diskussionen finden über Telegram statt – direkt auf deinem Handy, ganz flexibel und ohne feste Zeiten. Du kannst dann lernen, wenn es für dich passt.
                      </p>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pastel-lila flex items-center justify-center mr-3 mt-1">
                          <div className="w-2 h-2 rounded-full bg-lila-dark"></div>
                        </div>
                        <p className="text-gray-600 text-sm">
                          ⏱️ Die täglichen Aufgaben dauern etwa 15–30 Minuten.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="inline-block p-3 rounded-full bg-pastel-lila text-lila-dark mb-6">
                <Calendar size={24} />
              </div>
              
              <h3 className="text-2xl font-semibold mb-6">So läuft eine typische Woche bei uns ab:</h3>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-1 gap-3 max-w-5xl mx-auto">
                {/* Days Headers */}
                <div className="grid grid-cols-7 gap-2 mb-3">
                  <div className="text-center text-sm font-medium text-gray-500 py-3 border border-gray-200 rounded-lg bg-gray-50">Mo</div>
                  <div className="text-center text-sm font-medium text-gray-500 py-3 border border-gray-200 rounded-lg bg-gray-50">Di</div>
                  <div className="text-center text-sm font-medium text-gray-500 py-3 border border-gray-200 rounded-lg bg-gray-50">Mi</div>
                  <div className="text-center text-sm font-medium text-gray-500 py-3 border border-gray-200 rounded-lg bg-gray-50">Do</div>
                  <div className="text-center text-sm font-medium text-gray-500 py-3 border border-gray-200 rounded-lg bg-gray-50">Fr</div>
                  <div className="text-center text-sm font-medium text-gray-500 py-3 border border-gray-200 rounded-lg bg-gray-50">Sa</div>
                  <div className="text-center text-sm font-medium text-gray-500 py-3 border border-gray-200 rounded-lg bg-gray-50">So</div>
                </div>

                {/* Calendar Cells */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Monday */}
                  <div className="bg-orange/10 border-2 border-orange/30 rounded-lg p-1 md:p-2 min-h-[100px] md:min-h-[120px] border border-gray-200">
                    <div className="text-[10px] md:text-sm font-semibold text-orange mb-1 md:mb-2">Montag</div>
                    <div className="text-[9px] md:text-sm text-gray-700">
                      <div className="mb-1 md:mb-2">🧠 <strong>Sprachimpuls</strong></div>
                      <div>Input + Chat</div>
                    </div>
                  </div>

                  {/* Tuesday */}
                  <div className="bg-orange/10 border-2 border-orange/30 rounded-lg p-1 md:p-2 min-h-[100px] md:min-h-[120px] border border-gray-200">
                    <div className="text-[10px] md:text-sm font-semibold text-orange mb-1 md:mb-2">Dienstag</div>
                    <div className="text-[9px] md:text-sm text-gray-700">
                      <div className="mb-1 md:mb-2">🧠 <strong>Sprachimpuls</strong></div>
                      <div>Input + Chat</div>
                    </div>
                  </div>

                  {/* Wednesday */}
                  <div className="bg-lila/10 border-2 border-lila/30 rounded-lg p-1 md:p-2 min-h-[100px] md:min-h-[120px] border border-gray-200">
                    <div className="text-[10px] md:text-sm font-semibold text-lila mb-1 md:mb-2">Mittwoch</div>
                    <div className="text-[9px] md:text-sm text-gray-700">
                      <div className="mb-1 md:mb-2">😌 <strong>Ruhetag</strong></div>
                      <div>Aufholen & Chatten</div>
                    </div>
                  </div>

                  {/* Thursday */}
                  <div className="bg-orange/10 border-2 border-orange/30 rounded-lg p-1 md:p-2 min-h-[100px] md:min-h-[120px] border border-gray-200">
                    <div className="text-[10px] md:text-sm font-semibold text-orange mb-1 md:mb-2">Donnerstag</div>
                    <div className="text-[9px] md:text-sm text-gray-700">
                      <div className="mb-1 md:mb-2">🧠 <strong>Sprachimpuls</strong></div>
                      <div>Input + Chat</div>
                    </div>
                  </div>

                  {/* Friday */}
                  <div className="bg-orange/10 border-2 border-orange/30 rounded-lg p-1 md:p-2 min-h-[100px] md:min-h-[120px] border border-gray-200">
                    <div className="text-[10px] md:text-sm font-semibold text-orange mb-1 md:mb-2">Freitag</div>
                    <div className="text-[9px] md:text-sm text-gray-700">
                      <div className="mb-1 md:mb-2">🧠 <strong>Sprachimpuls</strong></div>
                      <div>Chat + ✨ Quizlet</div>
                    </div>
                  </div>

                  {/* Saturday */}
                  <div className="bg-green-100 border-2 border-green-400 rounded-lg p-1 md:p-2 min-h-[100px] md:min-h-[120px] border border-gray-200">
                    <div className="text-[10px] md:text-sm font-semibold text-green-700 mb-1 md:mb-2">Samstag</div>
                    <div className="text-[9px] md:text-sm text-gray-700">
                      <div className="mb-1 md:mb-2">🗣️ <strong>Sprachklub</strong></div>
                      <div>60 Min Zoom</div>
                    </div>
                  </div>

                  {/* Sunday */}
                  <div className="bg-lila/10 border-2 border-lila/30 rounded-lg p-1 md:p-2 min-h-[100px] md:min-h-[120px] border border-gray-200">
                    <div className="text-[10px] md:text-sm font-semibold text-lila mb-1 md:mb-2">Sonntag</div>
                    <div className="text-[9px] md:text-sm text-gray-700">
                      <div className="mb-1 md:mb-2">📱 <strong>Frei</strong></div>
                      <div>Optional Chat</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium mb-3">Legende:</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange/30 rounded"></div>
                    <span>Sprachimpuls-Tage mit Input & Chat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded"></div>
                    <span>Zoom-Sprachklub (Highlight der Woche)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-lila/30 rounded"></div>
                    <span>Ruhetag zum Vertiefen</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-8 items-center">
          <motion.div
            className="flex flex-row items-center gap-8"
            initial={false}
            animate={false}
          >
            {/* Left Down Arrow */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-orange-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: [0, -15, 0],
                transition: {
                  opacity: { duration: 0.6 },
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
            </motion.svg>
            {/* Button */}
            <motion.a
              href="#pricing"
              onClick={e => {
                e.preventDefault();
                const pricing = document.getElementById("pricing");
                if (pricing) {
                  pricing.scrollIntoView({ behavior: "smooth" });
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: [0, -15, 0],
                transition: {
                  opacity: { duration: 0.6 },
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-colors duration-200 inline-block text-center"
            >
              Jetzt beitreten! 
            </motion.a>
            {/* Right Down Arrow */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-orange-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: [0, -15, 0],
                transition: {
                  opacity: { duration: 0.6 },
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LanguageClub;
