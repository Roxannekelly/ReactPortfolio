import React, { useEffect, useState } from "react";
import About from "../About";
import NavBar from "./Nav";


const Header = () => {
 
  return (
    <div className="w-full lg:flex mt-20 border-4 border-red-700"
    >
      <NavBar />
      <div className="flex h-screen w-full text-gray-50 scroll-smooth">
        <div className="flex-1 bg-hero bg-cover bg-center bg-no-repeat">
          <div className="px-2 space-y-9  lg:flex lg:py-10 lg:justify-center">
            <div className="py-6">
              <h1 className="uppercase font-bold text-5xl lg:text-[8rem]">
                Designer/<span className="block">Developer</span>
              </h1>
            </div>
            <div className="lg:px-36 lg:pt-20 text-left">
              <p className="pb-6 text-left text-xl lg:text-3xl lg:leading-tight font-medium leading-normal">
                {" "}
                I AM A REACT DEVELOPER AND GRAPHIC DESIGNER BASED IN JAMAICA. I
                HAVE ONE YEAR OF EXPERIENCE IN CRAFTING CLEAN & USER-FRIENDLY
                ALL AREAS OF DIGITAL. I LOVE MINIMAL AND BRUTALIST DESIGN. I
                LOVE NATURE, MUSIC AND I AM PASSIONATE ABOUT BUILDING CREATIVE
                DESIGNS.
              </p>
              <div className="flex justify-end py-4 px-2">
                <button className="inline-block h-16 px-8 py-4 bg-slate-700 text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  {" "}
                  More About me{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
