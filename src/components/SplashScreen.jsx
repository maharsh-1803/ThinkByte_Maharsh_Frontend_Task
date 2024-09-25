import PropTypes from 'prop-types';
import image1 from '../assets/BackGround.png';

const SplashScreen = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-5 flex items-center justify-center bg-transparent bg-opacity-30">
      <div className="relative bg-opacity-0 p-8 rounded-lg max-w-5xl w-full h-3/4 flex items-center justify-center overflow-hidden">
        <img
          src={image1}
          alt="Product Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl font-bold">Unlock 25% off, Free Gift, and Free Shipping on Your Pre-order!</h2>
          <p className="mt-4 text-lg">Be among the first to experience our new Hyper C serum.</p>
          <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-yellow-600">
            Pre-Order Now
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-white text-3xl font-bold z-20"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

// Apply prop types validation
SplashScreen.propTypes = {
  onClose: PropTypes.func.isRequired,  // onClose should be a function and is required
};

export default SplashScreen;
