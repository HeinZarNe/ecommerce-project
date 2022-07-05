import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const NavBar = () => {
  const [menuOn, setMenuOn] = useState(false);
  const [cartOn, setCartOn] = useState(false);
  const cart = useSelector((store) => store.quantity);

  return (
    <>
      <div className="flex  justify-between p-5   md_border-b-2 md_border-b-gray_blue md_py-9 md_px-0 items-center w-100vw ">
        <div className="flex justify-start items-center w-[180px]">
          <img
            src="./images/icon-menu.svg"
            className="cursor-pointer mr-3 md_hidden"
            alt="menu"
            onClick={(_) => setMenuOn(!menuOn)}
          />
          <img src="./images/logo.svg" alt="logo" className=" " />
          <div className="hidden justify-center items-center ml-16 md_flex">
            <span className="mx-5 text-darkgrayblue text-sm hover_border-2 hover_border-t-0 hover_border-l-0 hover_border-r-0 hover_border-b-orange">
              Collections
            </span>
            <span className="mx-5 text-darkgrayblue text-sm hover_border-2 hover_border-t-0 hover_border-l-0 hover_border-r-0 hover_border-b-orange">
              Men
            </span>
            <span className="mx-5 text-darkgrayblue text-sm hover_border-2 hover_border-t-0 hover_border-l-0 hover_border-r-0 hover_border-b-orange">
              Women
            </span>
            <span className="mx-5 text-darkgrayblue text-sm hover_border-2 hover_border-t-0 hover_border-l-0 hover_border-r-0 hover_border-b-orange">
              About
            </span>
            <span className="mx-5 text-darkgrayblue text-sm hover_border-2 hover_border-t-0 hover_border-l-0 hover_border-r-0 hover_border-b-orange">
              Contact
            </span>
          </div>
        </div>

        <div className="flex justify-end items-center w-[100px] ">
          <div className="relative">
            <img
              className="cursor-pointer "
              src="./images/icon-cart.svg"
              alt="cart"
              onClick={(_) => setCartOn(!cartOn)}
            />
            {cart > 0 && (
              <span className="absolute top-[-10px] left-[10px] flex items-center justify-center px-2 py-1 mr-2 text-[10px] font-bold leading-none text-white bg-orange rounded-full">
                {cart}
              </span>
            )}
          </div>
          <img
            className=" w-7  ml-3 hover_border-2 hover_border-spacing-2  rounded-full hover_border-orange md_w-9"
            src="./images/image-avatar.png"
            alt="avatar"
          />
        </div>
      </div>
      <div
        className={`${
          !menuOn ? " left-[-100%] " : "  left-0 "
        }fixed top-0 h-screen w-screen flex justify-start items-center  ease-in-out transition-all duration-[700ms] z-[101] "`}
      >
        <div className=" w-[70%] h-full bg-white p-8">
          <div>
            <img
              src="./images/icon-close.svg"
              className="w-4 mb-3 cursor-pointer"
              alt="close"
              onClick={(_) => setMenuOn(!menuOn)}
            />
          </div>
          <ul className="mt-10">
            <li className="font-bold my-3 text-lg ">Collections</li>
            <li className="font-bold my-3  text-lg ">Men</li>
            <li className="font-bold my-3  text-lg ">Women</li>
            <li className="font-bold my-3  text-lg ">About</li>
            <li className="font-bold my-3  text-lg ">Contact</li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          !menuOn ? "hidden  bg-opacity-0 " : "bg-opacity-70 "
        } z-[100] w-screen h-screen fixed  top-0 bg-black duration-[800ms] transition ease-in  `}
      ></div>
      {cartOn && <Cart />}
    </>
  );
};

export default NavBar;
