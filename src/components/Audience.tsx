import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
	'Du 15–30 Minuten pro Tag fürs Deutschüben hast',
	'Du eine feste Lernroutine suchst – ohne Druck',
	'Du sprechen willst, ohne Angst vor Fehlern',
	'Du selbstbewusster sprechen willst',
	'Du in Alltagssituationen flüssiger sprechen möchtest',
	'Du deinen Wortschatz aktiv, gezielt und mühelos erweitern willst',
	'Du wissen willst, worüber in der deutschsprachigen Welt gesprochen wird',
	'Du Deutschlernende suchst, die mit dir auf derselben Wellenlänge sind',
];

const Audience = () => {
	return (
		<section id="audience" className="section">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-6"
					style={{ transform: 'scale(1.3)', transformOrigin: 'top left' }} // 30% bigger
				>
					<h2 className="section-title mb-15 text-3xl sm:text-4xl font-bold">
						Ist Einfach Sprechen gut für mich?
					</h2>
					<p className="section-subtitle mb-2 text-x2 text-gray-700 font-normal">
						Du bist hier richtig, wenn ...
					</p>
				</motion.div>

        <div className="max-w-2xl mx-auto">
          <ul className="flex flex-col gap-4">
            {reasons.map((reason, idx) => (
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
                href="#contact"
                onClick={e => {
                  e.preventDefault();
                  const contact = document.getElementById("contact");
                  if (contact) {
                    contact.scrollIntoView({ behavior: "smooth" });
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
