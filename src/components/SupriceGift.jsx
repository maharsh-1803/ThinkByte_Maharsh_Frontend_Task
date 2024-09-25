import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import image1 from '../assets/SupriceGift.png'; 

const SupriceGift = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 1, y: "0vh" }, 
    visible: { opacity: 1, y: "-43vh", transition: { duration: 1 } }, 
  };

  const imageVariants = {
    hidden: { scale: 1 }, 
    visible: { scale: 0.9, transition: { duration: 1 } }, 
  };

  return (
    <div ref={ref} className="relative flex items-center justify-center h-screen overflow-hidden">
      <motion.p
        initial="hidden"
        animate={controls}
        variants={textVariants}
        className="absolute text-5xl font-bold z-10 text-yellow-700" 
      >
        Surprise Gift
      </motion.p>
    
      <motion.img
        src={image1}
        alt="Surprise Gift"
        className="object-cover w-[85vw] h-[85vh] rounded-[2rem]" 
        initial="hidden"
        animate={controls}
        variants={imageVariants}
      />
    </div>
  );
};

export default SupriceGift;
