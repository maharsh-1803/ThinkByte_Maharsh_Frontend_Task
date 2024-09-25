import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import image1 from "../assets/12_1.png";
import image2 from "../assets/12_2.png";
import image3 from '../assets/12_3.png';

const VitaminCSerum = () => {
  // Custom hook to control animation for each section
  const useSectionAnimation = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);

    return { ref, controls };
  };

  // Motion variants for the animation
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  // Using custom hook for each section
  const section1 = useSectionAnimation();
  const section2 = useSectionAnimation();
  const section3 = useSectionAnimation();

  return (
    <div className="p-10 bg-[#FFF5EB] font-sans">
      {/* Heading Section */}
      <motion.h1
        initial="hidden"
        animate={section1.controls}
        variants={variants}
        ref={section1.ref}
        className="text-[#EA8F46] text-3xl md:text-4xl text-center font-bold mb-5"
      >
        Why Choose Our Vitamin C Serum
      </motion.h1>

      {/* Description Section */}
      <motion.p
        initial="hidden"
        animate={section1.controls}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.2 },
          },
        }}
        ref={section1.ref}
        className="text-[#5C5C5C] leading-relaxed text-lg text-center max-w-3xl mx-auto mb-10"
      >
        At IIRA, we believe in skincare that's as pure as it is powerful. Our
        Vitamin C serum blends time-honored natural ingredients with
        cutting-edge science to enhance your skin's natural glow. Dive into a
        skincare experience where every drop nurtures, protects, and revitalizes.
      </motion.p>

      {/* Section 1: Image and Benefits */}
      <motion.div
        initial="hidden"
        animate={section1.controls}
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay: 0.4 },
          },
        }}
        ref={section1.ref}
        className="flex gap-5 mt-10 ml-5 mr-5"
      >
        <motion.img
          src={image1} // replace with your image path
          alt="Vitamin C Serum"
          className="w-[145rem] h-auto rounded-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <div className="flex flex-col gap-5 pl-8 mt-8">
          <motion.div
            initial="hidden"
            animate={section1.controls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.6 },
              },
            }}
            className="text-[#EA8F46] text-3xl font-semibold"
          >
            Targets Hyperpigmentation
          </motion.div>
          <motion.div
            initial="hidden"
            animate={section1.controls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.8 },
              },
            }}
            className="text-xl font-light"
          >
            Our Vitamin C Serum is specifically formulated to diminish dark
            spots and even out skin tone. With ingredients like Niacinamide and
            Alpha Arbutin, it effectively reduces hyperpigmentation, revealing a
            brighter, more radiant complexion.
          </motion.div>
        </div>
      </motion.div>

      {/* Section 2: Image on Right and Text on Left */}
      <motion.div
        initial="hidden"
        animate={section2.controls}
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay: 0.4 },
          },
        }}
        ref={section2.ref}
        className="flex gap-5 mt-10 ml-5 mr-5 justify-between"
      >
        <div className="flex flex-col gap-5 pr-8 mt-8">
          <motion.div
            initial="hidden"
            animate={section2.controls}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.6 },
              },
            }}
            className="text-[#EA8F46] text-3xl font-semibold"
          >
            Gentle Yet Potent Formula
          </motion.div>
          <motion.div
            initial="hidden"
            animate={section2.controls}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.8 },
              },
            }}
            className="text-xl font-light"
          >
            Crafted with Sodium Ascorbyl Phosphate, this serum delivers powerful
            antioxidant benefits without causing irritation. It effectively
            reduces dark spots while brightening, balancing, and rejuvenating
            the skin. Suitable for daily use on all skin types, including
            sensitive skin, it promotes a healthy, radiant complexion.
          </motion.div>
        </div>
        <motion.img
          src={image2} // replace with your image path
          alt="Vitamin C Serum"
          className="w-[145rem] h-auto rounded-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.div>

      {/* Section 3: Image and Benefits */}
      <motion.div
        initial="hidden"
        animate={section3.controls}
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay: 0.4 },
          },
        }}
        ref={section3.ref}
        className="flex gap-5 mt-10 ml-5 mr-5"
      >
        <motion.img
          src={image3} // replace with your image path
          alt="Vitamin C Serum"
          className="w-[145rem] h-auto rounded-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <div className="flex flex-col gap-5 pl-8 mt-8">
          <motion.div
            initial="hidden"
            animate={section3.controls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.6 },
              },
            }}
            className="text-[#EA8F46] text-3xl font-semibold"
          >
            Targets Hyperpigmentation
          </motion.div>
          <motion.div
            initial="hidden"
            animate={section3.controls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.8 },
              },
            }}
            className="text-xl font-light"
          >
            Our Vitamin C Serum is specifically formulated to diminish dark
            spots and even out skin tone. With ingredients like Niacinamide and
            Alpha Arbutin, it effectively reduces hyperpigmentation, revealing a
            brighter, more radiant complexion.
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default VitaminCSerum;
