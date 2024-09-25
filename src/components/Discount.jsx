import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import image1 from '../assets/Blue_discount.png';

const Discount = () => {
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

  // Variants for animation
  const variants = {
    hidden: { opacity: 0, y: "20vh" }, // Start hidden and slightly below
    visible: { opacity: 1, y: "-2vh", transition: { duration: 1 } }, // Fade in and move to position
  };

  return (
    <div ref={ref} className="flex flex-col items-center mt-10">
      {/* Special Offer Text */}
      <motion.p
        initial={{ opacity: 1, y: 0 }} // Keep visible initially
        animate={controls}
        variants={variants}
        className="absolute text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 z-10 text-yellow-700" // Responsive text sizes
      >
        Special Offer
      </motion.p>
      {/* Background Image Container */}
      <motion.div
        initial={{ backgroundColor: '#B2EBF2', opacity: 1 }} // Initial background color visible
        animate={controls}
        variants={{
          hidden: { opacity: 1, width: '90vw', height: '75vh' }, // Adjusted for smaller screens
          visible: { opacity: 1, width: '80vw', height: '65vh', transition: { duration: 1 } }, // Adjusted for smaller screens
        }}
        className="relative overflow-hidden rounded-[2rem] mt-10"
      >
        <motion.img
          src={image1}
          alt="Discount Offer"
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }} // Start image hidden
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } },
          }}
        />
      </motion.div>
    </div>
  );
};

export default Discount;
    