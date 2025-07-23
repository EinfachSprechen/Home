import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Audience from '@/components/Audience';
import Team from '@/components/Team';
import Process from '@/components/Process';
import LanguageClub from '@/components/LanguageClub';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import PromoBanner from '@/components/PromoBanner';

const Index = () => {
  useEffect(() => {
    // Lazy load images for better performance
    const lazyImages = document.querySelectorAll('img');
    const config = {
      rootMargin: '0px 0px 50px 0px',
      threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, self) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.classList.add('fade-in');
          }
          self.unobserve(entry.target);
        }
      });
    }, config);

    lazyImages.forEach(img => {
      observer.observe(img);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PromoBanner />
      <main>
        <Hero />
        <Audience />
        <Mission />        
        <Team />
        <Process />
        <LanguageClub />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
