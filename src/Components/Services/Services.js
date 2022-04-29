import React, {useState} from "react";
import "../Services/Services.css";
import Book from '../Booking/Book'

const Services = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open)
  }

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
          <button onClick={handleClick}>Book Now</button>
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
          <button>Book Now</button>
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
          <button>Book Now</button>
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
          <button>Book Now</button>
        </div>
        {open && <div className='book'><Book /></div>}
      </div>
    </div>
  );
};

export default Services;
