import React, { useState } from "react";

const NavBar = () => {
  const [on, setOn] = useState(false);

  return (
    <div>
      <div className="flex justify-between p-5 items-center w-100vw">
        <div className="flex justify-around items-center w-[180px]">
          <img
            src="./images/icon-menu.svg"
            className="cursor-pointer"
            alt="menu"
            onClick={(_) => setOn(!on)}
          />
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <div className="flex justify-around items-center w-[100px] p-3">
          <img src="./images/icon-cart.svg" alt="cart" />
          <img className="w-6" src="./images/image-avatar.png" alt="avatar" />
        </div>
      </div>
      <div
        className={`${
          !on ? " left-[-100%] " : "  left-0 "
        }fixed top-0 h-screen w-screen flex justify-start items-center  ease-in-out transition-all duration-[700ms] z-10 "`}
      >
        <div className=" w-[70%] h-full bg-white p-8">
          <div>
            <img
              src="./images/icon-close.svg"
              className="w-4 mb-3 cursor-pointer"
              alt="close"
              onClick={(_) => setOn(!on)}
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
          !on ? "z-[-25]  bg-opacity-0 " : "bg-opacity-70 "
        } z-[1] w-screen h-screen fixed  top-0 bg-black duration-[800ms] transition ease-in  `}
      ></div>
    </div>
  );
};

export default NavBar;
