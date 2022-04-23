import '../Nav/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="mainNav">
            
            <a href="#home" className="logo"><h1>G.</h1></a>
            <ul className='navItems'>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/register"><li>Signup</li></Link>
                
                <Link to="/schedule"><li>Staff</li></Link>
                <Link to="/book"><li>Book</li></Link>
                <Link to="/"><li>Home</li></Link>
                <a href="#about"><li>About</li></a>
                <a href="#services"><li>Services</li></a>
                <a href="#barbers"><li>Barbers</li></a>
            </ul>
        <Link to='/book'><p>Book</p></Link>
        </div>
    )
}

export default Navbar
