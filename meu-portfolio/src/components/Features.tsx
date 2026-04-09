import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const shortVideos = [
  {
    id: 1,
    title: 'Short 1',
    videoId: 'k49DbNngVQs' 
  },
  {
    id: 2,
    title: 'Short 2',
    videoId: 'dfhp-jofApU'
  },
  {
    id: 3,
    title: 'Short 3',
    videoId: 'MUGExYt4N7M'
  }
];

export default function Features() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTitleVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="features-section" id="about">
      <div className="container">
        <div className="features-header">
          <h2 className="features-section-title" ref={titleRef}>
            {['Short', 'Content'].map((word, i) => (
              <span key={word} className="features-title-word-wrapper">
                <motion.span
                  className="features-title-word"
                  initial={{ y: '110%' }}
                  animate={titleVisible ? { y: '0%' } : {}}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.15,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>

        <div className="features-grid">
          {shortVideos.map((video, idx) => (
            <motion.div 
              key={video.id}
              className="feature-card short-card"
              initial={{ opacity: 0, scale: 0.85, y: 80 }} /* Nasce menor e mais de baixo para a animação ter impacto */
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }} /* Ocorre todas as vezes */
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
            >
              <div className="short-video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&loop=1&playlist=${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="short-video-element"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
