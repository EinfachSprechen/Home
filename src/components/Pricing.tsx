import { Check, ArrowRight, ArrowLeft, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactButtons from './ContactButtons';
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const plans = [
  {
    name: "Probewoche¹",
    duration: "1 Woche",
    price: "9",
    description: "Nur für neue Mitglieder & bei bestehendem Instagram-Follow @hey_alyon_ka",
    features: [
      "Zugang zur Telegram-Gruppe mit täglichen Lernimpulsen",
      "1x wöchentlich: Sprechklub mit Muttersprachler:in",
      "Kommunikative Aufgaben (Text, Audio, Video)",
      "Fragen an eine:n Native Speaker",
      "Wöchentliches Quizlet-Set mit Vokabeln",
      "Zugriff auf Inhalte aus den Vorwochen"
    ],
    highlight: true
  },
  {
    name: "Startklar",
    duration: "1–4 Wochen",
    price: "15",
    description: "Alle Inhalte, flexibel für den Einstieg",
    features: [
      "Alle Inhalte & Vorteile enthalten",
      "Flexibler Einstieg ohne lange Bindung",
      "Perfekt zum Ausprobieren der Methode",
      "Je länger du bleibst, desto günstiger wird es"
    ],
    highlight: false
  },
  {
    name: "Dranbleiben",
    duration: "5–11 Wochen",
    price: "13",
    description: "Für alle, die dranbleiben wollen",
    features: [
      "Alle Inhalte & Vorteile enthalten",
      "Günstigerer Wochenpreis",
      "Mehr Zeit für nachhaltigen Fortschritt",
      "Ideal für kontinuierliches Lernen"
    ],
    highlight: false
  },
  {
    name: "Sprachflow",
    duration: "ab 12 Wochen",
    price: "11",
    description: "Werde Sprachflow und spare am meisten",
    features: [
      "Alle Inhalte & Vorteile enthalten",
      "Bester Preis pro Woche",
      "Langfristige Sprachentwicklung",
      "Maximale Ersparnisse bei längster Laufzeit"
    ],
    highlight: false
  }
];

const Pricing = () => (
  <section id="pricing" className="section bg-gradient-to-b from-pastel-blue/30 to-white">
    <div className="container max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="section-title mb-14 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Preise & Mitgliedschaft
        </h2>
        <p className="section-subtitle mb-10 text-xl md:text-2xl text-gray-600 font-medium">
          Lerne regelmäßig und entspannt – du bestimmst die Dauer.<br />
          <span className="text-gray-600 font-normal">
            Alle Pakete enthalten dieselben Inhalte. Je länger du bleibst, desto günstiger wird es für dich.
          </span>
        </p>
        <div className="max-w-2xl mx-auto text-left bg-white/90 rounded-2xl p-10 mt-10 shadow-lg border border-gray-100">
          <div className="flex items-center mb-6 gap-3">
      
        <span className="font-bold text-2xl text-gray-900">Was ist enthalten?</span>
          </div>
          <ul className="grid gap-5 text-gray-800 text-base md:text-lg">
        <li className="flex items-start gap-3">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 mt-1">
            <Check className="w-5 h-5 text-orange-500" />
          </span>
          Zugang zur Telegram-Gruppe mit täglichen Lernimpulsen
        </li>
        <li className="flex items-start gap-3">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 mt-1">
            <Check className="w-5 h-5 text-orange-500" />
          </span>
          1x wöchentlich: Sprechklub mit Muttersprachler:in
        </li>
        <li className="flex items-start gap-3">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 mt-1">
            <Check className="w-5 h-5 text-orange-500" />
          </span>
          Kommunikative Aufgaben (Text, Audio, Video)
        </li>
        <li className="flex items-start gap-3">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 mt-1">
            <Check className="w-5 h-5 text-orange-500" />
          </span>
          Möglichkeit, jederzeit Fragen an eine:n Native Speaker zu stellen
        </li>
        <li className="flex items-start gap-3">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 mt-1">
            <Check className="w-5 h-5 text-orange-500" />
          </span>
          Wöchentliches Quizlet-Set mit Vokabeln zum Thema
        </li>
        <li className="flex items-start gap-3">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 mt-1">
            <Check className="w-5 h-5 text-orange-500" />
          </span>
          Zugriff auf Inhalte aus den Vorwochen
        </li>
          </ul>
        </div>
      </motion.div>

      {/* Probewoche in first line */}
      <div className="flex flex-col md:flex-row gap-8 w-full mb-8 justify-center">
        {plans.slice(0, 1).map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-2 duration-300 min-w-[270px] ${
              plan.highlight ? 'ring-2 ring-orange-400 bg-orange-50' : ''
            }`}
          >
            {plan.highlight && (
              <div className="bg-orange-400 text-white py-2 text-center text-sm font-medium">
                Probewoche-Angebot
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
              <p className="text-gray-500 mb-2">{plan.duration}</p>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500">€</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6">
                {/* Features removed to avoid repetition with the section above */}
              </ul>
              <button className="w-full py-2 px-4 rounded-lg transition-colors bg-orange-500 hover:bg-orange-600 text-white">
                Auswählen
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Other plans as carousel on mobile, flex row on desktop */}
      {/* Mobile carousel */}
      <div className="block md:hidden w-full mb-16">
        {/* Swipe hint icons */}
        <div className="flex justify-center items-center gap-2 mb-2 opacity-80 select-none">
          <ArrowLeft className="w-5 h-5 text-orange-400 animate-bounce-left" />
          <span className="text-xs text-gray-500">Wische für mehr</span>
          <ArrowRight className="w-5 h-5 text-orange-400 animate-bounce-right" />
        </div>
        <Carousel>
          <CarouselContent>
            {plans.slice(1).map((plan, index) => {
              // Icons for savings level (from 1 to 4)
              const savingsIcons = [
                <svg key="1" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>,
                <svg key="2" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" /></svg>,
                <svg key="3" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none" /></svg>,
                <svg key="4" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" /></svg>
              ];
              const icon = savingsIcons[index % savingsIcons.length];
              let saveUpTo = 0;
              if (plan.name === "Dranbleiben") saveUpTo = 22;
              if (plan.name === "Sprachflow") saveUpTo = 48;
              return (
                <CarouselItem key={plan.name} className={`!basis-[80vw] max-w-[340px] ${index === 0 ? 'ml-4' : ''} mr-6`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 flex-1 min-w-[220px] max-w-full mx-2 p-0 z-10 pt-10 group`}
                    style={{ boxSizing: 'border-box' }}
                  >
                    <div className="flex flex-col items-center w-full">
                      <div className="mb-2">{icon}</div>
                      <h3 className="text-xl font-semibold mb-1 text-gray-900 mt-2 text-center break-words">{plan.name}</h3>
                    </div>
                    <p className="text-gray-500 mb-2 text-base text-center break-words">{plan.duration}</p>
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-100 flex flex-col items-center justify-center mb-2 shadow">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-xs text-gray-500">€/Woche</span>
                    </div>
                    {(() => {
                      let saveUpTo = 0;
                      if (plan.name === "Dranbleiben") saveUpTo = 22;
                      if (plan.name === "Sprachflow") saveUpTo = 48;
                      return saveUpTo > 0 ? (
                        <div className="mb-2 inline-block bg-green-600 text-white text-xs font-bold rounded-full px-3 py-1 shadow z-10">
                          Spare bis zu {saveUpTo}€
                        </div>
                      ) : (
                        <div className="mb-2 inline-block bg-transparent text-transparent text-xs font-bold rounded-full px-3 py-1 z-10">
                          Spare bis zu 0€
                        </div>
                      );
                    })()}
                    <p className="text-gray-600 mb-6 text-base min-h-[48px] text-center break-words px-2">{plan.description}</p>
                    <button className="mt-auto w-[90%] py-2 mb-4 rounded-lg border-2 border-current text-base font-semibold text-gray-900 bg-white transition-colors duration-200 group-hover:bg-orange-500 group-hover:text-white hover:bg-orange-500 hover:text-white">
                      Auswählen
                    </button>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      {/* Desktop flex row */}
      <div className="hidden md:flex flex-row gap-6 w-full mb-16 overflow-x-auto justify-center min-h-[420px]">
        {plans.slice(1).map((plan, index) => {
          // Icons for savings level (from 1 to 4)
          const savingsIcons = [
            <svg key="1" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>,
            <svg key="2" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" /></svg>,
            <svg key="3" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none" /></svg>,
            <svg key="4" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" /></svg>
          ];
          const icon = savingsIcons[index % savingsIcons.length];
          // Adjust savings for Dranbleiben
          let saveUpTo = 0;
          if (plan.name === "Dranbleiben") saveUpTo = 22;
          if (plan.name === "Sprachflow") saveUpTo = 48;
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 flex-1 min-w-[220px] max-w-full mx-2 p-0 z-10 pt-10 group`}
              style={{ boxSizing: 'border-box' }}
            >
              <div className="flex flex-col items-center w-full">
                <div className="mb-2">{icon}</div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 mt-2 text-center break-words">{plan.name}</h3>
              </div>
              <p className="text-gray-500 mb-2 text-base text-center break-words">{plan.duration}</p>
              {/* Price in a circle */}
              <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-100 flex flex-col items-center justify-center mb-2 shadow">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-xs text-gray-500">€/Woche</span>
              </div>
              {/* Savings below price */}
              {(() => {
                let saveUpTo = 0;
                if (plan.name === "Dranbleiben") saveUpTo = 22;
                if (plan.name === "Sprachflow") saveUpTo = 48;
                return saveUpTo > 0 ? (
                  <div className="mb-2 inline-block bg-green-600 text-white text-xs font-bold rounded-full px-3 py-1 shadow z-10">
                    Spare bis zu {saveUpTo}€
                  </div>
                ) : (
                  <div className="mb-2 inline-block bg-transparent text-transparent text-xs font-bold rounded-full px-3 py-1 z-10">
                    Spare bis zu 0€
                  </div>
                );
              })()}
              <p className="text-gray-600 mb-6 text-base min-h-[48px] text-center break-words px-2">{plan.description}</p>
              <button className="mt-auto w-[90%] py-2 mb-4 rounded-lg border-2 border-current text-base font-semibold text-gray-900 bg-white transition-colors duration-200 group-hover:bg-orange-500 group-hover:text-white hover:bg-orange-500 hover:text-white">
                Auswählen
              </button>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto text-center bg-white rounded-xl shadow-md p-8"
      >
        <h3 className="text-2xl font-semibold mb-4">Bereit zum Beitreten?</h3>
        <p className="text-gray-600 mb-8">
          Kontaktiere Aliona direkt über einen der folgenden Kanäle, um deine Mitgliedschaft zu beginnen 
          oder weitere Fragen zu stellen.
        </p>
        
        <ContactButtons className="justify-center" />
        
        <p className="mt-8 text-sm text-gray-500">
          Einstieg ist jede Woche möglich.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Pricing;
