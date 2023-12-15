import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import Portfolio from "../Portfolio";
const Resume = require("../../assets/Resume.pdf");

const About = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" bg-black text-white py-10">
      <div
        className={`bg-black text-white py-10 mx-6 transition-opacity opacity-0 duration-1000 delay-300 ease-in-out ${
          scrollTop ? "opacity-100" : " opacity-0 ease-out"
        }`}
      >
        <div className="lg:flex justify-evenly lg:mx-20">
          <div className="">
            <div className="py-4">
              <h1 className="uppercase text-5xl font-extrabold pb-16 ">
                Hello <span className="block">I'm Roxanne</span>
              </h1>
            </div>
            <div className="flex flex-row text-xl justify-around uppercase">
              <p>
                I USE MY PASSION AND SKILLS TO CREATE AMAZING DIGITAL PRODUCTS
                AND SOFTWARE DEVELOPMENT. I HAVE WORKED AND INTERN WITH SEVERAL
                COMPANIES LOCALLY BOTH IN DEVELOPMENT AND DESIGN IN BRING
                CREATIVE PRODUCTS TO LIFE.
              </p>
            </div>
            <div className="flex justify-center py-4 my-10">
              <a href={Resume}>
                <button className="block px-8 h-16 py-4 bg-slate-700  text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  {" "}
                  Download CV{" "}
                </button>
              </a>
            </div>
          </div>

          <div className="py-4 w-full ">
            <h1 className="uppercase text-xl font-bold text-center">
              Languages
            </h1>
            <div className="pl-4">
              <div className="w-full bg-gray-200 rounded-full my-5">
                <div
                  className="bg-blue-800 h-8 text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                  style={{ width: "90%" }}
                >
                  {" "}
                  90%
                </div>
              </div>
              <span className="uppercase text-lg font-semibold"> HTML</span>
            </div>
            <div className="pl-4">
              <div className="w-full bg-gray-200 rounded-full my-5">
                <div
                  className="bg-blue-800 h-8 text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                  style={{ width: "75%" }}
                >
                  {" "}
                  75%
                </div>
              </div>
              <span className="uppercase text-lg font-semibold">
                {" "}
                Javascript
              </span>
            </div>
            <div className="pl-4">
              <div className="w-full bg-gray-200 rounded-full my-5">
                <div
                  className="bg-blue-800 h-8 text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                  style={{ width: "90%" }}
                >
                  {" "}
                  90%
                </div>
              </div>
              <span className="uppercase text-lg font-semibold"> css</span>
            </div>
            <div className="pl-4">
              <div className="w-full bg-gray-200 rounded-full my-5">
                <div
                  className="bg-blue-800 h-8 text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                  style={{ width: "60%" }}
                >
                  {" "}
                  60%
                </div>
              </div>
              <span className="uppercase text-lg font-semibold"> React</span>
            </div>
            <div className="pl-4">
              <div className="w-full bg-gray-200 rounded-full my-5">
                <div
                  className="bg-blue-800 h-8 text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                  style={{ width: "50%" }}
                >
                  {" "}
                  50%
                </div>
              </div>
              <span className="uppercase text-lg font-semibold">
                {" "}
                Tailwind Css
              </span>
            </div>
            <div className="pl-4">
              <div className="w-full bg-gray-200 rounded-full my-5">
                <div
                  className="bg-blue-800 h-8 text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                  style={{ width: "50%" }}
                >
                  {" "}
                  50%
                </div>
              </div>
              <span className="uppercase text-lg font-semibold"> Python</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
