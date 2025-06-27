
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentPhase(1), 1000);
    const timer2 = setTimeout(() => setCurrentPhase(2), 2000);
    const timer3 = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Pan-African Flag Animation */}
      <div className="relative w-64 h-40 rounded-lg overflow-hidden shadow-2xl">
        <motion.div
          className="absolute top-0 left-0 w-full h-1/3 bg-red-600"
          initial={{ x: '-100%' }}
          animate={{ x: currentPhase >= 0 ? '0%' : '-100%' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute top-1/3 left-0 w-full h-1/3 bg-black"
          initial={{ x: '-100%' }}
          animate={{ x: currentPhase >= 1 ? '0%' : '-100%' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1/3 bg-yellow-500"
          initial={{ x: '-100%' }}
          animate={{ x: currentPhase >= 2 ? '0%' : '-100%' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        />
      </div>

      {/* App Name Animation */}
      <motion.div
        className="absolute bottom-32 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: currentPhase >= 1 ? 1 : 0, y: currentPhase >= 1 ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          Vuka<span className="text-yellow-500">Africa</span>
        </h1>
        <p className="text-red-500 font-medium">Awakening the Continent</p>
      </motion.div>

      {/* Loading Animation */}
      <motion.div
        className="absolute bottom-16 flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: currentPhase >= 2 ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-yellow-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SplashScreen;
