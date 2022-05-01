import React from "react";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Barbers from "./Components/Barbers/Barbers";
import Showcase from "./Components/Showcase/Showcase";

const Main = ({open, setOpen}) => {
  return (
    <div>
      <Showcase />
      <About />
      <Services setOpen={setOpen} open={open} />
      <Barbers setOpen={setOpen} open={open} />
    </div>
  );
};

export default Main;
