import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './ProjectGrid.css';

const projects = [
  {
    id: 1,
    title: 'Nexus Platform Redesign',
    client: 'Fintech Solutions',
    image: '/images/meG1yXz9jqwhzC1XCm7WP0Ae9Zc.jpg',
    colSpan: 'full'
  },
  {
    id: 2,
    title: 'Aura Skincare Shop',
    client: 'Ecommerce',
    image: '/images/cWKPopujkJqclchyOL1bYOiZDs.jpg',
    colSpan: 'half'
  },
  {
    id: 3,
    title: 'Vanguard App',
    client: 'Mobile AI',
    image: '/images/stTKqZkueiEGiXkUexOWo9RjNnY.jpg',
    colSpan: 'half'
  },
  {
    id: 4,
    title: 'Echo Architectural Portfolio',
    client: 'Creative Studio',
    image: '/images/TQUaM9GTresksymLH16ncQaPo.jpg',
    colSpan: 'full'
  }
];

function ProjectCard({ project, index } : { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'] // Anima do momento que entra até o momento que sai da tela
  });

  // O parallax faz a imagem mover do topo (-15%) para a base (15%) conforme o scroll passa
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  const isFull = project.colSpan === 'full';

  return (
    <motion.div 
      className={`project-card ${isFull ? 'col-full' : 'col-half'}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
    >
      <div className="project-image-wrapper" ref={ref}>
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="project-image"
          style={{ y, scale: 1.15 }} // Scaled up lightly so Parallax has room without clipping
        />
        <div className="project-overlay">
          <div className="overlay-content">
            <span className="view-case">View Case <ArrowUpRight size={18} /></span>
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.client}</p>
      </div>
    </motion.div>
  );
}

export default function ProjectGrid() {
  return (
    <section className="projects-section" id="work">
      <div className="container">
        
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Selected Works
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="badge-text"
          >
            2024—2026
          </motion.p>
        </div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <ProjectCard key={proj.id} project={proj} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
