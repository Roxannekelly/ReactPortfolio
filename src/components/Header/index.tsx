import React from "react";
import About from "../About";
const logo = require("../../assets/Kelly.jpg");


const Header = () => {
  return (
    <div className="lg:flex">
      <div className="lg:pr-32">
        <img
          src={logo}
          className=" my-4 block mx-auto w-56 h-60 rounded-full lg:mx-16 lg:w-96 lg:h-96"
        />
      </div>
      <div className="">
        <div className="py-4">
          <h1 className="uppercase text-center font-extrabold text-4xl">
            I'm Roxanne Kelly
          </h1>
          <h1 className="uppercase text-center font-extrabold text-3xl">
            Frontend Developer
          </h1>
        </div>
        <div className="lg:mx-36">
          <p className="text-center pb-6">
            I'm a Jamaican based React Developer & front‑end developer focused
            on crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
        </div>
        <div className="flex justify-center py-4">
          <button className="inline-block  px-8 py-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            {" "}
            More About me{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
