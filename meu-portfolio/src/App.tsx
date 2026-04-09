import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, type Variants } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import LatestWorks from './components/LatestWorks';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Typewriter from './components/Typewriter';
import Stats from './components/Stats';
import './index.css';

import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Animation variants for staggering
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 100 }, // Card começa lá embaixo
    visible: {
      opacity: 1,
      y: 0, // Card sobe majestosamente
      transition: {
        duration: 1.6, // Mais lento e cinematográfico (era 1.2)
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15, // Um pouco mais de tempo entre cada item
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2, // Um pouco mais lento (era 0.9)
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const navbarVariants: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } // Mais ágil para não "arrastar"
    }
  };

  useEffect(() => {
    // Play video only when loading finishes
    if (!isLoading && videoRef.current) {
       const playVideo = setTimeout(() => {
         videoRef.current?.play().catch((e: any) => console.log("Autoplay prevented", e));
       }, 500); // Sincronizado com a subida do conteúdo
       return () => clearTimeout(playVideo);
    }
  }, [isLoading]);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Prevent scrolling while loading
    if (isLoading) {
      lenis.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis.start();
      document.body.style.overflow = 'unset';
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // Wait 1.8 seconds (mais rápido) before sliding up

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  // Spotlight mouse effect
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      
      // Esconder o brilho ao passar por elementos interativos pare não roubar o estilo deles
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"]')) {
        document.documentElement.style.setProperty('--spotlight-opacity', '0');
      } else {
        document.documentElement.style.setProperty('--spotlight-opacity', '1');
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      <div className="noise-overlay"></div>
      
      {/* ProgressBar for Scroll */}
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />

      {/* Navbar (Placeholder) */}
      <motion.header 
        className="navbar"
        variants={navbarVariants}
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
      >
        <div className="container nav-content">
          <Typewriter 
            phrases={["Video Editor", "Motion Designer", "Storyteller", "Creative Director"]}
            typingSpeed={100}
            erasingSpeed={50}
            pauseTime={2000}
          />
          <div 
            className="nav-logo-container" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
          >
            <img src="/logo.png" alt="Logo" className="nav-logo-img" />
          </div>
        </div>
      </motion.header>

      {/* Sombras de desfoque (Immersion Blur) no topo e no fundo */}
      <div className="scroll-blur-top" />
      <div className="scroll-blur-bottom" />

      <main className="main-content">
        <section className="hero-section">
          <motion.div 
            className="hero-card"
            variants={containerVariants}
            initial="hidden"
            animate={isLoading ? "hidden" : "visible"}
          >
            {/* Background Image / Video wrapper could go here */}
            
            <div className="hero-card-content new-hero-layout">
              <div className="hero-left-column">
                <motion.div className="hero-portrait-bg" variants={itemVariants}>
                  <img src="/marco.png" alt="Marco Timm" className="hero-portrait-img" />
                  <div className="hero-portrait-gradient"></div>
                </motion.div>
              </div>
              
              <div className="hero-right-column">
                <div className="hero-text-block">
                  <motion.h3 className="hero-greeting-text" variants={itemVariants}>Hello, I'm</motion.h3>
                  <motion.h1 className="hero-name-text" variants={itemVariants}>Marco Timm</motion.h1>
                </div>
                
                <motion.div className="hero-video-block" variants={itemVariants}>
                  <video 
                    ref={videoRef}
                    src="/CERTOOOO.mp4" 
                    loop 
                    muted 
                    playsInline 
                    className="hero-video-element"
                  />
                </motion.div>

                <motion.div className="hero-action-block" variants={itemVariants}>
                  <button className="premium-btn-primary" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                     <span className="btn-text">View Portfolio</span>
                     <span className="btn-icon-circular">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                         <line x1="5" y1="12" x2="19" y2="12"></line>
                         <polyline points="12 5 19 12 12 19"></polyline>
                       </svg>
                     </span>
                  </button>
                  <button className="premium-btn-outline" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                     Get In Touch
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        <Stats />

        <LatestWorks />
        
        <Features />

        <Testimonials />

        <About />

      </main>

      <Footer scrollYProgress={scrollYProgress} />
    </>
  );
}

export default App;
