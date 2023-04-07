import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CartIcon from "../assets/icon-cart";
import { actions } from "../store";

const Description = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="p-5 md_w-[50%] md_p-[50px] md_py-[100px]  ">
      <h3 className="text-orange mb-3 font-bold text-sm ">SNEAKER COMPANY</h3>
      <h1 className="font-bold text-3xl mb-3">Fall Limited Edition Sneakers</h1>
      <p className="text-sm mb-4 text-darkgrayblue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center ">
          <p className="font-bold text-3xl mr-5">$125.00</p>
          <div className="text-orange p-1 px-2 bg-paleorange text-lg font-bold rounded-md">
            50%
          </div>
        </div>
        <p className="text-lg text-gray_blue line-through font-bold ">
          $250.00
        </p>
      </div>
      <div className=" mb-3 flex justify-between items-center bg-lightgrayblue w-full p-3 rounded-md">
        <img
          src="./images/icon-minus.svg"
          alt=""
          className="cursor-pointer hover_bg-opacity-70"
          onClick={(_) => quantity > 0 && setQuantity(quantity - 1)}
        />
        <span className="font-bold">{quantity}</span>
        <img
          src="./images/icon-plus.svg"
          className="cursor-pointer hover_bg-opacity-70"
          alt=""
          onClick={(_) => setQuantity(quantity + 1)}
        />
      </div>
      <div
        className={
          quantity === 0
            ? "bg-darkgrayblue flex items-center justify-center w-full rounded-md py-3 cursor-default"
            : "bg-orange flex  hover_bg-opacity-70 items-center justify-center w-full rounded-md py-3 cursor-pointer"
        }
        onClick={(_) => dispatch(actions.update(quantity))}
      >
        <CartIcon />
        <span className="font-bold text-lg text-white ml-3 cursor-pointer">
          Add to cart
        </span>
      </div>
    </div>
  );
};

export default Description;
