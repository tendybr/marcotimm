import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  const skills = [
    { name: 'Premiere', height: '90%' },
    { name: 'Photoshop', height: '75%' },
    { name: 'Storytelling', height: '95%' },
    { name: 'After Effects', height: '100%', highlight: true },
    { name: 'Motion Graphics', height: '100%', highlight: true },
    { name: 'Color Grading', height: '85%' }
  ];

  // Variantes para Animao Cascata (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Atraso entre os cards
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, skewY: 2 },
    visible: { 
      opacity: 1, 
      y: 0, 
      skewY: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.33, 1, 0.68, 1] as any // Ease Out Quart: Super fluido
      }
    }
  };

  return (
    <section className="about-me-section">
      <div className="about-me-island">
        <motion.div 
          className="about-me-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          
          {/* Card Esquerdo - Preto com Efeito Pop-out */}
          <motion.div 
            className="about-card card-black"
            variants={cardVariants}
            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }} // Efeito 3D sutil no hover
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="card-header">
              <div className="header-left">
                <h3 className="card-top-title">Video Editor</h3>
                <p className="card-top-sub">Let's build something</p>
              </div>
              <div className="header-right">
                <img src="/logo2.png" alt="Logo" className="card-logo-top" />
              </div>
            </div>

            {/* Container da Foto com Pop-out */}
            <div className="portrait-container">
              <img src="/marco2.png" alt="Marco Timm" className="portrait-popout" />
            </div>

            <div className="card-footer">
              <div className="footer-quote-wrapper">
                <p className="footer-main-quote">
                  I help content creators <br /> turn viewers into fans.
                </p>
              </div>
              <div className="footer-bottom-row">
                <motion.a 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }}
                  className="get-in-touch-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
                <span className="footer-nav-label">Editopia</span>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita (Stack de Cards Brancos) */}
          <div className="about-right-col">
            
            {/* Card Superior - Bio */}
            <motion.div 
              className="about-card card-white bio-card"
              variants={cardVariants}
              whileHover={{ x: 5 }}
            >
              <h2 className="section-title">About Me</h2>
              <p className="section-description">
                I specialize in high-performance video editing primarily for the YouTube ecosystem. 
                My goal is simple: to combine cinematic storytelling with data-driven visuals 
                that keep audiences hooked.
              </p>
            </motion.div>

            {/* Card Inferior - Skills Modern Grid */}
            <motion.div 
              className="about-card card-white skills-card"
              variants={cardVariants}
              whileHover={{ x: 5 }}
            >
              <h2 className="section-title small">Expertise</h2>
              <div className="skills-grid">
                {skills.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    className="skill-row"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.height}</span>
                    </div>
                    <div className="skill-progress-bg">
                      <motion.div 
                        className={`skill-progress-bar ${skill.highlight ? 'highlight' : ''}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.height }}
                        viewport={{ once: false }}
                        transition={{ 
                          duration: 1.8, 
                          delay: 0.8 + (idx * 0.1), 
                          ease: [0.16, 1, 0.3, 1] 
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
