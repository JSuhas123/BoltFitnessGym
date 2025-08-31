import React from 'react';
import { motion } from 'framer-motion';

const FloatingDumbbell = ({ className = "", delay = 0 }: { className?: string, delay?: number }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"/>
      </svg>
    </div>
  </motion.div>
);

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingDumbbell className="top-20 left-10" delay={0} />
      <FloatingDumbbell className="top-40 right-20" delay={1} />
      <FloatingDumbbell className="bottom-32 left-1/4" delay={2} />
      <FloatingDumbbell className="bottom-20 right-10" delay={0.5} />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-8 h-8 bg-yellow-400 opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-yellow-500 rounded-full opacity-30"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default FloatingElements;