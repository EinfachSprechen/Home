import { HelpCircle, UserCheck, MessageSquare, Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
	{
		icon: <HelpCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
		question: 'Wie melde ich mich für die Community an?',
		answer: 'Du kannst dich ganz einfach über Telegram, Instagram oder WhatsApp bei Aliona melden. Sobald du dich entschieden hast mitzumachen, erhältst du Zugang zum Telegram-Kanal, in dem alle Inhalte, Aufgaben und Infos geteilt werden.',
	},
	{
		icon: <UserCheck className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
		question: 'Muss ich täglich aktiv sein?',
		answer: 'Für den besten Lernerfolg empfehlen wir eine tägliche Teilnahme – aber es ist keine Pflicht. Du kannst in deinem eigenen Tempo mitmachen und dich einbringen, wann es dir passt. Am Wochenende gibt es keine neuen Aufgaben, und das Team ist eventuell nicht sofort erreichbar. Du hast aber weiterhin Zugriff auf alle Inhalte und kannst dich jederzeit mit anderen Teilnehmenden im Chat austauschen.',
	},
	{
		icon: <MessageSquare className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
		question: 'Wie funktionieren die Sprachklubs?',
		answer: 'Die Sprachklubs finden einmal pro Woche über Zoom statt. Dort besprechen wir das Wochenthema, üben freies Sprechen und wenden den Wortschatz aus den täglichen Aufgaben praktisch an.',
	},
	{
		icon: <Calendar className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
		question: 'Nicht ganz B1 – kann ich trotzdem dabei sein?',
		answer: 'Unsere Community richtet sich an Lernende ab etwa B1-Niveau. Aber das ist keine feste Grenze – es kommt auch auf deine Erfahrung und Motivation an. Einige Teilnehmer:innen mit niedrigerem Niveau haben sehr gute Fortschritte gemacht. Du kannst gerne eine Probewoche buchen und selbst herausfinden, ob es für dich passt.',
	},
	{
		icon: <Clock className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
		question: 'Wie viel Zeit brauche ich pro Tag für die Aufgaben?',
		answer: 'Das hängt von deinem Sprachniveau und deiner Routine ab – im Durchschnitt brauchst du etwa 15–30 Minuten täglich. Wenn du möchtest, kannst du dich auch darüber hinaus mit anderen im Chat austauschen und noch mehr üben.',
	},
];

const Process = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const boxVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
	};

	return (
		<section id="process" className="section bg-gradient-to-b from-white to-pastel-lila/30">
			<div className="container">
				<motion.h2
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={boxVariants}
					className="section-title mb-10 text-3xl sm:text-4xl font-bold text-center"
				>
					Häufig gestellte Fragen
				</motion.h2>
				<div className="grid gap-4 max-w-3xl mx-auto">
					{faqs.map((faq, idx) => (
						<motion.div
							key={faq.question}
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
								aria-controls={`faq-box-${idx}`}
							>
								<span className="flex items-center gap-3">
									{faq.icon}
									<span className="text-lg font-semibold">{faq.question}</span>
								</span>
								{openIndex === idx ? (
									<ChevronUp className="w-6 h-6 text-orange-500" />
								) : (
									<ChevronDown className="w-6 h-6 text-orange-500" />
								)}
							</button>
							{openIndex === idx && (
								<div
									id={`faq-box-${idx}`}
									className={`px-6 pb-6 -mt-2${
										faq.question === 'Ich bin noch nicht auf einem hohen Niveau. Kann ich trotzdem teilnehmen?'
											? ' text-left'
											: ''
									}`}
								>
									<p>{faq.answer}</p>
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

export default Process;
