import React, { useEffect, useState, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load non-critical sections to reduce initial bundle size
const About = lazy(() => import('./components/About'));
const Science = lazy(() => import('./components/Science'));
const Benefits = lazy(() => import('./components/Benefits'));
const Pricing = lazy(() => import('./components/Pricing'));
const Motivation = lazy(() => import('./components/Motivation'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full py-24 flex items-center justify-center">
    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
  </div>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Optimized scroll detection using IntersectionObserver to prevent forced reflows
  useEffect(() => {
    const sentinel = document.getElementById('scroll-sentinel');
    if (!sentinel) return;

    const observer = new IntersectionObserver((entries) => {
      // If the sentinel (top pixel) is NOT intersecting, we are scrolled
      setIsScrolled(!entries[0].isIntersecting);
    }, { rootMargin: '-20px 0px 0px 0px' }); // Threshold of 20px

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  // Optimized smooth scroll setup using event delegation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          if (targetId) {
            const targetElement = document.getElementById(targetId);
            targetElement?.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="font-sans antialiased text-slate-800 selection:bg-indigo-500 selection:text-white relative">
      {/* Scroll Sentinel */}
      <div id="scroll-sentinel" className="absolute top-0 left-0 w-full h-px pointer-events-none opacity-0 z-[-1]" aria-hidden="true"></div>

      <Navbar isScrolled={isScrolled} />
      <main>
        {/* Critical path component - loaded immediately */}
        <Hero />
        
        {/* Defer loading of below-the-fold content */}
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Benefits />
          <Science />
          <Motivation />
          <Pricing />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;