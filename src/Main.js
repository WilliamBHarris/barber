import React from "react";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Barbers from "./Components/Barbers/Barbers";
import Navbar from "./Components/Nav/Navbar";
import Showcase from "./Components/Showcase/Showcase";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Showcase />
      <About />
      <Services />
      <Barbers />
    </div>
  );
};

export default Main;
