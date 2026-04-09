import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import './LegalPage.css';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="legal-page-wrapper">
      {/* Background noise texture */}
      <div className="legal-bg-grid" />

      {/* Back button */}
      <motion.a
        href="/"
        className="legal-back-btn"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <ArrowLeft size={16} />
        Back to Portfolio
      </motion.a>

      <div className="legal-container">
        {/* Header */}
        <motion.div
          className="legal-header"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <p className="legal-label">Editopia · Legal</p>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-updated">Last updated: {lastUpdated}</p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="legal-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />

        {/* Content */}
        <motion.div
          className="legal-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {children}
        </motion.div>
      </div>

      {/* Footer bar */}
      <motion.div
        className="legal-footer-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span>© {new Date().getFullYear()} Editopia. All rights reserved.</span>
        <span>Los Angeles, CA 90001, United States</span>
      </motion.div>
    </div>
  );
}
