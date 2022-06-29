import React, { useState } from "react";

const ImageCarousal = () => {
  const [currentId, setCurrentId] = useState(0);

  const images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
  ];

  return (
    <div className="relative w-screen md:w-[50%]  ">
      <img
        className="w-full md:max-w-[380px] h-[400px]  md:rounded-xl"
        src={images[currentId]}
        alt="product"
      />
      <div
        className="absolute top-[45%] flex items-center  justify-center left-11 pl-3 pr-3 py-3 bg-white
    rounded-[50%] "
    onClick={_=>currentId>0 && setCurrentId(currentId-1)}
      >
        <img src="./images/icon-previous.svg" alt="icon" />
      </div>
      <div
        className="absolute top-[45%] flex items-center  justify-center right-11 pl-3 pr-3 py-3 bg-white
    rounded-[50%] "
    onClick={_=>currentId !=3  && setCurrentId(currentId+1)}
      >
        <img src="./images/icon-next.svg" alt="icon" />
      </div>
    </div>
  );
};

export default ImageCarousal;
