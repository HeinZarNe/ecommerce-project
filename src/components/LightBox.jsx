import React, { useState } from "react";

const LightBox = ({ on }) => {
  const [currentId, setCurrentId] = useState(0);

  const images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
  ];

  return (
    <div className="hidden top-0 left-0 md_flex fixed z-[10000] w-screen h-screen overflow-hidden justify-center items-center bg-black bg-opacity-70">
      <div className="w-[500px]">
        <div
          onClick={(_) => on(false)}
          className="w-full mb-3 flex justify-end"
        >
          <img src="./images/icon-close.svg" className="" alt="/" />
        </div>
        <img
          className="w-full h-[400px] md_rounded-xl"
          src={images[currentId]}
          alt="product"
        />
        <div className="hidden w-full py-3 justify-between items-center md_flex">
          {images.map((image, i) => (
            <div
              key={i}
              className={` ${
                currentId === i ? "border-2 border-orange " : ""
              } rounded-lg w-[20%]`}
              onClick={(_) => setCurrentId(i)}
            >
              <img
                className={`${
                  currentId === i ? " opacity-40" : ""
                } w-full h-[80px] rounded-lg  `}
                src={images[i]}
                alt="product"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LightBox;
