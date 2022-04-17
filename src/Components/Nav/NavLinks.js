import React from 'react'

function NavLinks(props) {
    return (
        <div>
            <div className="mainNav">
                <a href="#home" className="logo"><h1>G.</h1></a>
                <ul className='navItems'>
                    <a href="#home"><li onClick={() => props.isMobile && props.closeMobileMenu()}>Home</li></a>
                    <a href="#about"><li onClick={() => props.isMobile && props.closeMobileMenu()}>About</li></a>
                    <a href="#services"><li onClick={() => props.isMobile && props.closeMobileMenu()}>Services</li></a>
                    <a href="#barbers"><li onClick={() => props.isMobile && props.closeMobileMenu()}>Barbers</li></a>

                </ul>
            </div>
        </div>
    )
}

export default NavLinks
