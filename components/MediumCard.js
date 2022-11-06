import React from "react";
import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image
          className="w-full h-full object-cover rounded-xl"
          src={img}
          width={1152}
          alt="#"
          height={1151}
        />
      </div>
      <h3 className="text-2xl mt-3 ">{title}</h3>
    </div>
  );
};

export default MediumCard;
