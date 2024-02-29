import React from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';

function Scroll() {
  const scrollY = useMotionValue(0);
  
  // Update scrollY value on scroll
  window.addEventListener('scroll', () => {
    scrollY.set(window.scrollY);
  });

  // Use useTransform to map the scrollY value to an opacity range
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <motion.div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'blue',
        opacity: opacity,
      }}
    />
  );
}

export default Scroll;
