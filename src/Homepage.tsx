import React from "react";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
import Portolio from "./components/Portfolio/index";

const Homepage = () => {
  return (
    <div>
      <Header />
      <About />
      <Portolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
