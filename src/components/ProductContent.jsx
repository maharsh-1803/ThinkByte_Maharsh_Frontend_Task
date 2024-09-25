import { motion, useViewportScroll, useTransform } from 'framer-motion';
import image14 from '../assets/iira-hero4.png'; // Adjust the image path as necessary

const ProductContent = () => {
  const { scrollYProgress } = useViewportScroll(); // Track scroll progress

  // Scale of the central image on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  const ingredientNames = [
    'Hyaluronic Acid',
    'Alpha Arbutin',
    'Niacinamide',
    'Sodium Ascorbyl Phosphate',
    'Vitamin E',
    'Rose Hip Seed Oil',
    'Tranexamic Acid',
    'Bakuchiol'
  ];

  const radiusFar = 600;  // Start far away when elements are off-screen
  const radiusNear = 160;  // Move closer when elements are in view
  const angleStep = (2 * Math.PI) / ingredientNames.length; // Angle step for even distribution

  // Rotate elements as they move
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="flex justify-center items-center relative h-screen overflow-hidden">
      {/* Product image in the center */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ position: 'absolute', zIndex: 10 }}
      >
        <motion.img
          src={image14}
          alt="Product"
          className="w-full h-auto max-w-[400px] max-h-[500px] object-cover"
        />
      </motion.div>

      {/* Circular layout for components */}
      <motion.div
        className="relative flex justify-center items-center"
        style={{ zIndex: 2 }}
        animate={{
          scale: scale, // Apply the scroll-based scaling
          rotate: rotate, // Apply rotation as elements move
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          ease: 'easeInOut',
        }}
      >
        {ingredientNames.map((name, index) => {
          const angle = index * angleStep;

          // Calculate the current radius based on scroll progress
          const currentRadius = useTransform(scrollYProgress, [0, 1], [radiusNear, radiusFar]);

          // Calculate the x and y positions in a circular fashion
          const x = useTransform(currentRadius, r => r * Math.sin(angle));
          const y = useTransform(currentRadius, r => r * Math.cos(angle));

          // Adjust the scale or opacity based on distance from center
          const elementScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]); // Slightly shrink as they move closer
          const elementOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]); // Opacity fades in

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                top: y,
                left: x,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <motion.div
                className="flex justify-center items-center w-32 h-32 bg-orange-400 rounded-full text-center text-white font-bold"
                style={{
                  scale: elementScale,
                  opacity: elementOpacity,
                }}
                transition={{ duration: 0.5 }}
              >
                {name}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProductContent;
