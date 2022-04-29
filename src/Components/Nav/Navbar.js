import "../Nav/Navbar.css";
import { Link } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useState } from 'react'
import Account from "./Account";

const Navbar = ({sessionToken}) => {
    const [open, setOpen] = useState(false);

  return (
    <div className="mainNav">
      <a href="#home" className="logo">
        <h1>B</h1>
      </a>
      <ul className="navItems">
        <Link to="/">
          <li>Home</li>
        </Link>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#services">
          <li>Services</li>
        </a>
        <a href="#barbers">
          <li>Barbers</li>
        </a>
     <RiAccountCircleLine onClick={() => setOpen(!open)} className="account" size={35} />
     {!open ?  <AiFillCaretDown  onClick={() => setOpen(!open)} className='downCaret'/> : null}
     {open ? <AiFillCaretUp onClick={() => setOpen(!open)} className='upCaret' /> : null }
        {open && <Account sessionToken={sessionToken} setOpen={setOpen} open={open}/>}
      </ul>
    </div>
  );
};

export default Navbar;
