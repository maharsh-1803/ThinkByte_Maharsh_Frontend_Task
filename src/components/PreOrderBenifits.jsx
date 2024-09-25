import image1 from '../assets/OfferAndBenifit.png';

const PreOrderBenifits = () => {
  return (
    <div className="relative h-screen w-full">
      <img src={image1} alt="Exclusive Pre-Order Benefits" className="h-full w-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center p-4"> 
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center"> 
          Exclusive Pre-Order Benefits
        </h1>
      </div>
    </div>
  );
};

export default PreOrderBenifits;
