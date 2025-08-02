
import { Users, Calendar, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const LanguageClub = () => {
  const { t } = useTranslation();
  const [showPlatformDetails, setShowPlatformDetails] = useState(false);
  const [showWeeklyActivities, setShowWeeklyActivities] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);

  const activities = t('club.activities') || [
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
    <section id="club" className="section relative overflow-hidden bg-gradient-to-b from-pastel-orange/10 to-pastel-lila/20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-pastel-lila rounded-full filter blur-3xl opacity-25 -translate-y-1/4 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pastel-orange rounded-full filter blur-3xl opacity-20 translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute top-1/2 right-1/3 w-[160px] h-[160px] bg-orange-light rounded-full filter blur-xl opacity-15 -translate-y-1/2"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('club.title')}</h2>
          <p className="section-subtitle">
            {t('club.subtitle')}
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
              
              <h3 className="text-2xl font-semibold mb-4">{t('club.mainTitle')}</h3>
              
              <p className="text-gray-600 mb-6">
                {t('club.description1')}
              </p>
              
              <p className="text-gray-600 mb-6">
                {t('club.description2')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Was du jede Woche machst */}
                <div>
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setShowWeeklyActivities(!showWeeklyActivities)}
                  >
                    <h4 className="text-lg font-medium mb-4">{t('club.weeklyActivities.title')}</h4>
                    <div className={`transform transition-transform duration-200 ${showWeeklyActivities ? 'rotate-180' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {showWeeklyActivities && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <div className="space-y-4">
                        {(t('club.weeklyActivities.items') || []).map((item: string, index: number) => (
                          <div key={index} className="flex">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pastel-lila flex items-center justify-center mr-3 mt-1">
                              <div className="w-2 h-2 rounded-full bg-lila-dark"></div>
                            </div>
                            <div>
                              <p className="text-gray-600 text-sm">{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
                
                {/* Right Column - Was bringt dir das? */}
                <div>
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setShowBenefits(!showBenefits)}
                  >
                    <h4 className="text-lg font-medium mb-4">{t('club.benefits.title')}</h4>
                    <div className={`transform transition-transform duration-200 ${showBenefits ? 'rotate-180' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {showBenefits && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <div className="space-y-4">
                        {(t('club.benefits.items') || []).map((item: string, index: number) => (
                          <div key={index} className="flex">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pastel-lila flex items-center justify-center mr-3 mt-1">
                              <div className="w-2 h-2 rounded-full bg-lila-dark"></div>
                            </div>
                            <div>
                              <p className="text-gray-600 text-sm">{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
              
              {/* Expandable Platform Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setShowPlatformDetails(!showPlatformDetails)}
                >
                  <h4 className="text-lg font-medium">{t('club.platform.title')}</h4>
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
                        {t('club.platform.description')}
                      </p>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pastel-lila flex items-center justify-center mr-3 mt-1">
                          <div className="w-2 h-2 rounded-full bg-lila-dark"></div>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {t('club.platform.duration')}
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
              
              <h3 className="text-2xl font-semibold mb-6">{t('club.weeklySchedule.title')}</h3>
              
              {/* Calendar - Mobile First Design */}
              <div className="max-w-5xl mx-auto">
                {/* Mobile Calendar - Vertical Cards */}
                <div className="flex flex-col gap-4 md:hidden">
                  {/* Monday */}
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-bold text-orange text-lg">{t('club.weeklySchedule.days.monday.name')}</div>
                      <div className="bg-orange/20 px-2 py-1 rounded-full">
                        <span className="text-orange text-xs font-medium">{t('club.weeklySchedule.days.monday.activity')}</span>
                      </div>
                    </div>
                    <div className="text-gray-700">
                      <div className="font-bold text-black mb-1">{t('club.weeklySchedule.days.monday.activity')}</div>
                      <div className="font-medium mb-1">{t('club.weeklySchedule.days.monday.description')}</div>
                      <div className="text-sm text-gray-600">{t('club.weeklySchedule.days.monday.additionalInfo') || 'Daily language exercises and discussions'}</div>
                    </div>
                  </div>

                  {/* Tuesday */}
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-bold text-orange text-lg">{t('club.weeklySchedule.days.tuesday.name')}</div>
                      <div className="bg-orange/20 px-2 py-1 rounded-full">
                        <span className="text-orange text-xs font-medium">{t('club.weeklySchedule.days.tuesday.activity')}</span>
                      </div>
                    </div>
                    <div className="text-gray-700">
                      <div className="font-bold text-black mb-1">{t('club.weeklySchedule.days.tuesday.activity')}</div>
                      <div className="font-medium mb-1">{t('club.weeklySchedule.days.tuesday.description')}</div>
                      <div className="text-sm text-gray-600">{t('club.weeklySchedule.days.tuesday.additionalInfo') || 'Daily language exercises and discussions'}</div>
                    </div>
                  </div>

                  {/* Wednesday */}
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-lila rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-bold text-lila text-lg">{t('club.weeklySchedule.days.wednesday.name')}</div>
                      <div className="bg-lila/20 px-2 py-1 rounded-full">
                        <span className="text-lila text-xs font-medium">😌</span>
                      </div>
                    </div>
                    <div className="text-gray-700">
                      <div className="mb-2">😌</div>
                      <div className="font-bold text-black mb-1">{t('club.weeklySchedule.days.wednesday.activityName') || 'Ruhetag'}</div>
                      <div className="font-medium mb-1">{t('club.weeklySchedule.days.wednesday.description')}</div>
                      <div className="text-sm text-gray-600">{t('club.weeklySchedule.days.wednesday.additionalInfo') || 'Time to catch up and relax'}</div>
                    </div>
                  </div>

                  {/* Thursday */}
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-bold text-orange text-lg">{t('club.weeklySchedule.days.thursday.name')}</div>
                      <div className="bg-orange/20 px-2 py-1 rounded-full">
                        <span className="text-orange text-xs font-medium">{t('club.weeklySchedule.days.thursday.activity')}</span>
                      </div>
                    </div>
                    <div className="text-gray-700">
                      <div className="font-bold text-black mb-1">{t('club.weeklySchedule.days.thursday.activity')}</div>
                      <div className="font-medium mb-1">{t('club.weeklySchedule.days.thursday.description')}</div>
                      <div className="text-sm text-gray-600">{t('club.weeklySchedule.days.thursday.additionalInfo') || 'Daily language exercises and discussions'}</div>
                    </div>
                  </div>

                  {/* Friday */}
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-bold text-orange text-lg">{t('club.weeklySchedule.days.friday.name')}</div>
                      <div className="bg-orange/20 px-2 py-1 rounded-full">
                        <span className="text-orange text-xs font-medium">{t('club.weeklySchedule.days.friday.activity')}</span>
                      </div>
                    </div>
                    <div className="text-gray-700">
                      <div className="font-bold text-black mb-1">{t('club.weeklySchedule.days.friday.activity')}</div>
                      <div className="font-medium mb-1">{t('club.weeklySchedule.days.friday.description')}</div>
                      <div className="text-sm text-gray-600">{t('club.weeklySchedule.days.friday.additionalInfo') || 'Weekly vocabulary set for practice'}</div>
                    </div>
                  </div>

                  {/* Saturday */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-bold text-green-700 text-lg">{t('club.weeklySchedule.days.saturday.name')}</div>
                      <div className="bg-green-500/20 px-2 py-1 rounded-full">
                        <span className="text-green-700 text-xs font-medium">{t('club.weeklySchedule.days.saturday.activity')}</span>
                      </div>
                    </div>
                    <div className="text-gray-700">
                      <div className="font-bold text-black mb-1">{t('club.weeklySchedule.days.saturday.activity')}</div>
                      <div className="font-medium mb-1">{t('club.weeklySchedule.days.saturday.description')}</div>
                      <div className="text-sm text-gray-600">{t('club.weeklySchedule.days.saturday.additionalInfo') || 'Live session with native speaker'}</div>
                    </div>
                  </div>

                  {/* Sunday */}
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-lila rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-bold text-lila text-lg">{t('club.weeklySchedule.days.sunday.name')}</div>
                      <div className="bg-lila/20 px-2 py-1 rounded-full">
                        <span className="text-lila text-xs font-medium">{t('club.weeklySchedule.days.sunday.activity')}</span>
                      </div>
                    </div>
                    <div className="text-gray-700">
                      <div className="font-bold text-black mb-1">{t('club.weeklySchedule.days.sunday.activity')}</div>
                      <div className="font-medium mb-1">{t('club.weeklySchedule.days.sunday.description')}</div>
                      <div className="text-sm text-gray-600">{t('club.weeklySchedule.days.sunday.additionalInfo') || 'Voluntary exchange and review'}</div>
                    </div>
                  </div>
                </div>

                {/* Desktop Calendar - Grid Layout */}
                <div className="hidden md:block">
                  {/* Days Headers */}
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    <div className="text-center text-sm font-medium text-gray-500 py-3 border border-gray-200 rounded-lg bg-gray-50">{t('club.weeklySchedule.days.monday.shortName')}</div>
                    <div className="text-center text-sm font-medium text-gray-500 py-3 border border-gray-200 rounded-lg bg-gray-50">{t('club.weeklySchedule.days.tuesday.shortName')}</div>
                    <div className="text-center text-sm font-medium text-gray-500 py-3 border border-gray-200 rounded-lg bg-gray-50">{t('club.weeklySchedule.days.wednesday.shortName')}</div>
                    <div className="text-center text-sm font-medium text-gray-500 py-3 border border-gray-200 rounded-lg bg-gray-50">{t('club.weeklySchedule.days.thursday.shortName')}</div>
                    <div className="text-center text-sm font-medium text-gray-500 py-3 border border-gray-200 rounded-lg bg-gray-50">{t('club.weeklySchedule.days.friday.shortName')}</div>
                    <div className="text-center text-sm font-medium text-gray-500 py-3 border border-gray-200 rounded-lg bg-gray-50">{t('club.weeklySchedule.days.saturday.shortName')}</div>
                    <div className="text-center text-sm font-medium text-gray-500 py-3 border border-gray-200 rounded-lg bg-gray-50">{t('club.weeklySchedule.days.sunday.shortName')}</div>
                  </div>

                  {/* Calendar Cells */}
                  <div className="grid grid-cols-7 gap-2">
                    {/* Monday */}
                    <div className="bg-orange/10 border-2 border-orange/30 rounded-lg p-3 min-h-[140px]">
                      <div className="text-sm font-semibold text-orange mb-2">{t('club.weeklySchedule.days.monday.name')}</div>
                      <div className="text-sm text-gray-700">
                        <div className="mb-2 font-bold text-black">{t('club.weeklySchedule.days.monday.activity')}</div>
                        <div>{t('club.weeklySchedule.days.monday.description')}</div>
                      </div>
                    </div>

                    {/* Tuesday */}
                    <div className="bg-orange/10 border-2 border-orange/30 rounded-lg p-3 min-h-[140px]">
                      <div className="text-sm font-semibold text-orange mb-2">{t('club.weeklySchedule.days.tuesday.name')}</div>
                      <div className="text-sm text-gray-700">
                        <div className="mb-2 font-bold text-black">{t('club.weeklySchedule.days.tuesday.activity')}</div>
                        <div>{t('club.weeklySchedule.days.tuesday.description')}</div>
                      </div>
                    </div>

                    {/* Wednesday */}
                    <div className="bg-lila/10 border-2 border-lila/30 rounded-lg p-3 min-h-[140px]">
                      <div className="text-sm font-semibold text-lila mb-2">{t('club.weeklySchedule.days.wednesday.name')}</div>
                      <div className="text-sm text-gray-700">
                        <div className="mb-2">😌</div>
                        <div className="mb-1 font-bold text-black">{t('club.weeklySchedule.days.wednesday.activityName') || 'Ruhetag'}</div>
                        <div>{t('club.weeklySchedule.days.wednesday.description')}</div>
                      </div>
                    </div>

                    {/* Thursday */}
                    <div className="bg-orange/10 border-2 border-orange/30 rounded-lg p-3 min-h-[140px]">
                      <div className="text-sm font-semibold text-orange mb-2">{t('club.weeklySchedule.days.thursday.name')}</div>
                      <div className="text-sm text-gray-700">
                        <div className="mb-2 font-bold text-black">{t('club.weeklySchedule.days.thursday.activity')}</div>
                        <div>{t('club.weeklySchedule.days.thursday.description')}</div>
                      </div>
                    </div>

                    {/* Friday */}
                    <div className="bg-orange/10 border-2 border-orange/30 rounded-lg p-3 min-h-[140px]">
                      <div className="text-sm font-semibold text-orange mb-2">{t('club.weeklySchedule.days.friday.name')}</div>
                      <div className="text-sm text-gray-700">
                        <div className="mb-2 font-bold text-black">{t('club.weeklySchedule.days.friday.activity')}</div>
                        <div>{t('club.weeklySchedule.days.friday.description')}</div>
                      </div>
                    </div>

                    {/* Saturday */}
                    <div className="bg-green-100 border-2 border-green-400 rounded-lg p-3 min-h-[140px]">
                      <div className="text-sm font-semibold text-green-700 mb-2">{t('club.weeklySchedule.days.saturday.name')}</div>
                      <div className="text-sm text-gray-700">
                        <div className="mb-2 font-bold text-black">{t('club.weeklySchedule.days.saturday.activity')}</div>
                        <div>{t('club.weeklySchedule.days.saturday.description')}</div>
                      </div>
                    </div>

                    {/* Sunday */}
                    <div className="bg-lila/10 border-2 border-lila/30 rounded-lg p-3 min-h-[140px]">
                      <div className="text-sm font-semibold text-lila mb-2">{t('club.weeklySchedule.days.sunday.name')}</div>
                      <div className="text-sm text-gray-700">
                        <div className="mb-2 font-bold text-black">{t('club.weeklySchedule.days.sunday.activity')}</div>
                        <div>{t('club.weeklySchedule.days.sunday.description')}</div>
                      </div>
                    </div>
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
              {t('club.cta')}
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