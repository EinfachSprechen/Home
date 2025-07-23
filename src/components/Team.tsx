import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import alionaImage from '/images/aliona.jpg';
import team2Image from '/images/team 2.jpg';

const Team = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  const [openAliona, setOpenAliona] = useState(false);
  const [openMystery, setOpenMystery] = useState(false);

  return (
    <section id="team" className="section bg-gradient-to-b from-pastel-lila/40 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
            <h2 className="section-title text-4x2 mb-8">Wer sind wir?</h2>
            <p className="section-subtitle text-lg md:text-xl mb-0">
            Lerne die Gründerin und das Herz der Einfach Sprechen Community kennen.
            </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Aliona */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-6 flex justify-center">
                <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden w-1/2 lg:w-3/4">
                  <img 
                    src={alionaImage} 
                    alt="Aliona - Gründerin der Einfach Sprechen Community" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-heading font-semibold mb-2">Aliona</h3>
                <p className="text-orange font-medium mb-2">
                  Lektorin an der Universität Wien, Sprachliebhaberin & Gründerin von Einfach Sprechen
                </p>
                <p className="text-gray-700 mb-2">
                  Spricht täglich vier Sprachen und hilft Menschen, Deutsch mit Struktur, Leichtigkeit und Freude in ihren Alltag zu integrieren.
                </p>
                <button
                  className="flex items-center justify-center gap-2 text-lila-dark font-semibold mt-4 mb-4 hover:underline focus:outline-none mx-auto"
                  onClick={() => setOpenAliona((v) => !v)}
                  aria-expanded={openAliona}
                  aria-controls="aliona-details"
                >
                  {openAliona ? 'Weniger anzeigen' : 'Mehr über Aliona'}
                  {openAliona ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {openAliona && (
                  <div id="aliona-details" className="mt-2 text-gray-600 text-center transition-all">
                    <p className="mb-2">
                      Aliona kommt aus Russland und lebt seit über zwei Jahren in Wien. Sie hat einen Master in Sprachunterrichtsmethoden und unterrichtet heute Russisch an der Universität Wien, während sie gleichzeitig ihre zweite Masterarbeit in Bildungswissenschaft schreibt.
                    </p>
                    <p>
                      Mit über neun Jahren Lehrerfahrung weiß sie, worauf es beim Sprachenlernen wirklich ankommt: nicht auf perfekte Grammatik, sondern auf Mut, Struktur – und die Freude am Sprechen.
                    </p>
                  </div>
                )}
                  <div className="flex items-start justify-center gap-2 mt-6">
                  <blockquote className="italic text-lg text-lila-dark text-center">
                    „Ich wollte regelmäßig sprechen – ohne Angst, ohne Perfektionsdruck. Mit echten Themen, echter Sprache und echten Menschen. Genau das haben wir hier geschaffen."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Mystery Team Member */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-6 flex justify-center">
                <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden w-1/2 lg:w-3/4">
                  <img 
                    src={team2Image} 
                    alt="Muttersprachlerin - Sprachklub-Leiterin" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-heading font-semibold mb-2">?</h3>
                <p className="text-orange font-medium mb-2">
                  Muttersprachlerin & Sprachklub-Leiterin
                </p>
                <p className="text-gray-700 mb-2">
                  Diese Person leitet unseren wöchentlichen Sprachklub – mit Humor, Geduld und einem offenen Ohr für alles, was dich sprachlich bewegt. Du wirst dort nicht nur sprechen üben, sondern auch lernen, wie sich echtes, lebendiges Deutsch anfühlt.
                </p>
                <p className="text-gray-700 mb-2 font-medium">
                  Wer es ist? Das bleibt noch ein kleines Geheimnis. Aber so viel steht fest: Du wirst dich auf jede Begegnung freuen.
                </p>
                <button
                  className="flex items-center justify-center gap-2 text-lila-dark font-semibold mt-4 mb-4 hover:underline focus:outline-none mx-auto"
                  onClick={() => setOpenMystery((v) => !v)}
                  aria-expanded={openMystery}
                  aria-controls="mystery-details"
                >
                  {openMystery ? 'Weniger anzeigen' : 'Mehr über unsere Muttersprachlerin'}
                  {openMystery ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {openMystery && (
                  <div id="mystery-details" className="mt-2 text-gray-600 text-center transition-all">
                    <p className="mb-2">
                      Natürlich gehört zu Einfach Sprechen auch eine Stimme aus dem echten Leben – jemand, der Deutsch nicht nur perfekt spricht, sondern auch lebt. Eine Person, die dir zeigt, wie Sprache heute wirklich klingt, und dabei den Blick hat für aktuelle Trends, Slang und Redewendungen, die im echten Austausch zählen.
                    </p>
                    <p className="mb-2">
                      Ein Mix aus Sprachwissen, Erfahrung und Gefühl für den richtigen Ton. Unsere Muttersprachlerin achtet darauf, dass alles, was du hier lernst, nicht nur grammatikalisch korrekt, sondern auch lebendig, zeitgemäß und authentisch ist.
                    </p>
                    <p>
                      Du wirst ermutigt, auch mit Akzent oder kleinen Fehlern einfach loszusprechen – und erleben, dass du nicht perfekt sein musst, um verstanden und geschätzt zu werden.
                    </p>
                  </div>
                )}
                  <div className="flex items-start justify-center gap-2 mt-6">
                  <blockquote className="italic text-lg text-lila-dark text-center">
                    „Ja, das kann man sagen – aber ehrlich? So spricht vielleicht meine Oma."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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

export default Team;
