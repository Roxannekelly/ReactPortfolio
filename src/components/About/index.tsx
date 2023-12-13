import React, { useEffect, useState, useRef, ChangeEvent } from "react";
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
    <div className="border-4 bg-black text-white  border-red-700">
      <div
        className={`my-4 border-4 mx-6 transition-opacity opacity-0 duration-1000 delay-300 ease-in-out ${
          scrollTop
            ? "opacity-100 border-4 border-green-700"
            : " opacity-0 ease-out"
        }`}
      >
        <div className="py-4">
          <h1 className="uppercase text-7xl font-extrabold pb-16 ">
            Hello <span className="block">I'm Roxanne</span>
          </h1>
        </div>
        <div className=" flex flex-row text-4xl justify-around">
          <p>
            I USE MY PASSION AND SKILLS TO CREATE AMAZING DIGITAL PRODUCTS AND
            EXPERIENCES. i HAVE WORKED WITH COMPANYNATIONAL AND INTERNATIONAL CUSTOMERS RELY ON ME FOR
            DESIGN, IMPLEMENTATION, AND MANAGEMENT OF THEIR DIGITAL PRODUCTS.
          </p>
        </div>
        <div className="flex justify-center py-4 my-10">
          <a href={Resume}>
            <button className="block px-8 h-16 py-4 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              {" "}
              Download CV{" "}
            </button>
          </a>
        </div>
        <div className="py-4 ">
          <h1 className="uppercase text-xl font-bold text-center">Languages</h1>
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
            <span className="uppercase text-lg font-semibold"> Javascript</span>
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
            <span className="uppercase text-lg font-semibold"> Tailwind Css</span>
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
        <div className="lg:flex">
          {/* <div className="">
            <h1 className="uppercase text-2xl font-bold text-center">
              Education
            </h1>
            <div className="ml-4">
              <div className="mb-8">
                <h1 className="bg-black rounded-full w-44 text-center font-bold text-white ">
                  {" "}
                  Sept 2008 - July 2013
                </h1>
                <h1 className="uppercase py-2 font-bold text-lg">
                  Norman Manley High School
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit
                </p>
              </div>
              <div className="mb-8">
                <h1 className="bg-black rounded-full w-44 text-center font-bold text-white ">
                  {" "}
                  Sept 2013 - July 2015
                </h1>
                <h1 className="uppercase py-2 font-bold text-lg">
                  St. Andrew Technical High School
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit
                </p>
              </div>
              <div className="mb-8">
                <h1 className="bg-black rounded-full w-44 text-center font-bold text-white ">
                  {" "}
                  July 2017 - Dec 2017
                </h1>
                <h1 className="uppercase py-2 font-bold text-lg">
                  Vector Technology Institute
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="">
            <h1 className="uppercase text-2xl font-bold text-center">
              Experience
            </h1>
            <div className="ml-4">
              <div className=" mb-8">
                <h1 className="bg-black rounded-full w-44 text-center font-bold text-white ">
                  {" "}
                  Jan 2017 - Sept 2022
                </h1>
                <h1 className="uppercase py-2 font-bold text-lg">
                  Graphic Designer
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit
                </p>
              </div>
              <div className=" mb-8">
                <h1 className="bg-black rounded-full w-44 text-center font-bold text-white ">
                  {" "}
                  Mar 2016 - present
                </h1>
                <h1 className="uppercase py-2 font-bold text-lg">
                  Record Officer
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit
                </p>
              </div>
              <div className=" mb-8">
                <h1 className="bg-black rounded-full w-44 text-center font-bold text-white ">
                  {" "}
                  Jul 2021 - Aug 2021
                </h1>
                <h1 className="uppercase py-2 font-bold text-lg">
                  Graphic Design Intern
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit
                </p>
              </div>
              <div className=" mb-8">
                <h1 className="bg-black rounded-full w-44 text-center font-bold text-white ">
                  {" "}
                  Mar 2022 - Sept 2022
                </h1>
                <h1 className="uppercase py-2 font-bold text-lg">
                  Security Intern
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
