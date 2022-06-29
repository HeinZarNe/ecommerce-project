import React from "react";
import CartIcon from "../assets/icon-cart";


const Description = () => {
  return (
    <div className="p-5">
      <h3 className="text-orange mb-3 font-bold text-sm ">SNEAKER COMPANY</h3>
      <h1 className="font-bold text-3xl mb-3">Fall Limited Edition Sneakers</h1>
      <p className="text-sm mb-4 text-dark_gray_blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center ">
          <p className="font-bold text-3xl mr-5">$125.00</p>
          <div className="text-orange p-1 px-2 bg-pale_orange text-lg font-bold rounded-md">
            50%
          </div>
        </div>
        <p className="text-lg text-gray_blue line-through font-bold ">$250.00</p>
      </div>
      <div className=" mb-3 flex justify-between items-center bg-light_gray_blue w-full p-3 rounded-md">
        <img src="./images/icon-minus.svg" alt="" />
        <span className="font-bold">0</span>
        <img src="./images/icon-plus.svg" alt="" />
      </div>
<div className="flex bg-orange items-center justify-center w-full rounded-md py-3">
    <CartIcon/>
<span className="font-bold text-lg text-white ml-3">Add to cart</span>
</div>
    </div>
  );
};

export default Description;
