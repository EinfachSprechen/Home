import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Team = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  const [open, setOpen] = useState(false);

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
          className="max-w-3xl mx-auto"
        >
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-6 flex justify-center">
              <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden w-1/2">
                <img 
                  src="/images/aliona.jpg" 
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
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="aliona-details"
              >
                {open ? 'Weniger anzeigen' : 'Mehr über Aliona'}
                {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {open && (
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
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
