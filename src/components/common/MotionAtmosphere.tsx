import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { floatSlow, pulseSoft } from '../../utils/animations';

/** Ambient floating blobs + scroll progress bar for motion presence. */
const MotionAtmosphere: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <div className="atmosphere" aria-hidden="true">
        <motion.span className="atmosphere-blob blob-a" variants={floatSlow} animate="animate" />
        <motion.span
          className="atmosphere-blob blob-b"
          variants={pulseSoft}
          animate="animate"
        />
        <motion.span
          className="atmosphere-blob blob-c"
          animate={{
            y: [0, -20, 0],
            x: [0, -14, 0],
            rotate: [0, 8, 0],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </>
  );
};

export default MotionAtmosphere;
