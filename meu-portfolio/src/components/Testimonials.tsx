import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, TrendingUp, DollarSign, Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Jason M. White',
    role: 'Youtuber',
    text: `"Marco always delivers way ahead of schedule. He took my raw footage and made a high-retention edit that really improved my average view duration."`
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Founder, TechFlow',
    text: `"The motion design is super fluid. Marco understood our brand's premium look right away and delivered polished videos that made our whole site look better."`
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Educational Creator',
    text: `"The storytelling is what stands out. Marco doesn't just cut clips, he finds a way to keep the audience interested from start to finish."`
  },
  {
    id: 4,
    name: 'Amanda Brooks',
    role: 'Creative Director, Peak',
    text: `"Great attention to detail. We needed a really fast turnaround for a social campaign and Marco delivered top-tier quality without missing a beat."`
  },
  {
    id: 5,
    name: 'Michael Thompson',
    role: 'Marketing Lead, Solace',
    text: `"We saw a big difference on the ads Marco edited. Our click-thru rate jumped by almost 25% because of the pacing and hooks he put in the first few seconds."`
  },
  {
    id: 6,
    name: 'Chris Miller',
    role: 'Startup CEO',
    text: `"I love that Marco is more like a partner. He suggested some edits that made our pitch video much more concise and impactful. Really professional guy."`
  },
  {
    id: 7,
    name: 'Jessica Lee',
    role: 'E-commerce Manager',
    text: `"Clean, modern and exactly on brand. The vertical videos he made for our latest product launch are some of our best performing ads so far."`
  },
  {
    id: 8,
    name: 'Robert Harris',
    role: 'Independent Filmmaker',
    text: `"Marco really gets rhythm and motion. His transitions feel natural and not forced, which is exactly why I keep coming back for all my edits."`
  }
];

const valueProps = [
  { id: 1, icon: <Eye size={22} strokeWidth={1.5} />, title: 'MORE VIEWS' },
  { id: 2, icon: <TrendingUp size={22} strokeWidth={1.5} />, title: 'BETTER RETENTION' },
  { id: 3, icon: <DollarSign size={22} strokeWidth={1.5} />, title: 'MORE REVENUE' }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play: Avança a cada 7 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials-section">
      <motion.div 
        className="testi-island"
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header Elegante */}
        <motion.div 
          className="testi-header"
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="testi-badge">
            <div className="stars-row">
              <Star size={12} fill="currentColor" strokeWidth={0} />
              <Star size={12} fill="currentColor" strokeWidth={0} />
              <Star size={12} fill="currentColor" strokeWidth={0} />
              <Star size={12} fill="currentColor" strokeWidth={0} />
              <Star size={12} fill="currentColor" strokeWidth={0} />
            </div>
            <span className="badge-text">5.0 / 5.0 RATING</span>
          </div>
          <h2 className="testi-main-title">Hear from our clients</h2>
        </motion.div>

        {/* Value Cards (Social Proof Rápido) */}
        <div className="value-cards-row">
          {valueProps.map((prop, idx) => (
            <motion.div 
              key={prop.id}
              className="value-card"
              initial={{ opacity: 0, y: 30, scale: 0.92, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3 + (idx * 0.12),
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <div className="value-icon-circle">{prop.icon}</div>
              <span className="value-text">{prop.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Card Pai Gigante - Carrossel de Depoimentos */}
        <motion.div 
          className="testi-master-card"
          initial={{ opacity: 0, y: 60, scale: 0.96, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="testi-quote-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="testi-content"
              >
                <div className="testi-text">
                  {testimonials[activeIndex].text}
                </div>
                
                <div className="testi-author-block">
                  <h4 className="author-name">{testimonials[activeIndex].name}</h4>
                  <span className="author-role">{testimonials[activeIndex].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navegação Dots */}
          <div className="testi-dots-nav">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                className={`testi-dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
