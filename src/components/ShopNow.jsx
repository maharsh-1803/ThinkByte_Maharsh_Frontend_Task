import image13 from "../assets/13.jpg";

const ShopNow = () => {
  return (
    <div className="relative flex justify-center items-center mt-[2vh]">
      <div className="relative w-[95vw] h-[98vh] rounded-[2rem]">
        <img
          src={image13}
          alt="Shop Now"
          className="w-full h-[98vh] object-cover border rounded-[2rem]"
        />
        {/* Light grey overlay */}
        <div className="absolute inset-0 bg-gray-700 opacity-20 z-10 rounded-[2rem]"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-end px-8 pb-8 text-left z-20">
          <h1 className="font-human-sans text-white text-6xl font-semibold mb-4 leading-tight">
            Glow Brighter with Our
            <br /> Hyper C Serum
          </h1>
          <p className="text-white text-lg mb-8">
            Discover the secret to radiant, youthful skin with our expertly{" "}
            <br /> formulated Hyper C Serum.
          </p>
          <button className="bg-white text-orange-500 font-bold px-6 py-3 rounded-lg border-7 border-orange-500 transition-all duration-300 ease-in-out hover:border-1">
  Shop Now
</button>

        </div>
      </div>
    </div>
  );
};

export default ShopNow;
