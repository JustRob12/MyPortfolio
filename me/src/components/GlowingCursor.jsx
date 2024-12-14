import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GlowingCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-4 h-4 rounded-full bg-orange-400 pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 800,
          damping: 20,
        }}
      />
      {/* Outer glow */}
      <motion.div
        className="fixed w-12 h-12 rounded-full pointer-events-none z-40 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, rgba(251, 146, 60, 0) 70%)',
        }}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.5,
          stiffness: 400,
          damping: 25,
        }}
      />
      {/* Trail effect */}
      <motion.div
        className="fixed w-24 h-24 rounded-full pointer-events-none z-30 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0) 70%)',
        }}
        animate={{
          x: mousePosition.x - 48,
          y: mousePosition.y - 48,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          mass: 1,
          stiffness: 200,
          damping: 30,
        }}
      />
    </>
  );
};

export default GlowingCursor;
