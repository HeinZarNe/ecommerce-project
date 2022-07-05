import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store";

const Cart = () => {
  const quantity = useSelector((store) => store.quantity);
  const dispatch = useDispatch();
  return (
    <div className="absolute p-2 top-[64px] z-[99] right-[90px] md_w-[30%] w-screen">
      <div className="bg-white rounded-lg flex items-center flex-col">
        <span className="text-black text-xl font-bold p-6 w-full border-b-2 border-b-grayblue  ">
          Cart
        </span>
        {quantity > 0 ? (
          <>
            {" "}
            <div className="p-6 w-full flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="./images/image-product-1.jpg"
                  className=" w-12 h-12 rounded-lg mr-3 "
                  alt="product"
                />
                <div className="flex flex-col items-start text-darkgrayblue text-lg ">
                  <span>Autumn LImited Edition...</span>
                  <span>
                    $125.00 x {quantity}
                    <span className="font-bold ml-3 text-black">
                      ${quantity * 125}
                    </span>
                  </span>
                </div>
              </div>
              <img
                src="./images/icon-delete.svg"
                alt="/"
                onClick={(_) => dispatch(actions.delete())}
              />
            </div>
            <div className="pt-0 p-6 w-full">
              <button
                className="bg-orange w-full rounded-lg text-center py-4 font-bold text-white text-lg
            "
              >
                Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="w-full h-[188px] flex justify-center items-center text-darkgrayblue text-base font-bold">
            Your cart is empty.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
