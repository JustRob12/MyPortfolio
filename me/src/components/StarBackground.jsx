import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 1
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <>
      {/* Background dots with fade-in animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></motion.div>

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

export default StarBackground;
