import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portolio from "./components/Portfolio";

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
