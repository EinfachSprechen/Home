import React, { useEffect, useState } from 'react';

const ContinuousLine = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the audience section to start the line from there
      const audienceSection = document.getElementById('audience');
      if (!audienceSection) return;

      const audienceTop = audienceSection.offsetTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Calculate progress starting from the audience section
      const startPoint = audienceTop - windowHeight * 0.5;
      const totalScrollableDistance = documentHeight - windowHeight - startPoint;
      const currentScrollFromStart = Math.max(0, scrollTop - startPoint);
      
      const progress = Math.min(currentScrollFromStart / totalScrollableDistance, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the stroke-dasharray and stroke-dashoffset for the reveal effect
  const pathLength = 2000; // Approximate length of our path
  const strokeDasharray = pathLength;
  const strokeDashoffset = pathLength * (1 - scrollProgress);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 500"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ minHeight: '100vh' }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E5DEFF" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#9b87f5" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#FFDEE2" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FDE1D3" stopOpacity="0.6" />
          </linearGradient>
          
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Single continuous flowing line from top to bottom */}
        <path
          d="M 85 50
             Q 80 70, 75 90
             Q 70 110, 80 130
             Q 90 150, 75 170
             Q 60 190, 70 210
             Q 80 230, 65 250
             Q 50 270, 60 290
             Q 70 310, 55 330
             Q 40 350, 50 370
             Q 60 390, 45 410
             Q 30 430, 40 450
             Q 50 470, 35 490"
          stroke="url(#lineGradient)"
          strokeWidth="6"
          fill="none"
          filter="url(#glow)"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: 'stroke-dashoffset 0.1s ease-out'
          }}
        />
        
        {/* Subtle secondary line for depth */}
        <path
          d="M 20 60
             Q 25 80, 30 100
             Q 35 120, 25 140
             Q 15 160, 25 180
             Q 35 200, 20 220
             Q 5 240, 15 260
             Q 25 280, 10 300
             Q -5 320, 5 340
             Q 15 360, 0 380
             Q -15 400, -5 420
             Q 5 440, -10 460
             Q -25 480, -15 500"
          stroke="#E5DEFF"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray * 0.8}
          strokeDashoffset={strokeDashoffset * 0.8}
          style={{
            transition: 'stroke-dashoffset 0.1s ease-out'
          }}
        />

        {/* Animated dots that follow the line */}
        {scrollProgress > 0.1 && (
          <>
            <circle 
              r="3" 
              fill="#9b87f5" 
              opacity="0.8"
              transform={`translate(${85 - scrollProgress * 50}, ${50 + scrollProgress * 440})`}
            >
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
            </circle>
            
            {scrollProgress > 0.3 && (
              <circle 
                r="2" 
                fill="#FFDEE2" 
                opacity="0.6"
                transform={`translate(${20 - scrollProgress * 35}, ${60 + scrollProgress * 440})`}
              >
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
              </circle>
            )}
            
            {scrollProgress > 0.6 && (
              <circle 
                r="4" 
                fill="#FDE1D3" 
                opacity="0.5"
                transform={`translate(${50 - scrollProgress * 25}, ${100 + scrollProgress * 380})`}
              >
                <animate attributeName="r" values="4;2;4" dur="1.5s" repeatCount="indefinite" />
              </circle>
            )}
          </>
        )}
      </svg>
    </div>
  );
};

export default ContinuousLine;
