import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

// Real brand symbols in monochrome
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const DiscordIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.666 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.006 14.006 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.23 10.23 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const EmailIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 8.67l8.5 4.9 8.5-4.9v6.83H1.5V8.67zM1 3.5c-.276 0-.5.224-.5.5v1.17l9 5.2 9-5.2V4c0-.276-.224-.5-.5-.5H1z" />
  </svg>
);

function MagneticButton({ children, className, href }: { children: React.ReactNode, className?: string, href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.2 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic pull: adjust multipliers for strength
    x.set((clientX - centerX) * 0.4);
    y.set((clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

export default function Footer({ scrollYProgress }: { scrollYProgress?: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!scrollYProgress || !videoRef.current) return;

    // Subscribe to scroll progress changes and control video playback
    const unsubscribe = scrollYProgress.on('change', (v: number) => {
      const video = videoRef.current;
      if (!video) return;
      // Footer becomes visible roughly after 85% of total scroll
      if (v > 0.85) {
        if (video.paused) video.play().catch(() => {});
      } else {
        if (!video.paused) video.pause();
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const contactLinks = [
    { name: 'Twitter', icon: <XIcon size={18} />, url: 'https://x.com/marcotimm00', color: '#ffffff' },
    { name: 'Email', icon: <EmailIcon size={18} />, url: 'mailto:marcotimm00@gmail.com', color: '#ffffff' },
    { name: 'Discord', icon: <DiscordIcon size={18} />, url: 'https://discord.gg/YAEMqjE6bP', color: '#ffffff' },
    { name: 'LinkedIn', icon: <LinkedinIcon size={18} />, url: 'https://www.linkedin.com/in/marco-timm-765b853aa/', color: '#ffffff' },
  ];

  return (
    <footer className="footer-section" id="contact">
      <video 
        ref={videoRef}
        className="footer-video-bg"
        muted 
        loop 
        playsInline
      >
        <source src="/background%20footer.mp4" type="video/mp4" />
      </video>
      <div className="container footer-content">
        <div className="footer-cta">
          <motion.h2 
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="footer-social-grid"
          >
            {contactLinks.map((link) => (
              <MagneticButton
                key={link.name}
                href={link.url}
                className="social-contact-btn"
              >
                <div className="btn-shimmer"></div>
                <span className="social-btn-icon">{link.icon}</span>
                <span className="social-btn-text">{link.name}</span>
                <ArrowUpRight size={16} className="social-btn-arrow" />
              </MagneticButton>
            ))}
          </motion.div>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">
            <h3>Editopia &copy; {new Date().getFullYear()}</h3>
            <p>Los Angeles, CA 90001, United States</p>
          </div>
          <div className="footer-links">
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cookie-policy">Cookie Policy</a>
            <a href="/legal">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
