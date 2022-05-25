import React from "react";
import "../Services/Services.css";


const Services = ({setOpen, open}) => {


  return (
    <div className="servicesMain" id="services">
      <h1 className="servicesTitle">Services</h1>
      <div className="servicesBox">
        <div className="services">
          <h2>Haircut</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <i>Starting at $25</i>
         <div className='btnAlign'> <button onClick={() => setOpen(!open)}>Book Now</button></div>
        </div>
        <div className="services">
          <h2>Styling</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <i>Starting at $25</i>
          <div className='btnAlign'><button onClick={() => setOpen(!open)}>Book Now</button></div>
        </div>
        <div className="services">
          <h2>Skin Fade</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <i>Starting at $25</i>
          <div className='btnAlign'><button onClick={() => setOpen(!open)}>Book Now</button></div>
        </div>
        <div className="services">
          <h2>Beard Trim</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <i>Starting at $25</i>
          <div className='btnAlign'><button onClick={() => setOpen(!open)}>Book Now</button></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
