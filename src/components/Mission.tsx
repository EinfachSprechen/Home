import React, { useState } from "react";
import { Users, Repeat, ShieldCheck, GraduationCap, BookOpen, MessageCircle, Globe, Sparkles, Smile, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="mission" className="section bg-gradient-to-b from-white to-pastel-lila/30">
      <div className="container">
        {/* Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={boxVariants}
          className="section-title mb-10 text-3xl sm:text-4xl font-bold text-center"
        >
          Unsere Mission
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
              Lernen ist keine Einzelleistung – es lebt von Verbindung, Vertrauen und Freude. Wir schaffen eine Community, in der du dich gesehen und unterstützt fühlst. Einen Raum, in dem Fehler willkommen sind, Sprechen Spaß macht und du nicht alleine lernst, sondern gemeinsam mit Menschen, die dieselbe Reise gehen wie du.
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
          Unsere Werte & Prinzipien
        </motion.h3>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {values.map((val, idx) => (
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
                  {val.icon}
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
      </div>
    </section>
  );
};

export default Mission;
