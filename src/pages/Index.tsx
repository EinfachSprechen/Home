import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Audience from '@/components/Audience';
import Team from '@/components/Team';
import Process from '@/components/Process';
import LanguageClub from '@/components/LanguageClub';
import Feedback from '@/components/Feedback';
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
        <div className="bg-pastel-lila/15">
          <Hero />
        </div>
        <div className="bg-pastel-orange/15">
          <Audience />
        </div>
        <div className="bg-pastel-pink/15">
          <Mission />
        </div>
        <div className="bg-pastel-blue/15">
          <Team />
        </div>
        <div className="bg-pastel-peach/15">
          <LanguageClub />
        </div>
        <div className="bg-pastel-blue/15">
          <Feedback />
        </div>
        <div className="bg-pastel-pink/15">
          <Pricing />
        </div>
        <div className="bg-pastel-pink/15">
          <Process />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
