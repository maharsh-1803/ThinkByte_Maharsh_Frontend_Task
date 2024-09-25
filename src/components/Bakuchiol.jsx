import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Bakuchiol = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document
        .getElementById("Bakuchiol")
        .getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="Bakuchiol"
      className="flex items-center justify-between p-8 bg-[#fef7ed] h-screen"
    >
      
      <div className="w-56 h-56 rounded-full bg-gradient-to-br from-[#e27d60] to-[#f0a07e] flex items-center justify-center">
        <span className="text-white text-center font-bold text-lg">
        Bakuchiol
        </span>
      </div>

      <motion.div
        className="w-[75vw] px-4 overflow-hidden"
        initial={{ x: "100vw", opacity: 0 }} 
        animate={{ x: isVisible ? "0vw" : "-10vw", opacity: isVisible ? 1 : 0 }} 
        transition={{ type: "spring", stiffness: 50, damping: 20 }} 
      >
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-[#e27d60] font-light">
        Bakuchiol
        </h1>
        <p className="mt-2 text-xl md:text-4xl lg:text-5xl text-gray-500 font-extralight">
        A plant-based gentle alternative to retinol—smooths fine lines, evens out skin texture, and enhances firmness without the sensitivity.
        </p>
      </motion.div>
    </div>
  );
}

export default Bakuchiol