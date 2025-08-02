import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

const Audience = () => {
	const { t, language } = useTranslation();
	
	const reasons = {
		de: [
			'Du 15–30 Minuten pro Tag fürs Deutschüben hast',
			'Du eine feste Lernroutine suchst – ohne Druck',
			'Du sprechen willst, ohne Angst vor Fehlern',
			'Du selbstbewusster sprechen willst',
			'Du in Alltagssituationen flüssiger sprechen möchtest',
			'Du deinen Wortschatz aktiv, gezielt und mühelos erweitern willst',
			'Du wissen willst, worüber in der deutschsprachigen Welt gesprochen wird',
			'Du Deutschlernende suchst, die mit dir auf derselben Wellenlänge sind',
		],
		en: [
			'You have 15-30 minutes per day for German practice',
			'You are looking for a solid learning routine – without pressure',
			'You want to speak without fear of making mistakes',
			'You want to speak more confidently',
			'You want to speak more fluently in everyday situations',
			'You want to expand your vocabulary actively, purposefully and effortlessly',
			'You want to know what people are talking about in the German-speaking world',
			'You are looking for German learners who are on the same wavelength as you',
		]
	};

	const currentReasons = reasons[language];
	return (
		<section id="audience" className="section relative overflow-hidden bg-gradient-to-b from-pastel-lila/10 to-white">
			{/* Background decoration */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute top-0 left-0 w-[450px] h-[450px] bg-pastel-orange rounded-full filter blur-3xl opacity-15 -translate-y-1/2 -translate-x-1/3"></div>
				<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pastel-lila rounded-full filter blur-3xl opacity-20 translate-y-1/3 translate-x-1/4"></div>
				<div className="absolute top-1/3 left-1/4 w-[180px] h-[180px] bg-lila-light rounded-full filter blur-2xl opacity-12"></div>
				
				{/* Decorative squared elements */}
				<div className="absolute top-1/4 right-1/6 w-10 h-10 bg-pastel-pink rounded-lg rotate-45 animate-float opacity-60"></div>
				<div className="absolute bottom-1/3 left-1/8 w-14 h-14 bg-pastel-blue rounded-lg rotate-12 animate-float opacity-50"></div>
				<div className="absolute top-2/3 right-1/3 w-8 h-8 bg-pastel-peach rounded-lg rotate-30 animate-float opacity-70"></div>
				
				{/* Animated decorative elements */}
				<motion.div 
					className="absolute top-1/5 right-1/4 w-7 h-7 bg-pastel-orange/40 rounded-full"
					animate={{ 
						opacity: [0.3, 0.8, 0.3],
						scale: [0.8, 1.3, 0.8]
					}}
					transition={{ 
						duration: 5.5,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
				<motion.div 
					className="absolute top-2/3 left-1/5 w-5 h-5 bg-lila/35"
					animate={{ 
						opacity: [0.25, 0.7, 0.25],
						rotate: [0, 180, 360]
					}}
					transition={{ 
						duration: 8,
						repeat: Infinity,
						ease: "linear"
					}}
				/>
				<motion.div 
					className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-pastel-lila/45 rounded-full"
					animate={{ 
						opacity: [0.4, 0.9, 0.4],
						x: [-8, 8, -8]
					}}
					transition={{ 
						duration: 6.5,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
				<motion.div 
					className="absolute top-1/2 left-1/3 w-4 h-4 bg-orange-light/50 rotate-45"
					animate={{ 
						opacity: [0.2, 0.6, 0.2],
						y: [-12, 12, -12]
					}}
					transition={{ 
						duration: 4.5,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
			</div>
			
			<div className="container relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-6"
					style={{ transform: 'scale(1.3)', transformOrigin: 'top left' }} // 30% bigger
				>
					<h2 className="section-title mb-15 text-3xl sm:text-4xl font-bold">
						{t('audience.title')}
					</h2>
					<p className="section-subtitle mb-2 text-x2 text-gray-700 font-normal">
						{t('audience.subtitle')}
					</p>
				</motion.div>

        <div className="max-w-2xl mx-auto">
          <ul className="flex flex-col gap-4">
            {currentReasons.map((reason, idx) => (
              <motion.li
                key={reason}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <CheckCircle
                  className="text-green-500 mt-1 flex-shrink-0"
                  size={22}
                />
                <span className="text-gray-800 text-base sm:text-lg">
                  {reason}
                </span>
              </motion.li>
            ))}
          </ul>
          <div className="flex justify-center mt-20 items-center">
            {/* Arrows and Button Grouped Horizontally */}
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
                {/* Down arrow */}
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
                {t('audience.cta')}
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
                {/* Down arrow */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
              </motion.svg>
            </motion.div>
          </div>
        </div>
			</div>
		</section>
	);
};

export default Audience;
