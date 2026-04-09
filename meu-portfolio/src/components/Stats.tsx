import React, { useRef } from 'react';
import { motion, useSpring, useTransform, useScroll, useMotionValueEvent } from 'framer-motion';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  parallaxSpeed?: number;
}

const StatItem: React.FC<StatItemProps> = ({ 
  value, 
  suffix, 
  label, 
  decimals = 0,
  parallaxSpeed = 1 
}) => {
  const ref = useRef(null);
  
  const springValue = useSpring(0, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  const displayValue = useTransform(springValue, (current) => 
    current.toFixed(decimals).replace('.', ',')
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.01) {
      springValue.set(value);
    } else {
      springValue.set(0);
    }
  });

  const rawY = useTransform(scrollYProgress, [0, 0.2], [-180 * parallaxSpeed, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const rawBlur = useTransform(scrollYProgress, [0, 0.2], [10, 0]);

  const springConfig = { stiffness: 200, damping: 45, restDelta: 0.001 };
  const y = useSpring(rawY, springConfig);
  const opacity = useSpring(rawOpacity, springConfig);
  const blurValue = useSpring(rawBlur, springConfig);
  
  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.div 
      className="stat-item" 
      ref={ref}
      style={{ y, opacity, filter, position: 'relative' }}
    >
      <div className="stat-number-wrapper">
        <motion.span className="stat-number">{displayValue}</motion.span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};


const Stats: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        <StatItem value={5} suffix="+" label="YEARS OF EXPERIENCE" parallaxSpeed={0.8} />
        <StatItem value={600} suffix="+" label="VIDEOS EDITED" parallaxSpeed={1.1} />
        <StatItem value={100} suffix="+" label="HAPPY CLIENTS" parallaxSpeed={1.4} />
        <StatItem value={1.5} suffix="B+" label="VISUALIZATIONS" decimals={1} parallaxSpeed={1.7} />
      </div>
    </section>
  );
};

export default Stats;
