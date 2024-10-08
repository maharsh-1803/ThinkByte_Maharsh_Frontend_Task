import { motion } from "framer-motion";
import { useState } from "react";
import image1 from "../assets/Founder_Intro_1_1_264x342.png";
import image2 from "../assets/light-bulb-drawn-adhesive-note-card-paper-eyeglasses-white-background_1_264x342.png";
import image3 from "../assets/Realization_264x342.png";
import image4 from "../assets/side-view-woman-working-photography-studio_1_264x342.png";
import image5 from "../assets/111_264x342.png";

const OurStory = () => {
  const cardVariants = {
    hover: { scale: 0.6, transition: { duration: 0.3 } }, 
  };

  
  const [hoverData, setHoverData] = useState({ hover: false, x: 0, y: 0, content1: "", content2: "", image: "" });

  
  const handleMouseMove = (e, content1, content2, image) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverData({ hover: true, x, y, content1, content2, image });
  };

  const handleMouseLeave = () => {
    setHoverData({ hover: false, x: 0, y: 0, content1: "", content2: "", image: "" });
  };

  return (
    <div className="bg-[#fef7ed] p-8 relative">
      <h1 className="text-center text-[#e27d60] text-4xl font-bold mb-4">
        OUR STORY & MISSION
      </h1>
      <p className="text-center text-lg text-gray-700 mb-12">
        We believe in creating meaningful connections through innovation and
        purpose. Our journey started with a vision to inspire change, innovate
        solutions, and bring ideas to life.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12 mx-auto max-w-7xl">
        <motion.div
          className="text-center p-4 relative"
          onMouseMove={(e) => handleMouseMove(e, "A New Chapter Begins", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatibus maiores perferendis. At quod voluptatum doloribus odio fugit pariatur, quas veritatis dicta ullam iusto beatae quisquam asperiores laboriosam ut aliquam", image1)}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-[#e27d60] text-xl sm:text-2xl font-bold mb-1 mr-[11vw]">
            Inspiration
          </h2>
            <motion.img
              whileHover="hover"
              variants={cardVariants}
              src={image1}
              alt="Inspiration"
              className="rounded-b-full object-cover mb-2 mx-auto border-2 border-[#e27d60] p-3" 
            />

        </motion.div>

        <motion.div
    className="text-center p-4 relative"
    onMouseMove={(e) => handleMouseMove(e, "Creating the perfect Blend", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatibus maiores perferendis. At quod voluptatum doloribus odio fugit pariatur, quas veritatis dicta ullam iusto beatae quisquam asperiores laboriosam ut aliquam", image2)}
    onMouseLeave={handleMouseLeave}
  >
    <h2 className="text-[#e27d60] text-xl sm:text-2xl font-bold mb-1 mr-[11vw]">
      Innovation
    </h2>
    <motion.img
      whileHover="hover"
      variants={cardVariants}
      src={image2}
      alt="Innovation"
      className="rounded-b-full object-cover mb-2 mx-auto border-2 border-[#e27d60] p-3" 
    />
  </motion.div>

        <motion.div
          className="text-center p-4 relative"
          onMouseMove={(e) => handleMouseMove(e, "A Breakthrough", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatibus maiores perferendis. At quod voluptatum doloribus odio fugit pariatur, quas veritatis dicta ullam iusto beatae quisquam asperiores laboriosam ut aliquam", image3)}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-[#e27d60] text-xl sm:text-2xl font-bold mb-1 mr-[11vw]">
            Realization
          </h2>
            <motion.img
              whileHover="hover"
              variants={cardVariants}
              src={image3}
              alt="Inspiration"
              className="rounded-b-full object-cover mb-2 mx-auto border-2 border-[#e27d60] p-3" 
            />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-7xl">
        <motion.div
          className="text-center p-4 relative"
          onMouseMove={(e) => handleMouseMove(e, "Preparing to share with the world", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatibus maiores perferendis. At quod voluptatum doloribus odio fugit pariatur, quas veritatis dicta ullam iusto beatae quisquam asperiores laboriosam ut aliquam", image4)}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-[#e27d60] text-xl sm:text-2xl font-bold mb-1 mr-[2.5vw]">
            Launch Preparation
          </h2>
            <motion.img
              whileHover="hover"
              variants={cardVariants}
              src={image4}
              alt="Launch Preparation"
              className="rounded-b-full object-cover mb-2 mx-auto border-2 border-[#e27d60] p-3" 
            />
        </motion.div>

        <motion.div
          className="text-center p-4 relative"
          onMouseMove={(e) => handleMouseMove(e, "IIRA Comes to life", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatibus maiores perferendis. At quod voluptatum doloribus odio fugit pariatur, quas veritatis dicta ullam iusto beatae quisquam asperiores laboriosam ut aliquam", image5)}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-[#e27d60] text-xl sm:text-2xl font-bold mb-1 mr-[7.5vw]">
            Going Public
          </h2>
            <motion.img
              whileHover="hover"
              variants={cardVariants}
              src={image5}
              alt="Going Public"
              className="rounded-b-full object-cover mb-2 mx-auto border-2 border-[#e27d60] p-3" 
            />
        </motion.div>
      </div>

      {hoverData.hover && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.8 }} 
          transition={{ duration: 0.3 }} 
          style={{
            position: "absolute",
            top: `${hoverData.y + 200}px`,
            left: `${hoverData.x + 200}px`,
            pointerEvents: "none",
            background: "linear-gradient(135deg, rgba(255, 225, 187, 0.9), rgba(250, 237, 218, 0.9))", 
            color: "#000",
            padding: "16px", 
            borderRadius: "8px",
            zIndex: 10,
            display: 'flex',  
            alignItems: 'center', 
            gap: '8px',  
          }}
          className="w-[60vw] h-auto opacity-2"
        >
          <img src={hoverData.image} alt="" className="m-2 w-1/4 h-auto" /> 
          <div className="p-6">
            <h3 className="font-bold text-2xl" style={{ color: '#D18C89' }}>{hoverData.content1}</h3>
            <p style={{ color: "#D18C89" }}>{hoverData.content2}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default OurStory;
