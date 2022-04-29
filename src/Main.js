import React from "react";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Barbers from "./Components/Barbers/Barbers";
import Showcase from "./Components/Showcase/Showcase";

const Main = () => {
  return (
    <div>
      <Showcase />
      <About />
      <Services />
      <Barbers />
    </div>
  );
};

export default Main;
