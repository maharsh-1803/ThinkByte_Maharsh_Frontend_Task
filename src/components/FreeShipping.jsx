import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import image1 from '../assets/FreeShipping.png'; // Make sure the image path is correct

const FreeShipping = () => {
  // Control for animations
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Trigger animations when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation variants for the text and image
  const textVariants = {
    hidden: { opacity: 1, y: "0vh" }, // Start centered
    visible: { opacity: 1, y: "-43vh", transition: { duration: 1 } }, // Move up
  };

  const imageVariants = {
    hidden: { scale: 1 }, // Start at full size
    visible: { scale: 0.9, transition: { duration: 1 } }, // Scale down
  };

  return (
    <div ref={ref} className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Text in the center */}
      <motion.p
        initial="hidden"
        animate={controls}
        variants={textVariants}
        className="absolute text-5xl font-bold z-10 text-yellow-700" // Absolute positioning to overlay on image
      >
        Free Shipping
      </motion.p>
      
      {/* Image with motion */}
      <motion.img
        src={image1}
        alt="Free Shipping"
        className="object-cover w-[85vw] h-[85vh] rounded-[2rem]" // Ensure the image takes up 85% of the screen
        initial="hidden"
        animate={controls}
        variants={imageVariants}
      />
    </div>
  );
};

export default FreeShipping;
