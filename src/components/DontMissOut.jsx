import image1 from "../assets/BackGround.png";
const DontMissOut = () => {
  return (
    <div
      className="relative h-[70vh] bg-cover bg-fixed flex "
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="bg-opacity-50 p-8 rounded-lg max-w-md w-full mt-[15vh] ml-[2rem]">
        <h2 className="text-3xl font-light text-white">Don't Miss Out</h2>
        <p className="mt-4 text-white text-xl font-semibold">Pre-order Today to Unlock Benefits</p>
        <div className="mt-6 flex">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border placeholder-white border-white bg-transparent rounded-l-lg focus:outline-none focus:ring-2"
            style={{ borderWidth: "2px" }} // Setting the border width to 2px
          />
          <button className="px-6 py-2 border-2 border-white text-white font-semibold rounded-r-lg bg-transparent">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default DontMissOut;
