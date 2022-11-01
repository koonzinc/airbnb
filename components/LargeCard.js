import React from "react";
import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative min-h-96 min-w-[300px]">
        <Image
          layout="fill"
          src={img}
          width={6000}
          height={2000}
          alt="#"
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="absolute top-24 left-8 md:top-32 md:left-12">
        <h3 className="text-2xl md:text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
