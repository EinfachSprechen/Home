import { HelpCircle, UserCheck, MessageSquare, Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

const Process = () => {
	const { t } = useTranslation();
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	
	const faqs = t('process.faqs') || [
		{
			question: 'Wie melde ich mich für die Community an?',
			answer: 'Du kannst dich ganz einfach über Telegram, Instagram oder WhatsApp bei Aliona melden. Sobald du dich entschieden hast mitzumachen, erhältst du Zugang zum Telegram-Kanal, in dem alle Inhalte, Aufgaben und Infos geteilt werden.',
		},
		{
			question: 'Muss ich täglich aktiv sein?',
			answer: 'Für den besten Lernerfolg empfehlen wir eine tägliche Teilnahme – aber es ist keine Pflicht. Du kannst in deinem eigenen Tempo mitmachen und dich einbringen, wann es dir passt. Am Wochenende gibt es keine neuen Aufgaben, und das Team ist eventuell nicht sofort erreichbar. Du hast aber weiterhin Zugriff auf alle Inhalte und kannst dich jederzeit mit anderen Teilnehmenden im Chat austauschen.',
		},
		{
			question: 'Wie funktionieren die Sprachklubs?',
			answer: 'Die Sprachklubs finden einmal pro Woche über Zoom statt. Dort besprechen wir das Wochenthema, üben freies Sprechen und wenden den Wortschatz aus den täglichen Aufgaben praktisch an.',
		},
		{
			question: 'Nicht ganz B1 – kann ich trotzdem dabei sein?',
			answer: 'Unsere Community richtet sich an Lernende ab etwa B1-Niveau. Aber das ist keine feste Grenze – es kommt auch auf deine Erfahrung und Motivation an. Einige Teilnehmer:innen mit niedrigerem Niveau haben sehr gute Fortschritte gemacht. Du kannst gerne eine Probewoche buchen und selbst herausfinden, ob es für dich passt.',
		},
		{
			question: 'Wie viel Zeit brauche ich pro Tag für die Aufgaben?',
			answer: 'Das hängt von deinem Sprachniveau und deiner Routine ab – im Durchschnitt brauchst du etwa 15–30 Minuten täglich. Wenn du möchtest, kannst du dich auch darüber hinaus mit anderen im Chat austauschen und noch mehr üben.',
		},
	];

	const iconMap = [
		<HelpCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
		<UserCheck className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
		<MessageSquare className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
		<Calendar className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />,
		<Clock className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
	];
	const boxVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
	};

	return (
		<section id="process" className="section relative overflow-hidden bg-gradient-to-b from-white to-pastel-orange/15">
			{/* Background decoration */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute top-0 left-0 w-[300px] h-[300px] bg-pastel-orange rounded-full filter blur-3xl opacity-20 -translate-y-1/3 -translate-x-1/4"></div>
				<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pastel-lila rounded-full filter blur-3xl opacity-22 translate-y-1/3 translate-x-1/4"></div>
				<div className="absolute top-1/2 left-1/2 w-[180px] h-[180px] bg-lila-light rounded-full filter blur-2xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
				
				{/* Decorative squared elements */}
				<div className="absolute top-1/5 right-1/3 w-12 h-12 bg-pastel-purple rounded-lg rotate-25 animate-float opacity-60"></div>
				<div className="absolute bottom-1/4 left-1/4 w-9 h-9 bg-pastel-peach rounded-lg rotate-40 animate-float opacity-65"></div>
				<div className="absolute top-2/3 right-1/6 w-14 h-14 bg-pastel-green rounded-lg rotate-10 animate-float opacity-50"></div>
				<div className="absolute bottom-1/6 left-2/3 w-10 h-10 bg-pastel-pink rounded-lg rotate-55 animate-float opacity-70"></div>
				
				{/* Animated decorative elements */}
				<motion.div 
					className="absolute top-1/4 right-1/5 w-8 h-8 bg-pastel-orange/40 rounded-full"
					animate={{ 
						opacity: [0.35, 0.85, 0.35],
						scale: [1, 1.5, 1]
					}}
					transition={{ 
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
				<motion.div 
					className="absolute top-3/5 left-1/6 w-6 h-6 bg-lila/35"
					animate={{ 
						opacity: [0.25, 0.7, 0.25],
						rotate: [0, 45, 90, 135, 180]
					}}
					transition={{ 
						duration: 9,
						repeat: Infinity,
						ease: "linear"
					}}
				/>
				<motion.div 
					className="absolute bottom-1/5 right-1/4 w-5 h-5 bg-pastel-lila/50 rounded-full"
					animate={{ 
						opacity: [0.3, 0.8, 0.3],
						x: [-12, 12, -12]
					}}
					transition={{ 
						duration: 5.5,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
				<motion.div 
					className="absolute top-2/3 right-1/6 w-7 h-7 bg-orange-light/45 rotate-45"
					animate={{ 
						opacity: [0.2, 0.6, 0.2],
						y: [-8, 8, -8]
					}}
					transition={{ 
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
			</div>
			
			<div className="container relative z-10">
				<motion.h2
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={boxVariants}
					className="section-title mb-10 text-3xl sm:text-4xl font-bold text-center"
				>
					{t('process.title')}
				</motion.h2>
				<div className="grid gap-4 max-w-3xl mx-auto">
					{faqs.map((faq: any, idx: number) => (
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
									{iconMap[idx]}
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
									className="px-6 pb-6 -mt-2"
								>
									<p>{faq.answer}</p>
								</div>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Process;
