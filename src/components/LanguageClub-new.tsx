import { motion } from 'framer-motion';
import { Video, Calendar, Clock, MessageCircle, Brain, Trophy, Users, Target } from 'lucide-react';

const LanguageClub = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const activities = [
    {
      icon: <MessageCircle size={20} className="text-orange" />,
      title: "Gesprächsrunden",
      description: "Thematische Diskussionen zu aktuellen und kulturellen Themen"
    },
    {
      icon: <Brain size={20} className="text-orange" />,
      title: "Interaktive Übungen", 
      description: "Rollenspiele, Diskussionsrunden und praktische Kommunikationsaufgaben"
    },
    {
      icon: <Trophy size={20} className="text-orange" />,
      title: "Fortschrittstracking",
      description: "Regelmäßiges Feedback und individuelle Verbesserungstipps"
    }
  ];

  return (
    <section id="club" className="section bg-gradient-to-b from-white to-pastel-orange/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-light to-orange opacity-20 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-lila-light to-lila opacity-30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
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
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {activity.icon}
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-1">{activity.title}</h5>
                      <p className="text-gray-600 text-sm">{activity.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-lila-50 rounded-lg">
                <Users size={20} className="text-orange" />
                <div>
                  <span className="font-medium text-gray-900">Kleine Gruppen:</span>
                  <span className="text-gray-600 ml-2">Maximal 8 Teilnehmer für persönliche Betreuung</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="inline-block p-3 rounded-full bg-pastel-orange text-orange-dark mb-6">
                <Target size={24} />
              </div>
              
              <h3 className="text-2xl font-semibold mb-6">Wochenplan & Aktivitäten</h3>
              
              <p className="text-gray-600 mb-8">
                Jeden Tag gibt es neue Impulse und Übungen, die dich dabei unterstützen, kontinuierlich am Ball zu bleiben 
                und dein Deutsch zu verbessern.
              </p>

              {/* Calendar Grid - Mobile Optimized */}
              <div className="max-w-4xl mx-auto">
                {/* Mobile Calendar - Vertical Cards */}
                <div className="flex flex-col gap-4 md:hidden">
                  {/* Monday */}
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange rounded-lg p-4">
                    <div className="font-semibold text-orange-700 mb-2">Montag</div>
                    <div className="text-sm text-gray-700">
                      <div className="mb-1">🧠 <strong>Sprachimpuls</strong></div>
                      <div>Input + Chat</div>
                    </div>
                  </div>

                  {/* Tuesday */}
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange rounded-lg p-4">
                    <div className="font-semibold text-orange-700 mb-2">Dienstag</div>
                    <div className="text-sm text-gray-700">
                      <div className="mb-1">🧠 <strong>Sprachimpuls</strong></div>
                      <div>Input + Chat</div>
                    </div>
                  </div>

                  {/* Wednesday */}
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange rounded-lg p-4">
                    <div className="font-semibold text-orange-700 mb-2">Mittwoch</div>
                    <div className="text-sm text-gray-700">
                      <div className="mb-1">🧠 <strong>Sprachimpuls</strong></div>
                      <div>Aufholen & Chatten</div>
                    </div>
                  </div>

                  {/* Thursday */}
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange rounded-lg p-4">
                    <div className="font-semibold text-orange-700 mb-2">Donnerstag</div>
                    <div className="text-sm text-gray-700">
                      <div className="mb-1">🧠 <strong>Sprachimpuls</strong></div>
                      <div>Input + Chat</div>
                    </div>
                  </div>

                  {/* Friday */}
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange rounded-lg p-4">
                    <div className="font-semibold text-orange-700 mb-2">Freitag</div>
                    <div className="text-sm text-gray-700">
                      <div className="mb-1">🧠 <strong>Sprachimpuls</strong></div>
                      <div>Chat + ✨ Quizlet</div>
                    </div>
                  </div>

                  {/* Saturday */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-lg p-4">
                    <div className="font-semibold text-green-700 mb-2">Samstag</div>
                    <div className="text-sm text-gray-700">
                      <div className="mb-1">🗣️ <strong>Sprachklub</strong></div>
                      <div>60 Min Zoom</div>
                    </div>
                  </div>

                  {/* Sunday */}
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-400 rounded-lg p-4">
                    <div className="font-semibold text-purple-700 mb-2">Sonntag</div>
                    <div className="text-sm text-gray-700">
                      <div className="mb-1">📱 <strong>Frei</strong></div>
                      <div>Optional Chat</div>
                    </div>
                  </div>
                </div>

                {/* Desktop Calendar */}
                <div className="hidden md:block">
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
                    <div className="bg-orange/10 border-2 border-orange/30 rounded-lg p-2 min-h-[120px]">
                      <div className="text-sm font-semibold text-orange mb-2">Montag</div>
                      <div className="text-sm text-gray-700">
                        <div className="mb-2">🧠 <strong>Sprachimpuls</strong></div>
                        <div>Input + Chat</div>
                      </div>
                    </div>

                    {/* Tuesday */}
                    <div className="bg-orange/10 border-2 border-orange/30 rounded-lg p-2 min-h-[120px]">
                      <div className="text-sm font-semibold text-orange mb-2">Dienstag</div>
                      <div className="text-sm text-gray-700">
                        <div className="mb-2">🧠 <strong>Sprachimpuls</strong></div>
                        <div>Input + Chat</div>
                      </div>
                    </div>

                    {/* Wednesday */}
                    <div className="bg-orange/10 border-2 border-orange/30 rounded-lg p-2 min-h-[120px]">
                      <div className="text-sm font-semibold text-orange mb-2">Mittwoch</div>
                      <div className="text-sm text-gray-700">
                        <div className="mb-2">🧠 <strong>Sprachimpuls</strong></div>
                        <div>Aufholen & Chatten</div>
                      </div>
                    </div>

                    {/* Thursday */}
                    <div className="bg-orange/10 border-2 border-orange/30 rounded-lg p-2 min-h-[120px]">
                      <div className="text-sm font-semibold text-orange mb-2">Donnerstag</div>
                      <div className="text-sm text-gray-700">
                        <div className="mb-2">🧠 <strong>Sprachimpuls</strong></div>
                        <div>Input + Chat</div>
                      </div>
                    </div>

                    {/* Friday */}
                    <div className="bg-orange/10 border-2 border-orange/30 rounded-lg p-2 min-h-[120px]">
                      <div className="text-sm font-semibold text-orange mb-2">Freitag</div>
                      <div className="text-sm text-gray-700">
                        <div className="mb-2">🧠 <strong>Sprachimpuls</strong></div>
                        <div>Chat + ✨ Quizlet</div>
                      </div>
                    </div>

                    {/* Saturday */}
                    <div className="bg-green-100 border-2 border-green-400 rounded-lg p-2 min-h-[120px]">
                      <div className="text-sm font-semibold text-green-700 mb-2">Samstag</div>
                      <div className="text-sm text-gray-700">
                        <div className="mb-2">🗣️ <strong>Sprachklub</strong></div>
                        <div>60 Min Zoom</div>
                      </div>
                    </div>

                    {/* Sunday */}
                    <div className="bg-lila/10 border-2 border-lila/30 rounded-lg p-2 min-h-[120px]">
                      <div className="text-sm font-semibold text-lila mb-2">Sonntag</div>
                      <div className="text-sm text-gray-700">
                        <div className="mb-2">📱 <strong>Frei</strong></div>
                        <div>Optional Chat</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium mb-3">Legende:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
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
      </div>
    </section>
  );
};

export default LanguageClub;
