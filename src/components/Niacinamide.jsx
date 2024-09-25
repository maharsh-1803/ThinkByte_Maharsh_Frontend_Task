import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Niacinamide = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document.getElementById('niacinamide').getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="niacinamide"
      className="flex items-center justify-between p-8 bg-[#fef7ed] h-screen"
    >
      {/* Circle Element */}
      <motion.div
      className="w-56 h-56 rounded-full bg-gradient-to-br from-[#e27d60] to-[#f0a07e] flex items-center justify-center"
      initial={{ x: "50vw", y: "-10vh", opacity: 0 }}
      animate={{ x: "0vw", y: "2vh", opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <span className="text-white text-center font-bold text-lg">
        Niacinamide
      </span>
    </motion.div>

      {/* Text with animation */}
      <motion.div
        className="w-[75vw] px-4 overflow-hidden"
        initial={{ x: '100vw', opacity: 0 }} // Starting position and opacity
        animate={{ x: isVisible ? '0vw' : '-10vw', opacity: isVisible ? 1 : 0 }} // Animate based on visibility
        transition={{ type: 'spring', stiffness: 50, damping: 20 }} // Smooth transition
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#e27d60] font-light">
          Niacinamide
        </h1>
        <p className="mt-2 text-xl md:text-4xl lg:text-5xl text-gray-500 font-extralight">
          Vitamin B3 at its best—balances oil, refines pores, evens skin tone, and boosts barrier function for a smoother, clearer complexion suitable for all skin types.
        </p>
      </motion.div>
    </div>
  );
};

export default Niacinamide;
