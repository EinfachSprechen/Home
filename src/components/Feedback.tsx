import { motion, PanInfo } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const testimonials = [
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
  ];

  const nextTestimonial = () => {
    if (!isDragging) {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevTestimonial = () => {
    if (!isDragging) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
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
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    } else if (info.offset.x < -threshold) {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const getPrevIndex = () => {
    return currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
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
    testimonial: typeof testimonials[0], 
    opacity?: number, 
    scale?: number,
    zIndex?: number,
    translateX?: number,
    isDragging?: boolean
  }) => {
    return (
      <motion.div 
        className="relative flex-shrink-0 w-full px-4 h-full flex items-center"
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
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 relative min-h-[580px] flex flex-col">
            {/* Cloud tail */}
            <div className="absolute -bottom-4 left-8 w-8 h-8">
              <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-white"></div>
              <div className="absolute -top-1 left-[2px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-gray-200"></div>
              <div className="absolute -top-[2px] left-1 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-white"></div>
            </div>

            {/* Star Rating */}
            <StarRating rating={testimonial.rating} />
            
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
              {testimonial.title}
            </h3>
            
            {/* Message - No longer scrollable, full content shown */}
            <div className="flex-1 mb-6 pr-2 relative">
              {/* Opening Quote Mark */}
              <div className="absolute -top-2 -left-1 text-6xl text-gray-700 font-serif leading-none select-none">
                "
              </div>
              
              <div className="text-gray-700 leading-relaxed text-sm md:text-base pl-8 pt-4">
                {testimonial.message.split('\n\n').map((paragraph, index) => (
                  <p 
                    key={index} 
                    className={index > 0 ? 'mt-4' : ''}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
              
              {/* Closing Quote Mark */}
              <div className="flex justify-end">
                <div className="text-6xl text-gray-700 font-serif leading-none select-none -mt-4 -mr-1">
                  "
                </div>
              </div>
            </div>
            
            {/* Author info - Fixed at bottom */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 bg-gradient-to-br from-lila to-lila-dark rounded-full flex items-center justify-center text-white font-bold text-lg">
                {testimonial.name[0]}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">Sprachniveau: {testimonial.level}</div>
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
          <h2 className="section-title">Was unsere Community sagt</h2>
          <p className="section-subtitle">
            Echte Erfahrungen von Lernenden, die ihren Weg mit Einfach Sprechen gefunden haben.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Swipeable Carousel with Adjacent Cards */}
          <div className="relative overflow-hidden" style={{ height: '700px' }}>
            {/* Main Carousel Container */}
            <motion.div
              className="flex items-center justify-center relative h-full w-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => setIsDragging(true)}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              whileDrag={{ cursor: 'grabbing' }}
            >
              {/* All Cards Container - Creates continuous carousel effect */}
              <div className="flex w-full h-full relative">
                {/* Previous Card - Left Side (Faded) */}
                <div className="absolute left-0 top-0 w-full h-full pointer-events-none hidden md:block">
                  <div className="transform -translate-x-3/4">
                    <TestimonialCard 
                      testimonial={testimonials[getPrevIndex()]} 
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
                      testimonial={testimonials[currentIndex]} 
                      opacity={1}
                      scale={1}
                      zIndex={10}
                      translateX={dragOffset}
                      isDragging={isDragging}
                    />
                  </motion.div>
                </div>

                {/* Next Card - Right Side (Faded) */}
                <div className="absolute right-0 top-0 w-full h-full pointer-events-none hidden md:block">
                  <div className="transform translate-x-3/4">
                    <TestimonialCard 
                      testimonial={testimonials[getNextIndex()]} 
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

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center absolute top-1/2 transform -translate-y-1/2 w-full px-4 z-20">
              <button
                onClick={prevTestimonial}
                disabled={isDragging}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-lila hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 hover:scale-110"
                aria-label="Vorheriges Feedback"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                disabled={isDragging}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-lila hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 hover:scale-110"
                aria-label="Nächstes Feedback"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
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

export default Feedback;
