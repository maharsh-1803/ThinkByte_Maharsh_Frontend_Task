import './App.css';
import { useEffect, useState } from 'react';  
import AlphaArbutin from './components/AlphaArbutin';
import Bakuchiol from './components/Bakuchiol';
import Discount from './components/Discount';
import DontMissOut from './components/DontMissOut';
import FreeShipping from './components/FreeShipping';
import HyaluronicAcid from './components/HyaluronicAcid';
import LimitedEdition from './components/LimitedEdition';
import Niacinamide from './components/Niacinamide';
import OurStory from './components/OurStrory';
import PreOrderBenifits from './components/PreOrderBenifits';
import ProductContent from './components/ProductContent';
import RoseHipSeedOil from './components/RoseHipSeedOil';
import ShopNow from './components/ShopNow';
import SodiumAscorbylPhosphate from './components/SodiumAscorbylPhosphate';
import SupriceGift from './components/SupriceGift';
import TrenaxamicAcid from './components/TrenaxamicAcid';
import VitaminCSerum from './components/VitaminCSerum';
import SplashScreen from './components/SplashScreen';
import image from './assets/iira-hero4.png'


const FloatingPreOrder = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center justify-center">
      <div className="relative w-24 h-24 transform transition-transform duration-300 hover:scale-110">
        {/* Spinning Border around Image */}
        <div className="absolute inset-0 border-4 border-red-500 rounded-full spin-border"></div>

        {/* Image Component */}
        <div className="border rounded-full">
          <img src={image} alt="Pre-Order" className="w-24 h-24 bg-orange-300 border rounded-full" />
        </div>
      </div>
      {/* Text below the image */}
      <p className="text-red-500 mt-2">Pre-order now</p>
    </div>
  );
};




function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  const handleCloseSplash = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onClose={handleCloseSplash} />}
      {!showSplash && (
        <>
          <ShopNow />
          <ProductContent />
          <SodiumAscorbylPhosphate />
          <Niacinamide />
          <RoseHipSeedOil />
          <TrenaxamicAcid />
          <Bakuchiol />
          <HyaluronicAcid />
          <AlphaArbutin />
          <OurStory />
          <VitaminCSerum />
          <PreOrderBenifits />
          <Discount />
          <LimitedEdition />
          <SupriceGift />
          <FreeShipping />
          <DontMissOut />
          
          {/* Add the floating Pre-Order component */}
          <FloatingPreOrder />
        </>
      )}
    </>
  );
}

export default App;
