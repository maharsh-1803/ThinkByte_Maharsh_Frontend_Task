import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SodiumAscorbylPhosphate = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // You can adjust this condition based on your requirements
    const handleScroll = () => {
      const rect = document.getElementById('sodium-asborbyl').getBoundingClientRect();
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
      id="sodium-asborbyl"
      className="flex items-center justify-between p-8 bg-[#fef7ed] h-screen"
    >
      {/* Circle Element */}
      <div className="w-56 h-56 rounded-full bg-gradient-to-br from-[#e27d60] to-[#f0a07e] flex items-center justify-center">
        <span className="text-white text-center font-bold text-lg">
          Sodium Ascorbyl Phosphate
        </span>
      </div>

      {/* Text with animation */}
      <motion.div
        className="w-[75vw] px-4 overflow-hidden"
        initial={{ x: '100vw', opacity: 0 }} // Starting position and opacity
        animate={{ x: isVisible ? '0vw' : '-10vw', opacity: isVisible ? 1 : 0 }} // Animate based on visibility
        transition={{ type: 'spring', stiffness: 50, damping: 20 }} // Smooth transition
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#e27d60] font-light">
          Sodium Ascorbyl Phosphate
        </h1>
        <p className="mt-2 text-xl md:text-4xl lg:text-5xl text-gray-500 font-extralight">
          A stable, gentle Vitamin C that brightens skin, boosts collagen, and protects against free radical damage—perfect for a radiant, healthy glow.
        </p>
      </motion.div>
    </div>
  );
};

export default SodiumAscorbylPhosphate;
