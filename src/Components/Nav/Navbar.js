import '../Nav/Navbar.css'

const Navbar = () => {
    return (
        <div className="mainNav">
            <a href="#home" className="logo"><h1>G.</h1></a>
            <ul className='navItems'>
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#services"><li>Services</li></a>
                <a href="#barbers"><li>Barbers</li></a>
                
            </ul>
        </div>
    )
}

export default Navbar
