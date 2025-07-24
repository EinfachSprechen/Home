import { motion, PanInfo } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const testimonials = [
    {
      name: "Marina",
      level: "B2-C1",
      rating: 5,
      message: "Einfach Sprechen was such a easy and effective way for me to continue on my German Learning Journey. It can be really hard to make the time to go to courses, especially once you reach a certain level where actively using the language becomes the foundational block towards improvement! The online format, paired with the small engaging daily activities, was a really great way for me to actively check-in and work towards my goals. The weekly Zoom calls not only helped me challenge myself and improve my speaking, it was also a really nice way to connect with others who were in a similar situation to me. Aliona has many years experience teaching languages and her passion and innovative methods really shone through and motivated me to improve! I don't think my German Learning Journey will ever be over, but I am grateful to the Einfach Sprechen community for its contribution towards supporting me along the way."
    },
    {
      name: "Carly",
      level: "B1",
      rating: 5,
      message: "It's a cool and unorthodox way to learn languages. My level is B1, and even though I didn't always understand everything other participants said, I still felt comfortable because the teacher explained things in a way that made everything clear. She was very supportive, and the topics we discussed were really interesting and much different from the textbook ones. I also loved the presentations. The information was structured like a mind map and we moved from one part to another, tying everything together at the end. It helps to remember what I learned from the lesson afterwards."
    },
    {
      name: "Nadine",
      level: "B1+",
      rating: 5,
      message: "Einfach Sprechen bietet genau das an, was der Name verspricht. Ich habe genug Grammatik bei Deutschkursen und mit Büchern gelernt, aber in diesem Kurs übt man eigentlich den wichtigsten Aspekt, nämlich die Praxis. Die Aufgaben während der Woche sind so aufgebaut, das man diese einfach und schnell am Handy während einer Busfahrt oder in einer Schlange bearbeiten kann. Durch die Bearbeitung der Aufgaben lernt man die Vokabeln und Phrasen zum Thema und sammelt auch Ideen für die Diskussion. Ich finde dieses Format perfekt für die Verbesserung meiner Sprachkompetenz indem ich jeden Tag wenige Minuten damit verbringe und am Ende der Woche meinen neu erlernten Wortschatz anwenden kann."
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
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 relative h-[480px] flex flex-col">
            {/* Cloud tail */}
            <div className="absolute -bottom-4 left-8 w-8 h-8">
              <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-white"></div>
              <div className="absolute -top-1 left-[2px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-gray-200"></div>
              <div className="absolute -top-[2px] left-1 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-white"></div>
            </div>

            {/* Star Rating */}
            <StarRating rating={testimonial.rating} />
            
            {/* Message - Scrollable content area */}
            <div className="flex-1 overflow-y-auto mb-6 pr-2">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                "{testimonial.message}"
              </p>
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
          <div className="relative overflow-hidden" style={{ height: '600px' }}>
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
