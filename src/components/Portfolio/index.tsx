import React, { useEffect, useState } from "react";
const Plant = require("../../assets/Plant.jpg");
const Starbuck = require("../../assets/Starbuck.png");
const Portfolio = () => {
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
    <div
      className={`bg-black text-white py-10 transition-opacity opacity-0 duration-1000 delay-300 ease-in-out ${
        scrollTop ? "opacity-100" : " opacity-0 ease-out"
      }`}
    >
      <h1 className="uppercase text-center text-5xl font-extrabold pb-16 "></h1>
      <div>
        <section className="overflow-hidden text-gray-700 py-10 ">
          <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2 hover:scale-125 ease-in duration-500">
                  <a href="https://roxannekelly.github.io/InteriorDesign/">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={Plant}
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap w-1/3 hover:scale-125 ease-in duration-500">
                <div className="w-full p-1 md:p-2">
                  <a href="https://roxannekelly.github.io/portfolio/Starbuck%20Clone/index.html">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={Starbuck}
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap w-1/3 hover:scale-125 ease-in duration-500">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
