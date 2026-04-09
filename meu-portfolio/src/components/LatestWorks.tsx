import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './LatestWorks.css';

const projects = [
  { id: 1, title: 'Dan Koe',      subtitle: 'Youtuber with +1 million subscribers', videoId: 'M7TQ0yaLtZ8' },
  { id: 2, title: 'Erick',        subtitle: 'Youtuber and Finance Expert', videoId: 'bQXFMHyAc-Y' },
  { id: 3, title: 'Jimmy Reilly', subtitle: 'Entrepreneur and Sales Expert', videoId: 'ccO1hOlW4ck' },
];

function ProjectCard({ project, setActiveId }: { project: any, setActiveId: (id: number) => void }) {
  // Configurado para -50% top e bottom, o que significa que ativará apenas
  // quando passar exatamente na linha vertical central do monitor
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  const videoRef = useRef<HTMLIFrameElement>(null);
  const isVideoInView = useInView(videoRef, { amount: 0.3 }); // Toca quando 30% visível

  useEffect(() => {
    if (isInView) {
      setActiveId(project.id);
    }
  }, [isInView, project.id, setActiveId]);

  useEffect(() => {
    if (!videoRef.current || !videoRef.current.contentWindow) return;
    if (isVideoInView) {
      videoRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    } else {
      videoRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  }, [isVideoInView]);

  return (
    <div className="lw-project-section" ref={ref} id={`project-${project.id}`}>
      <div className="lw-card">
        <div className="lw-image-wrapper">
          <iframe
            ref={videoRef}
            className="lw-video"
            src={`https://www.youtube-nocookie.com/embed/${project.videoId}?rel=0&modestbranding=1&controls=1&enablejsapi=1&mute=1`}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

      </div>
    </div>
  );
}

export default function LatestWorks() {
  const [activeId, setActiveId] = useState(1);
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
    <section className="latest-works" id="work">
      {/* SECTION TITLE — Curtain Reveal */}
      <h2 className="lw-section-title" ref={titleRef}>
        {['Selected', 'Work'].map((word, i) => (
          <span key={word} className="lw-title-word-wrapper">
            <motion.span
              className="lw-title-word"
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
      {/* LEFT + RIGHT SPLIT */}
      <div className="lw-split">
        {/* LEFT COLUMN: Sticky Navigation */}
        <div className="lw-sidebar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lw-background-number"
            >
              {activeId < 10 ? `0${activeId}.` : `${activeId}.`}
            </motion.div>
          </AnimatePresence>

          <div className="lw-nav">
            <div className="lw-nav-title">Selected Work</div>
            {projects.map(p => (
              <div key={p.id} className={`lw-nav-item ${activeId === p.id ? 'active' : ''}`}>
                {activeId === p.id ? (
                  <motion.span 
                    layoutId="active-dash" 
                    className="lw-dash" 
                    transition={{ type: "spring", stiffness: 300, damping: 30 }} 
                  />
                ) : (
                  <span className="lw-dash" />
                )}
                {p.title}
              </div>
            ))}
          </div>
          
          {/* INFORMAÇÕES ATIVAS NO INFERIOR INFERIOR ESQUERDO */}
          <div className="lw-active-details">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h3 className="lw-active-title">
                  {projects.find(p => p.id === activeId)?.title}
                </h3>
                <p className="lw-active-subtitle">
                  {projects.find(p => p.id === activeId)?.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Cards */}
        <div className="lw-content">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} setActiveId={setActiveId} />
          ))}
        </div>
      </div>
    </section>
  );
}
