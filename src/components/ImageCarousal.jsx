import React, { useState } from "react";
import LightBox from "./LightBox";

const ImageCarousal = () => {
  const [currentId, setCurrentId] = useState(0);
  const [on, setOn] = useState(false);

  const images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
  ];
  return (
    <div className="md_p-10 md_w-[50%] ">
      <div className={`${!on ? "md_hidden " : ""}`}>
        <LightBox on={setOn} />
      </div>
      <img
        className="w-full h-[400px] md_rounded-xl"
        src={images[currentId]}
        alt="product"
        onClick={(_) => setOn(true)}
      />
      <div className="hidden w-full py-5 justify-between items-center md_flex">
        {images.map((image, i) => (
          <div
            key={i}
            className={` ${
              currentId == i ? "border-2 border-orange " : ""
            } rounded-lg w-[20%]`}
            onClick={(_) => setCurrentId(i)}
          >
            <img
              className={`${
                currentId == i ? " opacity-40" : ""
              } w-full h-[80px] rounded-lg  `}
              src={images[i]}
              alt="product"
            />
          </div>
        ))}
      </div>
      <div
        className="absolute top-[45%] flex items-center  justify-center left-8 pl-3 pr-3 py-3 bg-white
    rounded-[50%] md_hidden"
        onClick={(_) => currentId > 0 && setCurrentId(currentId - 1)}
      >
        <img src="./images/icon-previous.svg" alt="icon" />
      </div>
      <div
        className="absolute top-[45%] flex items-center  justify-center right-8 pl-3 pr-3 py-3 bg-white
    rounded-[50%] md_hidden"
        onClick={(_) => currentId != 3 && setCurrentId(currentId + 1)}
      >
        <img src="./images/icon-next.svg" alt="icon" />
      </div>
    </div>
  );
};

export default ImageCarousal;
