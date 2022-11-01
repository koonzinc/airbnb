import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://images.squarespace-cdn.com/content/v1/572625bee707eb7c1fd6a5eb/1614096661575-7X13CDWQ0YLN6XYNHVEW/44-45_FINAL5_BIG.jpg?format=2500w"
        width="1772"
        height="1010"
        alt="#"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>

        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          Im flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
