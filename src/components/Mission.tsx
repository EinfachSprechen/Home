import React, { useState } from "react";
import { Users, Repeat, ShieldCheck, GraduationCap, BookOpen, MessageCircle, Globe, Sparkles, Smile, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

const values = [
  {
    icon: <Repeat className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
    title: "Kontinuität & Struktur",
    content: "Lernen klappt am besten, wenn es Teil deines Alltags wird – ganz selbstverständlich, wie Zähneputzen. Mit unseren täglichen Impulsen und einer klaren Struktur unterstützen wir dich dabei, genau das zu schaffen: eine feste Routine, die dich langfristig weiterbringt."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
    title: "Lernen ohne Angst",
    content: "Hier darfst du so sein, wie du bist – mit Akzent, mit Unsicherheiten, mit Fragen. Bei uns musst du dich nicht schämen, wenn dir ein Wort fehlt oder ein Satz holprig klingt. Denn genau daraus entsteht echtes Lernen: mutig ausprobieren, Fehler machen, besser werden. Ganz ohne Druck."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
    title: "Professionelle Begleitung",
    content: "Bei uns lernst du mit qualifizierter Unterstützung: Wir vereinen didaktisches Know-how mit Erfahrung im Umgang mit den typischen Herausforderungen beim Deutschlernen. Gemeinsam mit einer Muttersprachlerin im Team wählen wir gezielt moderne Themen, authentisches Sprachmaterial und aktuelles Vokabular aus – damit du nicht nur korrekt, sondern auch natürlich und zeitgemäß Deutsch sprichst."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
    title: "Wissenschaftlich fundiertes Lernen",
    content: "Unsere Methoden basieren auf aktuellen sprachwissenschaftlichen Erkenntnissen. Microlearning-Einheiten und bewährte Techniken sorgen für effektive Fortschritte – praxisnah, fundiert und ohne Überforderung."
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
    title: "Lernen auf Deutsch",
    content: "Wir lernen Deutsch direkt auf Deutsch – ganz ohne Übersetzung. Das stärkt dein Sprachgefühl und hilft dir, schneller und intuitiver zu denken und zu sprechen."
  },
  {
    icon: <Globe className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
    title: "Inklusivität & Respekt",
    content: "Unsere Community lebt von Vielfalt. Jeder Lernweg ist einzigartig, und jedes Mitglied wird unabhängig von Herkunft, Sprachniveau oder Lerntempo mit Respekt und Wertschätzung begleitet. Wir erinnern daran: Die Freiheit des Einzelnen endet dort, wo die Rechte anderer beginnen – Beleidigungen und Diskriminierungen haben bei uns keinen Platz."
  },
  {
    icon: <Smile className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
    title: "Freude am Lernen",
    content: "Lernen darf (und soll!) Spaß machen. Wir glauben daran, dass echte Fortschritte nur dann entstehen, wenn Motivation, Neugier und Freude ein fester Bestandteil des Prozesses sind."
  }
];

const Mission = () => {
  const { t, language } = useTranslation();
  
  // Icon mapping
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'repeat': <Repeat className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
      'shield-check': <ShieldCheck className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
      'graduation-cap': <GraduationCap className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
      'book-open': <BookOpen className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
      'message-circle': <MessageCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
      'globe': <Globe className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
      'smile': <Smile className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
    };
    return iconMap[iconName] || <Users className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />;
  };
  
  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="mission" className="section relative overflow-hidden bg-gradient-to-b from-white to-pastel-lila/20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pastel-lila rounded-full filter blur-3xl opacity-25 -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-pastel-orange rounded-full filter blur-3xl opacity-20 translate-y-1/4 -translate-x-1/4"></div>
        <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-orange-light rounded-full filter blur-2xl opacity-15 -translate-y-1/2"></div>
        
        {/* Decorative squared elements */}
        <div className="absolute top-1/6 left-1/8 w-12 h-12 bg-pastel-green rounded-lg rotate-20 animate-float opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/5 w-16 h-16 bg-pastel-purple rounded-lg rotate-45 animate-float opacity-60"></div>
        <div className="absolute top-1/2 left-1/3 w-9 h-9 bg-pastel-blue rounded-lg rotate-12 animate-float opacity-70"></div>
        <div className="absolute bottom-1/6 left-2/3 w-11 h-11 bg-pastel-pink rounded-lg rotate-30 animate-float opacity-55"></div>
        
        {/* Animated decorative elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-pastel-lila/30 rounded-full"
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/3 w-6 h-6 bg-orange-light/40 rotate-45"
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
            rotate: [45, 90, 45]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-4 h-4 bg-pastel-orange/50 rounded-full"
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            y: [-10, 10, -10]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-lila/30"
          animate={{ 
            opacity: [0.25, 0.65, 0.25],
            x: [-5, 5, -5]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container relative z-10">
        {/* Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={boxVariants}
          className="section-title mb-10 text-3xl sm:text-4xl font-bold text-center"
        >
          {t('mission.title')}
        </motion.h2>

        {/* Violet Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={boxVariants}
          className="bg-pastel-lila text-lila-dark rounded-2xl p-6 shadow flex items-stretch mb-8 w-full border-2 border-lila/10 max-w-4xl mx-auto"
        >
          <div className="flex flex-col justify-center w-full">
            <p className="text-base font-medium w-full text-justify">
              {t('mission.description')}
            </p>
          </div>
        </motion.div>

        {/* Werte & Prinzipien */}
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={boxVariants}
          className="section-title mb-8 text-3xl sm:text-4xl font-bold text-center"
        >
          {t('mission.valuesTitle')}
        </motion.h3>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {t('mission.values').map((val: any, idx: number) => (
            <motion.div
              key={val.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={boxVariants}
              className="bg-white rounded-2xl shadow flex flex-col"
            >
              <button
                className="flex items-center justify-between gap-4 p-6 focus:outline-none w-full"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`mission-box-${idx}`}
              >
                <span className="flex items-center gap-3">
                  {getIcon(val.icon)}
                  <span className="text-lg font-semibold">{val.title}</span>
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-6 h-6 text-orange-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-orange-500" />
                )}
              </button>
              {openIndex === idx && (
                <div
                  id={`mission-box-${idx}`}
                  className="px-6 pb-6 -mt-2"
                >
                  <p className="text-justify">{val.content}</p>
                </div>
              )}
            </motion.div>
          ))}
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
              {t('mission.cta')}
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

export default Mission;
