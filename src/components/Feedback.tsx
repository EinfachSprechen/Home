import { motion, PanInfo } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const { t, language } = useTranslation();

  const testimonials = {
    de: [
      {
        name: "Karly",
        level: "B2-C1",
        rating: 5,
        title: "Perfect for Continuing My German Journey",
        message: "Einfach Sprechen was such a <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>easy and effective way</span> for me to continue on my German Learning Journey. It can be really hard to make the time to go to courses, especially once you reach a certain level where <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>actively using the language</span> becomes the foundational block towards improvement!\n\nThe <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>online format</span>, paired with the small <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>engaging daily activities</span>, was a really great way for me to actively check-in and work towards my goals. The <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>weekly Zoom calls</span> not only helped me challenge myself and improve my speaking, it was also a really nice way to <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>connect with others</span> who were in a similar situation to me.\n\nAliona has many years experience teaching languages and her <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>passion and innovative methods</span> really shone through and <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>motivated me to improve</span>! I don't think my German Learning Journey will ever be over, but I am grateful to the Einfach Sprechen community for its contribution towards supporting me along the way."
      },
      {
        name: "Nadine",
        level: "B1",
        rating: 5,
        title: "Cool and Unorthodox Learning Method",
        message: "It's a <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>cool and unorthodox way</span> to learn languages. My level is B1, and even though I didn't always understand everything other participants said, I still <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>felt comfortable</span> because the teacher explained things in a way that made everything clear.\n\nShe was very <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>supportive</span>, and the topics we discussed were really <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>interesting and much different from the textbook ones</span>. I also loved the presentations. The information was <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>structured like a mind map</span> and we moved from one part to another, tying everything together at the end.\n\nIt helps to <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>remember what I learned</span> from the lesson afterwards."
      },
      {
        name: "Marina",
        level: "C1",
        rating: 5,
        title: "Genau Das, Was Der Name Verspricht",
        message: "Einfach Sprechen bietet <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>genau das an, was der Name verspricht</span>. Ich habe genug Grammatik bei Deutschkursen und mit Büchern gelernt, aber in diesem Kurs übt man eigentlich den wichtigsten Aspekt, nämlich <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>die Praxis</span>.\n\nDie Aufgaben während der Woche sind so aufgebaut, das man diese <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>einfach und schnell am Handy</span> während einer Busfahrt oder in einer Schlange bearbeiten kann. Durch die Bearbeitung der Aufgaben lernt man die <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>Vokabeln und Phrasen zum Thema</span> und sammelt auch Ideen für die Diskussion.\n\nIch finde dieses Format <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>perfekt für die Verbesserung meiner Sprachkompetenz</span> indem ich <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>jeden Tag wenige Minuten</span> damit verbringe und am Ende der Woche meinen <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>neu erlernten Wortschatz anwenden</span> kann."
      }
    ],
    en: [
      {
        name: "Karly",
        level: "B2-C1",
        rating: 5,
        title: "Perfect for Continuing My German Journey",
        message: "Einfach Sprechen was such an <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>easy and effective way</span> for me to continue on my German Learning Journey. It can be really hard to make the time to go to courses, especially once you reach a certain level where <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>actively using the language</span> becomes the foundational block towards improvement!\n\nThe <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>online format</span>, paired with the small <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>engaging daily activities</span>, was a really great way for me to actively check-in and work towards my goals. The <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>weekly Zoom calls</span> not only helped me challenge myself and improve my speaking, it was also a really nice way to <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>connect with others</span> who were in a similar situation to me.\n\nAliona has many years experience teaching languages and her <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>passion and innovative methods</span> really shone through and <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>motivated me to improve</span>! I don't think my German Learning Journey will ever be over, but I am grateful to the Einfach Sprechen community for its contribution towards supporting me along the way."
      },
      {
        name: "Nadine",
        level: "B1",
        rating: 5,
        title: "Cool and Unorthodox Learning Method",
        message: "It's a <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>cool and unorthodox way</span> to learn languages. My level is B1, and even though I didn't always understand everything other participants said, I still <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>felt comfortable</span> because the teacher explained things in a way that made everything clear.\n\nShe was very <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>supportive</span>, and the topics we discussed were really <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>interesting and much different from the textbook ones</span>. I also loved the presentations. The information was <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>structured like a mind map</span> and we moved from one part to another, tying everything together at the end.\n\nIt helps to <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>remember what I learned</span> from the lesson afterwards."
      },
      {
        name: "Sarah",
        level: "B2",
        rating: 5,
        title: "Exactly What I Needed",
        message: "Einfach Sprechen offers <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>exactly what the name promises</span> - simple speaking practice! I had learned enough grammar in German courses and with books, but in this course you actually practice the most important aspect: <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>real conversation</span>.\n\nThe weekly tasks are designed so that you can <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>easily and quickly complete them on your phone</span> during a bus ride or while waiting in line. By completing the tasks, you learn the <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>vocabulary and phrases for the topic</span> and also collect ideas for the discussion.\n\nI find this format <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>perfect for improving my language skills</span> by spending <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>just a few minutes each day</span> and being able to <span class='bg-pastel-lila/30 px-1 py-0.5 rounded text-lila-dark font-medium'>apply my newly learned vocabulary</span> at the end of the week."
      }
    ]
  };

  const currentTestimonials = testimonials[language];

  const nextTestimonial = () => {
    if (!isDragging) {
      setCurrentIndex((prevIndex) => 
        prevIndex === currentTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevTestimonial = () => {
    if (!isDragging) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? currentTestimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const goToSlide = (index: number) => {
    if (!isDragging) {
      setCurrentIndex(index);
    }
  };

  const handleDrag = (event: any, info: PanInfo) => {
    setDragOffset(info.offset.x);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);
    setDragOffset(0);
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? currentTestimonials.length - 1 : prevIndex - 1
      );
    } else if (info.offset.x < -threshold) {
      setCurrentIndex((prevIndex) => 
        prevIndex === currentTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const getPrevIndex = () => {
    return currentIndex === 0 ? currentTestimonials.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === currentTestimonials.length - 1 ? 0 : currentIndex + 1;
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const TestimonialCard = ({ 
    testimonial, 
    opacity = 1, 
    scale = 1, 
    zIndex = 1,
    translateX = 0,
    isDragging = false
  }: { 
    testimonial: typeof currentTestimonials[0], 
    opacity?: number, 
    scale?: number,
    zIndex?: number,
    translateX?: number,
    isDragging?: boolean
  }) => {
    return (
      <motion.div 
        className="relative flex-shrink-0 w-full px-2 md:px-4 min-h-[400px] md:min-h-[580px] flex items-center"
        style={{ 
          opacity, 
          zIndex 
        }}
        animate={{
          scale,
          x: translateX
        }}
        transition={{
          type: isDragging ? "spring" : "tween",
          duration: isDragging ? 0 : 0.4,
          ease: "easeOut"
        }}
      >
        {/* Cloud-style message bubble */}
        <div className="relative w-full">
          <div className="bg-white rounded-3xl shadow-lg p-4 md:p-6 lg:p-8 relative min-h-[400px] md:min-h-[580px] flex flex-col">
            {/* Cloud tail */}
            <div className="absolute -bottom-4 left-8 w-8 h-8">
              <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-white"></div>
              <div className="absolute -top-1 left-[2px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-gray-200"></div>
              <div className="absolute -top-[2px] left-1 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-white"></div>
            </div>

            {/* Star Rating */}
            <StarRating rating={testimonial.rating} />
            
            {/* Title */}
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 leading-tight">
              {testimonial.title}
            </h3>
            
            {/* Message - No longer scrollable, full content shown */}
            <div className="flex-1 mb-4 md:mb-6 pr-2 relative">
              {/* Opening Quote Mark */}
              <div className="absolute -top-1 md:-top-2 -left-1 text-4xl md:text-6xl text-gray-700 font-serif leading-none select-none">
                "
              </div>
              
              <div className="text-gray-700 leading-relaxed text-xs md:text-sm lg:text-base pl-6 md:pl-8 pt-3 md:pt-4">
                {testimonial.message.split('\n\n').map((paragraph, index) => (
                  <p 
                    key={index} 
                    className={index > 0 ? 'mt-3 md:mt-4' : ''}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
              
              {/* Closing Quote Mark */}
              <div className="flex justify-end">
                <div className="text-4xl md:text-6xl text-gray-700 font-serif leading-none select-none -mt-2 md:-mt-4 -mr-1">
                  "
                </div>
              </div>
            </div>
            
            {/* Author info - Fixed at bottom */}
            <div className="flex items-center gap-3 md:gap-4 mt-auto">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-lila to-lila-dark rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg">
                {testimonial.name[0]}
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                <div className="text-xs md:text-sm text-gray-600">{t('common.languageLevel')}: {testimonial.level}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="feedback" className="section relative overflow-hidden bg-gradient-to-b from-pastel-lila/15 to-pastel-orange/10">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pastel-lila rounded-full filter blur-3xl opacity-20 -translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-pastel-orange rounded-full filter blur-3xl opacity-18 translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute top-2/3 left-1/2 w-[180px] h-[180px] bg-orange-light rounded-full filter blur-2xl opacity-12 -translate-x-1/2"></div>
        
        {/* Decorative squared elements */}
        <div className="absolute top-1/4 right-1/8 w-11 h-11 bg-pastel-purple rounded-lg rotate-35 animate-float opacity-55"></div>
        <div className="absolute bottom-1/3 left-1/5 w-14 h-14 bg-pastel-green rounded-lg rotate-20 animate-float opacity-65"></div>
        <div className="absolute top-1/2 right-1/3 w-9 h-9 bg-pastel-pink rounded-lg rotate-60 animate-float opacity-70"></div>
        <div className="absolute bottom-1/5 right-2/3 w-12 h-12 bg-pastel-blue rounded-lg rotate-10 animate-float opacity-50"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('feedback.title')}</h2>
          <p className="section-subtitle">
            {t('feedback.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Swipeable Carousel with Adjacent Cards */}
          <div className="relative overflow-visible min-h-[500px] md:min-h-[700px]">
            {/* Main Carousel Container */}
            <motion.div
              className="flex items-center justify-center relative min-h-[500px] md:min-h-[700px] w-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => setIsDragging(true)}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              whileDrag={{ cursor: 'grabbing' }}
            >
              {/* All Cards Container - Creates continuous carousel effect */}
              <div className="flex w-full min-h-[500px] md:min-h-[700px] relative">
                {/* Previous Card - Left Side (Faded) */}
                <div className="absolute left-0 top-0 w-full min-h-[500px] md:min-h-[700px] pointer-events-none hidden md:block">
                  <div className="transform -translate-x-3/4">
                    <TestimonialCard 
                      testimonial={currentTestimonials[getPrevIndex()]} 
                      opacity={0.3}
                      scale={0.85}
                      zIndex={1}
                      translateX={dragOffset * 0.3}
                      isDragging={isDragging}
                    />
                  </div>
                </div>

                {/* Current Card - Center (Fully Visible) */}
                <div className="w-full max-w-2xl mx-auto relative z-10">
                  <motion.div
                    key={`current-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TestimonialCard 
                      testimonial={currentTestimonials[currentIndex]} 
                      opacity={1}
                      scale={1}
                      zIndex={10}
                      translateX={dragOffset}
                      isDragging={isDragging}
                    />
                  </motion.div>
                </div>

                {/* Next Card - Right Side (Faded) */}
                <div className="absolute right-0 top-0 w-full min-h-[500px] md:min-h-[700px] pointer-events-none hidden md:block">
                  <div className="transform translate-x-3/4">
                    <TestimonialCard 
                      testimonial={currentTestimonials[getNextIndex()]} 
                      opacity={0.3}
                      scale={0.85}
                      zIndex={1}
                      translateX={dragOffset * 0.3}
                      isDragging={isDragging}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows - Positioned outside content area */}
            <div className="hidden md:flex justify-between items-center absolute top-1/2 transform -translate-y-1/2 w-full pointer-events-none z-5">
              <button
                onClick={prevTestimonial}
                disabled={isDragging}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-lila hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 hover:scale-110 pointer-events-auto -ml-6"
                aria-label="Vorheriges Feedback"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                disabled={isDragging}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-lila hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 hover:scale-110 pointer-events-auto -mr-6"
                aria-label="Nächstes Feedback"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden text-center mt-4 mb-2">
            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              <span>👈</span>
              <span>{t('feedback.mobileHint')}</span>
              <span>👉</span>
            </p>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {currentTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-lila scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Zu Feedback ${index + 1} wechseln`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-12 items-center">
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
              {t('feedback.cta')}
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

export default Feedback;
