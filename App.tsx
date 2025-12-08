
import React, { useState, useEffect } from 'react';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Mission } from './components/Sections/Mission';
import { Projects } from './components/Sections/Projects';
import { Insights } from './components/Sections/Insights';
import { CTA } from './components/Sections/CTA';
import { Footer } from './components/Layout/Footer';
import { WhatsAppButton } from './components/UI/WhatsAppButton';
import { HexagonCircuitBackground } from './components/UI/HexagonCircuitBackground';
import { BlogPost } from './components/Pages/BlogPost';
import { Article } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Function to handle switching to Blog view
  const handleReadArticle = (article: Article) => {
    setActiveArticle(article);
    setCurrentView('blog');
  };

  // Function to handle switching back to Home view
  const handleBackToHome = () => {
    setCurrentView('home');
    setActiveArticle(null);
    // Optional: scroll back to insights
    setTimeout(() => {
        const insightsSection = document.getElementById('insights');
        if (insightsSection) {
            insightsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  // General navigation handler (passed to Header)
  const handleNavigate = (sectionId: string) => {
    if (currentView === 'blog') {
      setCurrentView('home');
      setActiveArticle(null);
      
      // Wait for re-render before scrolling
      setTimeout(() => {
        if (sectionId) {
            const elem = document.getElementById(sectionId);
            if (elem) {
                const headerOffset = 100;
                const elementPosition = elem.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Normal scrolling if already on home
      if (sectionId) {
          const elem = document.getElementById(sectionId);
          if (elem) {
              const headerOffset = 100;
              const elementPosition = elem.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          } else {
               window.scrollTo({ top: 0, behavior: 'smooth' });
          }
      } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-text-primary-dark font-sans selection:bg-primary selection:text-white relative">
        <HexagonCircuitBackground />
        <div className="relative z-10">
          <Header onNavigate={handleNavigate} currentView={currentView} />
          
          <main>
            {currentView === 'home' ? (
              <>
                <Hero onNavigate={handleNavigate} />
                <About />
                <Mission onNavigate={handleNavigate} />
                <Insights onReadArticle={handleReadArticle} />
                <Projects onNavigate={handleNavigate} />
                {/* Testimonials section removed as requested */}
                <CTA />
              </>
            ) : (
              activeArticle && <BlogPost article={activeArticle} onBack={handleBackToHome} />
            )}
          </main>
          
          <Footer />
          <WhatsAppButton />
        </div>
    </div>
  );
}

export default App;
