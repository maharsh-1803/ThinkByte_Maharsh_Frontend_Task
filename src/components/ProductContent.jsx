import { motion, useViewportScroll, useTransform } from 'framer-motion';
import image14 from '../assets/iira-hero4.png'; 

const ProductContent = () => {
  const { scrollYProgress } = useViewportScroll(); 

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

  const radiusFar = 800;
  const radiusNear = 200;  
  const angleStep = (2 * Math.PI) / ingredientNames.length; 

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="flex justify-center items-center relative h-screen overflow-hidden bg-[#fef7ed]">
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
          className="w-[80vw] h-auto max-w-[400px] max-h-[500px] object-cover" 
        />
      </motion.div>

      <motion.div
        className="relative flex justify-center items-center"
        style={{ zIndex: 2 }}
        animate={{
          scale: scale, 
          rotate: rotate,
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

          const currentRadius = useTransform(scrollYProgress, [0, 1], [radiusNear, radiusFar]);

          const x = useTransform(currentRadius, r => r * Math.sin(angle));
          const y = useTransform(currentRadius, r => r * Math.cos(angle));

          const elementScale = useTransform(scrollYProgress, [0, 1], [1.2, 0.9]); 
          const elementOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]); 

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
                className="flex justify-center items-center w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-b from-[#e27d60] to-[#c89a87] rounded-full text-center text-white font-bold"
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
